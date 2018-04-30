//计算笛卡尔积坐标之间的距离
function distance(x1,x2,x3,x4){
    var dx=x2-x1;
    var dy=y2-y1;
    return Math.sqrt(dx*dx+dy*dy);
}

//计算阶乘的递归函数
function factorial(x){
    if(x<=1)
    return 1;
    else
    return x*factorial(x-1);
}

//用函数表达式定义一个函数用来求传入参数的的平方，并将其赋值给一个变量
var square=function(x){return x*x;}

//函数表达式包含名称
var f = function fact(x){if(x<=1)return 1;else return x*fact(x-1);};
//嵌套函数
function hypotenuse(a,b){
    function aquare(x){return x*x}
    return Math.sqrt(aquare(a)+aquare(b));
}
//函数调用
//函数体可以使用关键字this引用该对象
var calculator={
    operand1:1,
    operand2:2,
    add:function(){
        this.result=this.operand1+this.operand2;;
    }
};
calculator.add();
calculator.result

//关键字this
var o={
    m:function(){
        var self=this;//将this保存至一个变量中
        console.log(this===o);//输出true this就是这个对象o
        f();//调用辅助函数f()

        function f(){
            console.log(this===o);//false this的值是全局对象
            console.log(self===o);//true: self指外部函数的this 值
        }

    }
};
//构造函数
//凡是没有形参的构造函数调用都可以省略圆括号
var o=new object();
var o=new object;
