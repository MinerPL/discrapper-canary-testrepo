var t = /^(?:0|[1-9]\d*)$/;
e.exports = function (e, r) {
    var n = typeof e;
    return !!(r = null == r ? 9007199254740991 : r) && ('number' == n || ('symbol' != n && t.test(e))) && e > -1 && e % 1 == 0 && e < r;
};
