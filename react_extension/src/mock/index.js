import Mock from 'mockjs'

Mock.mock('/api/student', 'post', {
  code: 200,
  message: '获取成功',
  data: [
    {
      name: '帅哥',
      age: 18,
    },
    {
      name: '帅哥',
      age: 18,
    },
  ],
})
// export default Mock
