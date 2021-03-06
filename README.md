# grunt-bower-freeze

> Lock the bower.json to exact versions

[![Build Status](https://travis-ci.org/comerge/grunt-bower-freeze.svg?branch=master)](https://travis-ci.org/comerge/grunt-bower-freeze)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bower-freeze --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-freeze');
```

## The "bowerfreeze" task

### Overview
In your project's Gruntfile, add a section named `bowerfreeze` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    bowerfreeze: {
        freeze: {
            src: 'bower.json',
            dest: 'bower-frozen.json'
        }
    }
});
```

### Options

#### options.cwd
Type: `String`
Default value: `'./'`

If set all `src` and `dest` paths will be set relative to `cwd`.

#### options.install
Type: `boolean`
Default value: `false`

Install bower before freezing (only if `options.update = false`).

#### options.update
Type: `boolean`
Default value: `false`

Update bower before freezing. Overrides `options.install`.

### Usage Examples

#### Default Options
In this example, the default options are used to freeze the versions of the bower.json in the current working directory.

```js
grunt.initConfig({
    bowerfreeze: {
        freeze: {
            src: 'bower.json',
            dest: 'bower-frozen.json'
        }
    }
});

```

#### Custom Options
In this example, the default options are used to freeze the versions of the bower.json in the specified `cwd`.
Additionally, all bower dependencies are updated before freezing.

```js
grunt.initConfig({
    bowerfreeze: {
        freeze: {
            options: {
                cwd: 'tmp/default/',
                update: true
            },
            src: 'bower.json',
            dest: 'bower-frozen.json'
        },
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See the [CHANGELOG](CHANGELOG).
