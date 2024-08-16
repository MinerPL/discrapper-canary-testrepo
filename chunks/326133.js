n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(595519),
    d = n(317381),
    _ = n(588468),
    E = n(30465),
    f = n(313201),
    h = n(314910),
    p = n(549006),
    m = n(430824),
    I = n(436896),
    T = n(590921),
    g = n(606992),
    S = n(51062),
    A = n(918559),
    N = n(415118);
t.Z = i.forwardRef(function (e, t) {
    var n, a, v, O, R;
    let { channel: C, type: y, editorHeight: D, onVisibilityChange: L } = e,
        b = (0, f.Dt)(),
        M = (0, l.e7)(
            [m.Z],
            () => {
                var e;
                return null !== (e = m.Z.getGuild(C.guild_id)) && void 0 !== e ? e : null;
            },
            [C.guild_id]
        ),
        P = i.useRef(),
        [U, w, x] = (0, S.Z)(
            {
                ...e,
                guild: M
            },
            t,
            P
        ),
        G = (null === (n = y.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? p.ZP : h.ZP,
        k = (0, _.DJ)(U.selectedIndex);
    (0, E.KR)(b, U.isVisible, k), I.Z.trackExposure({ location: '6e9811_1' });
    let { usePopoutAutocomplete: B } = I.Z.useExperiment({ location: '6e9811_2' }, { autoTrackExposure: !1 }),
        F = (0, g.Z)({
            editorHeight: D,
            type: y,
            state: U,
            isInPopoutExperiment: B
        }),
        V = (0, l.e7)(
            [d.ZP],
            () => {
                let e = d.ZP.getSelfEmbeddedActivityForChannel(C.id),
                    t = d.ZP.getActivityPanelMode();
                return (0, c.l5)(C) && null != e && e.channelId === C.id && t === A.Ez.PANEL;
            },
            [C]
        ),
        H = i.useMemo(() => (null == F ? '' : String(Date.now())), [null == F ? void 0 : F.top, null == F ? void 0 : F.left, null == F ? void 0 : F.bottom, null == F ? void 0 : F.right]);
    if (
        (i.useEffect(() => {
            L(U.isVisible);
        }, [L, U.isVisible]),
        !U.isVisible || null == U.query || void 0 === F)
    )
        return null;
    let Z =
        null !==
            (a = U.query.typeInfo.renderResults({
                results: U.query.results,
                selectedIndex: U.selectedIndex,
                channel: C,
                guild: M,
                query: U.query.queryText,
                options: U.query.options,
                onHover: (e) => w.onResultHover(e),
                onClick: (e) => w.onResultClick(e)
            })) && void 0 !== a
            ? a
            : null;
    if (null == Z) return null;
    let Y = {
            [N.autocompleteAttached]: null == F,
            [N.autocompletePopout]: null != F,
            [N.bottom]: null == F && 'bottom' === e.position,
            [N.autocompleteTop]: V
        },
        j = 490;
    null != F && (j = (null === (v = y.autocomplete) || void 0 === v ? void 0 : v.small) ? 200 : (null === (O = U.query) || void 0 === O ? void 0 : O.type) === T.eq.EMOJIS_AND_STICKERS ? 490 : 245), (j = Math.min(window.innerHeight - 175, j));
    let W = (0, r.jsx)(_.ZP, {
        id: b,
        className: s()(N.autocomplete, Y),
        innerClassName: N.autocompleteInner,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, r.jsx)(o.bG, {
            navigator: x,
            children: (0, r.jsx)(o.SJ, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, r.jsx)(u.AdvancedScrollerThin, {
                        id: b,
                        ref: (e) => {
                            var n;
                            (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null), (P.current = e);
                        },
                        ...n,
                        className: N.scroller,
                        style: { maxHeight: j },
                        role: 'listbox',
                        'aria-labelledby': (0, _.rp)(b),
                        children: Z
                    });
                }
            })
        })
    });
    return null != F
        ? (0, r.jsx)(G, {
              children: (0, r.jsx)(u.ReferencePositionLayer, {
                  targetRef: e.targetRef,
                  overrideTargetRect: F,
                  positionKey: H,
                  position: null !== (R = e.position) && void 0 !== R ? R : 'top',
                  align: 'left',
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => W
              })
          })
        : W;
});
