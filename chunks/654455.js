n.d(t, {
    LU: function () {
        return p;
    }
}), n(47120), n(653041);
var r, i = n(392711), a = n.n(i), o = n(442837), s = n(570140), l = n(911969), u = n(704907), c = n(581883);
n(689079);
var d = n(674563), _ = n(526761);
function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let f = { pendingUsages: [] }, h = new u.Z({
        computeBonus: () => 1,
        computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1,
        lookupKey: e => e,
        afterCompute: () => {
        },
        numFrequentlyItems: d.yP
    });
function p(e, t) {
    return e.filter(e => {
        if (e.includes(':'))
            return null != t.guild && t.guild.id === e.split(':')[1];
        return !0;
    }).map(e => e.split(':')[0]);
}
function m(e, t) {
    return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? ''.concat(t.id, ':').concat(e.guild.id) : t.id;
}
function I() {
    var e, t;
    let n = null !== (t = null === (e = c.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
    h.overwriteHistory(a().mapValues(n, e => ({
        ...e,
        recentUses: e.recentUses.map(Number).filter(e => e > 0)
    })), f.pendingUsages);
}
class T extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (f = e), this.syncWith([c.Z], I);
    }
    getState() {
        return f;
    }
    hasPendingUsage() {
        return f.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return h;
    }
    getScoreWithoutLoadingLatest(e, t) {
        var n;
        return null !== (n = h.getScore(m(e, t))) && void 0 !== n ? n : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return h.frequently;
    }
}
E(T, 'displayName', 'ApplicationCommandFrecencyStore'), E(T, 'persistKey', 'ApplicationCommandFrecencyV2'), t.ZP = new T(s.Z, {
    APPLICATION_COMMAND_USED: function (e) {
        let {
            command: t,
            context: n
        } = e;
        if (t.type !== l.yU.CHAT)
            return !1;
        let r = m(n, t);
        f.pendingUsages.push({
            key: r,
            timestamp: Date.now()
        }), h.track(r), h.compute();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: {type: t},
            wasSaved: n
        } = e;
        if (t !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)
            return !1;
        f.pendingUsages = [];
    }
});
