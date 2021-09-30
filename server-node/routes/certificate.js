const express = require('express')
const router = express.Router()
var Jimp = require("jimp");
var cloudinary = require('cloudinary').v2

router.post('/generate', function (req, res, next) {

  const certificateData = req.body

  const inputImagePath = './assets/images/input/Certificate.png'
  const outputImagePath = './assets/images/output/Certificate.png'

  async function textOverlay() {
    // Reading image
    const image = await Jimp.read(inputImagePath);

    // Defining the text font
    const nameFont = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    image.print(nameFont, 750, 550, certificateData.studentName);

    const courseNameFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    image.print(courseNameFont, 750, 800, certificateData.courseName);

    const dateFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    image.print(dateFont, 1180, 890, certificateData.dateOfCompletion);

    // Writing image after processing
    await image.writeAsync(outputImagePath);
  }

  textOverlay();
  console.log("Image is processed succesfully");
  res.status(200).send('Image processed succesfully');
  next()
})


router.get('/download', (req, res, next) => {
  const imagePath = './assets/images/output/Certificate.png'
  cloudinary.config({
    cloud_name: 'x',
    api_key: 'x',
    api_secret: 'x',
  })
  cloudinary.uploader.upload(imagePath, function (err, result) {
    if (result) {
      console.log('Image uploaded succesfully: ', result)
      res.status(200).json({ success: true, message: 'Certificate data fetched successfully', data: result })
    } else {
      console.log('Error occured: ', err)
    }
  })
  next()
})


module.exports = router