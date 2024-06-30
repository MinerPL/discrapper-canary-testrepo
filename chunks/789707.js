n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(499033), o = n(689938), s = n(235109);
function l() {
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsxs)('div', {
                className: s.iconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: s.icon,
                        children: (0, r.jsx)(i.TopicsIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: s.iconOffset,
                            width: 28,
                            height: 28
                        })
                    }),
                    (0, r.jsx)(a.Z, { className: s.stars })
                ]
            }),
            (0, r.jsx)(i.Heading, {
                className: s.header,
                variant: 'heading-xl/semibold',
                children: o.Z.Messages.SUMMARY_EMPTY_STATE_TITLE
            }),
            (0, r.jsx)(i.Text, {
                className: s.text,
                color: 'header-secondary',
                variant: 'text-md/normal',
                children: o.Z.Messages.SUMMARY_EMPTY_STATE_TEXT
            })
        ]
    });
}
