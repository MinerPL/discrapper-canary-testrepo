"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(330711),
  l = n(270292),
  u = n(481060),
  _ = n(695676),
  d = n(259255);

function c(e) {
  let {
    className: t
  } = e, {
    goBack: n
  } = (0, _.hH)(), s = r.useCallback(() => {
    n()
  }, [n]);
  return (0, i.jsx)(u.Clickable, {
    "aria-label": a.Z.Messages.BACK,
    onClick: s,
    className: o()(d.clickable, t),
    children: (0, i.jsx)(l.j, {
      color: u.tokens.colors.INTERACTIVE_ACTIVE,
      width: 18,
      height: 18
    })
  })
}