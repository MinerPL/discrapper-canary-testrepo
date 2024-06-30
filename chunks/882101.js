n.d(t, {
    BM: function () {
        return E;
    },
    Ey: function () {
        return _;
    },
    xv: function () {
        return m;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(481060), s = n(765400), l = n(937615), r = n(817460), o = n(290348), c = n(367719), d = n(689938), u = n(364375);
let _ = e => {
    let {listingName: t} = e;
    return (0, i.jsx)(a.Heading, {
        variant: 'text-md/normal',
        color: 'interactive-active',
        className: u.tierName,
        children: t
    });
};
function E(e) {
    let {image: t} = e;
    return null == t ? null : (0, i.jsx)('img', {
        src: t,
        alt: '',
        className: u.tierImage
    });
}
let m = e => {
    let {
            listingId: t,
            isListingPublished: n
        } = e, m = (0, c.Z)(), [I] = o._T(t), [T] = o.d9(t, m), [h] = o.H9(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_, { listingName: I }),
            (0, i.jsx)(E, { image: T }),
            !n && (0, i.jsx)('div', {
                className: u.draftBadgeContainer,
                children: (0, i.jsx)(s.v, {})
            }),
            (0, i.jsx)(a.Text, {
                variant: 'heading-xl/semibold',
                className: u.tierPrice,
                tag: 'div',
                children: (0, l.T4)(h.price, h.currency)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                className: u.tierPeriod,
                children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                    period: (0, r.JE)({
                        interval: h.interval,
                        interval_count: h.interval_count
                    })
                })
            })
        ]
    });
};
