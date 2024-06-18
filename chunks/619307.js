"use strict";
n.d(t, {
  Ph: function() {
    return y
  },
  UN: function() {
    return D
  },
  Vn: function() {
    return p
  },
  cY: function() {
    return g
  },
  gz: function() {
    return L
  },
  nV: function() {
    return C
  },
  q4: function() {
    return G
  },
  s6: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(924826),
  l = n(91192),
  u = n(1561),
  _ = n(597442),
  d = n(235874),
  c = n(147479),
  E = n(481060),
  I = n(393238),
  T = n(434650),
  h = n(98650),
  S = n(86813),
  f = n(826026),
  N = n(441674),
  A = n(465670),
  m = n(748585),
  O = n(689938),
  R = n(46257);

function C(e) {
  let {
    value: t,
    onChange: n,
    serialize: i = e => String(e)
  } = e;
  return {
    select: e => n(e),
    isSelected: e => e === t,
    clear: () => n(null),
    serialize: i
  }
}

function p(e) {
  let {
    value: t,
    onChange: n,
    serialize: i = e => String(e)
  } = e;
  return {
    select: e => {
      let i = new Set(t);
      i.has(e) ? i.delete(e) : i.add(e), n(i)
    },
    isSelected: e => {
      var n;
      return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
    },
    clear: () => n(new Set),
    serialize: i
  }
}

function g(e) {
  let {
    value: t,
    onChange: n,
    onSelectInteraction: i,
    serialize: r = e => String(e)
  } = e;
  return {
    select: e => {
      let {
        newValues: r,
        updated: s
      } = i(e, t);
      if (!!s) n(r)
    },
    isSelected: e => {
      var n;
      return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
    },
    clear: () => n(new Set),
    serialize: r
  }
}

function L(e, t) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), {
    newValues: n,
    updated: !0
  }
}

function v(e, t) {
  return t.has(e) ? {
    newValues: new Set,
    updated: !0
  } : {
    newValues: new Set([e]),
    updated: !0
  }
}

function D(e, t) {
  return t.has(e) ? {
    newValues: t,
    updated: !1
  } : {
    newValues: new Set([e]),
    updated: !0
  }
}

function M(e) {
  return null == e ? void 0 : e.label
}

function P(e) {
  return e.map(e => M(e)).join(", ")
}

function y(e) {
  let {
    options: t,
    placeholder: n = O.Z.Messages.SELECT,
    className: s,
    isDisabled: a = !1,
    maxVisibleItems: l = 7,
    autoFocus: _ = !1,
    popoutWidth: c,
    clearable: h = !1,
    look: N = m.q.FILLED,
    onClose: C,
    onOpen: p,
    renderOptionLabel: g = M,
    renderOptionValue: L = P,
    popoutClassName: v,
    popoutPosition: D = "bottom",
    popoutLayerContext: y,
    optionClassName: b,
    closeOnSelect: G,
    select: w,
    isSelected: k,
    serialize: B,
    clear: x,
    hideIcon: V = !1,
    "aria-label": Z,
    "aria-labelledby": H
  } = e, [F, Y] = r.useState(!1), {
    ref: j,
    width: W,
    height: K
  } = (0, I.Z)(), z = r.useCallback(e => {
    F !== e && !a && (Y(e), e ? null == p || p() : null == C || C())
  }, [a, C, p, F]), q = r.useCallback(e => {
    F && !e && z(!1)
  }, [z, F]), X = (0, T.O)(q), Q = r.useCallback(e => {
    if (w(e), G) {
      var t;
      null === (t = j.current) || void 0 === t || t.focus()
    }
  }, [w, G]), J = r.useCallback(e => {
    e.stopPropagation(), null == x || x()
  }, [x]), $ = t.filter(e => k(e.value));
  r.useLayoutEffect(() => {
    if (_) {
      var e;
      null === (e = j.current) || void 0 === e || e.focus()
    }
  }, [_]);
  let ee = (0, E.useRedesignIconContext)().enabled;
  return (0, i.jsx)(d.y, {
    spacing: 0,
    animation: d.y.Animation.NONE,
    shouldShow: F,
    onRequestOpen: () => {
      z(!0)
    },
    onRequestClose: () => {
      z(!1)
    },
    renderPopout: e => {
      let {
        closePopout: n,
        position: r,
        updatePosition: s
      } = e;
      return (0, i.jsx)(U, {
        className: v,
        closeOnSelect: G,
        maxVisibleItems: l,
        width: null != c ? c : W,
        isSelected: k,
        closePopout: n,
        buttonHeight: null != K ? K : 0,
        onSelect: Q,
        options: t,
        serialize: B,
        renderOptionLabel: g,
        optionClassName: b,
        updatePosition: s,
        popoutPosition: r
      })
    },
    position: D,
    layerContext: y,
    children: (e, t) => {
      let {
        onClick: r,
        onKeyDown: l,
        ..._
      } = e, {
        isShown: d,
        position: c
      } = t, E = d ? f.Z : S.Z, I = ee ? 18 : 24;
      return (0, i.jsxs)(u.P, {
        role: "button",
        "aria-disabled": a,
        innerRef: e => {
          j.current = e, X.current = e
        },
        onClick: a ? void 0 : e => {
          r(e), z(!F)
        },
        onKeyDown: e => {
          "ArrowDown" === e.key ? z(!0) : "Escape" === e.key && (e.stopPropagation(), z(!1)), l(e)
        },
        ..._,
        className: o()(R.select, s, {
          [R.open]: d,
          [R.disabled]: a,
          [R.selectPositionTop]: "top" === c,
          [R.lookFilled]: N === m.q.FILLED
        }),
        "aria-haspopup": "listbox",
        "aria-expanded": d,
        "aria-label": Z,
        "aria-labelledby": H,
        children: [$.length > 0 ? (0, i.jsx)("span", {
          className: R.value,
          children: L($)
        }) : (0, i.jsx)("span", {
          className: R.placeholder,
          children: n
        }), (0, i.jsxs)("div", {
          className: R.icons,
          children: [h ? (0, i.jsx)(u.P, {
            role: "button",
            "aria-disabled": a,
            onClick: J,
            "aria-label": O.Z.Messages.CLEAR,
            children: (0, i.jsx)(A.Z, {
              width: 16,
              height: 16,
              className: R.clear
            })
          }) : null, V ? null : (0, i.jsx)(E, {
            width: I,
            height: I
          })]
        })]
      })
    }
  })
}

