o.d(n, {
    Z: function () {
        return d;
    }
});
var t = o(735250);
o(470079);
var i = o(481060),
    r = o(63063),
    s = o(376340),
    c = o(981631),
    l = o(689938),
    a = o(517665),
    C = o(38920);
function u() {
    return (0, t.jsx)('div', {
        className: a.__invalid_getCrunchyrollApp,
        children: (0, t.jsx)('div', {
            className: a.__invalid_getCrunchyrollAppBody,
            children: (0, t.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: (0, t.jsx)(i.Anchor, {
                    href: r.Z.getArticleURL(c.BhN.CRUNCHYROLL_CONNECTION),
                    children: l.Z.Messages.LEARN_MORE
                })
            })
        })
    });
}
function d(e) {
    let { onClose: n } = e;
    return (0, t.jsx)(s.L, {
        img: (0, t.jsx)('img', {
            src: C,
            width: '224',
            height: '104',
            alt: ''
        }),
        title: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
        body: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
        content: (0, t.jsx)(u, {}),
        onClose: n
    });
}
