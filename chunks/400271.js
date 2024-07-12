n(47120);
var i, s, a, r, l = n(442837),
  o = n(433517),
  c = n(570140),
  d = n(650774),
  u = n(430824),
  _ = n(496675),
  h = n(135899),
  E = n(981631);
let I = 'publicUpsellChannelNoticeGuilds',
  m = new Set();
class g extends(i = l.ZP.Store) {
  initialize() {
var e;
this.waitFor(_.Z, u.Z, d.Z), this.syncWith([
  _.Z,
  u.Z,
  d.Z
], E.dG4), m = (e = new Set(o.K.get(I)), e);
  }
  isVisible(e) {
if (null == e)
  return;
let t = d.Z.getMemberCount(e.id);
return !m.has(e.id) && null != t && t >= h.U3 && _.Z.can(E.Plq.ADMINISTRATOR, e) && !e.hasFeature(E.oNc.COMMUNITY);
  }
}
r = 'EnablePublicGuildUpsellNoticeStore', (a = 'displayName') in(s = g) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.Z = new g(c.Z, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
let t = e.guildId;
if (!m.has(t))
  return m.add(t), o.K.set(I, m), !0;
  }
});