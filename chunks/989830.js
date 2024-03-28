"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var n = i("442837"),
  a = i("314897"),
  s = i("351780"),
  l = i("843693");

function o(e, t) {
  return e === t || (null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier) && !0
}

function r(e) {
  let t = (0, n.useStateFromStores)([s.default], () => !!s.default.isEnabled() && s.default.combosEnabled);
  return (0, n.useStateFromStores)([l.default, a.default], () => t ? l.default.getUserCombo(a.default.getId(), e) : void 0, [e, t], o)
}