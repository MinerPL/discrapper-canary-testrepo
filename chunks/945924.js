"use strict";
n.r(t), n.d(t, {
  TEXTAREA_FOCUS: function() {
    return T
  }
}), n("222007");
var i = n("965955"),
  o = n("206230"),
  l = n("778588"),
  u = n("42887"),
  a = n("945956"),
  s = n("659500"),
  d = n("791776"),
  r = n("13798"),
  E = n("49111");
let c = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
  _ = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
  A = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
  C = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
  T = {
    binds: ["any-character"],
    keydown(e, t) {
      var n;
      let T = null === (n = (0, d.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement;
      if ((0, d.isInputLikeElement)(T) || i.LOCK_STACK.isActive() || _.has(t) || A.has(t) || C.has(t)) return !1;
      let S = null != T && "BODY" === T.tagName;
      return !(o.default.keyboardModeEnabled && !S && !/^[a-zA-Z0-9]$/.test(t) || s.ComponentDispatch.hasSubscribers(E.ComponentActions.MODAL_CLOSE) || l.default.hasLayers()) && ("Tab" === t && s.ComponentDispatch.hasSubscribers(E.ComponentActions.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), s.ComponentDispatch.dispatch(E.ComponentActions.TEXTAREA_FOCUS), !1) : !(a.default.isConnected() && u.default.getMode() === E.InputModes.PUSH_TO_TALK && !u.default.isSelfMute() && Object.values(u.default.getShortcuts()).map(r.toBrowserEvents).some(t => t.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !c.has(t) && s.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.TEXTAREA_FOCUS)))
    }
  }