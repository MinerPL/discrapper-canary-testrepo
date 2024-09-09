var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(180081),
    o = n(442837),
    l = n(481060),
    u = n(493683),
    c = n(607070),
    d = n(785717),
    _ = n(689938),
    E = n(720867),
    f = n(810819);
let h = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: s } = (0, d.KZ)();
        return (0, r.jsxs)('div', {
            className: a()(f.toast, E.toastPadding),
            children: [
                (0, r.jsx)(l.CheckmarkLargeIcon, {
                    size: 'sm',
                    className: E.toastIcon,
                    color: l.tokens.colors.STATUS_POSITIVE.css
                }),
                (0, r.jsxs)('div', {
                    className: E.successToast,
                    children: [
                        (0, r.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: _.Z.Messages.USER_PROFILE_TOAST_VIEW.format({
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
    p = () =>
        (0, r.jsxs)('div', {
            className: a()(f.toast, E.toastPadding),
            children: [
                (0, r.jsx)(l.Spinner, {
                    type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: E.toastIcon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: _.Z.Messages.USER_PROFILE_SENDING
                })
            ]
        });
t.Z = (e) => {
    let { shown: t, sent: n, isReply: i, userId: u, onClose: d, className: f } = e,
        I = i ? _.Z.Messages.USER_PROFILE_REPLY_SENT : _.Z.Messages.USER_PROFILE_REACTION_SENT,
        m = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        T = (0, l.useTransition)(
            t,
            {
                from: {
                    transform: m ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1
                },
                leave: {
                    transform: m ? 'translateY(0)' : 'translateY(16px)',
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
        children: T(
            (e, t) =>
                t &&
                (0, r.jsx)(s.animated.div, {
                    className: a()(E.toastContainer, f),
                    style: e,
                    children: n
                        ? (0, r.jsx)(l.Toast, {
                              message: '',
                              type: l.ToastType.CUSTOM,
                              id: 'react_reply_success_toast',
                              options: {
                                  component: (0, r.jsx)(h, {
                                      userId: u,
                                      message: I,
                                      onClose: d
                                  })
                              }
                          })
                        : (0, r.jsx)(l.Toast, {
                              message: '',
                              type: l.ToastType.CUSTOM,
                              id: 'react_reply_loading_toast',
                              options: { component: (0, r.jsx)(p, {}) }
                          })
                })
        )
    });
};
