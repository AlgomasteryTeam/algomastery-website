const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  ratingStars: {
    type: Number,
  },
  ratingCount: {
    type: Number,
  },
  enrolledStudentsCount: {
    type: Number,
  },
  creator: {
    type: String,
  },
  language: {
    type: String,
  },
  lastUpdatedDate: {
    type: Date,
  },
  originalPrice: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  timeCountInHours: {
    type: Number,
  },
  numberOfSections: {
    type: Number,
  },
  numberOfLectures: {
    type: Number,
  },
  numberOfArticles: {
    type: Number,
  },
  numberOfDownloadedResourses: {
    type: Number,
  },
  numberOfPractiseSets: {
    type: Number,
  },
  numberOfCodingExercises: {
    type: Number,
  },
  accessDurationInDays: {
    type: Number,
  },
  accessOnWhichDevice: {
    type: String,
  },
  isCertificateAvailable: {
    type: Boolean,
  },
  isMoneyBackAvailable: {
    type: Boolean,
  },
  imageUrl: {
    type: String,
  },
  previewVideoUrl: {
    type: String,
  },
  whatYouWillLearn: {
    type: Array,
  },
  content: {
    type: Array,
  }
})

module.exports = mongoose.Model('Course', courseSchema)