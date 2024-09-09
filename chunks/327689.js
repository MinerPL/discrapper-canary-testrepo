var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(430824),
    d = n(981631);
class u extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], d.dG4);
    }
    channelNoticePredicate(e, t) {
        return !e.hasFeature(d.oNc.BANNER) && Date.now() - t >= d.Hqc;
    }
}
(s = 'GuildBoostingNoticeStore'),
    (a = 'displayName') in (i = u)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new u(o.Z));
