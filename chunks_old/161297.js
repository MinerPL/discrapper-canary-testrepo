"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return n
  },
  default: function() {
    return c
  }
}), s("222007");
var n, a, l = s("37983"),
  r = s("884691"),
  o = s("77078"),
  i = s("13355"),
  T = s("217736"),
  u = s("903303"),
  S = s("96928"),
  _ = s("926945"),
  d = s("782340"),
  E = s("650766");
(a = n || (n = {})).ACTIONS = "ACTIONS", a.SAFETY_TIPS = "SAFETY_TIPS", a.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
var c = e => {
  let {
    onClose: t,
    channelId: s,
    warningId: n,
    warningType: a,
    otherUserId: c,
    transitionState: O
  } = e, A = null != (0, i.useSafetyToolsButtonTooltipForChannel)(s), [f, I] = r.useState("ACTIONS"), C = r.useCallback(e => {
    (0, T.trackCtaEvent)({
      channelId: s,
      warningId: n,
      warningType: a,
      senderId: c,
      cta: e,
      isNudgeWarning: A
    })
  }, [s, n, a, c, A]), L = r.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, l.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.MIN,
      onClick: s,
      color: o.Button.Colors.CUSTOM,
      className: E.footerLink,
      children: t
    })
  }, []), p = r.useCallback(() => {
    switch (f) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, l.jsx)(L, {
          text: d.default.Messages.BACK,
          onClick: () => I("ACTIONS")
        });
      default:
        return null
    }
  }, [f, L]), R = r.useCallback(() => {
    switch (f) {
      case "SAFETY_TIPS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [f]), N = r.useCallback(e => {
    I(e)
  }, [I]);
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: O,
    "aria-label": d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: o.ModalSize.SMALL,
    children: [(0, l.jsx)(o.ModalHeader, {
      separator: !1,
      className: E.modalHeader,
      children: (0, l.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        children: R()
      })
    }), (0, l.jsx)(o.Scroller, {
      children: (0, l.jsxs)(o.Slides, {
        activeSlide: f,
        width: 440,
        children: [(0, l.jsx)(o.Slide, {
          id: "ACTIONS",
          children: (0, l.jsx)(S.default, {
            otherUserId: c,
            channelId: s,
            warningId: n,
            warningType: a,
            transitionToSlide: N
          })
        }), (0, l.jsx)(o.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, l.jsx)(u.default, {
            channelId: s,
            onClose: () => {
              t(), C(T.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, l.jsx)(o.Slide, {
          id: "SAFETY_TIPS",
          children: (0, l.jsx)(_.default, {})
        })]
      })
    }), (0, l.jsxs)(o.ModalFooter, {
      className: E.modalFooter,
      children: [(0, l.jsx)(L, {
        text: d.default.Messages.CLOSE,
        onClick: () => {
          t(), C(T.CtaEventTypes.USER_SAFETY_TOOLS_DISMISS)
        }
      }), p()]
    })]
  })
}