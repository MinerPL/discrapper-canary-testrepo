n.d(t, {
  wB: function() {
return E;
  }
}), n(411104);
var i, s, a, o, r = n(735250),
  l = n(470079),
  c = n(120356),
  d = n.n(c),
  u = n(877921),
  h = n.n(u),
  p = n(481060),
  f = n(981631),
  _ = n(659816),
  g = n(483085);
let m = f.t_t.DEFAULT,
  E = 1,
  Z = l.createContext({
type: m,
opacity: E
  }),
  I = l.createContext(void 0),
  S = e => {
let {
  children: t,
  className: n,
  ...i
} = e;
return (0, r.jsx)(Z.Consumer, {
  children: e => {
    let {
      type: s
    } = e;
    return (0, r.jsx)(I.Consumer, {
      children: e => (0, r.jsx)('div', {
        className: d()(n, _.bar, _[h()(s)]),
        style: e,
        ...i,
        children: t
      })
    });
  }
});
  };
class C extends(i = l.PureComponent) {
  render() {
let {
  disableScroll: e,
  children: t,
  className: n
} = this.props;
return (0, r.jsx)(I.Consumer, {
  children: i => (0, r.jsx)(Z.Consumer, {
    children: s => {
      let a = d()(_.body, _[h()(s.type)], n);
      return e ? (0, r.jsx)('div', {
        className: a,
        style: i,
        children: t
      }) : (0, r.jsx)(p.Scroller, {
        fade: !0,
        className: a,
        children: t
      });
    }
  })
});
  }
}
o = {
  disableScroll: !1
}, (a = 'defaultProps') in(s = C) ? Object.defineProperty(s, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = o;
let v = e => {
let {
  type: t = m,
  width: n,
  height: i,
  children: s,
  className: a,
  opacity: o = E,
  onClick: l
} = e;
return (0, r.jsx)(Z.Provider, {
  value: {
    type: t,
    opacity: o
  },
  children: (0, r.jsx)('div', {
    className: d()(_.widget, _[h()(t)], a),
    style: {
      width: n,
      height: i
    },
    onClick: l,
    children: s
  })
});
  },
  x = e => {
let {
  children: t,
  className: n,
  dynamicSize: i = !1
} = e;
return (0, r.jsx)(I.Consumer, {
  children: e => (0, r.jsx)('div', {
    className: d()(_.content, n, {
      [_.staticSize]: !i
    }),
    style: e,
    children: t
  })
});
  };
v.Background = e => {
  let {
children: t,
opacityOverride: n
  } = e;
  if (null == t)
return null;
  let i = [
S,
C,
x
  ];
  return (0, r.jsx)(Z.Consumer, {
children: e => {
  let {
    opacity: s
  } = e, a = {
    backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')')
  };
  if ('string' == typeof t.type)
    return l.cloneElement(t, {
      style: a
    });
  if (i.includes(t.type))
    return (0, r.jsx)(I.Provider, {
      value: a,
      children: t
    });
  {
    let e = t.type.displayName;
    throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map(e => 'Widget.' + e.name).join(',')));
  }
}
  });
}, v.Body = C, v.Content = x, v.Icon = e => {
  let {
icon: t,
label: n,
onClick: i,
isActive: s,
tooltipPosition: a = 'top',
size: o = 20,
isTutorial: l = !1
  } = e;
  return (0, r.jsx)(p.Tooltip, {
text: l ? (0, r.jsx)('div', {
  className: _.tutorialTip,
  children: n
}) : n,
'aria-label': n,
position: a,
forceOpen: l,
color: l ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
children: e => {
  let {
    onMouseEnter: a,
    onMouseLeave: l
  } = e;
  return (0, r.jsx)(p.Button, {
    look: p.Button.Looks.BLANK,
    size: p.Button.Sizes.NONE,
    onClick: i,
    onMouseEnter: a,
    onMouseLeave: l,
    className: d()(_.icon, {
      [_.toggledIconOn]: s
    }),
    innerClassName: g.flexCenter,
    'aria-label': n,
    children: (0, r.jsx)(t, {
      color: 'currentColor',
      size: 'custom',
      width: o,
      height: o,
      role: 'img'
    })
  });
}
  });
}, v.Bar = S, t.ZP = v;