"use strict";
n.r(t), n.d(t, {
  useFocus: function() {
    return P
  },
  isFocusVisible: function() {
    return U
  },
  getInteractionModality: function() {
    return q
  },
  setInteractionModality: function() {
    return H
  },
  useInteractionModality: function() {
    return G
  },
  useFocusVisibleListener: function() {
    return W
  },
  useFocusWithin: function() {
    return Z
  },
  useHover: function() {
    return ee
  },
  useInteractOutside: function() {
    return et
  },
  useKeyboard: function() {
    return ei
  },
  useMove: function() {
    return eo
  },
  usePress: function() {
    return v
  },
  useScrollWheel: function() {
    return es
  },
  useLongPress: function() {
    return ea
  }
}), n("222007");
var r = n("290895"),
  i = n("884691"),
  o = n("79458"),
  s = n("599514"),
  a = n("686047"),
  c = n("46397");
let u = "default",
  d = "",
  l = new WeakMap;

function f(e) {
  (0, r.isIOS)() ? ("default" === u && (d = document.documentElement.style.webkitUserSelect, document.documentElement.style.webkitUserSelect = "none"), u = "disabled") : (e instanceof HTMLElement || e instanceof SVGElement) && (l.set(e, e.style.userSelect), e.style.userSelect = "none")
}

