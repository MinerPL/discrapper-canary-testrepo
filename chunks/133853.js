n.d(t, {
    Z: function () {
        return E;
    }
}), n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(748780), u = n(481060), c = n(981631), d = n(931808);
function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class E extends (r = a.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(e) {
        e.show !== this.props.show && this.animate(this.props.show ? 1 : 0);
    }
    getAnimatedStyle() {
        let {anim: e} = this, {reducedMotion: t} = this.context;
        return {
            opacity: e,
            transform: t.enabled ? void 0 : [
                {
                    translateY: e.interpolate({
                        inputRange: [
                            0,
                            1
                        ],
                        outputRange: [
                            '-100px',
                            '0px'
                        ]
                    })
                },
                { translateZ: 0 }
            ]
        };
    }
    render() {
        return (0, i.jsx)(l.Z.a, {
            href: c.Z5c.INDEX,
            target: '_blank',
            rel: 'noopener',
            className: s()(d.logo, this.props.className),
            style: this.getAnimatedStyle()
        });
    }
    constructor(...e) {
        super(...e), _(this, 'anim', new l.Z.Value(0)), _(this, 'animate', e => {
            l.Z.spring(this.anim, {
                toValue: e,
                friction: 10,
                tension: 100
            }).start();
        });
    }
}
_(E, 'contextType', u.AccessibilityPreferencesContext);
