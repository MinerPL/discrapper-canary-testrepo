t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    o = t(481060),
    r = t(367907),
    s = t(895924),
    c = t(311819),
    d = t(299206),
    u = t(572004),
    m = t(135431),
    p = t(541099),
    h = t(783097),
    f = t(314734),
    C = t(981631),
    v = t(388032),
    x = t(500257);
function _(e) {
    let { application: n, className: t, sectionName: l } = e,
        _ = (0, h.L1)(n),
        N = (0, m.Eb)(_),
        g = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: l,
            source: p.Z.lastShownEntrypoint()
        },
        A = (0, d.Z)({
            id: n.id,
            label: v.intl.string(v.t['+NP/b2'])
        });
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    (0, u.JG)(
                        (0, c.J)({
                            id: n.id,
                            ..._
                        })
                    ),
                        (0, o.showToast)((0, o.createToast)(v.intl.string(v.t['L/PwZW']), o.ToastType.SUCCESS));
                },
                className: a()(x.clickable, t),
                'aria-label': v.intl.string(v.t.WqhZsr),
                children: (0, i.jsx)(o.LinkIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsxs)(o.Menu, {
                        className: f.NN,
                        navId: 'app-details-more-menu',
                        onClose: n,
                        'aria-label': v.intl.string(v.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsx)(o.MenuGroup, {
                                children: N
                                    ? (0, i.jsx)(o.MenuItem, {
                                          id: 'add-app',
                                          label: v.intl.string(v.t.NgXl3N),
                                          action: () => {
                                              null == _.customInstallUrl && (0, r.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, g),
                                                  (0, m.LO)({
                                                      ..._,
                                                      oauth2Callback: (e) => {
                                                          let { location: n } = e;
                                                          null != n && (0, r.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, g);
                                                      },
                                                      source: 'app_launcher_app_details'
                                                  });
                                          }
                                      })
                                    : null
                            }),
                            (0, i.jsx)(o.MenuGroup, { children: A })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(o.Clickable, {
                        onClick: e.onClick,
                        className: a()(x.clickable, t),
                        'aria-label': v.intl.string(v.t.UKOtz8),
                        children: (0, i.jsx)(o.MoreHorizontalIcon, {
                            size: 'sm',
                            color: o.tokens.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
