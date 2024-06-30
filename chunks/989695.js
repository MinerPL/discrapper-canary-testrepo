var i, s, a, r, l = n(442837), o = n(704215), c = n(570140), d = n(150340), u = n(496675);
function _() {
    return !0;
}
class E extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(u.Z), this.syncWith([u.Z], _);
    }
    channelNoticePredicate(e) {
        return (0, d.S)(e.id, o.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE);
    }
}
a = 'GuildOnboardingUpsellNoticeStore', (s = 'displayName') in (i = E) ? Object.defineProperty(i, s, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[s] = a, t.Z = new E(c.Z);
