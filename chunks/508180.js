var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(846027),
  l = n(468026),
  u = n(131951),
  c = n(689938);
t.Z = () => {
  let e = (0, a.e7)([u.Z], () => u.Z.isInteractionRequired(), []),
t = i.useRef(null);

  function n() {
null !== t.current && ((0, s.closeModal)(t.current), t.current = null);
  }

  function d() {
o.Z.interact();
  }
  return i.useEffect(() => (e ? t.current = (0, s.openModal)(e => (0, r.jsx)(l.default, {
title: c.Z.Messages.INTERACTION_REQUIRED_TITLE,
body: c.Z.Messages.INTERACTION_REQUIRED_BODY,
onConfirm: d,
confirmText: c.Z.Messages.OKAY,
...e
  })) : n(), () => {
n();
  }), [e]), null;
};