"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  u = n("481060"),
  i = n("87686"),
  s = n("586826"),
  r = n("507419"),
  o = n("689938"),
  d = n("359809");
t.default = l.memo(function(e) {
  let {
    sound: t,
    volume: n,
    disabled: l = !1,
    onChange: c
  } = e, {
    file: f
  } = (0, s.useAudioTrimmerStore)();
  return (0, a.jsx)(u.FormSection, {
    className: d.section,
    title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
    children: (0, a.jsxs)("div", {
      className: d.fakeInput,
      children: [null != t && (0, a.jsx)(r.default, {
        sound: t,
        volume: n,
        disabled: l
      }), null == t && null != f && (0, a.jsx)(i.default, {
        className: d.audioTrimmer,
        volume: n,
        disabled: l,
        onChange: c
      })]
    })
  })
})