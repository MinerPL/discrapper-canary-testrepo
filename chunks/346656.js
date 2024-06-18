"use strict";
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(613828),
  u = n(442837),
  _ = n(692547),
  d = n(481060),
  c = n(891819),
  E = n(451478),
  I = n(956664),
  T = n(153066),
  h = n(940627),
  S = n(794647);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = {
    SMOL: "Smol",
    MINI: "Mini",
    SMALLER: "Smaller",
    SMALL: "Small",
    MEDIUM: "Medium",
    LARGE: "Large",
    LARGER: "Larger",
    XLARGE: "XLarge"
  },
  A = {
    [N.SMOL]: 16,
    [N.MINI]: 20,
    [N.SMALLER]: 24,
    [N.SMALL]: 30,
    [N.MEDIUM]: 40,
    [N.LARGE]: 50,
    [N.LARGER]: 64,
    [N.XLARGE]: 100
  },
  m = {
    [N.SMOL]: [10, 10, 8, 6, 6, 4],
    [N.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [N.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [N.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [N.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [N.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [N.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [N.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class O extends s.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != e.icon || null != t ? null : (0, r.jsx)("div", {
      className: S.acronym,
      children: e.acronym
    })
  }
  renderBadge() {
    let {
      showBadge: e,
      guild: t,
      badgeStrokeColor: n,
      badgeTooltipColor: i,
      badgeTooltipDelay: s
    } = this.props;
    return e && null != t.hasFeature ? (0, r.jsx)(h.Z, {
      className: S.guildIconBadge,
      guild: t,
      badgeStrokeColor: n,
      tooltipColor: i,
      tooltipDelay: s
    }) : null
  }
  renderIcon() {
    var e, t;
    let {
      guild: n,
      className: i,
      showBadge: s,
      active: o,
      size: l,
      style: u = {},
      textScale: _,
      showTooltip: c,
      tooltipPosition: E,
      onClick: I,
      to: h,
      badgeStrokeColor: f,
      animate: N,
      tabIndex: A,
      iconSrc: O,
      "aria-hidden": R,
      ...C
    } = this.props, p = m[l], g = null != I ? d.Clickable : "div";
    return (0, r.jsxs)(g, {
      className: a()(S.icon, i, (0, T.l)(S, "iconSize", l), {
        [null !== (e = (0, T.l)(S, "iconActive", l)) && void 0 !== e ? e : ""]: o,
        [S.iconInactive]: !o,
        [S.noIcon]: null == n.icon
      }),
      "aria-hidden": R,
      style: null == n.icon ? {
        fontSize: (null !== (t = p[n.acronym.length]) && void 0 !== t ? t : p[p.length - 1]) * _,
        ...u
      } : u,
      onClick: null != h || null == I ? void 0 : I,
      tabIndex: A,
      ...C,
      children: [this.renderAcronym(), this.renderBadge()]
    })
  }
  renderTooltip() {
    let {
      guild: e,
      showTooltip: t,
      tooltipPosition: n
    } = this.props;
    return t ? (0, r.jsx)(d.Tooltip, {
      text: e.name,
      position: n,
      "aria-label": !1,
      children: e => s.cloneElement(s.Children.only(this.renderIcon()), {
        ...e
      })
    }) : this.renderIcon()
  }
  render() {
    let {
      to: e,
      guild: t,
      source: n,
      tabIndex: i,
      "aria-hidden": s
    } = this.props;
    return null != e ? (0, r.jsx)(l.rU, {
      "aria-hidden": s,
      to: {
        pathname: e,
        state: null != n ? {
          analyticsSource: n
        } : null
      },
      "aria-label": t.toString(),
      tabIndex: i,
      children: this.renderTooltip()
    }) : this.renderTooltip()
  }
}
let R = u.ZP.connectStores([E.Z], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: i,
    style: r,
    size: s
  } = e;
  return {
    style: {
      ...r,
      backgroundImage: (0, I.rv)(null != i ? i : t.getIconURL(A[s], n && E.Z.isFocused()))
    }
  }
})((0, c.N)(e => (0, r.jsx)(O, {
  ...e
})));
class C extends(i = s.PureComponent) {
  render() {
    return (0, r.jsx)(R, {
      ...this.props
    })
  }
}
f(C, "Sizes", N), f(C, "defaultProps", {
  size: N.LARGE,
  textScale: 1,
  showBadge: !1,
  showTooltip: !1,
  active: !1,
  tooltipPosition: "top",
  badgeStrokeColor: _.Z.unsafe_rawColors.WHITE_500.css,
  animate: !1
}), t.Z = C