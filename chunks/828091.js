var n = r(42848), _ = 1 / 0;
t.exports = function (t) {
    if ('string' == typeof t || n(t))
        return t;
    var e = t + '';
    return '0' == e && 1 / t == -_ ? '-0' : e;
};
