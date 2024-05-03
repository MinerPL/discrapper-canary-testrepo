"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
}), t("47120");
var l = t("735250"),
  a = t("470079"),
  r = t("120356"),
  u = t.n(r),
  s = t("481060"),
  o = t("596454"),
  i = t("911969"),
  d = t("114484"),
  c = t("970184"),
  m = t("280501"),
  p = t("689938"),
  f = t("952774");

function C(e) {
  let {
    emoji: n,
    label: t,
    description: a,
    isDisabled: r,
    isOffset: s
  } = e, i = u()(f.labelContainer, {
    [f.disabled]: r,
    [f.offset]: null == n && s
  });
  return (0, l.jsxs)("div", {
    className: f.option,
    children: [null != n ? (0, l.jsx)(o.default, {
      className: f.emoji,
      emojiId: n.id,
      emojiName: n.name,
      animated: n.animated
    }) : null, (0, l.jsxs)("div", {
      className: i,
      children: [(0, l.jsx)("strong", {
        className: f.label,
        children: t
      }), null != a ? (0, l.jsx)("span", {
        className: f.description,
        children: a
      }) : null]
    })]
  })
}

function S(e) {
  let {
    emoji: n,
    label: t
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsxs)("div", {
      className: u()(f.value, f.singleValue),
      children: [null != n ? (0, l.jsx)(o.default, {
        className: f.emoji,
        src: n.src,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
      }) : null, (0, l.jsx)("span", {
        className: f.singleValueLabel,
        children: t
      })]
    })
  })
}

function E(e) {
  let {
    options: n
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsx)("div", {
      className: f.value,
      children: n.map((e, n) => (0, l.jsxs)("div", {
        className: f.optionTag,
        children: [null != e.emoji ? (0, l.jsx)(o.default, {
          className: f.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, l.jsx)("span", {
          className: f.tag,
          children: e.label
        }, e.value)]
      }, n))
    })
  })
}

function v(e) {
  let {
    type: n,
    options: t,
    id: r,
    placeholder: u,
    maxValues: o,
    minValues: v,
    disabled: N
  } = e, h = a.useMemo(() => t.filter(e => e.default).map(e => e.value), [t]), {
    state: T,
    executeStateUpdate: g,
    visualState: x,
    isDisabled: y,
    error: O
  } = (0, c.useComponentState)(e, {
    type: n,
    values: h
  }), I = o > 1, j = x === m.ActionComponentState.LOADING, [_, L] = a.useState(!1), [M, R] = a.useState(() => new Set(t.filter(e => e.default).map(e => e.value))), [A, b] = a.useState(M), P = a.useMemo(() => t.some(e => null != e.emoji), [t]);
  a.useEffect(() => {
    if ((null == T ? void 0 : T.type) === i.ComponentType.STRING_SELECT) {
      let e = new Set(T.values);
      R(e), b(e)
    } else {
      let e = new Set(h);
      R(e), b(e)
    }
  }, [r, h, T]);
  let U = a.useCallback(() => {
    A !== M && g({
      type: i.ComponentType.STRING_SELECT,
      values: Array.from(M)
    }) && b(M)
  }, [M, A, b, g]);
  a.useEffect(() => {
    if (!_) !(M.size === A.size && Array.from(A).every(e => M.has(e))) && U()
  }, [_, M, A, U]);
  let w = s.singleSelect;
  I ? w = s.multiSelect : 0 === v && (w = s.toggleSelect);
  let D = (0, s.useVariableSelect)({
    value: M,
    onChange: e => R(e),
    onSelectInteraction: w
  });
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(s.Select, {
        isDisabled: N || y,
        className: f.select,
        options: t.map(e => ({
          ...e,
          disabled: I && !M.has(e.value) && M.size === o
        })),
        placeholder: null != u ? u : p.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => L(!1),
        onOpen: () => L(!0),
        maxVisibleItems: 5,
        closeOnSelect: !I,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, l.jsx)(C, {
          ...e,
          isDisabled: I && !M.has(e.value) && M.size === o,
          isOffset: P
        }),
        renderOptionValue: e => I ? (0, l.jsx)(E, {
          options: e
        }) : (0, l.jsx)(S, {
          ...e[0]
        }),
        ...D
      }), j ? (0, l.jsx)("div", {
        className: f.__invalid_loading,
        children: (0, l.jsx)(s.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != O ? (0, l.jsx)(d.InteractionStatusMessage, {
      ...(0, d.getFailedContent)(O),
      className: f.error
    }) : null]
  })
}