"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("808653"), n("424973");
var l = n("917351"),
  s = n.n(l),
  i = n("446674"),
  r = n("913144"),
  u = n("447909"),
  o = n("233069"),
  d = n("159885"),
  c = n("158998"),
  f = n("42203"),
  h = n("319781"),
  m = n("27618"),
  p = n("697218"),
  E = n("49111");
let g = !1,
  S = "",
  C = 0,
  _ = [],
  I = !1,
  T = new Set,
  v = null;

function x() {
  S = "", C = 0, _ = [], T = new Set, g = !1, v = null
}

function N(e) {
  S = e, C = 0, A()
}

function A() {
  if (!g) return !1;
  let e = f.default.getChannel(v);
  if (0 === S.trim().length) return null != a && a.clearQuery(), _ = function(e) {
    let t = m.default.getFriendIDs();
    return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
      let n = p.default.getUser(t);
      return null == n ? e : (e.push({
        user: n
      }), e)
    }, []).sort(R)
  }(e), !0;
  let t = null != e ? e.recipients : [];
  return null != a && a.setQuery(S, {
    friends: !0
  }, t, function() {
    let e = h.default.getFrequentlyWithoutFetchingLatest(),
      t = e.filter(e => e instanceof o.PrivateChannelRecord && e.isDM()),
      n = Math.max(...t.map(e => {
        let {
          id: t
        } = e;
        return h.default.getScoreWithoutFetchingLatest(t)
      })),
      a = {};
    return t.forEach(e => {
      let t = h.default.getScoreWithoutFetchingLatest(e.id),
        l = e.getRecipientId(),
        s = m.default.isFriend(l) ? .2 : 0,
        i = null != f.default.getDMFromUserId(l) ? .1 : 0;
      a[l] = 1 + t / n + s + i
    }), a
  }()), !1
}

function M() {
  if (!g) return !1;
  let e = I;
  return (I = s.some(m.default.getRelationships(), e => e === E.RelationshipTypes.FRIEND)) !== e
}

function R(e, t) {
  return (0, d.stripDiacritics)(c.default.getName(e.user).toLocaleLowerCase()).localeCompare((0, d.stripDiacritics)(c.default.getName(t.user).toLocaleLowerCase()))
}

function j(e) {
  let {
    results: t
  } = e;
  g && "" !== S && (_ = t.map(e => {
    let {
      id: t
    } = e;
    return {
      user: p.default.getUser(t)
    }
  }).filter(e => null != e.user), b.emitChange())
}

function L() {
  return null != a && (a.destroy(), a = null), u.default.getSearchContext(j, 1e3)
}

function y(e) {
  if (e.key !== E.NEW_GROUP_DM_POPOUT_ID) return !1;
  g = !0, M(), a = L(), v = null, N("")
}

function O(e) {
  if (e.key !== E.NEW_GROUP_DM_POPOUT_ID) return !1;
  P()
}

function P() {
  null != a && (a.destroy(), a = null), x()
}
class D extends i.default.Store {
  initialize() {
    this.waitFor(p.default, f.default, m.default), this.syncWith([p.default, f.default], A), this.syncWith([m.default], M)
  }
  getResults() {
    return _
  }
  hasFriends() {
    return I
  }
  getSelectedUsers() {
    return T
  }
  getQuery() {
    return S
  }
  getState() {
    return {
      query: S,
      selectedRow: C,
      selectedUsers: T,
      results: _,
      hasFriends: I
    }
  }
}
D.displayName = "PrivateChannelRecipientsInviteStore";
let b = new D(r.default, {
  CONNECTION_OPEN: function() {
    x()
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null != t) return !1;
    let a = g;
    return x(), g = a, v = n, A()
  },
  MODAL_PUSH: y,
  SHOW_ACTION_SHEET: y,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
    g = !0, M(), a = L(), v = e.channelId, N("")
  },
  MODAL_POP: O,
  HIDE_ACTION_SHEET: O,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: P,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
    v = e.channelId, N(e.query)
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
    C = e.row
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
    let {
      userId: t
    } = e;
    T.add(t), T = new Set(T)
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
    let {
      userId: t
    } = e;
    T.delete(t), T = new Set(T)
  }
});
var U = b