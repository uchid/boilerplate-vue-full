# boilerplate-vue-full

A front boilerplate with Vue, Vuex, TypeScript, atomic design. Most of the boilerplate is generated from vuecli, and add some features.

- divide vuex store into modules
- Vuex with TypeScript(depends on StoreOptions & [vuex-class](https://github.com/ktsn/vuex-class))
- Atomic design(atoms, molecules, organisms, templates)
- add API module and client([axios](https://github.com/axios/axios))
- divide router into routes and others(ex. guards)
- add common stylesheets and global import

# Environment

- yarn
- VueCLI v3~
- Vuejs, VueRouter, Vuex
- TypeScript
- [vuex-class](https://github.com/ktsn/vuex-class))
- sass
- [axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/ja/), ts-jest
- [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)

# Development

```
# set up installation
  git clone
  yarn install          # install dependencies

# script
  yarn run serve      # start up for dev
  yarn run build      # build for production etc.
  yarn run lint       # exec lint with airbib style
  yarn run test:e2e   # test for e2e with nightwatch
  yarn run test:unit  # test for unit with jest

```

# Supplement

## Vuex with Typescript

In this project, for handling vuex with TypeScript environment safely and more easily to use,  
utilize StoreOptions & [vuex-class](https://github.com/ktsn/vuex-class)).  
Mainly, developed based on [this web articles](https://codeburst.io/vuex-and-typescript-3427ba78cfa8),
[vuex-class document](https://github.com/ktsn/vuex-class).
