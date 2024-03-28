"use strict";
let a;
n.r(t), n("47120"), n("724458"), n("653041");
var l, s, i, r, o = n("392711"),
  u = n.n(o),
  d = n("442837"),
  c = n("570140"),
  f = n("279779"),
  h = n("131704"),
  m = n("624138"),
  p = n("51144"),
  E = n("592125"),
  C = n("580005"),
  g = n("699516"),
  S = n("594174"),
  _ = n("981631");
let T = !1,
  I = "",
  A = 0,
  v = [],
  N = !1,
  x = new Set,
  M = null;

function R() {
  I = "", A = 0, v = [], x = new Set, T = !1, M = null
}

function L(e) {
  I = e, A = 0, y()
}

function y() {
  if (!T) return !1;
  let e = E.default.getChannel(M);
  if (0 === I.trim().length) return null != a && a.clearQuery(), v = function(e) {
    let t = g.default.getFriendIDs();
    return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
      let n = S.default.getUser(t);
      return null == n ? e : (e.push({
        user: n
      }), e)
    }, []).sort(j)
  }(e), !0;
  let t = null != e ? e.recipients : [];
  return null != a && a.setQuery(I, {
    friends: !0
  }, t, function() {
    let e = C.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof h.PrivateChannelRecord && e.isDM()),
      t = Math.max(...e.map(e => {
        let {
          id: t
        } = e;
        return C.default.getScoreWithoutFetchingLatest(t)
      })),
      n = {};
    return e.forEach(e => {
      let a = C.default.getScoreWithoutFetchingLatest(e.id),
        l = e.getRecipientId(),
        s = g.default.isFriend(l) ? .2 : 0,
        i = null != E.default.getDMFromUserId(l) ? .1 : 0;
      n[l] = 1 + a / t + s + i
    }), n
  }()), !1
}

function O() {
  if (!T) return !1;
  let e = N;
  return (N = u().some(g.default.getRelationships(), e => e === _.RelationshipTypes.FRIEND)) !== e
}

function j(e, t) {
  return (0, m.stripDiacritics)(p.default.getName(e.user).toLocaleLowerCase()).localeCompare((0, m.stripDiacritics)(p.default.getName(t.user).toLocaleLowerCase()))
}

function P(e) {
  let {
    results: t
  } = e;
  T && "" !== I && (v = t.map(e => {
    let {
      id: t
    } = e;
    return {
      user: S.default.getUser(t)
    }
  }).filter(e => null != e.user), k.emitChange())
}

function D() {
  return null != a && (a.destroy(), a = null), f.default.getSearchContext(P, 1e3)
}

function b(e) {
  if (e.key !== _.NEW_GROUP_DM_POPOUT_ID) return !1;
  T = !0, O(), a = D(), M = null, L("")
}

function U(e) {
  if (e.key !== _.NEW_GROUP_DM_POPOUT_ID) return !1;
  F()
}

function F() {
  null != a && (a.destroy(), a = null), R()
}
class w extends(l = d.default.Store) {
  initialize() {
    this.waitFor(S.default, E.default, g.default), this.syncWith([S.default, E.default], y), this.syncWith([g.default], O)
  }
  getResults() {
    return v
  }
  hasFriends() {
    return N
  }
  getSelectedUsers() {
    return x
  }
  getQuery() {
    return I
  }
  getState() {
    return {
      query: I,
      selectedRow: A,
      selectedUsers: x,
      results: v,
      hasFriends: N
    }
  }
}
r = "PrivateChannelRecipientsInviteStore", (i = "displayName") in(s = w) ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r;
let k = new w(c.default, {
  CONNECTION_OPEN: function() {
    R()
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null != t) return !1;
    let a = T;
    return R(), T = a, M = n, y()
  },
  MODAL_PUSH: b,
  SHOW_ACTION_SHEET: b,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
    T = !0, O(), a = D(), M = e.channelId, L("")
  },
  MODAL_POP: U,
  HIDE_ACTION_SHEET: U,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: F,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
    M = e.channelId, L(e.query)
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
    A = e.row
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
    let {
      userId: t
    } = e;
    x.add(t), x = new Set(x)
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
    let {
      userId: t
    } = e;
    x.delete(t), x = new Set(x)
  }
});
t.default = k