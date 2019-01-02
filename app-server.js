const express = require('express');
const app = express();
const http = require('http');
const debug = require('debug')('gdc2019:server');
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require('./'+process.env.WEBPACK_CONFIG);
const compiler = webpack(webpackConfig);

//in-memory file system for dev HMR(hot module reloading); disk FS for prod
const fs = process.env.NODE_ENV == 'prod' ? require('fs') : compiler.inputFileSystem;

if(process.env.NODE_ENV == 'dev'){
	app.use(require("webpack-dev-middleware")(compiler, {
		noInfo: false,
		silent: false,
		logLevel: 'debug',
		publicPath: webpackConfig.output.publicPath
	}));
	
	app.use(require("webpack-hot-middleware")(compiler, {
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000
	}));
}

//look for static files in root and public - root for compiled bundle injected into html page by webpack
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

app.get(/\/api\/?.*/, (req, res) => {
	res.send('Hello API!')
});

app.get(/^\/registration\/?.*$/, (req, res, next) => {
	const filename = path.resolve(compiler.outputPath, './frontend-builds/registration/registration-index.html');
	fs.readFile(filename, (err, result) => {
		if (err) {
			return next(err);
		}
		res.set('content-type', 'text/html');
		res.send(result);
		res.end();
	});
});

app.get(/^\/survey\/?.*$/, (req, res, next) => {
	const filename = path.resolve(compiler.outputPath, './frontend-builds/survey/survey-index.html');
	fs.readFile(filename, (err, result) => {
		if (err) {
			return next(err);
		}
		res.set('content-type', 'text/html');
		res.send(result);
		res.end();
	});
});


app.get('/', (req, res, next) => {
	console.log("default - maybe admin?");
	next();
	// const filename = path.resolve(compiler.outputPath, req.url);
	// console.log(req.url, 'get /');
	// fs.readFile(filename, (err, result) => {
	// 	if (err) {
	// 		return next(err);
	// 	}
	// 	res.set('content-type', 'text/html');
	// 	res.send(result);
	// 	res.end();
	// });
});

app.use(function (req, res, next) {
	res.status(404).send('404 not found');
});

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Error!')
})



var port = process.env.PORT || '8181';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, function(){
	debug('Listening on port ' + server.address().port);
});