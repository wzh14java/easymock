var mock=require('mockjs')
var data=mock.mock({
    'user|2-8':[     //对象为数组，2到8个
        {
            'id|+1':1,    //规则为id=id+1
            'name':'@string', //两个 value=测试测试
            'age':'@integer',   //最小和最大值
            'salary|10000-99999.2':0 , //最小和最大值，且带两位小数点
            'price|20-30.1-5':0,   //最小值和最大值，且1-5 小数点为1到5位
            'date':'@date',  //三个小数点
            'isold|1':true,   //表示为true的概率为1/1+1
            'data|2':{name:'小红',age:18,address:'深圳'} //随机取两个属性
        }
    ]
})

console.log(JSON.stringify(data,null,2))