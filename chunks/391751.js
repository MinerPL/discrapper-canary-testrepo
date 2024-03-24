"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("551042"),
  r = n("77078"),
  u = n("277734"),
  o = n("774298"),
  d = n("408815"),
  c = n("13355"),
  f = n("217736"),
  h = n("778588"),
  m = n("561359"),
  p = n("664336"),
  E = n("324252"),
  g = n("782340"),
  S = n("209515"),
  C = l.memo(function(e) {
    let {
      channel: t
    } = e, C = (0, o.useInappropriateConversationSafetyToolsWarningForChannel)(t.id), _ = (0, d.useShouldShowInitialSafetyToolsButtonTooltip)(t.id), I = (0, c.useSafetyToolsButtonTooltipForChannel)(t.id), T = (0, i.useHasAnyModalOpen)(), v = (0, s.useStateFromStores)([h.default], () => h.default.hasLayers()), x = l.useCallback(() => _ ? g.default.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP : null != I ? g.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP : null, [_, I]), N = l.useMemo(() => (_ || null != I) && !T && !v, [_, I, T, v]), [A, M] = l.useState(x());
    l.useEffect(() => {
      null != I && null != C && (r.AccessibilityAnnouncer.announce(g.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
        (0, u.dismissChannelSafetyWarnings)(t.id, [I.id])
      }, 5e3), (0, f.trackNamedViewEvent)({
        channelId: t.id,
        senderId: t.getRecipientId(),
        warningId: I.id,
        warningType: I.type,
        isNudgeWarning: null != I,
        viewName: f.ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP
      })), _ && (r.AccessibilityAnnouncer.announce(g.default.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
        (0, u.acknowledgeChannelSafetyWarningTooltip)(t.id)
      }, 5e3))
    }, [t, I, C, _]), l.useEffect(() => {
      null != C && (0, f.trackNamedViewEvent)({
        channelId: t.id,
        senderId: t.getRecipientId(),
        warningId: C.id,
        warningType: C.type,
        isNudgeWarning: null != I,
        viewName: f.ViewNameTypes.SAFETY_TOOLS_BUTTON
      })
    }, []), l.useEffect(() => {
      let e = x();
      null != e && M(e)
    }, [_, I, x]);
    let R = l.useCallback(() => {
      null != I && (0, u.dismissChannelSafetyWarnings)(t.id, [I.id]), null != C && ((0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return n => {
          let {
            onClose: l,
            transitionState: s
          } = n;
          return (0, a.jsx)(e, {
            otherUserId: t.getRecipientId(),
            channelId: t.id,
            warningId: C.id,
            warningType: C.type,
            onClose: l,
            transitionState: s
          })
        }
      }, {
        modalKey: E.SAFETY_TOOLS_MODAL_KEY
      }), (0, f.trackCtaEvent)({
        channelId: t.id,
        senderId: t.getRecipientId(),
        warningId: C.id,
        warningType: C.type,
        cta: f.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK,
        isNudgeWarning: null != I
      }))
    }, [I, C, t]);
    return null == C ? null : (0, a.jsx)(r.Tooltip, {
      forceOpen: N,
      text: A,
      color: r.TooltipColors.BRAND,
      position: "bottom",
      tooltipClassName: S.tooltip,
      tooltipContentClassName: S.tooltipContent,
      children: () => (0, a.jsx)(p.default.Icon, {
        icon: m.default,
        onClick: R,
        tooltip: g.default.Messages.SAFETY_TOOLS_BUTTON_LABEL,
        tooltipDisabled: null != I
      })
    })
  })