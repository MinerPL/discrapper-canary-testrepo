"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973");
var a = n("917351"),
  s = n.n(a),
  l = n("446674"),
  i = n("913144"),
  r = n("736964"),
  o = n("666038"),
  u = n("449004"),
  d = n("373469"),
  c = n("26989"),
  f = n("305961"),
  E = n("824563"),
  h = n("27618"),
  _ = n("697218"),
  C = n("49111");

function S(e) {
  let t = _.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function I(e) {
  return {
    status: E.default.getStatus(e),
    isMobile: E.default.isMobileOnline(e),
    activities: E.default.getActivities(e),
    applicationStream: d.default.getAnyStreamForUser(e)
  }
}

function m(e) {
  let t = [];
  return s(c.default.memberOf(e)).map(f.default.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class p extends o.default {
  get comparator() {
    var e, t, n, a, s;
    return [this.type, null !== (s = null !== (a = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== a ? a : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
  }
  constructor(e) {
    super(), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname
  }
}
class T {
  reset() {
    let e = s.map(h.default.getRelationships(), (e, t) => new p({
        key: t,
        type: e,
        nickname: h.default.getNickname(t),
        ...S(t),
        ...I(t),
        ...m(t)
      })),
      t = s.map(u.default.getSuggestions(), e => new p({
        key: e.key,
        type: 99,
        nickname: e.name,
        ...S(e.key),
        ...I(e.key),
        ...m(e.key)
      }));
    return new T(s.concat(e, t))
  }
  clone() {
    return new T(this._rows)
  }
  update(e) {
    let t = !1;
    for (let n = 0; n < this._rows.length; n++) {
      let a = this._rows[n],
        s = a.merge(e(a.key));
      t = t || s !== a, this._rows[n] = s
    }
    return t
  }
  filter(e, t) {
    let n = s(this._rows).filter(e => {
      if (null == e.user) return !1;
      if (null != t && "" !== t) {
        let n = t.toLowerCase(),
          a = [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? void 0 : e.toLowerCase());
        return a.some(e => null == e ? void 0 : e.includes(n))
      }
      return !0
    }).filter(t => {
      switch (e) {
        case C.FriendsSections.ONLINE:
          return t.type === C.RelationshipTypes.FRIEND && t.status !== C.StatusTypes.OFFLINE;
        case C.FriendsSections.PENDING:
          return t.type === C.RelationshipTypes.PENDING_INCOMING || t.type === C.RelationshipTypes.PENDING_OUTGOING;
        case C.FriendsSections.SUGGESTIONS:
          return 99 === t.type;
        case C.FriendsSections.BLOCKED:
          return t.type === C.RelationshipTypes.BLOCKED;
        case C.FriendsSections.ALL:
        default:
          return t.type === C.RelationshipTypes.FRIEND
      }
    }).sortBy(e => e.comparator).value();
    return n
  }
  getRelationshipCounts() {
    let e = {
      [C.RelationshipTypes.FRIEND]: 0,
      [C.RelationshipTypes.PENDING_INCOMING]: 0,
      [C.RelationshipTypes.PENDING_OUTGOING]: 0,
      99: 0,
      [C.RelationshipTypes.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    this._rows = e
  }
}
let g = !0,
  A = !1,
  N = C.FriendsSections.ONLINE,
  R = new T,
  O = !0,
  v = !1;

function L() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  g && (e || N !== C.FriendsSections.ONLINE && N !== C.FriendsSections.ADD_FRIEND) && !A && (g = !1, A = !0, r.default.fetchRelationships())
}

function M() {
  if (g = !0, O ? A = !1 : L(), R = R.reset(), v) return;
  let e = R.getRelationshipCounts();
  N = 0 === e[C.RelationshipTypes.FRIEND] ? 0 !== e[C.RelationshipTypes.PENDING_INCOMING] ? C.FriendsSections.PENDING : C.FriendsSections.ADD_FRIEND : C.FriendsSections.ONLINE
}

function P() {
  R = O ? new T : R.reset()
}

function y(e) {
  return function() {
    return !O && !!R.update(e) && (R = R.clone(), !0)
  }
}
class D extends l.default.Store {
  initialize() {
    this.waitFor(h.default, E.default, _.default, f.default, c.default, d.default, u.default), this.syncWith([h.default], P), this.syncWith([u.default], P), this.syncWith([_.default], y(S)), this.syncWith([E.default, d.default], y(I)), M()
  }
  getState() {
    return {
      fetching: A,
      section: N,
      pendingCount: h.default.getPendingCount(),
      rows: R
    }
  }
}
D.displayName = "FriendsStore";
var x = new D(i.default, {
  CONNECTION_OPEN: function() {
    M()
  },
  FRIENDS_SET_SECTION: function(e) {
    N = e.section, L()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return O = null != t, P(), !O
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    A = !1
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    g = !0, A = !0
  },
  DRAWER_SELECT_TAB: function(e) {
    let {
      tab: t
    } = e;
    return O = t !== C.DrawerTabTypes.FRIENDS, P(), !O
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    N = e.section, v = !0
  }
})