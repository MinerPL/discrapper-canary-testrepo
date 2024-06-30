i.d(n, {
    n: function () {
        return a;
    }
});
var t, a, r = i(735250), o = i(470079), l = i(120356), s = i.n(l), c = i(748780), d = i(215569), u = i(763863);
(t = a || (a = {}))[t.RIGHT = -1] = 'RIGHT', t[t.LEFT = 1] = 'LEFT';
let _ = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class p extends o.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), c.Z.spring(this._animated, {
            toValue: 0,
            ...this.props.springSettings
        }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        c.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e);
    }
    getStyle() {
        let e = c.Z.accelerate({
            transform: [{
                    translateX: this._animated.interpolate({
                        inputRange: [
                            0,
                            1
                        ],
                        outputRange: [
                            '0%',
                            '-100%'
                        ]
                    })
                }]
        });
        return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
            inputRange: [
                -1,
                0,
                1
            ],
            outputRange: [
                0,
                1,
                0
            ]
        })), e;
    }
    render() {
        return (0, r.jsx)(c.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children
        });
    }
    constructor(e) {
        var n, i, t;
        super(e), n = this, t = void 0, (i = '_animated') in n ? Object.defineProperty(n, i, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[i] = t, this._animated = new c.Z.Value(-1 * e.direction);
    }
}
n.Z = e => {
    let {
        children: n,
        step: i,
        direction: t,
        className: a,
        springSettings: o = _,
        fadeInOut: l = !1
    } = e;
    return (0, r.jsx)(d.W, {
        component: 'div',
        className: s()(u.animator, a),
        children: (0, r.jsx)(p, {
            direction: t,
            springSettings: o,
            fadeInOut: l,
            children: n
        }, i)
    });
};
