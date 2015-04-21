# AngularJS 2 Sandbox

A very simple sandbox to get your hands dirty with AngularJS 2.0 Alpha.

## Content

This repository contains a snapshot of AngularJS 2.0 (Currently `2.0.0-alpha.20`) as well as SystemJS and the Traceur runtime.

Currently AngularJS 2.0 is relying on AtScript style de-sugaring of meta annotations which is supported in Traceur `0.0.87` under the `annotations` option. This might change in the future depending on TypeScript adoption and / or ES7 progress with meta annotations / decorators.

Runtime type checks are also provided using the AngularJS 2.0 `rtts_assert` assertion module which is configured in Traceur.

This repository is only for demo purpose and for exploring the new AngularJS version. It does not contain any optimizations and the task runner is only there to bootstrap a web server with livereload.

- AngularJS 2.0.0-alpha.20 (ES5 with SystemJS exports)
- Traceur 0.0.87 runtime with ES6 module loader 0.16.5
- SystemJS 0.16.7
- Simple HelloWorld Application
- Simple Gulp script to start Connect with LiveReload

## Usage

After cloning the repository do:
```
cd angular2-sandbox
npm install
grunt
```

Start hacking and enjoy!
