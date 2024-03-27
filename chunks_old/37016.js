"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  l = n("77078"),
  i = n("393414"),
  r = n("476765"),
  o = n("701909"),
  u = n("669499"),
  d = n("49111"),
  c = n("782340"),
  f = n("950258");

function E() {
  (0, u.closeAgeGateModal)(), (0, i.transitionTo)(d.Routes.LOGIN)
}

function h(e) {
  let {
    underageMessage: t,
    transitionState: i
  } = e, u = (0, r.useUID)();
  return (0, a.jsxs)(l.ModalRoot, {
    transitionState: i,
    size: l.ModalSize.SMALL,
    "aria-labelledby": u,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE_UNDERAGE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, a.jsx)(l.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: f.container,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: n("803452"),
          className: f.img
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: f.title,
          id: u,
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_HEADER
        }), (0, a.jsx)(l.Text, {
          color: "header-secondary",
          className: f.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
            underageMessage: null != t ? t : c.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
            helpURL: o.default.getArticleURL(d.HelpdeskArticles.AGE_GATE)
          })
        }), (0, a.jsx)(l.Text, {
          color: "header-secondary",
          className: f.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_BODY_DELETION_WITH_DAYS.format({
            days: 30
          })
        })]
      })
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        size: l.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: E,
        children: c.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
      })
    })]
  })
}