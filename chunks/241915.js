n.d(t, {
    _: function () {
        return O;
    }
}),
    n(47120);
var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    u = n(699581),
    c = n(347469),
    d = n(689425),
    _ = n(358085),
    E = n(981631),
    f = n(354459),
    h = n(598227);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = 80,
    m = 132,
    T = 80,
    S = {
        [E.VD2.TOP_RIGHT]: h.resizeHandleTopRight,
        [E.VD2.TOP_LEFT]: h.resizeHandleTopLeft,
        [E.VD2.BOTTOM_LEFT]: h.resizeHandleBottomLeft,
        [E.VD2.BOTTOM_RIGHT]: h.resizeHandleBottomRight
    },
    g = {
        [E.VD2.TOP_RIGHT]: c.y.HORIZONTAL_LEFT,
        [E.VD2.TOP_LEFT]: c.y.HORIZONTAL_RIGHT,
        [E.VD2.BOTTOM_LEFT]: c.y.HORIZONTAL_RIGHT,
        [E.VD2.BOTTOM_RIGHT]: c.y.HORIZONTAL_LEFT
    };
function A(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, l.clamp)(n, f.Rv[t], f.$i[t]);
}
function N(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, pipType: s, position: l } = e,
        u = (0, c.Z)({
            minDimension: f.Rv[s],
            maxDimension: f.$i[s] + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: g[l],
            usePointerEvents: !0
        }),
        d = a.useCallback(
            (e) => {
                e.stopPropagation(), u(e);
            },
            [u]
        );
    return (0, i.jsx)('div', {
        onMouseDown: d,
        className: o()(h.resizeHandle, S[l])
    });
}
class O extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        var e;
        null === (e = this._resizeObserver) || void 0 === e || e.disconnect();
    }
    getPosition(e) {
        let t = (0, u.findDOMNode)(this._innerDivRef.current);
        if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
        }
        let { edgeOffsetTop: n, edgeOffsetLeft: r, edgeOffsetBottom: i, edgeOffsetRight: a, maxX: s, maxY: o, dockedRect: l } = this.props,
            c = Math.round(n),
            d = Math.round(o - i - this._boundHeight),
            f = Math.round(r),
            h = Math.round(s - a - this._boundWidth),
            p = (0, _.getPlatform)() !== _.PlatformTypes.WEB && this.inPopout ? 22 : 0;
        if (null != l) {
            var I, m;
            return {
                y: (null !== (I = null == l ? void 0 : l.y) && void 0 !== I ? I : 0) - p,
                x: null !== (m = null == l ? void 0 : l.x) && void 0 !== m ? m : 0
            };
        }
        switch (e) {
            case E.VD2.TOP_LEFT:
                return {
                    y: c,
                    x: f
                };
            case E.VD2.BOTTOM_LEFT:
                return {
                    y: d,
                    x: f
                };
            case E.VD2.TOP_RIGHT:
                return {
                    y: c,
                    x: h
                };
            default:
                return {
                    y: d,
                    x: h
                };
        }
    }
    setPosition(e) {
        var t;
        let { x: n, y: r } = this.getPosition(e);
        null === (t = this._draggable) || void 0 === t || t.setPosition(n, r);
    }
    animateToPosition(e, t) {
        var n;
        let { x: r, y: i } = this.getPosition(e);
        null === (n = this._draggable) || void 0 === n || n.animateToPosition(r, i, {}, t);
    }
    calculateDecayingPosition(e, t, n, r) {
        return {
            x: e + 200 * n,
            y: t + 200 * r
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case E.VD2.TOP_LEFT:
            case E.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case E.VD2.TOP_LEFT:
            case E.VD2.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null !== (t = null !== (e = this._width) && void 0 !== e ? e : n) && void 0 !== t ? t : f.l8[f.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === E.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: t, dockedRect: n, hidden: r, roundCorners: a, className: s, position: l, type: u, isResizable: c = !1 } = this.props,
            _ = this.getWidth(),
            E = {};
        return (
            null != n
                ? (E = {
                      transform: 'translate3d('.concat(n.x, ', ').concat(n.y, ', 0)'),
                      width: n.width,
                      height: n.height
                  })
                : c &&
                  (E = {
                      width: _,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, i.jsxs)(d.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: o()(h.pictureInPictureWindow, s, {
                    [h.hidden]: r,
                    [h.borderRadius]: a
                }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)('div', {
                        ref: this.handleSetInnerDivRef,
                        style: E,
                        children: this.props.children
                    }),
                    c
                        ? (0, i.jsx)(N, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              pipType: u,
                              position: l
                          })
                        : null
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', { isResizing: !1 }),
            p(this, '_draggable', void 0),
            p(this, '_innerDivRef', a.createRef()),
            p(this, '_resizeObserver', void 0),
            p(this, '_width', null),
            p(this, '_boundWidth', 0),
            p(this, '_boundHeight', 0),
            p(this, '_velocityX', 0),
            p(this, '_velocityY', 0),
            p(this, '_lastMoveTime', void 0),
            p(this, '_lastMoveX', 0),
            p(this, '_lastMoveY', 0),
            p(this, 'ensureIsInPosition', () => {
                this.setPosition(this.props.position);
            }),
            p(this, 'ensureWidth', () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, type: i, isResizable: a } = this.props;
                if (!a) return;
                let s = A(r - (t + n), i);
                this.getWidth() > s && ((this._width = s), null == e || e(s));
            }),
            p(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), null === (n = this._resizeObserver) || void 0 === n || n.observe(e);
                }
            }),
            p(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            p(this, 'handleResize', (e) => {
                (this._width = e), !this.state.isResizing && this.setState({ isResizing: !0 });
            }),
            p(this, 'handleResizeEnd', (e) => {
                let { onResize: t, type: n } = this.props,
                    r = A(e, n);
                (this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            p(this, 'handleDragStart', (e, t) => {
                (this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = new Date());
            }),
            p(this, 'handleDrag', (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r && ((this._velocityX = (e - this._lastMoveX) / r), (this._velocityY = (t - this._lastMoveY) / r), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = n));
            }),
            p(this, 'handleDragEnd', (e, t) => {
                let n;
                let { maxX: r, maxY: i } = this.props,
                    a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    s = !0,
                    o = !0;
                if ((a.x > r / 2 && (o = !1), a.y > i / 2 && (s = !1), (n = s && o ? E.VD2.TOP_LEFT : s && !o ? E.VD2.TOP_RIGHT : !s && o ? E.VD2.BOTTOM_LEFT : E.VD2.BOTTOM_RIGHT), this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position)) {
                    let { id: e, onMove: t } = this.props;
                    null == t || t(e, n);
                }
            });
    }
}
p(O, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
t.Z = a.memo((e) => {
    let { selectedPIPWindow: t, pipWindows: n, pipType: r, pipWidth: a, maxX: s, maxY: o, onWindowMove: l, onWindowResize: u, dockedRect: c, pictureInPictureComponents: d, appContext: _, roundCorners: f } = e;
    return (0, i.jsx)('div', {
        className: h.pictureInPicture,
        children: (() => {
            if (null == t) return null;
            let e = n.map((e) => {
                    if (e.id !== t.id && e.component !== E.NYg.EMBED_IFRAME) return null;
                    let n = 'string' == typeof e.component ? d[e.component] : e.component;
                    return (0, i.jsx)(
                        n,
                        {
                            width: a,
                            ...e.props
                        },
                        e.id
                    );
                }),
                h = n.some((e) => e.component === E.NYg.EMBED_IFRAME);
            return (0, i.jsx)(O, {
                appContext: _,
                position: t.position,
                id: t.id,
                type: r,
                hidden: t.hidden,
                onMove: l,
                onResize: u,
                maxX: s,
                maxY: o,
                width: a,
                dockedRect: c,
                edgeOffsetTop: I,
                edgeOffsetBottom: m,
                edgeOffsetLeft: T,
                edgeOffsetRight: I,
                roundCorners: f,
                isResizable: !h,
                children: e
            });
        })()
    });
});
