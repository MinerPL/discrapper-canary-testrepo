n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(266067), a = n(990547), o = n(213609);
function s(e) {
    var t;
    let {
            impressionName: n,
            impressionProperties: s,
            disableTrack: l,
            ...u
        } = e, c = s;
    return 'function' == typeof c && (c = c(u)), (0, o.Z)({
        type: a.ImpressionTypes.PAGE,
        name: n,
        properties: c
    }, { disableTrack: l }, [null === (t = u.location) || void 0 === t ? void 0 : t.pathname]), (0, r.jsx)(i.AW, { ...u });
}
