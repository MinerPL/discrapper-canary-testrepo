"use strict";
t.d(s, {
  I: function() {
    return r
  },
  N: function() {
    return a
  }
}), t(411104);
var n = t(735250),
  i = t(470079);
let l = i.createContext(void 0);

function a() {
  let e = i.useContext(l);
  if (null == e) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
  return e
}

function r(e) {
  let {
    children: s,
    ...t
  } = e;
  return (0, n.jsx)(l.Provider, {
    value: t,
    children: s
  })
}