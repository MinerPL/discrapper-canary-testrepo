"use strict";
n.r(t), n.d(t, {
  useActionTotalsForDisplayType: function() {
    return r
  },
  useActionsForDisplayType: function() {
    return i
  },
  useHasActionForAnyDisplayType: function() {
    return o
  }
});
var a = n("399606"),
  s = n("914788"),
  l = n("292352");

function i(e) {
  return (0, a.useStateFromStoresArray)([s.default], () => s.default.getActionsForDisplayType(e))
}

function r(e) {
  return (0, a.useStateFromStores)([s.default], () => s.default.getTotalForDisplayType(e))
}

function o() {
  return (0, a.useStateFromStores)([s.default], () => Object.values(l.TeenActionDisplayType).some(e => s.default.getTotalForDisplayType(e) > 0))
}