"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("155084"),
  o = n("144491"),
  u = n("208021"),
  d = n("982108"),
  c = n("803524"),
  f = n("7643"),
  E = n("98708"),
  h = n("28424"),
  _ = n("782340"),
  C = n("348173");

function S(e) {
  let {
    active: t,
    user: n,
    channel: S
  } = e, I = (0, c.useListHasSingleSpamMessageRequest)(), m = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(_.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE)), r.default.increment({
      name: l.MetricEvents.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), p = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), T = s.useCallback(() => {
    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), I && (0, o.transitionToChannel)(S.id)
  }, [S.id, I]), {
    acceptMessageRequest: g,
    isAcceptLoading: A,
    isUserProfileLoading: N,
    isOptimisticAccepted: R
  } = (0, f.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: T,
    onRejectSuccess: p,
    onError: m
  }), O = A || N, v = O || R;
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
        disabled: v,
        submitting: O,
        children: _.default.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }), (0, a.jsx)(h.default, {
        className: C.button,
        channel: S,
        buttonSize: i.Button.Sizes.SMALL
      })]
    })]
  })
}