var s = t(735250);
t(470079);
var r = t(481060),
    l = t(299173);
n.Z = function (e) {
    let { message: n } = e;
    return (0, s.jsxs)('div', {
        className: l.container,
        children: [
            (0, s.jsx)(r.CircleInformationIcon, {
                size: 'custom',
                className: l.icon,
                width: 20,
                height: 20,
                color: r.tokens.colors.TEXT_WARNING
            }),
            (0, s.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-muted',
                children: n
            })
        ]
    });
};
