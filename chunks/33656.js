s.d(t, {
    Z: function () {
        return m;
    }
}), s(724458);
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(442837), l = s(481060), c = s(921801), d = s(663389), _ = s(960412), E = s(151662), u = s(930441), T = s(726985), I = s(689938), S = s(970679), N = s(331651);
function C(e) {
    let {
        label: t,
        onChange: s,
        enabled: a,
        subLabel: i
    } = e;
    return (0, n.jsx)(l.FormSwitch, {
        value: !!a,
        onChange: s,
        note: i,
        children: t
    });
}
function m() {
    let e = (0, o.e7)([d.Z], () => d.Z.getSubsection()), t = a.createRef(), {
            categories: s,
            initialized: i
        } = (0, o.cj)([E.Z], () => E.Z.getEmailSettings());
    a.useEffect(() => {
        if (null == i)
            (0, _.Y7)();
        else if (e === u.vG.toUpperCase()) {
            var s;
            null == t || null === (s = t.current) || void 0 === s || s.scrollIntoView(!0);
        }
    }, [
        i,
        t,
        e
    ]);
    let m = u.M0.reduce((e, t) => e || !!s[t], !1), A = {
            [u.$Z.COMMUNICATION]: T.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [u.$Z.SOCIAL]: T.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [u.$Z.UPDATES_AND_ANNOUNCEMENTS]: T.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [u.$Z.TIPS]: T.s6.NOTIFICATIONS_EMAILS_TIPS,
            [u.$Z.RECOMMENDATIONS_AND_EVENTS]: T.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return i ? (0, n.jsxs)(c.F, {
        setting: T.s6.NOTIFICATIONS_EMAILS,
        children: [
            (0, n.jsx)('div', { ref: t }),
            (0, n.jsxs)(l.FormSection, {
                className: r()(N.marginTop40),
                tag: l.FormTitleTags.H1,
                title: I.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
                children: [
                    u.Od.map(e => {
                        let {
                                category: t,
                                label: a,
                                subLabel: i
                            } = e, r = A[t], o = (0, n.jsx)(C, {
                                label: a(),
                                subLabel: i(),
                                enabled: s[t],
                                onChange: e => {
                                    var s, n;
                                    return s = t, n = e, void (0, _.pR)(s, n);
                                }
                            }, a());
                        return null != r ? (0, n.jsx)(c.F, {
                            setting: r,
                            children: o
                        }, a()) : o;
                    }),
                    (0, n.jsxs)(c.F, {
                        setting: T.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                        children: [
                            (0, n.jsx)(l.Button, {
                                className: S.marketingUnsubscribeButton,
                                disabled: !m,
                                look: l.ButtonLooks.LINK,
                                color: l.ButtonColors.LINK,
                                onClick: _.oc,
                                children: I.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
                            }),
                            (0, n.jsx)(l.FormText, {
                                type: l.FormTextTypes.DESCRIPTION,
                                children: I.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
                            }),
                            (0, n.jsx)(l.FormDivider, { className: r()(N.marginTop40, N.marginBottom40) })
                        ]
                    })
                ]
            })
        ]
    }) : null;
}
