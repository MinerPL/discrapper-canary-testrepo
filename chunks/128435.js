"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("278074"),
  o = n("263568"),
  u = n("481060"),
  d = n("377171"),
  c = n("507893"),
  f = n("63063"),
  E = n("203143"),
  _ = n("365206"),
  T = n("294608"),
  m = n("65145"),
  I = n("920557"),
  p = n("981631"),
  h = n("689938"),
  N = n("749422");

function S(e) {
  let {
    media: t
  } = e;
  return (0, s.jsx)(u.Heading, {
    variant: "text-md/medium",
    className: N.question,
    scaleFontToUserSetting: !0,
    children: t.text
  })
}

function C(e) {
  let {
    className: t
  } = e;
  return (0, s.jsx)(u.Tooltip, {
    text: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      scaleFontToUserSetting: !0,
      children: h.default.Messages.POLLS_EXPERIMENT_INFO_TEXT
    }),
    "aria-label": h.default.Messages.POLLS_EXPERIMENT_INFO_TEXT,
    children: e => (0, s.jsx)(u.Clickable, {
      ...e,
      className: t,
      tag: "a",
      role: "link",
      href: f.default.getArticleURL(p.HelpdeskArticles.POLLS_FAQ),
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

function A(e) {
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
    className: i()(N.__invalid_textButton, r),
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
    className: i()(N.detailsText, l),
    children: [(0, s.jsx)(A, {
      onClick: a,
      variant: "text-sm/normal",
      color: "none",
      className: N.detailsTextButton,
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
  } = (0, m.usePollFocusManager)(), d = a.useCallback(async () => {
    (null == t ? void 0 : t.type) != null && (await E.default.handlePollActionTapped({
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
  }, t.presentation) : "textButton" === t.presentation ? (0, s.jsx)(A, {
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

function R(e) {
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
    return (0, r.match)(t.layoutType).with(o.PollLayoutTypes.DEFAULT, () => (0, s.jsx)(I.TextAndImageAnswers, {
      ...n
    })).with(o.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(_.default, {
      ...n
    })).otherwise(() => null)
  }(0, n);
  return null == d ? null : (0, s.jsx)("div", {
    className: i()(N.container, l, a),
    children: (0, s.jsxs)(u.HeadingLevel, {
      children: [(0, s.jsxs)("div", {
        className: N.header,
        children: [(0, s.jsx)(C, {
          className: N.infoButton
        }), (0, s.jsx)(S, {
          media: n.question
        }), null != n.promptLabel && (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: N.prompt,
          scaleFontToUserSetting: !0,
          children: n.promptLabel
        })]
      }), d, (0, s.jsxs)("div", {
        className: N.bottomBar,
        children: [(0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: N.secondaryAction
        }), (0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: N.tertiaryAction
        }), (0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function O(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e;
  return (0, s.jsx)(T.PollContextProvider, {
    message: t,
    poll: n,
    children: (0, s.jsx)(m.PollFocusManager, {
      children: (0, s.jsx)(R, {
        message: t,
        poll: n,
        className: a
      })
    })
  })
}