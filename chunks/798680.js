"use strict";
t.d(s, {
  M7: function() {
    return c
  },
  dw: function() {
    return o
  },
  ue: function() {
    return n
  }
}), t(411104), t(47120);
var n, i, l = t(735250),
  a = t(470079);
(i = n || (n = {}))[i.BASIC_INFO = 0] = "BASIC_INFO", i[i.TIERS = 1] = "TIERS", i[i.PAYMENT = 2] = "PAYMENT", i[i.EMOJIS = 3] = "EMOJIS";
let r = a.createContext({
  currentTab: 0,
  setCurrentTab: () => {
    throw Error("useTabBarState must be used within TabBarContextProvider")
  }
});

function o() {
  return a.useContext(r)
}

function c(e) {
  let {
    initialTab: s,
    children: t
  } = e, [n, i] = a.useState(s);
  return (0, l.jsx)(r.Provider, {
    value: {
      currentTab: n,
      setCurrentTab: i
    },
    children: t
  })
}