"use strict";
s.r(t), s.d(t, {
  AddOptionCard: function() {
    return h
  },
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("392711"),
  r = s.n(i),
  o = s("481060"),
  d = s("668781"),
  u = s("603211"),
  c = s("107862"),
  E = s("307707"),
  _ = s("305762"),
  I = s("548343"),
  T = s("151785"),
  S = s("570961"),
  f = s("290511"),
  m = s("689938"),
  N = s("266991");

function g(e) {
  var t, l, i, d;
  let {
    guild: c,
    prompt: T,
    singleColumn: g,
    promptIndex: h,
    option: C,
    hasError: R,
    onDragStart: x,
    onDragComplete: L,
    onDragReset: O
  } = e, A = null, p = r().findIndex(T.options, e => e.id === C.id), {
    drag: M,
    dragSourcePosition: D,
    drop: v,
    setIsDraggable: j
  } = (0, u.default)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(T.id),
    index: p,
    optionId: C.id,
    onDragStart: x,
    onDragComplete: L,
    onDragReset: O
  }), {
    customEmoji: G,
    unicodeEmoji: U
  } = (0, E.default)(null === (t = C.emoji) || void 0 === t ? void 0 : t.id, null === (l = C.emoji) || void 0 === l ? void 0 : l.name);
  return !((0, f.isEmojiEmpty)(C.emoji) || null != G || null != U) && (A = m.default.Messages.GUILD_SETTINGS_ONBOARDING_PROMPT_INVALID_EMOJI), (0, a.jsxs)(o.Clickable, {
    className: n()(N.optionCard, {
      [N.hasError]: R || null != A,
      [N.dropIndicatorBefore]: null != D && p < D,
      [N.dropIndicatorAfter]: null != D && p > D,
      [N.singleColumn]: g
    }),
    onClick: () => (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("1862")]).then(s.bind(s, "801001"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: c,
        prompt: T,
        option: C,
        index: h,
        onSave: e => {
          (0, S.editGuildOnboardingPrompt)(c, T.id, {
            options: T.options.map(t => t.id === C.id ? e : t)
          })
        },
        onDelete: () => {
          (0, S.editGuildOnboardingPrompt)(c, T.id, {
            options: T.options.filter(e => e.id !== C.id)
          })
        }
      })
    }),
    onMouseEnter: () => j(!0),
    onMouseLeave: () => j(!1),
    innerRef: e => M(v(e)),
    children: [(0, a.jsx)("div", {
      className: N.dragContainer,
      children: (0, a.jsx)(I.default, {
        className: N.__invalid_dragIcon
      })
    }), (0, a.jsxs)("div", {
      className: N.optionCardRow,
      children: [(0, a.jsx)("div", {
        className: N.emoji,
        children: (0, a.jsx)(_.default, {
          emojiId: null === (i = C.emoji) || void 0 === i ? void 0 : i.id,
          emojiName: null === (d = C.emoji) || void 0 === d ? void 0 : d.name,
          defaultComponent: null
        })
      }), (0, a.jsxs)("div", {
        className: N.text,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: C.title
        }), "" !== C.description && (0, a.jsx)(o.Text, {
          className: N.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: C.description
        })]
      })]
    }), null != A && (0, a.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: A
    })]
  })
}

function h(e) {
  let {
    guild: t,
    prompt: l,
    promptIndex: i,
    singleColumn: r
  } = e, {
    dropdownsAllowed: u
  } = (0, c.useOnboardingDropdownExperiment)(t.id), E = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("1862")]).then(s.bind(s, "801001"));
      return s => (0, a.jsx)(e, {
        ...s,
        guild: t,
        prompt: l,
        onSave: e => (0, S.editGuildOnboardingPrompt)(t, l.id, {
          options: [...l.options, e]
        }),
        onDelete: () => {},
        index: i
      })
    })
  };
  return (0, a.jsx)(o.Clickable, {
    className: n()(N.optionCard, N.addOptionCard, {
      [N.addFirstOptionCard]: 0 === l.options.length,
      [N.singleColumn]: r
    }),
    onClick: () => {
      u && l.options.length + 1 === f.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD ? d.default.show({
        title: m.default.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_TITLE,
        body: m.default.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_DESCRIPTION.format({
          thresholdCount: f.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD
        }),
        confirmText: m.default.Messages.OKAY,
        cancelText: m.default.Messages.CANCEL,
        onConfirm: E
      }) : E()
    },
    children: (0, a.jsxs)("div", {
      className: N.optionCardRow,
      children: [(0, a.jsx)(T.default, {
        className: N.plusIcon,
        width: 24,
        height: 24
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: m.default.Messages.ONBOARDING_PROMPT_ADD_OPTION
      })]
    })
  })
}