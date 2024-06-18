"use strict";
n.d(t, {
  a: function() {
    return g
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(96355),
  _ = n(47759),
  d = n.n(_),
  c = n(920906),
  E = n(772848),
  I = n(722770),
  T = n(846519),
  h = n(215569),
  S = n(280001);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = {
    friction: 13,
    tension: 240,
    duration: 150
  },
  A = {
    duration: 150,
    friction: 3
  },
  m = {
    friction: 30,
    tension: 900,
    mass: 1
  },
  O = {
    duration: 150,
    friction: 10,
    tension: 100,
    mass: 1
  },
  R = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null ? (0, u.interpolate)("M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z", "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z", {
    maxSegmentLength: 1.5
  }) : e => "".concat(e);
class C extends o.Component {
  componentDidMount() {
    this.forceUpdate()
  }
  componentWillAppear(e) {
    e()
  }
  componentWillEnter(e) {
    e()
  }
  componentWillLeave(e) {
    this.timeoutId = setTimeout(e, 300)
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }
  render() {
    let {
      children: e,
      className: t,
      animatedStyle: n
    } = this.props;
    return (0, s.jsx)(c.animated.div, {
      className: t,
      style: n,
      children: e
    })
  }
  constructor(...e) {
    super(...e), f(this, "timeoutId", void 0)
  }
}

function p(e) {
  let {
    selected: t,
    upperBadge: n,
    lowerBadge: i,
    highlight: r
  } = e;
  return t || null != n || null != i || !!r
}
class g extends(r = o.Component) {
  static getDerivedStateFromProps(e, t) {
    let {
      hasRenderedBadge: n,
      upperBadgeMask: i,
      lowerBadgeMask: r,
      borderRadiusMask: s,
      renderComplex: o
    } = t, {
      upperBadge: a,
      lowerBadge: l
    } = e, u = !1;
    return (null != a && null == i || null != l && null == r) && (u = !0, n = !0, i = new c.Controller({
      spring: 0
    }), r = new c.Controller({
      spring: 0
    })), p(e) && null == s && (u = !0, s = new c.Controller({
      spring: 0
    })), !o && p(e) && (u = !0, o = !0), u ? {
      hasRenderedBadge: n,
      lowerBadgeMask: r,
      upperBadgeMask: i,
      borderRadiusMask: s,
      renderComplex: o
    } : null
  }
  componentDidMount() {
    let {
      selected: e,
      lowerBadge: t,
      upperBadge: n
    } = this.props, {
      borderRadiusMask: i,
      lowerBadgeMask: r,
      upperBadgeMask: s
    } = this.state;
    null == i || i.update({
      spring: e ? 1 : 0,
      immediate: !0
    }).start(), null == r || r.update({
      spring: null != t ? 1 : 0,
      immediate: !0
    }).start(), null == s || s.update({
      spring: null != n ? 1 : 0,
      immediate: !0
    }).start()
  }
  componentWillUnmount() {
    let {
      borderRadiusMask: e,
      lowerBadgeMask: t,
      upperBadgeMask: n
    } = this.state;
    this.timeout.stop(), null == e || e.dispose(), null == t || t.dispose(), null == n || n.dispose()
  }
  componentDidUpdate(e) {
    let {
      selected: t,
      lowerBadge: n,
      upperBadge: i
    } = this.props, {
      borderRadiusMask: r,
      lowerBadgeMask: s,
      upperBadgeMask: o,
      renderComplex: a
    } = this.state;
    t && !e.selected ? null == r || r.update({
      spring: 1,
      immediate: !1,
      config: N
    }).start() : !t && e.selected && (null == r || r.update({
      spring: 0,
      immediate: !1,
      config: A
    }).start()), null != n && null == e.lowerBadge ? null == s || s.update({
      spring: 1,
      immediate: !document.hasFocus(),
      config: m
    }).start() : null == n && null != e.lowerBadge && (null == s || s.update({
      spring: 0,
      immediate: !document.hasFocus(),
      config: O
    }).start()), null != i && null == e.upperBadge ? null == o || o.update({
      spring: 1,
      immediate: !document.hasFocus(),
      config: m
    }).start() : null == i && null != e.upperBadge && (null == o || o.update({
      spring: 0,
      immediate: !document.hasFocus(),
      config: O
    }).start()), !a || p(this.props) || this.timeout.isStarted() ? p(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(d()(108e5, 18e6), this.handleTimeout)
  }
  getBadgePositionInterpolation(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
    if (null == e) return;
    let {
      spring: i
    } = e.springs;
    return i.to([0, 1], [n, 0]).to(e => "translate(".concat(e, " ").concat(e * t, ")"))
  }
  getLowerBadgeStyles() {
    let {
      lowerBadgeMask: e
    } = this.state, {
      lowerBadgeSize: t
    } = this.props;
    if (null == e) return;
    let {
      spring: n
    } = e.springs, i = (null == t ? void 0 : t.width) != null ? t.width : 16, r = (null == t ? void 0 : t.height) != null ? t.height : 16;
    return {
      opacity: n.to([0, .5, 1], [0, 0, 1]),
      transform: n.to(e => "translate(".concat(i - e * i, "px, ").concat(r - e * r, "px)"))
    }
  }
  getUpperBadgeStyles() {
    let {
      upperBadgeMask: e
    } = this.state;
    if (null == e) return;
    let {
      spring: t
    } = e.springs;
    return {
      opacity: t.to([0, .5, 1], [0, 0, 1]),
      transform: t.to(e => "translate(".concat(16 - 16 * e, "px, ").concat(-1 * (16 - 16 * e), "px)"))
    }
  }
  getPathInterpolation() {
    var e;
    return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(R)
  }
  render() {
    let {
      children: e,
      className: t,
      innerClassName: n,
      lowerBadge: i,
      lowerBadgeSize: r,
      style: a,
      upperBadge: u,
      highlight: _
    } = this.props, {
      maskId: d,
      lowerBadgeMask: E,
      upperBadgeMask: T,
      focused: f,
      hasRenderedBadge: N,
      renderComplex: A
    } = this.state;
    if (!A) return (0, s.jsx)("div", {
      className: l()(t, {
        [S.wrapperSimple]: !0,
        [S.simpleFocused]: f
      }),
      style: a,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      children: (0, s.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 ".concat(48, " ").concat(48),
        className: S.svg,
        overflow: "visible",
        children: (0, s.jsx)("foreignObject", {
          x: 0,
          y: 0,
          className: n,
          width: 48,
          height: 48,
          children: e
        }, "foreign-object")
      }, "svg")
    }, "wrapper");
    let m = "".concat(d, "-upper_badge_masks"),
      O = "".concat(d, "-lower_badge_masks"),
      R = "".concat(d, "-blob_mask"),
      p = "".concat(d, "-stroke_mask"),
      g = "".concat(d, "-highlight_mask"),
      L = (null == r ? void 0 : r.width) != null ? r.width : 16,
      v = (null == r ? void 0 : r.height) != null ? r.height : 16;
    return (0, s.jsxs)("div", {
      className: l()(t, S.wrapper),
      style: a,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      children: [(0, s.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 ".concat(48, " ").concat(48),
        className: l()(S.svg, {
          [S.noContain]: _
        }),
        overflow: "visible",
        children: [(0, s.jsxs)("defs", {
          children: [_ && (0, s.jsx)(c.animated.path, {
            d: this.getPathInterpolation(),
            id: g
          }), (0, s.jsx)(c.animated.path, {
            d: this.getPathInterpolation(),
            id: R
          }), N ? (0, s.jsx)(c.animated.rect, {
            id: m,
            x: 28,
            y: -4,
            width: 24,
            height: 24,
            rx: 12,
            ry: 12,
            transform: this.getBadgePositionInterpolation(T, -1)
          }) : null, N ? (0, s.jsx)(c.animated.rect, {
            id: O,
            x: 48 - (L + 8) + 4,
            y: 48 - (v + 8) + 4,
            width: L + 8,
            height: v + 8,
            rx: 12,
            ry: 12,
            transform: this.getBadgePositionInterpolation(E, 1, L + 4)
          }) : null]
        }), (0, s.jsxs)("mask", {
          id: d,
          fill: "black",
          x: 0,
          y: 0,
          width: 48,
          height: 48,
          children: [_ && (0, s.jsx)("use", {
            href: "#".concat(g),
            fill: "black"
          }), (0, s.jsx)("use", {
            href: "#".concat(R),
            fill: "white",
            className: l()({
              [S.isHighlighted]: _
            })
          }), N ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("use", {
              href: "#".concat(m),
              fill: "black"
            }), (0, s.jsx)("use", {
              href: "#".concat(O),
              fill: "black"
            })]
          }) : null]
        }), N ? (0, s.jsxs)("mask", {
          id: p,
          children: [(0, s.jsx)("rect", {
            width: "150%",
            height: "150%",
            x: "-25%",
            y: "-25%",
            fill: "white"
          }), (0, s.jsx)("use", {
            href: "#".concat(m),
            fill: "black"
          }), (0, s.jsx)("use", {
            href: "#".concat(O),
            fill: "black"
          })]
        }) : null, f ? (0, s.jsxs)(o.Fragment, {
          children: [(0, s.jsx)("g", {
            className: S.focusStroke,
            mask: "url(#".concat(p, ")"),
            children: (0, s.jsx)("use", {
              href: "#".concat(R)
            })
          }), (0, s.jsxs)("g", {
            className: S.focusFill,
            children: [null != u ? (0, s.jsx)("use", {
              href: "#".concat(m)
            }) : null, null != i ? (0, s.jsx)("use", {
              href: "#".concat(O)
            }) : null]
          })]
        }) : null, _ && (0, s.jsx)(c.animated.path, {
          d: this.getPathInterpolation(),
          stroke: I.Z.BRAND_500,
          "stroke-width": 2,
          className: S.highlight,
          mask: "url(#".concat(p, ")")
        }), (0, s.jsx)("foreignObject", {
          mask: "url(#".concat(d, ")"),
          x: 0,
          y: 0,
          className: n,
          width: 48,
          height: 48,
          children: e
        }, "foreign-object")]
      }, "svg"), (0, s.jsxs)(h.W, {
        component: o.Fragment,
        children: [null != i ? (0, s.jsx)(C, {
          className: S.lowerBadge,
          animatedStyle: this.getLowerBadgeStyles(),
          children: i
        }, "lower-badge") : null, null != u ? (0, s.jsx)(C, {
          className: S.upperBadge,
          animatedStyle: this.getUpperBadgeStyles(),
          children: u
        }, "upper-badge") : null]
      })]
    }, "wrapper")
  }
  constructor(...e) {
    super(...e), f(this, "timeout", new T.V7), f(this, "state", {
      renderComplex: !1,
      hasRenderedBadge: !1,
      maskId: (0, E.Z)(),
      focused: !1
    }), f(this, "handleTimeout", () => {
      this.timeout.stop(), this.setState({
        renderComplex: !1
      })
    }), f(this, "handleFocus", () => {
      this.setState({
        focused: !0
      })
    }), f(this, "handleBlur", () => {
      this.setState({
        focused: !1
      })
    })
  }
}
f(g, "defaultProps", {
  selected: !1,
  lowerBadgeSize: {
    width: 16,
    height: 16
  },
  highlight: !1
})