"use strict";
t.r(s), t.d(s, {
  default: function() {
    return T
  }
}), t("47120");
var a = t("735250");
t("470079");
var l = t("512722"),
  n = t.n(l),
  o = t("481060"),
  i = t("935369"),
  r = t("53365"),
  d = t("682864"),
  u = t("153124"),
  c = t("981631"),
  _ = t("689938"),
  E = t("949808");

function T(e) {
  let {
    transitionState: s,
    guild: t,
    onClose: l
  } = e, T = (0, u.useUID)(), [M, {
    loading: N,
    error: O
  }] = (0, i.default)(r.removeMonetization), h = async () => {
    n()(null != t, "no guild"), null != await M(t.id) && l()
  };
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-labelledby": T,
    children: [(0, a.jsxs)(o.ModalHeader, {
      children: [(0, a.jsx)(o.Heading, {
        id: T,
        variant: "heading-md/semibold",
        children: _.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER
      }), (0, a.jsx)(o.ModalCloseButton, {
        className: E.closeButton,
        onClick: l
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: E.content,
      children: [null != O ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.FormErrorBlock, {
          children: O.message
        }), (0, a.jsx)(d.default, {
          size: 24
        })]
      }) : null, (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.ERROR,
        children: _.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format({
          guildName: t.toString(),
          url: c.MarketingURLs.DEVELOPER_PORTAL_TEAMS
        })
      }), (0, a.jsx)(d.default, {
        size: 16
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      className: E.__invalid_footer,
      children: (0, a.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        className: E.__invalid_goBackButton,
        submitting: N,
        onClick: h,
        children: _.default.Messages.SAVE
      })
    })]
  })
}