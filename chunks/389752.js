"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var i = n("884691"),
  s = n("134322"),
  r = n("942367"),
  a = n("74139");
let o = [r.Keys.TAB, r.Keys.UP, r.Keys.DOWN];

function l(e, t, n) {
  return null != n ? "#".concat(e(t, n)) : "#".concat(t)
}

function u(e) {
  return document.querySelector(e)
}

function d(e) {
  var t;
  null === (t = document.getElementById(e)) || void 0 === t || t.focus()
}

function c(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: c = 0,
    onSelect: f,
    setFocus: _,
    getNewFocusIndex: h,
    maintainFocusPosition: g = !0,
    includeSetSizes: m = !0,
    focusOnMount: E = !0,
    enabled: p = !0,
    onDispatch: v
  } = e, S = i.useCallback((e, t) => {
    let n = (0, s.default)(e, t);
    return null != v && v(e, n, t), n
  }, [v]), [T, I] = i.useReducer(S, {
    focusedIndex: c,
    itemCount: n
  }), {
    itemCount: C,
    focusedIndex: A
  } = T, [y] = i.useState(() => (0, a.throttle)(I, 16));
  return i.useEffect(() => {
      I({
        type: s.ListActionType.UPDATE_ITEM_COUNT,
        itemCount: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        itemCount: n,
        focusedIndex: c,
        onSelect: f,
        setFocus: _ = d,
        getNewFocusIndex: h,
        dispatch: g,
        maintainFocusPosition: m,
        includeSetSizes: E,
        focusOnMount: p,
        enabled: v,
        makeId: S = a.makeId,
        getIndexFromId: T
      } = e, I = i.useRef(n), C = i.useRef(T);
      C.current = T, I.current = n;
      let A = i.useRef();
      i.useEffect(() => {
        A.current = v
      }, [v]);
      let [y, N] = i.useState(!1), [R] = i.useState(() => new a.HandlerMemoizer(e => () => {
        let t = null != C.current && "string" == typeof e ? C.current(e) : e;
        "number" == typeof t && !(t < 0) && g({
          type: s.ListActionType.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      i.useEffect(() => () => R.clean(), [R]);
      let O = i.useCallback((e, t) => {
          A.current && _(e, t)
        }, [_]),
        [D, P] = i.useState(!0);
      i.useEffect(() => {
        if (D && !p) {
          P(!1);
          return
        }
        O(S(t, c), c)
      }, [c]);
      let b = i.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = null != h ? h(c) : c;
          n !== c && g({
            type: s.ListActionType.SET_FOCUSED_INDEX,
            index: n
          }), e && O(S(t, n), n)
        }, [S, c, h, g, t, O]),
        L = i.useCallback(e => {
          if (!A.current) return;
          if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), b();
            return
          }
          let n = function(e) {
            switch (e.key) {
              case r.Keys.ENTER:
              case r.Keys.SPACE:
                return r.ActionType.SELECT_FOCUSED_ITEM;
              case r.Keys.UP:
                return r.ActionType.NAVIGATE_UP;
              case r.Keys.DOWN:
                return r.ActionType.NAVIGATE_DOWN;
              case r.Keys.HOME:
                return r.ActionType.NAVIGATE_START;
              case r.Keys.END:
                return r.ActionType.NAVIGATE_END
            }
          }(e);
          switch (n) {
            case r.ActionType.NAVIGATE_UP:
            case r.ActionType.NAVIGATE_DOWN:
            case r.ActionType.NAVIGATE_START:
            case r.ActionType.NAVIGATE_END:
              e.preventDefault(), e.stopPropagation(), g({
                type: n
              });
              return;
            case r.ActionType.SELECT_FOCUSED_ITEM:
              var i;
              let s = u(l(S, t, c));
              if ((null == (i = s) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), g({
                  type: n
                }), null != f) {
                f(c);
                return
              }
              null == s || s.click()
          }
        }, [S, t, g, c, b, f]),
        M = i.useCallback(() => {
          y || N(!0)
        }, [y]),
        U = i.useCallback(() => {
          !y && (m ? O(S(t, c), c) : b(!0))
        }, [S, t, O, m, y, c, b]),
        k = i.useCallback(e => {
          !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(() => {
            if (null == u(l(S, t, c))) {
              O(t);
              return
            }
            N(!1)
          })
        }, [S, t, c, O]),
        w = i.useRef(null);
      i.useLayoutEffect(() => {
        let e = w.current;
        if (null != e) return e.addEventListener("focusin", M), e.addEventListener("focus", U), e.addEventListener("focusout", k), () => {
          e.removeEventListener("focusin", M), e.removeEventListener("focus", U), e.removeEventListener("focusout", k)
        }
      }, [U, M, k]);
      let V = i.useCallback(() => ({
          role: "list",
          tabIndex: y && m ? -1 : 0,
          id: t,
          onKeyDown: L,
          ref: w
        }), [t, y, L, m]),
        G = i.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": E ? I.current : void 0,
            "aria-posinset": E ? n + 1 : void 0,
            id: S(t, n),
            tabIndex: m && n === c ? 0 : -1,
            onFocus: R.get(null != C.current ? S(t, n) : n)
          }
        }, [S, t, c, m, R, E]),
        F = i.useMemo(() => ({
          dispatch: g,
          getContainerProps: V,
          getItemProps: G
        }), [g, V, G]);
      return F
    }({
      navId: t,
      itemCount: C,
      focusedIndex: A,
      dispatch: y,
      onSelect: f,
      setFocus: _,
      getNewFocusIndex: h,
      maintainFocusPosition: g,
      includeSetSizes: m,
      focusOnMount: E,
      enabled: p
    })
}