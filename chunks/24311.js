n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(493683),
    o = n(40851),
    l = n(740492),
    u = n(314897),
    c = n(592125),
    d = n(699516),
    _ = n(944486),
    E = n(981631),
    f = n(689938);
function h(e) {
    let { user: t, context: h, label: p, joinCallVideo: I, id: m, onCall: T } = e,
        S = (0, o.Aq)(),
        g = (0, i.e7)([u.default], () => u.default.getId() === t.id),
        A = (0, i.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        N = (0, i.e7)([_.Z, c.Z], () => _.Z.getVoiceChannelId() === c.Z.getDMFromUserId(t.id));
    if (g || h === E.IlC.POPOUT || N || t.bot) return null;
    let O = () => {
            null == T || T(), s.Z.openPrivateChannel(t.id, !0, I), S.dispatch(E.CkL.POPOUT_CLOSE), (0, a.closeAllModals)();
        },
        R = !l.ZP.disableCallUserConfirmationPrompt;
    return (0, r.jsx)(a.MenuItem, {
        id: null != m ? m : 'call',
        label: null != p ? p : f.Z.Messages.CALL,
        action: R
            ? () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await n.e('27157').then(n.bind(n, 736454));
                      return (t) =>
                          (0, r.jsx)(e, {
                              onSubmit: O,
                              ...t
                          });
                  });
              }
            : O,
        disabled: A
    });
}
