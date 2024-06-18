"use strict";
t.d(s, {
  Z: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(393238),
  d = t(607070),
  u = t(465670),
  E = t(596390),
  _ = t(738434);
let I = i.forwardRef(function(e, s) {
  var t, l;
  let {
    value: r,
    isSelected: c,
    isEditing: d,
    forceShowErrorTooltip: u = !1,
    error: E
  } = e, [I, T, N] = i.useMemo(() => {
    if (null == E) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: s = r.length
    } = null != E ? E : {}, t = r.slice(0, e), n = r.slice(e, e + s);
    return [t, n, r.slice(e + s)]
  }, [r, E]);
  return null == E ? (0, n.jsx)("div", {
    className: a()(_.chipletValue, {
      [_.isEditing]: d,
      [_.isSelected]: c
    }),
    ref: s,
    children: r
  }) : (null !== (t = null == I ? void 0 : I.length) && void 0 !== t ? t : 0) + (null !== (l = null == T ? void 0 : T.length) && void 0 !== l ? l : 0) > 70 ? (0, n.jsx)(o.Tooltip, {
    "aria-label": E.message,
    text: () => (0, n.jsxs)("div", {
      "aria-label": E.message,
      children: [E.message, " ", (0, n.jsx)("span", {
        className: _.errorOverflowValue,
        children: T
      })]
    }),
    tooltipClassName: _.errorTooltip,
    color: o.Tooltip.Colors.RED,
    position: "left",
    forceOpen: u || void 0,
    children: e => (0, n.jsxs)("div", {
      ref: s,
      className: a()(_.chipletValue, {
        [_.isEditing]: d,
        [_.isError]: null != E && !d,
        [_.isOverflowing]: null != E && !d
      }),
      ...e,
      children: [(0, n.jsx)("span", {
        children: I
      }), (0, n.jsx)("span", {
        className: _.errorValue,
        children: T
      }), (0, n.jsx)("span", {
        children: N
      })]
    })
  }) : (0, n.jsxs)("div", {
    ref: s,
    className: a()(_.chipletValue, {
      [_.isEditing]: d,
      [_.isError]: null != E && !d
    }),
    children: [(0, n.jsx)("span", {
      children: I
    }), (0, n.jsx)(o.Tooltip, {
      text: E.message,
      color: o.Tooltip.Colors.RED,
      position: "top",
      forceOpen: u || void 0,
      children: e => (0, n.jsx)("span", {
        ...e,
        className: _.errorValue,
        children: T
      })
    }), (0, n.jsx)("span", {
      children: N
    })]
  })
});

function T(e) {
  let {
    value: s,
    onChange: t,
    onBlur: l,
    onFocus: T,
    onRemove: N,
    isSelected: m,
    isSelecting: S,
    error: h,
    forceShowErrorTooltip: g
  } = e, x = i.useRef(null), C = i.useRef(null), [R, L] = i.useState(!1), {
    ref: O,
    width: A = 0
  } = (0, c.Z)(R), {
    ref: p,
    width: M = 0
  } = (0, c.Z)(R), f = (0, r.e7)([d.Z], () => d.Z.useReducedMotion), [v, D] = i.useState(g), Z = i.useRef(null), j = A > M ? A : M;
  i.useEffect(() => {
    g ? (D(!0), Z.current = setTimeout(() => {
      D(!1), Z.current = null
    }, E.I5)) : D(!1)
  }, [g]), i.useEffect(() => () => {
    clearTimeout(Z.current)
  }, []);
  let U = i.useCallback(e => {
      t(e.target.value)
    }, [t]),
    G = i.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (s.trim().length <= 0 && N(), null != x.current && null != O.current && null != C.current) {
        var t;
        x.current.scrollTo(0, 0), x.current.setSelectionRange(0, 0), x.current.scrollLeft = 0, O.current.scrollLeft = 0, (null === (t = C.current) || void 0 === t ? void 0 : t.ref) != null && (C.current.ref.scrollLeft = 0)
      }
      L(!1), l(e)
    }, [s, O, l, N]),
    P = i.useCallback(e => {
      let t = s.trim().length <= 0;
      E.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), G(!0)) : "Backspace" === e.key && t && (e.preventDefault(), e.stopPropagation(), G(!0))
    }, [G, s]),
    b = i.useCallback(e => {
      let s = e.metaKey || e.ctrlKey;
      T(s), s ? e.preventDefault() : L(!0), e.stopPropagation()
    }, [T]),
    B = i.useCallback(e => {
      N()
    }, [N]);
  return (0, n.jsx)("div", {
    className: _.chipletFlexContainer,
    children: (0, n.jsxs)("div", {
      ref: p,
      className: a()(_.chipletContainer, {
        [_.isEditing]: R,
        [_.smallBlink]: !R && !f,
        [_.isSelected]: m,
        [_.isSelecting]: S,
        [_.isError]: null != h && !R
      }),
      children: [(0, n.jsxs)(o.Clickable, {
        tag: "div",
        onBlur: () => G(!1),
        onClick: b,
        ignoreKeyPress: !0,
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        className: a()(_.chipletContainerInner, {
          [_.isSelecting]: S,
          [_.isEditing]: R
        }),
        ref: C,
        children: [(0, n.jsx)("input", {
          className: a()(_.chipletInput, {
            [_.isEditing]: R,
            [_.isSelecting]: S
          }),
          ref: x,
          onChange: U,
          onKeyDownCapture: P,
          value: s,
          style: {
            width: j > 0 ? j : "calc(".concat(s.length, "ch + 10px)")
          }
        }), (0, n.jsx)(I, {
          ref: O,
          value: s,
          isEditing: R,
          isSelected: m,
          error: h,
          forceShowErrorTooltip: v || R
        })]
      }), !R && (0, n.jsx)(o.Clickable, {
        className: _.closeIconContainer,
        onClick: B,
        children: (0, n.jsx)(u.Z, {
          className: _.closeIcon,
          width: 12,
          height: 12
        })
      })]
    })
  })
}