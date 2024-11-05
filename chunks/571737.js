n(653041);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(783097),
    s = n(768581),
    o = n(956965),
    c = n(548514),
    d = n(388032),
    u = n(613909);
let h = 64;
t.Z = function (e) {
    let { application: t } = e,
        n = r.useMemo(
            () =>
                s.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 120
                }),
            [t]
        ),
        m = r.useMemo(() => {
            let e = [];
            return (0, l.vJ)(t) && e.push(d.intl.string(d.t.LO4f0N)), (0, l.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(d.intl.string(d.t['8z5B2d']))), (0, l.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(d.intl.string(d.t['5khEk5']))), e;
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {
                application: t,
                bannerType: 'detail',
                iconURL: n
            }),
            (0, i.jsx)('div', {
                className: u.avatarContainer,
                style: { height: h },
                children: (0, i.jsx)('img', {
                    src: n,
                    alt: '',
                    className: u.avatar,
                    height: 120,
                    width: 120,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: u.infoContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: u.metadataContainer,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                children: t.name
                            }),
                            (0, i.jsx)('div', {
                                className: u.disclosuresContainer,
                                children: m.map((e, t) =>
                                    (0, i.jsx)(
                                        a.Text,
                                        {
                                            className: u.disclosuresText,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: e
                                        },
                                        t
                                    )
                                )
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, { application: t })
                ]
            })
        ]
    });
};
