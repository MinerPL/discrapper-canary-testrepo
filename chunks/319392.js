o.d(n, {
    Z: function () {
        return p;
    }
});
var t = o(735250);
o(470079);
var s = o(481060),
    r = o(726542),
    i = o(198993),
    c = o(63063),
    a = o(376340),
    l = o(981631),
    d = o(927923),
    u = o(689938),
    _ = o(764084),
    C = o(418811);
function x() {
    return (0, t.jsxs)('div', {
        className: _.getXboxApp,
        children: [
            (0, t.jsxs)('div', {
                className: _.getXboxAppBody,
                children: [
                    (0, t.jsxs)(s.Heading, {
                        className: _.getXboxAppHeading,
                        variant: 'text-lg/semibold',
                        children: [
                            (0, t.jsx)('div', {
                                className: _.xboxLogoBox,
                                children: (0, t.jsx)('img', {
                                    src: r.Z.get(l.ABu.XBOX).icon.whiteSVG,
                                    alt: ''
                                })
                            }),
                            u.Z.Messages.GET_XBOX_APP
                        ]
                    }),
                    (0, t.jsx)(s.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u.Z.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
                    }),
                    (0, t.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: (0, t.jsx)(s.Anchor, {
                            href: c.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
                            children: u.Z.Messages.LEARN_MORE
                        })
                    })
                ]
            }),
            (0, t.jsx)(i.ZP, {
                className: _.getXboxAppQR,
                text: d.X3,
                size: 90
            })
        ]
    });
}
function p(e) {
    let { onClose: n } = e;
    return (0, t.jsx)(a.L, {
        img: (0, t.jsx)('img', {
            src: C,
            width: '232',
            height: '113',
            alt: ''
        }),
        title: u.Z.Messages.CONNECT_XBOX_SUCCESS_TITLE,
        body: u.Z.Messages.CONNECT_XBOX_SUCCESS_BODY,
        content: (0, t.jsx)(x, {}),
        onClose: n
    });
}
