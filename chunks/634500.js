"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(846027),
  l = n(923928),
  u = n(468026),
  _ = n(269647),
  d = n(981631),
  c = n(689938);

function E() {
  let e = (0, s.e7)([_.Z], () => _.Z.shouldShowWarning(), []),
    t = r.useRef(null);

  function n() {
    null !== t.current && ((0, o.closeModal)(t.current), t.current = null)
  }

  function E() {
    l.Z.clearVADWarning()
  }
  return r.useEffect(() => (e ? t.current = (0, o.openModal)(e => (0, i.jsx)(u.default, {
    title: c.Z.Messages.VAD_PERMISSION_TITLE,
    body: c.Z.Messages.VAD_PERMISSION_BODY,
    onCancel: E,
    cancelText: c.Z.Messages.VAD_PERMISSION_OKAY,
    confirmText: c.Z.Messages.VAD_PERMISSION_ENABLE_PTT,
    onConfirm: () => {
      a.Z.setMode(d.pM4.PUSH_TO_TALK), E()
    },
    ...e
  })) : n(), () => {
    n()
  }), [e]), null
}