"use strict";
n.r(t), n.d(t, {
  closeSoundboardInOverlay: function() {
    return o
  },
  openSoundboardInOverlay: function() {
    return r
  }
}), n("735250"), n("470079");
var l = n("570140");
n("238246"), n("788983"), n("592125"), n("19780");
var a = n("808506");
n("998502"), n("487029");
var s = n("710111");
n("981631"), n("689938");
let i = {
  width: s.SoundboardWheelSize.width,
  height: s.SoundboardWheelSize.height,
  resizable: !1,
  movable: !1,
  alwaysOnTop: !0,
  frame: !1,
  transparent: !0,
  hasShadow: !1,
  skipTaskbar: !0,
  menubar: !0,
  backgroundColor: "#00000000",
  titleBarStyle: null
};

function r(e, t) {
  l.default.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: !1,
    pid: t
  }), l.default.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: t,
    enabled: !0,
    keepOpen: e
  })
}

function o(e) {
  l.default.dispatch({
    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
    pid: e,
    enabled: !1
  }), !a.default.isInputLocked(e) && l.default.dispatch({
    type: "OVERLAY_SET_INPUT_LOCKED",
    locked: !0,
    pid: e
  })
}
s.SoundboardWheelSize.padding, i.width, i.height