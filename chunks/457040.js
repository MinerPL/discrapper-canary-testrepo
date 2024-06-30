n(47120);
var r = n(735250), i = n(470079), a = n(954955), o = n.n(a), s = n(143927), l = n(442837), u = n(477690), c = n(481060), d = n(2052), _ = n(100527), E = n(906732), f = n(806966), h = n(28546), p = n(98528), m = n(98278), I = n(639119), T = n(695346), g = n(594174), S = n(626135), A = n(624138), N = n(191177), v = n(285651), O = n(217590), R = n(453070), C = n(926491), y = n(373228), D = n(462109), L = n(422195), b = n(657795), M = n(489762), P = n(31543), U = n(814042), w = n(15350), x = n(611480), G = n(981631), k = n(642631);
let B = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL), F = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT), V = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT), H = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN), Z = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL), Y = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS), j = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL), W = (0, A.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING), K = Y + 2 * W, z = j + 2 * W, q = o()(O.Iw, 200), Q = o()(O.m1, 200), X = i.forwardRef(function (e, t) {
        var a;
        let {
                containerWidth: o,
                channel: u,
                onSelectSticker: A,
                closePopout: Y
            } = e, {location: j} = (0, d.O)(), {analyticsLocations: W} = (0, E.ZP)(_.Z.STICKER_PICKER), X = (null === (a = (0, I.N)()) || void 0 === a ? void 0 : a.subscription_trial) != null, $ = i.useRef(null), J = i.useRef(null), ee = i.useRef(null), et = (0, N.Q)(e => e.showPremiumUpsell), [en, er] = (0, h.Iu)(e => [
                e.searchQuery,
                e.isSearchSuggestion
            ], s.Z), ei = i.useRef('');
        i.useImperativeHandle(t, () => ({ onPickerOpen: eb }));
        let ea = (0, R.Sd)(u), eo = 0 === ea.filter(e => e.type !== y.Ih.EMPTY_GUILD_UPSELL).length, es = (0, p.ep)({
                gridWrapperRef: $,
                containerWidth: o,
                showingEmptyState: eo,
                listPaddingLeft: F,
                listScrollbarWidth: 8
            }), el = T._O.useSetting(), eu = i.useMemo(() => new Set(el), [el]), ec = (0, l.e7)([g.default], () => g.default.getCurrentUser()), ed = i.useMemo(() => (0, w.S)(en, ec, u), [
                en,
                ec,
                u
            ]), e_ = (0, R.RJ)(), eE = (0, R.LZ)(), ef = (0, l.cj)([C.Z], () => C.Z.getAllGuildStickers()), {
                sendable: eh = [],
                sendableWithPremium: ep = []
            } = null != ed ? ed : {}, em = eh.length + ep.length, eI = i.useCallback(e => {
                '' === en ? (0, O.On)(e) : (0, O.Yk)(e, en, em), A(e.sticker, y.V0.STICKER_PICKER);
            }, [
                A,
                en,
                em
            ]), eT = null != es && es > B, {
                rowCount: eg,
                rowCountBySection: eS,
                stickersGrid: eA,
                gutterWidth: eN,
                columnCounts: ev
            } = (0, R.el)({
                filteredStickers: ed,
                stickersCategories: ea,
                collapsedStickersCategories: eu,
                listWidth: es,
                listPaddingRight: V,
                stickerNodeMargin: eT ? H : Z,
                stickerNodeWidth: eT ? K : z
            }), eO = i.useCallback((e, t) => {
                let {location: i} = t;
                switch (e.type) {
                case y.al.CREATE_STICKER:
                    S.default.track(G.rMx.OPEN_MODAL, {
                        type: G.jXE.CREATE_STICKER_MODAL,
                        location: j
                    }), (0, c.openModalLazy)(async () => {
                        let {default: t} = await Promise.all([
                            n.e('93626'),
                            n.e('47406')
                        ]).then(n.bind(n, 136735));
                        return n => (0, r.jsx)(t, {
                            guildId: e.guild_id,
                            ...n
                        });
                    });
                    break;
                case y.al.STICKER:
                    null != e.sticker && (0, v.kl)(e.sticker, ec, u) && eI(e);
                }
            }, [
                j,
                ec,
                u,
                eI
            ]), {
                getItemProps: eR,
                getRowProps: eC,
                gridContainerProps: ey,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: eL
            } = (0, D.t)({
                columnCounts: ev,
                stickersListRef: J,
                stickersGrid: eA,
                onGridItemSelect: eO,
                store: f.ZN,
                setInspectedStickerPosition: f.ZN.setInspectedExpressionPosition,
                gridNavigatorId: x.Vr
            });
        i.useEffect(() => f.ZN.resetStoreState, []);
        let eb = () => {
            let e = u.getGuildId(), t = [];
            if (null !== e) {
                var n;
                t = null !== (n = C.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [];
            }
            let r = 0;
            null != ef && [...ef.values()].forEach(e => {
                r += e.length;
            }), (0, O.ev)({
                containerWidth: o,
                favoriteStickers: e_,
                frequentlyUsedStickers: eE,
                guildStickers: t,
                stickersTotal: r
            });
        };
        i.useEffect(() => {
            '' === ei.current && '' !== en && (0, O.n8)(), ei.current = en;
        }, [en]), i.useEffect(() => {
            0 === em ? q(en) : Q(en, em, er);
        }, [
            en,
            em,
            er
        ]), i.useLayoutEffect(() => {
            var e;
            null === (e = ee.current) || void 0 === e || e.focus();
        }, []);
        let eM = i.useCallback(() => {
            Y(), S.default.track(G.rMx.PREMIUM_PROMOTION_OPENED, { location_section: G.jXE.STICKER_PICKER_UPSELL }), (0, m.z)();
        }, [Y]);
        return (0, r.jsxs)(E.Gt, {
            value: W,
            children: [
                !(X && eo) && (0, r.jsx)('div', {
                    className: k.header,
                    children: (0, r.jsx)(P.Z, {
                        ref: ee,
                        onKeyDown: eD,
                        stickersListRef: J,
                        channel: u
                    })
                }),
                eo ? (0, r.jsx)(b.Z, {
                    className: k.emptyState,
                    onClose: Y
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            ref: $,
                            className: k.listWrapper,
                            id: x.Vr,
                            ...ey,
                            children: null != es ? (0, r.jsx)(M.Z, {
                                ref: J,
                                collapsedStickersCategories: eu,
                                filteredStickers: ed,
                                getStickerItemProps: eR,
                                getStickerRowProps: eC,
                                gridWidth: es,
                                gutterWidth: eN,
                                isUsingKeyboardNavigation: eL,
                                onSelectSticker: eI,
                                rowCount: eg,
                                rowCountBySection: eS,
                                stickersCategories: ea,
                                stickersGrid: eA,
                                channel: u
                            }) : null
                        }),
                        (0, r.jsx)(L.Z, {
                            stickersListRef: J,
                            channel: u
                        })
                    ]
                }),
                et && (0, r.jsx)(U.C, { onLearnMore: eM })
            ]
        });
    });
t.Z = i.forwardRef((e, t) => ((0, R.fP)(), (0, r.jsx)('div', {
    className: k.wrapper,
    id: x.nZ,
    'aria-labelledby': x.ED,
    role: 'tabpanel',
    children: e.isLoading ? (0, r.jsx)(c.Spinner, { className: k.loadingIndicator }) : (0, r.jsx)(X, {
        ...e,
        ref: t
    })
})));
