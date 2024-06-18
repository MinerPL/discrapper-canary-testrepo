"use strict";
n.d(t, {
  gc: function() {
    return r
  },
  hH: function() {
    return a
  },
  uX: function() {
    return o
  }
});
var i, r, s = n(470079);
(i = r || (r = {})).HOME = "home", i.LIST = "list", i.APPLICATION = "application";
let o = s.createContext({
  history: [],
  setHistory: () => {},
  currentView: void 0,
  pushHistory: () => {},
  goBack: () => {}
});

function a() {
  return s.useContext(o)
}