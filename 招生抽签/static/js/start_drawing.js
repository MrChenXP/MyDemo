// 抽签名单 先写死 后期动态
let mdListJson = [
    {num: "1", name: "张"},
    {num: "21", name: "张2"},
    {num: "31", name: "张3"},
    {num: "41", name: "张4"},
    {num: "14", name: "张5"},
    {num: "51", name: "张6"},
    {num: "61", name: "张7"},
    {num: "71", name: "张8"},
]
// 中签名单 先写死 后期动态
let zqListJson = [
    {num: "1", name: "张"},
    {num: "21", name: "张2"},
    {num: "31", name: "张3"},
    {num: "41", name: "张4"},
    {num: "14", name: "张5"},
    {num: "61", name: "张7"},
]
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    } 

// 获取 “开始、停止、下一组" 按钮DOM对象
let cz = $('#cz');

// 抽签效果 
let indraw = ()=>{
    
    let i = 0; // 动画生成多少次
    // 抽签 文字混乱动画 生成函数
    let createList = ()=>{
        i++; // 每运行一次动画 就加一次
        if(i === 40){ // 动画执行40次后 删除定时器
            clearInterval(createListSIV);
            // 将元素布局换成一行显示
            $('.md-lists').addClass('md-lists-cqcw');
            return false
        }
        let lists=$('.md-lists .list');
        lists.remove(); // 先删除原本的dom
        let len =  mdListJson.length;
        // 混乱的生成不规则dom
        for(j = 0; j<len; j++){
            let r = randomNum(0,len-1);
            $('.md-lists').append(`<div class="list"><span class="num">
                ${mdListJson[r].num}</span><span class="name">
                ${mdListJson[r].name }</span></div>`);
        }
    }
    // 文字混乱动画 定时器
    let createListSIV= setInterval(createList,50);    
}
// 手杆掰下来的动画
let tfb = function(){
    // 添加动画效果
    $(this).addClass('top-fade-bottom');
    // 点击后需要清除点击事件，防止多次点击触发
    $(cz).off('click');
    // 进行抽签 
    indraw()    
};

// 抽签页面显示隐藏
let cqym = ()=>{
    $('.cqym').toggleClass('hidden');
}

// 给"开始抽签按钮"绑定点击事件 唤除抽签页面
$('.kscq').on('click',cqym);
// 给"抽签页面-完成按钮"绑定点击事件 隐藏抽签页面
$('.cqym .wc').on('click',cqym);
// 给"抽签页面-开始按钮"绑定点击事件 隐藏抽签页面
$(cz).on('click',tfb);
// 动画结束后清除动画
$(cz).on('animationend',function(){
    $(this).removeClass('top-fade-bottom');
    // 动画完成后添加点击事件
    $(cz).on('click',tfb);
});


