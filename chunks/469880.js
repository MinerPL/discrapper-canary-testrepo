t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250),
    a = t(470079),
    s = t(481060),
    l = t(932776),
    r = t(680298),
    o = t(289465),
    d = t(689938),
    c = t(400587);
function u(e) {
    let { applicationIcon: n, applicationName: t, canNavigate: u, guildId: I } = e,
        { results: m, query: _, setQuery: N, unfilteredCount: E } = (0, l.O)(),
        T = null != m && E > 0;
    return (0, i.jsx)(a.Fragment, {
        children: T
            ? (0, i.jsx)(o.Z, {
                  bar: (0, i.jsx)(s.SearchBar, {
                      query: _,
                      onChange: N,
                      onClear: () => N('')
                  }),
                  inModal: !1,
                  title: d.Z.Messages.COMMANDS,
                  children: m.map((e, l) =>
                      (0, i.jsxs)(
                          a.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(r.Z, {
                                      applicationIcon: n,
                                      applicationName: t,
                                      canNavigate: u,
                                      command: e,
                                      guildId: I
                                  }),
                                  l < m.length - 1 ? (0, i.jsx)(s.FormDivider, {}) : null
                              ]
                          },
                          e.id
                      )
                  )
              })
            : (0, i.jsx)(s.Card, {
                  className: c.emptyCard,
                  editable: !0,
                  children: (0, i.jsx)(s.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: d.Z.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
                  })
              })
    });
}
