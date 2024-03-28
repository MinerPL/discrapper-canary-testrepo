"use strict";
s.r(t), s.d(t, {
  TabBarContextProvider: function() {
    return d
  },
  TabBarSection: function() {
    return a
  },
  useTabBarState: function() {
    return o
  }
}), s("411104"), s("47120");
var a, l, n = s("735250"),
  i = s("470079");
(l = a || (a = {}))[l.BASIC_INFO = 0] = "BASIC_INFO", l[l.TIERS = 1] = "TIERS", l[l.PAYMENT = 2] = "PAYMENT", l[l.EMOJIS = 3] = "EMOJIS";
let r = i.createContext({
  currentTab: 0,
  setCurrentTab: () => {
    throw Error("useTabBarState must be used within TabBarContextProvider")
  }
});

function o() {
  return i.useContext(r)
}

function d(e) {
  let {
    initialTab: t,
    children: s
  } = e, [a, l] = i.useState(t);
  return (0, n.jsx)(r.Provider, {
    value: {
      currentTab: a,
      setCurrentTab: l
    },
    children: s
  })
}