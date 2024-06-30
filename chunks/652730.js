var i, a, l, s, r = n(442837), o = n(570140), c = n(41776);
let u = null, d = null;
function h() {
    let e = c.Z.mostRecentLurkedGuildId();
    null != e ? (u = e, d = null) : (null != u ? d = u : d = null, u = null);
}
class p extends (s = r.ZP.Store) {
    initialize() {
        this.syncWith([c.Z], h);
    }
    shouldShowPopout(e) {
        return d === e;
    }
}
l = 'LurkerModePopoutStore', (a = 'displayName') in (i = p) ? Object.defineProperty(i, a, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = l, t.Z = new p(o.Z);
