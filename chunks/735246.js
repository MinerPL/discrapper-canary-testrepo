n.d(t, {
    T: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(442837),
    a = n(241601),
    s = n(406128),
    o = n(706454),
    l = n(689938),
    u = n(88719);
function c(e) {
    let { children: t } = e,
        n = (0, i.e7)([o.default], () => o.default.locale),
        [c, d] = (0, a.R_)((e) => [e.isLoading, e.error]);
    return null != d
        ? (0, r.jsx)(s.Z, {
              title: l.Z.Messages.I18N_LOCALE_LOADING_ERROR.format({ locale: n }),
              note: (0, r.jsx)('span', { children: d.message })
          })
        : c
          ? __OVERLAY__
              ? null
              : (0, r.jsx)('div', { className: u.loading })
          : null != t
            ? t
            : null;
}
