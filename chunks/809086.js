t.d(n, {
    Z: function () {
        return c;
    },
    e: function () {
        return d;
    }
});
var r = t(735250);
t(470079);
var a = t(468194),
    o = t(477690),
    i = t(166081),
    s = t(841762);
let l = (0, a.Mg)(o.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function c(e) {
    let { listing: n, imageSize: t, alt: a, ...o } = e,
        s = (0, i.U)(n, t);
    return (0, r.jsx)('img', {
        src: s,
        alt: a,
        ...o
    });
}
function d(e) {
    let { listing: n, aspectRatio: t = 16 / 9, height: a, ...o } = e,
        c = (a - 2 * l) * t,
        d = (0, i.U)(n, c),
        u = (0, i.U)(n, c, { shouldAnimate: !1 });
    return (0, r.jsx)(s.Z, {
        src: d,
        backgroundSrc: u,
        aspectRatio: t,
        ...o
    });
}
