"use strict";
n.r(t), n.d(t, {
  PollAnswerCheckboxIcon: function() {
    return H
  },
  PollAnswerRadioIcon: function() {
    return w
  },
  PollAnswerVotedIcon: function() {
    return k
  },
  PollAnswers: function() {
    return U
  },
  PollEmojiMediaView: function() {
    return B
  },
  PollMediaView: function() {
    return F
  }
}), n("627341");
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("278074"),
  d = n("481060"),
  c = n("596454"),
  f = n("44315"),
  E = n("377171"),
  _ = n("695346"),
  m = n("261922"),
  T = n("263704"),
  I = n("441674"),
  p = n("186523"),
  h = n("553826"),
  N = n("506071"),
  S = n("203143"),
  C = n("79390"),
  A = n("839963"),
  g = n("294608"),
  M = n("65145"),
  R = n("981631"),
  v = n("689938"),
  O = n("894501");

function x(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("ul", {
    "aria-label": v.default.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function L(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("div", {
    "aria-label": v.default.Messages.POLL_OPTIONS_ARIA,
    role: "group",
    className: t,
    children: n
  })
}

function D(e) {
  let {
    className: t,
    children: n
  } = e, s = (0, d.useRadioGroup)({
    orientation: "vertical"
  });
  return (0, l.jsx)("div", {
    "aria-label": v.default.Messages.POLL_OPTIONS_ARIA,
    ...s,
    className: t,
    children: n
  })
}

function P(e) {
  let {
    className: t,
    onClick: n,
    isSelected: s,
    isFirstAnswer: a,
    children: i
  } = e, {
    pollAnswerRef: r
  } = (0, M.usePollFocusManager)();
  return (0, l.jsx)(d.Clickable, {
    role: "checkbox",
    className: o()(t, O.enabled),
    onClick: n,
    "aria-checked": s,
    ref: a ? r : void 0,
    children: i
  })
}

function y(e) {
  let t, {
    className: n,
    children: s,
    onClick: a,
    isSelected: i,
    hasSelectedAnyAnswer: r,
    isFirstAnswer: u
  } = e;
  t = r ? i ? 0 : -1 : u ? 0 : -1;
  let {
    pollAnswerRef: c
  } = (0, M.usePollFocusManager)();
  return (0, l.jsx)(d.Clickable, {
    role: "radio",
    className: o()(n, O.enabled),
    onClick: a,
    "aria-checked": i,
    tabIndex: t,
    ref: u ? c : void 0,
    children: s
  })
}

function U(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: s,
    canTapAnswers: a,
    hasSelectedAnyAnswer: i,
    className: r,
    answerClassName: d,
    renderAnswerContent: c
  } = e, {
    ContainerComponent: f,
    answerElementType: E
  } = (0, u.match)({
    canTapAnswers: a,
    answersInteraction: n
  }).with({
    answersInteraction: A.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: D,
    answerElementType: 1
  })).with({
    answersInteraction: A.PollChatAnswerInteractionType.CHECKBOXES
  }, () => ({
    ContainerComponent: L,
    answerElementType: 2
  })).with({
    canTapAnswers: !0,
    answersInteraction: A.PollChatAnswerInteractionType.LIST
  }, () => ({
    ContainerComponent: x,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: x,
    answerElementType: 0
  }));
  return (0, l.jsx)(f, {
    className: r,
    children: t.map((e, t) => (0, l.jsx)(j, {
      className: o()(O.__invalid_answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: E,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: i,
      children: c(e)
    }, e.answerId))
  })
}

function j(e) {
  let {
    className: t,
    answer: n,
    children: s,
    hasSelectedAnyAnswer: a,
    isFirstAnswer: r,
    elementType: u
  } = e, {
    channelId: d,
    messageId: c
  } = (0, g.useMessageIds)(), f = (0, g.useStyleClass)(n.style), E = !0 === n.isSelected, _ = i.useCallback(() => {
    S.default.handlePollAnswerTapped({
      channelId: d,
      messageId: c,
      answerId: n.answerId
    })
  }, [d, c, n.answerId]);
  switch (u) {
    case 0:
    case 3:
      return (0, l.jsx)("li", {
        className: o()(t, f),
        children: s
      });
    case 1:
      return (0, l.jsx)(y, {
        className: o()(t, f),
        onClick: _,
        isSelected: E,
        hasSelectedAnyAnswer: a,
        isFirstAnswer: r,
        children: s
      });
    case 2:
      return (0, l.jsx)(P, {
        className: o()(t, f),
        onClick: _,
        isSelected: E,
        isFirstAnswer: r,
        children: s
      })
  }
}

function b(e) {
  var t;
  let {
    attachment: n,
    className: s
  } = e, a = (0, N.useIsWindowFocused)(), i = _.GifAutoPlay.useSetting();
  return (0, l.jsx)(m.default, {
    className: s,
    imageClassName: O.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null !== (t = n.description) && void 0 !== t ? t : (0, C.filterOutUUID)(n.filename),
    responsive: !0,
    width: 212,
    height: 212,
    autoPlay: i,
    shouldAnimate: a,
    shouldRenderAccessory: !1
  })
}

function B(e) {
  let {
    className: t,
    emoji: n
  } = e;
  return (0, l.jsx)(c.default, {
    className: t,
    emojiId: n.id,
    emojiName: n.name,
    animated: n.animated
  })
}

function G(e, t) {
  return null != e ? (0, l.jsx)("div", {
    className: e,
    children: t
  }) : (0, l.jsx)(l.Fragment, {
    children: t
  })
}

function F(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: s,
    emojiClassName: a,
    fallback: i
  } = e, {
    message: r
  } = (0, g.usePollContext)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = r.attachments.find(e => {
      var n;
      return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0])
    });
    if (null != e) return G(n, (0, l.jsx)(b, {
      className: s,
      attachment: e
    }))
  }
  return null != t.emoji ? G(n, (0, l.jsx)(B, {
    className: a,
    emoji: t.emoji
  })) : void 0 !== i ? (0, l.jsx)(l.Fragment, {
    children: i
  }) : null
}

