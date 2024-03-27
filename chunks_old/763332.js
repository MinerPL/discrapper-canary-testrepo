"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  r = s("733154"),
  o = s("505088"),
  i = s("202804"),
  u = s("77078"),
  l = s("446674"),
  c = s("736964"),
  E = s("545158"),
  T = s("377114"),
  d = s("652126"),
  N = s("27618"),
  I = s("217736"),
  A = s("615992"),
  _ = s("302577"),
  R = s("324252"),
  O = s("49111"),
  C = s("782340"),
  f = s("932379"),
  S = s("921208");

function P(e) {
  let {
    senderId: t,
    channelId: s,
    hasReported: P,
    onReport: p,
    trackAnalyticsEvent: h
  } = e, g = (0, l.useStateFromStores)([N.default], () => N.default.isBlocked(t)), [M, m] = a.useState(g), L = (0, d.useShouldShowHelplineLink)(), [v, x] = a.useState(!1), j = (0, A.useLastChannelMessage)(s), B = () => {
    m(!0), c.default.addRelationship({
      userId: t,
      context: {
        location: R.MODAL_LOCATION_CONTEXT_WEB
      },
      type: O.RelationshipTypes.BLOCKED
    }), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK)
  }, D = () => {
    m(!1), c.default.unblockUser(t, {
      location: R.MODAL_LOCATION_CONTEXT_WEB
    }), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK)
  }, y = async () => {
    null != j && (x(!0), await (0, T.submitReportForInappropriateConversationSafetyAlert)(j, () => {
      (0, u.showToast)((0, u.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, u.ToastType.SUCCESS)), p()
    }, () => {
      (0, u.showToast)((0, u.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, u.ToastType.FAILURE))
    }), x(!1), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_REPORT))
  };
  return (0, n.jsx)(_.default, {
    heroImageSrc: S,
    heroImageAlt: C.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
    header: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
    description: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
    children: (0, n.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, n.jsxs)(u.Button, {
        color: u.Button.Colors.BRAND_NEW,
        size: u.Button.Sizes.LARGE,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: () => {
          M ? D() : B()
        },
        children: [(0, n.jsx)(o.CircleXIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: f.buttonIcon
        }), M ? C.default.Messages.UNBLOCK : C.default.Messages.BLOCK]
      }), (0, n.jsxs)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.LARGE,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: y,
        submitting: v,
        disabled: P,
        children: [(0, n.jsx)(i.FlagIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: f.buttonIcon
        }), P ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
      }), (0, n.jsxs)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.LARGE,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: () => {
          L ? ((0, E.default)(R.CRISIS_TEXT_LINE_URL), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_CTL)) : ((0, E.default)(R.NOFILTR_URL), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR))
        },
        children: [(0, n.jsx)(r.ChatIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: f.buttonIcon
        }), L ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : C.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE]
      })]
    })
  })
}