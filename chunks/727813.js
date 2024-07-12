n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(470079),
  s = n(442837),
  a = n(592125),
  r = n(594174),
  l = n(900255),
  o = n(333984);

function c() {
  let e = (0, s.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
t = (0, s.Wu)([
  a.Z,
  o.Z
], () => {
  let e = a.Z.getMutablePrivateChannels(),
    t = Array.from(o.Z.getSpamChannelIds()).map(t => e[t]).filter(e => null != e);
  return (0, l.x)(t);
}, [e]),
n = (0, s.cj)([r.default], () => {
  let e = {};
  return t.forEach(t => {
    let n = r.default.getUser(t.recipients[0]);
    null != n && (e[t.id] = n);
  }), e;
}, [t]);
  return i.useMemo(() => t.map(e => ({
channel: e,
user: n[e.id]
  })), [
t,
n
  ]);
}