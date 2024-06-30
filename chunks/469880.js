t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250), a = t(470079), s = t(481060), l = t(932776), o = t(680298), r = t(289465), c = t(689938), d = t(874281);
function u(e) {
    let {
            applicationIcon: n,
            applicationName: t,
            canNavigate: u,
            guildId: I
        } = e, {
            results: m,
            query: _,
            setQuery: N,
            unfilteredCount: E
        } = (0, l.O)(), T = null != m && E > 0;
    return (0, i.jsx)(a.Fragment, {
        children: T ? (0, i.jsx)(r.Z, {
            bar: (0, i.jsx)(s.SearchBar, {
                query: _,
                onChange: N,
                onClear: () => N('')
            }),
            inModal: !1,
            title: c.Z.Messages.COMMANDS,
            children: m.map((e, l) => (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(o.Z, {
                        applicationIcon: n,
                        applicationName: t,
                        canNavigate: u,
                        command: e,
                        guildId: I
                    }),
                    l < m.length - 1 ? (0, i.jsx)(s.FormDivider, {}) : null
                ]
            }, e.id))
        }) : (0, i.jsx)(s.Card, {
            className: d.emptyCard,
            editable: !0,
            children: (0, i.jsx)(s.Text, {
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: c.Z.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
            })
        })
    });
}
