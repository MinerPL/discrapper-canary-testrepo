"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  },
  useGuildProductsSortOptionContext: function() {
    return o
  }
}), s("47120");
var l = s("735250"),
  i = s("470079"),
  r = s("512722"),
  a = s.n(r),
  n = s("333866");
let d = i.createContext(void 0);

function o() {
  let e = i.useContext(d);
  return a()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e
}

function u(e) {
  let {
    children: t,
    defaultSortOption: s = n.GuildProductSortOptions.NEWEST_ARRIVALS
  } = e, [r, a] = i.useState(s);
  return (0, l.jsx)(d.Provider, {
    value: {
      sortOption: r,
      setSortOption: a,
      onReset: () => a(s)
    },
    children: t
  })
}