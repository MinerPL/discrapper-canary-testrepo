"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  d = a("493683"),
  s = a("740492"),
  i = a("314897"),
  o = a("592125"),
  r = a("699516"),
  f = a("944486"),
  c = a("981631"),
  M = a("689938");

function m(e, t) {
  let m = i.default.getId(),
    E = t === c.AppContext.POPOUT,
    g = (0, n.useStateFromStores)([f.default, o.default], () => f.default.getVoiceChannelId() === o.default.getDMFromUserId(e.id)),
    I = (0, n.useStateFromStores)([r.default], () => r.default.isBlocked(e.id));
  if (m === e.id || E || g || e.bot) return null;
  let C = () => d.default.openPrivateChannel(e.id, !0),
    _ = !s.default.disableCallUserConfirmationPrompt;
  return (0, l.jsx)(u.MenuItem, {
    id: "call",
    label: M.default.Messages.CALL,
    action: _ ? () => {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("27157")]).then(a.bind(a, "736454"));
        return t => (0, l.jsx)(e, {
          onSubmit: C,
          ...t
        })
      })
    } : C,
    disabled: I
  })
}