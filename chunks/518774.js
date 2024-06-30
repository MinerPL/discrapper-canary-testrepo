n.d(t, {
    _: function () {
        return m;
    }
}), n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(699581), u = n(358085), c = n(144036), d = n(981631), _ = n(391753);
function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let f = 80, h = 132, p = 80;
class m extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition();
    }
    componentWillUnmount() {
        var e;
        null === (e = this._resizeObserver) || void 0 === e || e.disconnect();
    }
    getPosition(e) {
        let t = (0, l.findDOMNode)(this._innerDiv);
        if (null != t) {
            let e = t.getBoundingClientRect();
            this._width = e.width, this._height = e.height;
        }
        let {
                edgeOffsetTop: n,
                edgeOffsetLeft: r,
                edgeOffsetBottom: i,
                edgeOffsetRight: a,
                maxX: o,
                maxY: s,
                dockedRect: c
            } = this.props, _ = Math.round(n), E = Math.round(s - i - this._height), f = Math.round(r), h = Math.round(o - a - this._width), p = (0, u.getPlatform)() !== u.PlatformTypes.WEB && this.inPopout ? 22 : 0;
        if (null != c) {
            var m, I;
            return {
                y: (null !== (m = null == c ? void 0 : c.y) && void 0 !== m ? m : 0) - p,
                x: null !== (I = null == c ? void 0 : c.x) && void 0 !== I ? I : 0
            };
        }
        switch (e) {
        case d.VD2.TOP_LEFT:
            return {
                y: _,
                x: f
            };
        case d.VD2.BOTTOM_LEFT:
            return {
                y: E,
                x: f
            };
        case d.VD2.TOP_RIGHT:
            return {
                y: _,
                x: h
            };
        default:
            return {
                y: E,
                x: h
            };
        }
    }
    setPosition(e) {
        var t;
        let {
            x: n,
            y: r
        } = this.getPosition(e);
        null === (t = this._draggable) || void 0 === t || t.setPosition(n, r);
    }
    animateToPosition(e, t) {
        var n;
        let {
            x: r,
            y: i
        } = this.getPosition(e);
        null === (n = this._draggable) || void 0 === n || n.animateToPosition(r, i, {}, t);
    }
    calculateDecayingPosition(e, t, n, r) {
        return {
            x: e + 200 * n,
            y: t + 200 * r
        };
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
            return n;
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
            return n;
        }
    }
    get inPopout() {
        return this.props.appContext === d.IlC.POPOUT;
    }
    render() {
        let {
                maxX: e,
                maxY: t,
                dockedRect: n,
                hidden: r,
                roundCorners: a,
                className: o
            } = this.props, l = {};
        return null != n && (l = {
            transform: 'translate3d('.concat(n.x, ', ').concat(n.y, ', 0)'),
            width: n.width,
            height: n.height
        }), (0, i.jsx)(c.Z, {
            dragAnywhere: !0,
            ref: this.handleSetDraggableRef,
            className: s()(_.pictureInPictureWindow, o, {
                [_.hidden]: r,
                [_.borderRadius]: a
            }),
            maxX: e,
            maxY: t,
            disabled: null != n,
            onDragStart: this.handleDragStart,
            onDrag: this.handleDrag,
            onDragEnd: this.handleDragEnd,
            children: (0, i.jsx)('div', {
                ref: this.handleSetInnerDivRef,
                style: l,
                children: this.props.children
            })
        });
    }
    constructor(...e) {
        super(...e), E(this, '_draggable', void 0), E(this, '_innerDiv', void 0), E(this, '_resizeObserver', void 0), E(this, '_width', 0), E(this, '_height', 0), E(this, '_velocityX', 0), E(this, '_velocityY', 0), E(this, '_lastMoveTime', void 0), E(this, '_lastMoveX', 0), E(this, '_lastMoveY', 0), E(this, 'ensureIsInPosition', () => {
            this.setPosition(this.props.position);
        }), E(this, 'handleSetInnerDivRef', e => {
            this._innerDiv = e;
            let t = null == e ? void 0 : e.ownerDocument.defaultView;
            if (null != e && null != t) {
                var n;
                this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), null === (n = this._resizeObserver) || void 0 === n || n.observe(e);
            }
        }), E(this, 'handleSetDraggableRef', e => {
            this._draggable = e;
        }), E(this, 'handleDragStart', (e, t) => {
            this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date();
        }), E(this, 'handleDrag', (e, t) => {
            let n = new Date(), r = Number(n) - Number(this._lastMoveTime);
            this._velocityX = (e - this._lastMoveX) / r, this._velocityY = (t - this._lastMoveY) / r, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = n;
        }), E(this, 'handleDragEnd', (e, t) => {
            let n;
            let {
                    maxX: r,
                    maxY: i
                } = this.props, a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), o = !0, s = !0;
            if (a.x > r / 2 && (s = !1), a.y > i / 2 && (o = !1), n = o && s ? d.VD2.TOP_LEFT : o && !s ? d.VD2.TOP_RIGHT : !o && s ? d.VD2.BOTTOM_LEFT : d.VD2.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
                let {
                    id: e,
                    onMove: t
                } = this.props;
                null == t || t(e, n);
            }
        });
    }
}
E(m, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
t.Z = a.memo(e => {
    let {
        selectedPIPWindow: t,
        pipWindows: n,
        maxX: r,
        maxY: a,
        onWindowMove: o,
        dockedRect: s,
        pictureInPictureComponents: l,
        appContext: u,
        roundCorners: c
    } = e;
    return (0, i.jsx)('div', {
        className: _.pictureInPicture,
        children: (() => {
            if (null == t)
                return null;
            let e = n.map(e => {
                if (e.id !== t.id && e.component !== d.NYg.EMBED_IFRAME)
                    return null;
                let n = 'string' == typeof e.component ? l[e.component] : e.component;
                return (0, i.jsx)(n, { ...e.props }, 'pipWindow-'.concat(e.id));
            });
            return (0, i.jsx)(m, {
                appContext: u,
                position: t.position,
                id: t.id,
                hidden: t.hidden,
                onMove: o,
                maxX: r,
                maxY: a,
                dockedRect: s,
                edgeOffsetTop: f,
                edgeOffsetBottom: h,
                edgeOffsetLeft: p,
                edgeOffsetRight: f,
                roundCorners: c,
                children: e
            });
        })()
    });
});
