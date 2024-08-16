n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(626135),
    s = n(596401),
    o = n(981631),
    l = n(689938);
let u = () => {
    a.default.track(o.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: 'profile_bio',
        target: s.D2
    });
};
function c() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('span', { children: l.Z.Messages.SYSTEM_DM_CHANGELOG_BIO }),
            (0, r.jsx)('br', {}),
            (0, r.jsx)('br', {}),
            (0, r.jsx)('span', {
                children: l.Z.Messages.SYSTEM_DM_CHANGELOG_BIO_WITH_CTA.format({
                    blogHook: (e, t) =>
                        (0, r.jsx)(
                            i.Anchor,
                            {
                                onClick: u,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                href: s.D2,
                                children: e
                            },
                            t
                        )
                })
            })
        ]
    });
}
