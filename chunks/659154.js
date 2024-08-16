n.d(e, {
    c: function () {
        return u;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    o = n(689938),
    s = n(189073),
    c = n(387852);
let u = (t) => {
    let { onTryAgain: e } = t;
    return (0, a.jsxs)('div', {
        className: s.bodyContent,
        children: [
            (0, a.jsx)('img', {
                src: c,
                width: '254',
                height: '127',
                alt: ''
            }),
            (0, a.jsx)(r.Heading, {
                className: s.title,
                variant: 'heading-xl/extrabold',
                children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_TITLE
            }),
            (0, a.jsx)(r.Text, {
                tag: 'p',
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_BODY
            }),
            (0, a.jsx)(r.Button, {
                className: s.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: e,
                children: o.Z.Messages.TRY_AGAIN
            })
        ]
    });
};
