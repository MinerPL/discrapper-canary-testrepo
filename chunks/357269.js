n.r(t), n.d(t, {
    default: function () {
        return o;
    }
}), n(47120), n(757143);
var r = n(593473), i = n(981631);
let a = /-/g;
function o(e) {
    let [, , t, n] = e.split('/'), o = null == t ? void 0 : t.toUpperCase().replace(a, '_'), s = null == n ? void 0 : n.toUpperCase().replace(a, '_');
    if (i.oAB.hasOwnProperty(o) && (null == s || '' === s || i.oAB.hasOwnProperty(s))) {
        let {source: e} = (0, r.parse)(location.search);
        return {
            source: e,
            section: i.oAB[o],
            subsection: s
        };
    }
    return null;
}
