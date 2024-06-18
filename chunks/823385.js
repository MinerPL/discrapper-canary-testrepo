"use strict";
let i;
n(653041), n(47120), n(733860), n(724458);
var r, s = n(392711),
  o = n.n(s),
  a = n(442837),
  l = n(433517),
  u = n(570140),
  _ = n(212819),
  d = n(938078),
  c = n(781157),
  E = n(220444),
  I = n(601070),
  T = n(210887),
  h = n(314897),
  S = n(592125),
  f = n(703558),
  N = n(984933),
  A = n(271383),
  m = n(430824),
  O = n(496675),
  R = n(306680),
  C = n(944486),
  p = n(914010),
  g = n(9156),
  L = n(483360),
  v = n(823379),
  D = n(981631),
  M = n(689938);

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let y = "seenQSTutorial",
  U = [_.h8.USER, _.h8.GROUP_DM, _.h8.TEXT_CHANNEL, _.h8.GUILD, _.h8.APPLICATION, _.h8.LINK],
  b = 0,
  G = !1,
  w = !1,
  k = null,
  B = [],
  x = null,
  V = 0,
  Z = [],
  H = [];

function F() {
  w = m.Z.getGuildCount() >= 3 || o().size(S.Z.getMutablePrivateChannels()) >= 20, Z = []
}

function Y(e) {
  let t = (0, d.Z)(e);
  return null == t || null != k && k !== t.type ? null : t
}

function j(e) {
  var t;
  let {
    query: n,
    queryMode: r
  } = e, s = (0, c.O7)() ? void 0 : null !== (t = p.Z.getGuildId()) && void 0 !== t ? t : void 0, o = new Set(["user:".concat(h.default.getId())]);
  null != s && o.add("guild:".concat(s)), i = null != i ? i : new _.ZP(W, U, null != r ? 100 : 5, {
    frecencyBoosters: !0,
    blacklist: o
  }), x = null, V = n.length, k = r, i.search(n)
}

