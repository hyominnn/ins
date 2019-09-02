//serializeObject
jQuery.prototype.serializeObject = function () {
    var obj = new Object();
    $.each(this.serializeArray(), function (index, param) {
        if (!(param.name in obj)) {
            obj[param.name] = param.value;
        }
    });
    return obj;
};

//unique
Array.prototype.unique = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}

//format date
Date.prototype.formatDate = function (fmt) {
    if (!fmt) { fmt = "yyyy-MM-dd"; }
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o

        [k]).length)));
    return fmt;
}

//网站验证
$.validator.addMethod("website", function (value, element) {
  var tel = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
  return this.optional(element) || (tel.test(value));
}, "web site not");

//邮箱
$.validator.addMethod("email", function (value, element) {
  var tel = /^[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,4}$/i;
  return this.optional(element) || (tel.test(value));
}, "email not");

//手机号
$.validator.addMethod("mobile", function (value, element) {
  var tel = /1(3[4-9]|5[012789]|8[78])\d{8}$|^18[019]\d{8}$|^1(3[0-2]|5[56]|8[56])\d{8}$|^1[35]3\d{8}$/;
  return this.optional(element) || (tel.test(value));
}, "mobile not");
