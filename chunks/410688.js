"use strict";
n.r(t), n.d(t, {
  PendingMessageRequestRowItem: function() {
    return h
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("77078"),
  i = n("144491"),
  r = n("208021"),
  o = n("982108"),
  u = n("803524"),
  d = n("7643"),
  c = n("98708"),
  f = n("782340"),
  E = n("773220");

function h(e) {
  let {
    active: t,
    user: n,
    channel: h
  } = e, _ = (0, u.useListHasSingleMessageRequest)(), C = s.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(f.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, l.ToastType.FAILURE))
  }, []), S = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
  }, []), I = s.useCallback(() => {
    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID), _ && (0, i.transitionToChannel)(h.id)
  }, [h.id, _]), {
    acceptMessageRequest: m,
    rejectMessageRequest: p,
    isAcceptLoading: T,
    isRejectLoading: g,
    isUserProfileLoading: A,
    isOptimisticAccepted: N,
    isOptimisticRejected: R
  } = (0, d.useMessageRequestActions)({
    user: n,
    onAcceptSuccess: I,
    onRejectSuccess: S,
    onError: C
  }), O = T || g || A || N || R;
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(c.default, {
      channel: h,
      otherUser: n,
      active: t
    }), (0, a.jsxs)("div", {
      className: E.actions,
      children: [(0, a.jsx)(l.Button, {
        className: E.button,
        color: l.ButtonColors.PRIMARY,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), p(h.id)
        },
        disabled: O,
        submitting: g || R,
        children: f.default.Messages.MESSAGE_REQUEST_IGNORE
      }), (0, a.jsx)(l.Button, {
        className: E.button,
        color: l.ButtonColors.BRAND,
        size: l.Button.Sizes.SMALL,
        onClick: e => {
          e.stopPropagation(), m(h.id)
        },
        disabled: O,
        submitting: T || A || N,
        children: f.default.Messages.MESSAGE_REQUEST_ACCEPT
      })]
    })]
  })
}