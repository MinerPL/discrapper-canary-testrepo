var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(100621),
    o = n(442837),
    l = n(481060),
    u = n(493683),
    c = n(607070),
    d = n(785717),
    f = n(510659),
    _ = n(228168),
    h = n(388032),
    p = n(866777),
    m = n(482617);
let g = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: s } = (0, d.KZ)();
        return (0, r.jsxs)('div', {
            className: a()(m.toast, p.toastPadding),
            children: [
                (0, r.jsx)(l.CheckmarkLargeIcon, {
                    size: 'sm',
                    className: p.toastIcon,
                    color: l.tokens.colors.STATUS_POSITIVE.css
                }),
                (0, r.jsxs)('div', {
                    className: p.successToast,
                    children: [
                        (0, r.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: h.intl.format(h.t.QEW8Mj, {
                                onClick: () => {
                                    s({ action: 'PRESS_REACT_REPLY_TOAST' }), null == i || i(), u.Z.openPrivateChannel(n);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    },
    E = () =>
        (0, r.jsxs)('div', {
            className: a()(m.toast, p.toastPadding),
            children: [
                (0, r.jsx)(l.Spinner, {
                    type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: p.toastIcon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: h.intl.string(h.t.tcARX1)
                })
            ]
        });
t.Z = (e) => {
    let { userId: t, onClose: n, className: i } = e,
        { interactionTypeSent: u, showInteractionToast: d } = (0, f.Xo)(),
        m = u === _.P.REPLY ? h.intl.string(h.t.BPaiaW) : h.intl.string(h.t.Ry2EtL),
        v = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        I = (0, l.useTransition)(
            d,
            {
                from: {
                    transform: v ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1
                },
                leave: {
                    transform: v ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0
                },
                delay: 200
            },
            'animate-always'
        );
    return (0, r.jsx)(r.Fragment, {
        children: I(
            (e, o) =>
                o &&
                (0, r.jsx)(s.animated.div, {
                    className: a()(p.toastContainer, i),
                    style: e,
                    children:
                        null != u
                            ? (0, r.jsx)(l.Toast, {
                                  message: '',
                                  type: l.ToastType.CUSTOM,
                                  id: 'react_reply_success_toast',
                                  options: {
                                      component: (0, r.jsx)(g, {
                                          userId: t,
                                          message: m,
                                          onClose: n
                                      })
                                  }
                              })
                            : (0, r.jsx)(l.Toast, {
                                  message: '',
                                  type: l.ToastType.CUSTOM,
                                  id: 'react_reply_loading_toast',
                                  options: { component: (0, r.jsx)(E, {}) }
                              })
                })
        )
    });
};
