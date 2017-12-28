function fun (str) {
    var reg = /[0-9a-z]{17,18}/i;
    var newstr = '';
    if (reg.test(str)) {
        newstr = str.slice(0, -8) + '<b>' + str.substr(-8, 4) + '</b>' + str.replace(str.substr(-4), '*****').substr(-4);
    } else {
        newstr = '身份证不符合';
    }
    return newstr;
}