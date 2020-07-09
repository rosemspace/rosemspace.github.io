# https://rosem.space

This is the main website of Rosem web packages [hosted on Github Pages](https://rosemspace.github.io).

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Publish on a Custom Domain

You can publish the website on a custom domain [with autogenerated SSL certificate](https://github.community/t5/GitHub-Pages/Do-i-need-SSL-Certificate-for-github-pages/td-p/15671) in 2 ways:
1. [As a `www` subdomain](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) (www.example.com)
2. [As an apex domain](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) (example.com)

The following DNS configuration should be used for your custom domain:

|Type|Name|Data|TTL|
|----|----|----|---|
|A|@|185.199.108.153|1 hour|
|A|@|185.199.109.153|1 hour|
|A|@|185.199.110.153|1 hour|
|A|@|185.199.111.153|1 hour|
|CNAME|www|\<organization\>.github.io.|1 hour|

If you faced with some troubles (no SSL certificate or the site is not loading):
- verify your DNS configuration
    - [the parking A record should be removed](https://github.community/t/certificate-request-error-is-persistent-tls-certificate-cant-be-provisioned/11008)
- remove your custom domain in repository settings and apply it again
- wait some time (up to 24 hours)
- or refer to this [troubleshooting tips](https://help.github.com/en/github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages)

## Deploy

Open the `deploy.sh` file:

1. Update the user name and email used for `git`
2. Update the URL of a GitHub repository

Run the following command:

```shell script
./deploy.sh
```

It will run the `npm run build` command and push forcibly all compiled files in `dist` folder to `master` branch.

## Work in progress

- PWA content updating
- [CI](https://nuxtjs.org/faq/github-pages)
- Shorthand terminologies
    - Shorthand terminology priority
        1. Must know
        2. Good to know
        3. Advanced / complex
        4. Specific (ex: Windows or Unix only)
        5. Old / deprecated
- Unsplash backgrounds
    - https://unsplash.com/@paulfiedler
    - https://source.unsplash.com/collection/317099/photos?page=12&per_page=26&order_by=latest
- Packages documentation