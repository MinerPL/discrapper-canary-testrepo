n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(112831),
    l = n(435326);
function u(e) {
    var t;
    let { name: n, className: i, state: u, isInline: c, onClick: d } = e,
        _ = null,
        E = o.Z.Colors.HEADER_PRIMARY;
    (null == u ? void 0 : u.isActive) && !c ? (_ = l.active) : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (_ = l.error) : (null == u ? void 0 : u.hasValue) && !c && (_ = l.set);
    let f = (0, r.jsx)(o.Z, {
        size: c ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_14,
        color: E,
        className: a()(l.option, { [l.inline]: c }, _, i),
        children: n + (c ? ':' : '')
    });
    return null == d
        ? f
        : (0, r.jsx)(s.Clickable, {
              className: l.clickable,
              onClick: () => d(n),
              children: f
          });
}
