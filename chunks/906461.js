var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(100527),
    o = n(182567),
    c = n(63063),
    d = n(769415),
    u = n(639119),
    g = n(276800),
    m = n(474936),
    f = n(981631),
    p = n(388032),
    _ = n(222283);
t.Z = function (e) {
    let { isFullScreen: t } = e,
        r = (0, u.N)(),
        h = (null == r ? void 0 : r.trial_id) === m.jz,
        { enabled: x } = d.Z.useExperiment({ location: 'Q4MomentBanner' + (t ? '-NitroHome' : '-NitroSettings') });
    if (!h || !x || null == r.expires_at) return null;
    let E = new Date(r.expires_at);
    return (0, i.jsx)(o.O, {
        newLocations: [l.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: a()(_.banner, { [_.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: _.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: _.image
                    })
                }),
                (0, i.jsx)('div', {
                    className: _.bannerContent,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'display-sm',
                                color: 'always-white',
                                children: p.intl.string(p.t.Kkcmj4)
                            }),
                            (0, i.jsx)(s.Text, {
                                className: _.countdown,
                                variant: 'text-sm/bold',
                                color: 'always-white',
                                children: (0, i.jsx)(g.Z, { endDate: E })
                            }),
                            (0, i.jsxs)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: [
                                    p.intl.string(p.t['2a1fz8']),
                                    '\xA0',
                                    (0, i.jsx)(s.Anchor, {
                                        href: c.Z.getArticleURL(f.BhN.PREMIUM_TRIAL),
                                        children: p.intl.string(p.t['sBp+u7'])
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: _.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: _.image
                    })
                })
            ]
        })
    });
};
