"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("286379"),
  i = n("481060"),
  r = n("797614"),
  o = n("359110"),
  u = n("6025"),
  d = n("433355"),
  c = n("26373"),
  f = n("486622"),
  E = n("376191"),
  h = n("86203"),
  _ = n("689938"),
  C = n("564297");

function S(e) {
  let {
    active: t,
    user: n,
    channel: S
  } = e, m = (0, c.useListHasSingleSpamMessageRequest)(), p = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(_.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE)), r.default.increment({
      name: l.MetricEvents.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), I = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), T = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), m && (0, o.transitionToChannel)(S.id)
  }, [S.id, m]), {
    acceptMessageRequest: g,
    isAcceptLoading: A,
    isUserProfileLoading: N,
    isOptimisticAccepted: v
  } = (0, f.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: T,
    onRejectSuccess: I,
    onError: p
  }), R = A || N, L = R || v;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsx)(E.default, {
      otherUser: n,
      channel: S,
      active: t
    }), (0, a.jsxs)("div", {
      className: C.actions,
      children: [(0, a.jsx)(i.Button, {
        className: C.button,
        color: i.ButtonColors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        onClick: e => {
          g(S.id), e.stopPropagation()
        },
        disabled: L,
        submitting: R,
        children: _.default.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, a.jsx)(h.default, {
        className: C.button,
        channel: S,
        buttonSize: i.Button.Sizes.SMALL
      })]
    })]
  })
}