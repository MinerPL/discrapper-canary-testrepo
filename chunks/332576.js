t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var r = t(442837), u = t(481060), l = t(475179), a = t(358221), o = t(979651), d = t(981631), s = t(689938);
function c(e, n) {
    let t = (0, r.e7)([a.Z], () => e === a.Z.getSelectedParticipantId(n), [
        n,
        e
    ]);
    return (0, r.e7)([
        a.Z,
        o.Z
    ], () => {
        let t = o.Z.isInChannel(n, e) && o.Z.hasVideo(n), i = a.Z.getLayout(n), r = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
        return !t || r;
    }, [
        n,
        e
    ]) ? null : (0, i.jsx)(u.MenuItem, {
        id: 'focus-video',
        label: t ? s.Z.Messages.UNFOCUS_PARTICIPANT : s.Z.Messages.FOCUS_PARTICIPANT,
        action: () => l.Z.selectParticipant(n, t ? null : e)
    });
}
