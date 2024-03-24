"use strict";
n.r(t), n.d(t, {
  useActionsForDisplayType: function() {
    return i
  },
  useActionTotalsForDisplayType: function() {
    return r
  },
  useHasActionForAnyDisplayType: function() {
    return o
  }
});
var a = n("65597"),
  s = n("822825"),
  l = n("922832");

function i(e) {
  let t = (0, a.useStateFromStoresArray)([s.default], () => s.default.getActionsForDisplayType(e));
  return t
}

function r(e) {
  return (0, a.useStateFromStores)([s.default], () => s.default.getTotalForDisplayType(e))
}

function o() {
  return (0, a.useStateFromStores)([s.default], () => Object.values(l.TeenActionDisplayType).some(e => {
    let t = s.default.getTotalForDisplayType(e);
    return t > 0
  }))
}