n(47120);
var i = n(200651),
    o = n(192379),
    s = n(481060),
    l = n(230711),
    r = n(187819),
    a = n(63063),
    c = n(378298),
    d = n(584656),
    u = n(993750),
    T = n(981631),
    S = n(526761),
    _ = n(388032),
    x = n(681789);
e.Z = function (t) {
    let { onClose: e, channelId: n } = t,
        [A, E] = o.useState(!1),
        C = (0, r._p)({ location: 'safety-tools-about-safety-alerts' }),
        h = o.useCallback(() => {
            C ? l.Z.open(T.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: S.to.DM_SAFETY_ALERTS_V2 }) : l.Z.open(T.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: S.to.DM_SAFETY_ALERTS }), e();
        }, [C, e]),
        p = o.useCallback(() => {
            !A &&
                (E(!0),
                (0, c.Uj)(n)
                    .then(() => {
                        e(),
                            (0, d.t)({
                                text: _.intl.string(_.t.FhgVWl),
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        E(!1), (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.R0RpRU), s.ToastType.FAILURE));
                    }));
        }, [n, e, A]);
    return (0, i.jsxs)(u.Z, {
        style: x.wrapperStyle,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: _.intl.format(_.t['njJ/Cg'], { learnMoreLink: a.Z.getArticleURL(T.BhN.SAFETY_ALERTS) })
            }),
            (0, i.jsx)(s.Button, {
                className: x.settingsButton,
                onClick: h,
                fullWidth: !0,
                children: _.intl.string(_.t.qpWnyM)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: x.reportFalsePositiveText,
                    children: _.intl.format(_.t['2uYViI'], {
                        reportFalsePositiveHook: (t, e) =>
                            (0, i.jsx)(
                                s.Button,
                                {
                                    className: x.reportFalsePositiveButton,
                                    size: s.Button.Sizes.NONE,
                                    color: s.Button.Colors.LINK,
                                    look: s.Button.Looks.LINK,
                                    disabled: A,
                                    onClick: p,
                                    children: t
                                },
                                e
                            )
                    })
                })
            })
        ]
    });
};
