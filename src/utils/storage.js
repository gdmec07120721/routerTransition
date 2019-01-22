/*created by lixb <lixb@thinkive.com> on 2018-11-02*/

// 注册本地存储对象
const Storage = {};


/*
* 存储数据到sessionStorage本地
*
* @param {String} key     key值
* @param {*}      options value值
*/
Storage.setSession = function (key, options) {
    sessionStorage.setItem(key, (options instanceof Object) ? JSON.stringify(options) : options);
}

/*
* 获取本地sessionStorag的值
*/
Storage.getSession = function (key) {
    let data = sessionStorage.getItem(key);

    return isString(data) ? data : JSON.parse(data);
}

/*
* 存储数据到localStorage本地
*/
Storage.setLocal = function (key, options) {
    localStorage.setItem(key, (options instanceof Object) ? JSON.stringify(options) : options);
}

/*
* 获取本地localStorage的值
*/
Storage.getLocal = function (key) {
    let data = localStorage.getItem(key);

    return isString(data) ? data : JSON.parse(data);
}

//判断parse解析后是否为字符串
function isString(options) {
    try {
        JSON.parse(options);
        return false;
    } catch(e) {
        return true;
    }
}

export default Storage;