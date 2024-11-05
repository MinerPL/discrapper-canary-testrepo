var r = n(200651);
n(192379);
var a = n(442837),
    s = n(780384),
    i = n(481060),
    l = n(410030),
    o = n(594174),
    c = n(388032),
    d = n(417552),
    u = n(982240),
    m = n(533854);
t.Z = (e) => {
    let { onRetry: t, errorMessage: n } = e,
        f = (0, l.ZP)(),
        p = (0, a.e7)([o.default], () => {
            let e = o.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    return (0, r.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, r.jsx)('img', {
                className: d.__invalid_loadIssueImg,
                src: (0, s.wj)(f) ? u : m,
                alt: ''
            }),
            (0, r.jsx)(i.Heading, {
                className: d.heading1,
                variant: 'heading-xl/semibold',
                children: c.intl.string(c.t['i5SQ7+'])
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: c.intl.string(c.t.LuhKs7)
            }),
            p &&
                null != n &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'staff-only debug: ' + n
                }),
            (0, r.jsx)(i.Button, {
                className: d.reload,
                size: i.Button.Sizes.MEDIUM,
                color: i.Button.Colors.BRAND,
                onClick: t,
                children: c.intl.string(c.t['+hivLS'])
            })
        ]
    });
};
