n.d(t, {
    A: function () {
        return R;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(232567),
    s = n(230711),
    c = n(726542),
    d = n(100527),
    u = n(231757),
    m = n(674525),
    h = n(963249),
    f = n(346585),
    p = n(303172),
    g = n(463230),
    _ = n(246965),
    C = n(703656),
    E = n(706454),
    I = n(933429),
    x = n(395361),
    v = n(626135),
    N = n(243778),
    T = n(921944),
    S = n(981631),
    b = n(801461),
    A = n(474936),
    j = n(388032),
    Z = n(569252);
let R = (e) => {
    let { dismissibleContent: t, noticeType: R } = e,
        P = (0, r.e7)([I.Z], () => I.Z.getNotice()),
        y = (0, r.e7)([E.default], () => E.default.locale);
    return (0, i.jsx)(N.ZP, {
        contentTypes: [t],
        groupName: T.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.string(j.t['+xn1o6']),
                            (0, i.jsx)('i', { className: Z.iconApple }),
                            (0, i.jsx)('i', { className: Z.iconAndroid }),
                            (0, i.jsx)('i', { className: Z.iconWindows }),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: R,
                                onClick: () => {
                                    (0, a.openModalLazy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                source: 'Top Bar Nag',
                                                ...t
                                            });
                                    });
                                },
                                children: j.intl.string(j.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.SPOTIFY,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            (0, i.jsx)(x.Z, { className: Z.platformIcon }),
                            j.intl.string(j.t['5NUVHB']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: S.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: R,
                                children: j.intl.string(j.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PLAYSTATION,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, { onClick: () => r(T.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: Z.platformIcon,
                                src: c.Z.get(S.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            j.intl.string(j.t.WHWgoa),
                            (0, i.jsx)(a.NoticeButton, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: S.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: j.intl.string(j.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.string(j.t.B2hnhY),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => s.Z.open(S.oAB.ACCOUNT),
                                noticeType: R,
                                children: j.intl.string(j.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: Z.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: Z.premiumText,
                                children: j.intl.string(j.t['+urf7+'])
                            }),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                className: Z.premiumAction,
                                noticeType: R,
                                onClick: () => {
                                    v.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: S.jXE.NOTIFICATION_BAR,
                                        location_object: S.qAy.BUTTON_CTA
                                    }),
                                        s.Z.open(S.oAB.PREMIUM);
                                },
                                children: j.intl.string(j.t['8JC5e3'])
                            }),
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => {
                                    r(T.L.UNKNOWN), (0, o.mB)(S.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: R
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(_.Z, {
                        dismissCurrentNotice: () => r(T.L.UNKNOWN),
                        subscriptionTier: A.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(_.Z, {
                        dismissCurrentNotice: () => r(T.L.UNKNOWN),
                        subscriptionTier: A.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                noticeType: R,
                                onClick: () => r(T.L.UNKNOWN)
                            }),
                            j.intl.string(j.t['0KFB2N']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: R,
                                onClick: () => {
                                    r(T.L.UNKNOWN), s.Z.open(S.oAB.PREMIUM);
                                },
                                children: j.intl.string(j.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(g.Z, {
                        notice: P,
                        noticeType: R,
                        dismissCurrentNotice: () => r(T.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DANGER,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.string(j.t['7490vb']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: R,
                                onClick: () => {
                                    (0, C.uL)(S.Z5c.SETTINGS('account'));
                                },
                                children: j.intl.string(j.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let E = m.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.string(j.t.pJ4hJC),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: R,
                                onClick: () => {
                                    r(T.L.PRIMARY), (0, C.uL)(1 === E.length ? S.Z5c.GUILD_SETTINGS(E[0], 'role-subscriptions') : S.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: j.intl.string(j.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.format(j.t.pdYZys, {}),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => (0, p.Z)(b.Kq.NOTICE),
                                noticeType: R,
                                children: j.intl.string(j.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.format(j.t.zT1hgo, { date: (0, f.IE)(y) }),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => (0, p.Z)(b.Kq.NOTICE),
                                noticeType: R,
                                children: j.intl.string(j.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: R
                            }),
                            j.intl.string(j.t['O9GI+v']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, h.Z)({
                                        subscriptionTier: A.Si.TIER_2,
                                        analyticsLocations: [d.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: S.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(T.L.UNKNOWN)
                                    });
                                },
                                noticeType: R,
                                children: j.intl.string(j.t.Zi69Dw)
                            })
                        ]
                    });
            }
        }
    });
};
