"use strict";
n.r(t), n.d(t, {
  StrangerDangerWarningBanner: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("286379"),
  i = n("481060"),
  r = n("194359"),
  o = n("797614"),
  u = n("378298"),
  d = n("359119"),
  c = n("473092"),
  f = n("177342"),
  h = n("134612"),
  m = n("981631"),
  p = n("689938");

function E(e) {
  let {
    channelId: t,
    warningId: E,
    senderId: C
  } = e, g = l.useCallback(() => {
    (0, u.dismissChannelSafetyWarnings)(t, [E])
  }, [t, E]), S = l.useCallback(e => () => {
    r.default.addRelationship({
      userId: C,
      context: {
        location: h.LOCATION_CONTEXT_WEB
      },
      type: m.RelationshipTypes.BLOCKED
    }), g(), (0, i.showToast)((0, i.createToast)(p.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, i.ToastType.SUCCESS)), (0, c.trackCtaEvent)({
      channelId: t,
      warningId: E,
      senderId: C,
      warningType: d.SafetyWarningTypes.STRANGER_DANGER,
      cta: e
    })
  }, [g, t, E, C]);
  l.useEffect(() => {
    (0, c.trackViewedEvent)(m.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: E,
      senderId: C,
      warningType: d.SafetyWarningTypes.STRANGER_DANGER
    }), o.default.increment({
      name: s.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, E, C]);
  let _ = () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("48092")]).then(n.bind(n, "816960"));
        return n => {
          let {
            transitionState: l,
            onClose: s
          } = n;
          return (0, a.jsx)(e, {
            transitionState: l,
            onClose: s,
            channelId: t,
            warningId: E,
            senderId: C,
            handleBlock: () => {
              T(c.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, c.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, _)
            }
          })
        }
      })
    },
    T = (e, l, s) => {
      (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await n.e("68747").then(n.bind(n, "744373"));
        return n => (0, a.jsx)(i, {
          ...n,
          userId: C,
          confirmBlock: S(e),
          onCancel: () => {
            null == s || s(), (0, c.trackCtaEvent)({
              channelId: t,
              warningId: E,
              senderId: C,
              warningType: d.SafetyWarningTypes.STRANGER_DANGER,
              cta: l
            })
          }
        })
      })
    };
  return (0, a.jsx)(f.SafetyWarningBanner, {
    channelId: t,
    warningId: E,
    senderId: C,
    warningType: d.SafetyWarningTypes.STRANGER_DANGER,
    header: p.default.Messages.STRANGER_DANGER_BANNER_HEADER,
    description: p.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
    onDismiss: g,
    buttons: [{
      text: p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
      color: i.Button.Colors.BRAND,
      onclick: () => {
        _(), (0, c.trackCtaEvent)({
          channelId: t,
          warningId: E,
          senderId: C,
          warningType: d.SafetyWarningTypes.STRANGER_DANGER,
          cta: c.CtaEventTypes.OPEN_MORE_TIPS
        })
      }
    }, {
      text: p.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
      color: i.Button.Colors.RED,
      onclick: () => T(c.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, c.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
    }]
  })
}