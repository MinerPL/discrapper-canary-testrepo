"use strict";
n.d(t, {
  Cy: function() {
    return R
  },
  DY: function() {
    return D
  },
  FG: function() {
    return i
  },
  u: function() {
    return v
  }
}), n(411104), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(699581),
  d = n(920906),
  c = n(873546),
  E = n(374470),
  I = n(846519),
  T = n(377527),
  h = n(186325),
  S = n(607070),
  f = n(153850),
  N = n(816809);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).PRIMARY = "primary", s.NESTED = "nested", s.BLACK = "black", s.GREY = "grey", s.BRAND = "brand", s.GREEN = "green", s.YELLOW = "yellow", s.RED = "red", s.CUSTOM = "custom", s.PREMIUM = "premium";
let m = Object.freeze({}),
  O = Object.freeze({
    top: N.tooltipTop,
    bottom: N.tooltipBottom,
    left: N.tooltipLeft,
    right: N.tooltipRight,
    center: N.tooltipCenter,
    window_center: N.tooltipCenter,
    primary: N.tooltipPrimary,
    nested: N.tooltipNested,
    black: N.tooltipBlack,
    grey: N.tooltipGrey,
    brand: N.tooltipBrand,
    green: N.tooltipGreen,
    yellow: N.tooltipYellow,
    red: N.tooltipRed,
    custom: null,
    premium: N.tooltipPremium
  }),
  R = e => {
    let {
      targetElementRef: t,
      align: n = "center",
      position: i,
      color: r,
      children: s,
      onNonAccessibleClick: a,
      tooltipClassName: l,
      tooltipStyle: _,
      tooltipContentClassName: c,
      spacing: E = 8,
      animationStyle: I,
      disableTooltipPointerEvents: T = !1,
      allowOverflow: h = !1
    } = e, S = "".concat("string" == typeof s ? s : "", ":").concat(i);
    return (0, o.jsx)(f.W5, {
      disablePointerEvents: T,
      targetRef: t,
      position: i,
      autoInvert: !0,
      align: n,
      positionKey: S,
      spacing: E,
      nudgeAlignIntoViewport: !0,
      children: e => {
        let {
          position: t,
          nudge: E
        } = e;
        return (0, o.jsxs)(d.animated.div, {
          onClick: a,
          className: u()(N.tooltip, O[null != t ? t : i], O[r], {
            [N.tooltipDisablePointerEvents]: T
          }, l),
          style: {
            ...I,
            ..._
          },
          children: [(0, o.jsx)("div", {
            className: N.tooltipPointer,
            style: function(e, t, n) {
              let i = "left" === e || "right" === e,
                r = "50%",
                s = n;
              return t === (i ? "top" : "left") ? (r = "0%", s += 16) : t === (i ? "bottom" : "right") && (r = "100%", s -= 20), {
                [i ? "top" : "left"]: "calc(".concat(r, " + ").concat(s, "px)")
              }
            }(null != t ? t : i, n, E)
          }), (0, o.jsx)("div", {
            className: u()(N.tooltipContent, {
              [N.tooltipContentAllowOverflow]: h
            }, c),
            children: s
          })]
        })
      }
    })
  },
  C = {
    scale: .95,
    opacity: 0
  },
  p = {
    scale: 1,
    opacity: 0
  },
  g = {
    scale: 1,
    opacity: 1
  },
  L = e => {
    let {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: i,
      ...r
    } = e, {
      reducedMotion: s
    } = a.useContext(h.S);
    return (0, d.useTransition)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: T.F,
      from: s.enabled ? p : C,
      enter: g,
      leave: s.enabled ? p : C,
      onRest: n
    })((e, t) => t ? (0, o.jsx)(R, {
      animationStyle: e,
      targetElementRef: i,
      ...r
    }) : null)
  };
