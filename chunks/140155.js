n(47120), n(653041);
var r, i = n(442837),
  a = n(570140),
  s = n(924301);
n(57132);
var o = n(786761),
  l = n(23750),
  u = n(594174),
  c = n(709054),
  d = n(497089),
  _ = n(178480),
  E = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let h = {
  loading: !1,
  initialized: !1,
  errored: !1,
  isDataStale: !1,
  notifCenterItems: [],
  staleNotifCenterItems: [],
  notifCenterIds: new Set(),
  notifCenterLocalItems: [],
  paginationHasMore: !0,
  paginationCursor: void 0,
  notifCenterActive: !1,
  notifCenterTabFocused: !1
};

function p(e) {
  return null != e.id && null != e.type;
}

function m() {
  h = {
loading: !1,
initialized: !1,
errored: !1,
isDataStale: !1,
notifCenterItems: [],
staleNotifCenterItems: [],
notifCenterIds: new Set(),
notifCenterLocalItems: [],
paginationHasMore: !0,
paginationCursor: void 0,
notifCenterActive: !1,
notifCenterTabFocused: !1
  };
}

function I(e) {
  return {
...e,
kind: 'notification-center-item',
message: null != e.message ? (0, o.e5)(e.message) : void 0
  };
}

function T(e) {
  let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? I(e.item) : e.item;
  if (!h.initialized || !p(t) || h.notifCenterIds.has(t.id))
return !1;
  h.notifCenterIds.add(t.id), h.notifCenterItems = [
t,
...h.notifCenterItems
  ], h.notifCenterItems.sort((e, t) => c.default.compare(t.id, e.id));
}

function g(e, t) {
  h.notifCenterItems = h.notifCenterItems.map(n => e.includes(n.id) ? {
...n,
acked: t
  } : n).filter(p);
}

function S(e, t, n) {
  var r;
  return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}

function A(e) {
  if (!!(0, s.Z2)(e))
h.notifCenterItems = h.notifCenterItems.map(t => t.type === d.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? {
  ...t,
  disable_action: !0
} : t);
}
class N extends(r = i.ZP.PersistedStore) {
  initialize(e) {
if (this.waitFor(u.default), null != e) {
  let t = e.notifCenterItems.map(e => ({
    ...e,
    message: null != e.message ? new l.ZP(e.message) : void 0
  }));
  t.length > 0 && (h = {
    ...h,
    initialized: !0,
    isDataStale: !0,
    notifCenterItems: [],
    staleNotifCenterItems: t
  });
}
  }
  getState() {
let e = e => ({
  ...e,
  message: null != e.message ? e.message.toJS() : void 0
});
return {
  ...h,
  notifCenterItems: h.notifCenterItems.map(e),
  staleNotifCenterItems: h.staleNotifCenterItems.map(e)
};
  }
  get loading() {
return h.loading;
  }
  get initialized() {
return h.initialized;
  }
  get items() {
return h.isDataStale ? h.staleNotifCenterItems : h.notifCenterItems;
  }
  get hasMore() {
return h.paginationHasMore;
  }
  get cursor() {
return h.paginationCursor;
  }
  get errored() {
return h.errored;
  }
  get active() {
return h.notifCenterActive;
  }
  get localItems() {
return h.notifCenterLocalItems;
  }
  get tabFocused() {
return h.notifCenterTabFocused;
  }
}
f(N, 'displayName', 'NotificationCenterItemsStore'), f(N, 'persistKey', 'NotificationCenterItemsStore_v2');
let v = new N(a.Z, {
  CONNECTION_OPEN: function(e) {
m();
let t = [];
e.relationships.forEach(e => {
  let {
    type: n,
    user: r,
    since: i
  } = e;
  if (n !== E.OGo.PENDING_INCOMING || null == r || null == i)
    return null;
  let a = u.default.getUser(r.id);
  if (null == a)
    return null;
  t.push((0, _.mH)(a, i));
}), e.guilds.forEach(e => {
  e.guild_scheduled_events.forEach(e => {
    A(e);
  });
}), h.notifCenterLocalItems = t;
  },
  LOGOUT: m,
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
let {
  ids: t
} = e;
g(t, !0);
  },
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
let {
  ids: t
} = e;
g(t, !1);
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
let {
  guildScheduledEvent: t
} = e;
A(t);
  },
  NOTIFICATION_CENTER_ITEM_CREATE: T,
  NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
let {
  id: t
} = e;
if (!h.notifCenterIds.has(t))
  return !1;
h.notifCenterIds.delete(t), h.notifCenterItems = h.notifCenterItems.filter(e => e.id !== t);
  },
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: T,
  LOAD_NOTIFICATION_CENTER_ITEMS: function() {
h.loading = !0;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
h.loading = !1, h.initialized = !0, h.errored = !0;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
let {
  items: t,
  hasMore: n,
  cursor: r
} = e;
if (!!h.loading)
  h.loading = !1, h.initialized = !0, h.errored = !1, h.isDataStale = !1, (null == r || !h.notifCenterIds.has(r)) && (h.paginationHasMore = t.length > 0 && n, h.paginationCursor = t.length > 0 ? r : void 0), h.notifCenterItems = [
    ...h.notifCenterItems,
    ...t.map(I).filter(e => !h.notifCenterIds.has(e.id))
  ], h.notifCenterItems.sort((e, t) => c.default.compare(t.id, e.id)), t.forEach(e => h.notifCenterIds.add(e.id));
  },
  RESET_NOTIFICATION_CENTER: m,
  NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
let {
  active: t
} = e;
h.notifCenterActive = t;
  },
  NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
let {
  focused: t
} = e;
h.notifCenterTabFocused = t;
  },
  RELATIONSHIP_ADD: function(e) {
if (e.relationship.type === E.OGo.PENDING_INCOMING) {
  let {
    user: t,
    since: n
  } = e.relationship;
  if (null == n)
    return null;
  let r = u.default.getUser(t.id);
  if (null == r)
    return null;
  h.notifCenterLocalItems = [
    ...h.notifCenterLocalItems,
    (0, _.mH)(r, n)
  ];
}
e.relationship.type === E.OGo.FRIEND && (h.notifCenterLocalItems = h.notifCenterLocalItems.map(t => S(t, d.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? {
  ...t,
  acked: !0,
  forceUnacked: !1,
  local_id: 'incoming_friend_requests_accepted_'.concat(e.relationship.user.id, '_').concat(t.id),
  type: d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
} : t)), e.relationship.type === E.OGo.BLOCKED && (h.notifCenterLocalItems = h.notifCenterLocalItems.filter(t => !S(t, d.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !S(t, d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)));
  },
  RELATIONSHIP_REMOVE: function(e) {
h.notifCenterLocalItems = h.notifCenterLocalItems.filter(t => !S(t, d.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !S(t, d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
  },
  NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
let {
  item_enum: t
} = e;
h.notifCenterItems = h.notifCenterItems.map(e => e.item_enum === t ? {
  ...e,
  completed: !0,
  acked: !0
} : e).filter(p);
  },
  SET_RECENT_MENTIONS_FILTER: m,
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function(e) {
let {
  newBuild: t
} = e;
if (null !== t) {
  let e = (0, _.hn)(t);
  void 0 === h.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (h.notifCenterLocalItems = [
    ...h.notifCenterLocalItems.filter(t => t.kind !== e.kind),
    e
  ]);
}
  }
});
t.Z = v;