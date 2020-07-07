# https://github.com/microsoft/vscode-eslint/issues/998

* Vscode:
    - Version: 1.45.1 (system setup)
    - Commit: 5763d909d5f12fe19f215cbfdd29a91c0fa9208a
    - Date: 2020-05-14T08:27:35.169Z (1 mo ago)
    - Electron: 7.2.4
    - Chrome: 78.0.3904.130
    - Node.js: 12.8.1
    - V8: 7.8.279.23-electron.0
    - OS: Windows_NT x64 10.0.19041
* vscode-eslint 2.1.6

## Setup
```
yarn install
yarn serve
```

## Lint 
```
yarn eslint src/app.vue
yarn eslint src/main.ts
```


### No linting for .ts files
![Image 1](https://raw.githubusercontent.com/chriswoodle/vscode-eslint-998/master/ts-file-not-linted.png)

From CLI

![Image 2](https://raw.githubusercontent.com/chriswoodle/vscode-eslint-998/master/expected-lint.png)

With VSCode eslint output (debug)

![Image 3](https://raw.githubusercontent.com/chriswoodle/vscode-eslint-998/master/expected-lint-vscode-output.png)

With trace server set to "verbose"
![Image 4](https://raw.githubusercontent.com/chriswoodle/vscode-eslint-998/master/trace-server.png)

### Correct linting for .vue files
![Image 5](https://raw.githubusercontent.com/chriswoodle/vscode-eslint-998/master/vue-sfc-correct-linting.png)

![Image 6](https://raw.githubusercontent.com/chriswoodle/vscode-eslint-998/master/vue-sfc-correct-linting-output.png)