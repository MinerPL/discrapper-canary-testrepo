"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("987317"),
  i = n("887657"),
  r = n("659500"),
  u = n("981913"),
  o = n("49111"),
  d = n("782340");

function c(e) {
  let {
    channel: t,
    centerButton: n = !1,
    ...c
  } = e, f = n ? u.CenterControlButton : u.default, h = t.isManaged() || !t.isPrivate(), m = h ? d.default.Messages.CONNECT : d.default.Messages.JOIN_CALL, p = l.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
  return l.useEffect(() => (r.ComponentDispatch.subscribe(o.ComponentActions.CALL_ACCEPT, p), () => {
    r.ComponentDispatch.unsubscribe(o.ComponentActions.CALL_ACCEPT, p)
  }), [p]), (0, a.jsx)(f, {
    ...c,
    iconComponent: i.default,
    label: m,
    onClick: p
  })
}