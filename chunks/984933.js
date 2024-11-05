n.d(t, {
    Zb: function () {
        return C;
    },
    sH: function () {
        return N;
    }
}),
    n(653041),
    n(47120),
    n(724458);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(149765),
    c = n(442837),
    d = n(570140),
    f = n(430198),
    _ = n(933557),
    h = n(853856),
    p = n(846787),
    m = n(131704),
    g = n(700785),
    E = n(314897),
    v = n(592125),
    I = n(271383),
    S = n(430824),
    T = n(496675),
    b = n(699516),
    y = n(594174),
    A = n(981631);
let N = 'SELECTABLE',
    C = 'VOCAL',
    R = null,
    O = {},
    D = {},
    L = {},
    x = null,
    w = {},
    M = {
        comparator: -1,
        channel: (0, m.kt)({
            id: A.Sc2,
            type: A.d4z.GUILD_CATEGORY,
            name: 'Uncategorized'
        })
    },
    P = G(A.kod),
    k = [],
    U = {};
function G(e) {
    return {
        id: e,
        [N]: [],
        [C]: [],
        [A.d4z.GUILD_CATEGORY]: [M],
        count: 0
    };
}
function B(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function Z() {
    (O = {}), (w = {}), (D = {}), (L = {}), null != R && F(R);
}
function F(e) {
    var t;
    let n = G(e);
    return (
        (O[e] = n),
        (w[e] = []),
        !(function (e) {
            let { id: t } = e,
                n = (function (e) {
                    if (e === A.I_8)
                        return (function () {
                            let e = {},
                                t = h.Z.getFavoriteChannels();
                            for (let n in t) {
                                let r = v.Z.getChannel(n);
                                if (null == r) continue;
                                let i = t[n],
                                    a = (0, p.r)(t, i, r);
                                e[n] = {
                                    channel: a,
                                    comparator: a.position
                                };
                            }
                            return e;
                        })();
                    let t = {},
                        n = v.Z.getMutableGuildChannelsForGuild(e);
                    for (let e in n)
                        t[e] = {
                            channel: n[e],
                            comparator: n[e].position
                        };
                    return t;
                })(t);
            l().forEach(n, (n) => {
                var r;
                let i = n.channel;
                if (((e.count += 1), m.zS.has(i.type) && !T.Z.can(A.Plq.VIEW_CHANNEL, i) && !f.Z.isChannelGated(i.guild_id, i.id) && i.id !== x)) return;
                let a = ((r = i.type), (0, m.r8)(r) ? N : (0, m.bw)(r) ? C : r);
                i.type === A.d4z.GUILD_DIRECTORY && (null == w[t] && (w[t] = []), w[t].push(n)), null != e[a] && e[a].push(n);
            });
        })(n),
        (t = n)[N].sort(B),
        t[C].sort(B),
        t[A.d4z.GUILD_CATEGORY].sort(B),
        (function (e) {
            let t = (D[e.id] = {}),
                n = {};
            e[N].forEach((e) => {
                let { channel: r } = e,
                    i = (0, _.F6)(r, y.default, b.Z),
                    a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
                null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += '~'.concat(a))),
                    (t[r.id] = {
                        id: r.id,
                        name: i
                    });
            });
        })(n),
        (function (e) {
            (function (e, t) {
                let n = S.Z.getGuild(t);
                if (null != n && Y(e, n)) return !0;
                let r = O[t];
                null == r && (r = F(t));
                let { [N]: i, [C]: a } = r;
                for (let { channel: t } of i) if (Y(e, t)) return !0;
                for (let { channel: t } of a) if (Y(e, t)) return !0;
                return !1;
            })(y.default.getCurrentUser(), e)
                ? (L[e] = !0)
                : delete L[e];
        })(e),
        n
    );
}
function V(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == t) return !1;
    (O[t] = void 0), R === t && F(t);
}
function j(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (O[t] = void 0), t === R && F(t);
}
function H(e) {
    let { guildId: t } = e;
    (O[t] = void 0), t === R && F(t);
}
function Y(e, t) {
    return u.Db(
        g.uB({
            user: e,
            context: t,
            checkElevated: !1
        }),
        A.TC2
    );
}
function W(e, t) {
    var n;
    x = t;
    let r = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
    if (null == r) return !1;
    (O[r] = void 0), r === R && F(r);
}
function K() {
    F(A.I_8);
}
class z extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, I.ZP, v.Z, T.Z, E.default, f.Z, h.Z), this.syncWith([h.Z], K);
    }
    getAllGuilds() {
        return O;
    }
    getChannels(e) {
        var t;
        let n;
        return null != e ? (null == (n = O[(t = e)]) && (n = F(t)), n) : P;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null !== (n = this.getFirstChannelOfType(e, t, N)) && void 0 !== n ? n : r ? this.getFirstChannelOfType(e, t, C) : null;
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => T.Z.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => T.Z.can(n, e.channel) && !e.channel.nsfw, t);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[N].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[N];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[C].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        var t, n;
        return null !==
            (n =
                null === (t = w[e]) || void 0 === t
                    ? void 0
                    : t.map((e) => {
                          let { channel: t } = e;
                          return t.id;
                      })) && void 0 !== n
            ? n
            : k;
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return L[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[A.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null !== (t = D[e]) && void 0 !== t ? t : U;
    }
}
(s = 'GuildChannelStore'),
    (a = 'displayName') in (i = z)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new z(d.Z, {
        BACKGROUND_SYNC: Z,
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (((R = null != t ? t : null), null == t || null != O[t])) return !1;
            F(t);
        },
        CONNECTION_OPEN: Z,
        OVERLAY_INITIALIZE: Z,
        CACHE_LOADED_LAZY: Z,
        GUILD_CREATE: V,
        GUILD_UPDATE: V,
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t }
            } = e;
            return delete O[t], delete D[t], delete L[t], delete w[t], !0;
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            if (E.default.getId() !== n.id) return !1;
            (O[t] = void 0), t === R && F(t);
        },
        CHANNEL_CREATE: j,
        CHANNEL_DELETE: j,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let e of t) {
                let { guild_id: t } = e;
                if (null != t) (O[t] = void 0), (n = !0), R === t && F(t);
            }
            return n;
        },
        GUILD_ROLE_CREATE: H,
        GUILD_ROLE_UPDATE: H,
        GUILD_ROLE_DELETE: H,
        IMPERSONATE_UPDATE: H,
        IMPERSONATE_STOP: H,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null == t && null != x ? W(v.Z.getChannel(x), null) : W(v.Z.getChannel(t), t);
        },
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            let t = v.Z.getBasicChannel(e.id);
            null != t && null != t.guild_id && F(t.guild_id);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { channelId: n, sessionId: r } = t;
                return E.default.getSessionId() !== r ? e : W(v.Z.getChannel(n), n) || e;
            }, !1);
        }
    }));
