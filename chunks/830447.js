n.d(t, {
  T: function() {
return g;
  },
  v: function() {
return T;
  }
}), n(390547), n(724458), n(653041), n(47120), n(411104);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(348327),
  l = n.n(s),
  u = n(498405),
  c = n(597442),
  d = n(21340),
  _ = n(922770),
  E = n(857595),
  f = n(607070),
  h = n(828214),
  p = n(898560),
  m = n(788314),
  I = n(206227);

function T(e) {
  var t;
  let {
navId: n,
variant: a = 'flexible',
hideScroller: s = !1,
className: _,
children: T,
onClose: g,
onSelect: A
  } = e, N = function e(t) {
return function e(t) {
  return null == t ? [] : i.Children.toArray(t).flatMap(t => {
    var n;
    return null == t ? [] : Array.isArray(t) ? e(t) : t.type === i.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t];
  });
}(t).reduce((t, n) => {
  var r, i;
  if (n.type === h.Cl)
    return t.push({
      type: 'separator',
      navigable: !1
    }), t;
  if (n.type === h.kS) {
    let r = e(n.props.children);
    return r.length > 0 && (t.push({
      type: 'groupstart',
      length: r.length,
      navigable: !1,
      props: n.props
    }), t.push(...r), t.push({
      type: 'groupend',
      length: r.length,
      navigable: !1,
      props: n.props
    })), t;
  }
  if (n.type === h.sN)
    return t.push(null != n.props.render ? {
      type: 'customitem',
      key: n.props.id,
      navigable: null == n.props.navigable || n.props.navigable,
      render: n.props.render,
      props: n.props
    } : {
      type: 'item',
      key: n.props.id,
      navigable: !0,
      label: n.props.label,
      children: n.props.children ? e(n.props.children) : void 0,
      onChildrenScroll: n.props.onChildrenScroll,
      props: n.props,
      childRowHeight: n.props.childRowHeight,
      listClassName: n.props.listClassName,
      subMenuClassName: n.props.subMenuClassName
    }), t;
  else if (n.type === h.S8)
    return t.push({
      type: 'checkbox',
      key: n.props.id,
      navigable: !0,
      props: n.props
    }), t;
  else if (n.type === h.k5)
    return t.push({
      type: 'radio',
      key: n.props.id,
      navigable: !0,
      props: n.props
    }), t;
  else if (n.type === h.II)
    return t.push(null != n.props.control ? {
      type: 'control',
      key: n.props.id,
      navigable: !0,
      props: n.props
    } : {
      type: 'compositecontrol',
      key: n.props.id,
      navigable: !1 !== n.props.interactive,
      children: n.props.children,
      props: n.props
    }), t;
  throw Error('Menu API only allows Items and groups of Items as children. Received '.concat(null !== (i = null !== (r = null == n ? void 0 : n.type) && void 0 !== r ? r : n) && void 0 !== i ? i : typeof n, ' (').concat(typeof n, ') instead'));
}, []);
  }(T), v = function e(t) {
return t.reduce((t, n) => n.navigable ? (t.push({
  key: n.key,
  children: 'item' === n.type && null != n.children ? e(n.children) : void 0
}), t) : t, []);
  }(N), O = i.useRef([]);
  !l()(O.current, v) && (O.current = v);
  let R = null === (t = N.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
C = (0, u.ZP)({
  navId: n,
  items: O.current,
  initialFocusPath: f.Z.keyboardModeEnabled && null != R ? [R] : [],
  closeMenu: g
});
  i.useEffect(() => {
C.isUsingKeyboardNavigation ? !f.Z.keyboardModeEnabled && (0, E.Qj)() : f.Z.keyboardModeEnabled && (0, E.rf)();
  }, [C.isUsingKeyboardNavigation]);
  let y = i.useRef(null);
  (0, c.T)(y);
  let D = s ? d.u2 : d.zJ;
  return (0, r.jsx)(p.r.Provider, {
value: A,
children: (0, r.jsx)('div', {
  className: o()(I.menu, I[a], _),
  ...C.getContainerProps(),
  ref: y,
  'aria-label': e['aria-label'],
  children: (0, r.jsxs)(D, {
    className: I.scroller,
    children: [
      0 === N.length && (0, r.jsx)(m.ck, {
        disabled: !0,
        label: () => (0, r.jsx)(S, {}),
        menuItemProps: C.getItemProps({
          path: ['empty']
        }),
        isFocused: !1,
        onFocus: () => {},
        onClose: g
      }),
      N.length > 0 && function e(t, n, i, a) {
        let o = 0,
          s = [];
        return t.reduce((t, l, u) => {
          let c = s.length > 0 ? s[s.length - 1] : t;
          switch (l.type) {
            case 'separator':
              c.push((0, r.jsx)(m.Z0, {}, 'separator-'.concat(u))), o = 0;
              break;
            case 'groupstart':
              o > 0 && l.length > 0 && (c.push((0, r.jsx)(m.Z0, {}, 'separator-'.concat(u))), o = 0), s.push([]);
              break;
            case 'groupend':
              s.length > 0 && t.push((0, r.jsx)(m.ZA, {
                contents: s.pop(),
                ...l.props
              }, 'group-'.concat(u)));
              break;
            case 'item': {
              let {
                children: t,
                childRowHeight: s,
                onChildrenScroll: u,
                listClassName: d,
                subMenuClassName: _
              } = l, E = null != t, f = [
                ...i,
                l.key
              ], h = n.isFocused(f), p = (0, r.jsx)(m.ck, {
                ...l.props,
                label: l.label,
                hasSubmenu: null != t,
                isFocused: h,
                menuItemProps: {
                  ...n.getItemProps({
                    path: f,
                    hasSubmenu: E
                  }),
                  ...null != t ? {
                    'aria-haspopup': !0
                  } : {}
                },
                onClose: a
              }, l.key);
              E ? null != s ? c.push((0, r.jsx)(m.P2, {
                ...l.props,
                parentItem: p,
                isFocused: h,
                menuSubmenuProps: n.getSubmenuProps({
                  path: f
                }),
                rows: e(t, n, f, a),
                rowHeight: s,
                onScroll: u,
                listClassName: d
              }, ''.concat(l.key, '-submenu'))) : c.push((0, r.jsx)(m.LY, {
                ...l.props,
                subMenuClassName: _,
                parentItem: p,
                isFocused: h,
                menuSubmenuProps: n.getSubmenuProps({
                  path: f
                }),
                renderSubmenu: () => e(t, n, f, a)
              }, ''.concat(l.key, '-submenu'))) : c.push(p), o++;
              break;
            }
            case 'customitem': {
              let e = [
                ...i,
                l.key
              ];
              c.push((0, r.jsx)(m.kq, {
                ...l.props,
                isFocused: n.isFocused(e),
                menuItemProps: n.getItemProps({
                  path: e
                }),
                onClose: a,
                children: l.render
              }, l.key)), o++;
              break;
            }
            case 'checkbox': {
              let e = [
                ...i,
                l.key
              ];
              c.push((0, r.jsx)(m.oC, {
                ...l.props,
                isFocused: n.isFocused(e),
                menuItemProps: n.getItemProps({
                  path: e,
                  role: 'menuitemcheckbox'
                })
              }, l.key)), o++;
              break;
            }
            case 'radio': {
              let e = [
                ...i,
                l.key
              ];
              c.push((0, r.jsx)(m.Rk, {
                ...l.props,
                isFocused: n.isFocused(e),
                menuItemProps: n.getItemProps({
                  path: e,
                  role: 'menuitemradio'
                })
              }, l.key)), o++;
              break;
            }
            case 'control': {
              let e = [
                ...i,
                l.key
              ];
              c.push((0, r.jsx)(m.lc, {
                ...l.props,
                isFocused: n.isFocused(e),
                menuItemProps: n.getItemProps({
                  path: e
                }),
                onClose: a
              }, l.key)), o++;
              break;
            }
            case 'compositecontrol': {
              let e = [
                ...i,
                l.key
              ];
              c.push((0, r.jsx)(m.$I, {
                ...l.props,
                isFocused: n.isFocused(e),
                menuItemProps: n.getItemProps({
                  path: e
                }),
                onClose: a,
                children: l.children
              }, l.key)), o++;
            }
          }
          return t;
        }, []);
      }(N, C, [], g)
    ]
  })
})
  });
}

function g() {
  return (0, r.jsx)('div', {
className: o()(I.menu, I.loader, I.flexible),
children: (0, r.jsx)(_.$, {})
  });
}

function S() {
  let e = '\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A',
[t, n] = i.useState(e);
  return i.useEffect(() => {
if (f.Z.useReducedMotion)
  return;
let t = setInterval(() => {
  n(t => t === e ? '\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A' : e);
}, 700);
return () => clearInterval(t);
  }, []), (0, r.jsx)('div', {
style: {
  width: '100%',
  textAlign: 'center'
},
children: t
  });
}