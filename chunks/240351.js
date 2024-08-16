var s = n(735250);
n(470079);
var a = n(481060),
    r = n(858719),
    i = n(455364);
t.Z = (e) => {
    let { header: t, displayType: n } = e,
        l = (0, r.C7)(n);
    return (0, s.jsxs)('div', {
        className: i.counter,
        children: [
            (0, s.jsx)(a.Heading, {
                variant: 'heading-xxl/medium',
                color: l > 0 ? 'text-brand' : 'text-muted',
                children: (0, s.jsx)(a.HeadingLevel, { children: null != l ? l : 0 })
            }),
            (0, s.jsx)(a.Text, {
                variant: 'text-sm/semibold',
                children: t
            })
        ]
    });
};
