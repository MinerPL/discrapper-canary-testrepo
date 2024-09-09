n(733860), n(653041);
var i,
    a,
    s,
    r,
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    u = n(433517),
    d = n(379649),
    _ = n(570140),
    E = n(786761),
    I = n(572804),
    m = n(901461),
    T = n(814082),
    h = n(23750),
    N = n(314897),
    f = n(592125),
    C = n(375954),
    p = n(306680),
    g = n(699516),
    S = n(914010),
    A = n(9156),
    R = n(594174),
    x = n(981631);
let O = 'recentMentionFilterSettings',
    M = [],
    v = {},
    L = !1,
    Z = !0,
    P = u.K.get(O, {
        guildFilter: x.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    b = !1,
    D = 0,
    j = !1,
    U = !1;
function y(e) {
    if (e instanceof h.ZP) return e;
    let t = C.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, E.e5)(e);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, m.Z)(e) && !x.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = f.Z.getChannel(t);
    if (null == n || n.type === x.d4z.DM || (P.guildFilter === x.NgX.THIS_SERVER && n.getGuildId() !== S.Z.getGuildId())) return null;
    let i = N.default.getId();
    if (g.Z.isBlockedForMessage(e) || (0, T.Z)(e, i)) return null;
    e = y(e);
    let a = !P.everyoneFilter,
        s = !P.roleFilter;
    return (0, I.ZP)({
        message: e,
        userId: i,
        suppressEveryone: a,
        suppressRoles: s
    })
        ? (U &&
              p.ZP.ackMessageId(n.id) !== e.id &&
              (0, I.ZP)({
                  message: e,
                  userId: i,
                  suppressEveryone: A.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: A.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (U = !1),
          e)
        : null;
}
function k(e) {
    if (null == v[e]) return !1;
    delete v[e],
        (M = o().filter(M, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function G(e) {
    let { id: t } = e;
    return k(t);
}
function F(e) {
    let t = { ...P };
    (P = o().defaults(o().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), P)), u.K.set(O, P);
    let n = (e, n) => t[e] !== P[e] && P[e] === n,
        i = n('guildFilter', x.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    v = {};
    let a = [];
    i &&
        M.forEach((e) => {
            let t = B(e);
            null != t && (a.push(t), (v[t.id] = !0));
        }),
        0 === (M = a).length && (b = !1);
}
function w() {
    (M = []), (v = {}), (b = !1), (U = !1);
}
function V() {
    M = M.filter((e) => !g.Z.isBlockedForMessage(e));
}
function H(e) {
    let { channel: t } = e;
    M = o().filter(M, (e) => e.channel_id !== t.id || (delete v[e.id], !1));
}
class Y extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(R.default, f.Z, C.Z, p.ZP);
    }
    isOpen() {
        return j;
    }
    get hasLoadedEver() {
        return b;
    }
    get lastLoaded() {
        return D;
    }
    getMentions() {
        return b || M.length > 0 ? M : null;
    }
    hasMention(e) {
        return v[e];
    }
    get loading() {
        return L;
    }
    get hasMore() {
        return Z;
    }
    get guildFilter() {
        return P.guildFilter;
    }
    get everyoneFilter() {
        return P.everyoneFilter;
    }
    get roleFilter() {
        return P.roleFilter;
    }
    get mentionsAreStale() {
        return U;
    }
}
(r = 'RecentMentionsStore'),
    (s = 'displayName') in (a = Y)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new Y(_.Z, {
        LOAD_RECENT_MENTIONS: function (e) {
            let { guildId: t } = e;
            (L = !0), null == t && P.guildFilter === x.NgX.THIS_SERVER && F({ guildFilter: x.NgX.ALL_SERVERS });
        },
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { hasMoreAfter: t, messages: n, isAfter: i } = e,
                a = o().map(n, y);
            i ? (M = M.concat(a)) : ((M = a), (v = {})),
                o().forEach(a, (e) => {
                    v[e.id] = !0;
                }),
                (L = !1),
                (Z = t),
                (D = (0, d.zO)()),
                (b = !0);
        },
        LOAD_RECENT_MENTIONS_FAILURE: function () {
            L = !1;
        },
        SET_RECENT_MENTIONS_FILTER: F,
        CLEAR_MENTIONS: function (e) {
            w();
        },
        TRUNCATE_MENTIONS: function (e) {
            let { size: t } = e;
            for (let e = t; e < M.length; ++e) delete v[M[e].id];
            let n = M.length;
            n > (M = M.slice(0, t)).length && (Z = !0);
        },
        CHANNEL_SELECT: function () {
            if (P.guildFilter !== x.NgX.THIS_SERVER) return !1;
            b = !1;
        },
        CONNECTION_OPEN: w,
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            M = o().filter(M, (e) => {
                let n = f.Z.getChannel(e.channel_id);
                return (null != n && n.getGuildId() !== t.id) || (delete v[e.id], !1);
            });
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e,
                i = R.default.getCurrentUser();
            if (
                null == i ||
                !(0, I.Hl)({
                    rawMessage: n,
                    userId: i.id,
                    suppressRoles: !1,
                    suppressEveryone: !1
                })
            )
                return !1;
            let a = B(n, t);
            if (null == a) return !1;
            (M = M.slice()).unshift(a), (v[a.id] = !0);
        },
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id;
            if (null == v[String(t)]) return !1;
            let n = o().findIndex(M, (e) => {
                    let { id: n } = e;
                    return n === t;
                }),
                i = (M = M.slice())[n];
            null != i && (M[n] = (0, E.wi)(i, e.message));
        },
        MESSAGE_DELETE: G,
        RECENT_MENTION_DELETE: G,
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t } = e;
            o().forEach(t, k);
        },
        CHANNEL_DELETE: H,
        THREAD_DELETE: H,
        RELATIONSHIP_ADD: V,
        RELATIONSHIP_REMOVE: V,
        MENTION_MODAL_OPEN: function () {
            j = !0;
        },
        MENTION_MODAL_CLOSE: function () {
            j = !1;
        },
        SET_RECENT_MENTIONS_STALE: function (e) {
            U = !0;
        }
    }));
