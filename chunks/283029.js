var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(183976);
t.Z = function (e) {
    let {
        className: t,
        imageClassName: a,
        boostInCooldown: o,
        useReducedMotion: l
    } = e;
    return (0, n.jsx)('div', {
        className: i()(r.imageWrapper, t, { [r.cooldown]: o }),
        children: (0, n.jsx)('img', {
            className: i()(r.image, a, { [r.cooldownImage]: o }),
            src: o ? s(971149) : l ? s(908635) : s(83957),
            alt: ''
        })
    });
};
