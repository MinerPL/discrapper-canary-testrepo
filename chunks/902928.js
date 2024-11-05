n.d(e, {
    u: function () {
        return f;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(159277),
    i = n(243814),
    l = n(481060),
    s = n(388032),
    c = n(715802),
    u = n(942605),
    d = n(534345);
let f = (t) => {
    let { onComplete: e, data: n } = t,
        f = (0, r.useId)(),
        p = null,
        h = null;
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? (p = u.Z) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (p = d.Z),
        null != n.twoWayLinkCode ? (h = s.intl.string(s.t.QhATl5)) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (h = s.intl.string(s.t.vBPvKy)),
        (0, a.jsxs)('div', {
            className: c.content,
            children: [
                null != p
                    ? (0, a.jsx)('img', {
                          src: p,
                          className: c.artwork,
                          alt: '',
                          'aria-labelledby': f
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: c.innerContent,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: 'heading-xl/extrabold',
                            id: f,
                            children: s.intl.string(s.t.qDtJmJ)
                        }),
                        null != h
                            ? (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  children: h
                              })
                            : null
                    ]
                }),
                (0, a.jsx)(l.Button, {
                    className: c.footerButton,
                    color: l.Button.Colors.BRAND,
                    onClick: e,
                    children: s.intl.string(s.t.i4jeWV)
                })
            ]
        })
    );
};
