import React from 'react'
import CourseContentsEnrolled from '../../components/CourseContentsEnrolled/CourseContentsEnrolled'

const EnrolledCourse = () => {

  const courseData = {
    title: 'Python Mega Course',
    subtitle: 'Go from zero to hero in weeks',
    ratingStars: 4.7,
    ratingsCount: 1000,
    enrolledStudentsCount: 2500,
    creator: 'Tommy Vercetti',
    language: 'English',
    lastUpdatedDate: '7/2021',
    originalPrice: 4999,
    discountedPrice: 499,
    timeCountInHours: 20,
    numberOfSections: 30,
    numberOfLectures: 320,
    numberOfArticles: 5,
    numberOfDownloadedResourses: 25,
    numberOfPractiseSets: 2,
    numberOfCodingExercises: 70,
    accessDurationInDays: 100,
    acessOnWhichDevices: 'mobile and TV',
    isCertificateAvailable: true,
    isMoneyBackAvailable: false,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsecureanycloud.com%2Fpython-on-cloud-technical-support-cloud-help-azure-aws-opensource-cognosys%2F&psig=AOvVaw2eT6Fwb9VE1-ssFZPd4RZT&ust=1632077431148000&source=images&cd=vfe&ved=2ahUKEwit28CtmInzAhWt7jgGHa3pBSUQjRx6BAgAEAk',
    previewVideoUrl: 'https://google.com',
    whatYouWillLearn: ['Introduction to programming', 'Will master lists, tuples', 'Create 10 real world applications', 'Database connectivity', 'Create a personal portfolio'],
    content: {
      information: {
        numberOfSections: 35,
        numberOfLectures: 300,
        numberOfHours: 33,
        numberOfMinutes: 20,
      },
      sections: [
        {
          title: 'Introduction to Python Programming Language',
          topics: [
            {
              title: 'Article on programming',
              subtitle: 'Here we can learn more about the Python',
              isVideo: false,
              view: ''
            },
            {
              title: 'Foundations of programming',
              subtitle: 'Here we can learn more about the Python',
              isVideo: true,
              view: '225956849'
            },
            {
              title: 'Chart of programming languages',
              subtitle: 'Here we can learn more about the Python',
              isVideo: false,
              view: ''
            },
            {
              title: 'Understanding Mathematics in Python',
              subtitle: 'Here we can learn more about the Python',
              isVideo: true,
              view: '228071975'
            }
          ]
        },
        {
          title: 'Introduction to Java Programming Language',
          topics: [
            {
              title: 'Article on Java',
              isVideo: false,
            },
            {
              title: 'Foundations of Java',
              isVideo: true,
              view: '225956849',
            },
            {
              title: 'Chart of Java language',
              isVideo: false,
            },
            {
              title: 'Understanding Mathematics in Java',
              isVideo: true,
              view: '228071975',
            }
          ]
        },
        {
          title: 'Introduction to Javascript Programming Language',
          topics: [
            {
              title: 'Article on Javascript',
              isVideo: false,
            },
            {
              title: 'Foundations of Javascript programming',
              isVideo: true,
            },
            {
              title: 'Chart of Javascript language',
              isVideo: false,
            },
            {
              title: 'Understanding Mathematics in Javascript',
              isVideo: true,
            }
          ]
        },
      ],
    },
  }

  return (
    <div>
      <CourseContentsEnrolled content={courseData.content} />
    </div>
  )
}

export default EnrolledCourse
