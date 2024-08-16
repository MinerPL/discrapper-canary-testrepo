n(47120);
var s,
    a,
    i,
    r = n(735250),
    l = n(470079),
    o = n(120356),
    c = n.n(o),
    d = n(392711),
    u = n.n(d),
    _ = n(82923),
    I = n(476106);
function E(e, t, n) {
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
((i = s || (s = {}))[(i.HOVERING = 0)] = 'HOVERING'), (i[(i.FLYING = 1)] = 'FLYING');
let T = Object.freeze({
    HOVERING: {
        Y_DURATION: 1500,
        Y_VALUE: -5,
        Y_VALUE_MODIFIER: -1,
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY_FALLING: 0.8,
        FIRE_MAX_INTENSITY_FALLING: 1,
        FIRE_MIN_INTENSITY_RISING: 1,
        FIRE_MAX_INTENSITY_RISING: 1.2
    },
    FALLING: {
        Y_VALUE: 10,
        FIRE_COUNT: 10,
        FIRE_VALUE: 0.2
    },
    STAGING: {
        DURATION: 500,
        Y_VALUE: 22,
        SHAKE_COUNT: 10,
        SHAKE_INTENSITY: 2,
        FIRE_COUNT: 4,
        FIRE_MIN_INTENSITY: 0.6,
        FIRE_MAX_INTENSITY: 1
    },
    FLYING: {
        DURATION: 500,
        Y_VALUE: -1000,
        Y_EASING: _.Z.Easing.bezier(0.46, 0.01, 1, -0.3),
        X_VALUE: 200,
        X_EASING: _.Z.Easing.bezier(0.65, 0.05, 1, 0.25),
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY: 1.2,
        FIRE_MAX_INTENSITY: 1.4,
        OPACITY_VALUE: 0,
        OPACITY_DURATION_DIVIDEND: 2
    }
});
function m(e, t, n, s) {
    return _.Z.sequence(
        u().times(t, (a) =>
            _.Z.timing(e, {
                toValue: s(a),
                duration: n / t
            })
        )
    );
}
class N extends (a = l.Component) {
    componentDidMount() {
        this.startAnimation();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    componentDidUpdate(e) {
        this.props.stage !== e.stage && this.startAnimation();
    }
    startAnimation() {
        switch ((null != this.currentAnimation && this.currentAnimation.stop(), this.props.stage)) {
            case 0:
                return this.startHoverAnimate();
            case 1:
                return this.flyAnimate();
        }
    }
    resetAnimation() {
        this.y.setValue(0), this.x.setValue(0), this.opacity.setValue(1), this.fireScale.setValue(1);
    }
    startHoverAnimate() {
        this.resetAnimation(), this.hoverAnimate(T.HOVERING.Y_VALUE);
    }
    createFireAnimation(e, t, n, s) {
        return m(this.fireScale, e, t, () => u().random(n, s));
    }
    async hoverAnimate(e) {
        var t;
        if (0 !== this.props.stage || this.isUnmounted) return;
        let n = e > 1,
            s = n ? T.HOVERING.FIRE_MIN_INTENSITY_FALLING : T.HOVERING.FIRE_MIN_INTENSITY_RISING,
            a = n ? T.HOVERING.FIRE_MAX_INTENSITY_FALLING : T.HOVERING.FIRE_MAX_INTENSITY_RISING,
            i = this.createFireAnimation(T.HOVERING.FIRE_COUNT, T.HOVERING.Y_DURATION, s, a),
            r = _.Z.timing(this.y, {
                toValue: e,
                duration: T.HOVERING.Y_DURATION,
                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
            });
        (this.currentAnimation = _.Z.parallel([r, i])), await (null === (t = this.currentAnimation) || void 0 === t ? void 0 : t.start()), this.hoverAnimate(e * T.HOVERING.Y_VALUE_MODIFIER);
    }
    createShakeAnimation(e, t, n) {
        return m(this.x, e, t, (e) => u().random(1, n) * (e % 2 == 0 ? 1 : -1));
    }
    async flyAnimate() {
        var e;
        let t = _.Z.spring(this.y, {
                toValue: T.FALLING.Y_VALUE,
                overshootClamping: !0
            }),
            n = _.Z.spring(this.fireScale, {
                toValue: T.FALLING.FIRE_VALUE,
                overshootClamping: !0
            }),
            s = _.Z.parallel([t, n]),
            a = _.Z.timing(this.y, {
                toValue: T.STAGING.Y_VALUE,
                duration: T.STAGING.DURATION
            }),
            i = this.createShakeAnimation(T.STAGING.SHAKE_COUNT, T.STAGING.DURATION, T.STAGING.SHAKE_INTENSITY),
            r = this.createFireAnimation(T.STAGING.FIRE_COUNT, T.STAGING.DURATION, T.STAGING.FIRE_MIN_INTENSITY, T.STAGING.FIRE_MAX_INTENSITY),
            l = _.Z.parallel([a, i, r]),
            o = _.Z.timing(this.y, {
                toValue: T.FLYING.Y_VALUE,
                duration: T.FLYING.DURATION,
                easing: T.FLYING.Y_EASING
            }),
            c = _.Z.timing(this.x, {
                toValue: T.FLYING.X_VALUE,
                duration: T.FLYING.DURATION,
                easing: T.FLYING.X_EASING
            }),
            d = _.Z.timing(this.opacity, {
                toValue: T.FLYING.OPACITY_VALUE,
                duration: T.FLYING.DURATION / T.FLYING.OPACITY_DURATION_DIVIDEND,
                delay: T.FLYING.DURATION / T.FLYING.OPACITY_DURATION_DIVIDEND
            }),
            u = this.createFireAnimation(T.FLYING.FIRE_COUNT, T.FLYING.DURATION, T.FLYING.FIRE_MIN_INTENSITY, T.FLYING.FIRE_MAX_INTENSITY),
            I = _.Z.parallel([o, c, d, u]);
        if (((this.currentAnimation = _.Z.sequence([s, l, I])), await (null === (e = this.currentAnimation) || void 0 === e ? void 0 : e.start()), !this.isUnmounted)) {
            let { onFlyingComplete: e } = this.props;
            null != e && e();
        }
    }
    getWumpusStyle() {
        return {
            transform: [
                {
                    translateY: this.y.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                },
                {
                    translateX: this.x.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                }
            ],
            opacity: this.opacity
        };
    }
    getFireStyle() {
        return { transform: [{ scale: this.fireScale }] };
    }
    render() {
        let { className: e, style: t } = this.props;
        return (0, r.jsxs)(_.Z.div, {
            className: c()(I.animation, e),
            style: {
                ...t,
                ...this.getWumpusStyle()
            },
            children: [
                (0, r.jsx)('div', {
                    className: I.fireTopWrapper,
                    children: (0, r.jsx)(_.Z.div, {
                        className: I.fire,
                        style: this.getFireStyle()
                    })
                }),
                (0, r.jsx)('div', {
                    className: I.fireBottomWrapper,
                    children: (0, r.jsx)(_.Z.div, {
                        className: I.fire,
                        style: this.getFireStyle()
                    })
                }),
                (0, r.jsx)('div', { className: I.wumpus })
            ]
        });
    }
    constructor(...e) {
        super(...e), E(this, 'x', new _.Z.Value(0)), E(this, 'y', new _.Z.Value(0)), E(this, 'opacity', new _.Z.Value(1)), E(this, 'fireScale', new _.Z.Value(1)), E(this, 'currentAnimation', null), E(this, 'isUnmounted', !1);
    }
}
E(N, 'Stages', s), (t.Z = N);
