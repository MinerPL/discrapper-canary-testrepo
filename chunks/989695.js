var i, a, s, r, l = n(442837),
  o = n(704215),
  c = n(570140),
  d = n(150340),
  u = n(496675);

function _() {
  return !0;
}
class h extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(u.Z), this.syncWith([u.Z], _);
  }
  channelNoticePredicate(e) {
return (0, d.S)(e.id, o.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE);
  }
}
s = 'GuildOnboardingUpsellNoticeStore', (a = 'displayName') in(i = h) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new h(c.Z);