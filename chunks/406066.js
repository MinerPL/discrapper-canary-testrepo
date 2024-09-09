n(653041), n(47120);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(742738);
let _ = [d.Z],
    E = [];
function f() {
    let e = [];
    for (let t of _) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !l()(e, E) && ((E = e), !0);
}
class h extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith(_, f);
    }
    getActivities() {
        return E;
    }
}
(s = 'FirstPartyRichPresenceStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new h(c.Z));
