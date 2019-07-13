// 加载完HTML在加载JS
window.onload = function () {
    showUp();
    readyLogIn();
    // logIn();
    automaticLogin();
}
// 弹出登录框
function showUp() {
    var b = document.getElementsByClassName("dowebok")[0];
    var c = document.getElementById("up");
    b.style.display = "none";
    // 通过addEventListener来添加onclick事件
    c.addEventListener("click", function () {
        // 先判断一下是否是隐藏了
        if (b.style.display == "none") {
            b.style.display = "block";
        }
    });
}
// 输入账号，密码时的判断
function readyLogIn() {
    var input = document.getElementsByClassName("input");
    var submit = document.getElementById("submit");
    var loginarea = document.getElementsByClassName("loginarea")[0];
    for (let i = 0; i < 2; i++) {
        // 输入框失去焦点时，显示提示文本
        input[i].addEventListener("blur", function () {
            if (i == 0) {
                input[i].placeholder = "用户名";
            }
            else {
                input[i].placeholder = "******";
            }
        });
        // 输入框获得焦点时，隐藏提示文本
        input[i].addEventListener("focus", function () {
            input[i].placeholder = " ";
        });
    }
    // 点击登录按钮时，检测是否有输入内容以及输入内容是否合法，并登录
    submit.addEventListener("click", function () {
        // 调试代码
        // console.log(input[0].value + ',' + input[1].value);
        if (!input[0].value && !input[1].value) {
            alert("用户名不能为空！密码不能为空！")
            return false;
        }
        if (!input[0].value) {
            alert("用户名不能为空！");
            return false;
        }
        else if (!input[1].value) {
            alert("密码不能为空！");
            return false;
        }
        else if (input[0].value && input[1].value) {
            var username_patt = /^[a-zA-Z]+$/;
            var password_patt = /^(?![a-zA-Z]+$)(?![0-9]+$)[a-zA-Z0-9]{6,15}$/;
            // 调试代码
            // console.log('username:' + input[0].value.match(username_patt));
            // console.log('password:' + input[1].value.match(password_patt));
            if (!username_patt.test(input[0].value) && password_patt.test(input[1].value)) {
                alert("用户名只能由英文字符构成且不能有空格！");
                return false;
            }
            if (!password_patt.test(input[1].value) && username_patt.test(input[0].value)) {
                alert("密码只能由数字字母构成且长度为6~15！");
                return false;
            }
            if (!username_patt.test(input[0].value) && !password_patt.test(input[1].value)) {
                alert("用户名只能由英文字符构成构成且不能有空格！\n密码只能由数字字母构成且长度为6~15！");
                return false;
            }
        }
    });
    // 激活输入框并按下回车键时，检测是否有输入内容以及输入内容是否合法，并登录
    loginarea.onkeydown = function () {
        // 按下回车时
        if (event.keyCode == 13) {
            // 调试代码
            // console.log(input[0].value + "," + input[1].value);
            if (!input[0].value && !input[1].value) {
                alert("用户名不能为空！密码不能为空！")
                return false;
            }
            if (!input[0].value) {
                alert("用户名不能为空！");
                return false;
            }
            else if (!input[1].value) {
                alert("密码不能为空！");
                return false;
            }
            else if (input[0].value && input[1].value) {
                var username_patt = /^[a-zA-Z]+$/;
                // ?: 是非捕获元之一，还有两个非捕获元是 ?= 和 ? !
                // 前者为正向预查，在任何开始匹配圆括号内的正则表达式模式的位置来匹配搜索字符串
                // 后者为负向预查，在任何开始不匹配该正则表达式模式的位置来匹配搜索字符串。
                var password_patt = /^(?![a-zA-Z]+$)(?![0-9]+$)[a-zA-Z0-9]{6,15}$/;
                // 调试代码
                // console.log("username:" + input[0].value.match(username_patt));
                // console.log("password:" + input[1].value.match(password_patt));
                if (!username_patt.test(input[0].value) && password_patt.test(input[1].value)) {
                    alert("用户名只能由英文字符构成且不能有空格！");
                    return false;
                }
                if (!password_patt.test(input[1].value) && username_patt.test(input[0].value)) {
                    alert("密码只能由数字字母构成且长度为6~15！");
                    return false;
                }
                if (!username_patt.test(input[0].value) && !password_patt.test(input[1].value)) {
                    alert("用户名只能由英文字符构成构成且不能有空格！\n密码只能由数字字母构成且长度为6~15！");
                    return false;
                }
                return false;
            }
        }
    }
    //  禁止提交表单
     loginarea.onsubmit = function () {
         return false;
     }
}
// 代码跑不了
// function automaticLogin() {
//     function setcookie() {
//         // 用户名
//         let userName = document.getElementsByClassName("input")[0];
//         //密码
//         let passWord = document.getElementById("password");
//         // cookie名称
//         let cookieName = "userInfo";
//         let data = {
//             username: userName,
//             password: passWord
//         }
//         let d = new Date();
//         // cookie保存时间（单位：天）
//         let saveTime = 7;
//         d.setDate(d.getDate() + saveTime);
//         document.cookie = cookieName + '=' + JSON.stringify(data) + ";path=/;expires=" + d.toGMTString();
//     }
//     function getCookie() {
//         let cookie = document.cookie;
//         // cookie名称
//         let cookieName = "userInfo";
//         // 将cookie信息和时间戳拆分为数组
//         let arr = cookie.split(";");
//         let userInfo = null;
//         for (let i = 0; i < arr.length; i++) {
//             // 将cookie名称和data拆分开，分别是数组的第一个元素和第二个元素
//             let tempArr = arr[i].split('=');
//             if (tempArr[0] === cookieName) {
//                 userInfo = JSON.parse(tempArr[1]);
//             }
//         }
//         if (userInfo) {
//             // cookie存在，这里可以写跳转语句
//             console.log(userInfo);
//         } else {
//             // 因为cookie不存在，所以不做任何处理
//         }
//     }
// }