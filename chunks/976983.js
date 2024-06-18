"use strict";
t.d(s, {
  B: function() {
    return x
  },
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(392711),
  r = t.n(a),
  o = t(481060),
  c = t(668781),
  d = t(603211),
  u = t(107862),
  E = t(307707),
  _ = t(305762),
  I = t(548343),
  T = t(151785),
  N = t(570961),
  m = t(290511),
  S = t(689938),
  h = t(189168);

function g(e) {
  var s, i, a, c;
  let {
    guild: u,
    prompt: T,
    singleColumn: g,
    promptIndex: x,
    option: C,
    hasError: R,
    onDragStart: L,
    onDragComplete: O,
    onDragReset: A
  } = e, p = null, M = r().findIndex(T.options, e => e.id === C.id), {
    drag: f,
    dragSourcePosition: v,
    drop: D,
    setIsDraggable: Z
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(T.id),
    index: M,
    optionId: C.id,
    onDragStart: L,
    onDragComplete: O,
    onDragReset: A
  }), {
    customEmoji: j,
    unicodeEmoji: U
  } = (0, E.Z)(null === (s = C.emoji) || void 0 === s ? void 0 : s.id, null === (i = C.emoji) || void 0 === i ? void 0 : i.name);
  return !((0, m.Oq)(C.emoji) || null != j || null != U) && (p = S.Z.Messages.GUILD_SETTINGS_ONBOARDING_PROMPT_INVALID_EMOJI), (0, n.jsxs)(o.Clickable, {
    className: l()(h.optionCard, {
      [h.hasError]: R || null != p,
      [h.dropIndicatorBefore]: null != v && M < v,
      [h.dropIndicatorAfter]: null != v && M > v,
      [h.singleColumn]: g
    }),
    onClick: () => (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("1862")]).then(t.bind(t, 801001));
      return s => (0, n.jsx)(e, {
        ...s,
        guild: u,
        prompt: T,
        option: C,
        index: x,
        onSave: e => {
          (0, N.Kk)(u, T.id, {
            options: T.options.map(s => s.id === C.id ? e : s)
          })
        },
        onDelete: () => {
          (0, N.Kk)(u, T.id, {
            options: T.options.filter(e => e.id !== C.id)
          })
        }
      })
    }),
    onMouseEnter: () => Z(!0),
    onMouseLeave: () => Z(!1),
    innerRef: e => f(D(e)),
    children: [(0, n.jsx)("div", {
      className: h.dragContainer,
      children: (0, n.jsx)(I.Z, {
        className: h.__invalid_dragIcon
      })
    }), (0, n.jsxs)("div", {
      className: h.optionCardRow,
      children: [(0, n.jsx)("div", {
        className: h.emoji,
        children: (0, n.jsx)(_.Z, {
          emojiId: null === (a = C.emoji) || void 0 === a ? void 0 : a.id,
          emojiName: null === (c = C.emoji) || void 0 === c ? void 0 : c.name,
          defaultComponent: null
        })
      }), (0, n.jsxs)("div", {
        className: h.text,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: C.title
        }), "" !== C.description && (0, n.jsx)(o.Text, {
          className: h.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: C.description
        })]
      })]
    }), null != p && (0, n.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: p
    })]
  })
}

function x(e) {
  let {
    guild: s,
    prompt: i,
    promptIndex: a,
    singleColumn: r
  } = e, {
    dropdownsAllowed: d
  } = (0, u.Ug)(s.id), E = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("1862")]).then(t.bind(t, 801001));
      return t => (0, n.jsx)(e, {
        ...t,
        guild: s,
        prompt: i,
        onSave: e => (0, N.Kk)(s, i.id, {
          options: [...i.options, e]
        }),
        onDelete: () => {},
        index: a
      })
    })
  };
  return (0, n.jsx)(o.Clickable, {
    className: l()(h.optionCard, h.addOptionCard, {
      [h.addFirstOptionCard]: 0 === i.options.length,
      [h.singleColumn]: r
    }),
    onClick: () => {
      d && i.options.length + 1 === m.fY ? c.Z.show({
        title: S.Z.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_TITLE,
        body: S.Z.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_DESCRIPTION.format({
          thresholdCount: m.fY
        }),
        confirmText: S.Z.Messages.OKAY,
        cancelText: S.Z.Messages.CANCEL,
        onConfirm: E
      }) : E()
    },
    children: (0, n.jsxs)("div", {
      className: h.optionCardRow,
      children: [(0, n.jsx)(T.Z, {
        className: h.plusIcon,
        width: 24,
        height: 24
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: S.Z.Messages.ONBOARDING_PROMPT_ADD_OPTION
      })]
    })
  })
}