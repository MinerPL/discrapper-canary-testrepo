"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("162461"),
  i = n("71585"),
  r = n("146282"),
  o = n("561308");
let u = new Set;

function d(e) {
  let t = (0, l.useStateFromStores)([i.default, r.default], () => {
    let e = r.default.getDebugImpressionCappingDisabled();
    return !(0, s.isEligibleForImpressionCapping)("useFilterImpressionCappedContent") || e ? u : i.default.getImpressionCappedItemIds()
  }, [e]);
  return a.useMemo(() => {
    if (null == e) return {
      entries: e,
      filteredIds: u
    };
    let n = new Set;
    return {
      entries: e.filter(e => !!(0, o.isEntryActive)(e) || !t.has(e.id) || (n.add(e.id), !1)),
      filteredIds: n
    }
  }, [e, t])
}