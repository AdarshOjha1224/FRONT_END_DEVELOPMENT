const course = {
    courseName: "JS in hindi",
    price: "1999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// DE-STRUCTURE -> {}

// const {value that you want to extract} = value that you want to extract from
const { courseInstructor } = course
console.log(courseInstructor)


const { courseInstructor: instructor } = course
console.log(instructor)

// JSON --
// {
//     "name": "Adarsh",
//     "courseName": "javaScript",
//     "price": "free"
// }

// Array form ->> [
//     {},
//     {},
//     {}
// ]


// Random User me API
// JSON Formatter