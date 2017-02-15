# gulp-mjml-starter

Clean MJML boilerplate utilizing Gulp and BrowserSync. It simply monitors a specific .mjml file (including includes :yum:) and outputs to a single .html file.

Install
---

```
$ npm i
```

Usage
---

```
$ gulp
```

Before you run Gulp, make sure to setup your local environment in gulpfile.js inside the browserSync task.

Running the command `gulp` in the installed directory will activate the default stream which:
-   Watches over your .mjml files for changes
-   Compiles
-   Updates the browser automatically
