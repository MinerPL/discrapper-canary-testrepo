n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(873546),
    c = n(374470),
    d = n(442837),
    f = n(952265),
    _ = n(481060),
    h = n(153867),
    p = n(410575),
    m = n(347469),
    g = n(40851),
    E = n(367907),
    v = n(907040),
    I = n(455708),
    S = n(314910),
    T = n(315744),
    b = n(603074),
    y = n(453070),
    A = n(926491),
    N = n(457040),
    C = n(740492),
    R = n(585483),
    O = n(5967),
    D = n(28546),
    L = n(957825),
    x = n(981631),
    w = n(149203),
    M = n(185923),
    P = n(611480),
    k = n(388032),
    U = n(226090);
let G = L.Om + w.Su.MEDIUM,
    B = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: a = !1, 'aria-controls': o, ...l } = e;
        return (0, r.jsx)(_.Button, {
            role: 'tab',
            autoFocus: a,
            'aria-controls': t ? o : void 0,
            ...l,
            onClick: () => {
                E.ZP.trackWithMetadata(x.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                    tab: i,
                    badged: !1
                }),
                    (0, D.hr)(i);
            },
            'aria-current': t ? 'page' : void 0,
            className: s()(n, U.navButton, U.navItem, { [U.navButtonActive]: t }),
            look: _.Button.Looks.BLANK,
            size: _.Button.Sizes.NONE
        });
    }),
    Z = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([C.ZP], () => C.ZP.expressionPickerWidth),
            [s, o] = i.useState(window.innerWidth),
            [u, c] = i.useState(null != a ? a : L._j.MIN),
            f = i.useMemo(() => {
                switch (u) {
                    case L._j.MIN:
                        return L.Om;
                    case L._j.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= s ? L._j.MAX : e <= L.Om ? L._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), c(t);
                },
                [n, s]
            ),
            p = (0, m.Z)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: L.Om,
                resizableDomNodeRef: n,
                onElementResize: _,
                orientation: r
            });
        return (
            i.useEffect(() => {
                let e = l().debounce(() => {
                    null != t.current && o(t.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, [t]),
            i.useLayoutEffect(() => {
                null != t.current && o(t.current.offsetWidth);
            }, [t]),
            {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: i.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), p(e);
                    },
                    [t, p]
                )
            }
        );
    };
