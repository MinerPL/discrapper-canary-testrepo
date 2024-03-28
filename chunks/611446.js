"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return a
  }
}), s("47120");
var a, l, T = s("735250"),
  n = s("470079"),
  o = s("481060"),
  r = s("367408"),
  S = s("473092"),
  _ = s("419672"),
  i = s("858597"),
  E = s("486213"),
  u = s("689938"),
  d = s("393572");
(l = a || (a = {})).ACTIONS = "ACTIONS", l.SAFETY_TIPS = "SAFETY_TIPS", l.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
t.default = e => {
  let {
    onClose: t,
    channelId: s,
    warningId: a,
    warningType: l,
    otherUserId: O,
    transitionState: c
  } = e, A = null != (0, r.useSafetyToolsButtonTooltipForChannel)(s), [C, I] = n.useState("ACTIONS"), L = n.useCallback(e => {
    (0, S.trackCtaEvent)({
      channelId: s,
      warningId: a,
      warningType: l,
      senderId: O,
      cta: e,
      isNudgeWarning: A
    })
  }, [s, a, l, O, A]), f = n.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, T.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.MIN,
      onClick: s,
      color: o.Button.Colors.CUSTOM,
      className: d.footerLink,
      children: t
    })
  }, []), N = n.useCallback(() => {
    switch (C) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, T.jsx)(f, {
          text: u.default.Messages.BACK,
          onClick: () => I("ACTIONS")
        });
      default:
        return null
    }
  }, [C, f]), R = n.useCallback(() => {
    switch (C) {
      case "SAFETY_TIPS":
        return u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [C]), F = n.useCallback(e => {
    I(e)
  }, [I]);
  return (0, T.jsxs)(o.ModalRoot, {
    transitionState: c,
    "aria-label": u.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: o.ModalSize.SMALL,
    children: [(0, T.jsx)(o.ModalHeader, {
      separator: !1,
      className: d.modalHeader,
      children: (0, T.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        children: R()
      })
    }), (0, T.jsx)(o.Scroller, {
      children: (0, T.jsxs)(o.Slides, {
        activeSlide: C,
        width: 440,
        children: [(0, T.jsx)(o.Slide, {
          id: "ACTIONS",
          children: (0, T.jsx)(i.default, {
            otherUserId: O,
            channelId: s,
            warningId: a,
            warningType: l,
            transitionToSlide: F
          })
        }), (0, T.jsx)(o.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, T.jsx)(_.default, {
            channelId: s,
            onClose: () => {
              t(), L(S.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, T.jsx)(o.Slide, {
          id: "SAFETY_TIPS",
          children: (0, T.jsx)(E.default, {})
        })]
      })
    }), (0, T.jsxs)(o.ModalFooter, {
      className: d.modalFooter,
      children: [(0, T.jsx)(f, {
        text: u.default.Messages.CLOSE,
        onClick: () => {
          t(), L(S.CtaEventTypes.USER_SAFETY_TOOLS_DISMISS)
        }
      }), N()]
    })]
  })
}