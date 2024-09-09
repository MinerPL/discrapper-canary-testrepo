t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    l = t.n(a),
    o = t(481060),
    r = t(311819),
    s = t(572004),
    c = t(135431),
    d = t(783097),
    u = t(314734),
    m = t(689938),
    p = t(266667);
function _(e) {
    let { application: n, className: t } = e,
        a = (0, d.nB)(n),
        _ = (0, c.E)(a);
    return (0, i.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsxs)(o.Menu, {
                className: u.NN,
                navId: 'app-details-more-menu',
                onClose: t,
                'aria-label': m.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: [
                    _
                        ? (0, i.jsx)(o.MenuItem, {
                              id: 'add-app',
                              label: m.Z.Messages.APPLICATION_ADD_BUTTON,
                              action: () => {
                                  (0, c.L)({
                                      ...a,
                                      source: 'app_launcher_app_details'
                                  });
                              }
                          })
                        : null,
                    (0, i.jsx)(o.MenuItem, {
                        id: 'copy',
                        label: m.Z.Messages.COPY_LINK,
                        action: () => {
                            (0, s.JG)(
                                (0, r.J)({
                                    id: n.id,
                                    ...a
                                })
                            );
                        }
                    })
                ]
            });
        },
        align: 'right',
        position: 'bottom',
        children: (e) =>
            (0, i.jsx)(o.Clickable, {
                onClick: e.onClick,
                className: l()(p.clickable, t),
                'aria-label': m.Z.Messages.MORE,
                children: (0, i.jsx)(o.MoreHorizontalIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
