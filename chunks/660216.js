"use strict";
s.r(t);
var a = s("570140");
t.default = {
  addKeybind(e) {
    a.default.dispatch({
      type: "KEYBINDS_ADD_KEYBIND",
      keybind: e
    })
  },
  setKeybind(e) {
    a.default.dispatch({
      type: "KEYBINDS_SET_KEYBIND",
      keybind: e
    })
  },
  deleteKeybind(e) {
    a.default.dispatch({
      type: "KEYBINDS_DELETE_KEYBIND",
      id: e
    })
  },
  enableAll(e) {
    a.default.dispatch({
      type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
      enable: e
    })
  }
}