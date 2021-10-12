import React from 'react'
import Course from '../../components/Course/Course'
import './CourseList.css'

const CourseList = () => {
  const courseData = [
    {
      id: 1,
      name: 'Data Structures and Algorithms',
      description: 'Superb course',
      author: 'Nick',
      rating: 4.6,
      reviewCount: 4000,
      originalPrice: 5000,
      discountedPrice: 499,
      isPaid: true,
      isBestSeller: true,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 1,
      name: 'Data Structures and Algorithms',
      description: 'Superb course',
      author: 'Nick',
      rating: 4.6,
      reviewCount: 4000,
      originalPrice: 5000,
      discountedPrice: 499,
      isPaid: true,
      isBestSeller: true,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 1,
      name: 'Data Structures and Algorithms',
      description: 'Superb course',
      author: 'Nick',
      rating: 4.6,
      reviewCount: 4000,
      originalPrice: 5000,
      discountedPrice: 499,
      isPaid: true,
      isBestSeller: true,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
  ]

  return (
    <div className="course-list">

      {courseData.map(
        ({
          id,
          name,
          description,
          author,
          rating,
          reviewCount,
          originalPrice,
          discountedPrice,
          isPaid,
          isBestSeller,
          imageUrl,
        }) => {
          return (
            <Course
              key={id}
              id={id}
              name={name}
              description={description}
              author={author}
              rating={rating}
              reviewCount={reviewCount}
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              isPaid={isPaid}
              isBestSeller={isBestSeller}
              imageUrl={imageUrl}
            />
          )
        }
      )}
    </div>
  )
}

export default CourseList
