"use strict";
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(846027),
  l = n(468026),
  u = n(131951),
  _ = n(689938);
t.Z = () => {
  let e = (0, s.e7)([u.Z], () => u.Z.isInteractionRequired(), []),
    t = r.useRef(null);

  function n() {
    null !== t.current && ((0, o.closeModal)(t.current), t.current = null)
  }

  function d() {
    a.Z.interact()
  }
  return r.useEffect(() => (e ? t.current = (0, o.openModal)(e => (0, i.jsx)(l.default, {
    title: _.Z.Messages.INTERACTION_REQUIRED_TITLE,
    body: _.Z.Messages.INTERACTION_REQUIRED_BODY,
    onConfirm: d,
    confirmText: _.Z.Messages.OKAY,
    ...e
  })) : n(), () => {
    n()
  }), [e]), null
}