function p(e) {
  if ((0, r.isIOS)()) "disabled" === u && (u = "restoring", setTimeout(() => {
    (0, r.runAfterTransition)(() => {
      "restoring" === u && ("none" === document.documentElement.style.webkitUserSelect && (document.documentElement.style.webkitUserSelect = d || ""), d = "", u = "default")
    })
  }, 300));
  else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
    let t = l.get(e);
    "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e)
  }
}
let h = i.createContext(null);
h.displayName = "PressResponderContext";
var g = new WeakMap;
class b {
  continuePropagation() {
    (0, a._)(this, g, !1)
  }
  get shouldStopPropagation() {
    return (0, o._)(this, g)
  }
  constructor(e, t, n) {
    (0, s._)(this, g, {
      writable: !0,
      value: void 0
    }), (0, a._)(this, g, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
  }
}

function v(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: o,
    onPressEnd: s,
    onPressUp: a,
    isDisabled: c,
    isPressed: u,
    preventFocusOnPress: d,
    shouldCancelOnPointerExit: l,
    allowTextSelectionOnPress: g,
    ref: v,
    ...E
  } = function(e) {
    let t = (0, i.useContext)(h);
    if (t) {
      let {
        register: n,
        ...i
      } = t;
      e = (0, r.mergeProps)(i, e), n()
    }
    return (0, r.useSyncRef)(t, e.ref), e
  }(e), [M, D] = (0, i.useState)(!1), C = (0, i.useRef)({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), {
    addGlobalListener: P,
    removeAllGlobalListeners: T
  } = (0, r.useGlobalListeners)(), A = (0, r.useEffectEvent)((e, t) => {
    let r = C.current;
    if (c || r.didFirePressStart) return;
    let i = !0;
    if (o) {
      let n = new b("pressstart", t, e);
      o(n), i = n.shouldStopPropagation
    }
    return n && n(!0), r.didFirePressStart = !0, D(!0), i
  }), R = (0, r.useEffectEvent)(function(e, r) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      o = C.current;
    if (!o.didFirePressStart) return;
    o.ignoreClickAfterPress = !0, o.didFirePressStart = !1;
    let a = !0;
    if (s) {
      let t = new b("pressend", r, e);
      s(t), a = t.shouldStopPropagation
    }
    if (n && n(!1), D(!1), t && i && !c) {
      let n = new b("press", r, e);
      t(n), a && (a = n.shouldStopPropagation)
    }
    return a
  }), I = (0, r.useEffectEvent)((e, t) => {
    if (!c) {
      if (a) {
        let n = new b("pressup", t, e);
        return a(n), n.shouldStopPropagation
      }
      return !0
    }
  }), O = (0, r.useEffectEvent)(e => {
    let t = C.current;
    t.isPressed && (t.isOverTarget && R(w(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, T(), !g && p(t.target))
  }), j = (0, r.useEffectEvent)(e => {
    l && O(e)
  }), N = (0, i.useMemo)(() => {
    let e = C.current,
      t = {
        onKeyDown(t) {
          if (y(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
            _(t.target, t.key) && t.preventDefault();
            let r = !0;
            !e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, r = A(t, "keyboard"), P(document, "keyup", n, !1)), r && t.stopPropagation()
          } else "Enter" === t.key && m(t.currentTarget) && t.stopPropagation()
        },
        onKeyUp(t) {
          y(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && I(w(e.target, t), "keyboard")
        },
        onClick(t) {
          if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button) {
            let n = !0;
            if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && ("virtual" === e.pointerType || (0, r.isVirtualClick)(t.nativeEvent))) {
              !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget);
              let e = A(t, "virtual"),
                i = I(t, "virtual"),
                o = R(t, "virtual");
              n = e && i && o
            }
            e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        if (e.isPressed && y(t, e.target)) {
          _(t.target, t.key) && t.preventDefault(), e.isPressed = !1;
          let n = t.target,
            r = R(w(e.target, t), "keyboard", e.target.contains(n));
          T(), r && t.stopPropagation(), e.target instanceof HTMLElement && e.target.contains(n) && (m(e.target) || "link" === e.target.getAttribute("role")) && e.target.click()
        }
      };
    if ("undefined" != typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
        if ((0, r.isVirtualPointerEvent)(t.nativeEvent)) {
          e.pointerType = "virtual";
          return
        }
        k(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
        let s = !0;
        !e.isPressed && (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget), !g && f(e.target), s = A(t, e.pointerType), P(document, "pointermove", n, !1), P(document, "pointerup", i, !1), P(document, "pointercancel", o, !1)), s && t.stopPropagation()
      }, t.onMouseDown = e => {
        e.currentTarget.contains(e.target) && 0 === e.button && (k(e.currentTarget) && e.preventDefault(), e.stopPropagation())
      }, t.onPointerUp = t => {
        t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && S(t, t.currentTarget) && I(t, e.pointerType || t.pointerType)
      };
      let n = t => {
          t.pointerId === e.activePointerId && (S(t, e.target) ? !e.isOverTarget && (e.isOverTarget = !0, A(w(e.target, t), e.pointerType)) : e.isOverTarget && (e.isOverTarget = !1, R(w(e.target, t), e.pointerType, !1), j(t)))
        },
        i = t => {
          t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && (S(t, e.target) ? R(w(e.target, t), e.pointerType) : e.isOverTarget && R(w(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, T(), !g && p(e.target))
        },
        o = e => {
          O(e)
        };
      t.onDragStart = e => {
        e.currentTarget.contains(e.target) && O(e)
      }
    } else {
      t.onMouseDown = t => {
        if (0 === t.button && !!t.currentTarget.contains(t.target)) {
          if (k(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
            t.stopPropagation();
            return
          }
          e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, r.isVirtualClick)(t.nativeEvent) ? "virtual" : "mouse", !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget), A(t, e.pointerType) && t.stopPropagation(), P(document, "mouseup", n, !1)
        }
      }, t.onMouseEnter = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = !0;
        e.isPressed && !e.ignoreEmulatedMouseEvents && (e.isOverTarget = !0, n = A(t, e.pointerType)), n && t.stopPropagation()
      }, t.onMouseLeave = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = !0;
        e.isPressed && !e.ignoreEmulatedMouseEvents && (e.isOverTarget = !1, n = R(t, e.pointerType, !1), j(t)), n && t.stopPropagation()
      }, t.onMouseUp = t => {
        t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && I(t, e.pointerType)
      };
      let n = t => {
        if (0 === t.button) {
          if (e.isPressed = !1, T(), e.ignoreEmulatedMouseEvents) {
            e.ignoreEmulatedMouseEvents = !1;
            return
          }
          S(t, e.target) ? R(w(e.target, t), e.pointerType) : e.isOverTarget && R(w(e.target, t), e.pointerType, !1), e.isOverTarget = !1
        }
      };
      t.onTouchStart = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = function(e) {
          let {
            targetTouches: t
          } = e;
          return t.length > 0 ? t[0] : null
        }(t.nativeEvent);
        if (!!n) e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget), !g && f(e.target), A(t, e.pointerType) && t.stopPropagation(), P(window, "scroll", i, !0)
      }, t.onTouchMove = t => {
        if (!t.currentTarget.contains(t.target)) return;
        if (!e.isPressed) {
          t.stopPropagation();
          return
        }
        let n = x(t.nativeEvent, e.activePointerId),
          r = !0;
        n && S(n, t.currentTarget) ? !e.isOverTarget && (e.isOverTarget = !0, r = A(t, e.pointerType)) : e.isOverTarget && (e.isOverTarget = !1, r = R(t, e.pointerType, !1), j(t)), r && t.stopPropagation()
      }, t.onTouchEnd = t => {
        if (!t.currentTarget.contains(t.target)) return;
        if (!e.isPressed) {
          t.stopPropagation();
          return
        }
        let n = x(t.nativeEvent, e.activePointerId),
          r = !0;
        n && S(n, t.currentTarget) ? (I(t, e.pointerType), r = R(t, e.pointerType)) : e.isOverTarget && (r = R(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, !g && p(e.target), T()
      }, t.onTouchCancel = t => {
        t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && O(t))
      };
      let i = t => {
        e.isPressed && t.target.contains(e.target) && O({
          currentTarget: e.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        })
      };
      t.onDragStart = e => {
        e.currentTarget.contains(e.target) && O(e)
      }
    }
    return t
  }, [P, c, d, T, g, O, j, R, A, I]);
  return (0, i.useEffect)(() => () => {
    !g && p(C.current.target)
  }, [g]), {
    isPressed: u || M,
    pressProps: (0, r.mergeProps)(E, N)
  }
}

