"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007"), s("860677");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  o = s("594203"),
  d = s("219555"),
  u = s("673122"),
  c = s("955198"),
  E = s("646435");

function _(e) {
  let {
    resizableNode: t,
    onResize: s,
    onResizeEnd: l
  } = e, n = (0, o.default)({
    minDimension: u.CHIPLET_TEXT_AREA_MIN_HEIGHT,
    resizableDomNodeRef: t,
    onElementResize: s,
    onElementResizeEnd: l,
    orientation: o.ResizeOrientation.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, a.jsx)("div", {
    onMouseDown: n,
    className: E.resizeHandle
  })
}
let I = l.forwardRef(function(e, t) {
  let {
    children: s,
    onFocus: n,
    onBlur: i,
    onClick: o
  } = e, d = l.useRef(null), [c, I] = l.useState(u.CHIPLET_TEXT_AREA_MIN_HEIGHT);
  return (0, a.jsxs)(r.Clickable, {
    className: E.textArea,
    onFocus: n,
    onBlur: i,
    onClick: o,
    innerRef: d,
    ignoreKeyPress: !0,
    style: {
      minHeight: c
    },
    children: [(0, a.jsx)(r.AdvancedScroller, {
      className: E.innerScroller,
      style: {
        minHeight: c - 2
      },
      ref: t,
      children: s
    }), (0, a.jsx)(_, {
      resizableNode: d,
      onResize: I,
      onResizeEnd: e => {
        I(e), null == n || n()
      }
    })]
  })
});

function T(e) {
  var t;
  let {
    initialValue: s,
    onChangeTags: n,
    onChangeNewTagValue: o,
    tagErrors: u = {},
    placeholder: _,
    className: T,
    maxTags: S
  } = e, f = l.useRef(null), m = l.useRef(null), N = l.useRef(null), g = (0, c.useChipletState)(s), {
    handlePasteEvent: h,
    handleInputChange: C,
    handleKeyDown: R,
    handleContainerKeyUp: x,
    handleRemoveTag: L,
    handleTagChangeEvent: O,
    handleSelectTag: A,
    handleUnselectTag: p,
    handleResetTagSelections: M,
    handleInputBlurEvent: D
  } = (0, c.useChipletStateHandlers)(g, {
    scrollerRef: N,
    mainInputRef: f,
    mainContainerRef: m
  }), {
    state: {
      value: v,
      tags: G,
      selections: j,
      isSelecting: U
    }
  } = g, [P, b] = l.useState(!1), B = l.useCallback(() => {
    var e;
    b(!1), M(), null === (e = f.current) || void 0 === e || e.focus({
      preventScroll: !0
    })
  }, [M]);
  l.useEffect(() => {
    !P && n(G)
  }, [n, G, P]), l.useEffect(() => {
    !P && o(v)
  }, [o, v, P]);
  let y = l.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && B(), b(!1)
    }, [B]),
    F = l.useCallback(e => t => {
      if (t) {
        var s;
        let t = j.includes(G[e]);
        null === (s = f.current) || void 0 === s || s.focus(), t ? p(e) : (A(e), setImmediate(() => {
          var e;
          null === (e = f.current) || void 0 === e || e.blur(), setTimeout(() => {
            var e;
            return null === (e = m.current) || void 0 === e ? void 0 : e.focus()
          }, 16)
        }))
      } else p(e, !0), b(!0)
    }, [A, p, j, G]);
  return (0, a.jsxs)("div", {
    className: i(E.mainContainer, T),
    ref: m,
    tabIndex: 0,
    onKeyUp: x,
    children: [(0, a.jsxs)(I, {
      ref: N,
      onClick: B,
      children: [G.map((e, t) => (0, a.jsx)(d.default, {
        value: e,
        onChange: O(t),
        onBlur: y,
        onFocus: F(t),
        onRemove: () => L(t),
        isSelected: j.includes(e),
        isSelecting: U,
        error: u[e],
        forceShowErrorTooltip: !P && t === G.length - 1
      }, t)), (0, a.jsx)("input", {
        className: i(E.mainTextInput, {
          [E.isEditingOtherNodes]: P
        }),
        ref: f,
        onChange: C,
        onKeyDownCapture: R,
        onPaste: h,
        onBlur: D,
        placeholder: 0 === G.length ? _ : void 0,
        value: v
      })]
    }), null != S && (0, a.jsxs)(r.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: E.maxTags,
      children: [null !== (t = null == G ? void 0 : G.length) && void 0 !== t ? t : 0, "/", S]
    })]
  })
}