n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(470079),
  a = n(410030),
  s = n(695346),
  r = n(798628),
  l = n(275344),
  o = n(918088),
  c = n(562293);

function d(e, t) {
  var n;
  let d = (0, l.v)(e),
u = (0, r.cE)(d.getChannelId())[d.id],
_ = (0, c.Z)(null === (n = d.poll) || void 0 === n ? void 0 : n.expiry),
E = s.Yk.useSetting(),
I = (0, a.ZP)(),
m = null != t ? t : I;
  return i.useMemo(() => (0, o.ZP)(d, u, {
animateEmoji: E,
theme: m,
formattedExpirationLabel: _
  }), [
E,
d,
u,
_,
m
  ]);
}