class v extends(r = a.Component) {
  static getDerivedStateFromProps(e, t) {
    return t.shouldShowTooltip && null == e.text ? {
      shouldShowTooltip: !1
    } : null
  }
  componentDidMount() {
    this.shouldShowTooltip(this.props, this.state) && this.setDomElement()
  }
  componentDidUpdate(e, t) {
    let n = this.shouldShowTooltip(this.props, this.state);
    n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1)
  }
  setDomElement() {
    let e = _.findDOMNode(this);
    if (!(0, E.k)(e)) throw Error("Tooltip cannot find DOM node");
    this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate()
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.domElementRef.current = null
  }
  render() {
    let e;
    let {
      children: t,
      text: n,
      "aria-label": i
    } = this.props;
    if (null == n) return t(m);
    "string" == typeof i ? e = i : "string" == typeof n && !1 !== i && (e = n);
    let r = {
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };
    return null != e && (r["aria-label"] = e), (0, o.jsxs)(a.Fragment, {
      children: [t(r), this.renderTooltip()]
    })
  }
  shouldShowTooltip(e, t) {
    return e.shouldShow && (t.shouldShowTooltip || e.forceOpen)
  }
  renderTooltip() {
    let {
      text: e,
      align: t,
      position: n,
      color: i,
      spacing: r,
      tooltipClassName: s,
      tooltipStyle: a,
      tooltipContentClassName: l,
      disableTooltipPointerEvents: u,
      onAnimationRest: _,
      allowOverflow: d,
      clickableOnMobile: E,
      hideOnClick: I
    } = this.props, T = (c.tq || c.Em) && !0 === E && I, h = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, S = null;
    return S = e instanceof Function ? h ? e() : null : e, (0, o.jsx)(L, {
      disableTooltipPointerEvents: !1 !== u && !T || !0 === u,
      targetElementRef: this.domElementRef,
      tooltipStyle: a,
      tooltipClassName: s,
      tooltipContentClassName: l,
      align: t,
      position: n,
      color: i,
      spacing: r,
      isVisible: h,
      onAnimationRest: _,
      onNonAccessibleClick: T ? this.handleClick : void 0,
      allowOverflow: d,
      children: S
    })
  }
  show() {
    let {
      delay: e,
      overflowOnly: t
    } = this.props;
    if (t) {
      let e = _.findDOMNode(this);
      if (null == e || (0, E.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
    }
    null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0)
  }
  hide() {
    this.showTimeout.stop(), this.toggleShow(!1)
  }
  toggleShow(e) {
    if (this.state.shouldShowTooltip !== e) {
      var t, n, i, r;
      e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (i = (r = this.props).onTooltipHide) || void 0 === i || i.call(r), _.flushSync(() => {
        this.setState({
          shouldShowTooltip: e
        })
      })
    }
  }
  constructor(...e) {
    super(...e), A(this, "showTimeout", new I.V7), A(this, "domElementRef", a.createRef()), A(this, "hasDomElement", !1), A(this, "state", {
      shouldShowTooltip: !1
    }), A(this, "handleMouseEnter", () => {
      !((c.tq || c.Em) && !0 === this.props.clickableOnMobile) && this.show()
    }), A(this, "handleMouseLeave", () => {
      !((c.tq || c.Em) && !0 === this.props.clickableOnMobile) && this.hide()
    }), A(this, "handleFocus", () => {
      S.Z.keyboardModeEnabled && this.show()
    }), A(this, "handleBlur", () => {
      this.hide()
    }), A(this, "handleClick", () => {
      let e = this.hasDomElement;
      e && this.props.hideOnClick ? this.hide() : !e && (c.tq || c.Em) && !0 === this.props.clickableOnMobile && this.show()
    }), A(this, "handleContextMenu", () => {
      this.hide()
    })
  }
}
A(v, "Colors", i), A(v, "defaultProps", {
  hideOnClick: !0,
  position: "top",
  color: "primary",
  forceOpen: !1,
  spacing: 8,
  shouldShow: !0,
  allowOverflow: !1,
  overflowOnly: !1
});
let D = e => {
  let {
    children: t,
    className: n,
    element: i = "div",
    ...r
  } = e;
  return (0, o.jsx)(v, {
    ...r,
    children: e => a.createElement(i, null != n ? {
      ...e,
      className: n
    } : e, t)
  })
}