function U(e) {
  let {
    className: t,
    onSelect: n,
    closePopout: s,
    closeOnSelect: u = !0,
    isSelected: d,
    options: E,
    width: I,
    maxVisibleItems: T,
    renderOptionLabel: S,
    serialize: f,
    optionClassName: N,
    buttonHeight: A,
    updatePosition: m,
    popoutPosition: O
  } = e, [C, p] = r.useState(0), g = r.useRef(null), L = r.useId(), v = (0, a.ZP)({
    id: L,
    async scrollToEnd() {},
    async scrollToStart() {},
    isEnabled: !0,
    wrap: !0
  }), D = r.useRef(null);
  (0, _.T)(D), r.useLayoutEffect(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.focus()
  }, []), r.useEffect(() => {
    A > 0 && m()
  }, [A, m]), (0, h.Z)(m), r.useLayoutEffect(() => {
    var e, t;
    let n = null === (t = g.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
    null != n && p(n)
  }, [T]), r.useEffect(() => {
    m()
  }, [m, C]);
  let M = r.useCallback(e => {
      n(e), u && s()
    }, [s, n, u]),
    P = E.map((e, t) => {
      var n;
      return (0, i.jsx)(b, {
        isSelected: d(e.value),
        value: e.value,
        label: S(e),
        onSelect: M,
        className: N,
        isDisabled: e.disabled,
        serialize: f
      }, null !== (n = e.key) && void 0 !== n ? n : t)
    }),
    y = E.length <= T ? c.xV : c.h2;
  return (0, i.jsx)(l.bG, {
    navigator: v,
    children: (0, i.jsx)(l.SJ, {
      children: e => {
        let {
          ref: n,
          ...r
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(y, {
            className: o()(R.popout, t, {
              [R.popoutPositionTop]: "top" === O
            }),
            style: {
              width: I,
              maxHeight: C
            },
            ref: e => {
              var t;
              let i = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
              n.current = i, D.current = i
            },
            ...r,
            role: "listbox",
            children: P
          }), (0, i.jsx)("div", {
            "aria-hidden": !0,
            ref: g,
            className: R.measurement,
            children: P.slice(0, T)
          })]
        })
      }
    })
  })
}

function b(e) {
  let {
    className: t,
    value: n,
    label: r,
    onSelect: s,
    isSelected: a,
    isDisabled: _,
    serialize: d
  } = e, c = (0, l.JA)(d(n));
  return (0, i.jsxs)(u.P, {
    focusProps: {
      enabled: !1
    },
    className: o()(R.option, t),
    onClick: () => !_ && s(n),
    ...c,
    "aria-selected": a,
    "aria-disabled": _,
    role: "option",
    children: [r, a && (0, i.jsx)(N.Z, {
      backgroundColor: "white",
      className: R.selectedIcon,
      width: 20,
      height: 20
    })]
  })
}

function G(e) {
  let {
    value: t,
    onChange: n,
    ...r
  } = e, s = C({
    value: t,
    onChange: n
  });
  return (0, i.jsx)(y, {
    ...r,
    ...s
  })
}