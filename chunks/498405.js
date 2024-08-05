n.d(t, {
  ZP: function() {
return o;
  }
}), n(47120);
var r = n(470079),
  i = n(808629),
  a = n(536895),
  s = n(260866);

function o(e) {
  let {
navId: t,
items: n,
initialFocusPath: o,
onSelect: l,
enabled: u = !0,
closeMenu: c
  } = e, d = r.useRef(u);
  r.useLayoutEffect(() => {
d.current = u;
  }, [u]);
  let [_, E] = r.useReducer(i.Z, {
items: n,
focusPath: o,
focusIndex: -1
  }), f = r.useMemo(() => (0, s.P2)(E, 30), [E]);
  r.useEffect(() => {
E({
  type: i.B.UPDATE_ITEMS,
  items: n
});
  }, [n]);
  let {
focusPath: h
  } = _, [p, m] = r.useState(!1), [I, T] = r.useState(!1), [{
onItemFocusMemoizer: g,
onItemMouseEnterMemoizer: S
  }] = r.useState(() => ({
onItemFocusMemoizer: new s.$o(e => () => {
  m(!0), E({
    type: i.B.SET_FOCUS_PATH,
    path: e.split('--')
  });
}),
onItemMouseEnterMemoizer: new s.$o(e => () => {
  T(!1), E({
    type: i.B.SET_FOCUS_PATH,
    path: e.split('--')
  });
})
  })), A = r.useCallback(e => {
if (!d.current)
  return;
e.key === a.R8.ESCAPE && null != c && (e.stopPropagation(), e.preventDefault(), c());
let n = function(e) {
  switch (e.key) {
    case a.R8.ENTER:
    case a.R8.SPACE:
      return a.Us.SELECT_FOCUSED_ITEM;
    case a.R8.UP:
      return a.Us.NAVIGATE_UP;
    case a.R8.DOWN:
      return a.Us.NAVIGATE_DOWN;
    case a.R8.RIGHT:
      return a.Us.NAVIGATE_IN;
    case a.R8.LEFT:
      return a.Us.NAVIGATE_OUT;
  }
}(e);
switch (n) {
  case a.Us.NAVIGATE_UP:
  case a.Us.NAVIGATE_DOWN:
  case a.Us.NAVIGATE_IN:
  case a.Us.NAVIGATE_OUT:
    e.preventDefault(), e.stopPropagation(), T(!0), f({
      type: n
    });
    return;
  case a.Us.SELECT_FOCUSED_ITEM:
    var r, i, o, u, _;
    if (e.repeat)
      return;
    if (e.target.tabIndex >= 0)
      return;
    if (e.preventDefault(), e.stopPropagation(), T(!1), f({
        type: n
      }), null != l) {
      l(h);
      return;
    }
    let E = (u = null !== (r = e.target.ownerDocument) && void 0 !== r ? r : document, _ = (i = t, null != (o = h) ? ''.concat((0, s.qR)(i, o.join('--'))) : i), u.getElementById(_));
    null == E || E.click();
}
  }, [
f,
t,
h,
l,
c
  ]), N = r.useCallback(() => {
!p && m(!0);
  }, [p]), v = r.useCallback(e => {
if (e.target !== e.currentTarget) {
  if (!e.currentTarget.contains(e.relatedTarget))
    p && m(!1);
}
  }, [p]), O = r.useCallback(() => {
E({
  type: i.B.SET_FOCUS_PATH,
  path: []
}), m(!1);
  }, []), R = r.useCallback(e => e.every((e, t) => h[t] === e), [h]), C = r.useCallback(() => ({
role: 'menu',
id: t,
tabIndex: -1,
onKeyDown: A,
onFocus: N,
onBlur: v,
onMouseLeave: O,
'aria-activedescendant': h.length > 0 ? (0, s.qR)(t, h.join('--')) : void 0
  }), [
t,
A,
N,
v,
O,
h
  ]), y = r.useCallback(e => {
let {
  path: n
} = e;
return {
  role: 'menu',
  tabIndex: -1,
  'aria-activedescendant': R(n) ? (0, s.qR)(t, h.join('--')) : void 0,
  focusIndex: _.focusIndex,
  isUsingKeyboardNavigation: I
};
  }, [
t,
h,
R,
_.focusIndex,
I
  ]), D = r.useCallback(e => {
let {
  path: n,
  hasSubmenu: r = !1,
  role: i = 'menuitem'
} = e, a = n.join('--');
return {
  ...r ? {
    'aria-expanded': R(n),
    'aria-haspopup': !0
  } : {},
  role: i,
  id: (0, s.qR)(t, a),
  tabIndex: -1,
  onFocus: g.get(a),
  onMouseEnter: S.get(a)
};
  }, [
t,
R,
g,
S
  ]);
  return r.useMemo(() => ({
dispatch: f,
getContainerProps: C,
getSubmenuProps: y,
getItemProps: D,
isFocused: R,
isUsingKeyboardNavigation: I
  }), [
f,
C,
y,
D,
R,
I
  ]);
}