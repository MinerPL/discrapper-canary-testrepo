"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("424973");
var i = n("446674"),
  s = n("913144"),
  r = n("398604");
n("21121");
var a = n("692038"),
  o = n("719926"),
  l = n("305961");
n("27618");
var u = n("697218"),
  d = n("299039"),
  c = n("159885");
n("158998");
var f = n("360191"),
  _ = n("342176"),
  h = n("49111"),
  g = n("782340");
let m = {
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

function E(e) {
  return null != e.id && null != e.body && null != e.type
}

function p() {
  m = {
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

function v(e) {
  return {
    ...e,
    kind: "notification-center-item",
    message: null != e.message ? (0, a.createMessageRecord)(e.message) : void 0
  }
}

function S(e) {
  let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? v(e.item) : e.item;
  if (!m.initialized || !E(t) || m.notifCenterIds.has(t.id)) return !1;
  m.notifCenterIds.add(t.id), m.notifCenterItems = [t, ...m.notifCenterItems], m.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id))
}

function T(e, t) {
  m.notifCenterItems = m.notifCenterItems.map(n => e.includes(n.id) ? {
    ...n,
    acked: t
  } : n).filter(E)
}

function I(e, t, n) {
  var i;
  return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n
}

function C(e) {
  var t;
  if (!(0, r.isGuildEventEnded)(e)) return;
  let n = t => t.type === f.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
    i = e.name,
    s = null === (t = l.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
  m.notifCenterItems = m.notifCenterItems.map(e => n(e) ? {
    ...e,
    disable_action: !0,
    body: (0, c.isNullOrEmpty)(s) || (0, c.isNullOrEmpty)(i) ? e.body : g.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
      event_name: i,
      guild_name: s
    })
  } : e)
}
class A extends i.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(u.default), null != e) {
      let t = e.notifCenterItems.map(e => ({
        ...e,
        message: null != e.message ? new o.default(e.message) : void 0
      }));
      t.length > 0 && (m = {
        ...m,
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
      ...m,
      notifCenterItems: m.notifCenterItems.map(e),
      staleNotifCenterItems: m.staleNotifCenterItems.map(e)
    }
  }
  get loading() {
    return m.loading
  }
  get initialized() {
    return m.initialized
  }
  get items() {
    return m.isDataStale ? m.staleNotifCenterItems : m.notifCenterItems
  }
  get hasMore() {
    return m.paginationHasMore
  }
  get cursor() {
    return m.paginationCursor
  }
  get errored() {
    return m.errored
  }
  get active() {
    return m.notifCenterActive
  }
  get localItems() {
    return m.notifCenterLocalItems
  }
  get tabFocused() {
    return m.notifCenterTabFocused
  }
}
A.displayName = "NotificationCenterItemsStore", A.persistKey = "NotificationCenterItemsStore_v2";
var y = new A(s.default, {
  CONNECTION_OPEN: function(e) {
    p(), g.default.initialLanguageLoad.then(() => {
      let t = [];
      e.relationships.forEach(e => {
        let {
          type: n,
          user: i,
          since: s
        } = e;
        if (n !== h.RelationshipTypes.PENDING_INCOMING || null == i || null == s) return null;
        let r = u.default.getUser(i.id);
        if (null == r) return null;
        let a = (0, _.incomingFriendRequestLocalItem)(r, s);
        t.push(a)
      }), e.guilds.forEach(e => {
        e.guild_scheduled_events.forEach(e => {
          C(e)
        })
      }), m.notifCenterLocalItems = t
    })
  },
  LOGOUT: p,
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    let {
      ids: t
    } = e;
    T(t, !0)
  },
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
    let {
      ids: t
    } = e;
    T(t, !1)
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    C(t)
  },
  NOTIFICATION_CENTER_ITEM_CREATE: S,
  NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
    let {
      id: t
    } = e;
    if (!m.notifCenterIds.has(t)) return !1;
    m.notifCenterIds.delete(t), m.notifCenterItems = m.notifCenterItems.filter(e => e.id !== t)
  },
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: S,
  LOAD_NOTIFICATION_CENTER_ITEMS: function() {
    m.loading = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
    m.loading = !1, m.initialized = !0, m.errored = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
    let {
      items: t,
      hasMore: n,
      cursor: i
    } = e;
    m.loading && (m.loading = !1, m.initialized = !0, m.errored = !1, m.isDataStale = !1, (null == i || !m.notifCenterIds.has(i)) && (m.paginationHasMore = t.length > 0 && n, m.paginationCursor = t.length > 0 ? i : void 0), m.notifCenterItems = [...m.notifCenterItems, ...t.map(v).filter(e => !m.notifCenterIds.has(e.id))], m.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)), t.forEach(e => m.notifCenterIds.add(e.id)))
  },
  RESET_NOTIFICATION_CENTER: p,
  NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
    let {
      active: t
    } = e;
    m.notifCenterActive = t
  },
  NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
    let {
      focused: t
    } = e;
    m.notifCenterTabFocused = t
  },
  RELATIONSHIP_ADD: function(e) {
    if (e.relationship.type === h.RelationshipTypes.PENDING_INCOMING) {
      let {
        user: t,
        since: n
      } = e.relationship;
      if (null == n) return null;
      let i = u.default.getUser(t.id);
      if (null == i) return null;
      m.notifCenterLocalItems = [...m.notifCenterLocalItems, (0, _.incomingFriendRequestLocalItem)(i, n)]
    }
    e.relationship.type === h.RelationshipTypes.FRIEND && (m.notifCenterLocalItems = m.notifCenterLocalItems.map(t => {
      if (I(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)) {
        var n;
        let i = u.default.getUser(e.relationship.user.id);
        return {
          ...t,
          acked: !0,
          forceUnacked: !1,
          local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
          type: f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
          body: g.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
            username: "**".concat(null !== (n = null == i ? void 0 : i.globalName) && void 0 !== n ? n : e.relationship.user.username, "**")
          })
        }
      }
      return t
    }))
  },
  RELATIONSHIP_REMOVE: function(e) {
    m.notifCenterLocalItems = m.notifCenterLocalItems.filter(t => !(I(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || I(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
  },
  NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
    let {
      item_enum: t
    } = e;
    m.notifCenterItems = m.notifCenterItems.map(e => e.item_enum === t ? {
      ...e,
      completed: !0,
      acked: !0
    } : e).filter(E)
  },
  NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
    let {
      item: t
    } = e;
    m.notifCenterItems = m.notifCenterItems.map(e => e.id === t.id ? t : e).filter(E)
  },
  SET_RECENT_MENTIONS_FILTER: p
})