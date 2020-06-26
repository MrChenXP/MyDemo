/** 动态更改rem **/
let refRem = () =>{
    let el = document.documentElement;
    let width = el.getBoundingClientRect().width
    if (width >= 1200){
        el.style.fontSize = '20px'
    } else if(width >= 1024){
        el.style.fontSize = '19px'
    } else{
        el.style.fontSize = '16px'
    }
};

/** 点击左右按钮偏移功能标签页 **/
let showLeftRight = () => {
    // 标签页位移的数值
    let tran = $('.footer-body .list').eq(0).css('transform') || '';
    let tranX = tran.replace(/[^0-9\-,]/g,'').split(',')[4] || 0;

    // 判断标签页是否超过父元素
    let footerBody = $('.footer-body');
    let lists= $('.footer-body .list');
    let listsW = 0; // 整个标签页集合的长度
    for(let i = 0; i < lists.length; i++){
        let margleft = parseInt($(lists[i]).css('marginLeft'));
        listsW += $(lists[i]).outerWidth() + margleft;
    }

    // 如果底部父级宽度小于整个标签页宽度 则出现左右按钮
    if(footerBody.outerWidth() < listsW){
        $('.footer-toRight').css('display','block');
        $('.footer-toLeft').css('display','block');
        console.log(listsW)
        // 给左右两个按钮加点击事件 进行标签页位移
        $('.footer-toRight').off().on('click',()=>{
            if(tranX > footerBody.outerWidth() - listsW){
                tranX += -40;
            }
            for(let i = 0; i < lists.length; i++){
                $(lists[i]).css('transform','translateX('+tranX+'px)')
            }
        });
        $('.footer-toLeft').off().on('click',()=>{
            if(tranX < 0){
                tranX += 40;
            }
            for(let i = 0; i < lists.length; i++){
                $(lists[i]).css('transform','translateX('+tranX+'px)')
            }
        });
    } else {
        $('.footer-toRight').css('display','none');
        $('.footer-toLeft').css('display','none');
    }
};

/**
 * @description 弹出iframe页面 然后出现一个标签页
 * @author CXP 暂时静态处理，未区分，里面加了测试id，请先删除，可咨询我
 * @param {Object} event 事件源
 * @param {String} width (默认:100%父级宽度 val:1%-100%，占父级的宽度比例)
 * @return
 * **/
let alertIframe = (event, width = '100%')=>{
    let url = $(event).attr('url');
    let f_id = $(event).attr('f_id');
    // 如果以存在iframef 就显示打开iframe
    if($('#'+f_id).length > 0){
        showIframe();
        return
    }

    // 创建iframe DOM对象
    let body = $('body');
    let iframeHtml = $(`<div class="iframe" id="${f_id}">
                            <div class="iframe-header" style="width: ${width}">
                                <span class="iframe-header-title">弹窗标题${f_id}</span>
                                <span class="iframe-header-fun">
                                    <i class="fa fa-angle-left font-bold" title="返回"></i>
                                    <i class="fa fa-minus" title="收起页面"></i>
                                    <i class="fa fa-close" title="关闭页面"></i>
                                </span>
                            </div>
                            <iframe src="${url}" style="width: ${width}"></iframe>
                      </div>`);

    // 创建标签页 DOM对象
    let footerBody = $('.footer .footer-body');
    let footerListHtml = $(`<div class="list ${f_id}" title="收起页面">
                             <i class="fa fa-bell bs"></i>
                             &nbsp;标签页${f_id}<i class="delete fa fa-close" title="关闭页面"></i>
                         </div>`);

    // 点击标签页 显示隐藏iframe
    footerListHtml.on('click',showIframe);
    // 点击iframe缩小按钮 显示隐藏iframe
    iframeHtml.on('click','.fa-minus',showIframe);
    // 点击关闭按钮 关闭弹框
    footerListHtml.on('click','.delete',showList);
    // 点击iframe关闭按钮 关闭弹框
    iframeHtml.on('click','.fa-close',showList);

    // 插入iframe、标签页 DOM
    body.append(iframeHtml);
    footerBody.append(footerListHtml);
    opacityList();

    // 点击左右按钮偏移功能标签页
    showLeftRight();

    // 显示隐藏iframe
    function showIframe() {
        let iframe = $('#'+f_id);
        if(iframe.css('display') === 'none'){
            iframe.css('display','inline-block');
            iframe.siblings(".iframe").css('display','none');
            opacityList();
        } else {
            iframe.css('display','none');
            console.log($('.footer .'+f_id))
            $('.footer .'+f_id).removeClass('active');
        }
    }
    // 删除 iframe、标签页
    function showList() {
        let iframe = $('#'+f_id);
        iframe.remove();
        $('.footer .'+f_id).remove();
    }
    // 更换当前标签状态
    function opacityList() {
        $('.footer .'+f_id).addClass('active');
        $('.footer .'+f_id).siblings(".list").removeClass('active');
    }
};