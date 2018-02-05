/*!
 * nodeclub - route.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var express = require('express');
var filelistCtl = require('./router/filelist_ctl');

var router = express.Router();

// home page
router.get('/', filelistCtl.index);
router.get('/list', filelistCtl.filelistCtl);
module.exports = router;
