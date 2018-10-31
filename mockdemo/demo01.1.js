var mock=require('mockjs')
var data=mock.mock({
    'user|15':[     //10个数
        {
            'id|+1':1,    //规则为id=id+1
            'name|2':'测试', //两个 value=测试测试
            'age|18-40':0,   //最小和最大值
            'salary|10000-99999.2':0 , //最小和最大值，且带两位小数点
            'price|20-30.1-5':0,   //最小值和最大值，且1-5 小数点为1到5位
            'math|6.3':0   //三个小数点
        }
    ]
})

console.log(JSON.stringify(data,null,2))   //第一个为参数，第二个为占位符，第三个为换行空几格；
