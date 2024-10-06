let r, i, a;
n(47120);
var s = n(147913),
    o = n(553795),
    l = n(70956),
    u = n(998502),
    c = n(425128),
    d = n(276344),
    _ = n(981631);
let E = 10 * l.Z.Millis.SECOND,
    f = 15 * l.Z.Millis.MINUTE;
function h(e) {
    return e.some((e) => 'League of Legends' === e.name);
}
function p() {
    if (!(0, d.JN)('LeagueOfLegendsLifecycleManager')) return null;
    let e = o.Z.getAccount(null, _.ABu.RIOT_GAMES),
        t = o.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS);
    return null == e || null == t
        ? null
        : {
              riotConnection: e,
              lolConnection: t
          };
}
async function I(e) {
    let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: r } = e;
    clearTimeout(a);
    let { next_update_timestamp: i } = await (0, c._)({
            riotConnectionId: t,
            lolConnectionId: n,
            onlyUpdateIfStale: r
        }),
        s = new Date(1000 * i),
        o = new Date();
    a = setTimeout(
        () => {
            (0, c._)({
                riotConnectionId: t,
                lolConnectionId: n
            });
        },
        Math.max(0, s.getTime() - o.getTime())
    );
}
class m extends s.Z {
    handlePostConnectionOpen() {
        let e = p();
        if (null != e)
            I({
                riotConnectionId: e.riotConnection.id,
                lolConnectionId: e.lolConnection.id,
                onlyUpdateIfStale: !0
            });
    }
    handleRunningGameChange(e) {
        let { added: t, removed: n } = e,
            a = p();
        if (null != a)
            h(t) &&
                (null != i && clearInterval(i),
                (i = setInterval(async () => {
                    let e = await u.ZP.fetchRiotGamesLiveClientData('activeplayer');
                    null != e && 200 === e.status && (r = JSON.parse(e.body).riotId);
                }, E)),
                setTimeout(() => {
                    clearInterval(i);
                }, f)),
                h(n) &&
                    a.riotConnection.name === r &&
                    I({
                        riotConnectionId: a.riotConnection.id,
                        lolConnectionId: a.lolConnection.id
                    });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                RUNNING_GAMES_CHANGE: this.handleRunningGameChange,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new m();
