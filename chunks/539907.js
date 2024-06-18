"use strict";
n.d(t, {
  j: function() {
    return p
  },
  t: function() {
    return A
  }
}), n(47120), n(411104);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(512722),
  u = n.n(l),
  _ = n(84735),
  d = n(801787),
  c = n(585483),
  E = n(792125),
  I = n(872801),
  T = n(302901),
  h = n(981631),
  S = n(871860);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = new WeakMap;

function A(e, t) {
  if (e.contains(t)) return !0;
  let n = (0, I.Z)(t, S.layer);
  for (; null != n;) {
    let t = N.get(n);
    if (null == t) break;
    if (e.contains(t)) return !0;
    n = (0, I.Z)(t, S.layer)
  }
  return !1
}

function m(e) {
  let {
    positionKey: t,
    position: n,
    align: i
  } = e;
  return null != t ? t : "".concat(n, ":").concat(i)
}

function O(e, t, n, i) {
  switch (e) {
    case "top":
      return u()(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight);
    case "bottom":
      return u()(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight);
    case "left":
      return u()(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth);
    case "right":
      return u()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth);
    case "center":
    case "window_center":
      return u()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2);
    default:
      throw Error("Unexpected position: ".concat(e))
  }
}

function R(e, t, n) {
  if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
    let t = "top" === n.position ? "bottom" : "top",
      i = n.style[t];
    return {
      ...n,
      style: {
        ...n.style,
        [t]: (null == i ? 0 : i) + e
      }
    }
  }
  return n
}

