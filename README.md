# Quick Favicons

This is a super simple webpack runner that creates all required favicons for a project and zips it up.

Best case scenario, you'd just build the webpack favicon plugin into a larger project, but I had some use cases where I just needed a zip file of my favicon/s to send to a 3rd party.

This repository contains:

1. yarn.lock file to install dependencies ([zip-webpack-plugin](https://yarnpkg.com/en/package/zip-webpack-plugin), [webpack-cli](https://yarnpkg.com/en/package/webpack-cli), [webpack](https://yarnpkg.com/en/package/webpack), [html-webpack-plugin](https://yarnpkg.com/en/package/html-webpack-plugin), [favicons-webpack-plugin](https://yarnpkg.com/en/package/favicons-webpack-plugin))
2. simple webpack.config.js file for you to customize as needed
3. standard .gitignore
4. blank index.js (not needed)
5. src directory with dummy favicon

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install

This project uses [node](http://nodejs.org) and [yarn](https://yarnpkg.com/). Go check them out if you don't have them locally installed.

```sh
# Create local project directory
mkdir favicon-project && cd favicon-project
# Clone the repo
git clone git@github.com:lisaross/quick-favicons.git .
# install dependencies
$ yarn install
```

Replace src/favicon.png with your logo

Modify webpack.config.js with options (title, background, etc -- see https://github.com/jantimon/favicons-webpack-plugin for plugin usage)

Example:

```javascript
...
    title: 'Project Name',
    background: "#000",
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
    }
...
```

## Usage

Run webpack script

```sh
npm run build
```

## Maintainers

[@LisaRoss](https://github.com/lisaross).

## Contribute

Feel free to dive in! [Open an issue](https://github.com/lisaross/quick-favicons/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[MIT](LICENSE) © Lisa Ross


[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
