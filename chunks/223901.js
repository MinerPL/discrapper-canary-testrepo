"use strict";
s.r(a), s.d(a, {
  default: function() {
    return l
  }
});
var t = s("735250"),
  r = s("470079"),
  n = s("481060"),
  o = s("91159"),
  c = s("593130"),
  d = s("689938"),
  i = s("156514");

function l(e) {
  let {
    channel: a,
    onClose: s,
    transitionState: l
  } = e;
  return r.useEffect(() => {
    (0, o.trackThreadBrowserOpened)()
  }, []), (0, t.jsx)(n.ModalRoot, {
    className: i.modal,
    transitionState: l,
    "aria-label": d.default.Messages.THREADS,
    size: n.ModalSize.DYNAMIC,
    children: (0, t.jsx)(c.default, {
      className: i.browser,
      channel: a,
      onClose: s
    })
  })
}