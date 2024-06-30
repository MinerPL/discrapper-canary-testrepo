n.d(t, {
    u: function () {
        return f;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(920906), l = n(481060), u = n(130402), c = n(153066), d = n(185923), _ = n(689938), E = n(595958);
let f = {
    tension: 800,
    friction: 24
};
t.Z = function (e) {
    var t;
    let {
            tabIndex: n,
            className: a,
            renderButtonContents: h,
            active: p,
            onClick: m,
            'aria-controls': I,
            focusProps: T
        } = e, [g, S] = i.useState(!1), [A, N] = i.useState(50), v = g || p, O = (0, c.l)(E, 'emojiButton', v ? 'Hovered' : 'Normal');
    let R = (t = A, {
            '--custom-emoji-sprite-size': ''.concat(24, 'px'),
            '--custom-emoji-sprite-row': Math.floor(t / 20),
            '--custom-emoji-sprite-col': t % 20
        }), C = i.useCallback(() => {
            if (v)
                return;
            let e = Math.floor(77 * Math.random());
            S(!0), N(e), (0, u.x)(d.qR.EmojiButtonMouseEntered);
        }, [
            v,
            S,
            N
        ]), y = i.useCallback(() => {
            S(!1);
        }, [S]), D = i.useCallback(() => (0, u.x)(d.qR.EmojiButtonFocused), []);
    return (0, r.jsx)(l.Button, {
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.NONE,
        tabIndex: n,
        className: o()(O, a),
        onMouseEnter: C,
        onMouseOver: C,
        onMouseLeave: y,
        onFocus: D,
        onClick: m,
        'aria-label': _.Z.Messages.SELECT_EMOJI,
        'aria-controls': I,
        'aria-expanded': p,
        'aria-haspopup': 'dialog',
        focusProps: T,
        children: null != h ? h() : (0, r.jsx)(s.Spring, {
            config: f,
            to: { value: v ? 1 : 0 },
            children: e => {
                let {value: t} = e;
                return (0, r.jsxs)(s.animated.div, {
                    className: E.spriteContainer,
                    style: {
                        ...R,
                        transform: t.to([
                            0,
                            1
                        ], [
                            1,
                            1.14
                        ]).to(e => 'scale('.concat(e, ')'))
                    },
                    children: [
                        (0, r.jsx)('div', { className: o()(E.sprite, E.spriteColored, v ? E.active : E.inactive) }),
                        (0, r.jsx)('div', { className: o()(E.sprite, E.spriteGreyscale, v ? E.inactive : E.active) })
                    ]
                });
            }
        })
    });
};
