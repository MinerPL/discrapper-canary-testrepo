"use strict";
n.r(e), n.d(e, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  o = n("77078"),
  r = n("197509"),
  s = n("782914"),
  T = n("191814"),
  c = n("423487"),
  l = n("782340"),
  u = n("851080");

function E(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: E
  } = t, [d, _] = a.useState(!1), [C, R] = a.useState(!1), O = async () => {
    _(!0);
    try {
      await (0, r.acceptCreatorMonetizationTermsV2)(e), E()
    } finally {
      _(!1)
    }
  }, A = l.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
  return (0, i.jsxs)(o.ModalRoot, {
    className: u.container,
    size: o.ModalSize.DYNAMIC,
    transitionState: n,
    "aria-label": A,
    children: [(0, i.jsxs)(o.ModalContent, {
      className: u.content,
      children: [(0, i.jsxs)("div", {
        className: u.header,
        children: [(0, i.jsx)(c.default, {
          width: 20,
          height: 20,
          className: u.warningIcon
        }), (0, i.jsx)(T.default, {
          size: 8,
          horizontal: !0
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: A
        })]
      }), (0, i.jsx)(T.default, {
        size: 12
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.body,
        children: l.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY
      }), (0, i.jsx)(T.default, {
        size: 28
      }), (0, i.jsx)(o.Checkbox, {
        onChange: () => {
          R(t => !t)
        },
        size: 20,
        type: o.Checkbox.Types.INVERTED,
        value: C,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, s.getCreatorMonetizationAcceptTermsCheckboxText)()
        })
      })]
    }), (0, i.jsxs)(o.ModalFooter, {
      children: [(0, i.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        disabled: !C,
        onClick: O,
        submitting: d,
        children: l.default.Messages.CONFIRM
      }), (0, i.jsx)(T.default, {
        size: 12,
        horizontal: !0
      }), (0, i.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.OUTLINED,
        onClick: E,
        children: l.default.Messages.CANCEL
      })]
    })]
  })
}