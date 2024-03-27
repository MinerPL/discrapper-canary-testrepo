"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("70102"), n("222007");
var a, s, l, i, r, o, u = n("37983"),
  d = n("884691"),
  c = n("49111");
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
}(r = s || (s = {}))[r.DISABLED = 0] = "DISABLED", r[r.DEFAULT = 1] = "DEFAULT", r[r.OFFSET = 2] = "OFFSET", (o = l || (l = {})).TOP = "TOP", o.BOTTOM = "BOTTOM", o.RIGHT = "RIGHT", o.LEFT = "LEFT";

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

function S(e) {
  return null != e ? "".concat(e, "px") : "auto"
}(a = class extends d.PureComponent {
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
    } = this, u = e.maxX !== l || e.maxY !== i || e.onRelocated !== r || e.snapOrientation !== o || t.verticalOrientation !== n || t.horizontalOrientation !== a || t.atTopEdge !== s;
    u && this.checkBounds()
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
    }, null != l && (l.style.top = S(t), l.style.bottom = S(a), l.style.left = S(n), l.style.right = S(s))
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
      right: o,
      bottom: c
    } = this.position;
    return (0, u.jsx)("div", {
      ref: this.draggableRef,
      className: t,
      onMouseDown: this.handleMouseDown,
      style: {
        pointerEvents: n ? "none" : "auto",
        position: "absolute",
        top: i,
        left: r,
        bottom: c,
        right: o
      },
      children: d.cloneElement(d.Children.only(e), {
        flipped: "RIGHT" === s,
        verticalFlipped: "BOTTOM" === a,
        checkBounds: this.checkBounds,
        atTopEdge: l
      })
    })
  }
  constructor(e) {
    super(e), this.draggableRef = d.createRef(), this._dragStart = {
      x: 0,
      y: 0
    }, this.handleMouseDown = e => {
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
        current: d
      } = this.draggableRef;
      if (null != d && e.button === c.MouseButtons.PRIMARY && (l || null != u && null != i && "" !== i && null != u.closest(i))) {
        let l = E({
            top: t,
            left: n,
            bottom: a,
            right: s
          }, r, o, d.clientWidth, d.clientHeight),
          {
            x: i,
            y: u
          } = function(e) {
            let {
              top: t,
              left: n
            } = e;
            return {
              x: n,
              y: t
            }
          }(l);
        this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - i, this._offsetY = e.clientY - u, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
      }
    }, this.handleMouseMove = e => {
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
        dragging: S,
        dragging: I,
        verticalOrientation: m,
        horizontalOrientation: p
      } = this.state, T = !1;
      if (null == a || !S && 9 > f(this._dragStart, {
          x: t,
          y: n
        })) return;
      S = !0;
      let {
        clientWidth: g,
        clientHeight: A
      } = a, N = n - this._offsetY, R = t - this._offsetX, O = C(E({
        top: N,
        left: R
      }, s, l, g, A));
      if (c) {
        O = _(O);
        let e = h(O);
        m = e[0], p = e[1]
      } else O = {
        top: O.top,
        left: O.left
      };
      2 === r && p !== this.state.horizontalOrientation && (this._offsetX = g - this._offsetX, T = !0), 2 === i && m !== this.state.verticalOrientation && (this._offsetY = A - this._offsetY, T = !0), this.setDOMPositions(O), !I && (null == o || o(O, a)), null == u || u(O, a), T && (null == d || d([m, p])), this.setState({
        dragging: S,
        verticalOrientation: m,
        horizontalOrientation: p,
        atTopEdge: 0 === O.top
      })
    }, this.handleMouseUp = () => {
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
    }, this._checkBoundsRAF = null, this.checkBounds = () => {
      null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)
    }, this._performCheckBounds = () => {
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
        e = _(f);
        let t = h(e);
        o = t[0], u = t[1]
      } else e = {
        top: f.top,
        left: f.left,
        right: null,
        bottom: null
      };
      if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
      null == i || i(e, a), this.setDOMPositions(e);
      let S = 0 === e.top;
      (o !== n.verticalOrientation || u !== n.horizontalOrientation || S !== n.atTopEdge) && this.setState({
        verticalOrientation: o,
        horizontalOrientation: u,
        atTopEdge: S
      })
    };
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
}).FlipTypes = s, a.defaultProps = {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
}, i = a