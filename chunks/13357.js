"use strict";
n.r(t), n.d(t, {
  useSlider: function() {
    return l
  },
  useSliderThumb: function() {
    return f
  }
}), n("222007"), n("70102");
var r = n("290895"),
  i = n("884691"),
  o = n("495912"),
  s = n("825167"),
  a = n("181551"),
  c = n("780095");
let u = new WeakMap;

function d(e, t) {
  let n = u.get(e);
  if (!n) throw Error("Unknown slider state");
  return "".concat(n.id, "-").concat(t)
}

function l(e, t, n) {
  var c;
  let {
    labelProps: l,
    fieldProps: f
  } = (0, s.useLabel)(e), p = "vertical" === e.orientation;
  u.set(t, {
    id: null !== (c = l.id) && void 0 !== c ? c : f.id,
    "aria-describedby": e["aria-describedby"],
    "aria-details": e["aria-details"]
  });
  let {
    direction: h
  } = (0, a.useLocale)(), {
    addGlobalListener: g,
    removeGlobalListener: b
  } = (0, r.useGlobalListeners)(), v = (0, i.useRef)(null), m = "rtl" === h, y = (0, i.useRef)(null), {
    moveProps: x
  } = (0, o.useMove)({
    onMoveStart() {
      y.current = null
    },
    onMove(e) {
      let {
        deltaX: i,
        deltaY: o
      } = e, {
        height: s,
        width: a
      } = n.current.getBoundingClientRect(), c = p ? s : a;
      null == y.current && (y.current = t.getThumbPercent(v.current) * c);
      let u = p ? o : i;
      if ((p || m) && (u = -u), y.current += u, null != v.current && n.current) {
        let e = (0, r.clamp)(y.current / c, 0, 1);
        t.setThumbPercent(v.current, e)
      }
    },
    onMoveEnd() {
      null != v.current && (t.setThumbDragging(v.current, !1), v.current = null)
    }
  }), w = (0, i.useRef)(void 0), S = (r, i, o, s) => {
    if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
      let e, {
          height: a,
          width: c,
          top: u,
          left: d
        } = n.current.getBoundingClientRect(),
        l = ((p ? s : o) - (p ? u : d)) / (p ? a : c);
      ("rtl" === h || p) && (l = 1 - l);
      let f = t.getPercentValue(l),
        b = t.values.findIndex(e => f - e < 0);
      (e = 0 === b ? b : -1 === b ? t.values.length - 1 : Math.abs(t.values[b - 1] - f) < Math.abs(t.values[b] - f) ? b - 1 : b) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), v.current = e, t.setFocusedThumb(e), w.current = i, t.setThumbDragging(v.current, !0), t.setThumbValue(e, f), g(window, "mouseup", k, !1), g(window, "touchend", k, !1), g(window, "pointerup", k, !1)) : v.current = null
    }
  }, k = e => {
    var n, r;
    (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === w.current && (null != v.current && (t.setThumbDragging(v.current, !1), v.current = null), b(window, "mouseup", k, !1), b(window, "touchend", k, !1), b(window, "pointerup", k, !1))
  };
  return "htmlFor" in l && l.htmlFor && (delete l.htmlFor, l.onClick = () => {
    var e;
    null === (e = document.getElementById(d(t, 0))) || void 0 === e || e.focus(), (0, o.setInteractionModality)("keyboard")
  }), {
    labelProps: l,
    groupProps: {
      role: "group",
      ...f
    },
    trackProps: (0, r.mergeProps)({
      onMouseDown(e) {
        0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && S(e, void 0, e.clientX, e.clientY)
      },
      onPointerDown(e) {
        ("mouse" !== e.pointerType || 0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey) && S(e, e.pointerId, e.clientX, e.clientY)
      },
      onTouchStart(e) {
        S(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, x),
    outputProps: {
      htmlFor: t.values.map((e, n) => d(t, n)).join(" "),
      "aria-live": "off"
    }
  }
}

function f(e, t) {
  var n;
  let {
    index: l = 0,
    isRequired: f,
    validationState: p,
    isInvalid: h,
    trackRef: g,
    inputRef: b,
    orientation: v = t.orientation,
    name: m
  } = e, y = e.isDisabled || t.isDisabled, x = "vertical" === v, {
    direction: w
  } = (0, a.useLocale)(), {
    addGlobalListener: S,
    removeGlobalListener: k
  } = (0, r.useGlobalListeners)(), _ = u.get(t), {
    labelProps: E,
    fieldProps: M
  } = (0, s.useLabel)({
    ...e,
    id: d(t, l),
    "aria-labelledby": "".concat(_.id, " ").concat(null !== (n = e["aria-labelledby"]) && void 0 !== n ? n : "").trim()
  }), D = t.values[l], C = (0, i.useCallback)(() => {
    b.current && (0, r.focusWithoutScrolling)(b.current)
  }, [b]), P = t.focusedThumb === l;
  (0, i.useEffect)(() => {
    P && C()
  }, [P, C]);
  let T = "rtl" === w,
    A = (0, i.useRef)(null),
    {
      keyboardProps: R
    } = (0, o.useKeyboard)({
      onKeyDown(e) {
        let {
          getThumbMaxValue: n,
          getThumbMinValue: r,
          decrementThumb: i,
          incrementThumb: o,
          setThumbValue: s,
          setThumbDragging: a,
          pageSize: c
        } = t;
        if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
          e.continuePropagation();
          return
        }
        switch (e.preventDefault(), a(l, !0), e.key) {
          case "PageUp":
            o(l, c);
            break;
          case "PageDown":
            i(l, c);
            break;
          case "Home":
            s(l, r(l));
            break;
          case "End":
            s(l, n(l))
        }
        a(l, !1)
      }
    }),
    {
      moveProps: I
    } = (0, o.useMove)({
      onMoveStart() {
        A.current = null, t.setThumbDragging(l, !0)
      },
      onMove(e) {
        let {
          deltaX: n,
          deltaY: i,
          pointerType: o,
          shiftKey: s
        } = e, {
          getThumbPercent: a,
          setThumbPercent: c,
          decrementThumb: u,
          incrementThumb: d,
          step: f,
          pageSize: p
        } = t, {
          width: h,
          height: b
        } = g.current.getBoundingClientRect(), v = x ? b : h;
        if (null == A.current && (A.current = a(l) * v), "keyboard" === o) n > 0 && T || n < 0 && !T || i > 0 ? u(l, s ? p : f) : d(l, s ? p : f);
        else {
          let e = x ? i : n;
          (x || T) && (e = -e), A.current += e, c(l, (0, r.clamp)(A.current / v, 0, 1))
        }
      },
      onMoveEnd() {
        t.setThumbDragging(l, !1)
      }
    });
  t.setThumbEditable(l, !y);
  let {
    focusableProps: O
  } = (0, c.useFocusable)((0, r.mergeProps)(e, {
    onFocus: () => t.setFocusedThumb(l),
    onBlur: () => t.setFocusedThumb(void 0)
  }), b), j = (0, i.useRef)(void 0), N = e => {
    C(), j.current = e, t.setThumbDragging(l, !0), S(window, "mouseup", L, !1), S(window, "touchend", L, !1), S(window, "pointerup", L, !1)
  }, L = e => {
    var n, r;
    (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === j.current && (C(), t.setThumbDragging(l, !1), k(window, "mouseup", L, !1), k(window, "touchend", L, !1), k(window, "pointerup", L, !1))
  }, F = t.getThumbPercent(l);
  (x || "rtl" === w) && (F = 1 - F);
  let B = y ? {} : (0, r.mergeProps)(R, I, {
    onMouseDown: e => {
      0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && N()
    },
    onPointerDown: e => {
      0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && N(e.pointerId)
    },
    onTouchStart: e => {
      N(e.changedTouches[0].identifier)
    }
  });
  return (0, r.useFormReset)(b, D, e => {
    t.setThumbValue(l, e)
  }), {
    inputProps: (0, r.mergeProps)(O, M, {
      type: "range",
      tabIndex: y ? void 0 : 0,
      min: t.getThumbMinValue(l),
      max: t.getThumbMaxValue(l),
      step: t.step,
      value: D,
      name: m,
      disabled: y,
      "aria-orientation": v,
      "aria-valuetext": t.getThumbValueLabel(l),
      "aria-required": f || void 0,
      "aria-invalid": h || "invalid" === p || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-describedby": [_["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
      "aria-details": [_["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
      onChange: e => {
        t.setThumbValue(l, parseFloat(e.target.value))
      }
    }),
    thumbProps: {
      ...B,
      style: {
        position: "absolute",
        [x ? "top" : "left"]: "".concat(100 * F, "%"),
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps: E,
    isDragging: t.isThumbDragging(l),
    isDisabled: y,
    isFocused: P
  }
}