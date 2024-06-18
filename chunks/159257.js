"use strict";
n.d(t, {
  o: function() {
    return f
  },
  p: function() {
    return p
  }
});
var r = n(182823),
  i = n(882932),
  a = n(470079),
  o = n(612001),
  s = n(251433),
  u = n(616073),
  c = n(706682);
let l = new WeakMap;

function d(e, t) {
  let n = l.get(e);
  if (!n) throw Error("Unknown slider state");
  return `${n.id}-${t}`
}

function f(e, t, n) {
  var c;
  let {
    labelProps: f,
    fieldProps: p
  } = (0, s.N)(e), h = "vertical" === e.orientation;
  l.set(t, {
    id: null !== (c = f.id) && void 0 !== c ? c : p.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"]
  });
  let {
    direction: m
  } = (0, u.bU)(), {
    addGlobalListener: g,
    removeGlobalListener: _
  } = (0, r.xi)(), b = (0, a.useRef)(null), v = "rtl" === m, y = (0, a.useRef)(null), {
    moveProps: E
  } = (0, o.r_)({
    onMoveStart() {
      y.current = null
    },
    onMove({
      deltaX: e,
      deltaY: r
    }) {
      let {
        height: a,
        width: o
      } = n.current.getBoundingClientRect(), s = h ? a : o;
      null == y.current && (y.current = t.getThumbPercent(b.current) * s);
      let u = h ? r : e;
      if ((h || v) && (u = -u), y.current += u, null != b.current && n.current) {
        let e = (0, i.uZ)(y.current / s, 0, 1);
        t.setThumbPercent(b.current, e)
      }
    },
    onMoveEnd() {
      null != b.current && (t.setThumbDragging(b.current, !1), b.current = null)
    }
  }), S = (0, a.useRef)(void 0), x = (r, i, a, o) => {
    if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
      let e, {
          height: s,
          width: u,
          top: c,
          left: l
        } = n.current.getBoundingClientRect(),
        d = ((h ? o : a) - (h ? c : l)) / (h ? s : u);
      ("rtl" === m || h) && (d = 1 - d);
      let f = t.getPercentValue(d),
        p = t.values.findIndex(e => f - e < 0);
      (e = 0 === p ? p : -1 === p ? t.values.length - 1 : Math.abs(t.values[p - 1] - f) < Math.abs(t.values[p] - f) ? p - 1 : p) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), b.current = e, t.setFocusedThumb(e), S.current = i, t.setThumbDragging(b.current, !0), t.setThumbValue(e, f), g(window, "mouseup", w, !1), g(window, "touchend", w, !1), g(window, "pointerup", w, !1)) : b.current = null
    }
  }, w = e => {
    var n, r;
    (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === S.current && (null != b.current && (t.setThumbDragging(b.current, !1), b.current = null), _(window, "mouseup", w, !1), _(window, "touchend", w, !1), _(window, "pointerup", w, !1))
  };
  return "htmlFor" in f && f.htmlFor && (delete f.htmlFor, f.onClick = () => {
    var e;
    null === (e = document.getElementById(d(t, 0))) || void 0 === e || e.focus(), (0, o._w)("keyboard")
  }), {
    labelProps: f,
    groupProps: {
      role: "group",
      ...p
    },
    trackProps: (0, r.dG)({
      onMouseDown(e) {
        0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && x(e, void 0, e.clientX, e.clientY)
      },
      onPointerDown(e) {
        ("mouse" !== e.pointerType || 0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey) && x(e, e.pointerId, e.clientX, e.clientY)
      },
      onTouchStart(e) {
        x(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, E),
    outputProps: {
      htmlFor: t.values.map((e, n) => d(t, n)).join(" "),
      "aria-live": "off"
    }
  }
}

function p(e, t) {
  var n;
  let {
    index: f = 0,
    isRequired: p,
    validationState: h,
    isInvalid: m,
    trackRef: g,
    inputRef: _,
    orientation: b = t.orientation,
    name: v
  } = e, y = e.isDisabled || t.isDisabled, E = "vertical" === b, {
    direction: S
  } = (0, u.bU)(), {
    addGlobalListener: x,
    removeGlobalListener: w
  } = (0, r.xi)(), C = l.get(t), {
    labelProps: T,
    fieldProps: D
  } = (0, s.N)({
    ...e,
    id: d(t, f),
    "aria-labelledby": `${C.id} ${null!==(n=e["aria-labelledby"])&&void 0!==n?n:""}`.trim()
  }), M = t.values[f], O = (0, a.useCallback)(() => {
    _.current && (0, r.Ao)(_.current)
  }, [_]), A = t.focusedThumb === f;
  (0, a.useEffect)(() => {
    A && O()
  }, [A, O]);
  let k = "rtl" === S,
    R = (0, a.useRef)(null),
    {
      keyboardProps: N
    } = (0, o.v5)({
      onKeyDown(e) {
        let {
          getThumbMaxValue: n,
          getThumbMinValue: r,
          decrementThumb: i,
          incrementThumb: a,
          setThumbValue: o,
          setThumbDragging: s,
          pageSize: u
        } = t;
        if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
          e.continuePropagation();
          return
        }
        switch (e.preventDefault(), s(f, !0), e.key) {
          case "PageUp":
            a(f, u);
            break;
          case "PageDown":
            i(f, u);
            break;
          case "Home":
            o(f, r(f));
            break;
          case "End":
            o(f, n(f))
        }
        s(f, !1)
      }
    }),
    {
      moveProps: I
    } = (0, o.r_)({
      onMoveStart() {
        R.current = null, t.setThumbDragging(f, !0)
      },
      onMove({
        deltaX: e,
        deltaY: n,
        pointerType: r,
        shiftKey: a
      }) {
        let {
          getThumbPercent: o,
          setThumbPercent: s,
          decrementThumb: u,
          incrementThumb: c,
          step: l,
          pageSize: d
        } = t, {
          width: p,
          height: h
        } = g.current.getBoundingClientRect(), m = E ? h : p;
        if (null == R.current && (R.current = o(f) * m), "keyboard" === r) e > 0 && k || e < 0 && !k || n > 0 ? u(f, a ? d : l) : c(f, a ? d : l);
        else {
          let t = E ? n : e;
          (E || k) && (t = -t), R.current += t, s(f, (0, i.uZ)(R.current / m, 0, 1))
        }
      },
      onMoveEnd() {
        t.setThumbDragging(f, !1)
      }
    });
  t.setThumbEditable(f, !y);
  let {
    focusableProps: L
  } = (0, c.kc)((0, r.dG)(e, {
    onFocus: () => t.setFocusedThumb(f),
    onBlur: () => t.setFocusedThumb(void 0)
  }), _), P = (0, a.useRef)(void 0), B = e => {
    O(), P.current = e, t.setThumbDragging(f, !0), x(window, "mouseup", F, !1), x(window, "touchend", F, !1), x(window, "pointerup", F, !1)
  }, F = e => {
    var n, r;
    (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === P.current && (O(), t.setThumbDragging(f, !1), w(window, "mouseup", F, !1), w(window, "touchend", F, !1), w(window, "pointerup", F, !1))
  }, U = t.getThumbPercent(f);
  (E || "rtl" === S) && (U = 1 - U);
  let j = y ? {} : (0, r.dG)(N, I, {
    onMouseDown: e => {
      0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && B()
    },
    onPointerDown: e => {
      0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && B(e.pointerId)
    },
    onTouchStart: e => {
      B(e.changedTouches[0].identifier)
    }
  });
  return (0, r.y$)(_, M, e => {
    t.setThumbValue(f, e)
  }), {
    inputProps: (0, r.dG)(L, D, {
      type: "range",
      tabIndex: y ? void 0 : 0,
      min: t.getThumbMinValue(f),
      max: t.getThumbMaxValue(f),
      step: t.step,
      value: M,
      name: v,
      disabled: y,
      "aria-orientation": b,
      "aria-valuetext": t.getThumbValueLabel(f),
      "aria-required": p || void 0,
      "aria-invalid": m || "invalid" === h || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-describedby": [C["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
      "aria-details": [C["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
      onChange: e => {
        t.setThumbValue(f, parseFloat(e.target.value))
      }
    }),
    thumbProps: {
      ...j,
      style: {
        position: "absolute",
        [E ? "top" : "left"]: `${100*U}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps: T,
    isDragging: t.isThumbDragging(f),
    isDisabled: y,
    isFocused: A
  }
}