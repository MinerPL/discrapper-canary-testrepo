n.d(t, {
    u: function () {
        return A;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(180081),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    _ = n(243778),
    E = n(130402),
    f = n(78839),
    h = n(626135),
    p = n(153066),
    I = n(981631),
    m = n(921944),
    T = n(185923),
    S = n(689938),
    g = n(822387);
let A = {
        tension: 800,
        friction: 24
    },
    N = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: g.premiumTooltipContainer,
            children: [
                (0, r.jsx)(c.LottieAnimation, {
                    className: s()(g.premiumUnlockAnimation, { [g.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    className: g.premiumTooltipText,
                    children: S.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()
                })
            ]
        });
    };
t.Z = function (e) {
    var t;
    let { tabIndex: n, className: a, renderButtonContents: O, active: R, onClick: v, 'aria-controls': C, focusProps: y } = e,
        [L, D] = i.useState(!1),
        [b, M] = i.useState(50),
        P = (0, l.e7)([f.ZP], () => f.ZP.inReverseTrial()),
        U = L || R,
        w = (0, p.l)(g, 'emojiButton', U ? 'Hovered' : 'Normal');
    let x =
            ((t = b),
            {
                '--custom-emoji-sprite-size': ''.concat(24, 'px'),
                '--custom-emoji-sprite-row': Math.floor(t / 20),
                '--custom-emoji-sprite-col': t % 20
            }),
        G = i.useCallback(() => {
            if (U) return;
            let e = Math.floor(77 * Math.random());
            D(!0), M(e), (0, E.x)(T.qR.EmojiButtonMouseEntered);
        }, [U, D, M]),
        k = i.useCallback(() => {
            D(!1);
        }, [D]),
        B = i.useCallback(() => (0, E.x)(T.qR.EmojiButtonFocused), []),
        [F, V] = (0, _.US)(P ? [u.z.REVERSE_TRIAL_EMOJI_BUTTON] : [], void 0, !0),
        H = F === u.z.REVERSE_TRIAL_EMOJI_BUTTON,
        Z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(c.Tooltip, {
        text: N(),
        'aria-label': ''.concat(S.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()),
        position: 'top',
        shouldShow: P && !R && H,
        tooltipClassName: g.premiumTooltip,
        tooltipContentClassName: g.premiumTooltipContainer,
        children: (e) =>
            (0, r.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: n,
                className: s()(w, a),
                onMouseEnter: () => {
                    var t;
                    G(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), h.default.track(I.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                },
                onMouseOver: G,
                onMouseLeave: () => {
                    var t;
                    k(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e), H && V(m.L.USER_DISMISS);
                },
                onFocus: B,
                onClick: (t) => {
                    var n;
                    null == v || v(t), null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                'aria-label': S.Z.Messages.SELECT_EMOJI,
                'aria-controls': C,
                'aria-expanded': R,
                'aria-haspopup': 'dialog',
                focusProps: y,
                onContextMenu: e.onContextMenu,
                children:
                    null != O
                        ? O()
                        : (0, r.jsx)(c.Spring, {
                              config: A,
                              to: { value: U ? 1 : 0 },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(o.animated.div, {
                                      className: g.spriteContainer,
                                      style: {
                                          ...x,
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      },
                                      children: [(0, r.jsx)('div', { className: s()(g.sprite, g.spriteColored, U ? g.active : g.inactive) }), (0, r.jsx)('div', { className: s()(g.sprite, P && H ? g.spritePremiumColored : g.spriteGreyscale, U ? g.inactive : g.active, { [g.reducedMotion]: Z }) })]
                                  });
                              }
                          })
            })
    });
};
