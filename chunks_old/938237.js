"use strict";
n.r(t), n.d(t, {
  markAnalyticsFeedItemSeen: function() {
    return s
  },
  markAnalyticsFeedItemUnseen: function() {
    return l
  },
  flushAnalyticsFeedItems: function() {
    return a
  }
});
var i = n("913144");

function s(e, t, n) {
  i.default.dispatch({
    type: "ANALYTICS_FEED_ITEM_SEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function l(e, t, n) {
  i.default.dispatch({
    type: "ANALYTICS_FEED_ITEM_UNSEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function a(e, t) {
  i.default.dispatch({
    type: "ANALYTICS_FEED_FLUSH",
    id: e,
    force: t
  })
}