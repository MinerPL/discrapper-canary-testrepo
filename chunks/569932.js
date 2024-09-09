t.d(n, {
    A: function () {
        return _;
    }
});
var o = t(735250);
t(470079);
var i = t(362470),
    s = t(961842),
    r = t(63063),
    l = t(921869),
    c = t(514161),
    a = t(981631),
    C = t(689938),
    d = t(913045);
function u() {
    let e = [C.Z.Messages.PS_VALUE_PROP_VOICE, C.Z.Messages.PS_VALUE_PROP_GAME],
        n = [C.Z.Messages.PS_VALUE_PROP_GAME];
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(c.yC, {
                children: (0, o.jsx)(c.pT, {
                    icon: (0, o.jsx)(s.Z, {}),
                    title: C.Z.Messages.PS5,
                    bulletPoints: e
                })
            }),
            (0, o.jsx)(c.yC, {
                children: (0, o.jsx)(c.pT, {
                    icon: (0, o.jsx)(i.Z, {}),
                    title: C.Z.Messages.PS4,
                    bulletPoints: n
                })
            })
        ]
    });
}
function _(e) {
    let { platformType: n, onContinue: t, onClose: i } = e;
    return (0, o.jsx)(l.m, {
        platformType: n,
        headerConnect: C.Z.Messages.CONNECT_PS_LANDING_TITLE,
        headerReconnect: C.Z.Messages.RECONNECT_PS_LANDING_TITLE,
        body: C.Z.Messages.CONNECT_PS_LANDING_BODY,
        onClose: i,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: d,
            width: 230,
            height: 138,
            alt: ''
        }),
        valueProps: (0, o.jsx)(u, {}),
        learnMoreLink: r.Z.getArticleURL(a.BhN.PS_CONNECTION)
    });
}
