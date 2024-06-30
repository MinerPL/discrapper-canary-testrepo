n.d(t, {
    Z: function () {
        return S;
    }
}), n(653041), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(748780), o = n(442837), c = n(215569), u = n(780384), d = n(481060), h = n(410030), p = n(451478), m = n(421600), _ = n(354459), f = n(330280), E = n(83922), C = n(120393);
function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let I = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26
    }, x = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: r.Z.Easing.inOut(r.Z.Easing.back()),
        EASING_OUT: r.Z.Easing.quad
    }, T = 200, N = 125;
class v extends a.PureComponent {
    componentDidMount() {
        this.componentDidAppear();
    }
    componentDidAppear() {
        let {
            scaleAnimation: e,
            widthAnimation: t
        } = this;
        e.setValue(1), t.setValue(1);
    }
    componentWillEnter(e) {
        let {
            scaleAnimation: t,
            widthAnimation: n
        } = this;
        t.setValue(0), n.setValue(0), r.Z.parallel([
            r.Z.timing(t, {
                toValue: 1,
                duration: x.DURATION_IN,
                easing: x.EASING_IN
            }),
            r.Z.timing(n, {
                toValue: 1,
                duration: T
            })
        ]).start(e);
    }
    componentWillLeave(e) {
        let {
            scaleAnimation: t,
            spriteAnimation: n,
            spriteOpacity: i,
            widthAnimation: a
        } = this;
        i.setValue(1), n.setValue(0);
        let l = [];
        for (let e = 0; e < I.STEPS; e++)
            l.push(r.Z.timing(n, {
                toValue: -I.FRAME_SIZE * e,
                duration: I.FRAME_DURATION
            }));
        r.Z.sequence([
            r.Z.timing(t, {
                toValue: 0,
                duration: x.DURATION_OUT,
                easing: x.EASING_OUT
            }),
            r.Z.sequence(l),
            r.Z.timing(a, {
                toValue: 0,
                duration: N
            })
        ]).start(e);
    }
    getScaleStyle() {
        let {scaleAnimation: e} = this;
        return r.Z.accelerate({
            transform: [{
                    scale: e.interpolate({
                        inputRange: [
                            0,
                            1
                        ],
                        outputRange: [
                            x.SCALE_MIN,
                            x.SCALE_MAX
                        ]
                    })
                }],
            opacity: e
        });
    }
    getSpriteStyle() {
        let {
            spriteAnimation: e,
            spriteOpacity: t
        } = this;
        return {
            backgroundPosition: e,
            opacity: t
        };
    }
    getWidthStyle() {
        return {
            width: this.widthAnimation.interpolate({
                inputRange: [
                    0,
                    1
                ],
                outputRange: [
                    '0px',
                    ''.concat(this.props.width, 'px')
                ]
            })
        };
    }
    render() {
        let {
                theme: e,
                children: t,
                className: n
            } = this.props, a = (0, u.wj)(e), l = s()(f.sprite, {
                [C.crossWhite]: a,
                [C.crossGrey]: !a
            });
        return (0, i.jsxs)(r.Z.div, {
            className: s()(f.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)('div', {
                    className: s()(f.spriteWrapper, E.horizontal, E.justifyCenter, E.alignCenter),
                    children: (0, i.jsx)(r.Z.div, {
                        className: l,
                        style: this.getSpriteStyle()
                    })
                }),
                (0, i.jsx)(r.Z.div, {
                    style: this.getScaleStyle(),
                    children: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), g(this, 'scaleAnimation', new r.Z.Value(0)), g(this, 'spriteAnimation', new r.Z.Value(0)), g(this, 'spriteOpacity', new r.Z.Value(0)), g(this, 'widthAnimation', new r.Z.Value(0));
    }
}
function S(e) {
    var t, n;
    let {
            participants: a,
            onContextMenu: l,
            className: r,
            onClick: u,
            width: E,
            guildId: C
        } = e, g = (0, h.ZP)();
    let I = (t = E, n = a.length, ((0, d.getAvatarSize)(d.AvatarSizes.SIZE_80) + 16) * n > t ? d.AvatarSizes.SIZE_40 : d.AvatarSizes.SIZE_80), x = (0, o.e7)([p.Z], () => p.Z.isFocused()), T = a.map(e => {
            var t, n;
            if (e.type !== _.fO.USER)
                return null;
            let {
                user: a,
                voiceState: s,
                speaking: r,
                ringing: o
            } = e;
            return (0, i.jsx)(v, {
                className: f.participant,
                width: (0, d.getAvatarSize)(I),
                theme: g,
                children: (0, i.jsx)(m.Z, {
                    src: a.getAvatarURL(C, (0, d.getAvatarSize)(I), r && x),
                    size: I,
                    muted: null !== (t = null == s ? void 0 : s.isVoiceMuted()) && void 0 !== t && t,
                    deafen: null !== (n = null == s ? void 0 : s.isVoiceDeafened()) && void 0 !== n && n,
                    speaking: r,
                    ringing: o,
                    onClick: t => null == u ? void 0 : u(e, t),
                    onContextMenu: t => null == l ? void 0 : l(e, t)
                }, e.id)
            }, a.id);
        });
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: s()(f.root, r),
        children: T
    });
}
