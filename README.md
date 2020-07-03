# ddap-common-lib

## Working with DDAP application(s) without publishing ddap-common-lib

1. Build and copy assets `npm run prepublish`
2. Change directory to built folder `cd dist/ddap-common-lib/`
3. Link library `npm link`

One-line command: `npm run prepublish && npm link ./dist/ddap-common-lib/`.

Run the following in any project you are using with the library to test changes locally: `npm link ddap-common-lib`.

Don't forget to rerun the steps above when you update library.

## Build

Run `ng build ddap-common-lib` to build the project. The build artifacts will be stored in the `dist/` directory.
