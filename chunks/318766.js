n.d(t, {
    u: function () {
        return m;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(338545),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(130402),
    _ = n(78839),
    E = n(153066),
    f = n(185923),
    h = n(689938),
    p = n(822387);
let m = {
        tension: 800,
        friction: 24
    },
    I = () => {
        let e = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: p.premiumTooltipContainer,
            children: [
                (0, r.jsx)(u.LottieAnimation, {
                    className: s()(p.premiumUnlockAnimation, { [p.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    className: p.premiumTooltipText,
                    children: h.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()
                })
            ]
        });
    };
t.Z = function (e) {
    var t;
    let { tabIndex: n, className: a, renderButtonContents: c, active: T, onClick: g, 'aria-controls': S, focusProps: A } = e,
        [N, v] = i.useState(!1),
        [O, R] = i.useState(50),
        C = (0, l.e7)([_.ZP], () => _.ZP.inReverseTrial()),
        y = N || T,
        D = (0, E.l)(p, 'emojiButton', y ? 'Hovered' : 'Normal');
    let L =
            ((t = O),
            {
                '--custom-emoji-sprite-size': ''.concat(24, 'px'),
                '--custom-emoji-sprite-row': Math.floor(t / 20),
                '--custom-emoji-sprite-col': t % 20
            }),
        b = i.useCallback(() => {
            if (y) return;
            let e = Math.floor(77 * Math.random());
            v(!0), R(e), (0, d.x)(f.qR.EmojiButtonMouseEntered);
        }, [y, v, R]),
        M = i.useCallback(() => {
            v(!1);
        }, [v]),
        P = i.useCallback(() => (0, d.x)(f.qR.EmojiButtonFocused), []);
    return (0, r.jsx)(u.Tooltip, {
        text: I(),
        'aria-label': ''.concat(h.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()),
        position: 'top',
        shouldShow: C && !T,
        tooltipClassName: p.premiumTooltip,
        children: (e) =>
            (0, r.jsx)(u.Button, {
                look: u.Button.Looks.BLANK,
                size: u.Button.Sizes.NONE,
                tabIndex: n,
                className: s()(D, a),
                onMouseEnter: () => {
                    var t;
                    b(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                },
                onMouseOver: b,
                onMouseLeave: () => {
                    var t;
                    M(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                },
                onFocus: P,
                onClick: (t) => {
                    var n;
                    null == g || g(t), null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                'aria-label': h.Z.Messages.SELECT_EMOJI,
                'aria-controls': S,
                'aria-expanded': T,
                'aria-haspopup': 'dialog',
                focusProps: A,
                onContextMenu: e.onContextMenu,
                children:
                    null != c
                        ? c()
                        : (0, r.jsx)(u.Spring, {
                              config: m,
                              to: { value: y ? 1 : 0 },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(o.animated.div, {
                                      className: p.spriteContainer,
                                      style: {
                                          ...L,
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      },
                                      children: [(0, r.jsx)('div', { className: s()(p.sprite, C ? p.spritePremiumColored : p.spriteColored, y ? p.active : p.inactive) }), (0, r.jsx)('div', { className: s()(p.sprite, C ? p.spritePremiumColored : p.spriteGreyscale, y ? p.inactive : p.active) })]
                                  });
                              }
                          })
            })
    });
};
