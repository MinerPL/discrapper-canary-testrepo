var i, s, a, r, l = n(442837), o = n(570140), c = n(496675), d = n(981631);
class u extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], d.dG4);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= d.Hqc && c.Z.can(d.Plq.MANAGE_GUILD, e);
    }
}
a = 'GuildBoostingNoticeStore', (s = 'displayName') in (i = u) ? Object.defineProperty(i, s, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[s] = a, t.Z = new u(o.Z);
