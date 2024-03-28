"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  u = n.n(s),
  o = n("481060"),
  i = n("596454"),
  r = n("911969"),
  d = n("114484"),
  c = n("970184"),
  m = n("280501"),
  p = n("689938"),
  f = n("706130");

function E(e) {
  let {
    emoji: t,
    label: n,
    description: a,
    isDisabled: s,
    isOffset: o
  } = e, r = u()(f.labelContainer, {
    [f.disabled]: s,
    [f.offset]: null == t && o
  });
  return (0, l.jsxs)("div", {
    className: f.option,
    children: [null != t ? (0, l.jsx)(i.default, {
      className: f.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, l.jsxs)("div", {
      className: r,
      children: [(0, l.jsx)("strong", {
        className: f.label,
        children: n
      }), null != a ? (0, l.jsx)("span", {
        className: f.description,
        children: a
      }) : null]
    })]
  })
}

function C(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsxs)("div", {
      className: u()(f.value, f.singleValue),
      children: [null != t ? (0, l.jsx)(i.default, {
        className: f.emoji,
        src: t.src,
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated
      }) : null, (0, l.jsx)("span", {
        className: f.singleValueLabel,
        children: n
      })]
    })
  })
}

function S(e) {
  let {
    options: t
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsx)("div", {
      className: f.value,
      children: t.map((e, t) => (0, l.jsxs)("div", {
        className: f.optionTag,
        children: [null != e.emoji ? (0, l.jsx)(i.default, {
          className: f.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, l.jsx)("span", {
          className: f.tag,
          children: e.label
        }, e.value)]
      }, t))
    })
  })
}

function T(e) {
  let {
    type: t,
    options: n,
    indices: s,
    placeholder: u,
    maxValues: i,
    minValues: T,
    disabled: v
  } = e, N = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: h,
    executeStateUpdate: _,
    visualState: I,
    isDisabled: g,
    error: O
  } = (0, c.useComponentState)(e, {
    type: t,
    values: N
  }), x = i > 1, y = I === m.ActionComponentState.LOADING, [L, j] = a.useState(!1), [A, M] = a.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [R, b] = a.useState(A), U = a.useMemo(() => n.some(e => null != e.emoji), [n]);
  a.useEffect(() => {
    if ((null == h ? void 0 : h.type) === r.ComponentType.STRING_SELECT) {
      let e = new Set(h.values);
      M(e), b(e)
    } else {
      let e = new Set(N);
      M(e), b(e)
    }
  }, [s, N, h]);
  let P = a.useCallback(() => {
    R !== A && _({
      type: r.ComponentType.STRING_SELECT,
      values: Array.from(A)
    }) && b(A)
  }, [A, R, b, _]);
  a.useEffect(() => {
    if (!L) !(A.size === R.size && Array.from(R).every(e => A.has(e))) && P()
  }, [L, A, R, P]);
  let w = o.singleSelect;
  x ? w = o.multiSelect : 0 === T && (w = o.toggleSelect);
  let G = (0, o.useVariableSelect)({
    value: A,
    onChange: e => M(e),
    onSelectInteraction: w
  });
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(o.Select, {
        isDisabled: v || g,
        className: f.select,
        options: n.map(e => ({
          ...e,
          disabled: x && !A.has(e.value) && A.size === i
        })),
        placeholder: null != u ? u : p.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => j(!1),
        onOpen: () => j(!0),
        maxVisibleItems: 5,
        closeOnSelect: !x,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, l.jsx)(E, {
          ...e,
          isDisabled: x && !A.has(e.value) && A.size === i,
          isOffset: U
        }),
        renderOptionValue: e => x ? (0, l.jsx)(S, {
          options: e
        }) : (0, l.jsx)(C, {
          ...e[0]
        }),
        ...G
      }), y ? (0, l.jsx)("div", {
        className: f.__invalid_loading,
        children: (0, l.jsx)(o.Dots, {
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