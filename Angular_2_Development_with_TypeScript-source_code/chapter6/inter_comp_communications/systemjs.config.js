System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        'app' : 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular'                    : 'node_modules/@angular'

      },
      packages: {
        'app'                              : {main: './binding/input_property_binding.ts', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'index.js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'},
        '@angular/http'                    : {main: 'index.js'}
      },
    meta: {
        'app/mediator/stock.ts': {
            format: 'es6'
        },
        'app/mediator_on_push/stock.ts': {
            format: 'es6'
        }
    }
});
