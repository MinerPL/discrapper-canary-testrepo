var r,
    i = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = { lastUpdateRequested: {} };
class l extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        o = {
            ...o,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return o;
    }
    getLastUpdateRequested(e) {
        let t = o.lastUpdateRequested[e];
        return null != t ? new Date(1000 * t) : void 0;
    }
}
s(l, 'displayName', 'UserLeaderboardStore'),
    s(l, 'persistKey', 'UserLeaderboardStore'),
    (t.Z = new l(a.Z, {
        SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: function (e) {
            let { lastUpdateRequested: t, leaderboardId: n } = e;
            o.lastUpdateRequested[n] = t;
        }
    }));
