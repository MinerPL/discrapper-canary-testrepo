var e = /^(?:0|[1-9]\d*)$/;
t.exports = function (t, r) {
    var n = typeof t;
    return !!(r = null == r ? 9007199254740991 : r) && ('number' == n || 'symbol' != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r;
};
