"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
}), i("222007");
var l = i("446674"),
  a = i("84460"),
  n = i("807106"),
  r = i("119420"),
  d = i("243244");

function u(e) {
  let {
    guildId: t,
    isWatchTogetherPromoEnabled: i = !1,
    disableFilter: u = !1
  } = e, {
    filter: o
  } = (0, l.useStateFromStoresObject)([a.default], () => ({
    filter: a.default.getFilter()
  })), c = (0, d.default)(t, i), s = (0, n.default)(c), f = (0, r.useDeveloperActivityShelfItems)();
  return [...f, ...s].map(e => {
    let [t, i] = e;
    return [t, i.filter(e => u || "" === o || e.application.name.toLocaleLowerCase().includes(o.toLocaleLowerCase()))]
  })
}