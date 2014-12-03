Package.describe({
  name:"yong:meteor-videojs",
  summary: "Video.js 4.10.2",
  version: "1.0.3",
  git: " https://github.com/feelsys/meteor-videojs.git "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles([
  	'yong:meteor-videojs.js',
  	'video-js/video.js',
  	'video-js/video-js.css',
  	'video-js/video-js.min.css',
  	'video-js/video-js.swf',

  	'video-js/font/vjs.eot',
  	'video-js/font/vjs.svg',
  	'video-js/font/vjs.ttf',
  	'video-js/font/vjs.woff'
  	],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yong:meteor-videojs','client');
  api.addFiles('yong:meteor-videojs-tests.js','client');
});

