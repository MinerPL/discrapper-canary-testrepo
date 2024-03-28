"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("411104"), n("47120");
var a, s, l, i, r, o = n("735250"),
  u = n("470079"),
  d = n("981631");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = (e, t) => {
  let {
    x: n,
    y: a
  } = e, {
    x: s,
    y: l
  } = t;
  return Math.pow(n - s, 2) + Math.pow(a - l, 2)
};

function E(e, t, n, a, s) {
  let {
    top: l,
    bottom: i,
    left: r,
    right: o
  } = e;
  if (null == l && null == i ? (l = 0, i = n - s) : null == l && null != i ? l = n - (i + s) : null != l && (i = n - (l + s)), null == r && null == o ? (r = 0, o = t - a) : null == r && null != o ? r = t - (o + a) : null == o && null != r && (o = t - (r + a)), null == l || null == i || null == r || null == o) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: l,
    left: r,
    bottom: i,
    right: o
  }
}(i = a || (a = {}))[i.DISABLED = 0] = "DISABLED", i[i.DEFAULT = 1] = "DEFAULT", i[i.OFFSET = 2] = "OFFSET", (r = s || (s = {})).TOP = "TOP", r.BOTTOM = "BOTTOM", r.RIGHT = "RIGHT", r.LEFT = "LEFT";

function h(e) {
  return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"]
}

function _(e) {
  let {
    top: t,
    left: n,
    bottom: a,
    right: s
  } = e;
  return 0 === t || t <= a ? a = null : t = null, 0 === n || n <= s ? s = null : n = null, {
    top: t,
    left: n,
    bottom: a,
    right: s
  }
}

function C(e) {
  let {
    top: t,
    left: n,
    bottom: a,
    right: s
  } = e;
  return a < 0 && (t += a, a = 0), t < 0 && (a += t, t = 0), s < 0 && (n += s, s = 0), n < 0 && (s += n, n = 0), {
    top: t,
    left: n,
    bottom: a,
    right: s
  }
}

