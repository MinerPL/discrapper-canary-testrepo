"use strict";
s.r(a), s.d(a, {
  default: function() {
    return c
  }
}), s("47120");
var l = s("735250"),
  _ = s("470079"),
  t = s("512722"),
  E = s.n(t),
  n = s("481060"),
  T = s("935369"),
  i = s("728345"),
  d = s("577275"),
  o = s("682864"),
  I = s("153124"),
  u = s("759231"),
  S = s("829857"),
  N = s("689938"),
  r = s("949808");

function c(e) {
  var a, s;
  let {
    transitionState: t,
    application: c,
    onClose: M
  } = e, A = (0, I.useUID)(), [L, O] = _.useState(null == c ? void 0 : null === (a = c.team) || void 0 === a ? void 0 : a.id), {
    teams: C
  } = (0, d.default)(), m = _.useMemo(() => C.filter(e => e.payout_account_status === S.PayoutAccountStatuses.ACTIVE).map(e => ({
    label: e.name,
    value: e.id
  })), [C]), R = (null == c ? void 0 : null === (s = c.team) || void 0 === s ? void 0 : s.id) !== L, [g, {
    loading: f,
    error: h
  }] = (0, T.default)(i.default.transferApplication), x = async () => {
    E()(null != c, "no application"), E()(null != L, "no team selected"), null != await g({
      applicationId: c.id,
      teamId: L
    }) && M()
  }, D = (null == c ? void 0 : c.team) != null;
  return (0, l.jsxs)(n.ModalRoot, {
    transitionState: t,
    "aria-labelledby": A,
    children: [(0, l.jsxs)(n.ModalHeader, {
      children: [(0, l.jsx)(n.Heading, {
        id: A,
        variant: "heading-md/semibold",
        children: D ? N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_TITLE : N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TITLE
      }), (0, l.jsx)(n.ModalCloseButton, {
        className: r.closeButton,
        onClick: M
      })]
    }), (0, l.jsxs)(n.ModalContent, {
      className: r.content,
      children: [D ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(n.FormText, {
          children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_DESCRIPTION
        }), (0, l.jsx)(o.default, {
          size: 8
        }), (0, l.jsxs)(n.Heading, {
          className: r.warningHeading,
          variant: "text-sm/semibold",
          color: "text-danger",
          children: [(0, l.jsx)(u.default, {
            width: 16,
            height: 16,
            className: r.warningIcon
          }), N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING_HEADING]
        }), (0, l.jsx)(o.default, {
          size: 4
        }), (0, l.jsx)(n.FormText, {
          type: n.FormText.Types.ERROR,
          children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING
        })]
      }) : (0, l.jsx)(n.FormText, {
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_DESCRIPTION
      }), null != h ? (0, l.jsx)(n.FormErrorBlock, {
        children: h.message
      }) : null, (0, l.jsx)(o.default, {
        size: 16
      }), (0, l.jsx)(n.FormItem, {
        title: D ? N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TO_TRANSFER_LABEL : N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_LABEL,
        required: !0,
        children: (0, l.jsx)(n.SingleSelect, {
          className: r.__invalid_teamSelect,
          options: m,
          placeholder: N.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
          value: L,
          isDisabled: 0 === m.length,
          onChange: e => O(e),
          "aria-label": N.default.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
        })
      })]
    }), (0, l.jsx)(n.ModalFooter, {
      className: r.__invalid_footer,
      children: (0, l.jsx)(n.Button, {
        color: n.Button.Colors.RED,
        className: r.__invalid_goBackButton,
        submitting: f,
        disabled: !R,
        onClick: x,
        children: N.default.Messages.SAVE
      })
    })]
  })
}