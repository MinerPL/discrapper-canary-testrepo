let r;
n(653041), n(47120), n(733860), n(724458);
var i, a = n(392711),
  o = n.n(a),
  s = n(442837),
  l = n(433517),
  u = n(570140),
  c = n(212819),
  d = n(938078),
  _ = n(781157),
  E = n(220444),
  f = n(601070),
  h = n(210887),
  p = n(314897),
  m = n(592125),
  I = n(703558),
  T = n(984933),
  g = n(271383),
  S = n(430824),
  A = n(496675),
  N = n(306680),
  v = n(944486),
  O = n(914010),
  R = n(9156),
  C = n(483360),
  y = n(823379),
  D = n(981631),
  L = n(689938);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let M = 'seenQSTutorial',
  P = [
c.h8.USER,
c.h8.GROUP_DM,
c.h8.TEXT_CHANNEL,
c.h8.GUILD,
c.h8.APPLICATION,
c.h8.LINK
  ],
  U = 0,
  w = !1,
  x = !1,
  G = null,
  k = [],
  B = null,
  F = 0,
  V = [],
  H = [];

function Z() {
  x = S.Z.getGuildCount() >= 3 || o().size(m.Z.getMutablePrivateChannels()) >= 20, V = [];
}

function Y(e) {
  let t = (0, d.Z)(e);
  return null == t || null != G && G !== t.type ? null : t;
}

function j(e) {
  var t;
  let {
query: n,
queryMode: i
  } = e, a = (0, _.O7)() ? void 0 : null !== (t = O.Z.getGuildId()) && void 0 !== t ? t : void 0, o = new Set(['user:'.concat(p.default.getId())]);
  null != a && o.add('guild:'.concat(a)), r = null != r ? r : new c.ZP(W, P, null != i ? 100 : 5, {
frecencyBoosters: !0,
blacklist: o
  }), B = null, F = n.length, G = i, r.search(n);
}

