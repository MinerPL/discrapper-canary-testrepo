"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(411104), n(47120);
var i, r, s, o, a, l = n(735250),
  u = n(470079),
  _ = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = (e, t) => {
  let {
    x: n,
    y: i
  } = e, {
    x: r,
    y: s
  } = t;
  return Math.pow(n - r, 2) + Math.pow(i - s, 2)
};

function E(e, t, n, i, r) {
  let {
    top: s,
    bottom: o,
    left: a,
    right: l
  } = e;
  if (null == s && null == o ? (s = 0, o = n - r) : null == s && null != o ? s = n - (o + r) : null != s && (o = n - (s + r)), null == a && null == l ? (a = 0, l = t - i) : null == a && null != l ? a = t - (l + i) : null == l && null != a && (l = t - (a + i)), null == s || null == o || null == a || null == l) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: s,
    left: a,
    bottom: o,
    right: l
  }
}(o = i || (i = {}))[o.DISABLED = 0] = "DISABLED", o[o.DEFAULT = 1] = "DEFAULT", o[o.OFFSET = 2] = "OFFSET", (a = r || (r = {})).TOP = "TOP", a.BOTTOM = "BOTTOM", a.RIGHT = "RIGHT", a.LEFT = "LEFT";

function I(e) {
  return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"]
}

function T(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= r ? r = null : n = null, {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function h(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), r < 0 && (n += r, r = 0), n < 0 && (r += n, n = 0), {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function S(e) {
  return null != e ? "".concat(e, "px") : "auto"
}
class f extends(s = u.PureComponent) {
  componentDidMount() {
    this.checkBounds(), this.setDOMPositions(this.position)
  }
  componentDidUpdate(e, t) {
    let {
      state: {
        verticalOrientation: n,
        horizontalOrientation: i,
        atTopEdge: r
      },
      props: {
        maxX: s,
        maxY: o,
        onRelocated: a,
        snapOrientation: l
      }
    } = this;
    (e.maxX !== s || e.maxY !== o || e.onRelocated !== a || e.snapOrientation !== l || t.verticalOrientation !== n || t.horizontalOrientation !== i || t.atTopEdge !== r) && this.checkBounds()
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: i,
      right: r
    } = e, {
      draggableRef: {
        current: s
      }
    } = this;
    if (this.position = {
        top: t,
        left: n,
        bottom: i,
        right: r
      }, null != s) s.style.top = S(t), s.style.bottom = S(i), s.style.left = S(n), s.style.right = S(r)
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      dragging: n,
      verticalOrientation: i,
      horizontalOrientation: r,
      atTopEdge: s
    } = this.state, {
      top: o,
      left: a,
      right: _,
      bottom: d
    } = this.position;
    return (0, l.jsx)("div", {
      ref: this.draggableRef,
      className: t,
      onMouseDown: this.handleMouseDown,
      style: {
        pointerEvents: n ? "none" : "auto",
        position: "absolute",
        top: o,
        left: a,
        bottom: d,
        right: _
      },
      children: u.cloneElement(u.Children.only(e), {
        flipped: "RIGHT" === r,
        verticalFlipped: "BOTTOM" === i,
        checkBounds: this.checkBounds,
        atTopEdge: s
      })
    })
  }
  constructor(e) {
    super(e), d(this, "draggableRef", u.createRef()), d(this, "_dragStart", {
      x: 0,
      y: 0
    }), d(this, "_offsetX", void 0), d(this, "_offsetY", void 0), d(this, "position", void 0), d(this, "handleMouseDown", e => {
      let {
        top: t,
        left: n,
        bottom: i,
        right: r
      } = this.position, {
        dragAnywhere: s,
        selector: o,
        maxX: a,
        maxY: l
      } = this.props, {
        target: u
      } = e, {
        current: d
      } = this.draggableRef;
      if (null != d && e.button === _.AeJ.PRIMARY && (s || null != u && null != o && "" !== o && null != u.closest(o))) {
        let {
          x: s,
          y: o
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
          bottom: i,
          right: r
        }, a, l, d.clientWidth, d.clientHeight));
        this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - s, this._offsetY = e.clientY - o, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
      }
    }), d(this, "handleMouseMove", e => {
      e.preventDefault();
      let {
        clientX: t,
        clientY: n
      } = e, {
        current: i
      } = this.draggableRef, {
        maxX: r,
        maxY: s,
        flipVertical: o,
        flipHorizontal: a,
        onDragStart: l,
        onDrag: u,
        onFlip: _,
        snapOrientation: d
      } = this.props, {
        dragging: S,
        dragging: f,
        verticalOrientation: N,
        horizontalOrientation: A
      } = this.state, m = !1;
      if (null == i || !S && 9 > c(this._dragStart, {
          x: t,
          y: n
        })) return;
      S = !0;
      let {
        clientWidth: O,
        clientHeight: R
      } = i, C = n - this._offsetY, p = h(E({
        top: C,
        left: t - this._offsetX
      }, r, s, O, R));
      if (d) {
        let e = I(p = T(p));
        N = e[0], A = e[1]
      } else p = {
        top: p.top,
        left: p.left
      };
      2 === a && A !== this.state.horizontalOrientation && (this._offsetX = O - this._offsetX, m = !0), 2 === o && N !== this.state.verticalOrientation && (this._offsetY = R - this._offsetY, m = !0), this.setDOMPositions(p), !f && (null == l || l(p, i)), null == u || u(p, i), m && (null == _ || _([N, A])), this.setState({
        dragging: S,
        verticalOrientation: N,
        horizontalOrientation: A,
        atTopEdge: 0 === p.top
      })
    }), d(this, "handleMouseUp", () => {
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
    }), d(this, "_checkBoundsRAF", null), d(this, "checkBounds", () => {
      null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)
    }), d(this, "_performCheckBounds", () => {
      let e;
      let {
        position: t,
        state: n,
        draggableRef: {
          current: i
        },
        props: {
          maxX: r,
          maxY: s,
          onRelocated: o,
          snapOrientation: a
        }
      } = this, {
        verticalOrientation: l,
        horizontalOrientation: u
      } = this.state;
      if (null == i) return;
      let {
        clientHeight: _,
        clientWidth: d
      } = i, c = E(t, r, s, d, _);
      if (c = h(c), a) {
        let t = I(e = T(c));
        l = t[0], u = t[1]
      } else e = {
        top: c.top,
        left: c.left,
        right: null,
        bottom: null
      };
      if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
      null == o || o(e, i), this.setDOMPositions(e);
      let S = 0 === e.top;
      (l !== n.verticalOrientation || u !== n.horizontalOrientation || S !== n.atTopEdge) && this.setState({
        verticalOrientation: l,
        horizontalOrientation: u,
        atTopEdge: S
      })
    });
    let [t, n] = I(e.initialPosition);
    this.position = function(e) {
      let {
        top: t,
        left: n,
        bottom: i,
        right: r
      } = e;
      return null == n && null == r && (n = 0), null != n && null != r && (r = null), null == t && null == i && (t = 0), null != t && null != i && (i = null), {
        top: t,
        left: n,
        bottom: i,
        right: r
      }
    }(e.initialPosition), this.state = {
      dragging: !1,
      verticalOrientation: t,
      horizontalOrientation: n,
      atTopEdge: 0 === this.position.top
    }
  }
}
d(f, "FlipTypes", i), d(f, "defaultProps", {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
})