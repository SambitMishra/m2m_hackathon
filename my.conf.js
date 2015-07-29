// Karma configuration
// Generated on Wed Jul 29 2015 03:18:59 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
		"C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/jasmine/lib/jasmine-2.3.4/jasmine.js",
		"C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/jasmine/lib/jasmine-html/jasmine.js",
		"C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/jasmine/lib/boot/jasmine.js",
		
		"C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/spec/AppSpec.js"
		
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
