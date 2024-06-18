"use strict";
n.d(t, {
  _: function() {
    return S
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(699581),
  u = n(358085),
  _ = n(144036),
  d = n(981631),
  c = n(731718);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = 80,
  T = 132,
  h = 80;
class S extends(i = s.PureComponent) {
  componentDidMount() {
    this.setPosition(this.props.position)
  }
  componentDidUpdate(e) {
    (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
  }
  componentWillUnmount() {
    var e;
    null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
  }
  getPosition(e) {
    let t = (0, l.findDOMNode)(this._innerDiv);
    if (null != t) {
      let e = t.getBoundingClientRect();
      this._width = e.width, this._height = e.height
    }
    let {
      edgeOffsetTop: n,
      edgeOffsetLeft: i,
      edgeOffsetBottom: r,
      edgeOffsetRight: s,
      maxX: o,
      maxY: a,
      dockedRect: _
    } = this.props, c = Math.round(n), E = Math.round(a - r - this._height), I = Math.round(i), T = Math.round(o - s - this._width), h = (0, u.getPlatform)() !== u.PlatformTypes.WEB && this.inPopout ? 22 : 0;
    if (null != _) {
      var S, f;
      return {
        y: (null !== (S = null == _ ? void 0 : _.y) && void 0 !== S ? S : 0) - h,
        x: null !== (f = null == _ ? void 0 : _.x) && void 0 !== f ? f : 0
      }
    }
    switch (e) {
      case d.VD2.TOP_LEFT:
        return {
          y: c, x: I
        };
      case d.VD2.BOTTOM_LEFT:
        return {
          y: E, x: I
        };
      case d.VD2.TOP_RIGHT:
        return {
          y: c, x: T
        };
      default:
        return {
          y: E, x: T
        }
    }
  }
  setPosition(e) {
    var t;
    let {
      x: n,
      y: i
    } = this.getPosition(e);
    null === (t = this._draggable) || void 0 === t || t.setPosition(n, i)
  }
  animateToPosition(e, t) {
    var n;
    let {
      x: i,
      y: r
    } = this.getPosition(e);
    null === (n = this._draggable) || void 0 === n || n.animateToPosition(i, r, {}, t)
  }
  calculateDecayingPosition(e, t, n, i) {
    return {
      x: e + 200 * n,
      y: t + 200 * i
    }
  }
  getXOffset() {
    let {
      position: e,
      edgeOffsetLeft: t,
      edgeOffsetRight: n
    } = this.props;
    switch (e) {
      case d.VD2.TOP_LEFT:
      case d.VD2.BOTTOM_LEFT:
        return -t;
      default:
        return n
    }
  }
  getYOffset() {
    let {
      position: e,
      edgeOffsetTop: t,
      edgeOffsetBottom: n
    } = this.props;
    switch (e) {
      case d.VD2.TOP_LEFT:
      case d.VD2.TOP_RIGHT:
        return -t;
      default:
        return n
    }
  }
  get inPopout() {
    return this.props.appContext === d.IlC.POPOUT
  }
  render() {
    let {
      maxX: e,
      maxY: t,
      dockedRect: n,
      hidden: i,
      roundCorners: s,
      className: o
    } = this.props, l = {};
    return null != n && (l = {
      transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
      width: n.width,
      height: n.height
    }), (0, r.jsx)(_.Z, {
      dragAnywhere: !0,
      ref: this.handleSetDraggableRef,
      className: a()(c.pictureInPictureWindow, o, {
        [c.hidden]: i,
        [c.borderRadius]: s
      }),
      maxX: e,
      maxY: t,
      disabled: null != n,
      onDragStart: this.handleDragStart,
      onDrag: this.handleDrag,
      onDragEnd: this.handleDragEnd,
      children: (0, r.jsx)("div", {
        ref: this.handleSetInnerDivRef,
        style: l,
        children: this.props.children
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "_draggable", void 0), E(this, "_innerDiv", void 0), E(this, "_resizeObserver", void 0), E(this, "_width", 0), E(this, "_height", 0), E(this, "_velocityX", 0), E(this, "_velocityY", 0), E(this, "_lastMoveTime", void 0), E(this, "_lastMoveX", 0), E(this, "_lastMoveY", 0), E(this, "ensureIsInPosition", () => {
      this.setPosition(this.props.position)
    }), E(this, "handleSetInnerDivRef", e => {
      this._innerDiv = e;
      let t = null == e ? void 0 : e.ownerDocument.defaultView;
      if (null != e && null != t) {
        var n;
        this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), null === (n = this._resizeObserver) || void 0 === n || n.observe(e)
      }
    }), E(this, "handleSetDraggableRef", e => {
      this._draggable = e
    }), E(this, "handleDragStart", (e, t) => {
      this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date
    }), E(this, "handleDrag", (e, t) => {
      let n = new Date,
        i = Number(n) - Number(this._lastMoveTime);
      this._velocityX = (e - this._lastMoveX) / i, this._velocityY = (t - this._lastMoveY) / i, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = n
    }), E(this, "handleDragEnd", (e, t) => {
      let n;
      let {
        maxX: i,
        maxY: r
      } = this.props, s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), o = !0, a = !0;
      if (s.x > i / 2 && (a = !1), s.y > r / 2 && (o = !1), n = o && a ? d.VD2.TOP_LEFT : o && !a ? d.VD2.TOP_RIGHT : !o && a ? d.VD2.BOTTOM_LEFT : d.VD2.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
        let {
          id: e,
          onMove: t
        } = this.props;
        null == t || t(e, n)
      }
    })
  }
}
E(S, "defaultProps", {
  hidden: !1,
  roundCorners: !0
});
t.Z = s.memo(e => {
  let {
    selectedPIPWindow: t,
    pipWindows: n,
    maxX: i,
    maxY: s,
    onWindowMove: o,
    dockedRect: a,
    pictureInPictureComponents: l,
    appContext: u,
    roundCorners: _
  } = e;
  return (0, r.jsx)("div", {
    className: c.pictureInPicture,
    children: (() => {
      if (null == t) return null;
      let e = n.map(e => {
        if (e.id !== t.id && e.component !== d.NYg.EMBED_IFRAME) return null;
        let n = "string" == typeof e.component ? l[e.component] : e.component;
        return (0, r.jsx)(n, {
          ...e.props
        }, "pipWindow-".concat(e.id))
      });
      return (0, r.jsx)(S, {
        appContext: u,
        position: t.position,
        id: t.id,
        hidden: t.hidden,
        onMove: o,
        maxX: i,
        maxY: s,
        dockedRect: a,
        edgeOffsetTop: I,
        edgeOffsetBottom: T,
        edgeOffsetLeft: h,
        edgeOffsetRight: I,
        roundCorners: _,
        children: e
      })
    })()
  })
})