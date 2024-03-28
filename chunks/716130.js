"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("399606"),
  o = s("481060"),
  d = s("668781"),
  u = s("603211"),
  c = s("710344"),
  E = s("430824"),
  _ = s("151785"),
  I = s("570961"),
  T = s("208665"),
  S = s("959508"),
  f = s("290511"),
  m = s("689938"),
  N = s("714419");

function g(e) {
  let {
    guild: t,
    prejoinOnly: s,
    postjoinOnly: n
  } = e, d = (0, r.useStateFromStores)([T.default], () => T.default.editedOnboardingPrompts), c = d.filter(e => e.inOnboarding), E = c.length, {
    drag: S,
    drop: g,
    dragSourcePosition: h,
    setIsDraggable: C
  } = (0, u.default)({
    type: "ONBOARDING_PROMPT_CARD",
    index: E,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), R = l.useRef(null);
  return l.useEffect(() => {
    C(!1)
  }, [C]), l.useEffect(() => {
    S(g(R))
  }, [S, g, R]), (0, a.jsxs)("div", {
    ref: R,
    className: i()(N.separatorSection, {
      [N.dropIndicatorBefore]: null != h && E < h,
      [N.dropIndicatorAfter]: null != h && E > h
    }),
    children: [!n && c.length < f.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING ? (0, a.jsxs)(o.Clickable, {
      className: N.addPrompt,
      onClick: () => (0, I.editGuildOnboardingPrompts)(t, [...d, (0, f.getEmptyPrompt)(!0)], !1),
      children: [(0, a.jsx)(_.default, {
        className: N.plusIcon,
        width: 20,
        height: 20
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: m.default.Messages.ONBOARDING_PROMPT_ADD_PROMPT
      })]
    }) : null, s ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: N.divider
      }), (0, a.jsx)(o.Heading, {
        variant: "heading-md/bold",
        children: m.default.Messages.ONBOARDING_QUESTIONS_POST_JOIN_HEADER
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: N.subtitle,
        children: m.default.Messages.ONBOARDING_QUESTIONS_POST_JOIN_SUBHEADER
      })]
    })]
  })
}

function h(e) {
  let {
    guildId: t,
    prejoinOnly: s,
    postjoinOnly: l,
    includeCount: n,
    singleColumn: i
  } = e, u = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t)), h = (0, r.useStateFromStores)([T.default], () => T.default.editedOnboardingPrompts), C = h.filter(e => e.inOnboarding), R = h.filter(e => !0 !== e.inOnboarding), x = [...C.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, f.getDefaultPrompt)()
  }, ...R.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: L,
    handleDragReset: O,
    handleDragComplete: A
  } = (0, c.default)(x, e => {
    let t = e.findIndex(e => "separator" === e.id),
      s = e.slice(0, t).map(e => ({
        ...e.data,
        inOnboarding: !0
      })),
      a = e.slice(t + 1).map(e => ({
        ...e.data,
        inOnboarding: !1,
        required: !1
      }));
    if (s.length > f.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING) {
      d.default.show({
        title: m.default.Messages.ONBOARDING_QUESTIONS_CANNOT_MOVE,
        body: m.default.Messages.ONBOARDING_QUESTIONS_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
          numQuestions: f.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
        })
      });
      return
    }(0, I.editGuildOnboardingPrompts)(u, [...s, ...a])
  });
  return null == u ? null : (0, a.jsxs)(a.Fragment, {
    children: [l ? null : (0, a.jsxs)(a.Fragment, {
      children: [s ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/bold",
          children: m.default.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_HEADER
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: N.subtitle,
          children: m.default.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_SUBHEADER
        })]
      }), C.map((e, t) => (0, a.jsx)(S.default, {
        guild: u,
        prompt: e,
        disableAutofocus: s,
        includeCount: n,
        singleColumn: i,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: L,
        onPromptDragReset: O,
        onPromptDragComplete: A
      }, e.id))]
    }), (0, a.jsx)(g, {
      guild: u,
      prejoinOnly: s,
      postjoinOnly: l
    }), s ? null : (0, a.jsxs)(a.Fragment, {
      children: [R.map((e, t) => (0, a.jsx)(S.default, {
        guild: u,
        prompt: e,
        promptIndex: t + C.length,
        dragIndex: t + C.length + 1,
        onPromptDragStart: L,
        onPromptDragReset: O,
        onPromptDragComplete: A
      }, e.id)), h.length < f.MAX_NUM_PROMPTS ? (0, a.jsxs)(o.Clickable, {
        className: N.addPrompt,
        onClick: () => (0, I.editGuildOnboardingPrompts)(u, [...h, (0, f.getEmptyPrompt)(!1)], !1),
        children: [(0, a.jsx)(_.default, {
          className: N.plusIcon,
          width: 20,
          height: 20
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: m.default.Messages.ONBOARDING_PROMPT_ADD_PROMPT
        })]
      }) : null]
    })]
  })
}