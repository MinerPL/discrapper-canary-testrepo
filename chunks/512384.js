n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(481060),
    l = n(351780),
    r = n(170248);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
        u = (0, r.Z)(n);
    return (0, a.e7)([l.Z], () => l.Z.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(s.Shaker, {
              isShaking: t,
              intensity: u,
              className: c,
              children: o
          })
        : (0, i.jsx)(i.Fragment, { children: o });
}
