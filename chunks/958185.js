"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(981631);

function r(e) {
  let {
    LayerStore: t,
    PopoutWindowStore: n
  } = e, r = t.hasLayers(), s = n.getWindowOpen(i.KJ3.CHANNEL_CALL_POPOUT);
  return r && !s
}