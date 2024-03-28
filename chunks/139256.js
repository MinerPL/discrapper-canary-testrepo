"use strict";
n.r(t), n.d(t, {
  PollAnswerCheckboxIcon: function() {
    return Y
  },
  PollAnswerRadioIcon: function() {
    return V
  },
  PollAnswerVotedIcon: function() {
    return H
  },
  PollAnswers: function() {
    return j
  },
  PollEmojiMediaView: function() {
    return F
  },
  PollMediaView: function() {
    return w
  }
}), n("627341");
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("278074"),
  d = n("399606"),
  c = n("481060"),
  f = n("596454"),
  E = n("44315"),
  _ = n("377171"),
  T = n("339085"),
  m = n("695346"),
  I = n("261922"),
  p = n("263704"),
  h = n("441674"),
  N = n("186523"),
  S = n("553826"),
  C = n("506071"),
  A = n("203143"),
  g = n("79390"),
  M = n("839963"),
  R = n("294608"),
  O = n("65145"),
  v = n("981631"),
  L = n("689938"),
  x = n("700363");

function D(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("ul", {
    "aria-label": L.default.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function P(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("div", {
    "aria-label": L.default.Messages.POLL_OPTIONS_ARIA,
    role: "group",
    className: t,
    children: n
  })
}

function y(e) {
  let {
    className: t,
    children: n
  } = e, s = (0, c.useRadioGroup)({
    orientation: "vertical"
  });
  return (0, l.jsx)("div", {
    "aria-label": L.default.Messages.POLL_OPTIONS_ARIA,
    ...s,
    className: t,
    children: n
  })
}

function U(e) {
  let {
    className: t,
    onClick: n,
    isSelected: s,
    isFirstAnswer: a,
    children: i
  } = e, {
    pollAnswerRef: r
  } = (0, O.usePollFocusManager)();
  return (0, l.jsx)(c.Clickable, {
    role: "checkbox",
    className: o()(t, x.enabled),
    onClick: n,
    "aria-checked": s,
    ref: a ? r : void 0,
    children: i
  })
}

function b(e) {
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
    pollAnswerRef: d
  } = (0, O.usePollFocusManager)();
  return (0, l.jsx)(c.Clickable, {
    role: "radio",
    className: o()(n, x.enabled),
    onClick: a,
    "aria-checked": i,
    tabIndex: t,
    ref: u ? d : void 0,
    children: s
  })
}

function j(e) {
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
    answersInteraction: M.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: y,
    answerElementType: 1
  })).with({
    answersInteraction: M.PollChatAnswerInteractionType.CHECKBOXES
  }, () => ({
    ContainerComponent: P,
    answerElementType: 2
  })).with({
    canTapAnswers: !0,
    answersInteraction: M.PollChatAnswerInteractionType.LIST
  }, () => ({
    ContainerComponent: D,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: D,
    answerElementType: 0
  }));
  return (0, l.jsx)(f, {
    className: r,
    children: t.map((e, t) => (0, l.jsx)(G, {
      className: o()(x.__invalid_answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: E,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: i,
      children: c(e)
    }, e.answerId))
  })
}

function G(e) {
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
  } = (0, R.useMessageIds)(), f = (0, R.useStyleClass)(n.style), E = !0 === n.isSelected, _ = i.useCallback(() => {
    A.default.handlePollAnswerTapped({
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
      return (0, l.jsx)(b, {
        className: o()(t, f),
        onClick: _,
        isSelected: E,
        hasSelectedAnyAnswer: a,
        isFirstAnswer: r,
        children: s
      });
    case 2:
      return (0, l.jsx)(U, {
        className: o()(t, f),
        onClick: _,
        isSelected: E,
        isFirstAnswer: r,
        children: s
      })
  }
}

function B(e) {
  var t;
  let {
    attachment: n,
    className: s
  } = e, a = (0, C.useIsWindowFocused)(), i = m.GifAutoPlay.useSetting();
  return (0, l.jsx)(I.default, {
    className: s,
    imageClassName: x.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null !== (t = n.description) && void 0 !== t ? t : (0, g.filterOutUUID)(n.filename),
    responsive: !0,
    width: 212,
    height: 212,
    autoPlay: i,
    shouldAnimate: a,
    shouldRenderAccessory: !1
  })
}

function F(e) {
  var t;
  let {
    className: n,
    emoji: s
  } = e, a = (0, d.useStateFromStores)([T.default], () => {
    var e;
    return T.default.getCustomEmojiById(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : "")
  }, [s.id]), i = (null == s ? void 0 : s.name) !== "" ? s.name : null == a ? void 0 : a.name;
  return (0, l.jsx)(f.default, {
    className: n,
    emojiId: null == s ? void 0 : s.id,
    emojiName: null == s ? void 0 : s.name,
    alt: i,
    animated: null !== (t = null == a ? void 0 : a.animated) && void 0 !== t && t
  })
}

function k(e, t) {
  return null != e ? (0, l.jsx)("div", {
    className: e,
    children: t
  }) : (0, l.jsx)(l.Fragment, {
    children: t
  })
}

function w(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: s,
    emojiClassName: a,
    fallback: i
  } = e, {
    message: r
  } = (0, R.usePollContext)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = r.attachments.find(e => {
      var n;
      return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0])
    });
    if (null != e) return k(n, (0, l.jsx)(B, {
      className: s,
      attachment: e
    }))
  }
  return null != t.emoji ? k(n, (0, l.jsx)(F, {
    className: a,
    emoji: t.emoji
  })) : void 0 !== i ? (0, l.jsx)(l.Fragment, {
    children: i
  }) : null
}

function H(e) {
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
    color: _.default.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, E.getColor)(v.Color.WHITE_500)
  })).with({
    isExpired: !0,
    isVictor: !1
  }, () => ({
    color: _.default.ICON_PRIMARY,
    backgroundColor: _.default.BG_MOD_FAINT
  })).otherwise(() => ({
    color: (0, E.getColor)(v.Color.BRAND_500),
    backgroundColor: (0, E.getColor)(v.Color.WHITE_500)
  }));
  return (0, l.jsx)(h.default, {
    width: s,
    height: s,
    className: a,
    color: i,
    backgroundColor: r,
    "aria-hidden": !0
  })
}

function V(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, a = {
    width: n,
    height: n,
    background: x.radioBackground,
    "aria-hidden": !0
  };
  return t ? (0, l.jsx)(S.default, {
    ...a,
    foreground: x.radioForeground,
    className: s
  }) : (0, l.jsx)(N.default, {
    ...a,
    className: s
  })
}

function Y(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, a = .85 * n;
  return (0, l.jsx)("div", {
    className: o()(x.checkbox, {
      [x.checkboxSelected]: t
    }, s),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": !0,
    children: t && (0, l.jsx)(p.default, {
      width: a,
      height: a,
      color: (0, E.getColor)(v.Color.WHITE_500)
    })
  })
}(a = s || (s = {}))[a.LIST_ITEM = 0] = "LIST_ITEM", a[a.RADIO = 1] = "RADIO", a[a.CHECKBOX = 2] = "CHECKBOX", a[a.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"