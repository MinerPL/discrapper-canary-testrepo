var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(212433),
    o = n(442837),
    l = n(481060),
    u = n(493683),
    c = n(607070),
    d = n(785717),
    _ = n(510659),
    E = n(228168),
    f = n(689938),
    h = n(920163),
    p = n(482617);
let I = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: s } = (0, d.KZ)();
        return (0, r.jsxs)('div', {
            className: a()(p.toast, h.toastPadding),
            children: [
                (0, r.jsx)(l.CheckmarkLargeIcon, {
                    size: 'sm',
                    className: h.toastIcon,
                    color: l.tokens.colors.STATUS_POSITIVE.css
                }),
                (0, r.jsxs)('div', {
                    className: h.successToast,
                    children: [
                        (0, r.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: f.Z.Messages.USER_PROFILE_TOAST_VIEW.format({
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
    m = () =>
        (0, r.jsxs)('div', {
            className: a()(p.toast, h.toastPadding),
            children: [
                (0, r.jsx)(l.Spinner, {
                    type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: h.toastIcon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: f.Z.Messages.USER_PROFILE_SENDING
                })
            ]
        });
t.Z = (e) => {
    let { userId: t, onClose: n, className: i } = e,
        { interactionTypeSent: u, interactionToastShown: d } = (0, _.Xo)(),
        p = u === E.P.REPLY ? f.Z.Messages.USER_PROFILE_REPLY_SENT : f.Z.Messages.USER_PROFILE_REACTION_SENT,
        T = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        S = (0, l.useTransition)(
            d,
            {
                from: {
                    transform: T ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1
                },
                leave: {
                    transform: T ? 'translateY(0)' : 'translateY(16px)',
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
        children: S(
            (e, o) =>
                o &&
                (0, r.jsx)(s.animated.div, {
                    className: a()(h.toastContainer, i),
                    style: e,
                    children:
                        null != u
                            ? (0, r.jsx)(l.Toast, {
                                  message: '',
                                  type: l.ToastType.CUSTOM,
                                  id: 'react_reply_success_toast',
                                  options: {
                                      component: (0, r.jsx)(I, {
                                          userId: t,
                                          message: p,
                                          onClose: n
                                      })
                                  }
                              })
                            : (0, r.jsx)(l.Toast, {
                                  message: '',
                                  type: l.ToastType.CUSTOM,
                                  id: 'react_reply_loading_toast',
                                  options: { component: (0, r.jsx)(m, {}) }
                              })
                })
        )
    });
};
