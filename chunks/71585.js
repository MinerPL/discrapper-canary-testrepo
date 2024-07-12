n(47120), n(653041);
var i, a = n(442837),
  l = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let r = () => ({
itemImpressions: []
  }),
  o = r(),
  c = new Set(),
  d = new Set(),
  u = 0,
  h = !1,
  p = !1;

function m() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < u)
return;
  o.itemImpressions.length > 1000 && (o.itemImpressions = []);
  let t = 0,
n = Date.now() - 259200000;
  for (let e = 0; e < o.itemImpressions.length; e++) {
let [i, a] = o.itemImpressions[e];
if (a < n)
  t = e + 1;
else
  break;
  }
  t > 0 && (o.itemImpressions = o.itemImpressions.slice(t));
  let i = p ? 1000 : 57600000,
a = new Set(),
l = new Set(),
s = Date.now() - i,
r = null;
  for (let [e, t] of o.itemImpressions)
t < s ? a.add(e) : null == r && (r = t + i), l.add(e);
  c = a, d = l, u = null != r ? r : 1 / 0, h = !0;
}
class _ extends(i = a.ZP.PersistedStore) {
  initialize(e) {
o = {
  ...o,
  ...null != e ? e : {}
};
  }
  getState() {
return o;
  }
  getImpressionCappedItemIds() {
return m(), c;
  }
  getDebugFastImpressionCappingEnabled() {
return p;
  }
  reset() {
o = r();
  }
}
s(_, 'displayName', 'ContentInventoryPersistedStore'), s(_, 'persistKey', 'ContentInventoryPersistedStore'), t.Z = new _(l.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
let {
  itemIds: t
} = e;
!h && m();
let n = Date.now(),
  i = !1;
for (let e of t)
  !d.has(e) && (o.itemImpressions.push([
    e,
    n
  ]), i = !0);
return m(i), i;
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
o.itemImpressions = [], m(!0);
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
return console.log('Item impressions:', o.itemImpressions), !1;
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
p = !p;
  }
});