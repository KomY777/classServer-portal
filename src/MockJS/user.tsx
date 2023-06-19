// import Mock from "mockjs"
//
// Mock.mock('/userAAA','get',()=>{
//     return Mock.mock({
//         'code':0,
//         'msg':'',
//         'result':{
//             'list|15':[{
//                 'id|+1':1,
//                 'userName':'@cname',
//                 'sex|0-1':'1',
//                 'status|1':[1,2,3,4,5],
//                 'interest|1':[1,2,3,4,5],
//                 'birthday':'2020-5-20',
//                 'address':'@province',
//                 'time':'09:00'
//             }],
//             'page':1,
//             'page_size':1,
//             'total':100
//         }
//     })
// })


// @ts-ignore
const Mock = require('mockjs')

//get请求
module.exports = Mock.mock('/user', 'get', () => {

    return  {
        status: 200
    }
})

//get请求：模拟分页数据
module.exports = Mock.mock('/studentHome', 'get', () => {
    //接受参数：是JSON格式，需要转换成对象
    const ret = Mock.mock({
        'list|20': [{'id|+1': 1, name: '@cname'}]
    })

    return {
        status: 200,
        data: ret
    }
})

//post请求，模拟注册
module.exports = Mock.mock('/add', 'post', (options: any) => {
    return {
        status: 200,
        data: JSON.parse(options.body).data
    }
})
