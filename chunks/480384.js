n(653041);
var r, i, a, o, s = n(442837), l = n(570140), u = n(650774), c = n(771845);
let d = [];
function _() {
    d = [];
    let e = c.ZP.getFlattenedGuildIds();
    for (let t = 0; t < e.length; t++) {
        let n = e[t], r = u.Z.getMemberCount(n);
        if (null != r && r >= 2 && r <= 95 && (d.push(n), d.length >= 5))
            return;
    }
}
class E extends (r = s.ZP.Store) {
    initialize() {
        this.syncWith([
            u.Z,
            c.ZP
        ], _), _();
    }
    getPriorityGuilds() {
        return d;
    }
}
o = 'RecentlyOnlineExperimentPriorityGuildsStore', (a = 'displayName') in (i = E) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new E(l.Z, {});