function C(e) {
  let {
    targetRef: t,
    overrideTargetRect: n
  } = e;
  return null != n ? n : (u()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect())
}
class p extends(i = s.Component) {
  formatDimension(e) {
    return this.props.useRawTargetDimensions ? e : Math.ceil(e)
  }
  nudgeLeftAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: i
    } = this.props;
    if (!i) return e;
    let r = n.offsetWidth,
      s = e + t.offsetWidth - r + 12;
    return s > 0 ? Math.max(12, e - s) : e
  }
  getHorizontalAlignmentStyle(e, t, n, i) {
    let {
      align: r
    } = this.props;
    switch (r) {
      case "left": {
        let r = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
          s = this.formatDimension(e.left) - r;
        return {
          style: {
            ...i,
            left: r
          },
          nudge: s
        }
      }
      case "right": {
        let t = this.formatDimension(n.offsetWidth - e.right);
        return {
          style: {
            ...i,
            right: t
          },
          nudge: 0
        }
      }
      case "center": {
        let r = e.left + (e.width - t.offsetWidth) / 2,
          s = this.formatDimension(this.nudgeLeftAlignment(r, t, n)),
          o = this.formatDimension(r) - s;
        return {
          style: {
            ...i,
            left: s
          },
          nudge: o
        }
      }
      default:
        throw Error("Unsupported align: ".concat(r))
    }
  }
  nudgeTopAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: i
    } = this.props;
    if (!i) return e;
    if (e < 0) return 0;
    let r = t.getBoundingClientRect().height,
      s = n.offsetHeight,
      o = e + r - s + 12;
    return o > 0 ? Math.max(12, e - o) : e
  }
  nudgeBottomAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: i
    } = this.props, r = n.offsetHeight, s = r - e;
    if (!i) return s;
    let o = s + t.offsetHeight - r + 12;
    return o > 0 ? Math.max(12, s - o) : s
  }
  getVerticalAlignmentStyle(e, t, n, i) {
    let {
      align: r
    } = this.props;
    switch (r) {
      case "top": {
        let r = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
          s = this.formatDimension(e.top) - r;
        return {
          style: {
            ...i,
            top: r
          },
          nudge: s
        }
      }
      case "bottom": {
        let r = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
          s = this.formatDimension(e.bottom) - r;
        return {
          style: {
            ...i,
            bottom: r
          },
          nudge: s
        }
      }
      case "center": {
        let r = e.top + (e.height - t.offsetHeight) / 2,
          s = this.formatDimension(this.nudgeTopAlignment(r, t, n)),
          o = this.formatDimension(r) - s;
        return {
          style: {
            ...i,
            top: s
          },
          nudge: o
        }
      }
      default:
        throw Error("Unsupported align: ".concat(r))
    }
  }
  calculatePositionStyle(e, t, n) {
    var i, r, s;
    let {
      spacing: o = 0
    } = this.props, a = C(this.props), l = n.getBoundingClientRect();
    let u = (i = a, r = l.left, s = l.top, {
      top: i.top - s,
      left: i.left - r,
      bottom: i.bottom - s,
      right: i.right - r,
      width: i.width,
      height: i.height
    });
    switch (e) {
      case "top":
        return this.getHorizontalAlignmentStyle(u, t, n, {
          bottom: n.offsetHeight - u.top + o
        });
      case "bottom":
        return this.getHorizontalAlignmentStyle(u, t, n, {
          top: u.bottom + o
        });
      case "left":
        return this.getVerticalAlignmentStyle(u, t, n, {
          right: n.offsetWidth - u.left + o
        });
      case "right":
        return this.getVerticalAlignmentStyle(u, t, n, {
          left: u.right + o
        });
      case "center":
        return this.getVerticalAlignmentStyle(u, t, n, {
          left: u.left + u.width / 2 - t.offsetWidth / 2 + o
        });
      case "window_center":
        return this.getVerticalAlignmentStyle(u, t, n, {
          left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0)
        });
      default:
        throw Error("Unexpected position: ".concat(e))
    }
  }
  calculateState() {
    let {
      position: e,
      autoInvert: t
    } = this.props, n = this.elementRef.current;
    u()(null != n, "Unexpected null element");
    let i = (0, T.wL)(n),
      {
        style: r,
        nudge: s
      } = this.calculatePositionStyle(e, n, i),
      o = null,
      a = null;
    if (t && (o = O(e, r, n, i)) < 0) {
      let t = function(e) {
          switch (e) {
            case "top":
              return "bottom";
            case "bottom":
              return "top";
            case "left":
              return "right";
            case "right":
              return "left";
            case "center":
              return "center";
            case "window_center":
              return "window_center";
            default:
              throw Error()
          }
        }(e),
        {
          style: r,
          nudge: s
        } = this.calculatePositionStyle(t, n, i);
      if ((a = O(t, r, n, i)) > o) return R(a, n, {
        position: t,
        nudge: s,
        style: r
      })
    }
    return R(o, n, {
      position: e,
      nudge: s,
      style: r
    })
  }
  componentDidMount() {
    var e, t;
    let {
      targetRef: n,
      onMount: i
    } = this.props;
    this.setState({
      isPositioned: !0,
      ...this.calculateState()
    });
    let r = this.elementRef.current;
    u()(null != r, "Missing elementRef"), null != n.current && N.set(r, n.current), c.S.subscribe(h.CkL.LAYER_POP_START, this.handleLayerPopStart), c.S.subscribe(h.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener("resize", this.handleLayerPopComplete), null == i || i()
  }
  componentDidUpdate(e, t) {
    if ((m(e) !== m(this.props) || ! function(e, t) {
        let n = C(e),
          i = C(t);
        return n.top === i.top && n.left === i.left
      }(e, this.props)) && this.updatePosition(), t.position !== this.state.position) {
      var n, i;
      null === (n = (i = this.props).onPositionChange) || void 0 === n || n.call(i, this.state.position)
    }
  }
  componentWillUnmount() {
    var e, t, n, i;
    let r = this.elementRef.current;
    u()(null != r, "Missing elementRef"), N.delete(r), c.S.unsubscribe(h.CkL.LAYER_POP_START, this.handleLayerPopStart), c.S.unsubscribe(h.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener("resize", this.handleLayerPopComplete), null === (n = (i = this.props).onUnmount) || void 0 === n || n.call(i)
  }
  render() {
    let {
      id: e,
      className: t,
      children: n,
      fixed: i,
      disablePointerEvents: s
    } = this.props, {
      position: o,
      isPositioned: l,
      isSettingsLayerTransitioning: u,
      nudge: c
    } = this.state;
    return (0, r.jsx)(d.C1, {
      children: d => {
        let {
          theme: I
        } = d;
        return (0, r.jsx)("div", {
          id: e,
          className: a()(t, (0, E.Q)(I), S.layer, {
            [S.emptyError]: !1,
            [S.layerHidden]: u,
            [S.disabledPointerEvents]: s
          }),
          style: {
            position: i ? "fixed" : "absolute",
            ...this.state.style
          },
          ref: this.elementRef,
          children: (0, r.jsx)(_.J, {
            containerRef: this.elementRef,
            children: n({
              position: o,
              nudge: c,
              isPositioned: l
            }, this.updatePosition)
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), f(this, "elementRef", s.createRef()), f(this, "state", {
      style: Object.freeze({}),
      position: this.props.autoInvert ? null : this.props.position,
      nudge: 0,
      isPositioned: !1,
      isSettingsLayerTransitioning: !1
    }), f(this, "handleLayerPopStart", () => {
      this.setState({
        isSettingsLayerTransitioning: !0
      })
    }), f(this, "handleLayerPopComplete", () => {
      let e = this.calculateState();
      this.setState({
        ...e,
        isSettingsLayerTransitioning: !1
      })
    }), f(this, "updatePosition", () => {
      this.setState(this.calculateState())
    })
  }
}
f(p, "defaultProps", {
  nudgeAlignIntoViewport: !1,
  spacing: 0,
  autoInvert: !1,
  disablePointerEvents: !1
})