function m(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function y(e, t) {
  let {
    key: n,
    code: r
  } = e, i = t.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(t instanceof HTMLInputElement && !M(t, n) || t instanceof HTMLTextAreaElement || t.isContentEditable) && (!m(t) || "button" === i && "Enter" !== n) && !("link" === i && "Enter" !== n)
}

function x(e, t) {
  let n = e.changedTouches;
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    if (r.identifier === t) return r
  }
  return null
}

function w(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  }
}

function S(e, t) {
  var n, r, i;
  let o, s, a = t.getBoundingClientRect();
  let c = (o = (n = e).width / 2 || n.radiusX || 0, s = n.height / 2 || n.radiusY || 0, {
    top: n.clientY - s,
    right: n.clientX + o,
    bottom: n.clientY + s,
    left: n.clientX - o
  });
  return r = a, i = c, !(r.left > i.right) && !(i.left > r.right) && !(r.top > i.bottom) && !(i.top > r.bottom) && !0
}

function k(e) {
  return !(e instanceof HTMLElement) || !e.draggable
}

function _(e, t) {
  return e instanceof HTMLInputElement ? !M(e, t) : !(e instanceof HTMLButtonElement) || "submit" !== e.type && "reset" !== e.type
}
let E = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function M(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : E.has(e.type)
}
class D {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
  }
  isPropagationStopped() {
    return !1
  }
  persist() {}
  constructor(e, t) {
    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
  }
}

function C(e) {
  let t = (0, i.useRef)({
    isFocused: !1,
    observer: null
  });
  (0, r.useLayoutEffect)(() => {
    let e = t.current;
    return () => {
      e.observer && (e.observer.disconnect(), e.observer = null)
    }
  }, []);
  let n = (0, r.useEffectEvent)(t => {
    null == e || e(t)
  });
  return (0, i.useCallback)(e => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let r = e.target;
      r.addEventListener("focusout", e => {
        t.current.isFocused = !1, r.disabled && n(new D("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
      }, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && r.disabled) {
          t.current.observer.disconnect();
          let e = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: e
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: e
          }))
        }
      }), t.current.observer.observe(r, {
        attributes: !0,
        attributeFilter: ["disabled"]
      })
    }
  }, [n])
}

function P(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: r,
    onFocusChange: o
  } = e, s = (0, i.useCallback)(e => {
    if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
  }, [r, o]), a = C(s), c = (0, i.useCallback)(e => {
    e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), o && o(!0), a(e))
  }, [o, n, a]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? c : void 0,
      onBlur: !t && (r || o) ? s : void 0
    }
  }
}
let T = null,
  A = new Set,
  R = !1,
  I = !1,
  O = !1,
  j = {
    Tab: !0,
    Escape: !0
  };

function N(e, t) {
  for (let n of A) n(e, t)
}

