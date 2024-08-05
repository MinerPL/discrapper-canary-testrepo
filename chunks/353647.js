n(47120);
var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(180335);
let c = new Map();

function d() {
  c = new Map();
}
class _ extends(r = o.ZP.Store) {
  getMatchingOutboxEntry(e) {
let {
  activity: t,
  userId: n
} = e, r = c.get(n);
if (null != r && null != t)
  return (0, u.vu)(r.entries, t);
  }
  getUserOutbox(e) {
return c.get(e);
  }
}
s = 'ContentInventoryOutboxStore', (a = 'displayName') in(i = _) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new _(l.Z, {
  CONNECTION_OPEN: function() {
d();
  },
  LOGOUT: function() {
d();
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function(e) {
let {
  outbox: t,
  userId: n
} = e;
c.set(n, {
  ...t,
  lastFetched: Date.now()
});
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY: function(e) {
let {
  entry: t,
  userId: n
} = e, r = c.get(n);
if (null == r)
  return !1;
let i = r.entries.filter(e => e.id !== t.id);
c.set(n, {
  ...r,
  entries: i
});
  }
});