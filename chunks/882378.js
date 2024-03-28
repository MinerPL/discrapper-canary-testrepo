"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("952265"),
  r = n("481060"),
  o = n("378298"),
  u = n("444957"),
  d = n("276618"),
  c = n("367408"),
  f = n("473092"),
  h = n("819640"),
  m = n("288176"),
  p = n("502568"),
  E = n("134612"),
  C = n("689938"),
  g = n("808970");
t.default = l.memo(function(e) {
  let {
    channel: t
  } = e, S = (0, u.useInappropriateConversationSafetyToolsWarningForChannel)(t.id), _ = (0, d.useShouldShowInitialSafetyToolsButtonTooltip)(t.id), T = (0, c.useSafetyToolsButtonTooltipForChannel)(t.id), I = (0, i.useHasAnyModalOpen)(), A = (0, s.useStateFromStores)([h.default], () => h.default.hasLayers()), v = l.useCallback(() => _ ? C.default.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP : null != T ? C.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP : null, [_, T]), N = l.useMemo(() => (_ || null != T) && !I && !A, [_, T, I, A]), [x, M] = l.useState(v());
  l.useEffect(() => {
    null != T && null != S && (r.AccessibilityAnnouncer.announce(C.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
      (0, o.dismissChannelSafetyWarnings)(t.id, [T.id])
    }, 5e3), (0, f.trackNamedViewEvent)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: T.id,
      warningType: T.type,
      isNudgeWarning: null != T,
      viewName: f.ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), _ && (r.AccessibilityAnnouncer.announce(C.default.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
      (0, o.acknowledgeChannelSafetyWarningTooltip)(t.id)
    }, 5e3))
  }, [t, T, S, _]), l.useEffect(() => {
    null != S && (0, f.trackNamedViewEvent)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: S.id,
      warningType: S.type,
      isNudgeWarning: null != T,
      viewName: f.ViewNameTypes.SAFETY_TOOLS_BUTTON
    })
  }, []), l.useEffect(() => {
    let e = v();
    null != e && M(e)
  }, [_, T, v]);
  let R = l.useCallback(() => {
    null != T && (0, o.dismissChannelSafetyWarnings)(t.id, [T.id]), null != S && ((0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("49508"), n.e("9738")]).then(n.bind(n, "611446"));
      return n => {
        let {
          onClose: l,
          transitionState: s
        } = n;
        return (0, a.jsx)(e, {
          otherUserId: t.getRecipientId(),
          channelId: t.id,
          warningId: S.id,
          warningType: S.type,
          onClose: l,
          transitionState: s
        })
      }
    }, {
      modalKey: E.SAFETY_TOOLS_MODAL_KEY
    }), (0, f.trackCtaEvent)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: S.id,
      warningType: S.type,
      cta: f.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != T
    }))
  }, [T, S, t]);
  return null == S ? null : (0, a.jsx)(r.Tooltip, {
    forceOpen: N,
    text: x,
    color: r.TooltipColors.BRAND,
    position: "bottom",
    tooltipClassName: g.tooltip,
    tooltipContentClassName: g.tooltipContent,
    children: () => (0, a.jsx)(p.default.Icon, {
      icon: m.default,
      onClick: R,
      tooltip: C.default.Messages.SAFETY_TOOLS_BUTTON_LABEL,
      tooltipDisabled: null != T
    })
  })
})