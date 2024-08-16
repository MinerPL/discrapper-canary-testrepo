t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var i = t(442837),
    s = t(481060),
    l = t(475179),
    o = t(358221),
    r = t(979651),
    u = t(981631),
    d = t(689938);
function c(e, n) {
    let t = (0, i.e7)([o.Z], () => e === o.Z.getSelectedParticipantId(n), [n, e]);
    return (0, i.e7)(
        [o.Z, r.Z],
        () => {
            let t = r.Z.isInChannel(n, e) && r.Z.hasVideo(n),
                a = o.Z.getLayout(n),
                i = a === u.AEg.MINIMUM || a === u.AEg.NORMAL;
            return !t || i;
        },
        [n, e]
    )
        ? null
        : (0, a.jsx)(s.MenuItem, {
              id: 'focus-video',
              label: t ? d.Z.Messages.UNFOCUS_PARTICIPANT : d.Z.Messages.FOCUS_PARTICIPANT,
              action: () => l.Z.selectParticipant(n, t ? null : e)
          });
}
