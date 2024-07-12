var s = a(913527),
  n = a.n(s),
  l = a(749210);
t.Z = {
  async setCommunicationDisabledDuration(e, t, a, s, o) {
let i = null != a ? n()().add(a, 's').toISOString() : null;
await l.Z.setCommunicationDisabledUntil({
  guildId: e,
  userId: t,
  communicationDisabledUntilTimestamp: i,
  duration: a,
  reason: s,
  location: o
});
  }
};