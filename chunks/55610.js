s.d(n, {
    U: function () {
        return p;
    }
});
var l = s(735250);
s(470079);
var i = s(120356), t = s.n(i), r = s(512722), a = s.n(r), c = s(481060), o = s(63063), u = s(631818), d = s(987033), _ = s(53900), m = s(981631), I = s(689938), E = s(863962);
function p() {
    let e = (0, _.Z)(), {enabled: n} = u.Z.useExperiment({ location: '5ebfcf_1' }, { autoTrackExposure: !1 }), {enabled: s} = d.Z.useExperiment({ location: '5ebfcf_2' }, { autoTrackExposure: !1 });
    return null != e && ('PL' === e ? n : 'TR' === e && s);
}
n.Z = e => {
    var n, s;
    let {
            fromBoostCancelModal: i,
            className: r
        } = e, u = (0, _.Z)();
    if (!p())
        return null;
    return a()(null != u, 'Subscription billing country should not be null'), (0, l.jsxs)('div', {
        className: t()(E.noticeRoot, r),
        children: [
            (0, l.jsx)('div', {
                className: E.iconContainer,
                children: (0, l.jsx)(c.CircleExclamationPointIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: E.infoIcon
                })
            }),
            (0, l.jsx)('div', {
                className: E.text,
                children: (n = u, s = i, 'PL' === n ? s ? I.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : I.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : 'TR' === n ? s ? I.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : I.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : s ? I.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : I.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({ helpCenterLink: o.Z.getArticleURL(m.BhN.LOCALIZED_PRICING) })
            })
        ]
    });
};
