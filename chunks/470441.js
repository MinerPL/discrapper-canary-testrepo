n.d(t, {
    B: function () {
        return p;
    }
});
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(748780), u = n(846519), c = n(215569), d = n(285952), _ = n(981631), E = n(123641);
function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let h = {
    [_.AEg.NORMAL]: E.normal,
    [_.AEg.MINIMUM]: E.minimum,
    [_.AEg.NO_CHAT]: E.noChat,
    [_.AEg.FULL_SCREEN]: E.fullScreen
};
class p extends a.PureComponent {
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let {animation: t} = this.state;
        t.setValue(0), l.Z.spring(t, {
            toValue: 1,
            overshootClamping: !0
        }).start(e);
    }
    componentWillLeave(e) {
        l.Z.spring(this.state.animation, {
            toValue: 0,
            overshootClamping: !0
        }).start(e);
    }
    render() {
        return (0, i.jsx)(l.Z.div, {
            className: s()(E.videoBackgroundTransition, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), this.state = { animation: new l.Z.Value(0) };
    }
}
class m extends (r = a.PureComponent) {
    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseEvent, !0), document.addEventListener('mousemove', this.handleMouseEvent, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseEvent, !0), document.removeEventListener('mousemove', this.handleMouseEvent, !0), this._timeout.stop();
    }
    static getDerivedStateFromProps(e, t) {
        if (e.layout !== t.layoutProp)
            return t.idle ? {
                idle: !1,
                layoutProp: e.layout
            } : { layoutProp: e.layout };
        return null;
    }
    componentDidUpdate(e) {
        this.props.layout !== e.layout && this._timeout.stop();
    }
    renderBackground() {
        let {
                background: e,
                backgroundKey: t,
                layout: n
            } = this.props, r = ''.concat(n, '-').concat(null != t ? t : '');
        return (0, i.jsx)(c.W, {
            className: E.videoBackground,
            component: 'div',
            children: (0, i.jsx)(p, { children: e }, r)
        });
    }
    renderContents() {
        let {
                top: e,
                center: t,
                bottom: n,
                layout: r,
                focused: a
            } = this.props, {idle: o} = this.state;
        return (0, i.jsx)(d.Z, {
            className: s()(E.video, h[r], { [E.idle]: o }),
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: (0, i.jsxs)(d.Z, {
                className: E.videoWrapper,
                direction: d.Z.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, i.jsxs)(d.Z, {
                        className: s()(E.videoInner, { [E.focused]: a }),
                        direction: d.Z.Direction.VERTICAL,
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: E.videoTop,
                                grow: 0,
                                children: e
                            }),
                            (0, i.jsx)(d.Z, {
                                className: E.videoCenter,
                                children: t
                            }),
                            (0, i.jsx)(d.Z, {
                                className: E.videoBottom,
                                grow: 0,
                                children: n
                            })
                        ]
                    })
                ]
            })
        });
    }
    render() {
        let {
            layout: e,
            className: t,
            animated: n
        } = this.props;
        return (0, i.jsx)('div', {
            className: s()(E.videoHeight, h[e], t, { [E.animated]: n }),
            children: this.renderContents()
        });
    }
    constructor(e) {
        super(e), f(this, '_timeout', new u.V7()), f(this, 'handleMouseEvent', () => {
            let {layout: e} = this.props;
            if (e === _.AEg.FULL_SCREEN || e === _.AEg.NO_CHAT)
                this._timeout.start(3000, () => this.setState({ idle: !0 })), this.state.idle && this.setState({ idle: !1 });
        }), this.state = {
            idle: !1,
            backgroundAnimation: new l.Z.Value(0),
            layoutProp: e.layout
        };
    }
}
f(m, 'defaultProps', {
    layout: _.AEg.MINIMUM,
    animated: !0
});
