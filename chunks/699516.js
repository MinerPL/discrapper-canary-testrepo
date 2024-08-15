n(47120);
var r, i, a, s, o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(570140),
  d = n(23750),
  _ = n(709054),
  E = n(594174),
  f = n(981631);
let h = {},
  p = {},
  m = {},
  I = 0,
  T = 0,
  g = 0,
  S = 0;

function A() {
  S = Object.values(h).length;
  let {
[f.OGo.PENDING_INCOMING]: e = 0,
  [f.OGo.PENDING_OUTGOING]: t = 0,
  [f.OGo.FRIEND]: n = 0
  } = l().countBy(Object.values(h), e => e);
  I = e, T = t, g = n;
}
class N extends(r = u.ZP.Store) {
  initialize() {
this.waitFor(E.default);
  }
  isFriend(e) {
return null != e && h[e] === f.OGo.FRIEND;
  }
  isBlocked(e) {
return null != e && h[e] === f.OGo.BLOCKED;
  }
  isBlockedForMessage(e) {
var t, n, r, i;
if (null != e.author && h[e.author.id] === f.OGo.BLOCKED)
  return !0;
if (e instanceof d.ZP) {
  if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id))
    return !0;
} else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id))
  return !0;
return !1;
  }
  getPendingCount() {
return I;
  }
  getOutgoingCount() {
return T;
  }
  getFriendCount() {
return g;
  }
  getRelationshipCount() {
return S;
  }
  getRelationships() {
return h;
  }
  getRelationshipType(e) {
let t = h[e];
return null != t ? t : f.OGo.NONE;
  }
  getNickname(e) {
return p[e];
  }
  getSince(e) {
return m[e];
  }
  getSinces() {
return m;
  }
  getFriendIDs() {
return _.default.keys(h).filter(e => h[e] === f.OGo.FRIEND);
  }
}
s = 'RelationshipStore', (a = 'displayName') in(i = N) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new N(c.Z, {
  CONNECTION_OPEN: function(e) {
h = {}, p = {}, m = {}, e.relationships.forEach(e => {
  h[e.id] = e.type, null != e.nickname && (p[e.id] = e.nickname), null != e.since && (m[e.id] = e.since);
}), A();
  },
  OVERLAY_INITIALIZE: function(e) {
h = {
  ...e.relationships
}, A();
  },
  RELATIONSHIP_ADD: function(e) {
let t = h[e.relationship.id];
h = {
  ...h,
  [e.relationship.id]: e.relationship.type
}, null != e.relationship.nickname && (p = {
  ...p,
  [e.relationship.id]: e.relationship.nickname
}), null != e.relationship.since && (m = {
  ...m,
  [e.relationship.id]: e.relationship.since
}), A(), e.relationship.type === f.OGo.FRIEND && t === f.OGo.PENDING_OUTGOING && c.Z.dispatch({
  type: 'FRIEND_REQUEST_ACCEPTED',
  user: e.relationship.user
});
  },
  RELATIONSHIP_REMOVE: function(e) {
h = {
  ...h
}, delete h[e.relationship.id], null != p[e.relationship.id] && (p = {
  ...p
}, delete p[e.relationship.id]), null != m[e.relationship.id] && (m = {
  ...m
}, delete m[e.relationship.id]), A();
  },
  RELATIONSHIP_UPDATE: function(e) {
null == e.relationship.since ? delete m[e.relationship.id] : m[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete p[e.relationship.id] : p[e.relationship.id] = e.relationship.nickname;
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
h = {
  ...h
}, _.default.keys(h).forEach(e => {
  h[e] === f.OGo.PENDING_INCOMING && delete h[e];
}), A();
  }
});