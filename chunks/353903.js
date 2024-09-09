n.d(t, {
    G0: function () {
        return h;
    },
    u$: function () {
        return p;
    }
}),
    n(47120),
    n(724458);
var r,
    i = n(735250),
    a = n(470079),
    s = n(392711),
    o = n.n(s),
    l = n(748780),
    u = n(692547),
    c = n(699337);
function d(e, t, n) {
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
let _ = [u.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, u.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'];
class E extends a.PureComponent {
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t }
        } = this;
        return (0, i.jsx)('div', {
            style: {
                height: e,
                backgroundColor: t
            },
            className: c.gif
        });
    }
    constructor(...e) {
        super(...e), d(this, 'state', { backgroundColor: o().sample(_) });
    }
}
class f extends (r = a.Component) {
    componentDidMount() {
        this.animateSlide();
    }
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t }
        } = this;
        return {
            width: ''.concat(100 / e, '%'),
            transform: [
                {
                    translateY: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                }
            ]
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, i.jsxs)(l.Z.div, {
            className: c.column,
            style: this.getAnimatedStyle(),
            children: [e.map((e, t) => (0, i.jsx)(E, { height: e }, t)), e.map((e, t) => (0, i.jsx)(E, { height: e }, 'alt'.concat(t)))]
        });
    }
    constructor(e) {
        super(e),
            d(this, 'animateSlide', () => {
                let {
                    props: { direction: e },
                    state: { translateY: t, height: n }
                } = this;
                t.setValue(e > 0 ? 0 : -n / 2 + 12),
                    l.Z.timing(t, {
                        toValue: e > 0 ? -n / 2 + 12 : 0,
                        duration: 800,
                        easing: l.Z.Easing.linear
                    }).start(this.animateSlide);
            });
        let t = Array(10)
            .fill(null)
            .map(() => o().random(40, 150));
        this.state = {
            blocks: t,
            height: 2 * t.reduce((e, t) => e + t + 12, 12),
            translateY: new l.Z.Value(0)
        };
    }
}
d(f, 'defaultProps', { direction: -1 });
let h = (e) => {
    let { columns: t } = e;
    return (0, i.jsx)('div', {
        className: c.column,
        style: { width: ''.concat(100 / t, '%') },
        children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)('div', { className: c.categoryLoader }, t))
    });
};
class p extends a.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, i.jsx)('div', {
            className: c.container,
            children: Array(e)
                .fill(null)
                .map((n, r) => t(e, r))
        });
    }
}
