s.d(t, {
    Z: function () {
        return u;
    }
}),
    s(627341);
var n = s(735250);
s(470079);
var i = s(278074),
    a = s(219496),
    r = s(346585),
    o = s(363577),
    l = s(81259);
function u(e) {
    let { username: t, oneClickFlow: s = !1 } = e,
        u = (0, o.M)((0, r.R_)(t), !0, !1, s);
    if (null == u) return null;
    let c = (0, i.EQ)(u.type)
        .with(a.K.RATE_LIMIT, () => 'info')
        .with(a.K.ERROR, () => 'error')
        .with(a.K.AVAILABLE, () => 'success')
        .with(a.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == c
        ? null
        : (0, n.jsx)(l.Z, {
              type: c,
              children: u.message
          });
}
