var i, s, a, r, l = n(442837),
  o = n(570140),
  c = n(496675),
  d = n(981631);

function u() {
  return !0;
}
class _ extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(c.Z), this.syncWith([c.Z], u);
  }
  channelNoticePredicate(e, t) {
return Date.now() - t >= d.Hqc && c.Z.can(d.Plq.ADMINISTRATOR, e);
  }
}
a = 'InviteNoticeStore', (s = 'displayName') in(i = _) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new _(o.Z);