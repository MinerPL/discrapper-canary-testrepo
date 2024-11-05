t.r(n),
    t.d(n, {
        default: function () {
            return f;
        }
    }),
    t(47120);
var r = t(200651),
    i = t(192379),
    l = t(481060),
    a = t(585483),
    o = t(212459),
    s = t(73249),
    u = t(730606),
    c = t(860153),
    d = t(981631),
    m = t(388032),
    h = t(619377);
function f(e) {
    let { onClose: n, items: t, startingIndex: f, onIndexChange: p, shouldRedactExplicitContent: g, shouldHideMediaOptions: _ = !1, className: x, ...C } = e,
        [S, v] = i.useState(null != f ? f : 0),
        [E, L] = i.useState(!1);
    i.useEffect(() => {
        if (null != n)
            return (
                a.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    a.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]);
    let y = i.useCallback(
            (e) => {
                v(e), null == p || p(e);
            },
            [p]
        ),
        I = i.useMemo(
            () => ({
                zoomed: E,
                setZoomed: L
            }),
            [E]
        ),
        A = t[S];
    return (0, r.jsx)(l.ModalRoot, {
        hideShadow: !0,
        className: h.carouselModal,
        ...C,
        size: l.ModalSize.DYNAMIC,
        fullscreenOnMobile: !1,
        'aria-label': m.intl.string(m.t.AMTX3t),
        children: (0, r.jsxs)(o.z.Provider, {
            value: I,
            children: [
                (0, r.jsx)(c.Z, {
                    item: A,
                    onClose: n
                }),
                (0, r.jsx)(u.Z, {
                    items: t,
                    startIndex: S,
                    onIndexChange: y,
                    shouldRedactExplicitContent: g,
                    shouldHideMediaOptions: _
                }),
                (0, r.jsx)('div', {
                    className: h.actionButtonContainer,
                    children: (0, r.jsx)(s.Z, {
                        item: A,
                        hideMediaOptions: ('IMAGE' === A.type && null == A.original) || _
                    })
                })
            ]
        })
    });
}
