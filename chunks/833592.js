n.d(t, {
  Vk: function() {
return _;
  },
  g3: function() {
return h;
  },
  jF: function() {
return E;
  },
  jk: function() {
return I;
  },
  wt: function() {
return m;
  }
});
var i = n(990547),
  a = n(544891),
  s = n(283693),
  r = n(570140),
  l = n(695346),
  o = n(573261),
  c = n(140155),
  d = n(178480),
  u = n(981631);

function _(e) {
  r.Z.dispatch({
type: 'NOTIFICATION_CENTER_SET_ACTIVE',
active: e
  });
}

function E() {
  r.Z.dispatch({
type: 'RESET_NOTIFICATION_CENTER'
  });
}
async function I(e, t) {
  if (c.Z.loading)
return;
  await r.Z.dispatch({
type: 'LOAD_NOTIFICATION_CENTER_ITEMS'
  });
  let n = Math.ceil(c.Z.items.length / e.limit);
  try {
let a = await o.Z.get({
  url: u.ANM.NOTIF_CENTER_ITEMS(),
  trackedActionData: {
    event: i.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
    properties: e => {
      var t;
      let i = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map(e => e.type);
      return (0, s.iG)({
        page: n,
        items: i,
        item_count: i.length
      });
    }
  },
  query: {
    ...e
  }
});
null == t || t(), await r.Z.dispatch({
  type: 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS',
  items: a.body.items,
  cursor: a.body.cursor,
  hasMore: a.body.has_more
});
  } catch (e) {
null == t || t(), await r.Z.dispatch({
  type: 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE'
});
  }
}

function m(e) {
  null != e.local_id ? function(e) {
r.Z.dispatch({
  type: 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK',
  localIds: e
});
  }([e.local_id]) : (0, d.RB)(e) ? function(e) {
r.Z.dispatch({
  type: 'NOTIFICATION_CENTER_ITEMS_ACK',
  optimistic: !0,
  ids: [e]
});
  }(e.id) : T(e.id);
}
async function T(e) {
  try {
r.Z.dispatch({
  type: 'NOTIFICATION_CENTER_ITEMS_ACK',
  optimistic: !0,
  ids: [e]
}), await a.tn.post({
  url: u.ANM.NOTIF_CENTER_ITEMS_ACK(e)
});
  } catch (t) {
r.Z.dispatch({
  type: 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE',
  ids: [e]
});
  }
}
async function h(e) {
  let t = l.d$.getSetting();
  try {
r.Z.dispatch({
  type: 'NOTIFICATION_CENTER_ITEM_DELETE',
  id: e.id
}), await o.Z.delete({
  url: u.ANM.NOTIF_CENTER_ITEMS(e.id),
  body: {
    item_type: (0, d.RB)(e) ? 'mention' : 'regular'
  },
  trackedActionData: {
    event: i.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
    properties: {
      notification_center_id: e.id,
      acked: (0, d.r)(e, t),
      item_type: e.type
    }
  }
});
  } catch (t) {
throw r.Z.dispatch({
  type: 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE',
  item: e
}), t;
  }
}