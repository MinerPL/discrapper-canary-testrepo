t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var r = t(442837),
    u = t(481060),
    l = t(475179),
    a = t(358221),
    o = t(689938);
function d(e) {
    let n = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(u.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
        checked: !n,
        action: () => l.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
