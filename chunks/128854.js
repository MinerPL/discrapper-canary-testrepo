"use strict";
t.r(n), t.d(n, {
  MessageAccessoriesComponentContextProvider: function() {
    return s
  },
  useMessageAccessoriesComponentContext: function() {
    return u
  }
}), t("411104");
var l = t("735250"),
  a = t("470079");
let r = a.createContext(null);

function u() {
  let e = a.useContext(r);
  if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return e
}

function s(e) {
  let {
    children: n,
    ...t
  } = e;
  return (0, l.jsx)(r.Provider, {
    value: t,
    children: n
  })
}