var n = s(570140);
t.Z = {
  addKeybind(e) {
n.Z.dispatch({
  type: 'KEYBINDS_ADD_KEYBIND',
  keybind: e
});
  },
  setKeybind(e) {
n.Z.dispatch({
  type: 'KEYBINDS_SET_KEYBIND',
  keybind: e
});
  },
  deleteKeybind(e) {
n.Z.dispatch({
  type: 'KEYBINDS_DELETE_KEYBIND',
  id: e
});
  },
  enableAll(e) {
n.Z.dispatch({
  type: 'KEYBINDS_ENABLE_ALL_KEYBINDS',
  enable: e
});
  }
};