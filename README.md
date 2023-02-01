# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
# vue-boilerplate Structure

## Project Structure
```
project
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── [asset files, such as images, etc.]
│   ├── components
│   │   └── [Vue components, e.g. Button.vue, etc.]
│   ├── views
│   │   └── [Vue views, e.g. Home.vue, etc.]
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── [Vuex store files, e.g. index.js, etc.]
│   ├── api
│   │   └── [API files, e.g. user.js, etc.]
│   ├── utils
│   │   └── [Utility files, e.g. helper.js, etc.]
│   ├── styles
│   │   └── [CSS files, e.g. main.css, etc.]
│   ├── App.vue
│   └── main.js
├── tests
│   └── [test files, e.g. unit tests, etc.]
└── package.json

```


- `public`: contains the index.html file, which is the main template for the application.
- `src`: contains all of the source code for the application.
- `assets`: contains any static assets that are used in the application, such as images.
- `components`: contains individual Vue components that make up the UI.
- `views`: contains Vue views, which are combinations of components that make up the application's pages.
- `router`: contains the Vue Router configuration, which is used to define the application's routes.
- `store`: (optional) contains the Vuex store, which is used to manage the global state of the application.
- `api`: (optional) contains API files that handle communication with a server or external API.
- `utils`: (optional) contains utility files that provide helper functions or reusable code.
- `App.vue`: is the root component of the application.
- `main.js`: is the entry point for the application.
- `tests`: (optional) contains test files that are used to test the application
- `package.json`: contains information about the project and its dependencies.

This is just a basic structure, and it can vary depending on the size and complexity of the project. You can add or remove directories and files based on the needs of your project.



## Conventions

First all, we recommend reading [Official Vue Style Guide](https://vuejs.org/v2/style-guide/), as many rules described there are used here.

### # Multi-word component names

Always try naming Components with multi-word, except for root `App` components, and built-in components provided by Vue, such as `<transition>` or `<component>`.

This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word.

```sh
# Bad

components/
  Todo.vue
```

```sh
# Good

components/
  TodoItem.vue
  TodoList.vue
```

### # Single-file component filename casing

**Filenames of single-file components should be always PascalCase.**

PascalCase works best with autocompletion in code editors, as it’s consistent with how we reference components in JS(X) and templates, wherever possible.

```sh
# Bad

components/
  mycomponent.vue
  myComponent.vue
  my-component.vue
```

```sh
# Good

components/
  MyComponent.vue
```

### # Other files names

Except for `.vue` files, use suffix indicating what resource is in that file. Follow these rules:

- Services: `<Name>.service.ts`, e.g.: `Customizer.service.ts`
- Models: `<Name>.model.ts`
- Store (Vuex): `<Name>.store.ts`

### # Base component names

**Base components (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with `Base` prefix.**

```sh
# Bad

components/
  MyButton.vue
  VueTable.vue
  Icon.vue
```

```sh
# Good

components/
  BaseButton.vue
  BaseTable.vue
  BaseIcon.vue
```

[> Detailed explanation in the Vue Style Guide](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended)

### # Single-instance component names

[> Follow Official Vue Style Guide Rule](https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended)

**Note: This rule also applies to routed components.**

### # Tightly coupled component names

[> Follow Official Vue Style Guide Rule](https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended)

### # Order of words in component names

[> Follow Official Vue Style Guide Rule](https://vuejs.org/v2/style-guide/#Order-of-words-in-component-names-strongly-recommended)

### # Component name casing in templates

**Component names should always be PascalCase in single-file components**

```sh
# Bad

<mycomponent />
<myComponent />
```

```sh
# Good

<Mycomponent />
```

[> Detailed explanation in the Vue Style Guide](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended)

### # Self-closing components

**Components with no content should be self-closing in single-file components, string templates, and JSX - but never in DOM templates.**

```sh
# Bad

<MyComponent></MyComponent>
```

```sh
# Good

<MyComponent />
```

### # Full-word component names

[> Follow Official Vue Style Guide Rule](https://vuejs.org/v2/style-guide/#Full-word-component-names-strongly-recommended)

### # Avoid `v-for` with `v-if`

**Never use `v-if` on the same element as `v-for`.**

There are two common cases where this can be tempting:

- To filter items in a list (e.g. `v-for="user in users" v-if="user.isActive"`). In these cases, replace users with a new computed property that returns your filtered list (e.g. activeUsers).

- To avoid rendering a list if it should be hidden (e.g. `v-for="user in users" v-if="shouldShowUsers"`). In these cases, move the `v-if` to a container element (e.g. ul, ol).

[> Detailed explanation in the Vue Style Guide](https://vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential)