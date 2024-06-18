"use strict";
n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(611144),
  s = n(536895),
  o = n(260866);
let a = [s.R8.TAB];

function l(e, t, n) {
  return null != t && null != n ? "#".concat((0, o.NE)(e, t, n)) : "[data-ref-id=".concat(e, "]")
}

function u(e) {
  return document.querySelector(e)
}

function _(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: _ = 0,
    focusedY: d = 0,
    onSelect: c,
    prepareFocus: E,
    getNewFocusPosition: I,
    maintainFocusPosition: T = !0,
    enabled: h = !0,
    onDispatch: S,
    autoFocusElement: f = !0,
    useVirtualFocus: N = !1
  } = e, A = i.useCallback((e, t) => {
    let n = (0, r.Z)(e, t);
    return null != S && S(e, n, t), n
  }, [S]), [m, O] = i.useReducer(A, {
    focusedX: _,
    focusedY: d,
    columnCounts: n
  }), {
    columnCounts: R,
    focusedX: C,
    focusedY: p
  } = m, [g] = i.useState(() => (0, o.P2)(O, 16));
  return i.useEffect(() => {
      O({
        type: r.s.UPDATE_COLUMN_COUNTS,
        columnCounts: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        columnCounts: n,
        focusedX: _,
        focusedY: d,
        onSelect: c,
        prepareFocus: E,
        getNewFocusPosition: I,
        dispatch: T,
        maintainFocusPosition: h,
        enabled: S,
        autoFocusElement: f,
        useVirtualFocus: N
      } = e, A = i.useRef();
      A.current = S;
      let m = u(l(t, _, d)),
        [O, R] = i.useState(!1),
        [C, p] = i.useState(!1),
        [g, L] = i.useState(!1),
        [v] = i.useState(() => new o.$o(e => {
          let [t, n] = e.split(",").map(Number);
          return () => {
            R(!0), T({
              type: r.s.SET_FOCUSED_POSITION,
              x: t,
              y: n
            })
          }
        }));
      i.useEffect(() => () => v.clean(), [v]);
      let D = i.useCallback(e => {
          if (!A.current || !f) return !1;
          e.focus()
        }, [f]),
        M = i.useCallback((e, n) => {
          let i = l(t, e, n);
          (null != E ? E(e, n, i) : Promise.resolve()).then(() => {
            let e = u(i);
            null != e ? (D(e), p(!1)) : requestAnimationFrame(() => p(!0))
          })
        }, [t, E, D]),
        P = i.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            [n, i] = null != I ? I(_, d) : [_, d];
          if ((n !== _ || i !== d) && (T({
              type: r.s.SET_FOCUSED_POSITION,
              x: n,
              y: i
            }), !e)) {
            L(!0);
            return
          }
          let s = u(l(t, n, i));
          null != s && (L(!0), D(s))
        }, [T, _, d, I, t, D]),
        [y, U] = i.useState(!1);
      i.useEffect(() => {
        if (!y || !O) return;
        U(!1);
        let e = u(l(t, _, d));
        if (null != e) {
          D(e);
          return
        }
        R(!1);
        let n = u(l(t));
        null != n && D(n)
      }, [t, y, O, D, _, d]);
      let b = i.useCallback(e => {
        A.current && null == e && U(!0)
      }, []);
      i.useEffect(() => {
        O && C && null != m && (D(m), p(!1))
      }, [C, m]), i.useEffect(() => {
        O && (!g && M(_, d), L(!1))
      }, [_, d]);
      let G = i.useCallback(e => {
          if (!A.current) return;
          if (!N && a.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), P();
            return
          }
          let t = function(e) {
            switch (e.key) {
              case s.R8.ENTER:
                return s.Us.SELECT_FOCUSED_ITEM;
              case s.R8.UP:
                return s.Us.NAVIGATE_UP;
              case s.R8.DOWN:
                return s.Us.NAVIGATE_DOWN;
              case s.R8.RIGHT:
                return s.Us.NAVIGATE_RIGHT;
              case s.R8.LEFT:
                return s.Us.NAVIGATE_LEFT;
              case s.R8.HOME:
                if (e.ctrlKey) return s.Us.NAVIGATE_START;
                return s.Us.NAVIGATE_INLINE_START;
              case s.R8.END:
                if (e.ctrlKey) return s.Us.NAVIGATE_END;
                return s.Us.NAVIGATE_INLINE_END
            }
          }(e);
          switch (t) {
            case s.Us.NAVIGATE_UP:
            case s.Us.NAVIGATE_DOWN:
            case s.Us.NAVIGATE_RIGHT:
            case s.Us.NAVIGATE_LEFT:
            case s.Us.NAVIGATE_INLINE_START:
            case s.Us.NAVIGATE_INLINE_END:
            case s.Us.NAVIGATE_START:
            case s.Us.NAVIGATE_END:
              !(0 === n.length || 0 === _ && 0 === d && t === s.Us.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), T({
                type: t
              });
              return;
            case s.Us.SELECT_FOCUSED_ITEM:
              var i;
              if (f && (null == (i = m) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
              e.preventDefault(), e.stopPropagation(), T({
                type: t
              }), null != c ? c(_, d, e) : null != m && m.click()
          }
        }, [P, T, f, m, c, _, d]),
        w = i.useCallback(e => e.currentTarget !== e.target ? (!O && (R(!0), L(!0)), !1) : O ? (P(!1), !1) : void(h && null != m ? M(_, d) : P(!0)), [O, h, m, P, M, _, d]),
        k = i.useCallback(e => {
          if (e.target !== e.currentTarget) {
            if (e.currentTarget.contains(e.relatedTarget)) return !1;
            R(!1)
          }
        }, []),
        B = i.useMemo(() => Math.max(...n), [n]),
        x = i.useCallback(() => ({
          role: "grid",
          "aria-rowcount": n.length,
          "aria-colcount": B,
          tabIndex: O && h ? -1 : 0,
          "data-ref-id": t,
          onKeyDown: G,
          onFocus: w,
          onBlur: k
        }), [n.length, B, O, h, t, G, w, k]),
        V = i.useCallback((e, n) => {
          let i = {
            role: "gridcell",
            "aria-rowindex": n + 1,
            "aria-colindex": e + 1,
            id: (0, o.NE)(t, e, n),
            tabIndex: h && e === _ && n === d ? 0 : -1,
            onFocus: v.get("".concat(e, ",").concat(n))
          };
          return e === _ && n === d && (i.ref = b), i
        }, [t, h, _, d, v, b]),
        Z = i.useCallback(e => ({
          role: "row",
          "aria-rowindex": e + 1
        }), []);
      return i.useMemo(() => ({
        dispatch: T,
        getContainerProps: x,
        getItemProps: V,
        getRowProps: Z
      }), [T, x, V, Z])
    }({
      navId: t,
      columnCounts: R,
      focusedX: C,
      focusedY: p,
      dispatch: g,
      onSelect: c,
      prepareFocus: E,
      getNewFocusPosition: I,
      maintainFocusPosition: T,
      enabled: h,
      autoFocusElement: f,
      useVirtualFocus: N
    })
}