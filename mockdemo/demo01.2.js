var mock=require('mockjs')
var data=mock.mock({
    'user|10':[     //对象为数组，2到8个
        {
            'id|+1':1,    //规则为id=id+1
            'name':'@string', //随机字符串
            'age':'@integer',   //随机数字
            'salary|10000-99999.2':0 , //最小和最大值，且带两位小数点
            'image':'@image',   //生成图片地址
            'date':'@date',  //生成日期
            'title':'@title', //生成标题
            'content':'@cword(4)', //生成文本，100为参数的个数
            'cname':'@cname',//中文名字
            'cfirst':'@cfirst',//中文姓氏
            'last':'@last',//英文姓氏
            'url':'@url', //url地址
            'ip':'@ip',   //ip地址
            'email':'@email'//邮箱
        }
    ]
})

console.log(JSON.stringify(data,null,2))