function W(e, t) {
  if (! function(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (r.record.id !== i.record.id)
      return !1;
  }
  return !0;
}(e = '' === (t = t.trim()).trim() ? function() {
  var e, t;
  let n = null !== (e = O.Z.getGuildId()) && void 0 !== e ? e : void 0,
    r = null !== (t = v.Z.getChannelId()) && void 0 !== t ? t : void 0;
  switch (G) {
    case c.h8.USER: {
      let e = p.default.getId();
      return C.ZP.getRecentlyTalked(r, 100).filter(t => {
        let {
          record: n
        } = t;
        return n.id !== e;
      });
    }
    case c.h8.APPLICATION:
      return C.ZP.queryApplications({
        query: '',
        limit: 100,
        fuzzy: !0
      });
    case c.h8.GUILD:
      return C.ZP.queryGuilds({
        query: '',
        limit: 100,
        fuzzy: !0
      });
    case c.h8.TEXT_CHANNEL:
      return C.ZP.queryChannels({
        query: '',
        guildId: O.Z.getGuildId(),
        limit: 100,
        fuzzy: !0
      });
    case c.h8.VOICE_CHANNEL:
      return C.ZP.queryChannels({
        query: '',
        guildId: O.Z.getGuildId(),
        limit: 100,
        fuzzy: !0,
        filter: () => !0,
        type: T.Zb
      });
  }
  let i = [],
    a = [];
  for (let e = 1; e < H.length; e += 1) {
    let t = Y(H[e]);
    if (null != t)
      (t.type !== c.h8.TEXT_CHANNEL && t.type !== c.h8.VOICE_CHANNEL || A.Z.can(D.Plq.VIEW_CHANNEL, t.record)) && a.push(t);
  }
  a.length > 0 && i.push((0, c.o6)(L.Z.Messages.QUICKSWITCHER_LAST_CHANNEL), ...a);
  let s = function(e) {
    let t = [];
    return I.Z.getRecentlyEditedDrafts(I.d.ChannelMessage).forEach(n => {
      let {
        channelId: r
      } = n;
      if (e(r))
        return;
      let i = Y(r);
      null != i && t.push(i);
    }), t;
  }(e => e === r || H.includes(e));
  s.length > 0 && i.push((0, c.o6)(L.Z.Messages.QUICKSWITCHER_DRAFTS), ...s);
  let l = N.ZP.getMentionChannelIds().filter(e => e !== r && !H.includes(e)).map(e => Y(e)).filter(y.lm).reverse();
  if (l.length > 0 && (i.push((0, c.o6)(L.Z.Messages.QUICKSWITCHER_MENTIONS)), i = i.concat(l)), null != n) {
    let e = T.ZP.getSelectableChannelIds(n).filter(e => {
      let t = m.Z.getChannel(e);
      return !(null == t || e === r || H.includes(e) || R.ZP.isChannelMuted(t.guild_id, e) || null != t.parent_id && R.ZP.isChannelMuted(t.guild_id, t.parent_id)) && (0, E.d)(t);
    }).map(e => Y(e)).filter(e => e);
    Object.values(f.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach(t => {
      for (let n in t) {
        let t = Y(n);
        null != t && e.push(t);
      }
    }), e.length > 0 && (i.push((0, c.o6)(L.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), i = i.concat(e));
  }
  return o()(i).uniqBy(e => e.record.id).value();
}() : e, V))
V = e, ! function(e, t) {
  switch (G) {
    case c.h8.USER: {
      let t = S.Z.getGuild(O.Z.getGuildId());
      e.unshift((0, c.o6)(null != t ? L.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
        name: t.name
      }) : L.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS)), k = e;
      break;
    }
    case c.h8.TEXT_CHANNEL:
      e.unshift((0, c.o6)(L.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), k = e;
      break;
    case c.h8.VOICE_CHANNEL:
      e.unshift((0, c.o6)(L.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), k = e;
      break;
    case c.h8.GUILD:
      e.unshift((0, c.o6)(L.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), k = e;
      break;
    case c.h8.APPLICATION:
      e.unshift((0, c.o6)(L.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), k = e;
      break;
    default:
      k = e;
  }
  if (t !== B)
    B = t, F = Math.max(t.length, F), U = (0, c.gJ)(c.a8.DOWN, -1, k);
  else {
    let e = k[U];
    null != e && e.type === c.h8.HEADER && (U = (0, c.gJ)(c.a8.DOWN, U, k));
  }
  q.emitChange();
}(e, t);
}

function K() {
  B = null, F = 0, V = [], null != r && (r.destroy(), r = null);
}
class z extends(i = s.ZP.PersistedStore) {
  initialize(e) {
var t;
this.waitFor(g.ZP, S.Z, m.Z), this.syncWith([h.Z], () => !0), w = l.K.get(M) || !1, H = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [];
  }
  getState() {
return {
  channelHistory: H
};
  }
  isOpen() {
return null != r;
  }
  getResultTotals(e) {
return null == r ? 0 : null == e ? r.results.reduce((e, t) => t.type !== c.h8.HEADER ? e + 1 : e, 0) : r.results.reduce((t, n) => n.type === e ? t + 1 : t, 0);
  }
  channelNoticePredicate(e, t) {
let n = Date.now() - t >= D.Hqc;
return x && n;
  }
  getFrequentGuilds() {
return null != r ? r.queryGuilds('', 100) : null;
  }
  getFrequentGuildsLength() {
return null != r ? r.queryGuilds('', 100).length : 0;
  }
  getChannelHistory() {
return H;
  }
  getProps() {
return {
  theme: h.Z.theme,
  query: null != r ? r.query : '',
  queryMode: G,
  results: k,
  selectedIndex: U,
  seenTutorial: w,
  maxQueryLength: F
};
  }
}
b(z, 'displayName', 'QuickSwitcherStore'), b(z, 'persistKey', 'QuickSwitcherStore');
let q = new z(u.Z, {
  CONNECTION_OPEN: Z,
  CONNECTION_OPEN_SUPPLEMENTAL: Z,
  QUICKSWITCHER_SHOW: j,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: j,
  QUICKSWITCHER_HIDE: K,
  OVERLAY_SET_INPUT_LOCKED: K,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
  QUICKSWITCHER_SEARCH: function(e) {
var t, n;
let {
  query: i,
  queryMode: a
} = e;
if (null == r)
  return !1;
let o = null !== (t = O.Z.getGuildId()) && void 0 !== t ? t : null;
if (G !== a) {
  r.setResultTypes(null != a ? [a] : P), r.setLimit(null != a ? 100 : 5);
  let e = null !== (n = O.Z.getGuildId()) && void 0 !== n ? n : void 0;
  a === c.h8.USER && null != e ? r.setOptions({
    userFilters: {
      guild: e,
      friends: !0
    }
  }, !0) : a === c.h8.VOICE_CHANNEL ? r.setOptions({
    voiceChannelGuildFilter: null
  }, !0) : r.setOptions({
    userFilters: null,
    voiceChannelGuildFilter: void 0
  }, !0);
}
G = a, r.search(i, G === c.h8.USER ? o : void 0);
  },
  QUICKSWITCHER_SELECT: function(e) {
U = e.selectedIndex;
  },
  QUICKSWITCHER_SWITCH_TO: function() {
if (w)
  return !1;
w = !0, l.K.set(M, !0);
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
if (null == t)
  return !1;
(H = H.filter(e => e !== t)).unshift(t), H.length > 4 && (H.length = 4);
  }
});
t.Z = q;