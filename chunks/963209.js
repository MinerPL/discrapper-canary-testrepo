"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  r = s("481060"),
  o = s("154921"),
  i = s("689938"),
  c = s("614442");

function u(e) {
  let {
    onComplete: t
  } = e;
  return (0, a.jsxs)(r.Clickable, {
    className: c.container,
    onClick: t,
    children: [(0, a.jsx)(o.default, {
      size: o.default.Sizes.SIZE_24,
      className: c.title,
      children: i.default.Messages.NUF_COMPLETE_TITLE
    }), (0, a.jsx)(o.default, {
      size: o.default.Sizes.SIZE_24,
      className: l()(c.title, c.subtitle),
      children: i.default.Messages.NUF_COMPLETE_SUBTITLE
    }), (0, a.jsx)(r.Button, {
      color: r.Button.Colors.WHITE,
      onClick: t,
      children: i.default.Messages.NUF_COMPLETE_CTA
    })]
  })
}