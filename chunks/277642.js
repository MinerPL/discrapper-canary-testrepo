n.d(t, {
    r: function () {
        return c;
    },
    t: function () {
        return o;
    }
});
var i = n(442837),
    s = n(314897),
    a = n(19780),
    l = n(959457);
function r(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.e7)([l.Z, s.default], () => {
        if (null == e) return !0;
        let t = l.Z.getUserIds(e);
        return null == t || r(t, s.default.getId());
    });
}
function c() {
    return (0, i.e7)([a.Z, s.default], () => {
        let e = a.Z.getUserIds();
        return null == e || r(e, s.default.getId());
    });
}
