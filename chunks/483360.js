"use strict";
let i;
n.d(t, {
  k1: function() {
    return et
  }
}), n(653041), n(733860), n(757143), n(47120);
var r = n(658722),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(620490),
  u = n(933557),
  _ = n(605436),
  d = n(565924),
  c = n(710845),
  E = n(339085),
  I = n(31445),
  T = n(931261),
  h = n(285651),
  S = n(822179),
  f = n(926491),
  N = n(373228),
  A = n(601070),
  m = n(675478),
  O = n(131704),
  R = n(598077),
  C = n(592125),
  p = n(984933),
  g = n(271383),
  L = n(430824),
  v = n(375954),
  D = n(496675),
  M = n(158776),
  P = n(699516),
  y = n(944486),
  U = n(914010),
  b = n(594174),
  G = n(55563),
  w = n(823379),
  k = n(892880),
  B = n(700785),
  x = n(226951),
  V = n(709054),
  Z = n(624138),
  H = n(51144),
  F = n(981631),
  Y = n(727785),
  j = n(176505),
  W = n(689938);
let K = new c.Z("AutocompleteUtils"),
  z = () => !0,
  q = /(\t|\s)/,
  X = [],
  Q = (i = n(786074).Z).MENTION_EVERYONE,
  J = i.MENTION_HERE,
  $ = i.LAUNCHABLE_APPLICATIONS;

function ee() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0;
  return 1e3 * e * (null != t ? t : 1)
}
let et = [p.sH, p.Zb, F.d4z.GUILD_CATEGORY];

function en(e, t) {
  let {
    exactQuery: n,
    containQuery: i,
    queryLower: r,
    isFullMatch: o
  } = t, a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  try {
    var l, u;
    if (n.test(e)) {
      if (e.toLocaleLowerCase() === r) return 10;
      if (!1 === o) {
        let t = r.length / e.length;
        return Math.max(1, 7 * t)
      }
      return 7
    }
    if (i.test(e)) return 5;
    if (l = r, u = e, l.split(/(?:,| )+/).every(e => RegExp(x.Z.escape(e), "i").test(u))) return 3;
    if (a && s()(r, e)) return 1
  } catch (e) {
    K.error(e)
  }
  return 0
}

function ei(e) {
  return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
}

function er(e) {
  let {
    query: t,
    members: n,
    limit: i,
    filter: r,
    allowSnowflake: o
  } = e, a = b.default.getUsers(), u = U.Z.getGuildId(), _ = t.toLocaleLowerCase(), d = (0, Z.Fv)(_), c = [], E = [], I = n.length, T = 0, h = 0;
  for (; T < I;) {
    var S, f, N, A, m, O, C, p, L;
    let e, i;
    let l = n[T];
    l instanceof R.Z ? (i = l, e = null === (f = g.ZP.getNick(u, i.id)) || void 0 === f ? void 0 : f.toLocaleLowerCase()) : (e = null === (N = l.nick) || void 0 === N ? void 0 : N.toLocaleLowerCase(), i = a[l.userId]);
    let I = null === (S = H.ZP.getGlobalName(i)) || void 0 === S ? void 0 : S.toLocaleLowerCase();
    if (null == r || r(i)) {
      let n = i.username.toLocaleLowerCase(),
        r = (0, Z._I)(n),
        a = (0, Z.Fv)(r),
        l = null != e ? (0, Z._I)(e) : null,
        u = null != l ? (0, Z.Fv)(l) : null,
        T = null != I ? (0, Z._I)(I) : null,
        S = null != T ? (0, Z.Fv)(T) : null;
      o && t === i.id || n.substring(0, _.length) === _ || r.substring(0, _.length) === _ || (null == e ? void 0 : e.substring(0, _.length)) === _ || (null == l ? void 0 : l.substring(0, _.length)) === _ || (null == I ? void 0 : I.substring(0, _.length)) === _ || (null == T ? void 0 : T.substring(0, _.length)) === _ ? c.push({
        type: Y.h8.USER,
        record: i,
        score: 10,
        comparator: null !== (A = null != I ? I : e) && void 0 !== A ? A : n,
        sortable: null !== (m = null != T ? T : l) && void 0 !== m ? m : r
      }) : a.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == S ? void 0 : S.substring(0, d.length)) === d ? c.push({
        type: Y.h8.USER,
        record: i,
        score: 1,
        comparator: null !== (O = null != I ? I : e) && void 0 !== O ? O : n,
        sortable: null !== (C = null != T ? T : l) && void 0 !== C ? C : r
      }) : h < 50 && (s()(_, r) || s()(d, a) || null != l && s()(_, l) || null != u && s()(d, u) || null != T && s()(_, T) || null != S && s()(d, S)) && (E.push({
        type: Y.h8.USER,
        record: i,
        score: 1,
        comparator: null !== (p = null != I ? I : e) && void 0 !== p ? p : n,
        sortable: null !== (L = null != T ? T : l) && void 0 !== L ? L : r
      }), h += 1)
    }
    T += 1
  }
  return c.sort(l.Z), c.length < i && (E.sort(l.Z), c = c.concat(E.slice(0, Math.max(0, i - c.length)))), c.length > i && (c.length = i), c
}

