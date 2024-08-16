n(47120);
var r = n(570140),
    i = n(147913),
    a = n(650774),
    s = n(709054),
    o = n(893966);
let l = {},
    u = {},
    c = null;
async function d(e, t) {
    null == l[e] && (l[e] = new Set()), l[e].add(t), null == u[e] && (u[e] = Date.now()), E(e) && (await _(e));
}
function _(e) {
    if (null == l[e]) return;
    let t = Array.from(l[e]);
    (l[e] = new Set()),
        (u[e] = Date.now()),
        requestAnimationFrame(async () => {
            await r.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH',
                guildId: e,
                userIds: t
            });
        });
}
function E(e) {
    let t = l[e];
    if (null == t) return !1;
    let n =
            t.size >=
            (function (e) {
                var t;
                let n = null !== (t = a.Z.getMemberCount(e)) && void 0 !== t ? t : 0;
                return n >= 75000 ? 10 : 2;
            })(e),
        r = u[e];
    if (n) return !0;
    if (null == r) return !1;
    let i = Date.now() - r;
    return (
        null != r &&
        i >=
            (function (e) {
                var t;
                let n = null !== (t = a.Z.getMemberCount(e)) && void 0 !== t ? t : 0;
                return n >= 75000 ? 5000 : 2000;
            })(e)
    );
}
function f(e) {
    (l[e] = new Set()), (u[e] = null);
}
class h extends i.Z {
    handleInitialize() {
        null == c &&
            !(function () {
                if (null == c)
                    c = setInterval(() => {
                        s.default.forEachKey(l, (e) => {
                            E(e) && _(e);
                        });
                    }, 10000);
            })();
    }
    handleGuildMemberUpdate(e, t) {
        if (!!o.Z.isInitialized(e)) return d(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (!!o.Z.isInitialized(e)) return d(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        if (!!o.Z.isInitialized(t)) f(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        if (!!o.Z.isInitialized(t)) f(t);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
                GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e)
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
t.Z = new h();
