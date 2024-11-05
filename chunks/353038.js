n.d(t, {
    B: function () {
        return i;
    },
    Z: function () {
        return y;
    }
}),
    n(47120),
    n(411104);
var i,
    o,
    r,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    u = n.n(a),
    c = n(100621),
    d = n(902704),
    h = n(585483),
    f = n(434529),
    p = n(981631),
    m = n(33806);
function v(e, t, n) {
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
let g = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
((r = i || (i = {})).MOVE = 'MOVE'), (r.RESIZE_NORTH = 'RESIZE_NORTH'), (r.RESIZE_WEST = 'RESIZE_WEST'), (r.RESIZE_EAST = 'RESIZE_EAST'), (r.RESIZE_SOUTH = 'RESIZE_SOUTH'), (r.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (r.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (r.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (r.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let E = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function _(e, t, n) {
    let { width: i, height: o } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === o ? 'auto' : Math.max(n, o)
    };
}
function C(e) {
    let { top: t, left: n, bottom: i, right: o } = e;
    return (
        null == n && null == o && (n = 0),
        null != n && null != o && (o = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: o
        }
    );
}
function S(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function x(e, t) {
    let n = 0,
        i = 0;
    return (
        (n = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        {
            width: n,
            height: (i = 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height)
        }
    );
}
function Z(e, t) {
    let { top: n, left: i, bottom: o, right: r } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: o,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: o,
                right: r,
                left: void 0,
                top: void 0
            };
        case 'RESIZE_SOUTH_EAST':
            return {
                top: n,
                left: i,
                bottom: void 0,
                right: void 0
            };
        case 'RESIZE_SOUTH':
        case 'RESIZE_SOUTH_WEST':
            return {
                top: n,
                right: r,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
function I(e) {
    let { computedSize: t } = e;
    return t;
}
class y extends (o = s.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(t, this.state) || !(0, d.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, d.Z)(e.anchor, this.props.anchor) || !(0, d.Z)(e.size, this.props.size) || !(0, d.Z)(e.minSize, this.props.minSize) || !(0, d.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(C(this.props.anchor)), this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)), h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == t.operation && (!(0, d.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(C(this.props.anchor)), !(0, d.Z)(this.props.size, e.size) && this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), h.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i);
    }
    handleDragMove(e, t) {
        let {
            ref: { current: n },
            props: {
                id: i,
                container: { maxX: o, maxY: r, minX: l, minY: s },
                onDragStart: a,
                onDrag: u,
                snapOrientation: c = !0
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(o, e), l)), (t = Math.max(Math.min(r, t), s));
        let { width: m, height: v } = x(n, this.size),
            g = t - h,
            E = e - d,
            _ = (0, f.ou)(
                (0, f.PY)(
                    {
                        top: g,
                        left: E,
                        bottom: void 0,
                        right: void 0
                    },
                    o,
                    r,
                    m,
                    v
                )
            ),
            C = c ? (0, f.R)(_) : Z('RESIZE_SOUTH_EAST', _);
        this.setDOMPositions(C),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != C.top,
                    anchorLeftOverride: null != C.left
                },
                () => {
                    !p && null != a && a(), null != u && u(i, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: o, maxY: r, minX: l, minY: s },
                    onDragStart: a,
                    onDrag: u,
                    resizeValidation: c = I
                },
                state: { operation: h, operationStarted: p }
            } = this,
            { startX: m, startY: v } = this.dragState,
            g = 0,
            E = 0;
        if (null == h) return;
        switch (((e = Math.max(Math.min(o, e), l)), (t = Math.max(Math.min(r, t), s)), h)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                g -= m - e;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                g += m - e;
        }
        switch (h) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                E -= v - t;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                E += v - t;
        }
        let _ = c({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + g, i.width),
                    height: Math.max(this.dragState.offsetHeight + E, i.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            C = (0, f.BL)((0, f.ou)((0, f.PY)(this.dragState.dragOrientedCoords, o, r, _.width, _.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(_, !0), !(0, d.Z)(C, this.dragState.dragOrientedCoords) && ((this.dragState.dragOrientedCoords = C), this.setDOMPositions(this.dragState.dragOrientedCoords)), !p && (null != a && a(), this.setState({ operationStarted: !0 })), null != u && u(n, h, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: o } = e,
            { current: r } = this.ref;
        if (
            ((this.anchor = {
                top: t,
                left: n,
                bottom: i,
                right: o
            }),
            null != r)
        )
            (r.style.top = S(t)), (r.style.bottom = S(i)), (r.style.left = S(n)), (r.style.right = S(o));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: o } = this.ref;
        if (
            ((t = 'auto' !== this.size.width || i ? t : 'auto'),
            (n = 'auto' !== this.size.height || i ? n : 'auto'),
            (this.size = {
                width: t,
                height: n
            }),
            null != o)
        )
            (o.style.width = S(t)), (o.style.height = S(n));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeNorth, { [m.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeSouth, { [m.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeEast, { [m.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeWest, { [m.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeNorthWest, { [m.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeNorthEast, { [m.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeSouthWest, { [m.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, l.jsx)('div', {
                                  className: u()(m.resizeSouthEast, { [m.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_EAST')
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    renderExtras() {
        let {
                props: { renderExtras: e, anchor: t },
                setLockExtras: n
            } = this,
            i = null == e ? void 0 : e(n);
        return null != i
            ? (0, l.jsx)('div', {
                  className: u()({
                      [m.extras]: !0,
                      [m.extrasBottomOriented]: null != t.bottom,
                      [m.extrasRightOriented]: null != t.right
                  }),
                  children: i
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: o = 2, borderRadius: r = 12 },
            state: { operation: l }
        } = this;
        return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: o,
            padding: i,
            borderRadius: r + o + i,
            zIndex: null != l ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: o },
            size: r,
            anchor: l,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != l.top,
            anchorLeft: null != u ? u : null != l.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: o,
            hidden: t
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n },
            state: { operationStarted: i, lockExtras: o }
        } = this;
        return (0, l.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()({
                [m.wrapper]: !0,
                [m.operation]: i,
                [m.unlocked]: !n,
                [m.lockExtras]: o
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        });
    }
    constructor(e) {
        super(e),
            v(this, 'anchor', void 0),
            v(this, 'size', void 0),
            v(this, 'ref', s.createRef()),
            v(this, 'dragState', {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0,
                dragOrientedCoords: {
                    top: 0,
                    left: 0
                }
            }),
            v(this, 'state', {
                lockExtras: !1,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            v(this, 'handleShowUI', (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            v(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === p.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            v(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: o },
                        state: { operation: r, operationStarted: l }
                    } = this;
                if (!(null == r || (!l && 3 > g(i, o, t, n)))) 'MOVE' === r ? this.handleDragMove(t, n) : E.has(r) && this.handleResizeMove(t, n);
            }),
            v(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: o,
                        active: r,
                        container: { maxX: l, maxY: s }
                    }
                } = this;
                if (null == i || !r) return;
                let { width: a, height: u } = x(i, this.size),
                    c = (0, f.PY)(this.anchor, l, s, a, u);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(c);
                    this.dragState = {
                        ...this.dragState,
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    };
                } else {
                    let i = Z(e, c);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: a,
                            offsetHeight: u,
                            dragOrientedCoords: i
                        });
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1
                    },
                    () => {
                        o.addEventListener('mousemove', this.handleMouseMove), o.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            v(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let o = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, x(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: o } = x(this.ref.current, this.size),
                        r = (0, f.PY)(this.anchor, e, t, n, o),
                        l = (0, f.R)(r);
                    this.setDOMPositions(l),
                        this.setDOMSize({
                            width: n,
                            height: o
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    o
                );
            }),
            v(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = _(e.size, e.minSize.width, e.minSize.height));
    }
}
v(y, 'Operations', i);
