"use strict";
n.r(t), n.d(t, {
  PollAnswers: function() {
    return b
  },
  PollEmojiMediaView: function() {
    return F
  },
  PollMediaView: function() {
    return w
  },
  PollAnswerVotedIcon: function() {
    return H
  },
  PollAnswerRadioIcon: function() {
    return V
  },
  PollAnswerCheckboxIcon: function() {
    return Y
  }
}), n("794252");
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("506838"),
  d = n("65597"),
  c = n("77078"),
  E = n("430568"),
  f = n("449918"),
  _ = n("20606"),
  T = n("385976"),
  I = n("845579"),
  m = n("952368"),
  N = n("36694"),
  p = n("578706"),
  S = n("904276"),
  A = n("875436"),
  C = n("866190"),
  h = n("847511"),
  g = n("562228"),
  M = n("214400"),
  O = n("74232"),
  R = n("316350"),
  v = n("49111"),
  L = n("782340"),
  P = n("193169");

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

function x(e) {
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
  } = (0, R.usePollFocusManager)();
  return (0, l.jsx)(c.Clickable, {
    role: "checkbox",
    className: o(t, P.enabled),
    onClick: n,
    "aria-checked": s,
    ref: a ? r : void 0,
    children: i
  })
}

function j(e) {
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
  } = (0, R.usePollFocusManager)();
  return (0, l.jsx)(c.Clickable, {
    role: "radio",
    className: o(n, P.enabled),
    onClick: a,
    "aria-checked": i,
    tabIndex: t,
    ref: u ? d : void 0,
    children: s
  })
}

function b(e) {
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
    ContainerComponent: E,
    answerElementType: f
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
    ContainerComponent: x,
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
  return (0, l.jsx)(E, {
    className: r,
    children: t.map((e, t) => (0, l.jsx)(G, {
      className: o(P.answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: f,
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
  } = (0, O.useMessageIds)(), E = (0, O.useStyleClass)(n.style), f = !0 === n.isSelected, _ = i.useCallback(() => {
    h.default.handlePollAnswerTapped({
      channelId: d,
      messageId: c,
      answerId: n.answerId
    })
  }, [d, c, n.answerId]);
  switch (u) {
    case 0:
    case 3:
      return (0, l.jsx)("li", {
        className: o(t, E),
        children: s
      });
    case 1:
      return (0, l.jsx)(j, {
        className: o(t, E),
        onClick: _,
        isSelected: f,
        hasSelectedAnyAnswer: a,
        isFirstAnswer: r,
        children: s
      });
    case 2:
      return (0, l.jsx)(U, {
        className: o(t, E),
        onClick: _,
        isSelected: f,
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
  } = e, a = (0, C.useIsWindowFocused)(), i = I.GifAutoPlay.useSetting();
  return (0, l.jsx)(m.default, {
    className: s,
    imageClassName: P.attachmentImage,
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
  return (0, l.jsx)(E.default, {
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
  } = (0, O.usePollContext)();
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
    backgroundColor: (0, f.getColor)(v.Color.WHITE_500)
  })).with({
    isExpired: !0,
    isVictor: !1
  }, () => ({
    color: _.default.ICON_PRIMARY,
    backgroundColor: _.default.BG_MOD_FAINT
  })).otherwise(() => ({
    color: (0, f.getColor)(v.Color.BRAND_500),
    backgroundColor: (0, f.getColor)(v.Color.WHITE_500)
  }));
  return (0, l.jsx)(p.default, {
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
    background: P.radioBackground,
    "aria-hidden": !0
  };
  return t ? (0, l.jsx)(A.default, {
    ...a,
    foreground: P.radioForeground,
    className: s
  }) : (0, l.jsx)(S.default, {
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
    className: o(P.checkbox, {
      [P.checkboxSelected]: t
    }, s),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": !0,
    children: t && (0, l.jsx)(N.default, {
      width: a,
      height: a,
      color: (0, f.getColor)(v.Color.WHITE_500)
    })
  })
}(a = s || (s = {}))[a.LIST_ITEM = 0] = "LIST_ITEM", a[a.RADIO = 1] = "RADIO", a[a.CHECKBOX = 2] = "CHECKBOX", a[a.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"