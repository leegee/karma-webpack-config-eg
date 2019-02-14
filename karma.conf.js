const webpackConfigJs = require('./webpack.config');

module.exports = (config) => {
    config.set({

        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-chai'),
            require('karma-spec-reporter'),
            require('karma-chrome-launcher')
        ],

        frameworks: ['mocha', 'chai'],

        files: [
            { pattern: 'src/*.js' },
            { pattern: 'src/**/*.js' },
            { pattern: 'src/*.mjs' },
            { pattern: 'src/**/*.mjs' },
        ],

        preprocessors: {
            'src/*.js': ['webpack'],
            'src/**/*.js': ['webpack'],
            'src/*.mjs': ['webpack'],
            'src/**/*.mjs': ['webpack'],
        },

        webpack: webpackConfigJs,

        // reporters: ['progress', 'karma-spec-reporter'],

        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: true
    })
}





