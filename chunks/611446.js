"use strict";
s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
    return a
  }
}), s("47120");
var a, l, T = s("735250"),
  n = s("470079"),
  o = s("481060"),
  r = s("285952"),
  S = s("367408"),
  _ = s("473092"),
  i = s("419672"),
  E = s("858597"),
  u = s("486213"),
  d = s("689938"),
  O = s("73439");
(l = a || (a = {})).ACTIONS = "ACTIONS", l.SAFETY_TIPS = "SAFETY_TIPS", l.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS";
t.default = e => {
  let {
    onClose: t,
    channelId: s,
    warningId: a,
    warningType: l,
    otherUserId: c,
    transitionState: A
  } = e, C = null != (0, S.useSafetyToolsButtonTooltipForChannel)(s), [I, L] = n.useState("ACTIONS"), f = n.useCallback(e => {
    (0, _.trackCtaEvent)({
      channelId: s,
      warningId: a,
      warningType: l,
      senderId: c,
      cta: e,
      isNudgeWarning: C
    })
  }, [s, a, l, c, C]), R = n.useCallback(e => {
    let {
      text: t,
      onClick: s
    } = e;
    return (0, T.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      size: o.Button.Sizes.MIN,
      onClick: s,
      color: o.Button.Colors.CUSTOM,
      className: O.footerLink,
      children: t
    })
  }, []), N = n.useCallback(() => {
    switch (I) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, T.jsx)(R, {
          text: d.default.Messages.BACK,
          onClick: () => L("ACTIONS")
        });
      default:
        return null
    }
  }, [I, R]), F = n.useCallback(() => {
    switch (I) {
      case "SAFETY_TIPS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
      case "ABOUT_SAFETY_ALERTS":
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
      default:
        return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER
    }
  }, [I]), x = n.useCallback(e => {
    L(e)
  }, [L]);
  return (0, T.jsxs)(o.ModalRoot, {
    transitionState: A,
    "aria-label": d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
    size: o.ModalSize.SMALL,
    children: [(0, T.jsx)(o.ModalHeader, {
      separator: !1,
      className: O.modalHeader,
      justify: r.default.Justify.CENTER,
      children: (0, T.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        children: F()
      })
    }), (0, T.jsx)(o.Scroller, {
      children: (0, T.jsxs)(o.Slides, {
        activeSlide: I,
        width: 440,
        children: [(0, T.jsx)(o.Slide, {
          id: "ACTIONS",
          children: (0, T.jsx)(E.default, {
            otherUserId: c,
            channelId: s,
            warningId: a,
            warningType: l,
            transitionToSlide: x
          })
        }), (0, T.jsx)(o.Slide, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, T.jsx)(i.default, {
            channelId: s,
            onClose: () => {
              t(), f(_.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, T.jsx)(o.Slide, {
          id: "SAFETY_TIPS",
          children: (0, T.jsx)(u.default, {})
        })]
      })
    }), (0, T.jsxs)(o.ModalFooter, {
      justify: r.default.Justify.BETWEEN,
      children: [(0, T.jsx)(R, {
        text: d.default.Messages.CLOSE,
        onClick: () => {
          t(), f(_.CtaEventTypes.USER_SAFETY_TOOLS_DISMISS)
        }
      }), N()]
    })]
  })
}