"use strict";
n.d(t, {
  V: function() {
    return r
  }
});
var i = n(594190);

function r() {
  let e = i.ZP.getCurrentGameForAnalytics();
  return {
    game_name: null != e ? e.name : null,
    game_id: null != e ? e.id : null
  }
}