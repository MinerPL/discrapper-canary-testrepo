function n(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
t.Z = function e(t, r) {
    if (t === r) return !0;
    if (null == t || null == r) return !1;
    if (Array.isArray(t))
        return (
            Array.isArray(r) &&
            t.length === r.length &&
            t.every(function (t, n) {
                return e(t, r[n]);
            })
        );
    if ('object' == typeof t || 'object' == typeof r) {
        var i = n(t),
            a = n(r);
        return i !== t || a !== r
            ? e(i, a)
            : Object.keys(Object.assign({}, t, r)).every(function (n) {
                  return e(t[n], r[n]);
              });
    }
    return !1;
};
