# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 1 Опис проекту

Я вибрав предметну область магазин айфонів і реалізував всі вимоги

## 2 Збірна проекту

Проект був зібраний за допомогою yarn create vite

## 3 API

Щоб не використовувати мокові дані я створив сервер за допомогою json-server і там прописав початкові дані

## 4 Tech stack

TypeScript, React, ReduxToolkit, MUI, Axios, json-server

## 5 Комантарі

Взагальному всі вимоги виконав і одну додаткову (зберігання даних в localStorage), від себе добавив в кошику кнопки + -
для збільшення/зменшення кількості товару, а також підрахунок загальної вартості. З drag and drop ніколи не працював, тому не виконував
це завдання бо мало часу. Також задепоїв репозиторій в github pages
