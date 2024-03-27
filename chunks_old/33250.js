"use strict";
t.r(l), t.d(l, {
  default: function() {
    return i
  }
});
var a = t("37983"),
  n = t("884691"),
  r = t("77078"),
  s = t("487269"),
  u = t("537560"),
  C = t("782340"),
  d = t("354398");

function i(e) {
  let {
    channel: l,
    onClose: t,
    transitionState: i
  } = e;
  return n.useEffect(() => {
    (0, s.trackThreadBrowserOpened)()
  }, []), (0, a.jsx)(r.ModalRoot, {
    className: d.modal,
    transitionState: i,
    "aria-label": C.default.Messages.THREADS,
    size: r.ModalSize.DYNAMIC,
    children: (0, a.jsx)(u.default, {
      className: d.browser,
      channel: l,
      onClose: t
    })
  })
}