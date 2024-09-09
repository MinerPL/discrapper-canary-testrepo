n(47120), n(653041);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(814443),
    u = n(480294),
    d = n(699516),
    h = n(709054),
    m = n(981631);
function p(e, t) {
    let n = new Date(),
        i = new Date(e.getTime());
    i.setFullYear(t);
    let s = new Date(i.getTime());
    s.setDate(i.getDate() - 7);
    let a = new Date(i.getTime());
    return a.setDate(i.getDate() + 7), n > s && n < a;
}
let _ = new Set(),
    f = {};
function E() {
    (_ = new Set()), (f = {});
}
function g() {
    if (!u.Z.hasConsented(m.pjP.PERSONALIZATION)) {
        E();
        return;
    }
    let e = d.Z.getRelationships(),
        t = [];
    h.default.keys(e).forEach((e) => {
        let n = d.Z.getSince(e),
            i = c.Z.getUserAffinity(e);
        if (d.Z.getRelationshipType(e) === m.OGo.FRIEND && null != i && i.affinity > 0 && null != n) {
            var s;
            let i = new Date(n);
            if (!p((s = i), s.getFullYear()) && p(s, new Date().getFullYear())) t.push(e), (f[e] = { friendsSince: i });
        }
    }),
        t.sort((e, t) => {
            let n = c.Z.getUserAffinity(e),
                i = c.Z.getUserAffinity(t),
                s = null != n ? n.affinity : 0;
            return (null != i ? i.affinity : 0) - s;
        }),
        (_ = new Set(t));
}
class C extends (i = r.ZP.Store) {
    initialize() {
        this.syncWith([d.Z, c.Z, u.Z], g), this.waitFor(c.Z, d.Z, u.Z);
    }
    getFriendAnniversaries() {
        return _;
    }
    hasAnniversary(e) {
        return _.has(e);
    }
}
(l = 'PremiumGiftingIntentStore'),
    (a = 'displayName') in (s = C)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new C(o.Z, {
        LOGOUT: function () {
            E();
        }
    }));
