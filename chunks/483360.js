let r;
n.d(t, {
    k1: function () {
        return et;
    }
}), n(653041), n(733860), n(757143), n(47120);
var i = n(658722), a = n.n(i), o = n(392711), s = n.n(o), l = n(620490), u = n(933557), c = n(605436), d = n(565924), _ = n(710845), E = n(339085), f = n(31445), h = n(931261), p = n(285651), m = n(822179), I = n(926491), T = n(373228), g = n(601070), S = n(675478), A = n(131704), N = n(598077), v = n(592125), O = n(984933), R = n(271383), C = n(430824), y = n(375954), D = n(496675), L = n(158776), b = n(699516), M = n(944486), P = n(914010), U = n(594174), w = n(55563), x = n(823379), G = n(892880), k = n(700785), B = n(226951), F = n(709054), V = n(624138), H = n(51144), Z = n(981631), Y = n(727785), j = n(176505), W = n(689938);
let K = new _.Z('AutocompleteUtils'), z = () => !0, q = /(\t|\s)/, Q = [], X = (r = n(786074).Z).MENTION_EVERYONE, $ = r.MENTION_HERE, J = r.LAUNCHABLE_APPLICATIONS;
function ee() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
    return 1000 * e * (null != t ? t : 1);
}
let et = [
    O.sH,
    O.Zb,
    Z.d4z.GUILD_CATEGORY
];
function en(e, t) {
    let {
            exactQuery: n,
            containQuery: r,
            queryLower: i,
            isFullMatch: o
        } = t, s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        var l, u;
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i)
                return 10;
            if (!1 === o) {
                let t = i.length / e.length;
                return Math.max(1, 7 * t);
            }
            return 7;
        }
        if (r.test(e))
            return 5;
        if (l = i, u = e, l.split(/(?:,| )+/).every(e => RegExp(B.Z.escape(e), 'i').test(u)))
            return 3;
        if (s && a()(i, e))
            return 1;
    } catch (e) {
        K.error(e);
    }
    return 0;
}
function er(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function ei(e) {
    let {
            query: t,
            members: n,
            limit: r,
            filter: i,
            allowSnowflake: o
        } = e, s = U.default.getUsers(), u = P.Z.getGuildId(), c = t.toLocaleLowerCase(), d = (0, V.Fv)(c), _ = [], E = [], f = n.length, h = 0, p = 0;
    for (; h < f;) {
        var m, I, T, g, S, A, v, O, C;
        let e, r;
        let l = n[h];
        l instanceof N.Z ? (r = l, e = null === (I = R.ZP.getNick(u, r.id)) || void 0 === I ? void 0 : I.toLocaleLowerCase()) : (e = null === (T = l.nick) || void 0 === T ? void 0 : T.toLocaleLowerCase(), r = s[l.userId]);
        let f = null === (m = H.ZP.getGlobalName(r)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
        if (null == i || i(r)) {
            let n = r.username.toLocaleLowerCase(), i = (0, V._I)(n), s = (0, V.Fv)(i), l = null != e ? (0, V._I)(e) : null, u = null != l ? (0, V.Fv)(l) : null, h = null != f ? (0, V._I)(f) : null, m = null != h ? (0, V.Fv)(h) : null;
            o && t === r.id || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == f ? void 0 : f.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c ? _.push({
                type: Y.h8.USER,
                record: r,
                score: 10,
                comparator: null !== (g = null != f ? f : e) && void 0 !== g ? g : n,
                sortable: null !== (S = null != h ? h : l) && void 0 !== S ? S : i
            }) : s.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == m ? void 0 : m.substring(0, d.length)) === d ? _.push({
                type: Y.h8.USER,
                record: r,
                score: 1,
                comparator: null !== (A = null != f ? f : e) && void 0 !== A ? A : n,
                sortable: null !== (v = null != h ? h : l) && void 0 !== v ? v : i
            }) : p < 50 && (a()(c, i) || a()(d, s) || null != l && a()(c, l) || null != u && a()(d, u) || null != h && a()(c, h) || null != m && a()(d, m)) && (E.push({
                type: Y.h8.USER,
                record: r,
                score: 1,
                comparator: null !== (O = null != f ? f : e) && void 0 !== O ? O : n,
                sortable: null !== (C = null != h ? h : l) && void 0 !== C ? C : i
            }), p += 1);
        }
        h += 1;
    }
    return _.sort(l.Z), _.length < r && (E.sort(l.Z), _ = _.concat(E.slice(0, Math.max(0, r - _.length)))), _.length > r && (_.length = r), _;
}
function ea(e, t, n) {
    let r = 0, i = null;
    for (let a of t) {
        let t = en(e, a, n);
        t > r && (r = t, i = a);
    }
    return null != i && (i.isFullMatch ? t.length = 0 : t.splice(t.indexOf(i), 1)), r;
}
function eo(e, t) {
    let n = v.Z.getChannel(e);
    return null == e || null == n ? [] : s()(y.Z.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => U.default.getUser(e.author.id)).filter(e => {
        if (null == e || e.isNonUserBot())
            return !1;
        let t = n.getGuildId();
        return null == t || er(R.ZP.getMember(t, e.id));
    }).map(e => {
        var t;
        let r = n.getGuildId(), i = null != r ? R.ZP.getMember(r, e.id) : null;
        return {
            type: Y.h8.USER,
            record: e,
            score: 0,
            comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : H.ZP.getName(e)
        };
    }).take(t).value();
}
t.ZP = {
    queryFriends(e) {
        let {
            query: t,
            limit: n = 10,
            _fuzzy: r = !0,
            filter: i
        } = e;
        return ei({
            query: t,
            members: b.Z.getFriendIDs().map(e => U.default.getUser(e)).filter(x.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let {
            query: t,
            limit: n = 10,
            filter: r
        } = e;
        return ei({
            query: t,
            members: v.Z.getDMUserIds().map(e => U.default.getUser(e)).filter(x.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t, {
                channelId: n,
                query: r,
                limit: i = 10,
                request: a = !0,
                checkRecentlyTalkedOnEmptyQuery: o = !0,
                allowSnowflake: s = !1
            } = e, l = v.Z.getChannel(n);
        if (null == l)
            return [];
        let u = l.isThread() ? v.Z.getChannel(l.parent_id) : null, c = null != u ? u : l;
        if (null == c)
            return [];
        if (c.isPrivate()) {
            t = c.recipients.map(e => {
                var t;
                return {
                    userId: e,
                    nick: null !== (t = b.Z.getNickname(e)) && void 0 !== t ? t : null
                };
            });
            let e = U.default.getCurrentUser();
            null != e && t.push({
                userId: e.id,
                nick: null
            });
        } else {
            if (0 === r.length && o) {
                let e = eo(l.id, i);
                if (e.length > 0)
                    return e;
            }
            t = R.ZP.getMembers(c.guild_id).filter(er), a && G.Z.requestMembers(c.guild_id, r, i);
        }
        return ei({
            query: r,
            members: t,
            limit: i,
            filter: e => c.isPrivate() || k.BT({
                permission: Z.Plq.VIEW_CHANNEL,
                user: e,
                context: c
            }),
            allowSnowflake: s
        });
    },
    queryGuildUsers(e) {
        let {
            guildId: t,
            query: n,
            limit: r = 10,
            request: i = !0,
            checkRecentlyTalkedOnEmptyQuery: a = !0,
            filter: o,
            allowSnowflake: s
        } = e;
        if (null == C.Z.getGuild(t))
            return [];
        if (0 === n.length && a) {
            let e = eo(M.Z.getChannelId(t), r);
            if (e.length > 0)
                return e;
        }
        let l = R.ZP.getMembers(t).filter(er);
        return i && n.length > 0 && G.Z.requestMembers(t, n, r), ei({
            query: n,
            members: l,
            limit: r,
            filter: o,
            allowSnowflake: s
        });
    },
    queryUsers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]), r = arguments.length > 4 ? arguments[4] : void 0;
        return n && e.length > 0 && G.Z.requestMembers(null, e, t), ei({
            query: e,
            members: s()(U.default.getUsers()).values().value(),
            limit: t,
            filter: r
        });
    },
    queryChannels(e) {
        let t, {
                query: n,
                guildId: r,
                limit: i = Z.rnv,
                fuzzy: a = !0,
                filter: o = z,
                type: c = O.sH,
                allowEmptyQueries: d = !1,
                requireVocalConnectAccess: _ = !0,
                boosters: E = {},
                allowSnowflake: f
            } = e, h = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = e.split(' ').filter(e => '' !== e || t).map(e => {
                        let t = e.toLocaleLowerCase();
                        return {
                            queryLower: t,
                            exactQuery: RegExp('^'.concat(B.Z.escape(t)), 'i'),
                            containQuery: RegExp(B.Z.escape(t), 'i'),
                            isFullMatch: !1
                        };
                    });
                if (e.includes(' ')) {
                    let t = e.toLocaleLowerCase();
                    n.unshift({
                        queryLower: t,
                        exactQuery: RegExp('^'.concat(B.Z.escape(t).replace(' ', '( |-)')), 'i'),
                        containQuery: RegExp(B.Z.escape(t).replace(' ', '( |-)'), 'i'),
                        isFullMatch: !0
                    });
                }
                return n;
            }(n, d);
        t = null != r ? s()(O.ZP.getChannels(r)[c]).map(e => e.channel).concat(g.Z.computeAllActiveJoinedThreads(r)).value() : s()(v.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(g.Z.computeAllActiveJoinedThreads()).value();
        let p = {}, m = [];
        for (let e of t) {
            var I, T, S, N, R;
            if (I = c, T = e.type, S = null != r, !(I === T || (S || (0, A.Km)(T)) && (I === O.sH ? (0, A.r8)(T) || (0, A.bw)(T) : I === O.Zb && (0, A.bw)(T))) || (0, A.Km)(e.type) && !D.Z.can(_ ? e.accessPermissions : Z.Plq.VIEW_CHANNEL, e) || !o(e))
                continue;
            let t = [...h], i = e.name.toLocaleLowerCase(), s = f && n === e.id, l = s ? 10 : ea(i, t, a);
            if (0 !== l) {
                ;
                if (t.length > 0) {
                    for (let n of [
                            function (e, t) {
                                if (null == e.guild_id)
                                    return;
                                let n = t[e.guild_id];
                                if (null == n) {
                                    var r;
                                    n = t[e.guild_id] = null === (r = C.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
                                }
                                return n;
                            }(e, p),
                            function (e, t) {
                                if (null == e.parent_id)
                                    return;
                                let n = t[e.parent_id];
                                if (null == n) {
                                    var r;
                                    n = t[e.parent_id] = null === (r = v.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
                                }
                                return n;
                            }(e, p)
                        ]) {
                        if (null == n || '' === n)
                            continue;
                        let e = ea(n, t, !1);
                        0 !== e && (l += 0.5 * e);
                    }
                    l = Math.min(6, l);
                }
                if (0 === l || t.length > 1 || 1 === t.length && !t[0].isFullMatch && !s)
                    continue;
                if (N = c, R = e.type, N === O.sH && (0, A.bw)(R))
                    l = Math.max(l - 1, 0.5);
                m.push({
                    type: (0, A.bw)(e.type) ? Y.h8.VOICE_CHANNEL : Y.h8.TEXT_CHANNEL,
                    record: e,
                    score: ee(l, E[e.id]),
                    comparator: (0, u.F6)(e, U.default, b.Z),
                    sortable: i
                });
            }
        }
        return m.sort(l.Z), null != i && m.length > i && (m.length = i), m;
    },
    queryGuilds(e) {
        let {
                query: t,
                limit: n = 10,
                fuzzy: r = !0,
                filter: i = z,
                boosters: a = {}
            } = e, o = '' === t ? '' : t.toLocaleLowerCase(), u = {
                exactQuery: RegExp('^'.concat(B.Z.escape(o)), 'i'),
                containQuery: RegExp(B.Z.escape(o), 'i'),
                queryLower: o
            }, c = [];
        for (let e of s()(C.Z.getGuilds()).values().value()) {
            if (!i(e))
                continue;
            let t = e.name.toLocaleLowerCase(), n = en(t, u, r);
            n > 0 && c.push({
                type: Y.h8.GUILD,
                record: e,
                score: ee(n, a[e.id]),
                comparator: e.toString(),
                sortable: t
            });
        }
        return c.sort(l.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let {
                query: t,
                limit: n = 10,
                fuzzy: r = !0,
                filter: i = z,
                boosters: a = {}
            } = e, o = (0, V._I)((0, V.Fv)(t.toLocaleLowerCase())), c = {
                exactQuery: RegExp('^'.concat(B.Z.escape(o)), 'i'),
                containQuery: RegExp(B.Z.escape(o), 'i'),
                queryLower: o
            }, d = s()(v.Z.getMutablePrivateChannels()).values().value(), _ = [];
        for (let e of d) {
            if (!e.isMultiUserDM() || !i(e))
                continue;
            let t = (0, u.F6)(e, U.default, b.Z).toLocaleLowerCase(), n = (0, V._I)((0, V.Fv)(t)), o = en(n, c, r);
            o > 0 && _.push({
                type: Y.h8.GROUP_DM,
                record: e,
                score: ee(o, a[e.id]),
                comparator: (0, u.F6)(e, U.default, b.Z),
                sortable: n
            });
        }
        return _.sort(l.Z), _.length > n && (_.length = n), _;
    },
    queryApplications(e) {
        let {
                query: t,
                limit: n = 10,
                fuzzy: r = !0,
                filter: i = z
            } = e, a = t.toLocaleLowerCase(), o = {
                exactQuery: RegExp('^'.concat(B.Z.escape(a)), 'i'),
                containQuery: RegExp(B.Z.escape(a), 'i'),
                queryLower: a
            }, s = J(), u = [];
        for (let {application: e} of s) {
            if (!i(e))
                continue;
            let t = e.name.toLocaleLowerCase(), n = en(t, o, r);
            n > 0 && u.push({
                type: Y.h8.APPLICATION,
                record: e,
                score: n,
                comparator: e.name,
                sortable: t
            });
        }
        return u.sort(l.Z), u.length > n && (u.length = n), u;
    },
    querySKUs(e) {
        let {
                query: t,
                limit: n = 10,
                fuzzy: r = !0,
                filter: i = z
            } = e, a = t.toLocaleLowerCase(), o = {
                exactQuery: RegExp('^'.concat(B.Z.escape(a)), 'i'),
                containQuery: RegExp(B.Z.escape(a), 'i'),
                queryLower: a
            }, u = s()(w.Z.getSKUs()).values().value(), c = [];
        for (let e of u)
            if (e.type === Z.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(), n = en(t, o, r);
                n > 0 && c.push({
                    type: Y.h8.SKU,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                });
            }
        return c.sort(l.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: eo,
    queryMentionResults(e) {
        let {
                query: t,
                channel: n,
                canMentionEveryone: r = !1,
                canMentionHere: i = !0,
                canMentionUsers: o = !0,
                canMentionRoles: l = !0,
                includeAllGuildUsers: u = !1,
                includeNonMentionableRoles: c = !1,
                checkRecentlyTalkedOnEmptyQuery: d = !0,
                limit: _ = Z.rnv,
                request: E,
                allowSnowflake: f = !1
            } = e, h = o ? (u && null != n.guild_id ? this.queryGuildUsers({
                guildId: n.guild_id,
                query: t,
                limit: _,
                checkRecentlyTalkedOnEmptyQuery: d,
                request: E,
                allowSnowflake: f
            }) : this.queryChannelUsers({
                channelId: n.id,
                query: t,
                limit: _,
                checkRecentlyTalkedOnEmptyQuery: d,
                allowSnowflake: f
            })).map(e => {
                let {
                    record: t,
                    score: r,
                    comparator: i
                } = e;
                return {
                    user: t,
                    score: r,
                    comparator: i,
                    nick: R.ZP.getNick(n.guild_id, t.id),
                    status: L.Z.getStatus(t.id)
                };
            }) : [], p = h.length, m = t.toLowerCase(), I = [];
        if (p < _ && l) {
            let e = n.getGuildId(), t = C.Z.getGuild(e);
            null != t && (s()(C.Z.getRoles(t.id)).filter(t => {
                let {
                    mentionable: n,
                    name: i,
                    id: o
                } = t;
                return (n || r || c) && (a()(m, i.toLowerCase()) || f && m === o) && o !== F.default.castGuildIdAsEveryoneGuildRoleId(e);
            }).take(_ - p).forEach(e => {
                I.push(e);
            }), p += I.length);
        }
        let T = [];
        return !n.isPrivate() && r && l && (p < _ && a()(m, X().test) && (T.push(X()), p += 1), i && p < _ && a()(m, $().test) && T.push($())), {
            users: h,
            globals: T,
            roles: I
        };
    },
    queryGuildMentionResults(e) {
        let {
                query: t,
                guildId: n,
                canMentionEveryone: r = !1,
                canMentionUsers: i = !0,
                canMentionRoles: o = !0,
                canMentionNonMentionableRoles: l = !1
            } = e, u = i ? this.queryGuildUsers({
                guildId: n,
                query: t
            }).map(e => ({
                ...e,
                status: L.Z.getStatus(e.record.id)
            })) : [], d = u.length, _ = t.toLowerCase(), E = [];
        if (d < Z.rnv && o) {
            let e = C.Z.getGuild(n);
            null != e && (s()(C.Z.getRoles(e.id)).filter(e => {
                let {
                    mentionable: t,
                    name: i,
                    id: o
                } = e;
                return (t || r || l) && a()(_, i.toLowerCase()) && (0, c.Gy)(n, o);
            }).take(Z.rnv - d).forEach(e => {
                E.push(e);
            }), d += E.length);
        }
        let f = [];
        return r && o && (d < Z.rnv && a()(_, X().test) && (f.push(X()), d += 1), d < Z.rnv && a()(_, $().test) && f.push($())), {
            users: u,
            globals: f,
            roles: E
        };
    },
    queryChoice(e) {
        let {
                query: t,
                choices: n,
                limit: r = 10,
                fuzzy: i = !0
            } = e, a = t.toLocaleLowerCase(), o = RegExp('^'.concat(B.Z.escape(a)), 'i'), l = RegExp(B.Z.escape(a), 'i'), u = s()(n).map((e, t) => {
                let n = en(e.displayName.toLocaleLowerCase(), {
                    exactQuery: o,
                    containQuery: l,
                    queryLower: a
                }, i);
                return n > 0 ? {
                    choice: e,
                    score: n,
                    originalIndex: t
                } : null;
            }).filter(x.lm).sortBy(e => -1 * e.score);
        return null !== r && (u = u.take(r)), u.value();
    },
    queryStaticRouteChannels(e) {
        let {
                query: t,
                guild: n
            } = e, r = t.toLocaleLowerCase(), i = {
                exactQuery: RegExp('^'.concat(B.Z.escape(r)), 'i'),
                containQuery: RegExp(B.Z.escape(r), 'i'),
                queryLower: r
            }, a = (0, h.s)(n.id) && !n.hasFeature(Z.oNc.HUB), o = n.hasFeature(Z.oNc.COMMUNITY), s = (0, f.t)(n) && n.hasFeature(Z.oNc.COMMUNITY), l = [
                {
                    id: j.HY.SERVER_GUIDE,
                    name: W.Z.Messages.SERVER_GUIDE
                },
                {
                    id: j.HY.CHANNEL_BROWSER,
                    name: W.Z.Messages.CHANNEL_BROWSER_TITLE
                },
                {
                    id: j.HY.CUSTOMIZE_COMMUNITY,
                    name: W.Z.Messages.CHANNELS_AND_ROLES
                }
            ], u = [];
        for (let e of l) {
            if ((e.id !== j.HY.SERVER_GUIDE || !!a) && (e.id !== j.HY.CHANNEL_BROWSER || !!o) && (e.id !== j.HY.CUSTOMIZE_COMMUNITY || !!s))
                en(e.name.toLocaleLowerCase(), i, !1) > 0 && u.push(new A.nl({
                    id: e.id,
                    name: e.name,
                    type: Z.d4z.UNKNOWN,
                    guild_id: n.id
                }));
        }
        return u;
    },
    queryChannelResults(e) {
        let {
            query: t,
            channel: n,
            type: r = O.sH,
            channelTypes: i
        } = e;
        return {
            channels: this.queryChannels({
                query: t,
                guildId: n.getGuildId(),
                limit: void 0,
                fuzzy: void 0,
                filter: e => null == i || i.includes(e.type),
                type: r,
                allowEmptyQueries: !0
            }).map(e => e.record)
        };
    },
    queryApplicationCommandChannelResults(e) {
        let {
            query: t,
            channel: n,
            channelTypes: r,
            limit: i = Z.rnv,
            allowSnowflake: a
        } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
        }
        let o = [];
        for (let e of et)
            o = o.concat(this.queryChannels({
                query: t,
                guildId: n.guild_id,
                limit: i,
                fuzzy: !0,
                filter: e => null == r || r.includes(e.type),
                type: e,
                allowEmptyQueries: !0,
                requireVocalConnectAccess: !1,
                allowSnowflake: a
            }));
        return o = o.filter(e => {
            let {record: t} = e;
            return 'null' !== t.id;
        }).sort(d.Z), null != i && o.length > i && (o = o.slice(0, i)), { channels: o.map(e => e.record) };
    },
    queryChoiceResults(e) {
        let {
            query: t,
            choices: n
        } = e;
        return {
            choices: this.queryChoice({
                query: t,
                choices: n,
                limit: null
            }).map(e => e.choice)
        };
    },
    queryEmojiResults(e) {
        let {
            query: t,
            channel: n,
            intention: r,
            maxCount: i = Z.rnv,
            matchComparator: a
        } = e;
        return S.DZ.loadIfNecessary(), {
            emojis: E.Z.searchWithoutFetchingLatest({
                channel: n,
                query: t,
                count: i,
                intention: r,
                matchComparator: a
            })
        };
    },
    queryStickers(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [
                null,
                z
            ], {stickerMetadata: i} = I.Z, a = U.default.getCurrentUser(), o = new Set(), l = [];
        for (let s of (S.DZ.loadIfNecessary(), e)) {
            if ('' === s)
                continue;
            let e = s.toLocaleLowerCase(), u = (0, V._I)(e), c = RegExp('^'.concat(B.Z.escape(u)), 'i'), d = RegExp(''.concat(B.Z.escape(u)), 'i');
            i.forEach((i, s) => {
                let u = 0, _ = null, E = I.Z.getStickerById(s);
                if (null == E || !r(E, (0, p.cO)(E, a, n)))
                    return;
                for (let n of i) {
                    let {
                            type: r,
                            value: i
                        } = n, a = function (e) {
                            switch (e) {
                            case T.MO.STICKER_NAME:
                                return 11;
                            case T.MO.CORRELATED_EMOJI:
                                return 6;
                            case T.MO.TAG:
                                return 1;
                            case T.MO.GUILD_NAME:
                            case T.MO.PACK_NAME:
                                return 8;
                            default:
                                return 1;
                            }
                        }(r), o = 0;
                    t ? i === e ? o = 10 * a : c.test(i) ? o = 7 * a : (r === T.MO.GUILD_NAME || r === T.MO.PACK_NAME || r === T.MO.STICKER_NAME) && d.test(i) && (o = 5 * a) : i === e && (o = 10 * a, _ = i), o > u && (u = o, _ = i);
                }
                let f = m.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
                null != f && (u *= f / 100), u > 0 && null != _ && !o.has(E.id) && (o.add(E.id), l.push({
                    sticker: E,
                    comparator: _,
                    score: u
                }));
            });
        }
        return 0 === (l = s()(l).sortBy(e => -1 * e.score).value()).length && (l = Q), l;
    },
    matchSentinel: (e, t, n) => !q.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo())
            return !1;
        let n = C.Z.getGuild(e.getGuildId());
        for (let {name: e} of Object.values(null != n ? C.Z.getRoles(n.id) : {}))
            if (t.username.startsWith(e.toLowerCase()))
                return !0;
        return !1;
    }
};