function m(e) {
  return null != e ? "".concat(e, "px") : "auto"
}
class S extends(l = u.PureComponent) {
  componentDidMount() {
    this.checkBounds(), this.setDOMPositions(this.position)
  }
  componentDidUpdate(e, t) {
    let {
      state: {
        verticalOrientation: n,
        horizontalOrientation: a,
        atTopEdge: s
      },
      props: {
        maxX: l,
        maxY: i,
        onRelocated: r,
        snapOrientation: o
      }
    } = this;
    (e.maxX !== l || e.maxY !== i || e.onRelocated !== r || e.snapOrientation !== o || t.verticalOrientation !== n || t.horizontalOrientation !== a || t.atTopEdge !== s) && this.checkBounds()
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: a,
      right: s
    } = e, {
      draggableRef: {
        current: l
      }
    } = this;
    this.position = {
      top: t,
      left: n,
      bottom: a,
      right: s
    }, null != l && (l.style.top = m(t), l.style.bottom = m(a), l.style.left = m(n), l.style.right = m(s))
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      dragging: n,
      verticalOrientation: a,
      horizontalOrientation: s,
      atTopEdge: l
    } = this.state, {
      top: i,
      left: r,
      right: d,
      bottom: c
    } = this.position;
    return (0, o.jsx)("div", {
      ref: this.draggableRef,
      className: t,
      onMouseDown: this.handleMouseDown,
      style: {
        pointerEvents: n ? "none" : "auto",
        position: "absolute",
        top: i,
        left: r,
        bottom: c,
        right: d
      },
      children: u.cloneElement(u.Children.only(e), {
        flipped: "RIGHT" === s,
        verticalFlipped: "BOTTOM" === a,
        checkBounds: this.checkBounds,
        atTopEdge: l
      })
    })
  }
  constructor(e) {
    super(e), c(this, "draggableRef", u.createRef()), c(this, "_dragStart", {
      x: 0,
      y: 0
    }), c(this, "_offsetX", void 0), c(this, "_offsetY", void 0), c(this, "position", void 0), c(this, "handleMouseDown", e => {
      let {
        top: t,
        left: n,
        bottom: a,
        right: s
      } = this.position, {
        dragAnywhere: l,
        selector: i,
        maxX: r,
        maxY: o
      } = this.props, {
        target: u
      } = e, {
        current: c
      } = this.draggableRef;
      if (null != c && e.button === d.MouseButtons.PRIMARY && (l || null != u && null != i && "" !== i && null != u.closest(i))) {
        let {
          x: l,
          y: i
        } = function(e) {
          let {
            top: t,
            left: n
          } = e;
          return {
            x: n,
            y: t
          }
        }(E({
          top: t,
          left: n,
          bottom: a,
          right: s
        }, r, o, c.clientWidth, c.clientHeight));
        this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - l, this._offsetY = e.clientY - i, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
      }
    }), c(this, "handleMouseMove", e => {
      e.preventDefault();
      let {
        clientX: t,
        clientY: n
      } = e, {
        current: a
      } = this.draggableRef, {
        maxX: s,
        maxY: l,
        flipVertical: i,
        flipHorizontal: r,
        onDragStart: o,
        onDrag: u,
        onFlip: d,
        snapOrientation: c
      } = this.props, {
        dragging: m,
        dragging: S,
        verticalOrientation: I,
        horizontalOrientation: p
      } = this.state, T = !1;
      if (null == a || !m && 9 > f(this._dragStart, {
          x: t,
          y: n
        })) return;
      m = !0;
      let {
        clientWidth: g,
        clientHeight: A
      } = a, N = n - this._offsetY, v = C(E({
        top: N,
        left: t - this._offsetX
      }, s, l, g, A));
      if (c) {
        let e = h(v = _(v));
        I = e[0], p = e[1]
      } else v = {
        top: v.top,
        left: v.left
      };
      2 === r && p !== this.state.horizontalOrientation && (this._offsetX = g - this._offsetX, T = !0), 2 === i && I !== this.state.verticalOrientation && (this._offsetY = A - this._offsetY, T = !0), this.setDOMPositions(v), !S && (null == o || o(v, a)), null == u || u(v, a), T && (null == d || d([I, p])), this.setState({
        dragging: m,
        verticalOrientation: I,
        horizontalOrientation: p,
        atTopEdge: 0 === v.top
      })
    }), c(this, "handleMouseUp", () => {
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp), this.state.dragging && this.setState({
        dragging: !1
      }, () => {
        let {
          onDragEnd: e
        } = this.props, {
          current: t
        } = this.draggableRef;
        null != t && null != e && e(this.position, t)
      })
    }), c(this, "_checkBoundsRAF", null), c(this, "checkBounds", () => {
      null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)
    }), c(this, "_performCheckBounds", () => {
      let e;
      let {
        position: t,
        state: n,
        draggableRef: {
          current: a
        },
        props: {
          maxX: s,
          maxY: l,
          onRelocated: i,
          snapOrientation: r
        }
      } = this, {
        verticalOrientation: o,
        horizontalOrientation: u
      } = this.state;
      if (null == a) return;
      let {
        clientHeight: d,
        clientWidth: c
      } = a, f = E(t, s, l, c, d);
      if (f = C(f), r) {
        let t = h(e = _(f));
        o = t[0], u = t[1]
      } else e = {
        top: f.top,
        left: f.left,
        right: null,
        bottom: null
      };
      if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
      null == i || i(e, a), this.setDOMPositions(e);
      let m = 0 === e.top;
      (o !== n.verticalOrientation || u !== n.horizontalOrientation || m !== n.atTopEdge) && this.setState({
        verticalOrientation: o,
        horizontalOrientation: u,
        atTopEdge: m
      })
    });
    let [t, n] = h(e.initialPosition);
    this.position = function(e) {
      let {
        top: t,
        left: n,
        bottom: a,
        right: s
      } = e;
      return null == n && null == s && (n = 0), null != n && null != s && (s = null), null == t && null == a && (t = 0), null != t && null != a && (a = null), {
        top: t,
        left: n,
        bottom: a,
        right: s
      }
    }(e.initialPosition), this.state = {
      dragging: !1,
      verticalOrientation: t,
      horizontalOrientation: n,
      atTopEdge: 0 === this.position.top
    }
  }
}
c(S, "FlipTypes", a), c(S, "defaultProps", {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
})