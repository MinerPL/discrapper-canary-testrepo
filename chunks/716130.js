"use strict";
t.d(s, {
  Z: function() {
    return x
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(399606),
  o = t(481060),
  c = t(668781),
  d = t(603211),
  u = t(710344),
  E = t(430824),
  _ = t(151785),
  I = t(570961),
  T = t(208665),
  N = t(959508),
  m = t(290511),
  S = t(689938),
  h = t(82591);

function g(e) {
  let {
    guild: s,
    prejoinOnly: t,
    postjoinOnly: l
  } = e, c = (0, r.e7)([T.Z], () => T.Z.editedOnboardingPrompts), u = c.filter(e => e.inOnboarding), E = u.length, {
    drag: N,
    drop: g,
    dragSourcePosition: x,
    setIsDraggable: C
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: E,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), R = i.useRef(null);
  return i.useEffect(() => {
    C(!1)
  }, [C]), i.useEffect(() => {
    N(g(R))
  }, [N, g, R]), (0, n.jsxs)("div", {
    ref: R,
    className: a()(h.separatorSection, {
      [h.dropIndicatorBefore]: null != x && E < x,
      [h.dropIndicatorAfter]: null != x && E > x
    }),
    children: [!l && u.length < m.b3 ? (0, n.jsxs)(o.Clickable, {
      className: h.addPrompt,
      onClick: () => (0, I.tS)(s, [...c, (0, m.yZ)(!0)], !1),
      children: [(0, n.jsx)(_.Z, {
        className: h.plusIcon,
        width: 20,
        height: 20
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: S.Z.Messages.ONBOARDING_PROMPT_ADD_PROMPT
      })]
    }) : null, t ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: h.divider
      }), (0, n.jsx)(o.Heading, {
        variant: "heading-md/bold",
        children: S.Z.Messages.ONBOARDING_QUESTIONS_POST_JOIN_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: h.subtitle,
        children: S.Z.Messages.ONBOARDING_QUESTIONS_POST_JOIN_SUBHEADER
      })]
    })]
  })
}

function x(e) {
  let {
    guildId: s,
    prejoinOnly: t,
    postjoinOnly: i,
    includeCount: l,
    singleColumn: a
  } = e, d = (0, r.e7)([E.Z], () => E.Z.getGuild(s)), x = (0, r.e7)([T.Z], () => T.Z.editedOnboardingPrompts), C = x.filter(e => e.inOnboarding), R = x.filter(e => !0 !== e.inOnboarding), L = [...C.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, m.ae)()
  }, ...R.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: O,
    handleDragReset: A,
    handleDragComplete: p
  } = (0, u.Z)(L, e => {
    let s = e.findIndex(e => "separator" === e.id),
      t = e.slice(0, s).map(e => ({
        ...e.data,
        inOnboarding: !0
      })),
      n = e.slice(s + 1).map(e => ({
        ...e.data,
        inOnboarding: !1,
        required: !1
      }));
    if (t.length > m.b3) {
      c.Z.show({
        title: S.Z.Messages.ONBOARDING_QUESTIONS_CANNOT_MOVE,
        body: S.Z.Messages.ONBOARDING_QUESTIONS_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
          numQuestions: m.b3
        })
      });
      return
    }(0, I.tS)(d, [...t, ...n])
  });
  return null == d ? null : (0, n.jsxs)(n.Fragment, {
    children: [i ? null : (0, n.jsxs)(n.Fragment, {
      children: [t ? null : (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/bold",
          children: S.Z.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_HEADER
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: h.subtitle,
          children: S.Z.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_SUBHEADER
        })]
      }), C.map((e, s) => (0, n.jsx)(N.Z, {
        guild: d,
        prompt: e,
        disableAutofocus: t,
        includeCount: l,
        singleColumn: a,
        promptIndex: s,
        dragIndex: s,
        onPromptDragStart: O,
        onPromptDragReset: A,
        onPromptDragComplete: p
      }, e.id))]
    }), (0, n.jsx)(g, {
      guild: d,
      prejoinOnly: t,
      postjoinOnly: i
    }), t ? null : (0, n.jsxs)(n.Fragment, {
      children: [R.map((e, s) => (0, n.jsx)(N.Z, {
        guild: d,
        prompt: e,
        promptIndex: s + C.length,
        dragIndex: s + C.length + 1,
        onPromptDragStart: O,
        onPromptDragReset: A,
        onPromptDragComplete: p
      }, e.id)), x.length < m.YW ? (0, n.jsxs)(o.Clickable, {
        className: h.addPrompt,
        onClick: () => (0, I.tS)(d, [...x, (0, m.yZ)(!1)], !1),
        children: [(0, n.jsx)(_.Z, {
          className: h.plusIcon,
          width: 20,
          height: 20
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: S.Z.Messages.ONBOARDING_PROMPT_ADD_PROMPT
        })]
      }) : null]
    })]
  })
}