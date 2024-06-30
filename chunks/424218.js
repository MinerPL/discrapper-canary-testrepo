n.d(t, {
    BU: function () {
        return a;
    },
    IC: function () {
        return o;
    }
});
var r = n(689938);
let i = {
    useKibibytes: !1,
    showDecimalForGB: !0,
    useSpace: !0
};
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i, n = t.useKibibytes ? 1024 : 1000, a = t.useKibibytes ? 1024 : 1000, o = Math.ceil(e / n);
    if (o < a)
        return t.useSpace ? r.Z.Messages.FILE_SIZE_MB.format({ size: o }) : r.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: o });
    let s = o / a;
    return s = t.showDecimalForGB ? Math.round(10 * s) / 10 : Math.round(s), t.useSpace ? r.Z.Messages.FILE_SIZE_GB.format({ size: s }) : r.Z.Messages.FILE_SIZE_GB_NO_SPACE.format({ size: s });
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i, n = t.useKibibytes ? 1024 : 1000, o = t.useKibibytes ? 1024 : 1000, s = e / n;
    return s / o >= 1 ? a(s, t) : t.useSpace ? r.Z.Messages.FILE_SIZE_KB.format({ size: Math.ceil(s) }) : r.Z.Messages.FILE_SIZE_KB_NO_SPACE.format({ size: Math.ceil(s) });
}
