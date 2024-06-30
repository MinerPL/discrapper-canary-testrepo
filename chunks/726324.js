n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(481060), a = n(695346), r = n(346656), l = n(506071), o = n(353254), c = n(759475);
function d(e) {
    let {
            coverImageAsset: t,
            title: n,
            guild: d,
            description: u,
            children: _
        } = e, E = a.QK.useSetting(), h = (0, l.n)(), [I, m] = (0, o.Z)(t, h && E);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)('div', {
                ref: I,
                className: c.coverImageContainer,
                children: null != m && (0, i.jsx)('img', {
                    src: m,
                    alt: '',
                    className: c.coverImage
                })
            }),
            (0, i.jsx)('div', {
                className: c.guildIconContainer,
                children: (0, i.jsx)(r.Z, {
                    guild: d,
                    size: r.Z.Sizes.XLARGE
                })
            }),
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/semibold',
                className: c.ctaTitle,
                children: n
            }),
            (0, i.jsx)(s.Text, {
                className: c.ctaSubtitle,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u
            }),
            _
        ]
    });
}
