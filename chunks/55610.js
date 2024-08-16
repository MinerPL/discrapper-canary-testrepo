a.d(n, {
    U: function () {
        return T;
    }
});
var t = a(735250);
a(470079);
var r = a(120356),
    o = a.n(r),
    i = a(512722),
    _ = a.n(i),
    s = a(481060),
    I = a(63063),
    l = a(631818),
    c = a(987033),
    u = a(53900),
    d = a(981631),
    f = a(689938),
    N = a(773360);
function T() {
    let e = (0, u.Z)(),
        { enabled: n } = l.Z.useExperiment({ location: '5ebfcf_1' }, { autoTrackExposure: !1 }),
        { enabled: a } = c.Z.useExperiment({ location: '5ebfcf_2' }, { autoTrackExposure: !1 });
    return null != e && ('PL' === e ? n : 'TR' === e && a);
}
n.Z = (e) => {
    var n, a;
    let { fromBoostCancelModal: r, className: i } = e,
        l = (0, u.Z)();
    if (!T()) return null;
    return (
        _()(null != l, 'Subscription billing country should not be null'),
        (0, t.jsxs)('div', {
            className: o()(N.noticeRoot, i),
            children: [
                (0, t.jsx)('div', {
                    className: N.iconContainer,
                    children: (0, t.jsx)(s.CircleWarningIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: N.infoIcon
                    })
                }),
                (0, t.jsx)('div', {
                    className: N.text,
                    children: ((n = l), (a = r), 'PL' === n ? (a ? f.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING) : 'TR' === n ? (a ? f.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING) : a ? f.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({ helpCenterLink: I.Z.getArticleURL(d.BhN.LOCALIZED_PRICING) })
                })
            ]
        })
    );
};
