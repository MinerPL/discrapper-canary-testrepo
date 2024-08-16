var t = Object.prototype;
e.exports = function (e) {
    var r = e && e.constructor;
    return e === (('function' == typeof r && r.prototype) || t);
};
