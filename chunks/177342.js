n.d(t, {
  Q: function() {
return c;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(286379),
  s = n(797614),
  r = n(596739),
  o = n(473092);

function c(e) {
  let {
channelId: t,
warningId: n,
senderId: c,
warningType: d,
header: u,
description: h,
onDismiss: p,
buttons: m
  } = e;
  a.useEffect(() => {
s.Z.increment({
  name: l.V.SAFETY_WARNING_VIEW
});
  }, []);
  let _ = a.useCallback(() => {
null == p || p(), (0, o.qc)({
  channelId: t,
  warningId: n,
  senderId: c,
  warningType: d,
  cta: o.NM.USER_BANNER_DISMISS
});
  }, [
p,
t,
n,
c,
d
  ]);
  return (0, i.jsx)(r.W, {
buttons: m,
description: h,
header: u,
onDismiss: _
  });
}