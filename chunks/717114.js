"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(923928),
  l = n(468026),
  u = n(594190),
  _ = n(131951),
  d = n(19780),
  c = n(63063),
  E = n(981631),
  I = n(689938);
t.Z = () => {
  let [e, t] = (0, s.Wu)([u.ZP], () => [u.ZP.canShowAdminWarning, u.ZP.getVisibleGame()], []), n = (0, s.e7)([d.Z], () => d.Z.isConnected(), []), T = (0, s.e7)([_.Z], () => _.Z.getMode() === E.pM4.PUSH_TO_TALK, []), h = null != t && t.elevated && n && T && e, S = r.useRef(null);

  function f() {
    null !== S.current && ((0, o.closeModal)(S.current), S.current = null)
  }
  return r.useEffect(() => (h ? S.current = (0, o.openModal)(e => (0, i.jsx)(l.default, {
    title: I.Z.Messages.PTT_PERMISSION_TITLE,
    body: I.Z.Messages.PTT_PERMISSION_BODY.format({
      game: null == t ? void 0 : t.name
    }),
    secondaryConfirmText: I.Z.Messages.DONT_SHOW_AGAIN,
    onConfirmSecondary: () => a.Z.clearPTTAdminWarning(),
    onConfirm: () => window.open(c.Z.getArticleURL(E.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
    confirmText: I.Z.Messages.HELP_DESK,
    ...e
  })) : f(), () => {
    f()
  }), [t, h]), null
}