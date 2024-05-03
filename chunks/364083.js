"use strict";
n.r(t), n.d(t, {
  useClanSetupGameSelectableSearch: function() {
    return d
  }
});
var a = n("470079"),
  i = n("392711"),
  r = n.n(i),
  s = n("442837"),
  l = n("77498"),
  o = n("308083");

function c(e) {
  var t;
  return null !== (t = o.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY.get(e)) && void 0 !== t ? t : 0
}

function d() {
  let e = (0, s.useStateFromStores)([l.default], () => r()(l.default.games).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return c(t)
    }).reverse().value(), []),
    t = a.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
  return {
    options: e,
    matchSorterOptions: a.useMemo(() => ({
      baseSort: t,
      keys: ["label"]
    }), [t])
  }
}