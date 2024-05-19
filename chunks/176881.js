"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("626135"),
  s = n("188471"),
  l = n("360347"),
  i = n("981631");

function r(e) {
  var t, n, r;
  let {
    tab_opened: o,
    source: u
  } = e, d = (0, l.default)();
  a.default.track(i.AnalyticEvents.FRIENDS_LIST_VIEWED, {
    tab_opened: o,
    source: u,
    ...d
  }), (0, s.trackClickstream)(i.AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
    tab_opened: null != o ? o : "tabless",
    num_friends: null !== (t = d.num_friends) && void 0 !== t ? t : 0,
    now_playing_visible: null !== (n = d.now_playing_visible) && void 0 !== n && n,
    now_playing_num_cards: null !== (r = d.now_playing_num_cards) && void 0 !== r ? r : 0
  })
}