n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(369566),
    a = n(151545),
    s = n(769140);
function o(e) {
    let { user: t, currentUser: n, className: o, onClose: l } = e,
        { live: u, stream: c } = (0, i.Z)(t.id),
        [d] = u;
    return null != c
        ? (0, r.jsx)(s.Z, {
              user: t,
              currentUser: n,
              stream: c,
              className: o,
              onClose: l
          })
        : null != d
          ? (0, r.jsx)(a.Z, {
                user: t,
                currentUser: n,
                activity: d,
                className: o,
                onClose: l
            })
          : null;
}
