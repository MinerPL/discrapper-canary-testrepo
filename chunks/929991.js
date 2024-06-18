"use strict";
n.d(t, {
  FL: function() {
    return s
  },
  a8: function() {
    return r
  },
  rS: function() {
    return o
  }
});
var i = n(570140);

function r(e, t, n) {
  i.Z.dispatch({
    type: "ANALYTICS_FEED_ITEM_SEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function s(e, t, n) {
  i.Z.dispatch({
    type: "ANALYTICS_FEED_ITEM_UNSEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function o(e, t) {
  i.Z.dispatch({
    type: "ANALYTICS_FEED_FLUSH",
    id: e,
    force: t
  })
}