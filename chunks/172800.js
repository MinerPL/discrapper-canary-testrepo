n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(330726),
    c = n(410030),
    d = n(255963),
    _ = n(906411),
    E = n(438332),
    f = n(806966),
    h = n(434404),
    p = n(675478),
    m = n(819758),
    I = n(626135),
    T = n(392552),
    g = n(784222),
    S = n(926243),
    A = n(149203),
    N = n(981631),
    v = n(689938),
    O = n(269003);
let R = n(137321),
    C = n(233892),
    y = n(942315),
    D = n(636626);
t.Z = (e) => {
    let { emojiDescriptors: t, emojiSize: n, onSelect: a, onInspect: L, surrogateCodePoint: b, getEmojiItemProps: M, getEmojiRowProps: P, isScrolling: U, isUsingKeyboardNavigation: w, rowIndex: x, allowAnimatedEmoji: G, showEmojiFavoriteTooltip: k, channelGuildId: B, category: F, selectedItemClassName: V, messageId: H, isBurstReaction: Z, inNitroLockedSection: Y } = e,
        { enabled: j } = T.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        W = (0, c.ZP)(),
        K = f.kJ.getState(),
        [z, q] = i.useState(K.inspectedExpressionPosition),
        [Q, X] = (0, u.Z)(null, 300),
        $ = i.useRef(null);
    i.useEffect(
        () =>
            f.kJ.useStore.subscribe(
                (e) => q(e),
                (e) => e.inspectedExpressionPosition
            ),
        []
    ),
        i.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []);
    let J = n === A.Su.LARGE,
        ee = n === A.Su.MEDIUM,
        et = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: o, handleSelect: u, icon: c, ariaLabel: d } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: E } = e,
                        { ref: f, tabIndex: h, onFocus: p, ...m } = null !== (n = M(E, x)) && void 0 !== n ? n : {},
                        I = z.rowIndex === _ && z.columnIndex === E,
                        T = () => {
                            !U.current && !w.current && L(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        {
                            ...m,
                            key: t
                        },
                        (0, r.jsx)(l.FocusRing, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: f,
                                className: s()(O.emojiItem, {
                                    [O.emojiItemLarge]: J,
                                    [O.emojiItemMedium]: ee,
                                    [O.emojiItemSelected]: I,
                                    [null != V ? V : '']: I,
                                    [O.showPulse]: Q === t
                                }),
                                onFocus: null != p ? p : T,
                                onMouseOver: T,
                                onMouseEnter: a,
                                onMouseLeave: o,
                                onClick: u,
                                tabIndex: h,
                                children: c
                            })
                        })
                    );
                };
            switch (e.type) {
                case g.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let t, i;
                    return (
                        e.sectionCollapsedToThreeRows
                            ? ((i = (0, r.jsx)('img', {
                                  className: O.icon,
                                  src: (0, o.wj)(W) ? R : C,
                                  alt: ''
                              })),
                              (t = v.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION))
                            : ((i = (0, r.jsx)('img', {
                                  className: O.icon,
                                  src: (0, o.wj)(W) ? y : D,
                                  alt: ''
                              })),
                              (t = v.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION)),
                        n({
                            handleSelect: (t) => {
                                t.stopPropagation(),
                                    !U.current &&
                                        !w.current &&
                                        (a(e, {
                                            isFinalSelection: !0,
                                            toggleFavorite: !1
                                        }),
                                        (0, d.D)(e.guildId),
                                        I.default.track(N.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                            collapsed: e.sectionCollapsedToThreeRows,
                                            guild_id: e.guildId
                                        }));
                            },
                            icon: i,
                            ariaLabel: t
                        })
                    );
                }
                case g.ld.CREATE_EMOJI: {
                    let t = (0, r.jsx)(l.CirclePlusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: O.icon,
                        colorClass: O.icon
                    });
                    return n({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                !U.current &&
                                    !w.current &&
                                    (a(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    h.Z.open(e.guildId, N.pNK.EMOJI, N.jXE.EMOJI_PICKER_POPOUT));
                        },
                        icon: t,
                        ariaLabel: v.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
                    });
                }
                case g.ld.EMOJI: {
                    var u;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = z.rowIndex === i && z.columnIndex === n;
                    return (0, r.jsx)(
                        S.Z,
                        {
                            rowIndex: x,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: U,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: b,
                            allowAnimatedEmoji: G,
                            selectedItemClassName: V,
                            onSelect: a,
                            onInspect: L,
                            channelGuildId: B,
                            getEmojiItemProps: M,
                            isMediumSize: ee,
                            isLargeSize: J,
                            pulseItemKey: Q,
                            setPulseItemKey: X,
                            showEmojiFavoriteTooltip: k,
                            messageId: H,
                            isBurstReaction: Z,
                            rowPosition: null == $ ? void 0 : null === (u = $.current) || void 0 === u ? void 0 : u.getBoundingClientRect(),
                            inNitroLockedSection: Y
                        },
                        t
                    );
                }
            }
        },
        en = (e) =>
            (0, r.jsx)('ul', {
                ...P(x),
                className: s()(O.emojiListRow, {
                    [O.emojiListRowLargeSize]: J,
                    [O.emojiListRowMediumSize]: ee
                }),
                ref: $,
                children: e.map(et)
            });
    if (F !== A.En.TOP_GUILD_EMOJI) return en(t);
    let er = t.filter((e) => (!!j && e.type === g.ld.CREATE_EMOJI) || e.subCategory === A.t0.TOP_GUILD_EMOJI || (e.subCategory === A.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && !E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id))),
        ei = t.filter((e) => e.subCategory === A.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === ei.length
        ? en(t)
        : (0, r.jsxs)('div', {
              className: O.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: s()(O.topEmojiContainer, { [O.noEmojis]: 0 === er.length }),
                      children: en(er)
                  }),
                  (0, r.jsxs)('div', {
                      className: O.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(O.newlyAddedHighlight, {
                                  [O.oneItem]: 1 === ei.length,
                                  [O.alignRight]: er.length > 0
                              }),
                              children: en(ei)
                          }),
                          (0, r.jsxs)('div', {
                              className: s()(O.newlyAddedBadge, {
                                  [O.newlyAddedBadgeLarge]: J,
                                  [O.newlyAddedBadgeMedium]: ee,
                                  [O.alignRight]: er.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(m.Z, { foreground: O.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: v.Z.Messages.NEW
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
