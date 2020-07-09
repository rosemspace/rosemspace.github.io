/* eslint-disable */
export default
function(globalThis, undefined) {
  if (process.server) {
    return;
  }

  'use strict';

  if (!globalThis || !(globalThis instanceof globalThis.Window)) {
    return;
  }

  patchNativeMethods.NATIVE_PREFIX = '__native_';

  function patchNativeMethods(ownerWindow, patchMap, preCallback) {
    for (var targetClass in patchMap) {
      // Do not iterate over a prototype
      if (!patchMap.hasOwnProperty(targetClass)) {
        break;
      }

      var target = ownerWindow[targetClass];

      patchMap[targetClass].forEach(function(methodName) {
        var nativeMethod = target.prototype[methodName];

        // Save the native method to do not lose it
        Object.defineProperty(
          target.prototype,
          patchNativeMethods.NATIVE_PREFIX + methodName,
          {
            value: nativeMethod,
            configurable: true,
            writable: true,
            enumerable: false,
          }
        );
        // Redefine the native method by the custom one
        target.prototype[methodName] = function() {
          // Call the custom pre-callback
          preCallback.apply(this, arguments);
          // Call the native method
          nativeMethod.apply(this, arguments);
        };
      });
    }
  }

  function patchElements(ownerWindow, element, patchCallback, onIframeMounted) {
    // Ignore non-elements
    if (!(element instanceof ownerWindow.Element)) {
      return;
    }

    var iframeCollectionLength = element.tagName === 'IFRAME' ? 1 : 0;
    var iframeCollection = element.getElementsByTagName('iframe');

    iframeCollectionLength += iframeCollection.length;

    for (var index = 0; index < iframeCollectionLength; ++index) {
      // Call as a next microtask when the iframe will be already inserted into
      // the DOM to get the iframe's window
      Promise.resolve().then(function(iframeCollectionLength, index) {
        // Get the last unprocessed iframe window
        var iframeWindow = ownerWindow.frames[
          ownerWindow.frames.length - iframeCollectionLength + index
        ];

        // The iframe already inserted into the DOM
        if (onIframeMounted) {
          onIframeMounted(iframeWindow);
        }

        // Patch iframe elements when content will be loaded
        iframeWindow.addEventListener(
          'DOMContentLoaded',
          function onIframeDOMContentLoaded() {
            patchElements(
              iframeWindow,
              iframeWindow.document.documentElement,
              patchCallback,
              onIframeMounted
            );
            // The event listener should be called only once
            iframeWindow.removeEventListener(
              'DOMContentLoaded',
              onIframeDOMContentLoaded
            );
          }.bind(this)
        );
      }.bind(this, iframeCollectionLength, index));
    }

    // Patch elements
    patchCallback(element);
  }

  function patch(ownerWindow, methodPatchMap, patchCallback) {
    patchNativeMethods(ownerWindow, methodPatchMap, function(element) {
      patchElements(ownerWindow, element, patchCallback, function(ownerWindow) {
        patch(ownerWindow, methodPatchMap, patchCallback);
      });
    });
  }

  // ------------------------- Patch all div elements -------------------------

  function patchDivElement(element) {
    element.setAttribute(
      'style',
      'margin-top: 0.5rem; margin-bottom: 0.5rem; \
        padding-left: 0.5rem; padding-right: 0.5rem; border: solid 1px red;'
    );
  }

  function patchDivElements(element) {
    // Patch the current element
    if (element.tagName.toLowerCase() === 'div') {
      patchDivElement(element);
    }

    // Patch nested elements
    var divCollection = element.getElementsByTagName('div');

    for (var index = 0; index < divCollection.length; ++index) {
      patchDivElement(divCollection[index]);
    }
  }

  patch(
    globalThis,
    {
      Node: [
        'appendChild',
        'insertBefore',
        'replaceChild',
      ],
      Element: [
        'insertAdjacentElement',
        'replaceWith',
        'append',
        'prepend',
        'after',
        'before',
      ],
    },
    patchDivElements
  );
};
