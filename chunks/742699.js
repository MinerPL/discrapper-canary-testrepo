o.d(e, {
    Z: function () {
        return d;
    }
});
var t = o(735250);
o(470079);
var r = o(481060), i = o(63063), c = o(921869), s = o(514161), l = o(981631), a = o(689938), C = o(233820);
function u() {
    return (0, t.jsx)(s.yC, {
        children: (0, t.jsx)(s.Ux, {
            text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
            children: (0, t.jsx)(r.TvIcon, {
                size: 'md',
                color: 'currentColor'
            })
        })
    });
}
function d(n) {
    let {
            onContinue: e,
            onClose: o
        } = n, r = i.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION);
    return (0, t.jsx)(c.m, {
        platformType: l.ABu.CRUNCHYROLL,
        headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
        body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
        learnMoreLink: r,
        onClose: o,
        onContinue: e,
        img: (0, t.jsx)('img', {
            src: C,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: (0, t.jsx)(u, {})
    });
}
