n(47120);
var s = n(735250),
    r = n(470079),
    i = n(954955),
    a = n.n(i),
    l = n(748780),
    o = n(873546),
    c = n(477690),
    u = n(481060),
    d = n(624138),
    _ = n(510759);
function h(e, t, n) {
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
let E = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    g = {
        START: 0,
        END: 1
    },
    p = {
        friction: 10,
        tension: 130
    };
t.Z = function (e) {
    return class extends r.Component {
        componentDidMount() {
            !o.tq && (window.addEventListener('resize', this.handleResizeDebounced), this.handleResize());
        }
        componentWillUnmount() {
            clearTimeout(this.timeout), window.removeEventListener('resize', this.handleResizeDebounced);
        }
        componentWillAppear(e) {
            this.state.shouldAnimate ? this.animateTo(g.END, e) : e();
        }
        componentWillEnter(e) {
            this.state.shouldAnimate ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(g.END, e), 40))) : e();
        }
        componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(g.START, e) : e();
        }
        animateTo(e, t) {
            l.Z.spring(this.anim, {
                toValue: e,
                ...p
            }).start(t);
        }
        getAnimatedStyle(e) {
            return this.state.shouldAnimate
                ? {
                      opacity: this.anim,
                      transform: e
                          ? void 0
                          : [
                                {
                                    scale: this.anim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1.05, 1]
                                    })
                                },
                                {
                                    translateY: this.anim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['-70px', '0px']
                                    })
                                },
                                { translateZ: 0 }
                            ]
                  }
                : null;
        }
        render() {
            return (0, s.jsx)('div', {
                className: _.wrapper,
                children: (0, s.jsx)(u.AccessibilityPreferencesContext.Consumer, {
                    children: (t) => {
                        let { reducedMotion: n } = t;
                        return (0, s.jsx)(l.Z.div, {
                            style: this.getAnimatedStyle(n.enabled),
                            children: (0, s.jsx)(e, { ...this.props })
                        });
                    }
                })
            });
        }
        constructor(...e) {
            super(...e),
                h(this, 'timeout', void 0),
                h(this, 'anim', new l.Z.Value(g.START)),
                h(this, 'state', { shouldAnimate: !o.tq }),
                h(this, 'handleResize', () => {
                    let e = window.innerWidth > E;
                    !this.state.shouldAnimate && e && this.anim.setValue(g.END), this.setState({ shouldAnimate: e });
                }),
                h(this, 'handleResizeDebounced', a()(this.handleResize, 60));
        }
    };
};
