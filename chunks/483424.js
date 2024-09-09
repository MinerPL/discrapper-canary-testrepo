n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(70956),
    s = n(709054),
    o = n(27144),
    l = n(929498),
    u = n(151545),
    c = n(527790),
    d = n(304042);
function _(e) {
    let { user: t, currentUser: n, className: _, onClose: E } = e,
        { live: f, recent: h, stream: p } = (0, l.Z)(t.id),
        [m] = f,
        { mostRecentActivityEnabled: I } = (0, o.z)({ location: 'UserProfileFeaturedActivity' }),
        T = i.useMemo(() => h.find((e) => s.default.age(e.id) / a.Z.Millis.HOUR < 24), [h]);
    return null != p
        ? (0, r.jsx)(d.Z, {
              user: t,
              currentUser: n,
              stream: p,
              className: _,
              onClose: E
          })
        : null != m
          ? (0, r.jsx)(u.Z, {
                user: t,
                currentUser: n,
                activity: m,
                className: _,
                onClose: E
            })
          : I && null != T
            ? (0, r.jsx)(c.Z, {
                  user: t,
                  entry: T,
                  className: _,
                  onClose: E
              })
            : null;
}
