"use strict";
l.r(t), l.d(t, {
  useDisabledTooltip: function() {
    return o
  },
  useIsChecked: function() {
    return r
  },
  useIsDisabled: function() {
    return d
  }
});
var n = l("442837"),
  a = l("9156"),
  s = l("724213"),
  i = l("689938");

function r(e, t, l) {
  return (0, n.useStateFromStores)([a.default], () => {
    var n, i, r;
    if (t === l) return a.default.isChannelOptedIn(e, t, !0);
    return n = e, i = t, r = a.default, !!(0, s.hasNotSetUpChannelOptIn)(n) || r.isChannelOptedIn(n, i, !0) || null != l && a.default.isChannelOptedIn(e, l, !0)
  })
}

function d(e, t, l) {
  return (0, n.useStateFromStores)([a.default], () => t !== l && null != l && a.default.isChannelOptedIn(e, l, !0))
}

function o(e, t) {
  return (0, n.useStateFromStores)([a.default], () => {
    if (null != t && a.default.isChannelOptedIn(e, t, !0)) return i.default.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY
  })
}