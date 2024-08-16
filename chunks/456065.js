n(47120);
var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(810788),
    d = n(430824),
    u = n(981631);
let _ = !1;
function E(e) {
    let t = d.Z.getGuild(e);
    return !!(null != t && t.hasFeature(u.oNc.HUB)) && ((_ = !0), !0);
}
function h() {
    return !0;
}
class m extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z), this.syncWith([c.Z], h);
    }
    channelNoticePredicate(e) {
        return !!e.hasFeature(u.oNc.LINKED_TO_HUB) && !_ && !0;
    }
}
(r = 'HubLinkNoticeStore'),
    (s = 'displayName') in (a = m)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new m(o.Z, {
        CONNECTION_OPEN: function (e) {
            for (let t of e.guilds) if (E(t.id)) return !0;
            return !1;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return E(t.id);
        }
    }));
