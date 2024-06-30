n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var s = n(704215), a = n(230711), r = n(765585), l = n(981631), o = n(921944), c = n(689938), d = n(290544);
function u(e) {
    let {markAsDismissed: t} = e;
    return (0, i.jsx)(r.Z, {
        header: c.Z.Messages.SOUNDBOARD_VOLUME_TOOLTIP_HEADER,
        body: c.Z.Messages.SOUNDBOARD_VOLUME_TOOLTIP_BODY,
        tryItText: c.Z.Messages.TAKE_ME_THERE,
        dismissibleContent: s.z.SOUNDBOARD_VOLUME_EDUCATION,
        artClassName: d.art,
        onTryFeature: () => {
            a.Z.open(l.oAB.VOICE), t(o.L.UNKNOWN);
        },
        onClose: () => t(o.L.UNKNOWN),
        shouldUseHorizontalButtons: !0,
        inlineArt: !0
    });
}
