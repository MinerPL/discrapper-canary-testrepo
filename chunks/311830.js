"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("794252");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("506838"),
  o = n("418009"),
  u = n("77078"),
  d = n("20606"),
  c = n("266926"),
  E = n("701909"),
  f = n("847511"),
  _ = n("619544"),
  T = n("74232"),
  I = n("316350"),
  m = n("909366"),
  N = n("49111"),
  p = n("782340"),
  S = n("831797");

function C(e) {
  let {
    media: t
  } = e;
  return (0, s.jsx)(u.Heading, {
    variant: "text-md/medium",
    className: S.question,
    scaleFontToUserSetting: !0,
    children: t.text
  })
}

function A(e) {
  let {
    className: t
  } = e;
  return (0, s.jsx)(u.Tooltip, {
    text: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      scaleFontToUserSetting: !0,
      children: p.default.Messages.POLLS_EXPERIMENT_INFO_TEXT
    }),
    "aria-label": p.default.Messages.POLLS_EXPERIMENT_INFO_TEXT,
    children: e => (0, s.jsx)(u.Clickable, {
      ...e,
      className: t,
      tag: "a",
      role: "link",
      href: E.default.getArticleURL(N.HelpdeskArticles.POLLS_FAQ),
      target: "_blank",
      children: (0, s.jsx)(c.default, {
        width: 24,
        height: 24,
        color: d.default.TEXT_MUTED,
        "aria-hidden": !0
      })
    })
  })
}

function h(e) {
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
    className: i(S.textButton, r),
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

function g(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: a,
    className: l
  } = e;
  return (0, s.jsxs)("div", {
    className: i(S.detailsText, l),
    children: [(0, s.jsx)(h, {
      onClick: a,
      variant: "text-sm/normal",
      color: "none",
      className: S.detailsTextButton,
      children: t
    }), null != n && (0, s.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: n
    })]
  })
}

function M(e) {
  let {
    action: t,
    channelId: n,
    messageId: l,
    className: i
  } = e, {
    actionButtonRef: r,
    manageFocusOnAction: o
  } = (0, I.usePollFocusManager)(), d = a.useCallback(async () => {
    (null == t ? void 0 : t.type) != null && (await f.default.handlePollActionTapped({
      channelId: n,
      messageId: l,
      type: t.type
    }), o(t.type))
  }, [null == t ? void 0 : t.type, n, l, o]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, s.jsx)(u.Button, {
    buttonRef: r,
    onClick: d,
    disabled: !t.enabled,
    color: "secondaryButton" === t.presentation ? u.Button.Colors.PRIMARY : u.Button.Colors.BRAND,
    size: u.Button.Sizes.SMALL,
    className: i,
    children: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "interactive-active",
      scaleFontToUserSetting: !0,
      children: t.label
    })
  }, t.presentation) : "textButton" === t.presentation ? (0, s.jsx)(h, {
    buttonRef: r,
    onClick: d,
    className: i,
    children: t.label
  }) : (0, s.jsx)(g, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: d,
    className: i
  })
}

function O(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e, l = (0, T.useStyleClass)(n.containerStyle), d = function(e, t) {
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
    return (0, r.match)(t.layoutType).with(o.PollLayoutTypes.DEFAULT, () => (0, s.jsx)(m.TextAndImageAnswers, {
      ...n
    })).with(o.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(_.default, {
      ...n
    })).otherwise(() => null)
  }(0, n);
  return null == d ? null : (0, s.jsx)("div", {
    className: i(S.container, l, a),
    children: (0, s.jsxs)(u.HeadingLevel, {
      children: [(0, s.jsxs)("div", {
        className: S.header,
        children: [(0, s.jsx)(A, {
          className: S.infoButton
        }), (0, s.jsx)(C, {
          media: n.question
        }), null != n.promptLabel && (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: S.prompt,
          scaleFontToUserSetting: !0,
          children: n.promptLabel
        })]
      }), d, (0, s.jsxs)("div", {
        className: S.bottomBar,
        children: [(0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: S.secondaryAction
        }), (0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: S.tertiaryAction
        }), (0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function R(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e;
  return (0, s.jsx)(T.PollContextProvider, {
    message: t,
    poll: n,
    children: (0, s.jsx)(I.PollFocusManager, {
      children: (0, s.jsx)(O, {
        message: t,
        poll: n,
        className: a
      })
    })
  })
}