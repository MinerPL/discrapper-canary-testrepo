var e = r(230364),
    o = r(97131);
t.exports = function (t, n, r) {
    return r.get && e(r.get, n, { getter: !0 }), r.set && e(r.set, n, { setter: !0 }), o.f(t, n, r);
};
