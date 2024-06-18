"use strict";
n.d(t, {
  i: function() {
    return A
  }
}), n(724458), n(411104);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(392711),
  d = n.n(_),
  c = n(374470),
  E = n(84735),
  I = n(981729),
  T = n(607070),
  h = n(65223);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e, t) {
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    if (e === r) return i;
    if (e < r) {
      if (0 === n || r - e < n) return i;
      return i - 1
    }
    n = e - r
  }
  return null
}(s = i || (i = {}))[s.ABOVE = 0] = "ABOVE", s[s.BELOW = 1] = "BELOW";

function N(e) {
  return {
    value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
    initialValueProp: e.initialValue,
    newClosestIndex: null,
    ... function(e) {
      let {
        markers: t,
        initialValue: n,
        minValue: i,
        maxValue: r,
        equidistant: s
      } = e, o = [], a = [];
      if (null == t) return {
        min: i,
        max: r,
        range: r - i,
        sortedMarkers: o,
        markerPositions: a
      };
      let l = f(n, o = t.sort((e, t) => e - t)),
        u = o[0],
        _ = o[o.length - 1],
        d = _ - u;
      if (s) {
        let e = 100 / (o.length - 1);
        a = o.map((t, n) => n * e)
      } else {
        let e = e => 100 * (e - u) / d;
        a = o.map(t => e(t))
      }
      return {
        min: u,
        max: _,
        range: d,
        sortedMarkers: o,
        markerPositions: a,
        closestMarkerIndex: l
      }
    }(e)
  }
}
class A extends(r = a.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return e.initialValue !== t.initialValueProp ? {
      ...N(e),
      active: t.active
    } : null
  }
  componentWillUnmount() {
    this.reset()
  }
  renderMark(e) {
    let {
      onMarkerRender: t
    } = this.props;
    return null != t ? t(e) : e
  }
  render() {
    var e;
    let {
      value: t,
      active: n,
      focused: i,
      sortedMarkers: r,
      markerPositions: s,
      closestMarkerIndex: a,
      newClosestIndex: l,
      min: _,
      max: d
    } = this.state, {
      disabled: c,
      stickToMarkers: S,
      className: f,
      children: N,
      barStyles: A,
      fillStyles: m,
      mini: O,
      hideBubble: R,
      defaultValue: C,
      orientation: p,
      onValueRender: g,
      renderMarker: L,
      getAriaValueText: v,
      barClassName: D,
      grabberClassName: M,
      grabberStyles: P = {},
      markerPosition: y = 0,
      "aria-hidden": U,
      "aria-label": b,
      "aria-labelledby": G,
      "aria-describedby": w
    } = this.props, k = 0;
    S ? null != s && (null != l ? k = s[l] : null != a && (k = s[a])) : k = this.scaleValue(t);
    let B = "".concat(k, "%"),
      x = null != s && null != r ? s.map((e, t) => {
        let n = r[t],
          i = null != C && C === n,
          s = this.renderMark(n);
        return (0, o.jsx)("div", {
          className: u()(h.mark, {
            [h.defaultValue]: i,
            [h.markAbove]: 0 === y,
            [h.markBelow]: 1 === y
          }),
          style: {
            left: "".concat(e, "%")
          },
          children: null != L ? L(n) : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("div", {
              className: h.markValue,
              children: s
            }), (0, o.jsx)("div", {
              className: h["markDash".concat(null == s ? "simple" : "")]
            })]
          })
        }, t)
      }) : null,
      V = null != g ? g(t) : "".concat(k.toFixed(0), "%"),
      Z = null !== (e = null == v ? void 0 : v(t)) && void 0 !== e ? e : void 0;
    return (0, o.jsx)(E.t, {
      focusTarget: this.containerRef,
      ringTarget: this.grabberRef,
      children: (0, o.jsxs)("div", {
        className: u()(h.slider, f, {
          [h.disabled]: c,
          [h.mini]: O
        }),
        "aria-valuemin": _,
        "aria-valuemax": d,
        "aria-valuenow": t,
        "aria-disabled": c,
        "aria-orientation": p,
        "aria-hidden": U,
        "aria-label": b,
        "aria-labelledby": G,
        "aria-describedby": w,
        "aria-valuetext": Z,
        role: "slider",
        tabIndex: 0,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContainerMouseDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: this.containerRef,
        children: [(0, o.jsx)("div", {
          className: h.track,
          children: x
        }), (0, o.jsx)("div", {
          className: u()(h.bar, D),
          style: A,
          children: (0, o.jsx)("div", {
            className: h.barFill,
            style: {
              ...m,
              width: B
            }
          })
        }), N, (0, o.jsx)("div", {
          className: h.track,
          children: (0, o.jsx)(I.u, {
            color: I.u.Colors.GREY,
            hideOnClick: !1,
            text: R || S ? null : V,
            forceOpen: n || i && T.Z.keyboardModeEnabled,
            children: e => (0, o.jsx)("div", {
              ...e,
              className: u()(h.grabber, M),
              style: {
                ...P,
                left: B
              },
              onMouseDown: this.handleMouseDown,
              ref: this.grabberRef
            })
          })
        })]
      })
    })
  }
  reset() {
    var e, t, n, i;
    null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener("mousemove", this.handleMouseMove, !0), null === (i = this.containerRef.current) || void 0 === i || null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleMouseUp, !0)
  }
  scaleValue(e) {
    return 100 * (e - this.state.min) / this.state.range
  }
  unscaleValue(e) {
    return e * this.state.range / 100 + this.state.min
  }
  focus() {
    var e;
    null === (e = this.containerRef.current) || void 0 === e || e.focus()
  }
  blur() {
    var e;
    null === (e = this.containerRef.current) || void 0 === e || e.blur()
  }
  moveStaggered(e) {
    let t;
    let {
      boundingRect: n,
      x: i = 0,
      closestMarkerIndex: r,
      markerPositions: s,
      sortedMarkers: o
    } = this.state, {
      asValueChanges: a
    } = this.props;
    if (null == n) return;
    let {
      left: l,
      right: u
    } = n;
    if (e.clientX <= l || e.clientX >= u) return;
    let _ = e.clientX - i,
      d = s[r] + _ / (u - l) * 100;
    null != (t = this.props.equidistant ? f(d, s) : f(this.unscaleValue(d), o)) && (null == a || a(o[t])), this.setState({
      newClosestIndex: t
    })
  }
  constructor(e) {
    super(e), S(this, "containerRef", a.createRef()), S(this, "grabberRef", a.createRef()), S(this, "moveGrabber", e => {
      let {
        sortedMarkers: t,
        value: n,
        min: i,
        max: r
      } = this.state, {
        asValueChanges: s,
        onValueChange: o,
        stickToMarkers: a
      } = this.props, l = {};
      if (a) {
        let i = t.indexOf(n);
        if (i < 0) return;
        let r = i + e,
          s = t[r];
        if (null == s) return;
        l.value = s, l.closestMarkerIndex = r, l.newClosestIndex = r
      } else l.value = d().clamp(n + e, i, r);
      this.setState(l), l.value !== this.state.value && (null == s || s(l.value), null == o || o(l.value))
    }), S(this, "handleContainerMouseDown", e => {
      let t;
      let {
        disabled: n,
        maxValue: i,
        minValue: r,
        asValueChanges: s,
        onValueChange: o,
        stickToMarkers: a
      } = this.props, {
        sortedMarkers: l,
        markerPositions: u
      } = this.state;
      if (n) return;
      let {
        clientX: _,
        currentTarget: d
      } = e;
      if (!(0, c.k)(d)) return;
      let {
        left: E,
        width: I
      } = d.getBoundingClientRect(), T = (_ - E) / I;
      if (a) {
        let {
          nextClosestMarkerIndex: e
        } = u.reduce((e, t, n) => {
          let i = Math.abs(t / 100 - T);
          return i <= e.smallestDelta ? {
            smallestDelta: i,
            nextClosestMarkerIndex: n
          } : e
        }, {
          smallestDelta: 1,
          nextClosestMarkerIndex: -1
        });
        if (-1 === e) return;
        this.setState({
          closestMarkerIndex: e
        }), t = l[e]
      } else t = r + (i - r) * T, this.setState({
        value: t
      }), this.handleMouseDown(e);
      null != o && o(t), null != s && s(t)
    }), S(this, "handleKeyDown", e => {
      let {
        disabled: t,
        orientation: n,
        keyboardStep: i = 1
      } = this.props;
      if (t) return;
      let {
        key: r
      } = e, s = [], o = [];
      switch (n) {
        case "horizontal":
          s = ["ArrowRight"], o = ["ArrowLeft"];
          break;
        case "vertical":
          s = ["ArrowUp"], o = ["ArrowDown"];
          break;
        default:
          s = ["ArrowRight", "ArrowUp"], o = ["ArrowLeft", "ArrowDown"]
      }
      o.includes(r) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i)) : s.includes(r) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i))
    }), S(this, "handleMouseDown", e => {
      var t, n;
      if (this.props.disabled) return;
      e.stopPropagation();
      let {
        current: i
      } = this.containerRef;
      if (null == i || null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("mousemove", this.handleMouseMove, !0), null == i || null === (n = i.ownerDocument) || void 0 === n || n.addEventListener("mouseup", this.handleMouseUp, !0), !(0, c.k)(i)) throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
      this.setState({
        x: e.clientX,
        active: !0,
        boundingRect: i.getBoundingClientRect(),
        newClosestIndex: this.state.closestMarkerIndex
      })
    }), S(this, "handleMouseUp", e => {
      e.stopPropagation(), this.reset();
      let {
        onValueChange: t,
        stickToMarkers: n
      } = this.props, {
        newClosestIndex: i
      } = this.state;
      n && null != i ? (null == t || t(this.state.sortedMarkers[i]), this.setState({
        newClosestIndex: null,
        closestMarkerIndex: i
      })) : null == t || t(this.state.value), this.setState({
        active: !1
      })
    }), S(this, "handleMouseMove", e => {
      e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e)
    }), S(this, "onFocus", () => {
      this.setState({
        focused: !0
      })
    }), S(this, "onBlur", () => {
      this.setState({
        focused: !1
      })
    }), S(this, "moveSmoothly", e => {
      let {
        minValue: t,
        maxValue: n,
        asValueChanges: i
      } = this.props, {
        boundingRect: r
      } = this.state;
      if (null == r) return;
      let {
        left: s,
        right: o
      } = r, a = n - t, l = Math.min(Math.max(t + (e.clientX - s) / (o - s) * a, t), n);
      null == i || i(l), this.setState({
        value: l
      })
    }), this.state = {
      active: !1,
      focused: !1,
      ...N(e)
    }
  }
}
S(A, "defaultProps", {
  initialValue: 10,
  minValue: 0,
  maxValue: 100,
  keyboardStep: 1,
  handleSize: 10,
  disabled: !1,
  stickToMarkers: !1,
  fillStyles: {}
})