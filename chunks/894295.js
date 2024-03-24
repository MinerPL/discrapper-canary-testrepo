"use strict";
n.r(t), n.d(t, {
  InappropriateConversationWarningBanner: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("432710"),
  i = n("446674"),
  r = n("77078"),
  o = n("155084"),
  u = n("27618"),
  d = n("277734"),
  c = n("764828"),
  f = n("217736"),
  h = n("133829"),
  C = n("324252"),
  p = n("782340");

function m(e) {
  let {
    channelId: t,
    warningId: m,
    senderId: E
  } = e, g = a.useCallback(() => {
    (0, d.dismissChannelSafetyWarnings)(t, [m])
  }, [t, m]), S = (0, i.useStateFromStores)([u.default], () => u.default.isBlocked(E)), T = a.useMemo(() => ({
    channelId: t,
    warningId: m,
    senderId: E,
    warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, m, E]);
  a.useEffect(() => {
    (0, f.trackNamedViewEvent)({
      ...T,
      viewName: f.ViewNameTypes.SAFETY_WARNING_BANNER
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [T]);
  let A = a.useCallback(e => {
      (0, f.trackCtaEvent)({
        ...T,
        cta: e
      })
    }, [T]),
    _ = a.useCallback(() => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return n => {
          let {
            transitionState: a,
            onClose: l
          } = n;
          return (0, s.jsx)(e, {
            otherUserId: E,
            channelId: t,
            warningId: m,
            warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: a,
            onClose: l
          })
        }
      }, {
        modalKey: C.SAFETY_TOOLS_MODAL_KEY
      }), A(f.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, E, m, A]),
    M = a.useCallback(() => {
      g(), A(f.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM)
    }, [g, A]),
    I = a.useCallback(() => {
      g(), A(f.CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [g, A]),
    N = a.useCallback(() => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("811578").then(n.bind(n, "811578"));
        return n => {
          let {
            transitionState: a,
            onClose: l
          } = n;
          return (0, s.jsx)(e, {
            transitionState: a,
            onBlock: M,
            onBlockAndReport: I,
            onCancel: () => {
              null == l || l(), A(f.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: l,
            userId: E,
            channelId: t
          })
        }
      })
    }, [M, I, E, t, A]);
  return (0, s.jsx)(h.SafetyWarningBanner, {
    channelId: t,
    warningId: m,
    senderId: E,
    warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: g,
    buttons: [{
      text: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
      color: r.Button.Colors.BRAND,
      onclick: _
    }, ...S ? [] : [{
      text: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
      color: r.Button.Colors.PRIMARY,
      onclick: N
    }]]
  })
}