"use strict";
n.r(t), n.d(t, {
  Operations: function() {
    return i
  }
}), n("47120"), n("411104");
var i, a, l, s = n("735250"),
  o = n("470079"),
  r = n("803997"),
  d = n.n(r),
  u = n("902704"),
  c = n("434529"),
  f = n("981631"),
  h = n("242082");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
(l = i || (i = {})).MOVE = "MOVE", l.RESIZE_NORTH = "RESIZE_NORTH", l.RESIZE_WEST = "RESIZE_WEST", l.RESIZE_EAST = "RESIZE_EAST", l.RESIZE_SOUTH = "RESIZE_SOUTH", l.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", l.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", l.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", l.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST";
let m = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function E(e, t, n) {
  let {
    width: i,
    height: a
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === a ? "auto" : Math.max(n, a)
  }
}

function S(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: a
  } = e;
  return null == n && null == a && (n = 0), null != n && null != a && (a = null), null == t && null == i && (t = 0), null != t && null != i && (i = null), {
    top: t,
    left: n,
    bottom: i,
    right: a
  }
}

function v(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function y(e, t) {
  let n = 0,
    i = 0;
  return n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width, {
    width: n,
    height: i = "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function I(e, t) {
  let {
    top: n,
    left: i,
    bottom: a,
    right: l
  } = t;
  switch (e) {
    case "RESIZE_EAST":
    case "RESIZE_NORTH_EAST":
    case "RESIZE_NORTH":
      return {
        bottom: a, left: i, right: null, top: null
      };
    case "RESIZE_WEST":
    case "RESIZE_NORTH_WEST":
      return {
        bottom: a, right: l, left: null, top: null
      };
    case "RESIZE_SOUTH_EAST":
      return {
        top: n, left: i, bottom: null, right: null
      };
    case "RESIZE_SOUTH":
    case "RESIZE_SOUTH_WEST":
      return {
        top: n, right: l, bottom: null, left: null
      };
    default:
      throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
  }
}
class T extends(a = o.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, u.default)(t, this.state) || !(0, u.default)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, u.default)(e.anchor, this.props.anchor) || !(0, u.default)(e.size, this.props.size) || !(0, u.default)(e.minSize, this.props.minSize) || !(0, u.default)(e.container, this.props.container)
  }
  componentDidUpdate(e, t) {
    null == t.operation && (!(0, u.default)(this.props.anchor, e.anchor) && this.setDOMPositions(S(this.props.anchor)), !(0, u.default)(this.props.size, e.size) && this.setDOMSize(E(this.props.size, this.props.minSize.width, this.props.minSize.height)))
  }
  componentWillUnmount() {
    this.handleOperationEnd()
  }
  handleResizeMouseDown(e, t) {
    let {
      clientX: n,
      clientY: i
    } = e;
    e.stopPropagation(), this.handleOperationStart(t, n, i)
  }
  handleDragMove(e, t) {
    let {
      ref: {
        current: n
      },
      props: {
        id: i,
        container: {
          maxX: a,
          maxY: l,
          minX: s,
          minY: o
        },
        onDragStart: r,
        onDrag: d,
        snapOrientation: u
      },
      dragState: {
        offsetX: f,
        offsetY: h
      },
      state: {
        operationStarted: p
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(a, e), s), t = Math.max(Math.min(l, t), o);
    let {
      width: g,
      height: m
    } = y(n, this.size), E = t - h, S = e - f, v = (0, c.fitFullCoordsToContainer)((0, c.getFullCoordsFromAnchorCoords)({
      top: E,
      left: S,
      bottom: null,
      right: null
    }, a, l, g, m)), T = u ? (0, c.getAnchorCoordsFromFullCoords)(v) : I("RESIZE_SOUTH_EAST", v);
    this.setDOMPositions(T), !p && (null != r && r(), this.setState({
      operationStarted: !0
    })), null != d && d(i, "MOVE", this.anchor, this.size)
  }
  handleResizeMove(e, t) {
    let {
      props: {
        id: n,
        minSize: i,
        container: {
          maxX: a,
          maxY: l,
          minX: s,
          minY: o
        },
        onDragStart: r,
        onDrag: d
      },
      state: {
        operation: u,
        operationStarted: c
      }
    } = this, {
      startX: f,
      startY: h,
      offsetWidth: p,
      offsetHeight: g
    } = this.dragState, m = 0, E = 0;
    if (null != u) {
      switch (e = Math.max(Math.min(a, e), s), t = Math.max(Math.min(l, t), o), u) {
        case "RESIZE_EAST":
        case "RESIZE_SOUTH_EAST":
        case "RESIZE_NORTH_EAST":
          m -= f - e;
          break;
        case "RESIZE_WEST":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_NORTH_WEST":
          m += f - e
      }
      switch (u) {
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_SOUTH_EAST":
          E -= h - t;
          break;
        case "RESIZE_NORTH":
        case "RESIZE_NORTH_WEST":
        case "RESIZE_NORTH_EAST":
          E += h - t
      }
      p = Math.max(p + m, i.width), g = Math.max(g + E, i.height), this.setDOMSize({
        width: p,
        height: g
      }), !c && (null != r && r(), this.setState({
        operationStarted: !0
      })), null != d && d(n, u, this.anchor, this.size)
    }
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: i,
      right: a
    } = e, {
      current: l
    } = this.ref;
    this.anchor = {
      top: t,
      left: n,
      bottom: i,
      right: a
    }, null != l && (l.style.top = v(t), l.style.bottom = v(i), l.style.left = v(n), l.style.right = v(a))
  }
  setDOMSize(e) {
    let {
      width: t,
      height: n
    } = e, {
      current: i
    } = this.ref;
    t = "auto" === this.size.width ? "auto" : t, n = "auto" === this.size.height ? "auto" : n, this.size = {
      width: t,
      height: n
    }, null != i && (i.style.width = v(t), i.style.height = v(n))
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, s.jsxs)(o.Fragment, {
      children: [e ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)("div", {
          className: d()(h.resizeNorth, {
            [h.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, s.jsx)("div", {
          className: d()(h.resizeSouth, {
            [h.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, t ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)("div", {
          className: d()(h.resizeEast, {
            [h.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, s.jsx)("div", {
          className: d()(h.resizeWest, {
            [h.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, t && e ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)("div", {
          className: d()(h.resizeNorthWest, {
            [h.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, s.jsx)("div", {
          className: d()(h.resizeNorthEast, {
            [h.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, s.jsx)("div", {
          className: d()(h.resizeSouthWest, {
            [h.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, s.jsx)("div", {
          className: d()(h.resizeSouthEast, {
            [h.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
        })]
      }) : null]
    })
  }
  render() {
    let {
      props: {
        children: e,
        hidden: t,
        onClick: n,
        id: i,
        style: a
      },
      size: l,
      anchor: o,
      state: {
        operation: r,
        operationStarted: u
      }
    } = this;
    return (0, s.jsxs)("div", {
      ref: this.ref,
      style: {
        ...o,
        ...l,
        ...a,
        ...null != r ? {
          zIndex: 1e3
        } : void 0,
        ...t ? {
          visibility: "hidden"
        } : void 0
      },
      className: d()({
        [h.wrapper]: !0,
        [h.operation]: u
      }),
      onMouseDown: this.handleMouseDown,
      onClick: null != n ? () => n(i) : void 0,
      children: [e(this.handleOperationStart), this.renderResizeHandles()]
    })
  }
  constructor(e) {
    super(e), p(this, "anchor", void 0), p(this, "size", void 0), p(this, "ref", o.createRef()), p(this, "dragState", {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      offsetWidth: 0,
      offsetHeight: 0
    }), p(this, "state", {
      operation: null,
      operationStarted: !1
    }), p(this, "handleMouseDown", e => {
      e.stopPropagation();
      let {
        dragAnywhere: t
      } = this.props, {
        current: n
      } = this.ref;
      null != n && e.button === f.MouseButtons.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    }), p(this, "handleMouseMove", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        clientX: t,
        clientY: n
      } = e, {
        dragState: {
          startX: i,
          startY: a
        },
        state: {
          operation: l,
          operationStarted: s
        }
      } = this;
      !(null == l || !s && 3 > g(i, a, t, n)) && ("MOVE" === l ? this.handleDragMove(t, n) : m.has(l) && this.handleResizeMove(t, n))
    }), p(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          active: a,
          container: {
            maxX: l,
            maxY: s
          }
        }
      } = this;
      if (null == i || !a) return;
      let {
        width: o,
        height: r
      } = y(i, this.size), d = (0, c.getFullCoordsFromAnchorCoords)(this.anchor, l, s, o, r);
      if ("MOVE" === e) {
        let {
          x: e,
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
        }(d);
        this.dragState = {
          ...this.dragState,
          startX: t,
          startY: n,
          offsetX: t - e,
          offsetY: n - i
        }
      } else {
        let i = I(e, d);
        this.setDOMPositions(i), this.dragState = {
          ...this.dragState,
          startX: t,
          startY: n,
          offsetWidth: o,
          offsetHeight: r
        }
      }
      this.setState({
        operation: e,
        operationStarted: !1
      }, () => {
        window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleOperationEnd)
      })
    }), p(this, "handleOperationEnd", () => {
      let {
        operation: e,
        operationStarted: t
      } = this.state, {
        onDragEnd: n
      } = this.props;
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleOperationEnd);
      let i = t ? () => {
        let {
          onUpdate: t,
          id: n
        } = this.props;
        t(e, n, this.anchor, this.size, y(this.ref.current, this.size))
      } : void 0;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: i,
          height: a
        } = y(this.ref.current, this.size), l = (0, c.getFullCoordsFromAnchorCoords)(this.anchor, e, t, i, a), s = (0, c.getAnchorCoordsFromFullCoords)(l);
        this.setDOMPositions(s), this.setDOMSize({
          width: i,
          height: a
        }), null != n && n()
      }
      this.setState({
        operation: null,
        operationStarted: !1
      }, i)
    }), this.anchor = S(e.anchor), this.size = E(e.size, e.minSize.width, e.minSize.height)
  }
}
p(T, "Operations", i), p(T, "defaultProps", {
  snapOrientation: !0,
  minSize: {
    width: 0,
    height: 0
  },
  container: {
    minX: 0,
    minY: 0,
    maxX: 1 / 0,
    maxY: 1 / 0
  },
  resizeX: !0,
  resizeY: !0,
  hidden: !1,
  dragAnywhere: !0,
  active: !0
}), t.default = T