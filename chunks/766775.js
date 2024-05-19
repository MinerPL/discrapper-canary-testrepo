"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  r = s("481060"),
  i = s("153124"),
  o = s("819570"),
  c = s("659900"),
  u = s("473855"),
  d = s("689938"),
  m = s("317280");

function p(e) {
  let {
    transitionState: t,
    onClose: s,
    guildTemplate: n
  } = e, {
    form: p,
    preview: x,
    handleSubmit: f
  } = (0, c.default)(n, !1), h = (0, i.useUID)();
  return (0, a.jsx)("div", {
    children: (0, a.jsxs)(r.ModalRoot, {
      size: r.ModalSize.DYNAMIC,
      transitionState: t,
      className: l()(m.modalRoot),
      "aria-labelledby": h,
      children: [(0, a.jsxs)("div", {
        className: m.modalContainer,
        children: [(0, a.jsx)("div", {
          className: l()(m.modalSection, m.ctaSection),
          children: (0, a.jsx)("div", {
            className: m.ctaContainer,
            children: (0, a.jsx)(u.default, {
              guildTemplate: n,
              headerId: h
            })
          })
        }), (0, a.jsx)("div", {
          className: l()(m.modalSection, m.formSection),
          children: (0, a.jsxs)(r.Scroller, {
            className: m.formContainer,
            children: [(0, a.jsx)(o.Title, {
              className: m.header,
              children: d.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), p, x]
          })
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: m.modalFooter,
        children: [(0, a.jsx)(r.Button, {
          color: r.Button.Colors.PRIMARY,
          onClick: s,
          children: d.default.Messages.CLOSE
        }), (0, a.jsx)(r.Button, {
          color: r.Button.Colors.GREEN,
          onClick: async () => {
            null != await f() && s()
          },
          children: d.default.Messages.CREATE
        })]
      })]
    })
  })
}