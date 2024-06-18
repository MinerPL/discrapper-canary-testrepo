"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(287734),
  o = n(125015),
  a = n(585483),
  l = n(871499),
  u = n(981631),
  _ = n(689938);

function d(e) {
  let {
    channel: t,
    centerButton: n = !1,
    ...d
  } = e, c = n ? l.d : l.Z, E = t.isManaged() || !t.isPrivate() ? _.Z.Messages.CONNECT : _.Z.Messages.JOIN_CALL, I = r.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
  return r.useEffect(() => (a.S.subscribe(u.CkL.CALL_ACCEPT, I), () => {
    a.S.unsubscribe(u.CkL.CALL_ACCEPT, I)
  }), [I]), (0, i.jsx)(c, {
    ...d,
    iconComponent: o.Z,
    label: E,
    onClick: I
  })
}