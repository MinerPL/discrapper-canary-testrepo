n.r(t),
    n.d(t, {
        default: function () {
            return s;
        }
    }),
    n(47120),
    n(757143);
var r = n(593473),
    i = n(981631);
let a = /-/g;
function s(e) {
    let [, , t, n] = e.split('/'),
        s = null == t ? void 0 : t.toUpperCase().replace(a, '_'),
        o = null == n ? void 0 : n.toUpperCase().replace(a, '_');
    if (i.oAB.hasOwnProperty(s) && (null == o || '' === o || i.oAB.hasOwnProperty(o))) {
        let { source: e } = (0, r.parse)(location.search);
        return {
            source: e,
            section: i.oAB[s],
            subsection: o
        };
    }
    return null;
}
