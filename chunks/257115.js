"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("927923"),
  l = n("689938");

function s(e) {
  switch (e) {
    case a.GameConsoleTypes.XBOX:
      return l.default.Messages.XBOX_REMOTE_CONNECTED_RAW;
    case a.GameConsoleTypes.PLAYSTATION:
      return l.default.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW
  }
}