function k(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: s,
    className: a
  } = e, {
    color: i,
    backgroundColor: r
  } = (0, u.match)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: !0,
    isVictor: !0
  }, () => ({
    color: E.default.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, f.getColor)(R.Color.WHITE_500)
  })).with({
    isExpired: !0,
    isVictor: !1
  }, () => ({
    color: E.default.ICON_PRIMARY,
    backgroundColor: E.default.BG_MOD_FAINT
  })).otherwise(() => ({
    color: (0, f.getColor)(R.Color.BRAND_500),
    backgroundColor: (0, f.getColor)(R.Color.WHITE_500)
  }));
  return (0, l.jsx)(I.default, {
    width: s,
    height: s,
    className: a,
    color: i,
    backgroundColor: r,
    "aria-hidden": !0
  })
}

function w(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, a = {
    width: n,
    height: n,
    background: O.radioBackground,
    "aria-hidden": !0
  };
  return t ? (0, l.jsx)(h.default, {
    ...a,
    foreground: O.radioForeground,
    className: s
  }) : (0, l.jsx)(p.default, {
    ...a,
    className: s
  })
}

function H(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, a = .85 * n;
  return (0, l.jsx)("div", {
    className: o()(O.checkbox, {
      [O.checkboxSelected]: t
    }, s),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": !0,
    children: t && (0, l.jsx)(T.default, {
      width: a,
      height: a,
      color: (0, f.getColor)(R.Color.WHITE_500)
    })
  })
}(a = s || (s = {}))[a.LIST_ITEM = 0] = "LIST_ITEM", a[a.RADIO = 1] = "RADIO", a[a.CHECKBOX = 2] = "CHECKBOX", a[a.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"