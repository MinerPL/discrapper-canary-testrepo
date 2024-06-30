var n = r(402428), _ = r(42848), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, i = /^\w*$/;
t.exports = function (t, e) {
    if (n(t))
        return !1;
    var r = typeof t;
    return !!('number' == r || 'symbol' == r || 'boolean' == r || null == t || _(t)) || i.test(t) || !a.test(t) || null != e && t in Object(e);
};
