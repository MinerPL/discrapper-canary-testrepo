"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("697218"),
  l = n("49111");
let u = {},
  d = {},
  c = {},
  f = 0,
  _ = 0,
  h = 0,
  g = 0;

function m() {
  let e = Object.values(u);
  g = e.length;
  let {
    [l.RelationshipTypes.PENDING_INCOMING]: t = 0, [l.RelationshipTypes.PENDING_OUTGOING]: n = 0, [l.RelationshipTypes.FRIEND]: i = 0
  } = s.countBy(Object.values(u), e => e);
  f = t, _ = n, h = i
}
class E extends r.default.Store {
  initialize() {
    this.waitFor(o.default)
  }
  isFriend(e) {
    return u[e] === l.RelationshipTypes.FRIEND
  }
  isBlocked(e) {
    return u[e] === l.RelationshipTypes.BLOCKED
  }
  getPendingCount() {
    return f
  }
  getOutgoingCount() {
    return _
  }
  getFriendCount() {
    return h
  }
  getRelationshipCount() {
    return g
  }
  getRelationships() {
    return u
  }
  getRelationshipType(e) {
    let t = u[e];
    return null != t ? t : l.RelationshipTypes.NONE
  }
  getNickname(e) {
    let t = d[e];
    return t
  }
  getSince(e) {
    return c[e]
  }
  getSinces() {
    return c
  }
  getFriendIDs() {
    return Object.keys(u).filter(e => u[e] === l.RelationshipTypes.FRIEND)
  }
}
E.displayName = "RelationshipStore";
var p = new E(a.default, {
  CONNECTION_OPEN: function(e) {
    u = {}, d = {}, c = {}, e.relationships.forEach(e => {
      u[e.id] = e.type, null != e.nickname && (d[e.id] = e.nickname), null != e.since && (c[e.id] = e.since)
    }), m()
  },
  OVERLAY_INITIALIZE: function(e) {
    u = {
      ...e.relationships
    }, m()
  },
  RELATIONSHIP_ADD: function(e) {
    let t = u[e.relationship.id];
    u = {
      ...u,
      [e.relationship.id]: e.relationship.type
    }, null != e.relationship.nickname && (d = {
      ...d,
      [e.relationship.id]: e.relationship.nickname
    }), null != e.relationship.since && (c = {
      ...c,
      [e.relationship.id]: e.relationship.since
    }), m(), e.relationship.type === l.RelationshipTypes.FRIEND && t === l.RelationshipTypes.PENDING_OUTGOING && a.default.dispatch({
      type: "FRIEND_REQUEST_ACCEPTED",
      user: e.relationship.user
    })
  },
  RELATIONSHIP_REMOVE: function(e) {
    u = {
      ...u
    }, delete u[e.relationship.id], null != d[e.relationship.id] && (d = {
      ...d
    }, delete d[e.relationship.id]), null != c[e.relationship.id] && (c = {
      ...c
    }, delete c[e.relationship.id]), m()
  },
  RELATIONSHIP_UPDATE: function(e) {
    null == e.relationship.since ? delete c[e.relationship.id] : c[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete d[e.relationship.id] : d[e.relationship.id] = e.relationship.nickname
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
    Object.keys(u = {
      ...u
    }).forEach(e => {
      u[e] === l.RelationshipTypes.PENDING_INCOMING && delete u[e]
    }), m()
  }
})