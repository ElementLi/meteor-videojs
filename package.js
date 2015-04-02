Package.describe({
  name:"yong:meteor-videojs",
  summary: "Video.js 4.12.5",
  version: "1.1.0",
  documentation: 'README.md',
  git: " https://github.com/feelsys/meteor-videojs.git "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles([
  	'yong:meteor-videojs.js',
    'video-js/video.js',
    'video-js/video.novtt.js',
  	'video-js/video-js.css',
  	'video-js/video-js.min.css',
  	'video-js/video-js.swf',

    'video-js/font/vjs.eot',
    'video-js/font/vjs.svg',
    'video-js/font/vjs.ttf',
    'video-js/font/vjs.woff',

    'video-js/lang/ar.js',
    'video-js/lang/bg.js',
    'video-js/lang/ca.js',
    'video-js/lang/cs.js',
    'video-js/lang/de.js',
    'video-js/lang/es.js',
    'video-js/lang/fr.js',
    'video-js/lang/hu.js',
    'video-js/lang/it.js',
    'video-js/lang/ja.js',
    'video-js/lang/ko.js',
    'video-js/lang/nl.js',
    'video-js/lang/pt-BR.js',
    'video-js/lang/ru.js',
    'video-js/lang/tr.js',
    'video-js/lang/uk.js',
    'video-js/lang/vi.js',
    'video-js/lang/zh-CN.js',
    'video-js/lang/zh-TW.js'
  	],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yong:meteor-videojs','client');
  api.addFiles('yong:meteor-videojs-tests.js','client');
});

