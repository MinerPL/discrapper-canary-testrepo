"use strict";
n(47120), n(653041);
var i, r = n(442837),
  s = n(570140),
  o = n(924301);
n(57132);
var a = n(786761),
  l = n(23750),
  u = n(594174),
  _ = n(709054),
  d = n(497089),
  c = n(178480),
  E = n(981631);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = {
  loading: !1,
  initialized: !1,
  errored: !1,
  isDataStale: !1,
  notifCenterItems: [],
  staleNotifCenterItems: [],
  notifCenterIds: new Set,
  notifCenterLocalItems: [],
  paginationHasMore: !0,
  paginationCursor: void 0,
  notifCenterActive: !1,
  notifCenterTabFocused: !1
};

function h(e) {
  return null != e.id && null != e.type
}

function S() {
  T = {
    loading: !1,
    initialized: !1,
    errored: !1,
    isDataStale: !1,
    notifCenterItems: [],
    staleNotifCenterItems: [],
    notifCenterIds: new Set,
    notifCenterLocalItems: [],
    paginationHasMore: !0,
    paginationCursor: void 0,
    notifCenterActive: !1,
    notifCenterTabFocused: !1
  }
}

function f(e) {
  return {
    ...e,
    kind: "notification-center-item",
    message: null != e.message ? (0, a.e5)(e.message) : void 0
  }
}

function N(e) {
  let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? f(e.item) : e.item;
  if (!T.initialized || !h(t) || T.notifCenterIds.has(t.id)) return !1;
  T.notifCenterIds.add(t.id), T.notifCenterItems = [t, ...T.notifCenterItems], T.notifCenterItems.sort((e, t) => _.default.compare(t.id, e.id))
}

function A(e, t) {
  T.notifCenterItems = T.notifCenterItems.map(n => e.includes(n.id) ? {
    ...n,
    acked: t
  } : n).filter(h)
}

function m(e, t, n) {
  var i;
  return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n
}

function O(e) {
  if (!!(0, o.Z2)(e)) T.notifCenterItems = T.notifCenterItems.map(t => t.type === d.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? {
    ...t,
    disable_action: !0
  } : t)
}
class R extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(u.default), null != e) {
      let t = e.notifCenterItems.map(e => ({
        ...e,
        message: null != e.message ? new l.ZP(e.message) : void 0
      }));
      t.length > 0 && (T = {
        ...T,
        initialized: !0,
        isDataStale: !0,
        notifCenterItems: [],
        staleNotifCenterItems: t
      })
    }
  }
  getState() {
    let e = e => ({
      ...e,
      message: null != e.message ? e.message.toJS() : void 0
    });
    return {
      ...T,
      notifCenterItems: T.notifCenterItems.map(e),
      staleNotifCenterItems: T.staleNotifCenterItems.map(e)
    }
  }
  get loading() {
    return T.loading
  }
  get initialized() {
    return T.initialized
  }
  get items() {
    return T.isDataStale ? T.staleNotifCenterItems : T.notifCenterItems
  }
  get hasMore() {
    return T.paginationHasMore
  }
  get cursor() {
    return T.paginationCursor
  }
  get errored() {
    return T.errored
  }
  get active() {
    return T.notifCenterActive
  }
  get localItems() {
    return T.notifCenterLocalItems
  }
  get tabFocused() {
    return T.notifCenterTabFocused
  }
}
I(R, "displayName", "NotificationCenterItemsStore"), I(R, "persistKey", "NotificationCenterItemsStore_v2");
let C = new R(s.Z, {
  CONNECTION_OPEN: function(e) {
    S();
    let t = [];
    e.relationships.forEach(e => {
      let {
        type: n,
        user: i,
        since: r
      } = e;
      if (n !== E.OGo.PENDING_INCOMING || null == i || null == r) return null;
      let s = u.default.getUser(i.id);
      if (null == s) return null;
      t.push((0, c.mH)(s, r))
    }), e.guilds.forEach(e => {
      e.guild_scheduled_events.forEach(e => {
        O(e)
      })
    }), T.notifCenterLocalItems = t
  },
  LOGOUT: S,
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    let {
      ids: t
    } = e;
    A(t, !0)
  },
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
    let {
      ids: t
    } = e;
    A(t, !1)
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    O(t)
  },
  NOTIFICATION_CENTER_ITEM_CREATE: N,
  NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
    let {
      id: t
    } = e;
    if (!T.notifCenterIds.has(t)) return !1;
    T.notifCenterIds.delete(t), T.notifCenterItems = T.notifCenterItems.filter(e => e.id !== t)
  },
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: N,
  LOAD_NOTIFICATION_CENTER_ITEMS: function() {
    T.loading = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
    T.loading = !1, T.initialized = !0, T.errored = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
    let {
      items: t,
      hasMore: n,
      cursor: i
    } = e;
    if (!!T.loading) T.loading = !1, T.initialized = !0, T.errored = !1, T.isDataStale = !1, (null == i || !T.notifCenterIds.has(i)) && (T.paginationHasMore = t.length > 0 && n, T.paginationCursor = t.length > 0 ? i : void 0), T.notifCenterItems = [...T.notifCenterItems, ...t.map(f).filter(e => !T.notifCenterIds.has(e.id))], T.notifCenterItems.sort((e, t) => _.default.compare(t.id, e.id)), t.forEach(e => T.notifCenterIds.add(e.id))
  },
  RESET_NOTIFICATION_CENTER: S,
  NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
    let {
      active: t
    } = e;
    T.notifCenterActive = t
  },
  NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
    let {
      focused: t
    } = e;
    T.notifCenterTabFocused = t
  },
  RELATIONSHIP_ADD: function(e) {
    if (e.relationship.type === E.OGo.PENDING_INCOMING) {
      let {
        user: t,
        since: n
      } = e.relationship;
      if (null == n) return null;
      let i = u.default.getUser(t.id);
      if (null == i) return null;
      T.notifCenterLocalItems = [...T.notifCenterLocalItems, (0, c.mH)(i, n)]
    }
    e.relationship.type === E.OGo.FRIEND && (T.notifCenterLocalItems = T.notifCenterLocalItems.map(t => m(t, d.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? {
      ...t,
      acked: !0,
      forceUnacked: !1,
      local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
      type: d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
    } : t)), e.relationship.type === E.OGo.BLOCKED && (T.notifCenterLocalItems = T.notifCenterLocalItems.filter(t => !m(t, d.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !m(t, d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)))
  },
  RELATIONSHIP_REMOVE: function(e) {
    T.notifCenterLocalItems = T.notifCenterLocalItems.filter(t => !m(t, d.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !m(t, d.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id))
  },
  NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
    let {
      item_enum: t
    } = e;
    T.notifCenterItems = T.notifCenterItems.map(e => e.item_enum === t ? {
      ...e,
      completed: !0,
      acked: !0
    } : e).filter(h)
  },
  SET_RECENT_MENTIONS_FILTER: S,
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function(e) {
    let {
      newBuild: t
    } = e;
    if (null !== t) {
      let e = (0, c.hn)(t);
      void 0 === T.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (T.notifCenterLocalItems = [...T.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
    }
  }
});
t.Z = C