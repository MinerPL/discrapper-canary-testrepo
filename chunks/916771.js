n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(872810), a = n(569545), o = n(63063), s = n(112560), l = n(981631), u = n(689938);
let c = n(66737);
function d(e) {
    let {
        stream: t,
        width: n,
        selected: d = !1,
        noArt: _ = !1
    } = e;
    return (0, r.jsx)(s.Z, {
        artURL: c,
        header: u.Z.Messages.STREAM_FAILED_TITLE,
        size: (0, s.L)(n),
        noArt: _,
        selected: d,
        description: u.Z.Messages.STREAM_FAILED_DESCRIPTION.format({ helpUrl: o.Z.getArticleURL(l.BhN.STREAM_FAILED) }),
        onCTAClick: () => (0, i.aP)((0, a.V9)(t)),
        callToAction: u.Z.Messages.CLOSE_STREAM
    });
}
