"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250");
s("470079");
var l = s("512722"),
  i = s.n(l),
  n = s("481060"),
  d = s("703656"),
  r = s("285952"),
  o = s("346656"),
  u = s("689938"),
  c = s("948312");

function C(e) {
  let {
    directoryGuildName: t,
    guildToAdd: s,
    isExistingGuildFlow: l,
    onClose: C
  } = e;
  return i()(null != s, "Missing guild in Hub add guild confirmation"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.ModalHeader, {
      direction: r.default.Direction.VERTICAL,
      className: c.header,
      separator: !1,
      children: [null != C && (0, a.jsx)(n.ModalCloseButton, {
        className: c.closeButton,
        onClick: C
      }), (0, a.jsx)(o.default, {
        guild: s,
        size: o.default.Sizes.XLARGE,
        active: !0
      }), (0, a.jsx)(n.Heading, {
        className: c.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.HUB_ADD_OR_CREATE_SERVER_CONFIRMATION_TITLE
      }), (0, a.jsx)(n.Text, {
        className: c.__invalid_subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: l ? u.default.Messages.HUB_ADD_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: t
        }) : u.default.Messages.HUB_CREATE_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: t
        })
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      className: c.buttonRow,
      children: l ? (0, a.jsx)(n.Button, {
        className: c.addConfirmButton,
        color: n.Button.Colors.BRAND,
        onClick: C,
        children: u.default.Messages.HUB_ADD_SERVER_CONFIRMATION_BUTTON
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(n.Button, {
          className: c.createSecondaryButton,
          color: n.Button.Colors.PRIMARY,
          onClick: C,
          children: u.default.Messages.HUB_CREATE_SERVER_CONFIRMATION_STAY
        }), (0, a.jsx)(n.Button, {
          className: c.createConfirmButton,
          color: n.Button.Colors.BRAND,
          onClick: () => {
            (0, d.transitionToGuild)(s.id), null == C || C()
          },
          children: u.default.Messages.HUB_CREATE_SERVER_CONFIRMATION_GO
        })]
      })
    })]
  })
}