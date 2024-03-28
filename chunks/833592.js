"use strict";
n.r(t), n.d(t, {
  deleteNotificationCenterItem: function() {
    return I
  },
  fetchNotificationCenterItems: function() {
    return _
  },
  markNotificationCenterItemAcked: function() {
    return T
  },
  resetNotificationCenter: function() {
    return E
  },
  setNotificationCenterActive: function() {
    return f
  }
});
var s = n("990547"),
  a = n("544891"),
  l = n("283693"),
  i = n("570140"),
  r = n("695346"),
  o = n("573261"),
  u = n("140155"),
  d = n("178480"),
  c = n("981631");

function f(e) {
  i.default.dispatch({
    type: "NOTIFICATION_CENTER_SET_ACTIVE",
    active: e
  })
}

function E() {
  i.default.dispatch({
    type: "RESET_NOTIFICATION_CENTER"
  })
}
async function _(e, t) {
  if (u.default.loading) return;
  await i.default.dispatch({
    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
  });
  let n = Math.ceil(u.default.items.length / e.limit);
  try {
    let a = await o.default.get({
      url: c.Endpoints.NOTIF_CENTER_ITEMS(),
      trackedActionData: {
        event: s.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
        properties: e => {
          var t;
          let s = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map(e => e.type);
          return (0, l.exact)({
            page: n,
            items: s,
            item_count: s.length
          })
        }
      },
      query: {
        ...e
      }
    });
    null == t || t(), await i.default.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
      items: a.body.items,
      cursor: a.body.cursor,
      hasMore: a.body.has_more
    })
  } catch (e) {
    null == t || t(), await i.default.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
    })
  }
}

function T(e) {
  null != e.local_id ? function(e) {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
      localIds: e
    })
  }([e.local_id]) : (0, d.isMentionItem)(e) ? function(e) {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: !0,
      ids: [e]
    })
  }(e.id) : m(e.id)
}
async function m(e) {
  try {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: !0,
      ids: [e]
    }), await a.HTTP.post({
      url: c.Endpoints.NOTIF_CENTER_ITEMS_ACK(e)
    })
  } catch (t) {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
      ids: [e]
    })
  }
}
async function I(e) {
  let t = r.NotificationCenterAckedBeforeId.getSetting();
  try {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE",
      id: e.id
    }), await o.default.delete({
      url: c.Endpoints.NOTIF_CENTER_ITEMS(e.id),
      body: {
        item_type: (0, d.isMentionItem)(e) ? "mention" : "regular"
      },
      trackedActionData: {
        event: s.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
        properties: {
          notification_center_id: e.id,
          acked: (0, d.isRemoteAcked)(e, t),
          item_type: e.type
        }
      }
    })
  } catch (t) {
    throw i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
      item: e
    }), t
  }
}