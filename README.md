# ExpressAPI Image Verification Test

This is a small test that accepts a single image upload, processes that
image, makes a determination whether the image is photoshopped, and responds with a JSON
payload containing the result.

## How it Works

A POST route for uploading a single image that is passed to Node-Exif middleware using Multer to handle files. The file is stored in memory. Node-Exif retrieves the Exif metadata from the buffer. Only JPEG files are supported by Node-Exif. All contained in the 'index.js' file.

## Installation and Operation

Install required dependencies:
	```
	npm install
	```
	
Start the server:
	```
	node ./index.js
	```

Upload your image using the API.

## API Usage Example with Curl

```javascript

curl --request POST 'http://localhost:3000/upload' --form 'image=@"/Path/To/Image/Image.jpg"'

```

## Possible JSON Responses

 * 'Photoshopped'(201) = File is a JPEG, but no Exif metadata was found.
 * 'Only JPEG format is supported.'(400) = File is not a JPEG.
 * 'Not Photoshopped'(201) = File is a JPEG, and Exif metadata was found.
 
## Improvements If More Time Allowed
 * Fix error handling. Unexpected fields will leak internal paths via error responses.
 * Add TLS to encrypt traffic.
 * Use image manipulation middleware to attempt detection of 'shopping. Exif data isn't very useful.
 * Split code into Controller, Middleware, Routes, etc folders instead of a single index.js file.
 * Add file size limitations.
 * Add better file checking instead of relying solely on Node-Exif.
 * Clean up my If Else mess.
 
## Limitations
 * Unexpected fields will leak internal paths via error responses.
 * Exif only supports JPEGs
 * Exif data isn't terribly useful in determining photoshopped images.
 * There are memory limitations to the buffer if large file sizes are uploaded.
 