function L(e) {
  var t;
  if (I = !0, !((t = e).metaKey || !(0, r.isMac)() && t.altKey || t.ctrlKey || "Control" === t.key || "Shift" === t.key || "Meta" === t.key)) T = "keyboard", N("keyboard", e)
}

function F(e) {
  T = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (I = !0, N("pointer", e))
}

function B(e) {
  (0, r.isVirtualClick)(e) && (I = !0, T = "virtual")
}

function z(e) {
  e.target !== window && e.target !== document && (!I && !O && (T = "virtual", N("virtual", e)), I = !1, O = !1)
}

function K() {
  I = !1, O = !0
}

function V() {
  if ("undefined" == typeof window || R) return;
  let e = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    I = !0, e.apply(this, arguments)
  }, document.addEventListener("keydown", L, !0), document.addEventListener("keyup", L, !0), document.addEventListener("click", B, !0), window.addEventListener("focus", z, !0), window.addEventListener("blur", K, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", F, !0), document.addEventListener("pointermove", F, !0), document.addEventListener("pointerup", F, !0)) : (document.addEventListener("mousedown", F, !0), document.addEventListener("mousemove", F, !0), document.addEventListener("mouseup", F, !0)), R = !0
}

function U() {
  return "pointer" !== T
}

function q() {
  return T
}

function H(e) {
  T = e, N(e, null)
}

function G() {
  V();
  let [e, t] = (0, i.useState)(T);
  return (0, i.useEffect)(() => {
    let e = () => {
      t(T)
    };
    return A.add(e), () => {
      A.delete(e)
    }
  }, []), (0, c.useIsSSR)() ? null : e
}
"undefined" != typeof document && ("loading" !== document.readyState ? V() : document.addEventListener("DOMContentLoaded", V));

function W(e, t, n) {
  V(), (0, i.useEffect)(() => {
    let t = (t, r) => {
      var i, o, s;
      if (i = null == n ? void 0 : n.isTextInput, o = t, s = r, !(i && "keyboard" === o && s instanceof KeyboardEvent) || j[s.key]) e(U())
    };
    return A.add(t), () => {
      A.delete(t)
    }
  }, t)
}

function Z(e) {
  let {
    isDisabled: t,
    onBlurWithin: n,
    onFocusWithin: r,
    onFocusWithinChange: o
  } = e, s = (0, i.useRef)({
    isFocusWithin: !1
  }), a = (0, i.useCallback)(e => {
    s.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (s.current.isFocusWithin = !1, n && n(e), o && o(!1))
  }, [n, o, s]), c = C(a), u = (0, i.useCallback)(e => {
    !s.current.isFocusWithin && document.activeElement === e.target && (r && r(e), o && o(!0), s.current.isFocusWithin = !0, c(e))
  }, [r, o, c]);
  return t ? {
    focusWithinProps: {
      onFocus: null,
      onBlur: null
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: a
    }
  }
}
let Y = !1,
  X = 0;

function $() {
  Y = !0, setTimeout(() => {
    Y = !1
  }, 50)
}

function J(e) {
  "touch" === e.pointerType && $()
}

function Q() {
  if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", J) : document.addEventListener("touchend", $), X++, () => {
    !(--X > 0) && ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", J) : document.removeEventListener("touchend", $))
  }
}

