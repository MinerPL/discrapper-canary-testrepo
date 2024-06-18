"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(709054),
  c = n(594174),
  E = n(981631);
let I = {},
  T = {},
  h = {},
  S = 0,
  f = 0,
  N = 0,
  A = 0;

function m() {
  A = Object.values(I).length;
  let {
    [E.OGo.PENDING_INCOMING]: e = 0, [E.OGo.PENDING_OUTGOING]: t = 0, [E.OGo.FRIEND]: n = 0
  } = l().countBy(Object.values(I), e => e);
  S = e, f = t, N = n
}
class O extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  isFriend(e) {
    return I[e] === E.OGo.FRIEND
  }
  isBlocked(e) {
    return I[e] === E.OGo.BLOCKED
  }
  getPendingCount() {
    return S
  }
  getOutgoingCount() {
    return f
  }
  getFriendCount() {
    return N
  }
  getRelationshipCount() {
    return A
  }
  getRelationships() {
    return I
  }
  getRelationshipType(e) {
    let t = I[e];
    return null != t ? t : E.OGo.NONE
  }
  getNickname(e) {
    return T[e]
  }
  getSince(e) {
    return h[e]
  }
  getSinces() {
    return h
  }
  getFriendIDs() {
    return d.default.keys(I).filter(e => I[e] === E.OGo.FRIEND)
  }
}
o = "RelationshipStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new O(_.Z, {
  CONNECTION_OPEN: function(e) {
    I = {}, T = {}, h = {}, e.relationships.forEach(e => {
      I[e.id] = e.type, null != e.nickname && (T[e.id] = e.nickname), null != e.since && (h[e.id] = e.since)
    }), m()
  },
  OVERLAY_INITIALIZE: function(e) {
    I = {
      ...e.relationships
    }, m()
  },
  RELATIONSHIP_ADD: function(e) {
    let t = I[e.relationship.id];
    I = {
      ...I,
      [e.relationship.id]: e.relationship.type
    }, null != e.relationship.nickname && (T = {
      ...T,
      [e.relationship.id]: e.relationship.nickname
    }), null != e.relationship.since && (h = {
      ...h,
      [e.relationship.id]: e.relationship.since
    }), m(), e.relationship.type === E.OGo.FRIEND && t === E.OGo.PENDING_OUTGOING && _.Z.dispatch({
      type: "FRIEND_REQUEST_ACCEPTED",
      user: e.relationship.user
    })
  },
  RELATIONSHIP_REMOVE: function(e) {
    I = {
      ...I
    }, delete I[e.relationship.id], null != T[e.relationship.id] && (T = {
      ...T
    }, delete T[e.relationship.id]), null != h[e.relationship.id] && (h = {
      ...h
    }, delete h[e.relationship.id]), m()
  },
  RELATIONSHIP_UPDATE: function(e) {
    null == e.relationship.since ? delete h[e.relationship.id] : h[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete T[e.relationship.id] : T[e.relationship.id] = e.relationship.nickname
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
    I = {
      ...I
    }, d.default.keys(I).forEach(e => {
      I[e] === E.OGo.PENDING_INCOMING && delete I[e]
    }), m()
  }
})