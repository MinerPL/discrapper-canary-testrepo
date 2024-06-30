n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250), i = n(470079), a = n(442837), o = n(872810), s = n(569545), l = n(592125), u = n(112560), c = n(689938);
let d = n(340109);
function _(e) {
    let {
            stream: t,
            width: n,
            noArt: _ = !1,
            selected: E = !1
        } = e, f = (0, a.e7)([l.Z], () => l.Z.getChannel(t.channelId));
    return i.useEffect(() => {
        (null == f ? void 0 : f.isGuildStageVoice()) && (0, o.aP)((0, s.V9)(t), !1);
    }, []), (0, r.jsx)(u.Z, {
        artURL: d,
        noArt: _,
        selected: E,
        size: (0, u.L)(n),
        header: c.Z.Messages.STREAM_ENDED,
        onCTAClick: () => (0, o.aP)((0, s.V9)(t)),
        callToAction: c.Z.Messages.CLOSE_STREAM
    });
}
