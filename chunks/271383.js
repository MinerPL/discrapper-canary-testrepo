n.d(t, {
    O5: function () {
        return V;
    },
    V6: function () {
        return F;
    }
}),
    n(47120),
    n(789020),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(866442),
    f = n(442837),
    _ = n(570140),
    h = n(710845),
    p = n(69882),
    m = n(134049),
    g = n(160404),
    E = n(630388),
    v = n(823379),
    I = n(709054),
    S = n(314897),
    T = n(592125),
    b = n(430824),
    y = n(372897);
let A = new h.Z('GuildMemberStore'),
    N = {},
    C = {},
    R = {},
    O = {},
    D = !1,
    L = 0,
    x = 0,
    w = {},
    M = {},
    P = {
        added: [],
        removed: []
    };
function k(e, t) {
    if (null == t.communicationDisabledUntil || !(0, p.b)(t)) return U(e, t.userId);
    let n = Z(e, t.userId);
    O[n] !== t.communicationDisabledUntil && (0, p.b)(t) && ((O[n] = t.communicationDisabledUntil), G(n));
}
function U(e, t) {
    if (null != t) {
        let n = Z(e, t);
        null != O[n] && G(n), B(Z(e, t));
    } else for (let t in O) V(t) === e && (G(t), B(t));
}
function G(e) {
    (L += 1), (w[e] = L);
}
function B(e) {
    F(e) === S.default.getId() && (0, m.l)(V(e)), delete O[e];
}
function Z(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function F(e) {
    return e.split('-')[1];
}
function V(e) {
    return e.split('-')[0];
}
function j(e, t) {
    let n, r, i, a, s;
    if (0 === t.length)
        return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let n of t) {
        let t = e[n];
        if (null != t) (null == s || t.position > s.position) && (s = t), t.color > 0 && (null == r || t.position > r.position) && (r = t), t.hoist && (null == i || t.position > i.position) && (i = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || t.position > a.position) && (a = t);
    }
    if (null != r) {
        var o;
        null == r.colorString && r.color > 0 && (r.colorString = (0, d.Rf)(r.color)), (n = null !== (o = r.colorString) && void 0 !== o ? o : void 0);
    }
    return {
        colorString: n,
        colorRoleId: null == r ? void 0 : r.id,
        iconRoleId: null == a ? void 0 : a.id,
        hoistRoleId: null == i ? void 0 : i.id,
        highestRoleId: null == s ? void 0 : s.id
    };
}
function H(e) {
    let { userId: t, nick: n, guildId: r, avatar: i, avatarDecoration: a, guildRoles: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: f, fullProfileLoadedTimestamp: _, flags: h } = e,
        { colorString: p, colorRoleId: m, iconRoleId: E, hoistRoleId: v, highestRoleId: T } = j(s, o),
        b = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: a,
            roles: o,
            colorString: p,
            colorRoleId: m,
            iconRoleId: E,
            hoistRoleId: v,
            highestRoleId: T,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: _,
            flags: h
        };
    if (null == N[r]) return b;
    if (t === S.default.getId()) {
        if (g.Z.isViewingRoles(r) || g.Z.isFullServerPreview(r)) {
            let e = g.Z.getViewingRoles(r);
            C[r] = {
                ...b,
                ...g.Z.getMemberOptions(r),
                roles: null != e ? I.default.keys(e) : []
            };
        } else null != C[r] && delete C[r];
    }
    return b;
}
((a = r || (r = {}))[(a.GUILD = 0)] = 'GUILD'), (a[(a.USER = 1)] = 'USER');
function Y(e) {
    for (let t of e) {
        if (null != t.member) {
            if (
                (null == R[t.id]
                    ? (R[t.id] = t.member)
                    : (R[t.id] = {
                          ...t.member,
                          roles: t.member.roles
                      }),
                null != N[t.id])
            ) {
                let e = N[t.id];
                null != e[t.member.userId] &&
                    (e[t.member.userId] = {
                        ...e[t.member.userId],
                        roles: t.member.roles
                    });
            }
        }
    }
}
function W(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: a, avatarDecoration: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: f, flags: _ } = e,
        h = N[n];
    if (null == h) return !1;
    let p = b.Z.getGuild(n);
    if (null == p) return A.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (h[r.id] = H({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration:
            null != s
                ? {
                      asset: s.asset,
                      skuId: s.sku_id
                  }
                : void 0,
        guildRoles: b.Z.getRoles(p.id),
        roles: o,
        premiumSince: l,
        isPending: u,
        joinedAt: c,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: f,
        fullProfileLoadedTimestamp: null === (t = h[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
        flags: _
    })),
        k(n, h[r.id]);
}
function K(e, t) {
    let n = N[e];
    if (null == n) return !1;
    let r = b.Z.getGuild(e);
    return null == r
        ? (A.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              (n[t.user.id] = H({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: z(t),
                  guildRoles: b.Z.getRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (i = t.unusual_dm_activity_until) && void 0 !== i ? i : null == a ? void 0 : a.unusualDMActivityUntil
              })),
                  k(e, n[t.user.id]);
          }),
          x++,
          !0);
}
function z(e) {
    return null != e.avatar_decoration_data
        ? {
              asset: e.avatar_decoration_data.asset,
              skuId: e.avatar_decoration_data.sku_id
          }
        : void 0;
}
function q(e, t) {
    Q({
        id: e,
        members: t.map((e) => e.member).filter(v.lm)
    });
}
function Q(e) {
    let t = e.id;
    !(t in N) && (N[e.id] = {});
    let n = b.Z.getGuild(t);
    if (null == n) return !1;
    let r = N[t];
    for (let a of e.members) {
        var i;
        let s = a.user.id,
            o = r[s],
            l = H({
                userId: s,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: z(a),
                guildRoles: b.Z.getRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null !== (i = a.unusual_dm_activity_until) && void 0 !== i ? i : null == o ? void 0 : o.unusualDMActivityUntil
            });
        (r[s] = l), k(t, l);
    }
    return !0;
}
function X(e) {
    let t = N[e.guildId];
    if (null == t) return !1;
    let n = b.Z.getGuild(e.guildId);
    if (null == n) return A.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let r = S.default.getId();
    for (let i of I.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = i === r && 'GUILD_ROLE_DELETE' === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[i] = H({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: b.Z.getRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp
            })),
                k(e.guildId, t[i]);
        }
    }
}
function J(e) {
    let { guildId: t } = e,
        n = N[t];
    if (null == n) return !1;
    let r = b.Z.getGuild(t);
    if (null == r) return A.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let i = S.default.getId(),
        a = n[i];
    n[i] = H({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: b.Z.getRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags
    });
}
function $(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null &&
        null != r &&
        Q({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, a] = e,
                        s = null === (r = n.resolved) || void 0 === r ? void 0 : null === (t = r.users) || void 0 === t ? void 0 : t[i];
                    if (null != s)
                        return {
                            ...a,
                            user: s
                        };
                })
                .filter((e) => null != e)
        });
}
function ee(e) {
    let { messages: t } = e;
    t.forEach((e) =>
        (function (e) {
            var t;
            if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
            let n = T.Z.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) &&
                Q({
                    id: n.guild_id,
                    members: Object.entries(e.resolved.members)
                        .map((t) => {
                            var n, r;
                            let [i, a] = t,
                                s = null === (r = e.resolved) || void 0 === r ? void 0 : null === (n = r.users) || void 0 === n ? void 0 : n[i];
                            if (null != s)
                                return {
                                    ...a,
                                    user: s
                                };
                        })
                        .filter((e) => null != e)
                });
        })(e)
    );
}
function et(e) {
    let { messages: t } = e;
    t.forEach((e) => ee({ messages: e }));
}
class en extends (i = f.ZP.Store) {
    initialize() {
        this.waitFor(b.Z, S.default, g.Z);
    }
    getMutableAllGuildsAndMembers() {
        return N;
    }
    memberOf(e) {
        return c()(N)
            .toPairs()
            .filter((t) => {
                let [n, r] = t;
                return null != r[e];
            })
            .map((e) => {
                let [t] = e;
                return t;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let t = {};
        for (let r in N) {
            var n;
            let i = null === (n = N[r][e]) || void 0 === n ? void 0 : n.nick;
            if (null != i) !Object.prototype.hasOwnProperty.call(t, i) && (t[i] = []), t[i].push(r);
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = N[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = N[e];
        return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = S.default.getId(),
            n = N[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, E.yE)(r, y.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = N[e];
        return null == t ? [] : I.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = N[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = N[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === S.default.getId() && (g.Z.isViewingRoles(e) || g.Z.isFullServerPreview(e))) {
            var r;
            return null !== (r = C[e]) && void 0 !== r ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, S.default.getId());
    }
    getCachedSelfMember(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t ? t : null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return O;
    }
    getCommunicationDisabledVersion() {
        return L;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null !== (t = M[e]) && void 0 !== t ? t : P;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
            a = M[e];
        return null == a ? i : c().difference(c().union(i, a.added), a.removed);
    }
    getMemberVersion() {
        return x;
    }
}
(l = 'GuildMemberStore'),
    (o = 'displayName') in (s = en)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new en(_.Z, {
        CONNECTION_OPEN: function (e) {
            D ? (D = !1) : (N = {}),
                (O = {}),
                (function (e) {
                    e.guilds.forEach((e) => {
                        Q(e);
                    });
                })(e);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            e.guilds.forEach((e) => {
                var t;
                let n = e.id;
                Q({
                    id: n,
                    members: e.members
                }),
                    null === (t = e.activity_instances) ||
                        void 0 === t ||
                        t.forEach((e) => {
                            q(n, e.participants);
                        });
            });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { guildMembers: t } = e;
            N = { ...t };
        },
        CACHE_LOADED: function (e) {
            let { guildMembers: t, guilds: n } = e;
            (D = !0), (N = { ...t }), (R = {}), Y(n);
        },
        CACHE_LOADED_LAZY: function (e) {
            let { guilds: t } = e;
            Y(t);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return Q(t);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete N[t.id], U(t.id);
        },
        GUILD_MEMBER_ADD: W,
        GUILD_MEMBER_UPDATE: W,
        GUILD_MEMBER_UPDATE_LOCAL: function (e) {
            var t, n, r;
            let { guildId: i, roles: a, addedRoleIds: s, removedRoleIds: o, flags: l } = e,
                u = S.default.getId(),
                d = N[i],
                f = null != d ? d[u] : null;
            if (null == f) return !1;
            let _ = b.Z.getGuild(i);
            if (null == _) return !1;
            let h = null !== (t = M[i]) && void 0 !== t ? t : {};
            (M[i] = {
                added: c().difference(c().union(null !== (n = h.added) && void 0 !== n ? n : [], s), null != o ? o : []),
                removed: c().difference(c().union(null !== (r = h.removed) && void 0 !== r ? r : [], o), null != s ? s : [])
            }),
                (d[u] = H({
                    userId: u,
                    guildId: i,
                    nick: f.nick,
                    avatar: f.avatar,
                    avatarDecoration: f.avatarDecoration,
                    guildRoles: b.Z.getRoles(_.id),
                    roles: null != a ? a : f.roles,
                    premiumSince: f.premiumSince,
                    isPending: f.isPending,
                    joinedAt: f.joinedAt,
                    flags: null != l ? l : f.flags,
                    fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
                }));
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let t = !1;
            for (let n of e.chunks) t = K(n.guildId, n.members) || t;
            return t;
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e,
                r = N[t];
            if (null == r || null == r[n.id]) return !1;
            delete r[n.id], U(t, n.id), x++;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            return K(t, n.map((e) => e.member).filter(v.lm));
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return null != n && K(t, n.map((e) => e.member).filter(v.lm));
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
            let { guildId: t, owners: n } = e;
            return K(t, n);
        },
        LOAD_FORUM_POSTS: function (e) {
            let { guildId: t, threads: n } = e;
            return K(
                t,
                Object.values(n)
                    .map((e) => e.owner)
                    .filter(v.lm)
            );
        },
        GUILD_ROLE_UPDATE: X,
        GUILD_ROLE_DELETE: X,
        GUILD_ROLE_MEMBER_REMOVE: function (e) {
            let { guildId: t, userId: n, roleId: r } = e,
                i = N[t];
            if (null == i) return !1;
            let a = b.Z.getGuild(t);
            if (null == a) return A.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            let s = i[n];
            if (null == s || !s.roles.includes(r)) return !1;
            s.roles = s.roles.filter((e) => e !== r);
            let o = j(b.Z.getRoles(a.id), s.roles);
            return (
                (i[n] = {
                    ...s,
                    ...o
                }),
                !0
            );
        },
        GUILD_ROLE_MEMBER_ADD: function (e) {
            let { guildId: t, userId: n, roleId: r } = e,
                i = N[t];
            if (null == i) return !1;
            let a = b.Z.getGuild(t);
            if (null == a) return A.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            let s = i[n];
            if (null == s || s.roles.includes(r)) return !1;
            s.roles = [...s.roles, r];
            let o = j(b.Z.getRoles(a.id), s.roles);
            return (
                (i[n] = {
                    ...s,
                    ...o
                }),
                !0
            );
        },
        GUILD_MEMBER_PROFILE_UPDATE: function (e) {
            let { guildMember: t, guildId: n } = e,
                r = N[n];
            if (null == r) return !1;
            let i = b.Z.getGuild(n);
            if (null == i) return A.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            (r[t.user.id] = H({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: z(t),
                guildRoles: b.Z.getRoles(i.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                unusualDMActivityUntil: t.unusual_dm_activity_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: Date.now()
            })),
                k(n, r[t.user.id]);
        },
        IMPERSONATE_UPDATE: J,
        IMPERSONATE_STOP: J,
        PASSIVE_UPDATE_V2: function (e) {
            return !!(e.members.length > 0) && K(e.guildId, e.members);
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
            let { guildId: t } = e;
            if (null == t) return !1;
            delete M[t];
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            var t, n;
            if (null == e.guildId || null == b.Z.getGuild(e.guildId)) return !1;
            (D = !0), (N[e.guildId] = null !== (t = N[e.guildId]) && void 0 !== t ? t : {});
            let r = !1;
            for (let t of ((D = !0), (N[e.guildId] = null !== (n = N[e.guildId]) && void 0 !== n ? n : {}), e.members)) null == N[e.guildId][t.userId] && ((r = !0), (N[e.guildId][t.userId] = t));
            return r;
        },
        MESSAGE_CREATE: $,
        MESSAGE_UPDATE: $,
        LOAD_MESSAGES_SUCCESS: ee,
        LOAD_MESSAGES_AROUND_SUCCESS: ee,
        LOAD_PINNED_MESSAGES_SUCCESS: ee,
        LOAD_RECENT_MENTIONS_SUCCESS: ee,
        SEARCH_FINISH: et,
        MOD_VIEW_SEARCH_FINISH: et,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
            let { guildId: t, members: n } = e;
            return K(
                t,
                n.map((e) => {
                    let { member: t } = e;
                    return t;
                })
            );
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: t, participants: n } = e;
            null != t.guild_id && q(t.guild_id, n);
        }
    }));
