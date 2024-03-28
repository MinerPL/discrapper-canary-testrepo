"use strict";
s.r(t), s.d(t, {
  EditStateContextProvider: function() {
    return r
  },
  useEditStateContext: function() {
    return i
  }
}), s("411104");
var a = s("735250"),
  l = s("470079");
let n = l.createContext(void 0);

function i() {
  let e = l.useContext(n);
  if (null == e) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
  return e
}

function r(e) {
  let {
    children: t,
    ...s
  } = e;
  return (0, a.jsx)(n.Provider, {
    value: s,
    children: t
  })
}