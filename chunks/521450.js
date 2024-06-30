var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(613828), o = n(435935), c = n(442837), d = n(481060), _ = n(37234), u = n(960412), E = n(151662), T = n(695346), I = n(981631), R = n(930441), C = n(689938), p = n(450470), g = n(331651);
t.Z = () => {
    let e = T.Ex.useSetting(), {
            categories: t,
            initialized: n
        } = (0, c.cj)([E.Z], () => E.Z.getEmailSettings());
    return a.useEffect(() => {
        null == n && (0, u.Y7)();
    }, [n]), (0, s.jsxs)('div', {
        className: p.container,
        children: [
            (0, s.jsx)(d.Text, {
                variant: 'eyebrow',
                color: 'text-muted',
                children: C.Z.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
            }),
            (0, s.jsx)(d.FormSwitch, {
                className: i()(g.marginTop8, g.marginBottom20),
                value: e,
                note: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
                hideBorder: !0,
                onChange: T.Ex.updateSetting,
                children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
            }),
            e ? (0, s.jsx)(d.Card, {
                className: p.enableCard,
                type: d.Card.Types.CUSTOM,
                outline: !0,
                children: (0, s.jsxs)(o.k, {
                    justify: o.k.Justify.END,
                    children: [
                        (0, s.jsx)(o.k.Child, {
                            children: (0, s.jsx)(d.Text, {
                                variant: 'text-sm/semibold',
                                color: 'text-normal',
                                children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
                            })
                        }),
                        (0, s.jsx)(d.Clickable, {
                            children: (0, s.jsx)(l.rU, {
                                onClick: _.xf,
                                to: {
                                    pathname: I.Z5c.FAMILY_CENTER,
                                    state: { scrollRestoration: !1 }
                                },
                                children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
                            })
                        }),
                        (0, s.jsx)(d.IconBadge, {
                            icon: d.ArrowSmallRightIcon,
                            className: p.arrow,
                            disableColor: !0
                        })
                    ]
                })
            }) : null,
            (0, s.jsx)(d.FormSwitch, {
                className: i()(g.marginTop20, g.marginBottom20),
                value: !!t[R.$Z.FAMILY_CENTER_DIGEST],
                note: C.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
                hideBorder: !0,
                onChange: function (e) {
                    (0, u.pR)(R.$Z.FAMILY_CENTER_DIGEST, e);
                },
                children: C.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
            })
        ]
    });
};
