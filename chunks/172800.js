n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(330726), u = n(906411), c = n(438332), d = n(806966), _ = n(434404), E = n(675478), f = n(819758), h = n(392552), p = n(784222), m = n(926243), I = n(149203), T = n(981631), g = n(689938), S = n(688623);
t.Z = e => {
    let {
            emojiDescriptors: t,
            emojiSize: n,
            onSelect: a,
            onInspect: A,
            surrogateCodePoint: N,
            getEmojiItemProps: v,
            getEmojiRowProps: O,
            isScrolling: R,
            isUsingKeyboardNavigation: C,
            rowIndex: y,
            allowAnimatedEmoji: D,
            showEmojiFavoriteTooltip: L,
            channelGuildId: b,
            category: M,
            selectedItemClassName: P,
            messageId: U,
            isBurstReaction: w,
            inNitroLockedSection: x
        } = e, {enabled: G} = h.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }), k = d.kJ.getState(), [B, F] = i.useState(k.inspectedExpressionPosition), [V, H] = (0, l.Z)(null, 300), Z = i.useRef(null);
    i.useEffect(() => d.kJ.useStore.subscribe(e => F(e), e => e.inspectedExpressionPosition), []), i.useEffect(() => {
        E.DZ.loadIfNecessary();
    }, []);
    let Y = n === I.Su.LARGE, j = n === I.Su.MEDIUM, W = e => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex);
            switch (e.type) {
            case p.ld.CREATE_EMOJI: {
                    let {
                            visibleRowIndex: n,
                            columnIndex: l
                        } = e, u = B.rowIndex === n && B.columnIndex === l, c = t => {
                            t.stopPropagation(), !R.current && !C.current && (a(e, {
                                isFinalSelection: !0,
                                toggleFavorite: !1
                            }), _.Z.open(e.guildId, T.pNK.EMOJI, T.jXE.EMOJI_PICKER_POPOUT));
                        }, d = () => {
                            !R.current && !C.current && A(e);
                        };
                    return function () {
                        var e;
                        let {
                                onMouseEnter: n,
                                onMouseLeave: a
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                                ref: _,
                                tabIndex: E,
                                onFocus: f,
                                ...h
                            } = null !== (e = v(l, y)) && void 0 !== e ? e : {};
                        return (0, i.createElement)('li', {
                            ...h,
                            key: t
                        }, (0, r.jsx)(s.FocusRing, {
                            children: (0, r.jsx)('button', {
                                'aria-label': g.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                ref: _,
                                className: o()(S.emojiItem, {
                                    [S.emojiItemLarge]: Y,
                                    [S.emojiItemMedium]: j,
                                    [S.emojiItemSelected]: u,
                                    [null != P ? P : '']: u,
                                    [S.showPulse]: V === t
                                }),
                                onFocus: null != f ? f : d,
                                onMouseOver: d,
                                onMouseEnter: n,
                                onMouseLeave: a,
                                onClick: c,
                                tabIndex: E,
                                children: (0, r.jsx)(s.CirclePlusIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: S.icon,
                                    colorClass: S.icon
                                })
                            })
                        }));
                    }();
                }
            case p.ld.EMOJI: {
                    var n;
                    let {
                            columnIndex: i,
                            visibleRowIndex: o
                        } = e, s = B.rowIndex === o && B.columnIndex === i;
                    return (0, r.jsx)(m.Z, {
                        rowIndex: y,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: s,
                        isScrolling: R,
                        isUsingKeyboardNavigation: C,
                        surrogateCodePoint: N,
                        allowAnimatedEmoji: D,
                        selectedItemClassName: P,
                        onSelect: a,
                        onInspect: A,
                        channelGuildId: b,
                        getEmojiItemProps: v,
                        isMediumSize: j,
                        isLargeSize: Y,
                        pulseItemKey: V,
                        setPulseItemKey: H,
                        showEmojiFavoriteTooltip: L,
                        messageId: U,
                        isBurstReaction: w,
                        rowPosition: null == Z ? void 0 : null === (n = Z.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                        inNitroLockedSection: x
                    }, t);
                }
            }
        }, K = e => (0, r.jsx)('ul', {
            ...O(y),
            className: o()(S.emojiListRow, {
                [S.emojiListRowLargeSize]: Y,
                [S.emojiListRowMediumSize]: j
            }),
            ref: Z,
            children: e.map(W)
        });
    if (M !== I.En.TOP_GUILD_EMOJI)
        return K(t);
    let z = t.filter(e => !!G && e.type === p.ld.CREATE_EMOJI || e.subCategory === I.t0.TOP_GUILD_EMOJI || e.subCategory === I.t0.NEWLY_ADDED_EMOJI && e.emoji.type === u.B.GUILD && !c.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)), q = t.filter(e => e.subCategory === I.t0.NEWLY_ADDED_EMOJI && e.emoji.type === u.B.GUILD && c.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === q.length ? K(t) : (0, r.jsxs)('div', {
        className: S.topEmojiSectionContainer,
        children: [
            (0, r.jsx)('div', {
                className: o()(S.topEmojiContainer, { [S.noEmojis]: 0 === z.length }),
                children: K(z)
            }),
            (0, r.jsxs)('div', {
                className: S.newlyAddedHighlightContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(S.newlyAddedHighlight, {
                            [S.oneItem]: 1 === q.length,
                            [S.alignRight]: z.length > 0
                        }),
                        children: K(q)
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(S.newlyAddedBadge, {
                            [S.newlyAddedBadgeLarge]: Y,
                            [S.newlyAddedBadgeMedium]: j,
                            [S.alignRight]: z.length > 0
                        }),
                        children: [
                            (0, r.jsx)(f.Z, { foreground: S.newlyAddedBadgeStar }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                color: 'always-white',
                                children: g.Z.Messages.NEW
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
