const express = require('express');
const multer = require('multer');
const ExifImage = require('exif').ExifImage;

const app = express();
const port = 3000;
const upload = multer();

//Upload route, Exif check, and conditionals responses.
app.post('/upload', upload.single('image'), (req, res, next) => {
	try {
    new ExifImage({ image : req.file.buffer}, function (error, exifData) {
        if (error)
			if (error.message == 'No Exif segment found in the given image.')
            	return res.status(201).json({
            		message: 'Photoshopped'
        		});
			else
				return res.status(400).json({
					message : 'Only JPEG format is supported.'
				});
        else
            return res.status(201).json({
            		message: 'Not Photoshopped'
        		});
    });
    } catch (error) {
        console.error('test');
    }
});

//start listener and output message to console.
app.listen(port, () => console.log(`Express API Test listening on port ${port}!`));