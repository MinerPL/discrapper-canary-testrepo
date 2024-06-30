n.d(t, {
    Z: function () {
        return T;
    }
}), n(47120);
var i = n(735250), s = n(470079), o = n(887024), a = n(920906), l = n(748780), r = n(596454), c = n(745510), u = n(912893), d = n(153850), h = n(768581), m = n(176354), p = n(675654), g = n(883021);
let f = [];
function T(e) {
    let {
            messageId: t,
            emoji: n,
            startPosition: T,
            targetPosition: _
        } = e, [v, b] = s.useState(0), [E, I] = s.useState(0), [x, C] = s.useState(null), {confettiCanvas: R} = s.useContext(c.h), S = (0, o.uR)(R, x), N = s.useMemo(() => [{
                src: null == n.id ? m.ZP.getURL(n.name) : h.ZP.getEmojiURL({
                    id: n.id,
                    animated: !1,
                    size: 22
                }),
                colorize: !1
            }], [
            n.name,
            n.id
        ]), O = _.x - _.width / 2 * 0.5, Z = _.y - _.height / 2 * 0.5, j = (0, a.useSpring)({
            from: { y: T.y },
            to: { y: Z },
            config: {
                duration: 450,
                easing: l.Z.Easing.in(l.Z.Easing.exp)
            },
            onChange: e => {
                let {y: t} = e;
                I(t);
            }
        }), M = (0, a.useSpring)({
            from: {
                x: T.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: O,
                scale: 0.5,
                opacity: 0.4
            },
            config: {
                duration: 450,
                easing: l.Z.Easing.in(l.Z.Easing.ease)
            },
            onRest: () => {
                (0, u.G)(t, n.name, n.id);
            },
            onChange: e => {
                let {x: t} = e;
                b(t);
            }
        });
    return s.useEffect(() => {
        v > 0 && E > 0 && S.createConfetti({
            ...p.We,
            position: {
                type: 'static',
                value: {
                    x: v,
                    y: E
                }
            }
        });
    }, [
        S,
        v,
        E
    ]), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Ji, {
                ref: C,
                sprites: N,
                colors: f,
                spriteWidth: p.Ko,
                spriteHeight: p.Ko
            }),
            (0, i.jsx)(d.ZP, {
                children: (0, i.jsx)(a.animated.div, {
                    style: { ...j },
                    className: g.emojiContainer,
                    children: (0, i.jsx)(a.animated.div, {
                        style: {
                            ...M,
                            opacity: M.opacity
                        },
                        children: (0, i.jsx)(r.Z, {
                            className: g.emoji,
                            emojiId: n.id,
                            emojiName: n.name,
                            animated: n.animated,
                            size: 'jumbo'
                        })
                    })
                })
            })
        ]
    });
}
