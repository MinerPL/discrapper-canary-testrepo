"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("278074"),
  o = n("263568"),
  u = n("481060"),
  d = n("203143"),
  c = n("365206"),
  f = n("294608"),
  E = n("65145"),
  _ = n("920557"),
  m = n("547467");

function T(e) {
  let {
    media: t
  } = e;
  return (0, s.jsx)(u.Heading, {
    variant: "text-md/medium",
    className: m.question,
    scaleFontToUserSetting: !0,
    children: t.text
  })
}

function I(e) {
  let {
    children: t,
    onClick: n,
    variant: a = "text-sm/medium",
    color: l = "interactive-active",
    className: r,
    buttonRef: o
  } = e;
  return (0, s.jsx)(u.Button, {
    onClick: n,
    className: i()(m.__invalid_textButton, r),
    look: u.Button.Looks.BLANK,
    size: u.Button.Sizes.NONE,
    buttonRef: o,
    children: (0, s.jsx)(u.Text, {
      variant: a,
      color: l,
      scaleFontToUserSetting: !0,
      children: t
    })
  })
}

function p(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: a,
    isInteractive: l,
    className: r
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(m.detailsText, r),
    children: [l ? (0, s.jsx)(I, {
      onClick: a,
      variant: "text-sm/normal",
      color: "none",
      className: i()(m.detailsTextButton, m.interactive),
      children: t
    }) : (0, s.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: t
    }), null != n && (0, s.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: n
    })]
  })
}

function h(e) {
  let {
    action: t,
    channelId: n,
    messageId: l,
    isInteractive: r,
    className: o
  } = e, {
    actionButtonRef: c,
    manageFocusOnAction: f
  } = (0, E.usePollFocusManager)(), _ = a.useCallback(async () => {
    (null == t ? void 0 : t.type) != null && (await d.default.handlePollActionTapped({
      channelId: n,
      messageId: l,
      type: t.type
    }), f(t.type))
  }, [null == t ? void 0 : t.type, n, l, f]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, s.jsx)(u.Button, {
    buttonRef: c,
    onClick: _,
    disabled: !t.enabled,
    color: "secondaryButton" === t.presentation ? u.Button.Colors.CUSTOM : u.Button.Colors.BRAND,
    size: u.Button.Sizes.SMALL,
    className: i()(o, m.buttonPresentation, "secondaryButton" === t.presentation && m.secondaryButtonPresentation),
    children: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "none",
      scaleFontToUserSetting: !0,
      children: t.label
    })
  }, t.presentation) : "textButton" === t.presentation ? (0, s.jsx)(I, {
    buttonRef: c,
    onClick: _,
    className: o,
    children: t.label
  }) : (0, s.jsx)(p, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: _,
    isInteractive: r,
    className: o
  })
}

function N(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e, l = (0, f.useStyleClass)(n.containerStyle), d = function(e, t) {
    let n = {
      answers: t.answers,
      answersInteraction: t.answersInteraction,
      answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
      isExpired: t.isExpired,
      canTapAnswers: t.canTapAnswers,
      hasSelectedAnyAnswer: t.hasSelectedAnswer,
      myAvatarUrl: t.myAvatarUrl,
      canShowVoteCounts: t.canShowVoteCounts
    };
    return (0, r.match)(t.layoutType).with(o.PollLayoutTypes.DEFAULT, () => (0, s.jsx)(_.TextAndImageAnswers, {
      ...n
    })).with(o.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(c.default, {
      ...n
    })).otherwise(() => null)
  }(0, n);
  return null == d ? null : (0, s.jsx)("div", {
    className: i()(m.container, l, a),
    children: (0, s.jsxs)(u.HeadingLevel, {
      children: [(0, s.jsxs)("div", {
        className: m.header,
        children: [(0, s.jsx)(T, {
          media: n.question
        }), null != n.promptLabel && (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: m.prompt,
          scaleFontToUserSetting: !0,
          children: n.promptLabel
        })]
      }), d, (0, s.jsxs)("div", {
        className: m.bottomBar,
        children: [(0, s.jsx)(h, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: m.secondaryAction,
          isInteractive: n.isInteractive
        }), (0, s.jsx)(h, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: m.tertiaryAction
        }), (0, s.jsx)(h, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function S(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e;
  return (0, s.jsx)(f.PollContextProvider, {
    message: t,
    poll: n,
    children: (0, s.jsx)(E.PollFocusManager, {
      children: (0, s.jsx)(N, {
        message: t,
        poll: n,
        className: a
      })
    })
  })
}