"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return O
  }
}), n("222007"), n("794252");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("597287"),
  o = n("146606"),
  u = n("506838"),
  d = n("446674"),
  c = n("77078"),
  E = n("206230"),
  f = n("486996"),
  _ = n("476765"),
  T = n("847511"),
  I = n("562228"),
  m = n("214400"),
  N = n("426490"),
  p = n("74232"),
  S = n("782340"),
  C = n("997559");

function A(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: i
  } = e, o = (0, _.useUID)(), {
    channelId: u,
    messageId: d
  } = (0, p.useMessageIds)(), [E, m] = a.useState(""), [N, S] = a.useState(!1), A = "" !== E && N, h = a.useCallback(() => {
    let e = (0, I.getPollAnswerVotesTooltipText)(d, u, i);
    m(e)
  }, [d, u, i]), g = a.useCallback(() => {
    h(), S(!0)
  }, [h]), M = a.useCallback(() => {
    S(!1)
  }, []), O = a.useCallback(() => {
    (0, T.handleShowVotesForAnswer)({
      channelId: u,
      messageId: d,
      answerId: i
    })
  }, [u, d, i]);
  a.useEffect(() => {
    if (N) return f.default.addReactChangeListener(h), () => {
      f.default.removeReactChangeListener(h)
    }
  }, [N, h]);
  let R = (0, s.jsx)(c.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: C.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: C.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: E
        }),
        forceOpen: A,
        "aria-label": !1,
        children: e => (0, s.jsx)(c.Button, {
          ...e,
          onMouseEnter: g,
          onMouseLeave: M,
          onFocus: g,
          onBlur: M,
          onClick: O,
          className: C.voteCountButton,
          "aria-describedby": A ? o : void 0,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          children: R
        })
      }), A && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: E
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: R
    }), (0, s.jsxs)(c.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function h(e) {
  let {
    percentage: t
  } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), a = (0, o.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: n,
    config: 100 !== t && 0 !== t ? o.config.wobbly : o.config.default
  });
  return (0, s.jsx)(o.animated.span, {
    className: C.votePercentageBar,
    style: a,
    "aria-hidden": !0
  })
}

function g(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: a,
    isVictor: l,
    isExpired: i,
    className: r
  } = e;
  return (0, u.match)({
    answersInteraction: t,
    didSelfVote: a
  }).with({
    answersInteraction: m.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(N.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(N.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(N.PollAnswerVotedIcon, {
    isVictor: l,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function M(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: a,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, d = !0 === t.didSelfVote, E = !0 === t.isVictor;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i(C.answerInner, {
        [C.currentlyVoting]: a !== m.PollChatAnswerInteractionType.LIST,
        [C.selected]: u
      }),
      children: [l ? (0, s.jsx)(h, {
        percentage: t.votesPercentage
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(N.PollEmojiMediaView, {
        className: C.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(c.Text, {
        className: C.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: S.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(A, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(g, {
        answersInteraction: a,
        isSelected: u,
        didSelfVote: d,
        isVictor: E,
        isExpired: n,
        className: C.answerSelectionIcon
      })]
    })
  })
}

function O(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: a,
    canTapAnswers: l,
    ...i
  } = e;
  return (0, s.jsx)(N.PollAnswers, {
    className: C.answersContainer,
    answerClassName: C.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(M, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: a,
      canShowVoterDetails: l
    }),
    ...i
  })
}