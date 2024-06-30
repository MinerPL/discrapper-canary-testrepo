n.d(e, {
    Z: function () {
        return N;
    }
}), n(47120), n(653041);
var o, r = n(735250), i = n(470079), s = n(120356), a = n.n(s), l = n(299608), c = n.n(l), u = n(748780), p = n(215569), h = n(376641), d = n(714338), g = n(134432), f = n(494735), m = n(585483), b = n(981631), C = n(531844);
function _(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}
let v = {
    friction: 10,
    tension: 100
};
function x(t, e) {
    return (t % e + e) % e;
}
class L extends i.Component {
    componentWillEnter(t) {
        let {directionHistory: e} = this.props, {
                translate: n,
                opacity: o
            } = this.state;
        n.setValue(e[e.length - 1]), o.setValue(0), t(), u.Z.parallel([
            u.Z.timing(o, {
                toValue: 1,
                easing: u.Z.Easing.out(u.Z.Easing.linear),
                duration: 200
            }),
            u.Z.spring(n, {
                toValue: 0,
                ...v
            })
        ]).start();
    }
    componentWillLeave(t) {
        let {directionHistory: e} = this.props, {
                opacity: n,
                translate: o
            } = this.state;
        u.Z.parallel([
            u.Z.timing(n, {
                toValue: 0,
                easing: u.Z.Easing.in(u.Z.Easing.linear),
                duration: 200
            }),
            u.Z.spring(o, {
                toValue: -1 * e[e.length - 1],
                ...v
            })
        ]).start(t);
    }
    getStyle() {
        let {
            translate: t,
            opacity: e
        } = this.state;
        return u.Z.accelerate({
            opacity: e,
            transform: [{
                    translateX: t.interpolate({
                        inputRange: [
                            0,
                            1
                        ],
                        outputRange: [
                            '0px',
                            '300px'
                        ]
                    })
                }]
        });
    }
    render() {
        let {item: t} = this.props, {className: e} = this.props;
        return (0, r.jsx)(u.Z.img, {
            src: t.src,
            alt: '',
            className: a()(C.slide, e),
            style: this.getStyle()
        });
    }
    constructor(...t) {
        super(...t), _(this, 'state', {
            translate: new u.Z.Value(0),
            opacity: new u.Z.Value(1)
        });
    }
}
class N extends (o = i.Component) {
    componentDidMount() {
        this.preloadNextImages(), d.Z.disable(), d.Z.enableTemp(h.P), m.S.subscribe(b.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), m.S.subscribe(b.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        d.Z.disableTemp(), m.S.unsubscribe(b.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), m.S.unsubscribe(b.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var t, e;
        let {currentIndex: n} = this.state, {items: o} = this.props;
        let r = ((n + 1) % (t = o.length) + t) % t;
        let i = ((n - 1) % (e = o.length) + e) % e;
        this.preloadImage(o[r]), this.preloadImage(o[i]);
    }
    preloadImage(t) {
        (0, g.po)(t.src);
    }
    componentDidUpdate(t, e) {
        let {currentIndex: n} = this.state;
        n !== e.currentIndex && this.preloadNextImages();
    }
    navigateTo(t) {
        var e, n, o;
        let {
            directionHistory: r,
            currentIndex: i
        } = this.state;
        r.push(t - i), t = (t % (o = this.props.items.length) + o) % o, this.setState({
            currentIndex: t,
            directionHistory: r
        }), null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t);
    }
    render() {
        var t;
        let {className: e} = this.props, {
                currentIndex: n,
                directionHistory: o
            } = this.state, {modalCarouselItemClassName: i} = this.props, s = this.props.items[n], l = this.props.items;
        return (0, r.jsxs)(p.W, {
            component: 'div',
            className: a()(C.wrapper, e),
            children: [
                l.length > 1 ? (0, r.jsx)(f.am, {
                    className: C.navPrev,
                    onClick: this.gotoPrev
                }) : null,
                null !== (t = s.component) && void 0 !== t ? t : (0, r.jsx)(L, {
                    item: s,
                    directionHistory: o,
                    className: i
                }, s.src),
                l.length > 1 ? (0, r.jsx)(f.Pz, {
                    className: C.navNext,
                    onClick: this.gotoNext
                }) : null
            ]
        });
    }
    constructor(t) {
        super(t), _(this, 'gotoNext', () => {
            let {currentIndex: t} = this.state;
            this.navigateTo(t + 1);
        }), _(this, 'gotoPrev', () => {
            let {currentIndex: t} = this.state;
            this.navigateTo(t - 1);
        }), _(this, 'gotoNextThrottled', c()(this.gotoNext, 300)), _(this, 'gotoPrevThrottled', c()(this.gotoPrev, 300)), this.state = {
            currentIndex: t.startWith,
            directionHistory: []
        };
    }
}
_(N, 'defaultProps', { startWith: 0 });
