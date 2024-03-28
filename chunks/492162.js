"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("442837"),
  a = n("592125"),
  s = n("938475"),
  i = n("853856"),
  r = n("981631");

function o(e) {
  return (0, l.useStateFromStoresObject)([s.default, a.default, i.default], () => {
    if (e !== r.FAVORITES) return s.default.getVoiceStates(e);
    let t = i.default.getFavoriteChannels(),
      n = {};
    for (let e in t) {
      let t = a.default.getChannel(e);
      null != t && (n[e] = s.default.getVoiceStatesForChannel(t))
    }
    return n
  }, [e])
}