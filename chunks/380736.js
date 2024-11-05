n.d(t, {
    Q: function () {
        return g;
    },
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(100621),
    a = n(481060),
    u = n(13245),
    c = n(691891),
    d = n(44359),
    h = n(333031),
    f = n(693091),
    p = n(981631),
    m = n(388032),
    v = n(213973);
function g(e, t) {
    return (0, i.jsx)(i.Fragment, {
        children: m.intl.format(t, {
            keybind: e,
            keybindHook: (t) => (0, i.jsx)(d.Z, { keybind: e }, e.join('+'))
        })
    });
}
function E(e) {
    e.currentTarget.scrollTo(0, 0);
}
let _ = o.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: r, onDismissClick: u, onConfirmClick: d, onCancelClick: h, onNotificationClick: f, hint: g, cancelText: _, confirmText: C, icon: S, body: x, title: Z, renderFooter: I, contentOpacity: y, status: b, containerRef: N } = e,
        [O, T] = o.useState(!1),
        L = n || O || b === p._1z.FOCUSED;
    o.useEffect(() => {
        null == r || r();
    }, [r]);
    let k = o.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        A = o.useCallback(
            (e) => {
                e.stopPropagation(), null == d || d(e);
            },
            [d]
        ),
        w = o.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        R = o.useCallback(() => {
            T(!0);
        }, []),
        j = o.useCallback(() => {
            T(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: v.overflowWrapper,
                onScroll: E,
                children: (0, i.jsx)(a.Clickable, {
                    innerRef: N,
                    ignoreKeyPress: !0,
                    onMouseOver: R,
                    onMouseLeave: j,
                    onClick: f,
                    className: l()(v.container, { [v.clickable]: null != f }),
                    children: (function () {
                        let e = null == I ? void 0 : I(L);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: v.iconAndDetails,
                                    style: { opacity: y },
                                    children: [
                                        null == S
                                            ? null
                                            : 'string' == typeof S
                                              ? (0, i.jsx)(a.Avatar, {
                                                    src: S,
                                                    size: a.AvatarSizes.SIZE_40,
                                                    className: v.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: v.avatar,
                                                    children: S
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: v.details,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: Z
                                                }),
                                                null != x
                                                    ? (0, i.jsx)(a.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (L ? 2 : 1) : void 0,
                                                          children: x
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof g ? g(L) : g;
                                                    return null != g
                                                        ? (0, i.jsx)(a.Text, {
                                                              className: v.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == d && null == h
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: v.buttonContainer,
                                                          children: [
                                                              null != d
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: v.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        color: a.Button.Colors.GREEN,
                                                                        onClick: A,
                                                                        children: null != C ? C : m.intl.string(m.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, i.jsx)(a.Button, {
                                                                        className: v.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        look: a.Button.Looks.OUTLINED,
                                                                        color: a.Button.Colors.PRIMARY,
                                                                        onClick: w,
                                                                        children: null != _ ? _ : m.intl.string(m.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(a.Clickable, {
                                        className: v.footer,
                                        ignoreKeyPress: !0,
                                        onClick: (e) => e.stopPropagation(),
                                        children: e
                                    })
                            ]
                        });
                    })()
                })
            }),
            (0, i.jsx)(c.Z, {
                className: v.dismissButton,
                onDismiss: k,
                'aria-label': m.intl.string(m.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: o, height: r },
        index: l,
        children: a,
        locked: u
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: v.animationWrapper,
        style: {
            pointerEvents: u && 0 !== l ? 'none' : 'auto',
            zIndex: Math.max(5 - l, 0),
            opacity: t,
            transform: o.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: r
        },
        children: a
    });
}
function S(e) {
    let { notification: t, index: n, locked: r, transitionState: l, cleanUp: s } = e,
        {
            id: a,
            props: { onNotificationShow: c, onDismissClick: d, onNotificationClick: p, onConfirmClick: m, onCancelClick: g, renderFooter: E }
        } = t,
        S = o.useCallback(() => {
            c(a);
        }, [c, a]),
        x = o.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(a), null == d || d(e, a);
            },
            [a, d]
        ),
        Z = o.useCallback(
            (e) => {
                null == p || p(e, a);
            },
            [p, a]
        ),
        I = o.useCallback(
            (e) => {
                null == m || m(e, a);
            },
            [m, a]
        ),
        y = o.useCallback(
            (e) => {
                null == g || g(e, a);
            },
            [g, a]
        ),
        b = o.useCallback((e) => (null == E ? void 0 : E(e, a)), [E, a]),
        {
            props: { onNotificationShow: N, onDismissClick: O, renderFooter: T, onNotificationClick: L, onConfirmClick: k, onCancelClick: A, ...w },
            status: R
        } = t,
        { ref: j, springs: M } = (0, f.X4)(t.id, l, s);
    return (0, i.jsx)(C, {
        transitionState: l,
        springs: M,
        index: n,
        locked: r,
        children: (0, i.jsx)(h.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(_, {
                ...w,
                containerRef: j,
                notificationId: t.id,
                onNotificationShow: 0 === n ? S : void 0,
                onDismissClick: x,
                onNotificationClick: null != p ? Z : void 0,
                onConfirmClick: null != m ? I : void 0,
                onCancelClick: null != g ? y : void 0,
                renderFooter: b,
                expand: !1,
                index: n,
                locked: r,
                status: R,
                contentOpacity: M.contentOpacity
            })
        })
    });
}
