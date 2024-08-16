n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(392711),
    a = n(290421),
    s = n(80132),
    o = n(228168);
let l = {
    [o.y0.BITE_SIZE]: 12,
    [o.y0.FULL_SIZE]: 26,
    [o.y0.PANEL]: 13
};
function u(e) {
    let { displayProfile: t, profileType: n, onClose: o } = e,
        u = (0, a.Z)(t);
    return 0 === u.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, i.chunk)(u, l[n]).map((e) =>
                  (0, r.jsx)(
                      s.Z,
                      {
                          badges: e,
                          onClose: o
                      },
                      e[0].id
                  )
              )
          });
}
