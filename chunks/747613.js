n(47120), n(733860);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(392711), l = n.n(s), u = n(920906), c = n(91192), d = n(946188), _ = n(477690), E = n(481060), f = n(80932), h = n(351773), p = n(209613), m = n(633302), I = n(153124), T = n(176354), g = n(624138), S = n(981631), A = n(689938), N = n(53755);
let v = (0, I.hQ)(), O = d.Z.convert.fromCodePoint('1f44f'), R = (0, g.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL), C = (0, g.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE), y = e => {
        let {
                fade: t,
                surrogate: n,
                onClick: i,
                delay: a,
                index: o
            } = e, s = (0, c.JA)('item-'.concat(o)), l = T.ZP.getURL(O + n), _ = (0, u.useSpring)({
                opacity: 1,
                from: { opacity: t ? 0 : 1 },
                delay: a
            });
        return (0, r.jsx)(E.Clickable, {
            ...s,
            role: 'option',
            'aria-selected': 0 === o,
            onClick: () => i(n),
            className: N.diversityEmojiItem,
            children: (0, r.jsx)(u.animated.div, {
                'aria-label': function (e) {
                    switch (d.Z.convert.toCodePoint(e)) {
                    case '1f3fb':
                        return A.Z.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
                    case '1f3fc':
                        return A.Z.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
                    case '1f3fd':
                        return A.Z.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
                    case '1f3fe':
                        return A.Z.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
                    case '1f3ff':
                        return A.Z.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
                    default:
                        return A.Z.Messages.EMOJI_MODIFIER_NONE;
                    }
                }(n),
                className: N.diversityEmojiItemImage,
                style: {
                    backgroundImage: 'url("'.concat(l, '")'),
                    ..._
                }
            })
        });
    }, D = e => {
        let {
                id: t,
                selectedSurrogate: n,
                onClick: a,
                hasTabWrapper: s
            } = e, d = (0, p.Z)('diversity'), _ = (0, u.useSpring)({
                height: (C + 2 * R) * (m.gw.length + 1),
                from: { height: C },
                config: { duration: 125 }
            });
        i.useEffect(() => {
            d.focusFirstVisibleItem();
        }, [d]);
        let E = [
            '',
            ...m.gw
        ];
        return l().remove(E, e => e === n), E.unshift(n), (0, r.jsx)(c.bG, {
            navigator: d,
            children: (0, r.jsx)(c.SJ, {
                children: e => {
                    let {
                        ref: n,
                        ...i
                    } = e;
                    return (0, r.jsx)(u.animated.div, {
                        ...i,
                        id: t,
                        ref: n,
                        className: o()(N.diversitySelectorOptions, { [N.diversitySelectorOptionsHasTabWrapper]: s }),
                        style: _,
                        role: 'listbox',
                        children: E.map((e, t) => (0, r.jsx)(y, {
                            index: t,
                            fade: 0 !== t,
                            delay: 20 * t,
                            surrogate: e,
                            onClick: a
                        }, t))
                    });
                }
            })
        });
    };
t.Z = e => {
    let {
            searchBarRef: t,
            selectedSurrogate: n,
            className: a,
            hasTabWrapper: o
        } = e, s = T.ZP.getURL(O + n), [l, u] = i.useState(!1), c = (0, h.Z)(null, () => u(!1)), d = i.useRef(null);
    return (0, r.jsxs)('div', {
        ref: c,
        className: a,
        children: [
            (0, r.jsx)(E.Clickable, {
                innerRef: d,
                className: N.diversitySelectorButton,
                onClick: () => {
                    u(!0);
                },
                'aria-label': A.Z.Messages.EMOJI_MODIFIER_MENU_BUTTON,
                'aria-haspopup': !0,
                'aria-expanded': l,
                'aria-controls': v,
                tabIndex: l ? -1 : 0,
                children: (0, r.jsx)('div', {
                    className: N.diversityEmojiItemImage,
                    style: { backgroundImage: 'url("'.concat(s, '")') }
                })
            }),
            l ? (0, r.jsx)('div', {
                onKeyDown: e => {
                    e.keyCode === S.yXg.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
                },
                children: (0, r.jsx)(D, {
                    id: v,
                    hasTabWrapper: o,
                    selectedSurrogate: n,
                    onClick: e => {
                        var n;
                        (0, f.t0)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus();
                    }
                })
            }) : null
        ]
    });
};
