"use strict";
n.d(t, {
  Gc: function() {
    return o
  },
  ol: function() {
    return a
  },
  q3: function() {
    return s
  }
});
var i = n(735250),
  r = n(470079);
let s = r.createContext({
  titleId: void 0,
  errorId: void 0,
  error: void 0
});

function o() {
  return r.useContext(s)
}

function a(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, i.jsx)(s.Provider, {
    value: n,
    children: t
  })
}