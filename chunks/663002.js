n.d(t, {
    Qe: function () {
        return s;
    },
    ap: function () {
        return i;
    },
    wj: function () {
        return a;
    }
});
var r = n(231338);
function i(e) {
    return e === r.BR.LIGHT;
}
function a(e) {
    switch (e) {
        case r.BR.DARK:
        case r.BR.MIDNIGHT:
        case r.BR.DARKER:
            return !0;
        default:
            return !1;
    }
}
function s(e) {
    if (null == e) return;
    let t = r.Al.get(e);
    return null != t ? 'theme-'.concat(t, ' theme-').concat(e, ' images-').concat(t) : 'theme-'.concat(e, ' images-').concat(e);
}
