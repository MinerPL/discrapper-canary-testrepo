"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  }
}), s("47120");
var n, a, r = s("735250"),
  o = s("470079"),
  i = s("481060"),
  u = s("378298"),
  l = s("473092"),
  c = s("684471"),
  E = s("745982"),
  T = s("463439"),
  d = s("689938"),
  N = s("67749");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
t.default = e => {
  let {
    warningId: t,
    warningType: s,
    senderId: n,
    modalProps: a,
    channelId: I
  } = e, [A, _] = o.useState(0), R = o.useMemo(() => ({
    channelId: I,
    senderId: n,
    warningId: t,
    warningType: s,
    isNudgeWarning: !1
  }), [I, n, t, s]);
  o.useEffect(() => {
    (0, l.trackNamedViewEvent)({
      ...R,
      viewName: l.ViewNameTypes.SAFETY_TAKEOVER_MODAL
    })
  }, [R]);
  let O = o.useCallback(e => {
      (0, l.trackCtaEvent)({
        ...R,
        cta: e
      })
    }, [R]),
    [C, S] = o.useState(!1);

  function f(e) {
    _(e)
  }
  return (0, r.jsxs)(i.ModalRoot, {
    transitionState: a.transitionState,
    children: [(0, r.jsx)("div", {
      className: N.container,
      children: (0, r.jsxs)(i.Slides, {
        width: 440,
        activeSlide: A,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, r.jsx)(i.Slide, {
          id: 0,
          children: (0, r.jsx)(c.default, {
            warningId: t,
            senderId: n,
            trackAnalyticsEvent: O,
            onNavigate: f
          })
        }), (0, r.jsx)(i.Slide, {
          id: 1,
          children: (0, r.jsx)(E.default, {
            warningId: t,
            senderId: n,
            trackAnalyticsEvent: O
          })
        }), (0, r.jsx)(i.Slide, {
          id: 2,
          children: (0, r.jsx)(T.default, {
            warningId: t,
            senderId: n,
            trackAnalyticsEvent: O,
            channelId: I,
            hasReported: C,
            onReport: function() {
              S(!0)
            }
          })
        })]
      })
    }), (0, r.jsxs)(i.ModalFooter, {
      className: N.footer,
      children: [(0, r.jsx)(i.Button, {
        className: N.footerButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.CUSTOM,
        size: i.Button.Sizes.MIN,
        onClick: function() {
          a.onClose(), (0, u.dismissChannelSafetyWarnings)(I, [t]), O(l.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS)
        },
        children: d.default.Messages.CLOSE
      }), 0 !== A && (0, r.jsx)(i.Button, {
        className: N.footerButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.CUSTOM,
        size: i.Button.Sizes.MIN,
        onClick: () => f(0),
        children: d.default.Messages.BACK
      })]
    })]
  })
}