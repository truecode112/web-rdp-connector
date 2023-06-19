/*
 * Copyright (c) 2015 Sylvain Peyrefitte
 *
 * This file is part of mstsc.js.
 *
 * mstsc.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/client'))
app.set('view engine', 'ejs');
app.get('/:ip_addr', function(req, res) {
	//const html = fs.readFileSync(__dirname + '/client/html/index.html');
	//res.render({html: html.toString(), data: {ipAddress: '1.2.3.1'}});
	const data = {
		ipAddress: req.params.ip_addr
	}
	res.render(__dirname + '/client/html/index', data);
	//res.render(__dirname + '/client/html/index.html');
});
var server = http.createServer(app).listen(process.env.PORT || 9250);

require('./server/mstsc')(server);