function W(e, t) {
  if (! function(e, t) {
      if (e.length !== t.length) return !1;
      for (let n = 0; n < e.length; n++) {
        let i = e[n],
          r = t[n];
        if (i.record.id !== r.record.id) return !1
      }
      return !0
    }(e = "" === (t = t.trim()).trim() ? function() {
      var e, t;
      let n = null !== (e = p.Z.getGuildId()) && void 0 !== e ? e : void 0,
        i = null !== (t = C.Z.getChannelId()) && void 0 !== t ? t : void 0;
      switch (k) {
        case _.h8.USER: {
          let e = h.default.getId();
          return L.ZP.getRecentlyTalked(i, 100).filter(t => {
            let {
              record: n
            } = t;
            return n.id !== e
          })
        }
        case _.h8.APPLICATION:
          return L.ZP.queryApplications({
            query: "",
            limit: 100,
            fuzzy: !0
          });
        case _.h8.GUILD:
          return L.ZP.queryGuilds({
            query: "",
            limit: 100,
            fuzzy: !0
          });
        case _.h8.TEXT_CHANNEL:
          return L.ZP.queryChannels({
            query: "",
            guildId: p.Z.getGuildId(),
            limit: 100,
            fuzzy: !0
          });
        case _.h8.VOICE_CHANNEL:
          return L.ZP.queryChannels({
            query: "",
            guildId: p.Z.getGuildId(),
            limit: 100,
            fuzzy: !0,
            filter: () => !0,
            type: N.Zb
          })
      }
      let r = [],
        s = [];
      for (let e = 1; e < H.length; e += 1) {
        let t = Y(H[e]);
        if (null != t)(t.type !== _.h8.TEXT_CHANNEL && t.type !== _.h8.VOICE_CHANNEL || O.Z.can(D.Plq.VIEW_CHANNEL, t.record)) && s.push(t)
      }
      s.length > 0 && r.push((0, _.o6)(M.Z.Messages.QUICKSWITCHER_LAST_CHANNEL), ...s);
      let a = function(e) {
        let t = [];
        return f.Z.getRecentlyEditedDrafts(f.d.ChannelMessage).forEach(n => {
          let {
            channelId: i
          } = n;
          if (e(i)) return;
          let r = Y(i);
          null != r && t.push(r)
        }), t
      }(e => e === i || H.includes(e));
      a.length > 0 && r.push((0, _.o6)(M.Z.Messages.QUICKSWITCHER_DRAFTS), ...a);
      let l = R.ZP.getMentionChannelIds().filter(e => e !== i && !H.includes(e)).map(e => Y(e)).filter(v.lm).reverse();
      if (l.length > 0 && (r.push((0, _.o6)(M.Z.Messages.QUICKSWITCHER_MENTIONS)), r = r.concat(l)), null != n) {
        let e = N.ZP.getSelectableChannelIds(n).filter(e => {
          let t = S.Z.getChannel(e);
          return !(null == t || e === i || H.includes(e) || g.ZP.isChannelMuted(t.guild_id, e) || null != t.parent_id && g.ZP.isChannelMuted(t.guild_id, t.parent_id)) && (0, E.d)(t)
        }).map(e => Y(e)).filter(e => e);
        Object.values(I.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach(t => {
          for (let n in t) {
            let t = Y(n);
            null != t && e.push(t)
          }
        }), e.length > 0 && (r.push((0, _.o6)(M.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), r = r.concat(e))
      }
      return o()(r).uniqBy(e => e.record.id).value()
    }() : e, Z)) Z = e, ! function(e, t) {
    switch (k) {
      case _.h8.USER: {
        let t = m.Z.getGuild(p.Z.getGuildId());
        e.unshift((0, _.o6)(null != t ? M.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
          name: t.name
        }) : M.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS)), B = e;
        break
      }
      case _.h8.TEXT_CHANNEL:
        e.unshift((0, _.o6)(M.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), B = e;
        break;
      case _.h8.VOICE_CHANNEL:
        e.unshift((0, _.o6)(M.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), B = e;
        break;
      case _.h8.GUILD:
        e.unshift((0, _.o6)(M.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), B = e;
        break;
      case _.h8.APPLICATION:
        e.unshift((0, _.o6)(M.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), B = e;
        break;
      default:
        B = e
    }
    if (t !== x) x = t, V = Math.max(t.length, V), b = (0, _.gJ)(_.a8.DOWN, -1, B);
    else {
      let e = B[b];
      null != e && e.type === _.h8.HEADER && (b = (0, _.gJ)(_.a8.DOWN, b, B))
    }
    q.emitChange()
  }(e, t)
}

function K() {
  x = null, V = 0, Z = [], null != i && (i.destroy(), i = null)
}
class z extends(r = a.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(A.ZP, m.Z, S.Z), this.syncWith([T.Z], () => !0), G = l.K.get(y) || !1, H = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
  }
  getState() {
    return {
      channelHistory: H
    }
  }
  isOpen() {
    return null != i
  }
  getResultTotals(e) {
    return null == i ? 0 : null == e ? i.results.reduce((e, t) => t.type !== _.h8.HEADER ? e + 1 : e, 0) : i.results.reduce((t, n) => n.type === e ? t + 1 : t, 0)
  }
  channelNoticePredicate(e, t) {
    let n = Date.now() - t >= D.Hqc;
    return w && n
  }
  getFrequentGuilds() {
    return null != i ? i.queryGuilds("", 100) : null
  }
  getFrequentGuildsLength() {
    return null != i ? i.queryGuilds("", 100).length : 0
  }
  getChannelHistory() {
    return H
  }
  getProps() {
    return {
      theme: T.Z.theme,
      query: null != i ? i.query : "",
      queryMode: k,
      results: B,
      selectedIndex: b,
      seenTutorial: G,
      maxQueryLength: V
    }
  }
}
P(z, "displayName", "QuickSwitcherStore"), P(z, "persistKey", "QuickSwitcherStore");
let q = new z(u.Z, {
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  QUICKSWITCHER_SHOW: j,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: j,
  QUICKSWITCHER_HIDE: K,
  OVERLAY_SET_INPUT_LOCKED: K,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
  QUICKSWITCHER_SEARCH: function(e) {
    var t, n;
    let {
      query: r,
      queryMode: s
    } = e;
    if (null == i) return !1;
    let o = null !== (t = p.Z.getGuildId()) && void 0 !== t ? t : null;
    if (k !== s) {
      i.setResultTypes(null != s ? [s] : U), i.setLimit(null != s ? 100 : 5);
      let e = null !== (n = p.Z.getGuildId()) && void 0 !== n ? n : void 0;
      s === _.h8.USER && null != e ? i.setOptions({
        userFilters: {
          guild: e,
          friends: !0
        }
      }, !0) : s === _.h8.VOICE_CHANNEL ? i.setOptions({
        voiceChannelGuildFilter: null
      }, !0) : i.setOptions({
        userFilters: null,
        voiceChannelGuildFilter: void 0
      }, !0)
    }
    k = s, i.search(r, k === _.h8.USER ? o : void 0)
  },
  QUICKSWITCHER_SELECT: function(e) {
    b = e.selectedIndex
  },
  QUICKSWITCHER_SWITCH_TO: function() {
    if (G) return !1;
    G = !0, l.K.set(y, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return !1;
    (H = H.filter(e => e !== t)).unshift(t), H.length > 4 && (H.length = 4)
  }
});
t.Z = q