t.d(n, {
    Z: function () {
        return A;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    l = t.n(a),
    o = t(481060),
    r = t(367907),
    s = t(895924),
    c = t(311819),
    d = t(572004),
    u = t(135431),
    m = t(541099),
    p = t(783097),
    _ = t(314734),
    C = t(981631),
    h = t(689938),
    f = t(500257);
function A(e) {
    let { application: n, className: t, sectionName: a } = e,
        A = (0, p.L1)(n),
        E = (0, u.Eb)(A),
        N = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: a,
            source: m.Z.lastShownEntrypoint()
        };
    return (0, i.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsxs)(o.Menu, {
                className: _.NN,
                navId: 'app-details-more-menu',
                onClose: t,
                'aria-label': h.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: [
                    E
                        ? (0, i.jsx)(o.MenuItem, {
                              id: 'add-app',
                              label: h.Z.Messages.APPLICATION_ADD_BUTTON,
                              action: () => {
                                  null == A.customInstallUrl && (0, r.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, N),
                                      (0, u.LO)({
                                          ...A,
                                          oauth2Callback: (e) => {
                                              let { location: n } = e;
                                              null != n && (0, r.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, N);
                                          },
                                          source: 'app_launcher_app_details'
                                      });
                              }
                          })
                        : null,
                    (0, i.jsx)(o.MenuItem, {
                        id: 'copy',
                        label: h.Z.Messages.COPY_LINK,
                        action: () => {
                            (0, d.JG)(
                                (0, c.J)({
                                    id: n.id,
                                    ...A
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
                className: l()(f.clickable, t),
                'aria-label': h.Z.Messages.MORE,
                children: (0, i.jsx)(o.MoreHorizontalIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