function ee(e) {
  let {
    onHoverStart: t,
    onHoverChange: n,
    onHoverEnd: r,
    isDisabled: o
  } = e, [s, a] = (0, i.useState)(!1), c = (0, i.useRef)({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  (0, i.useEffect)(Q, []);
  let {
    hoverProps: u,
    triggerHoverEnd: d
  } = (0, i.useMemo)(() => {
    let e = (e, r) => {
        if (c.pointerType = r, o || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
        c.isHovered = !0;
        let i = e.currentTarget;
        c.target = i, t && t({
          type: "hoverstart",
          target: i,
          pointerType: r
        }), n && n(!0), a(!0)
      },
      i = (e, t) => {
        if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
        c.isHovered = !1;
        let i = e.currentTarget;
        r && r({
          type: "hoverend",
          target: i,
          pointerType: t
        }), n && n(!1), a(!1)
      },
      s = {};
    return "undefined" != typeof PointerEvent ? (s.onPointerEnter = t => {
      (!Y || "mouse" !== t.pointerType) && e(t, t.pointerType)
    }, s.onPointerLeave = e => {
      !o && e.currentTarget.contains(e.target) && i(e, e.pointerType)
    }) : (s.onTouchStart = () => {
      c.ignoreEmulatedMouseEvents = !0
    }, s.onMouseEnter = t => {
      !c.ignoreEmulatedMouseEvents && !Y && e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
    }, s.onMouseLeave = e => {
      !o && e.currentTarget.contains(e.target) && i(e, "mouse")
    }), {
      hoverProps: s,
      triggerHoverEnd: i
    }
  }, [t, n, r, o, c]);
  return (0, i.useEffect)(() => {
    o && d({
      currentTarget: c.target
    }, c.pointerType)
  }, [o]), {
    hoverProps: u,
    isHovered: s
  }
}

function et(e) {
  let {
    ref: t,
    onInteractOutside: n,
    isDisabled: o,
    onInteractOutsideStart: s
  } = e, a = (0, i.useRef)({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), c = (0, r.useEffectEvent)(e => {
    n && en(e, t) && (s && s(e), a.current.isPointerDown = !0)
  }), u = (0, r.useEffectEvent)(e => {
    n && n(e)
  });
  (0, i.useEffect)(() => {
    let e = a.current;
    if (!o) {
      if ("undefined" != typeof PointerEvent) {
        let n = n => {
          e.isPointerDown && en(n, t) && u(n), e.isPointerDown = !1
        };
        return document.addEventListener("pointerdown", c, !0), document.addEventListener("pointerup", n, !0), () => {
          document.removeEventListener("pointerdown", c, !0), document.removeEventListener("pointerup", n, !0)
        }
      } else {
        let n = n => {
            e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && en(n, t) && u(n), e.isPointerDown = !1
          },
          r = n => {
            e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && en(n, t) && u(n), e.isPointerDown = !1
          };
        return document.addEventListener("mousedown", c, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("touchend", r, !0), () => {
          document.removeEventListener("mousedown", c, !0), document.removeEventListener("mouseup", n, !0), document.removeEventListener("touchstart", c, !0), document.removeEventListener("touchend", r, !0)
        }
      }
    }
  }, [t, o, c, u])
}

function en(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    let t = e.target.ownerDocument;
    if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
  }
  return t.current && !t.current.contains(e.target)
}

function er(e) {
  if (!e) return;
  let t = !0;
  return n => {
    e({
      ...n,
      preventDefault() {
        n.preventDefault()
      },
      isDefaultPrevented: () => n.isDefaultPrevented(),
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
      },
      continuePropagation() {
        t = !1
      }
    }), t && n.stopPropagation()
  }
}

function ei(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: er(e.onKeyDown),
      onKeyUp: er(e.onKeyUp)
    }
  }
}

function eo(e) {
  let {
    onMoveStart: t,
    onMove: n,
    onMoveEnd: o
  } = e, s = (0, i.useRef)({
    didMove: !1,
    lastPosition: null,
    id: null
  }), {
    addGlobalListener: a,
    removeGlobalListener: c
  } = (0, r.useGlobalListeners)(), u = (0, r.useEffectEvent)((e, r, i, o) => {
    (0 !== i || 0 !== o) && (!s.current.didMove && (s.current.didMove = !0, null == t || t({
      type: "movestart",
      pointerType: r,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    })), n({
      type: "move",
      pointerType: r,
      deltaX: i,
      deltaY: o,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    }))
  }), d = (0, r.useEffectEvent)((e, t) => {
    p(), s.current.didMove && (null == o || o({
      type: "moveend",
      pointerType: t,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    }))
  });
  return {
    moveProps: (0, i.useMemo)(() => {
      let e = {},
        t = () => {
          f(), s.current.didMove = !1
        };
      if ("undefined" == typeof PointerEvent) {
        let n = e => {
            0 === e.button && (u(e, "mouse", e.pageX - s.current.lastPosition.pageX, e.pageY - s.current.lastPosition.pageY), s.current.lastPosition = {
              pageX: e.pageX,
              pageY: e.pageY
            })
          },
          r = e => {
            0 === e.button && (d(e, "mouse"), c(window, "mousemove", n, !1), c(window, "mouseup", r, !1))
          };
        e.onMouseDown = e => {
          0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), s.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          }, a(window, "mousemove", n, !1), a(window, "mouseup", r, !1))
        };
        let i = e => {
            let t = [...e.changedTouches].findIndex(e => {
              let {
                identifier: t
              } = e;
              return t === s.current.id
            });
            if (t >= 0) {
              let {
                pageX: n,
                pageY: r
              } = e.changedTouches[t];
              u(e, "touch", n - s.current.lastPosition.pageX, r - s.current.lastPosition.pageY), s.current.lastPosition = {
                pageX: n,
                pageY: r
              }
            }
          },
          o = e => {
            [...e.changedTouches].findIndex(e => {
              let {
                identifier: t
              } = e;
              return t === s.current.id
            }) >= 0 && (d(e, "touch"), s.current.id = null, c(window, "touchmove", i), c(window, "touchend", o), c(window, "touchcancel", o))
          };
        e.onTouchStart = e => {
          if (0 === e.changedTouches.length || null != s.current.id) return;
          let {
            pageX: n,
            pageY: r,
            identifier: c
          } = e.changedTouches[0];
          t(), e.stopPropagation(), e.preventDefault(), s.current.lastPosition = {
            pageX: n,
            pageY: r
          }, s.current.id = c, a(window, "touchmove", i, !1), a(window, "touchend", o, !1), a(window, "touchcancel", o, !1)
        }
      } else {
        let n = e => {
            if (e.pointerId === s.current.id) {
              let t = e.pointerType || "mouse";
              u(e, t, e.pageX - s.current.lastPosition.pageX, e.pageY - s.current.lastPosition.pageY), s.current.lastPosition = {
                pageX: e.pageX,
                pageY: e.pageY
              }
            }
          },
          r = e => {
            if (e.pointerId === s.current.id) {
              let t = e.pointerType || "mouse";
              d(e, t), s.current.id = null, c(window, "pointermove", n, !1), c(window, "pointerup", r, !1), c(window, "pointercancel", r, !1)
            }
          };
        e.onPointerDown = e => {
          0 === e.button && null == s.current.id && (t(), e.stopPropagation(), e.preventDefault(), s.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          }, s.current.id = e.pointerId, a(window, "pointermove", n, !1), a(window, "pointerup", r, !1), a(window, "pointercancel", r, !1))
        }
      }
      let n = (e, n, r) => {
        t(), u(e, "keyboard", n, r), d(e, "keyboard")
      };
      return e.onKeyDown = e => {
        switch (e.key) {
          case "Left":
          case "ArrowLeft":
            e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            e.preventDefault(), e.stopPropagation(), n(e, 0, 1)
        }
      }, e
    }, [s, a, c, u, d])
  }
}

