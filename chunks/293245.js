let i, o, a;
n(47120);
var l, s, r, c, d = n(442837), u = n(570140), p = n(372123), h = n(594190), C = n(283595), f = n(780570), A = n(358085), O = n(209492), N = n(981631);
class _ extends (l = d.ZP.Store) {
    initialize() {
        A.isPlatformEmbedded && O.S(), i = {}, o = new Set(), a = [];
    }
    getState(t, e) {
        return i[(0, f.Tu)(t, e)];
    }
    isSyncing(t, e) {
        let n = (0, f.Tu)(t, e);
        return o.has(n);
    }
}
c = 'CloudSyncStore', (r = 'displayName') in (s = _) ? Object.defineProperty(s, r, {
    value: c,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[r] = c, e.Z = new _(u.Z, {
    GAME_CLOUD_SYNC_START: function (t) {
        let {
                applicationId: e,
                branchId: n
            } = t, i = (0, f.Tu)(e, n);
        o.add(i);
    },
    GAME_CLOUD_SYNC_UPDATE: function (t) {
        let {state: e} = t;
        for (let t of Object.keys(e))
            i[t] = e[t];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (t) {
        let {
                applicationId: e,
                branchId: n
            } = t, a = (0, f.Tu)(e, n);
        return o.delete(a), i[a] = {
            type: N.TzF.DONE,
            timestamp: Date.now()
        }, !0;
    },
    GAME_CLOUD_SYNC_CONFLICT: function (t) {
        let {
                applicationId: e,
                branchId: n,
                next: a,
                remote: l
            } = t, s = (0, f.Tu)(e, n);
        i[s] = {
            type: N.TzF.CONFLICT,
            next: a,
            remote: l
        }, o.delete(s);
    },
    GAME_CLOUD_SYNC_ERROR: function (t) {
        let {
                applicationId: e,
                branchId: n
            } = t, a = (0, f.Tu)(e, n);
        i[a] = { type: N.TzF.ERROR }, o.delete(a);
    },
    RUNNING_GAMES_CHANGE: function () {
        let t = h.ZP.getRunningDiscordApplicationIds();
        for (let e of a.filter(e => !t.includes(e))) {
            let t = C.Z.getActiveLibraryApplication(e);
            if (null != t)
                u.Z.wait(() => {
                    try {
                        p.Z(t.id, t.branchId);
                    } catch (t) {
                    }
                });
        }
        return a = t, !1;
    }
});
