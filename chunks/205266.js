s.d(t, {
    t: function () {
        return _;
    }
});
var n = s(735250);
s(470079);
var a = s(704215), i = s(231757), r = s(63063), o = s(249881), l = s(981631), c = s(689938), d = s(359734);
let _ = () => {
    let e = r.Z.getArticleURL(l.BhN.PS_CONNECTION);
    return (0, n.jsx)(o.t, {
        title: c.Z.Messages.PS_TWO_WAY_UPSELL_TITLE,
        body: c.Z.Messages.PS_TWO_WAY_UPSELL_BODY.format({ help_article: e }),
        img: (0, n.jsx)('img', {
            src: d,
            width: '82',
            height: 'auto',
            alt: ''
        }),
        newIndicatorDismissibleContent: a.z.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, i.Z)({
            platformType: l.ABu.PLAYSTATION,
            location: 'PS two way upsell'
        })
    });
};