function es(e, t) {
  let {
    onScroll: n,
    isDisabled: o
  } = e, s = (0, i.useCallback)(e => {
    !e.ctrlKey && (e.preventDefault(), e.stopPropagation(), n && n({
      deltaX: e.deltaX,
      deltaY: e.deltaY
    }))
  }, [n]);
  (0, r.useEvent)(t, "wheel", o ? null : s)
}

function ea(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: o,
    onLongPress: s,
    threshold: a = 500,
    accessibilityDescription: c
  } = e, u = (0, i.useRef)(null), {
    addGlobalListener: d,
    removeGlobalListener: l
  } = (0, r.useGlobalListeners)(), {
    pressProps: f
  } = v({
    isDisabled: t,
    onPressStart(e) {
      if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
          ...e,
          type: "longpressstart"
        }), u.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: !0
          })), s && s({
            ...e,
            type: "longpress"
          }), u.current = null
        }, a), "touch" === e.pointerType)) {
        let t = e => {
          e.preventDefault()
        };
        d(e.target, "contextmenu", t, {
          once: !0
        }), d(window, "pointerup", () => {
          setTimeout(() => {
            l(e.target, "contextmenu", t)
          }, 30)
        }, {
          once: !0
        })
      }
    },
    onPressEnd(e) {
      u.current && clearTimeout(u.current), o && ("mouse" === e.pointerType || "touch" === e.pointerType) && o({
        ...e,
        type: "longpressend"
      })
    }
  }), p = (0, r.useDescription)(s && !t ? c : null);
  return {
    longPressProps: (0, r.mergeProps)(f, p)
  }
}