const express = require('express');
const router = express.Router();
const UploaderController = require('./UploadController')

router
.route('/')
.post(UploaderController.uploadImage, UploaderController.uploadImagemsg)

router
.route('/:filename')
.get(UploaderController.getImage)


module.exports = router;
