/*************************************jquery*******************************************/


// week first date
/*  Parameters：
 *  date: {Date}日期类型
 *  format: {string}日期格式
 */
function fn_weekFirstDate(date, format) {
    if (!format) { format = "yyyy-MM-dd" };
    var now = date; //当前日期 
    var nowDayOfWeek = now.getDay(); //今天本周的第几天 
    var nowDay = now.getDate(); //当前日
    if (nowDayOfWeek === 0) { nowDayOfWeek = 7 };
    var nowMonth = now.getMonth(); //当前月 
    var nowYear = now.getYear(); //当前年 
    nowYear += (nowYear < 2000) ? 1900 : 0;
    var weekStartDate = new Date(nowYear, nowMonth, nowDay + 1 - nowDayOfWeek);
    return weekStartDate.formatDate(format);
}

// week last date
/*  Parameters：
 *  date: {Date}日期类型
 *  format: {string}日期格式
 */
function fn_weekLastDate(date, format) {
    if (!format) { format = "yyyy-MM-dd" };
    var now = date; //当前日期 
    var nowDayOfWeek = now.getDay(); //今天本周的第几天 
    var nowDay = now.getDate(); //当前日 
    if (nowDayOfWeek === 0) { nowDayOfWeek = 7 };
    var nowMonth = now.getMonth(); //当前月 
    var nowYear = now.getYear(); //当前年 
    nowYear += (nowYear < 2000) ? 1900 : 0;
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 + 1 - nowDayOfWeek));
    return weekEndDate.formatDate(format);
}

// add days
/*  Parameters：
 *  date: {Date}日期类型
 *  day:天数
 *  format: {string}日期格式
 */
function fn_addDays(date, day, format) {
    if (!format) { format = "yyyy-MM-dd" };
    var now = date; //时间
    now.setDate(now.getDate() + day); //设置天数 +1 天
    return now.formatDate(format);
}

// time cut
/*  Parameters：
 *  date: {Date}日期类型
 */
function fn_timeCut(date) {
    var publishTime = date / 1000,
        d_seconds,
        d_minutes,
        d_hours,
        d_days,
        timeNow = parseInt(new Date().getTime() / 1000),
        d,

        date = new Date(publishTime * 1000),
        Y = date.getFullYear(),
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    //小于10的在前面补0
    if (M < 10) {
        M = '0' + M;
    }
    if (D < 10) {
        D = '0' + D;
    }
    if (H < 10) {
        H = '0' + H;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }

    d = timeNow - publishTime;
    d_days = parseInt(d / 86400);
    d_hours = parseInt(d / 3600);
    d_minutes = parseInt(d / 60);
    d_seconds = parseInt(d);

    if (d_days > 0 && d_days < 7) {
        return d_days + '天前';
    } else if (d_days <= 0 && d_hours > 0) {
        return d_hours + '小时前';
    } else if (d_hours <= 0 && d_minutes > 0) {
        return d_minutes + '分钟前';
    } else if (d_seconds < 60) {
        if (d_seconds <= 0) {
            return '刚刚';
        } else {
            return d_seconds + '秒前';
        }
    } else if (d_days >= 7 && d_days < 30) {
        return M + '-' + D + ' ' + H + ':' + m;
    } else if (d_days >= 30) {
        return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
    }
}

//1
//modal close
function fn_closeModal(modalName) {
    $(modalName).modal('hide');
    $(".modal-backdrop").remove();
    $("body").removeClass('modal-open');
}

//初始化fileinput控件(第一次初始化)
function fn_initFileInput(ctrlName, uploadUrl) {
    var control = $('#' + ctrlName);

    control.fileinput({
        language: 'zh', //设置语言
        uploadUrl: uploadUrl, //上传的地址
        allowedFileExtensions: ['jpg', 'png', 'gif', 'jpeg'], //接收文件后缀
        showUpload: false, //是否显示上传按钮
        showRemove: false, //是否显示删除按钮
        showCaption: false, //是否显示标题
        overwriteInitial: false,
        //maxFileCount: 1,
        //msgFilesTooMany:"选择上传的文件数量超过允许的最大值！",
        browseClass: "btn btn-primary btn-lg", //按钮样式
        fileType: "any",
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
    });
}

//1
//_2wgd9 show
function prompt_2wgd9Show(info, color) {
    var _fb78b = $('._fb78b:eq(0)');

    _fb78b.show();
    var _2wgd9 = $('._2wgd9'); //总
    _2wgd9.animate({ opacity: '1' }, 'slow');
    if (color !== 'undefined' && color !== 'null' && color !== null && color !== undefined) {
        _2wgd9.css({ backgroundColor: color });
    }
    _fb78b.html(info);
}

/**
 * _2wgd9 hide
 */
function prompt_2wgd9Hide() {
    var _2wgd9 = $('._2wgd9');
    var _fb78b = $('._fb78b:eq(0)');
    _2wgd9.animate({ opacity: '0' }, 'slow');
    _2wgd9.css({ backgroundColor: '#ed4956' });
    _fb78b.text('');
}

//1
/**
 * 动画效果
 * @param isSubmit
 */
function class_animate(isSubmit) {
    $('.Z2m7o').animate({ height: 'toggle' });
    $('.Z2m7o').delay(2000).animate({ height: 'toggle' });
    if (isSubmit) {
        $('._6_3uQ').text('重试');
    } else {
        $('._6_3uQ').text('');
    }
}