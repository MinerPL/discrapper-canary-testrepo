"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
});
var n = a("735250"),
  u = a("470079"),
  r = a("392711"),
  i = a.n(r),
  s = a("442837"),
  d = a("481060"),
  l = a("66999"),
  o = a("665906"),
  f = a("979651"),
  c = a("557135"),
  h = a("689938");

function T(e) {
  let t = (0, o.useCanJoinThreadVoice)(e),
    a = (0, s.useStateFromStores)([f.default], () => f.default.isInChannel(e.id)),
    r = (0, s.useStateFromStores)([f.default], () => !i().isEmpty(f.default.getVoiceStatesForChannel(e.id))),
    {
      needSubscriptionToAccess: T
    } = (0, l.default)(e.id),
    F = u.useCallback(() => {
      c.default.handleVoiceConnect({
        channel: e,
        connected: a,
        needSubscriptionToAccess: T,
        locked: !1
      })
    }, [e, a, T]);
  return a || !t ? null : (0, n.jsx)(d.MenuItem, {
    id: "join-thread-voice",
    label: r ? h.default.Messages.JOIN_CALL : h.default.Messages.START_CALL,
    action: F
  })
}