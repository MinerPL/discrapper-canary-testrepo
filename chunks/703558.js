"use strict";
n.d(t, {
  d: function() {
    return i
  }
}), n(47120);
var i, r, s, o = n(392711),
  a = n.n(o),
  l = n(442837),
  u = n(570140),
  _ = n(823379),
  d = n(709054),
  c = n(314897),
  E = n(592125),
  I = n(486472);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = n(981631).en1 + 500;
(s = i || (i = {}))[s.ChannelMessage = 0] = "ChannelMessage", s[s.ThreadSettings = 1] = "ThreadSettings", s[s.FirstThreadMessage = 2] = "FirstThreadMessage", s[s.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", s[s.Poll = 4] = "Poll", s[s.SlashCommand = 5] = "SlashCommand";
let S = {};

function f(e) {
  let t = S[e];
  return null == t && (t = S[e] = {}), t
}

function N(e) {
  let {
    type: t,
    channelId: n,
    draft: i,
    draftType: r
  } = e, s = E.Z.getChannel(n);
  i === (null == s ? void 0 : s.template) && (i = "");
  let o = c.default.getId();
  if (null != o && null != i && "" !== i) {
    var a, l;
    let e = f(o),
      t = e[n];
    if (null == t && (t = e[n] = {}), (l = i).length > h && (l = l.substr(0, h)), (i = l) === (null === (a = t[r]) || void 0 === a ? void 0 : a.draft)) return !1;
    t[r] = {
      timestamp: Date.now(),
      draft: i
    }
  } else A(n, r);
  return "DRAFT_SAVE" === t
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.getId();
  if (null == n) return !1;
  let i = f(n),
    r = i[e];
  if (null == r) return !1;
  delete r[t], a().isEmpty(r) && delete i[e]
}

function m() {
  let e = c.default.getId();
  if (null == e || I.Z.totalUnavailableGuilds > 0) return;
  let t = f(e);
  for (let e in t) null == E.Z.getChannel(e) && delete t[e]
}

function O(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = c.default.getId();
  if (null == n) return !1;
  let i = f(n);
  return delete i[t], !1
}
class R extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    S = null != e ? e : {}, ! function() {
      for (let [e, t] of d.default.entries(S))
        for (let [n, i] of d.default.entries(t)) {
          let t = i[0];
          null != t && ("" === t.draft || "" === t.draft.trim()) && A(n, 0, e)
        }
    }(), this.waitFor(c.default, E.Z, I.Z)
  }
  getState() {
    return S
  }
  getThreadDraftWithParentMessageId(e) {
    let t = c.default.getId();
    if (null == t) return;
    let n = f(t),
      i = d.default.keys(n).find(t => {
        let n = this.getThreadSettings(t);
        return (null == n ? void 0 : n.parentMessageId) === e
      });
    return null != i ? this.getThreadSettings(i) : void 0
  }
  getRecentlyEditedDrafts(e) {
    let t = c.default.getId();
    if (null == t) return [];
    let n = f(t);
    return a()(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(_.lm).toPairs().map(e => {
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
    let n = c.default.getId();
    if (null == n) return "";
    let i = f(n)[e];
    if (null != i) {
      let e = i[t];
      if (null != e) return e.draft
    }
    return ""
  }
  getThreadSettings(e) {
    let t = c.default.getId();
    if (null == t) return null;
    let n = f(t)[e];
    return null == n ? null : n[1]
  }
}
T(R, "displayName", "DraftStore"), T(R, "persistKey", "DraftStore"), T(R, "migrations", [e => {
  if (null == e) return {};
  for (let t in e) "timestamp" in e[t] && (e[t] = {
    0: e[t]
  });
  return e
}, e => {
  let t = c.default.getId();
  if (null == e || null == t) return {};
  let n = {},
    i = n[t] = {};
  for (let t in e) i[t] = e[t];
  return n
}]), t.Z = new R(u.Z, {
  CONNECTION_OPEN: function() {
    let e = c.default.getId();
    return !(e in S) && (S[e] = {}), m(), !1
  },
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (S = {})
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    e.userId in S && delete S[e.userId]
  },
  GUILD_DELETE: function() {
    return m(), !1
  },
  CHANNEL_DELETE: O,
  THREAD_DELETE: O,
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e, n = c.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let i = f(n),
      r = i[t.parent_id];
    if (null == r) return !1;
    let s = r[1];
    if (null == s) return !1;
    if (s.parentMessageId !== d.default.castChannelIdAsMessageId(t.id)) return !1;
    {
      var o, a;
      let e = i[t.parent_id];
      if (null == e) return !1;
      let n = null !== (a = null === (o = e[2]) || void 0 === o ? void 0 : o.draft) && void 0 !== a ? a : "";
      "" !== n && (i[t.id] = {
        0: {
          timestamp: Date.now(),
          draft: n
        }
      }), A(t.parent_id, 1), A(t.parent_id, 2)
    }
  },
  DRAFT_SAVE: N,
  DRAFT_CHANGE: N,
  DRAFT_CLEAR: function(e) {
    let {
      channelId: t,
      draftType: n
    } = e;
    return A(t, n)
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
    let {
      channelId: t,
      draft: n
    } = e, i = c.default.getId();
    if (null == i) return;
    let r = f(i),
      s = r[t];
    null == s && (s = r[t] = {}), s[1] = {
      timestamp: Date.now(),
      ...s[1],
      ...n,
      parentChannelId: t
    }
  }
})