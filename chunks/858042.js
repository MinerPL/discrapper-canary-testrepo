n.d(t, {
    M: function () {
        return s;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(388032);
function s(e) {
    let { applicationId: t, viewId: s, showOutdatedInfoOption: o = !0 } = e;
    return null == t
        ? null
        : (0, r.jsx)(i.MenuItem, {
              id: 'game-profile-something-wrong',
              label: a.intl.string(a.t.qP2cXV),
              action: () =>
                  (0, i.openModalLazy)(async () => {
                      let { default: e } = await n.e('46923').then(n.bind(n, 55396));
                      return (n) =>
                          (0, r.jsx)(e, {
                              showOutdatedInfoOption: o,
                              applicationId: t,
                              viewId: s,
                              ...n
                          });
                  })
          });
}
