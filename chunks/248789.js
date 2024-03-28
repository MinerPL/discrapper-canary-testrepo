"use strict";
n.r(t), n.d(t, {
  InappropriateConversationWarningBanner: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("286379"),
  i = n("442837"),
  r = n("481060"),
  o = n("797614"),
  u = n("699516"),
  d = n("378298"),
  c = n("359119"),
  f = n("473092"),
  h = n("177342"),
  m = n("134612"),
  p = n("689938");

function E(e) {
  let {
    channelId: t,
    warningId: E,
    senderId: C
  } = e, g = l.useCallback(() => {
    (0, d.dismissChannelSafetyWarnings)(t, [E])
  }, [t, E]), S = (0, i.useStateFromStores)([u.default], () => u.default.isBlocked(C)), _ = l.useMemo(() => ({
    channelId: t,
    warningId: E,
    senderId: C,
    warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, E, C]);
  l.useEffect(() => {
    (0, f.trackNamedViewEvent)({
      ..._,
      viewName: f.ViewNameTypes.SAFETY_WARNING_BANNER
    }), o.default.increment({
      name: s.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [_]);
  let T = l.useCallback(e => {
      (0, f.trackCtaEvent)({
        ..._,
        cta: e
      })
    }, [_]),
    I = l.useCallback(() => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("49508"), n.e("9738")]).then(n.bind(n, "611446"));
        return n => {
          let {
            transitionState: l,
            onClose: s
          } = n;
          return (0, a.jsx)(e, {
            otherUserId: C,
            channelId: t,
            warningId: E,
            warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: l,
            onClose: s
          })
        }
      }, {
        modalKey: m.SAFETY_TOOLS_MODAL_KEY
      }), T(f.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, C, E, T]),
    A = l.useCallback(() => {
      g(), T(f.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM)
    }, [g, T]),
    v = l.useCallback(() => {
      g(), T(f.CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [g, T]),
    N = l.useCallback(() => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("19538")]).then(n.bind(n, "699783"));
        return n => {
          let {
            transitionState: l,
            onClose: s
          } = n;
          return (0, a.jsx)(e, {
            transitionState: l,
            onBlock: A,
            onBlockAndReport: v,
            onCancel: () => {
              null == s || s(), T(f.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: s,
            userId: C,
            channelId: t
          })
        }
      })
    }, [A, v, C, t, T]);
  return (0, a.jsx)(h.SafetyWarningBanner, {
    channelId: t,
    warningId: E,
    senderId: C,
    warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: g,
    buttons: [{
      text: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
      color: r.Button.Colors.BRAND,
      onclick: I
    }, ...S ? [] : [{
      text: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
      color: r.Button.Colors.PRIMARY,
      onclick: N
    }]]
  })
}