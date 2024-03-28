"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("160620"),
  d = n("499254"),
  c = n("541099"),
  f = n("957825"),
  h = n("959907");
t.default = l.memo(function() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.shouldShowPopup()),
    t = l.useCallback(() => {
      e ? d.dismissAppLauncherPopup() : d.showAppLauncherPopup()
    }, [e]);
  return (0, a.jsx)(o.Tooltip, {
    text: "Use an App",
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(f.CHAT_INPUT_BUTTON_CLASSNAME, h.buttonContainer),
      children: (0, a.jsx)(u.default, {
        onClick: t,
        tabIndex: 0,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        }
      })
    })
  })
})