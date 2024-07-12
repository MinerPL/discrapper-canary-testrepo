n.d(t, {
  ZP: function() {
return u;
  }
}), n(47120);
var i = n(470079),
  a = n(714319),
  l = n(536895),
  s = n(260866);
let r = [
  l.R8.TAB,
  l.R8.UP,
  l.R8.DOWN
];

function o(e, t, n) {
  return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}

function c(e) {
  return document.querySelector(e);
}

function d(e) {
  var t;
  null === (t = document.getElementById(e)) || void 0 === t || t.focus();
}

function u(e) {
  let {
navId: t,
itemCount: n,
focusedIndex: u = 0,
onSelect: h,
setFocus: p,
getNewFocusIndex: m,
maintainFocusPosition: _ = !0,
includeSetSizes: f = !0,
focusOnMount: E = !0,
enabled: C = !0,
onDispatch: g
  } = e, I = i.useCallback((e, t) => {
let n = (0, a.Z)(e, t);
return null != g && g(e, n, t), n;
  }, [g]), [x, T] = i.useReducer(I, {
focusedIndex: u,
itemCount: n
  }), {
itemCount: v,
focusedIndex: N
  } = x, [S] = i.useState(() => (0, s.P2)(T, 16));
  return i.useEffect(() => {
  T({
    type: a.G.UPDATE_ITEM_COUNT,
    itemCount: n
  });
}, [n]),
function(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: u,
    onSelect: h,
    setFocus: p = d,
    getNewFocusIndex: m,
    dispatch: _,
    maintainFocusPosition: f,
    includeSetSizes: E,
    focusOnMount: C,
    enabled: g,
    makeId: I = s.qR,
    getIndexFromId: x
  } = e, T = i.useRef(n), v = i.useRef(x);
  v.current = x, T.current = n;
  let N = i.useRef();
  i.useEffect(() => {
    N.current = g;
  }, [g]);
  let [S, Z] = i.useState(!1), [A] = i.useState(() => new s.$o(e => () => {
    let t = null != v.current && 'string' == typeof e ? v.current(e) : e;
    'number' == typeof t && !(t < 0) && _({
      type: a.G.SET_FOCUSED_INDEX,
      index: t
    });
  }));
  i.useEffect(() => () => A.clean(), [A]);
  let M = i.useCallback((e, t) => {
      N.current && p(e, t);
    }, [p]),
    [b, R] = i.useState(!0);
  i.useEffect(() => {
    if (b && !C) {
      R(!1);
      return;
    }
    M(I(t, u), u);
  }, [u]);
  let j = i.useCallback(function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = null != m ? m(u) : u;
      n !== u && _({
        type: a.G.SET_FOCUSED_INDEX,
        index: n
      }), e && M(I(t, n), n);
    }, [
      I,
      u,
      m,
      _,
      t,
      M
    ]),
    L = i.useCallback(e => {
      if (!N.current)
        return;
      if (r.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
        e.preventDefault(), e.stopPropagation(), j();
        return;
      }
      let n = function(e) {
        switch (e.key) {
          case l.R8.ENTER:
          case l.R8.SPACE:
            return l.Us.SELECT_FOCUSED_ITEM;
          case l.R8.UP:
            return l.Us.NAVIGATE_UP;
          case l.R8.DOWN:
            return l.Us.NAVIGATE_DOWN;
          case l.R8.HOME:
            return l.Us.NAVIGATE_START;
          case l.R8.END:
            return l.Us.NAVIGATE_END;
        }
      }(e);
      switch (n) {
        case l.Us.NAVIGATE_UP:
        case l.Us.NAVIGATE_DOWN:
        case l.Us.NAVIGATE_START:
        case l.Us.NAVIGATE_END:
          e.preventDefault(), e.stopPropagation(), _({
            type: n
          });
          return;
        case l.Us.SELECT_FOCUSED_ITEM:
          var i;
          let a = c(o(I, t, u));
          if ((null == (i = a) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat)
            return;
          if (e.preventDefault(), e.stopPropagation(), _({
              type: n
            }), null != h) {
            h(u);
            return;
          }
          null == a || a.click();
      }
    }, [
      I,
      t,
      _,
      u,
      j,
      h
    ]),
    P = i.useCallback(() => {
      S || Z(!0);
    }, [S]),
    O = i.useCallback(() => {
      if (!S)
        f ? M(I(t, u), u) : j(!0);
    }, [
      I,
      t,
      M,
      f,
      S,
      u,
      j
    ]),
    y = i.useCallback(e => {
      if (!e.currentTarget.contains(e.relatedTarget))
        requestAnimationFrame(() => {
          if (null == c(o(I, t, u))) {
            M(t);
            return;
          }
          Z(!1);
        });
    }, [
      I,
      t,
      u,
      M
    ]),
    D = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = D.current;
    if (null != e)
      return e.addEventListener('focusin', P), e.addEventListener('focus', O), e.addEventListener('focusout', y), () => {
        e.removeEventListener('focusin', P), e.removeEventListener('focus', O), e.removeEventListener('focusout', y);
      };
  }, [
    O,
    P,
    y
  ]);
  let k = i.useCallback(() => ({
      role: 'list',
      tabIndex: S && f ? -1 : 0,
      id: t,
      onKeyDown: L,
      ref: D
    }), [
      t,
      S,
      L,
      f
    ]),
    U = i.useCallback(e => {
      let {
        index: n
      } = e;
      return {
        role: 'listitem',
        'aria-setsize': E ? T.current : void 0,
        'aria-posinset': E ? n + 1 : void 0,
        id: I(t, n),
        tabIndex: f && n === u ? 0 : -1,
        onFocus: A.get(null != v.current ? I(t, n) : n)
      };
    }, [
      I,
      t,
      u,
      f,
      A,
      E
    ]);
  return i.useMemo(() => ({
    dispatch: _,
    getContainerProps: k,
    getItemProps: U
  }), [
    _,
    k,
    U
  ]);
}({
  navId: t,
  itemCount: v,
  focusedIndex: N,
  dispatch: S,
  onSelect: h,
  setFocus: p,
  getNewFocusIndex: m,
  maintainFocusPosition: _,
  includeSetSizes: f,
  focusOnMount: E,
  enabled: C
});
}