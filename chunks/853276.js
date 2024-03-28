"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("393238"),
  u = s("607070"),
  c = s("465670"),
  E = s("596390"),
  _ = s("574248");
let I = l.forwardRef(function(e, t) {
  var s, n;
  let {
    value: r,
    isSelected: d,
    isEditing: u,
    forceShowErrorTooltip: c = !1,
    error: E
  } = e, [I, T, S] = l.useMemo(() => {
    if (null == E) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: t = r.length
    } = null != E ? E : {}, s = r.slice(0, e), a = r.slice(e, e + t);
    return [s, a, r.slice(e + t)]
  }, [r, E]);
  return null == E ? (0, a.jsx)("div", {
    className: i()(_.chipletValue, {
      [_.isEditing]: u,
      [_.isSelected]: d
    }),
    ref: t,
    children: r
  }) : (null !== (s = null == I ? void 0 : I.length) && void 0 !== s ? s : 0) + (null !== (n = null == T ? void 0 : T.length) && void 0 !== n ? n : 0) > 70 ? (0, a.jsx)(o.Tooltip, {
    "aria-label": E.message,
    text: () => (0, a.jsxs)("div", {
      "aria-label": E.message,
      children: [E.message, " ", (0, a.jsx)("span", {
        className: _.errorOverflowValue,
        children: T
      })]
    }),
    tooltipClassName: _.errorTooltip,
    color: o.Tooltip.Colors.RED,
    position: "left",
    forceOpen: c || void 0,
    children: e => (0, a.jsxs)("div", {
      ref: t,
      className: i()(_.chipletValue, {
        [_.isEditing]: u,
        [_.isError]: null != E && !u,
        [_.isOverflowing]: null != E && !u
      }),
      ...e,
      children: [(0, a.jsx)("span", {
        children: I
      }), (0, a.jsx)("span", {
        className: _.errorValue,
        children: T
      }), (0, a.jsx)("span", {
        children: S
      })]
    })
  }) : (0, a.jsxs)("div", {
    ref: t,
    className: i()(_.chipletValue, {
      [_.isEditing]: u,
      [_.isError]: null != E && !u
    }),
    children: [(0, a.jsx)("span", {
      children: I
    }), (0, a.jsx)(o.Tooltip, {
      text: E.message,
      color: o.Tooltip.Colors.RED,
      position: "top",
      forceOpen: c || void 0,
      children: e => (0, a.jsx)("span", {
        ...e,
        className: _.errorValue,
        children: T
      })
    }), (0, a.jsx)("span", {
      children: S
    })]
  })
});

function T(e) {
  let {
    value: t,
    onChange: s,
    onBlur: n,
    onFocus: T,
    onRemove: S,
    isSelected: f,
    isSelecting: m,
    error: N,
    forceShowErrorTooltip: g
  } = e, h = l.useRef(null), C = l.useRef(null), [R, x] = l.useState(!1), {
    ref: L,
    width: O = 0
  } = (0, d.default)(R), {
    ref: A,
    width: p = 0
  } = (0, d.default)(R), M = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [D, v] = l.useState(g), j = l.useRef(null), G = O > p ? O : p;
  l.useEffect(() => {
    g ? (v(!0), j.current = setTimeout(() => {
      v(!1), j.current = null
    }, E.CHIPLET_ERROR_FORCE_SHOW_TOOLTIP_TIMER_MS)) : v(!1)
  }, [g]), l.useEffect(() => () => {
    clearTimeout(j.current)
  }, []);
  let U = l.useCallback(e => {
      s(e.target.value)
    }, [s]),
    P = l.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (t.trim().length <= 0 && S(), null != h.current && null != L.current && null != C.current) {
        var s;
        h.current.scrollTo(0, 0), h.current.setSelectionRange(0, 0), h.current.scrollLeft = 0, L.current.scrollLeft = 0, (null === (s = C.current) || void 0 === s ? void 0 : s.ref) != null && (C.current.ref.scrollLeft = 0)
      }
      x(!1), n(e)
    }, [t, L, n, S]),
    b = l.useCallback(e => {
      let s = t.trim().length <= 0;
      E.NEXT_CHIP_INPUT_KEY.has(e.key) ? (e.preventDefault(), e.stopPropagation(), P(!0)) : "Backspace" === e.key && s && (e.preventDefault(), e.stopPropagation(), P(!0))
    }, [P, t]),
    B = l.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      T(t), t ? e.preventDefault() : x(!0), e.stopPropagation()
    }, [T]),
    y = l.useCallback(e => {
      S()
    }, [S]);
  return (0, a.jsx)("div", {
    className: _.chipletFlexContainer,
    children: (0, a.jsxs)("div", {
      ref: A,
      className: i()(_.chipletContainer, {
        [_.isEditing]: R,
        [_.smallBlink]: !R && !M,
        [_.isSelected]: f,
        [_.isSelecting]: m,
        [_.isError]: null != N && !R
      }),
      children: [(0, a.jsxs)(o.Clickable, {
        tag: "div",
        onBlur: () => P(!1),
        onClick: B,
        ignoreKeyPress: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1),
        className: i()(_.chipletContainerInner, {
          [_.isSelecting]: m,
          [_.isEditing]: R
        }),
        ref: C,
        children: [(0, a.jsx)("input", {
          className: i()(_.chipletInput, {
            [_.isEditing]: R,
            [_.isSelecting]: m
          }),
          ref: h,
          onChange: U,
          onKeyDownCapture: b,
          value: t,
          style: {
            width: G > 0 ? G : "calc(".concat(t.length, "ch + 10px)")
          }
        }), (0, a.jsx)(I, {
          ref: L,
          value: t,
          isEditing: R,
          isSelected: f,
          error: N,
          forceShowErrorTooltip: D || R
        })]
      }), !R && (0, a.jsx)(o.Clickable, {
        className: _.closeIconContainer,
        onClick: y,
        children: (0, a.jsx)(c.default, {
          className: _.closeIcon,
          width: 12,
          height: 12
        })
      })]
    })
  })
}