t.Z = i.memo(function (e) {
    var t, n, a;
    let { positionTargetRef: o, hideGifFavorites: l, includeCreateEmojiButton: h, onSelectGIF: C, onSelectEmoji: F, onSelectSticker: V, onSelectSound: j, channel: H, type: Y, position: W, align: K, positionLayerClassName: z, closeOnModalOuterClick: q = !1, parentModalKey: Q } = e,
        X = i.useRef(null),
        J = i.useRef(!1),
        $ = i.useRef(),
        ee = i.useRef(null),
        { drawerWidth: et, handleDrawerResizeHandleMouseDown: en } = Z({
            positionContainerRef: X,
            drawerRef: ee,
            orientation: 'left' === K ? m.y.HORIZONTAL_RIGHT : m.y.HORIZONTAL_LEFT
        }),
        er = (0, D.Iu)((e) => e.activeView),
        ei = (0, y.fQ)(H),
        { renderWindow: ea, windowDispatch: es } = i.useContext(g.ZP),
        eo = (0, d.e7)([A.Z], () => !A.Z.hasLoadedStickerPacks),
        el = (0, T.P)('expression_picker'),
        eu = null != Q,
        ec = (0, f.Jw)(null != Q ? Q : ''),
        ed = i.useCallback(
            (e) => {
                var t;
                if ((!eu && (0, f.$s)()) || (eu && !(ec && q))) return;
                let { target: n } = e;
                if ((0, c.k)(n) && null != n.closest('.' + L.CT)) return;
                for (; (0, c.k)(n); ) {
                    if (n === ee.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, D._Q)();
                let r = null === (t = (0, O.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && R.S.dispatchToLastSubscribed(x.CkL.TEXTAREA_FOCUS);
            },
            [q, ec, eu]
        ),
        ef = i.useCallback(() => {
            (0, D._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            er === L.X1.GIF && (0, D._Q)();
        };
        return (
            ea.addEventListener('mousedown', ed),
            ea.addEventListener('contextmenu', ed),
            es.subscribe(x.CkL.POPOUT_CLOSE, ef),
            R.S.subscribe(x.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ea.removeEventListener('mousedown', ed), ea.removeEventListener('contextmenu', ed), es.unsubscribe(x.CkL.POPOUT_CLOSE, ef), R.S.unsubscribe(x.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [er, ef, ed, ea, es]),
        (0, _.useFocusLock)(X),
        i.useEffect(() => {
            (0, D.ql)('');
        }, []),
        i.useEffect(() => {
            ((!eu && (0, f.$s)()) || (eu && !ec)) && (0, D._Q)();
        }, [ec, eu]),
        i.useEffect(() => {
            if (null != ee.current && !J.current) {
                var e, t, n, r;
                er === L.X1.EMOJI
                    ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), (J.current = !0))
                    : er === L.X1.STICKER
                      ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !eo && (null == $ || null === (r = $.current) || void 0 === r || r.onPickerOpen(), (J.current = !0))
                      : (E.ZP.trackWithMetadata(x.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ee.current.offsetWidth,
                            tab: er,
                            badged: !1
                        }),
                        (J.current = !0));
            }
        });
    let e_ = (null === (t = Y.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.tq && null != C,
        eh = (null === (n = Y.stickers) || void 0 === n ? void 0 : n.allowSending) && null != V,
        ep = !(null === (a = Y.expressionPicker) || void 0 === a ? void 0 : a.onlyEmojis) && (e_ || eh),
        em = 'left' === K ? 'right' : 'left',
        eg = null != z ? z : 'left' === K ? U.positionLayerDefaultAlignLeft : U.positionLayerDefaultAlignRight;
    return (0, r.jsx)(p.Z, {
        section: x.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.W5, {
            className: s()(U.positionLayer, eg),
            targetRef: o,
            position: W,
            align: K,
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: s()(U.positionContainer, { [U.positionContainerOnlyEmoji]: !ep }),
                    ref: X,
                    role: 'dialog',
                    'aria-label': k.intl.string(k.t.Utlwvr),
                    children: t
                        ? (0, r.jsxs)('div', {
                              className: U.drawerSizingWrapper,
                              style: {
                                  width: null == et ? void 0 : et,
                                  [K]: 0
                              },
                              ref: ee,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: U.resizeHandle,
                                      onMouseDown: en,
                                      style: { [em]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: U.contentWrapper,
                                      children: [
                                          ep
                                              ? (0, r.jsx)('nav', {
                                                    className: U.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: U.navList,
                                                        role: 'tablist',
                                                        'aria-label': k.intl.string(k.t['2j4VgY']),
                                                        children: [
                                                            e_
                                                                ? (0, r.jsx)(B, {
                                                                      id: w._3,
                                                                      'aria-controls': w.vO,
                                                                      'aria-selected': er === L.X1.GIF,
                                                                      isActive: er === L.X1.GIF,
                                                                      viewType: L.X1.GIF,
                                                                      children: k.intl.string(k.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eh
                                                                ? (0, r.jsx)(B, {
                                                                      id: P.ED,
                                                                      'aria-controls': P.nZ,
                                                                      'aria-selected': er === L.X1.STICKER,
                                                                      isActive: er === L.X1.STICKER,
                                                                      autoFocus: !ei,
                                                                      viewType: L.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: U.stickersNavItem,
                                                                          children: k.intl.string(k.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(B, {
                                                                id: w.td,
                                                                'aria-controls': w.cZ,
                                                                'aria-selected': er === L.X1.EMOJI,
                                                                isActive: er === L.X1.EMOJI,
                                                                viewType: L.X1.EMOJI,
                                                                children: k.intl.string(k.t.Xu3wEx)
                                                            }),
                                                            el &&
                                                                null != j &&
                                                                (0, r.jsx)(B, {
                                                                    id: w.Hr,
                                                                    'aria-controls': w.gV,
                                                                    'aria-selected': er === L.X1.SOUNDBOARD,
                                                                    isActive: er === L.X1.SOUNDBOARD,
                                                                    viewType: L.X1.SOUNDBOARD,
                                                                    children: 'Sounds'
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          er === L.X1.STICKER && eh
                                              ? (0, r.jsx)(N.Z, {
                                                    isLoading: eo,
                                                    channel: H,
                                                    containerWidth: et,
                                                    onSelectSticker: V,
                                                    closePopout: ef,
                                                    ref: (e) => {
                                                        $.current = e;
                                                    }
                                                })
                                              : null,
                                          er === L.X1.GIF && e_
                                              ? (0, r.jsx)(I.Z, {
                                                    onSelectGIF: C,
                                                    hideFavorites: l,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          er === L.X1.EMOJI
                                              ? (0, r.jsx)(v.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: ep ? v.v.TABS_EXPRESSION_PICKER : v.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: H,
                                                    containerWidth: et,
                                                    includeCreateEmojiButton: h,
                                                    emojiSize: null != et && et < G ? w.Su.MEDIUM : w.Su.LARGE,
                                                    pickerIntention: M.Hz.CHAT,
                                                    closePopout: ef,
                                                    onSelectEmoji: F,
                                                    ref: (e) => {
                                                        $.current = e;
                                                    }
                                                })
                                              : null,
                                          er === L.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: U.soundboardContainer,
                                                    children: (0, r.jsx)(b.Z, {
                                                        guildId: H.guild_id,
                                                        channel: H,
                                                        containerWidth: et,
                                                        onClose: ef,
                                                        onSelect: j,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: U.soundboardHeader,
                                                                children: e
                                                            }),
                                                        inExpressionPicker: !0,
                                                        shouldValidateSelectedSound: !0
                                                    })
                                                })
                                              : null
                                      ]
                                  })
                              ]
                          })
                        : null
                });
            }
        })
    });
});
