"use strict";
n.r(t), n.d(t, {
  StrangerDangerWarningBanner: function() {
    return m
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("736964"),
  o = n("155084"),
  u = n("277734"),
  d = n("764828"),
  c = n("217736"),
  f = n("133829"),
  h = n("324252"),
  C = n("49111"),
  p = n("782340");

function m(e) {
  let {
    channelId: t,
    warningId: m,
    senderId: E
  } = e, g = a.useCallback(() => {
    (0, u.dismissChannelSafetyWarnings)(t, [m])
  }, [t, m]), S = a.useCallback(e => () => {
    r.default.addRelationship({
      userId: E,
      context: {
        location: h.LOCATION_CONTEXT_WEB
      },
      type: C.RelationshipTypes.BLOCKED
    }), g(), (0, i.showToast)((0, i.createToast)(p.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, i.ToastType.SUCCESS)), (0, c.trackCtaEvent)({
      channelId: t,
      warningId: m,
      senderId: E,
      warningType: d.SafetyWarningTypes.STRANGER_DANGER,
      cta: e
    })
  }, [g, t, m, E]);
  a.useEffect(() => {
    (0, c.trackViewedEvent)(C.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: m,
      senderId: E,
      warningType: d.SafetyWarningTypes.STRANGER_DANGER
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, m, E]);
  let T = () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("664639").then(n.bind(n, "664639"));
        return n => {
          let {
            transitionState: a,
            onClose: l
          } = n;
          return (0, s.jsx)(e, {
            transitionState: a,
            onClose: l,
            channelId: t,
            warningId: m,
            senderId: E,
            handleBlock: () => {
              A(c.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, c.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, T)
            }
          })
        }
      })
    },
    A = (e, a, l) => {
      (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await n.el("968710").then(n.bind(n, "968710"));
        return n => (0, s.jsx)(i, {
          ...n,
          userId: E,
          confirmBlock: S(e),
          onCancel: () => {
            null == l || l(), (0, c.trackCtaEvent)({
              channelId: t,
              warningId: m,
              senderId: E,
              warningType: d.SafetyWarningTypes.STRANGER_DANGER,
              cta: a
            })
          }
        })
      })
    };
  return (0, s.jsx)(f.SafetyWarningBanner, {
    channelId: t,
    warningId: m,
    senderId: E,
    warningType: d.SafetyWarningTypes.STRANGER_DANGER,
    header: p.default.Messages.STRANGER_DANGER_BANNER_HEADER,
    description: p.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
    onDismiss: g,
    buttons: [{
      text: p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
      color: i.Button.Colors.BRAND,
      onclick: () => {
        T(), (0, c.trackCtaEvent)({
          channelId: t,
          warningId: m,
          senderId: E,
          warningType: d.SafetyWarningTypes.STRANGER_DANGER,
          cta: c.CtaEventTypes.OPEN_MORE_TIPS
        })
      }
    }, {
      text: p.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
      color: i.Button.Colors.RED,
      onclick: () => A(c.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, c.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
    }]
  })
}