n.d(t, {
    Z: function () {
        return c;
    },
    e: function () {
        return d;
    }
});
var s = n(735250);
n(470079);
var a = n(468194), i = n(477690), r = n(166081), l = n(841762);
let o = (0, a.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function c(e) {
    let {
            listing: t,
            imageSize: n,
            alt: a,
            ...i
        } = e, l = (0, r.U)(t, n);
    return (0, s.jsx)('img', {
        src: l,
        alt: a,
        ...i
    });
}
function d(e) {
    let {
            listing: t,
            aspectRatio: n = 16 / 9,
            height: a,
            ...i
        } = e, c = (a - 2 * o) * n, d = (0, r.U)(t, c), u = (0, r.U)(t, c, { shouldAnimate: !1 });
    return (0, s.jsx)(l.Z, {
        src: d,
        backgroundSrc: u,
        aspectRatio: n,
        ...i
    });
}
