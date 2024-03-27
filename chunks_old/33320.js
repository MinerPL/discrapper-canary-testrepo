"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  },
  default: function() {
    return I
  }
}), s("222007");
var n, a, r = s("37983"),
  o = s("884691"),
  i = s("77078"),
  u = s("277734"),
  l = s("217736"),
  c = s("271201"),
  E = s("330460"),
  T = s("763332"),
  d = s("782340"),
  N = s("417365");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
var I = e => {
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
    [C, f] = o.useState(!1);

  function S(e) {
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
            onNavigate: S
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
              f(!0)
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
        onClick: () => S(0),
        children: d.default.Messages.BACK
      })]
    })]
  })
}