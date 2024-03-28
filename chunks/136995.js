"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("287734"),
  i = n("125015"),
  r = n("585483"),
  o = n("871499"),
  u = n("981631"),
  d = n("689938");

function c(e) {
  let {
    channel: t,
    centerButton: n = !1,
    ...c
  } = e, f = n ? o.CenterControlButton : o.default, h = t.isManaged() || !t.isPrivate() ? d.default.Messages.CONNECT : d.default.Messages.JOIN_CALL, m = l.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
  return l.useEffect(() => (r.ComponentDispatch.subscribe(u.ComponentActions.CALL_ACCEPT, m), () => {
    r.ComponentDispatch.unsubscribe(u.ComponentActions.CALL_ACCEPT, m)
  }), [m]), (0, a.jsx)(f, {
    ...c,
    iconComponent: i.default,
    label: h,
    onClick: m
  })
}