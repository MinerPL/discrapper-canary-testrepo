t.d(n, {
  Q: function() {
return a;
  },
  T: function() {
return c;
  }
});
var l = t(442837),
  s = t(592125),
  o = t(700785),
  i = t(924301),
  r = t(765305),
  u = t(981631);

function a(e, n) {
  return o.Uu(u.Plq.VIEW_CHANNEL, e) || n === r.WX.EXTERNAL;
}

function c(e, n) {
  return (0, l.e7)([
s.Z,
i.ZP
  ], () => {
let t = s.Z.getChannel(e),
  l = i.ZP.getGuildScheduledEvent(n);
return a(t, null == l ? void 0 : l.entity_type);
  }, [
e,
n
  ]);
}