function es(e, t, n) {
  let i = 0,
    r = null;
  for (let s of t) {
    let t = en(e, s, n);
    t > i && (i = t, r = s)
  }
  return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), i
}

function eo(e, t) {
  let n = C.Z.getChannel(e);
  return null == e || null == n ? [] : a()(v.Z.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => b.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot()) return !1;
    let t = n.getGuildId();
    return null == t || ei(g.ZP.getMember(t, e.id))
  }).map(e => {
    var t;
    let i = n.getGuildId(),
      r = null != i ? g.ZP.getMember(i, e.id) : null;
    return {
      type: Y.h8.USER,
      record: e,
      score: 0,
      comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : H.ZP.getName(e)
    }
  }).take(t).value()
}
t.ZP = {
  queryFriends(e) {
    let {
      query: t,
      limit: n = 10,
      _fuzzy: i = !0,
      filter: r
    } = e;
    return er({
      query: t,
      members: P.Z.getFriendIDs().map(e => b.default.getUser(e)).filter(w.lm),
      limit: n,
      filter: r
    })
  },
  queryDMUsers(e) {
    let {
      query: t,
      limit: n = 10,
      filter: i
    } = e;
    return er({
      query: t,
      members: C.Z.getDMUserIds().map(e => b.default.getUser(e)).filter(w.lm),
      limit: n,
      filter: i
    })
  },
  queryChannelUsers(e) {
    let t, {
        channelId: n,
        query: i,
        limit: r = 10,
        request: s = !0,
        checkRecentlyTalkedOnEmptyQuery: o = !0,
        allowSnowflake: a = !1
      } = e,
      l = C.Z.getChannel(n);
    if (null == l) return [];
    let u = l.isThread() ? C.Z.getChannel(l.parent_id) : null,
      _ = null != u ? u : l;
    if (null == _) return [];
    if (_.isPrivate()) {
      t = _.recipients.map(e => {
        var t;
        return {
          userId: e,
          nick: null !== (t = P.Z.getNickname(e)) && void 0 !== t ? t : null
        }
      });
      let e = b.default.getCurrentUser();
      null != e && t.push({
        userId: e.id,
        nick: null
      })
    } else {
      if (0 === i.length && o) {
        let e = eo(l.id, r);
        if (e.length > 0) return e
      }
      t = g.ZP.getMembers(_.guild_id).filter(ei), s && k.Z.requestMembers(_.guild_id, i, r)
    }
    return er({
      query: i,
      members: t,
      limit: r,
      filter: e => _.isPrivate() || B.BT({
        permission: F.Plq.VIEW_CHANNEL,
        user: e,
        context: _
      }),
      allowSnowflake: a
    })
  },
  queryGuildUsers(e) {
    let {
      guildId: t,
      query: n,
      limit: i = 10,
      request: r = !0,
      checkRecentlyTalkedOnEmptyQuery: s = !0,
      filter: o,
      allowSnowflake: a
    } = e;
    if (null == L.Z.getGuild(t)) return [];
    if (0 === n.length && s) {
      let e = eo(y.Z.getChannelId(t), i);
      if (e.length > 0) return e
    }
    let l = g.ZP.getMembers(t).filter(ei);
    return r && n.length > 0 && k.Z.requestMembers(t, n, i), er({
      query: n,
      members: l,
      limit: i,
      filter: o,
      allowSnowflake: a
    })
  },
  queryUsers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
      i = arguments.length > 4 ? arguments[4] : void 0;
    return n && e.length > 0 && k.Z.requestMembers(null, e, t), er({
      query: e,
      members: a()(b.default.getUsers()).values().value(),
      limit: t,
      filter: i
    })
  },
  queryChannels(e) {
    let t, {
        query: n,
        guildId: i,
        limit: r = F.rnv,
        fuzzy: s = !0,
        filter: o = z,
        type: _ = p.sH,
        allowEmptyQueries: d = !1,
        requireVocalConnectAccess: c = !0,
        boosters: E = {},
        allowSnowflake: I
      } = e,
      T = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.split(" ").filter(e => "" !== e || t).map(e => {
            let t = e.toLocaleLowerCase();
            return {
              queryLower: t,
              exactQuery: RegExp("^".concat(x.Z.escape(t)), "i"),
              containQuery: RegExp(x.Z.escape(t), "i"),
              isFullMatch: !1
            }
          });
        if (e.includes(" ")) {
          let t = e.toLocaleLowerCase();
          n.unshift({
            queryLower: t,
            exactQuery: RegExp("^".concat(x.Z.escape(t).replace(" ", "( |-)")), "i"),
            containQuery: RegExp(x.Z.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0
          })
        }
        return n
      }(n, d);
    t = null != i ? a()(p.ZP.getChannels(i)[_]).map(e => e.channel).concat(A.Z.computeAllActiveJoinedThreads(i)).value() : a()(C.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.Z.computeAllActiveJoinedThreads()).value();
    let h = {},
      S = [];
    for (let e of t) {
      var f, N, m, R, g;
      if (f = _, N = e.type, m = null != i, !(f === N || (m || (0, O.Km)(N)) && (f === p.sH ? (0, O.r8)(N) || (0, O.bw)(N) : f === p.Zb && (0, O.bw)(N))) || (0, O.Km)(e.type) && !D.Z.can(c ? e.accessPermissions : F.Plq.VIEW_CHANNEL, e) || !o(e)) continue;
      let t = [...T],
        r = e.name.toLocaleLowerCase(),
        a = I && n === e.id,
        l = a ? 10 : es(r, t, s);
      if (0 !== l) {
        ;
        if (t.length > 0) {
          for (let n of [function(e, t) {
              if (null == e.guild_id) return;
              let n = t[e.guild_id];
              if (null == n) {
                var i;
                n = t[e.guild_id] = null === (i = L.Z.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase()
              }
              return n
            }(e, h), function(e, t) {
              if (null == e.parent_id) return;
              let n = t[e.parent_id];
              if (null == n) {
                var i;
                n = t[e.parent_id] = null === (i = C.Z.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase()
              }
              return n
            }(e, h)]) {
            if (null == n || "" === n) continue;
            let e = es(n, t, !1);
            0 !== e && (l += .5 * e)
          }
          l = Math.min(6, l)
        }
        if (0 === l || t.length > 1 || 1 === t.length && !t[0].isFullMatch && !a) continue;
        if (R = _, g = e.type, R === p.sH && (0, O.bw)(g)) l = Math.max(l - 1, .5);
        S.push({
          type: (0, O.bw)(e.type) ? Y.h8.VOICE_CHANNEL : Y.h8.TEXT_CHANNEL,
          record: e,
          score: ee(l, E[e.id]),
          comparator: (0, u.F6)(e, b.default, P.Z),
          sortable: r
        })
      }
    }
    return S.sort(l.Z), null != r && S.length > r && (S.length = r), S
  },
  queryGuilds(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = z,
      boosters: s = {}
    } = e, o = "" === t ? "" : t.toLocaleLowerCase(), u = {
      exactQuery: RegExp("^".concat(x.Z.escape(o)), "i"),
      containQuery: RegExp(x.Z.escape(o), "i"),
      queryLower: o
    }, _ = [];
    for (let e of a()(L.Z.getGuilds()).values().value()) {
      if (!r(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        n = en(t, u, i);
      n > 0 && _.push({
        type: Y.h8.GUILD,
        record: e,
        score: ee(n, s[e.id]),
        comparator: e.toString(),
        sortable: t
      })
    }
    return _.sort(l.Z), _.length > n && (_.length = n), _
  },
  queryGroupDMs(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = z,
      boosters: s = {}
    } = e, o = (0, Z._I)((0, Z.Fv)(t.toLocaleLowerCase())), _ = {
      exactQuery: RegExp("^".concat(x.Z.escape(o)), "i"),
      containQuery: RegExp(x.Z.escape(o), "i"),
      queryLower: o
    }, d = a()(C.Z.getMutablePrivateChannels()).values().value(), c = [];
    for (let e of d) {
      if (!e.isMultiUserDM() || !r(e)) continue;
      let t = (0, u.F6)(e, b.default, P.Z).toLocaleLowerCase(),
        n = (0, Z._I)((0, Z.Fv)(t)),
        o = en(n, _, i);
      o > 0 && c.push({
        type: Y.h8.GROUP_DM,
        record: e,
        score: ee(o, s[e.id]),
        comparator: (0, u.F6)(e, b.default, P.Z),
        sortable: n
      })
    }
    return c.sort(l.Z), c.length > n && (c.length = n), c
  },
  queryApplications(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = z
    } = e, s = t.toLocaleLowerCase(), o = {
      exactQuery: RegExp("^".concat(x.Z.escape(s)), "i"),
      containQuery: RegExp(x.Z.escape(s), "i"),
      queryLower: s
    }, a = $(), u = [];
    for (let {
        application: e
      }
      of a) {
      if (!r(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        n = en(t, o, i);
      n > 0 && u.push({
        type: Y.h8.APPLICATION,
        record: e,
        score: n,
        comparator: e.name,
        sortable: t
      })
    }
    return u.sort(l.Z), u.length > n && (u.length = n), u
  },
  querySKUs(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = z
    } = e, s = t.toLocaleLowerCase(), o = {
      exactQuery: RegExp("^".concat(x.Z.escape(s)), "i"),
      containQuery: RegExp(x.Z.escape(s), "i"),
      queryLower: s
    }, u = a()(G.Z.getSKUs()).values().value(), _ = [];
    for (let e of u)
      if (e.type === F.epS.DURABLE_PRIMARY && r(e)) {
        let t = e.name.toLocaleLowerCase(),
          n = en(t, o, i);
        n > 0 && _.push({
          type: Y.h8.SKU,
          record: e,
          score: n,
          comparator: e.name,
          sortable: t
        })
      } return _.sort(l.Z), _.length > n && (_.length = n), _
  },
  getRecentlyTalked: eo,
  queryMentionResults(e) {
    let {
      query: t,
      channel: n,
      canMentionEveryone: i = !1,
      canMentionHere: r = !0,
      canMentionUsers: o = !0,
      canMentionRoles: l = !0,
      includeAllGuildUsers: u = !1,
      includeNonMentionableRoles: _ = !1,
      checkRecentlyTalkedOnEmptyQuery: d = !0,
      limit: c = F.rnv,
      request: E,
      allowSnowflake: I = !1
    } = e, T = o ? (u && null != n.guild_id ? this.queryGuildUsers({
      guildId: n.guild_id,
      query: t,
      limit: c,
      checkRecentlyTalkedOnEmptyQuery: d,
      request: E,
      allowSnowflake: I
    }) : this.queryChannelUsers({
      channelId: n.id,
      query: t,
      limit: c,
      checkRecentlyTalkedOnEmptyQuery: d,
      allowSnowflake: I
    })).map(e => {
      let {
        record: t,
        score: i,
        comparator: r
      } = e;
      return {
        user: t,
        score: i,
        comparator: r,
        nick: g.ZP.getNick(n.guild_id, t.id),
        status: M.Z.getStatus(t.id)
      }
    }) : [], h = T.length, S = t.toLowerCase(), f = [];
    if (h < c && l) {
      let e = n.getGuildId(),
        t = L.Z.getGuild(e);
      null != t && (a()(L.Z.getRoles(t.id)).filter(t => {
        let {
          mentionable: n,
          name: r,
          id: o
        } = t;
        return (n || i || _) && (s()(S, r.toLowerCase()) || I && S === o) && o !== V.default.castGuildIdAsEveryoneGuildRoleId(e)
      }).take(c - h).forEach(e => {
        f.push(e)
      }), h += f.length)
    }
    let N = [];
    return !n.isPrivate() && i && l && (h < c && s()(S, Q().test) && (N.push(Q()), h += 1), r && h < c && s()(S, J().test) && N.push(J())), {
      users: T,
      globals: N,
      roles: f
    }
  },
  queryGuildMentionResults(e) {
    let {
      query: t,
      guildId: n,
      canMentionEveryone: i = !1,
      canMentionUsers: r = !0,
      canMentionRoles: o = !0,
      canMentionNonMentionableRoles: l = !1
    } = e, u = r ? this.queryGuildUsers({
      guildId: n,
      query: t
    }).map(e => ({
      ...e,
      status: M.Z.getStatus(e.record.id)
    })) : [], d = u.length, c = t.toLowerCase(), E = [];
    if (d < F.rnv && o) {
      let e = L.Z.getGuild(n);
      null != e && (a()(L.Z.getRoles(e.id)).filter(e => {
        let {
          mentionable: t,
          name: r,
          id: o
        } = e;
        return (t || i || l) && s()(c, r.toLowerCase()) && (0, _.Gy)(n, o)
      }).take(F.rnv - d).forEach(e => {
        E.push(e)
      }), d += E.length)
    }
    let I = [];
    return i && o && (d < F.rnv && s()(c, Q().test) && (I.push(Q()), d += 1), d < F.rnv && s()(c, J().test) && I.push(J())), {
      users: u,
      globals: I,
      roles: E
    }
  },
  queryChoice(e) {
    let {
      query: t,
      choices: n,
      limit: i = 10,
      fuzzy: r = !0
    } = e, s = t.toLocaleLowerCase(), o = RegExp("^".concat(x.Z.escape(s)), "i"), l = RegExp(x.Z.escape(s), "i"), u = a()(n).map((e, t) => {
      let n = en(e.displayName.toLocaleLowerCase(), {
        exactQuery: o,
        containQuery: l,
        queryLower: s
      }, r);
      return n > 0 ? {
        choice: e,
        score: n,
        originalIndex: t
      } : null
    }).filter(w.lm).sortBy(e => -1 * e.score);
    return null !== i && (u = u.take(i)), u.value()
  },
  queryStaticRouteChannels(e) {
    let {
      query: t,
      guild: n
    } = e, i = t.toLocaleLowerCase(), r = {
      exactQuery: RegExp("^".concat(x.Z.escape(i)), "i"),
      containQuery: RegExp(x.Z.escape(i), "i"),
      queryLower: i
    }, s = (0, T.s)(n.id) && !n.hasFeature(F.oNc.HUB), o = n.hasFeature(F.oNc.COMMUNITY), a = (0, I.t)(n) && n.hasFeature(F.oNc.COMMUNITY), l = [{
      id: j.HY.SERVER_GUIDE,
      name: W.Z.Messages.SERVER_GUIDE
    }, {
      id: j.HY.CHANNEL_BROWSER,
      name: W.Z.Messages.CHANNEL_BROWSER_TITLE
    }, {
      id: j.HY.CUSTOMIZE_COMMUNITY,
      name: W.Z.Messages.CHANNELS_AND_ROLES
    }], u = [];
    for (let e of l) {
      if ((e.id !== j.HY.SERVER_GUIDE || !!s) && (e.id !== j.HY.CHANNEL_BROWSER || !!o) && (e.id !== j.HY.CUSTOMIZE_COMMUNITY || !!a)) en(e.name.toLocaleLowerCase(), r, !1) > 0 && u.push(new O.nl({
        id: e.id,
        name: e.name,
        type: F.d4z.UNKNOWN,
        guild_id: n.id
      }))
    }
    return u
  },
  queryChannelResults(e) {
    let {
      query: t,
      channel: n,
      type: i = p.sH,
      channelTypes: r
    } = e;
    return {
      channels: this.queryChannels({
        query: t,
        guildId: n.getGuildId(),
        limit: void 0,
        fuzzy: void 0,
        filter: e => null == r || r.includes(e.type),
        type: i,
        allowEmptyQueries: !0
      }).map(e => e.record)
    }
  },
  queryApplicationCommandChannelResults(e) {
    let {
      query: t,
      channel: n,
      channelTypes: i,
      limit: r = F.rnv,
      allowSnowflake: s
    } = e;
    if (null == n.guild_id) {
      let e = [];
      return (null == i || i.includes(n.type)) && e.push(n), {
        channels: e
      }
    }
    let o = [];
    for (let e of et) o = o.concat(this.queryChannels({
      query: t,
      guildId: n.guild_id,
      limit: r,
      fuzzy: !0,
      filter: e => null == i || i.includes(e.type),
      type: e,
      allowEmptyQueries: !0,
      requireVocalConnectAccess: !1,
      allowSnowflake: s
    }));
    return o = o.filter(e => {
      let {
        record: t
      } = e;
      return "null" !== t.id
    }).sort(d.Z), null != r && o.length > r && (o = o.slice(0, r)), {
      channels: o.map(e => e.record)
    }
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
    }
  },
  queryEmojiResults(e) {
    let {
      query: t,
      channel: n,
      intention: i,
      maxCount: r = F.rnv,
      matchComparator: s
    } = e;
    return m.DZ.loadIfNecessary(), {
      emojis: E.Z.searchWithoutFetchingLatest({
        channel: n,
        query: t,
        count: r,
        intention: i,
        matchComparator: s
      })
    }
  },
  queryStickers(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, z],
      {
        stickerMetadata: r
      } = f.Z,
      s = b.default.getCurrentUser(),
      o = new Set,
      l = [];
    for (let a of (m.DZ.loadIfNecessary(), e)) {
      if ("" === a) continue;
      let e = a.toLocaleLowerCase(),
        u = (0, Z._I)(e),
        _ = RegExp("^".concat(x.Z.escape(u)), "i"),
        d = RegExp("".concat(x.Z.escape(u)), "i");
      r.forEach((r, a) => {
        let u = 0,
          c = null,
          E = f.Z.getStickerById(a);
        if (null == E || !i(E, (0, h.cO)(E, s, n))) return;
        for (let n of r) {
          let {
            type: i,
            value: r
          } = n, s = function(e) {
            switch (e) {
              case N.MO.STICKER_NAME:
                return 11;
              case N.MO.CORRELATED_EMOJI:
                return 6;
              case N.MO.TAG:
                return 1;
              case N.MO.GUILD_NAME:
              case N.MO.PACK_NAME:
                return 8;
              default:
                return 1
            }
          }(i), o = 0;
          t ? r === e ? o = 10 * s : _.test(r) ? o = 7 * s : (i === N.MO.GUILD_NAME || i === N.MO.PACK_NAME || i === N.MO.STICKER_NAME) && d.test(r) && (o = 5 * s) : r === e && (o = 10 * s, c = r), o > u && (u = o, c = r)
        }
        let I = S.Z.stickerFrecencyWithoutFetchingLatest.getScore(a);
        null != I && (u *= I / 100), u > 0 && null != c && !o.has(E.id) && (o.add(E.id), l.push({
          sticker: E,
          comparator: c,
          score: u
        }))
      })
    }
    return 0 === (l = a()(l).sortBy(e => -1 * e.score).value()).length && (l = X), l
  },
  matchSentinel: (e, t, n) => !q.test(t) && e === n,
  hasSameRoleAsUsername(e, t) {
    if (!t.isPomelo()) return !1;
    let n = L.Z.getGuild(e.getGuildId());
    for (let {
        name: e
      }
      of Object.values(null != n ? L.Z.getRoles(n.id) : {}))
      if (t.username.startsWith(e.toLowerCase())) return !0;
    return !1
  }
}