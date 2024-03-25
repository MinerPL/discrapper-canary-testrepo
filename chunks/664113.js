"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  i = n("77078"),
  s = n("460029"),
  r = n("129722"),
  u = n("723961"),
  o = n("782340"),
  d = n("340853"),
  c = a.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: a = !1,
      onChange: c
    } = e, {
      file: f
    } = (0, r.useAudioTrimmerStore)();
    return (0, l.jsx)(i.FormSection, {
      className: d.section,
      title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
      children: (0, l.jsxs)("div", {
        className: d.fakeInput,
        children: [null != t && (0, l.jsx)(u.default, {
          sound: t,
          volume: n,
          disabled: a
        }), null == t && null != f && (0, l.jsx)(s.default, {
          className: d.audioTrimmer,
          volume: n,
          disabled: a,
          onChange: c
        })]
      })
    })
  })