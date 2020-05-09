'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'Una descripcion',
    topic: 'Programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo2',
    teacher: 'Mi profesor',
    description: 'Una descripcion',
    topic: 'Programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo3',
    teacher: 'Mi profesor',
    description: 'Una descripcion',
    topic: 'Programacion'
  }
]
module.exports = {
  getCourses: () => {
    return courses
  }
}