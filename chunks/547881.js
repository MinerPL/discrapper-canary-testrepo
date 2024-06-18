"use strict";
n.d(t, {
  wB: function() {
    return m
  }
}), n(411104);
var i, s, l, a, o = n(735250),
  r = n(470079),
  d = n(120356),
  c = n.n(d),
  u = n(877921),
  h = n.n(u),
  p = n(481060),
  f = n(981631),
  E = n(744537),
  Z = n(961047);
let g = f.t_t.DEFAULT,
  m = 1,
  _ = r.createContext({
    type: g,
    opacity: m
  }),
  I = r.createContext(void 0),
  S = e => {
    let {
      children: t,
      className: n,
      ...i
    } = e;
    return (0, o.jsx)(_.Consumer, {
      children: e => {
        let {
          type: s
        } = e;
        return (0, o.jsx)(I.Consumer, {
          children: e => (0, o.jsx)("div", {
            className: c()(n, E.bar, E[h()(s)]),
            style: e,
            ...i,
            children: t
          })
        })
      }
    })
  };
class v extends(i = r.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, o.jsx)(I.Consumer, {
      children: i => (0, o.jsx)(_.Consumer, {
        children: s => {
          let l = c()(E.body, E[h()(s.type)], n);
          return e ? (0, o.jsx)("div", {
            className: l,
            style: i,
            children: t
          }) : (0, o.jsx)(p.Scroller, {
            fade: !0,
            className: l,
            children: t
          })
        }
      })
    })
  }
}
a = {
  disableScroll: !1
}, (l = "defaultProps") in(s = v) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a;
let C = e => {
    let {
      type: t = g,
      width: n,
      height: i,
      children: s,
      className: l,
      opacity: a = m,
      onClick: r
    } = e;
    return (0, o.jsx)(_.Provider, {
      value: {
        type: t,
        opacity: a
      },
      children: (0, o.jsx)("div", {
        className: c()(E.widget, E[h()(t)], l),
        style: {
          width: n,
          height: i
        },
        onClick: r,
        children: s
      })
    })
  },
  x = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = !1
    } = e;
    return (0, o.jsx)(I.Consumer, {
      children: e => (0, o.jsx)("div", {
        className: c()(E.content, n, {
          [E.staticSize]: !i
        }),
        style: e,
        children: t
      })
    })
  };
C.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [S, v, x];
  return (0, o.jsx)(_.Consumer, {
    children: e => {
      let {
        opacity: s
      } = e, l = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : s), ")")
      };
      if ("string" == typeof t.type) return r.cloneElement(t, {
        style: l
      });
      if (i.includes(t.type)) return (0, o.jsx)(I.Provider, {
        value: l,
        children: t
      });
      {
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, C.Body = v, C.Content = x, C.Icon = e => {
  let {
    icon: t,
    label: n,
    onClick: i,
    isActive: s,
    tooltipPosition: l = "top",
    size: a = 20,
    isTutorial: r = !1
  } = e;
  return (0, o.jsx)(p.Tooltip, {
    text: r ? (0, o.jsx)("div", {
      className: E.tutorialTip,
      children: n
    }) : n,
    "aria-label": n,
    position: l,
    forceOpen: r,
    color: r ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: r
      } = e;
      return (0, o.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        size: p.Button.Sizes.NONE,
        onClick: i,
        onMouseEnter: l,
        onMouseLeave: r,
        className: c()(E.icon, {
          [E.toggledIconOn]: s
        }),
        innerClassName: Z.flexCenter,
        "aria-label": n,
        children: (0, o.jsx)(t, {
          width: a,
          height: a,
          role: "img"
        })
      })
    }
  })
}, C.Bar = S, t.ZP = C