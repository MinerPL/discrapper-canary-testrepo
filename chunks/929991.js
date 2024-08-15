n.d(t, {
  FL: function() {
return a;
  },
  a8: function() {
return i;
  },
  rS: function() {
return s;
  }
});
var r = n(570140);

function i(e, t, n) {
  r.Z.dispatch({
type: 'ANALYTICS_FEED_ITEM_SEEN',
id: e,
feedItemId: t,
timestampMillis: n
  });
}

function a(e, t, n) {
  r.Z.dispatch({
type: 'ANALYTICS_FEED_ITEM_UNSEEN',
id: e,
feedItemId: t,
timestampMillis: n
  });
}

function s(e, t) {
  r.Z.dispatch({
type: 'ANALYTICS_FEED_FLUSH',
id: e,
force: t
  });
}