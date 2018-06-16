
<h1 align="center">
  <b>Github Project Board Refined</b><br>
</h1>
<img src="https://github.com/falcucci/github-board-refined/blob/master/src/images/icons8-100%25-480.png" align="left" width="300">

[![GitHub license](https://img.shields.io/github/license/falcucci/github-board-refined.svg?style=flat-square)](https://github.com/falcucci/github-board-refined/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/falcucci/github-board-refined.svg?style=flat-square)](https://github.com/falcucci/github-board-refined/issues) 

This is an extension that improves your experience with [github projects](https://help.github.com/articles/about-project-boards/) creating new features, actions and layout enhancements to keep github complet making automatic things for us - just because github it's an awesome tool and needs automation to really works well - also, product owners will thank us. 

After use it for two or three months, me and my team had a great view of what the amazing workflow would be like involving stories, goals and initiatives to achieve our final purpose/value using github projects. Many thoughts about new features to make things easier. We tried other tools as well but you know that the integration is not better then github itself.

## What it shows

* How to bundle [React][react] and any other [NodeJS][nodejs] module into an
  extension.
* How to transpile code that is not supported natively in
  a browser such as
  [import / export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  syntax and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).
* How to continuously build code as you edit files.
* How to customize [web-ext][web-ext] for your extension's specific needs.
* How to structure your code in reusable ES6 modules.

## Usage

First, you need to change into the example subdirectory and install all
[NodeJS][nodejs] dependencies with [npm](http://npmjs.com/) or
[yarn](https://yarnpkg.com/):

    npm install

Start the continuous build process to transpile the code into something that
can run in Firefox or Chrome:

    npm run build

This creates a WebExtension in the `extension` subdirectory.
Any time you edit a file, it will be rebuilt automatically.

In another shell window, run the extension in Firefox using a wrapper
around [web-ext][web-ext]:

    npm start

Any time you edit a file, [web-ext][web-ext] will reload the extension
in Firefox. To see the popup, click the watermelon icon from the browser bar.
Here is what it looks like:

[react]: https://facebook.github.io/react/
[nodejs]: https://nodejs.org/en/
[web-ext]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext

## Icons

The icon for this extension is provided by [icons8](https://icons8.com/).
