"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("176743"),
  o = s("612165"),
  i = s("124826"),
  u = s("481060"),
  l = s("442837"),
  c = s("194359"),
  E = s("782568"),
  T = s("726521"),
  d = s("485664"),
  N = s("699516"),
  I = s("473092"),
  A = s("941362"),
  _ = s("850165"),
  R = s("134612"),
  O = s("981631"),
  C = s("689938"),
  S = s("358733"),
  f = s("149355");

function P(e) {
  let {
    senderId: t,
    channelId: s,
    hasReported: P,
    onReport: p,
    trackAnalyticsEvent: h
  } = e, g = (0, l.useStateFromStores)([N.default], () => N.default.isBlocked(t)), [M, m] = a.useState(g), L = (0, d.useShouldShowHelplineLink)(), [x, v] = a.useState(!1), j = (0, A.useLastChannelMessage)(s), B = () => {
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
    null != j && (v(!0), await (0, T.submitReportForInappropriateConversationSafetyAlert)(j, () => {
      (0, u.showToast)((0, u.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST, u.ToastType.SUCCESS)), p()
    }, () => {
      (0, u.showToast)((0, u.createToast)(C.default.Messages.INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST, u.ToastType.FAILURE))
    }), v(!1), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_REPORT))
  };
  return (0, n.jsx)(_.default, {
    heroImageSrc: f,
    heroImageAlt: C.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
    header: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
    description: C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
    children: (0, n.jsxs)("div", {
      className: S.buttonContainer,
      children: [(0, n.jsxs)(u.Button, {
        color: u.Button.Colors.BRAND_NEW,
        size: u.Button.Sizes.LARGE,
        className: S.button,
        innerClassName: S.buttonInner,
        onClick: () => {
          M ? D() : B()
        },
        children: [(0, n.jsx)(o.CircleXIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: S.buttonIcon
        }), M ? C.default.Messages.UNBLOCK : C.default.Messages.BLOCK]
      }), (0, n.jsxs)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.LARGE,
        className: S.button,
        innerClassName: S.buttonInner,
        onClick: y,
        submitting: x,
        disabled: P,
        children: [(0, n.jsx)(i.FlagIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: S.buttonIcon
        }), P ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED : C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT]
      }), (0, n.jsxs)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.LARGE,
        className: S.button,
        innerClassName: S.buttonInner,
        onClick: () => {
          L ? ((0, E.default)(R.CRISIS_TEXT_LINE_URL), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_CTL)) : ((0, E.default)(R.NOFILTR_URL), h(I.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR))
        },
        children: [(0, n.jsx)(r.ChatIcon, {
          height: 20,
          width: 20,
          color: u.tokens.colors.WHITE,
          className: S.buttonIcon
        }), L ? C.default.Messages.INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL : C.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE]
      })]
    })
  })
}