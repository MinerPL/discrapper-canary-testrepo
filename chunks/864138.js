n.d(t, {
    z: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var i = n(206295),
    a = n(847762);
function s(e) {
    let { children: t, imageUrl: n } = e,
        { primaryColor: s, secondaryColor: o } = (0, i.Z)(n);
    return (0, r.jsxs)('div', {
        className: a.heroContainer,
        style: { background: 'linear-gradient(180deg, '.concat(s, ' 0%, ').concat(o, ' 100%)') },
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: a.heroSplash
            }),
            t
        ]
    });
}
