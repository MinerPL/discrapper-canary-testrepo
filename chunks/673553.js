t.d(n, {
  U: function() {
return A;
  }
}), t(47120);
var i = t(802498),
  l = t(607070),
  o = t(819640),
  r = t(131951),
  E = t(19780),
  a = t(585483),
  u = t(5967),
  s = t(13140),
  d = t(981631);
let _ = new Set([
'PageDown',
'PageUp',
'Home',
'End',
'ArrowUp',
'ArrowDown',
'ArrowLeft',
'ArrowRight'
  ]),
  c = new Set([
'Alt',
'AltGraph',
'CapsLock',
'Control',
'Fn',
'FnLock',
'Hyper',
'Meta',
'NumLock',
'OS',
'ScrollLock',
'Shift',
'Super',
'Symbol',
'SymbolLock'
  ]),
  C = new Set([
'F1',
'F2',
'F3',
'F4',
'F5',
'F6',
'F7',
'F8',
'F9',
'F10',
'F11',
'F12',
'F13',
'F14',
'F15',
'F16',
'F17',
'F18',
'F19',
'F20',
'Accept',
'ContextMenu',
'Find',
'ZoomIn',
'ZoomOut'
  ]),
  I = new Set([
'ChannelDown',
'ChannelUp',
'MediaFastForward',
'MediaPause',
'MediaPlay',
'MediaPlayPause',
'MediaRecord',
'MediaRewind',
'MediaStop',
'MediaTrackNext',
'MediaTrackPrevious',
'AudioBalanceLeft',
'AudioBalanceRight',
'AudioBassDown',
'AudioBassBoostDown',
'AudioBassBoostToggle',
'AudioBassBoostUp',
'AudioBassUp',
'AudioFaderFront',
'AudioFaderReader',
'AudioSurroundModeNext',
'AudioTrebleDown',
'AudioTreblUp',
'AudioVolumeDown',
'AudioVolumeMute',
'AudioVolumeUp',
'VolumeUp',
'VolumeDown',
'VolumeMute'
  ]),
  A = {
binds: ['any-character'],
keydown(e, n) {
  var t;
  let A = null === (t = (0, u.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
  if ((0, u.VG)(A) || i.fC.isActive() || c.has(n) || C.has(n) || I.has(n))
    return !1;
  let S = null != A && 'BODY' === A.tagName;
  return !(l.Z.keyboardModeEnabled && !S && !/^[a-zA-Z0-9]$/.test(n) || a.S.hasSubscribers(d.CkL.MODAL_CLOSE) || o.Z.hasLayers()) && ('Tab' === n && a.S.hasSubscribers(d.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]') ? (e.preventDefault(), a.S.dispatch(d.CkL.TEXTAREA_FOCUS), !1) : !(E.Z.isConnected() && r.Z.getMode() === d.pM4.PUSH_TO_TALK && !r.Z.isSelfMute() && Object.values(r.Z.getShortcuts()).map(s.d2).some(n => n.map(e => e.keyCode).includes(e.keyCode))) && void(!e.metaKey && !e.ctrlKey && !_.has(n) && a.S.dispatchToLastSubscribed(d.CkL.TEXTAREA_FOCUS)));
}
  };