"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("481060"),
  r = n("153124"),
  o = n("819570"),
  u = n("659900"),
  c = n("473855"),
  d = n("689938"),
  f = n("62565");

function m(e) {
  let {
    transitionState: t,
    onClose: n,
    guildTemplate: a
  } = e, {
    form: m,
    preview: p,
    handleSubmit: g
  } = (0, u.default)(a, !1), x = (0, r.useUID)();
  return (0, s.jsx)("div", {
    children: (0, s.jsxs)(i.ModalRoot, {
      size: i.ModalSize.DYNAMIC,
      transitionState: t,
      className: l()(f.modalRoot),
      "aria-labelledby": x,
      children: [(0, s.jsxs)("div", {
        className: f.modalContainer,
        children: [(0, s.jsx)("div", {
          className: l()(f.modalSection, f.ctaSection),
          children: (0, s.jsx)("div", {
            className: f.ctaContainer,
            children: (0, s.jsx)(c.default, {
              guildTemplate: a,
              headerId: x
            })
          })
        }), (0, s.jsx)("div", {
          className: l()(f.modalSection, f.formSection),
          children: (0, s.jsxs)(i.Scroller, {
            className: f.formContainer,
            children: [(0, s.jsx)(o.Title, {
              className: f.header,
              children: d.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), m, p]
          })
        })]
      }), (0, s.jsxs)(i.ModalFooter, {
        className: f.modalFooter,
        children: [(0, s.jsx)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          onClick: n,
          children: d.default.Messages.CLOSE
        }), (0, s.jsx)(i.Button, {
          color: i.Button.Colors.GREEN,
          onClick: async () => {
            null != await g() && n()
          },
          children: d.default.Messages.CREATE
        })]
      })]
    })
  })
}