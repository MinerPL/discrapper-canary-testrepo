"use strict";
n.r(t), n.d(t, {
  DraftType: function() {
    return i
  },
  default: function() {
    return I
  }
}), n("222007");
var i, s, r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  l = n("913144"),
  u = n("449008"),
  d = n("271938"),
  c = n("42203"),
  f = n("341542"),
  _ = n("49111");
let h = _.MAX_MESSAGE_LENGTH_PREMIUM + 500;
(s = i || (i = {}))[s.ChannelMessage = 0] = "ChannelMessage", s[s.ThreadSettings = 1] = "ThreadSettings", s[s.FirstThreadMessage = 2] = "FirstThreadMessage", s[s.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", s[s.Poll = 4] = "Poll", s[s.SlashCommand = 5] = "SlashCommand";
let g = {};

function m(e) {
  let t = g[e];
  return null == t && (t = g[e] = {}), t
}

function E(e) {
  let {
    type: t,
    channelId: n,
    draft: i,
    draftType: s
  } = e, r = c.default.getChannel(n);
  i === (null == r ? void 0 : r.template) && (i = "");
  let a = d.default.getId();
  if (null != a && null != i && "" !== i) {
    var o, l;
    let e = m(a),
      t = e[n];
    if (null == t && (t = e[n] = {}), (l = i).length > h && (l = l.substr(0, h)), (i = l) === (null === (o = t[s]) || void 0 === o ? void 0 : o.draft)) return !1;
    t[s] = {
      timestamp: Date.now(),
      draft: i
    }
  } else p(n, s);
  return "DRAFT_SAVE" === t
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.getId();
  if (null == n) return !1;
  let i = m(n),
    s = i[e];
  if (null == s) return !1;
  delete s[t], a.isEmpty(s) && delete i[e]
}

function v() {
  let e = d.default.getId();
  if (null == e || f.default.totalUnavailableGuilds > 0) return;
  let t = m(e);
  for (let e in t) null == c.default.getChannel(e) && delete t[e]
}

function S(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = d.default.getId();
  if (null == n) return !1;
  let i = m(n);
  return delete i[t], !1
}
class T extends o.default.PersistedStore {
  initialize(e) {
    g = null != e ? e : {}, ! function() {
      for (let [e, t] of Object.entries(g))
        for (let [n, i] of Object.entries(t)) {
          let t = i[0];
          null != t && ("" === t.draft || "" === t.draft.trim()) && p(n, 0, e)
        }
    }(), this.waitFor(d.default, c.default, f.default)
  }
  getState() {
    return g
  }
  getThreadDraftWithParentMessageId(e) {
    let t = d.default.getId();
    if (null == t) return;
    let n = m(t),
      i = Object.keys(n).find(t => {
        let n = this.getThreadSettings(t);
        return (null == n ? void 0 : n.parentMessageId) === e
      });
    return null != i ? this.getThreadSettings(i) : void 0
  }
  getRecentlyEditedDrafts(e) {
    let t = d.default.getId();
    if (null == t) return [];
    let n = m(t);
    return a(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(u.isNotNullish).toPairs().map(e => {
      let [t, {
        timestamp: n,
        draft: i
      }] = e;
      return {
        channelId: t,
        timestamp: n,
        draft: i
      }
    }).sortBy(e => {
      let {
        timestamp: t
      } = e;
      return -t
    }).value()
  }
  getDraft(e, t) {
    let n = d.default.getId();
    if (null == n) return "";
    let i = m(n),
      s = i[e];
    if (null != s) {
      let e = s[t];
      if (null != e) return e.draft
    }
    return ""
  }
  getThreadSettings(e) {
    let t = d.default.getId();
    if (null == t) return null;
    let n = m(t),
      i = n[e];
    return null == i ? null : i[1]
  }
}
T.displayName = "DraftStore", T.persistKey = "DraftStore", T.migrations = [e => {
  if (null == e) return {};
  for (let t in e) "timestamp" in e[t] && (e[t] = {
    0: e[t]
  });
  return e
}, e => {
  let t = d.default.getId();
  if (null == e || null == t) return {};
  let n = {},
    i = n[t] = {};
  for (let t in e) i[t] = e[t];
  return n
}];
var I = new T(l.default, {
  CONNECTION_OPEN: function() {
    let e = d.default.getId();
    return !(e in g) && (g[e] = {}), v(), !1
  },
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (g = {})
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    e.userId in g && delete g[e.userId]
  },
  GUILD_DELETE: function() {
    return v(), !1
  },
  CHANNEL_DELETE: S,
  THREAD_DELETE: S,
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e, n = d.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let i = m(n),
      s = i[t.parent_id];
    if (null == s) return !1;
    let r = s[1];
    if (null == r) return !1;
    if (r.parentMessageId !== t.id) return !1;
    {
      var a, o;
      let e = i[t.parent_id];
      if (null == e) return !1;
      let n = null !== (o = null === (a = e[2]) || void 0 === a ? void 0 : a.draft) && void 0 !== o ? o : "";
      "" !== n && (i[t.id] = {
        0: {
          timestamp: Date.now(),
          draft: n
        }
      }), p(t.parent_id, 1), p(t.parent_id, 2)
    }
  },
  DRAFT_SAVE: E,
  DRAFT_CHANGE: E,
  DRAFT_CLEAR: function(e) {
    let {
      channelId: t,
      draftType: n
    } = e;
    return p(t, n)
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
    let {
      channelId: t,
      draft: n
    } = e, i = d.default.getId();
    if (null == i) return;
    let s = m(i),
      r = s[t];
    null == r && (r = s[t] = {}), r[1] = {
      timestamp: Date.now(),
      ...r[1],
      ...n,
      parentChannelId: t
    }
  }
})