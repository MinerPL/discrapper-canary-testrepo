var n = r(466293), _ = r(467631), a = r(402428), i = r(42848), o = 1 / 0, E = n ? n.prototype : void 0, s = E ? E.toString : void 0;
t.exports = function t(e) {
    if ('string' == typeof e)
        return e;
    if (a(e))
        return _(e, t) + '';
    if (i(e))
        return s ? s.call(e) : '';
    var r = e + '';
    return '0' == r && 1 / e == -o ? '-0' : r;
};
