n.r(t),
    n.d(t, {
        GuildDiscoveryMenuPopout: function () {
            return f;
        },
        default: function () {
            return g;
        }
    });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(239091),
    o = n(299206),
    c = n(726521),
    d = n(430824),
    u = n(496675),
    h = n(556017),
    m = n(981631),
    p = n(388032);
function g(e) {
    let { guild: t, shiftId: n, onSelect: g, closePopout: f, 'aria-label': _ } = e,
        E = (0, o.Z)({
            id: t.id,
            label: p.intl.string(p.t['94lLDw']),
            shiftId: n,
            onSuccess: f
        }),
        I = (0, a.e7)([d.Z], () => d.Z.getGuild(t.id), [t.id]),
        C = (0, a.e7)([u.Z], () => u.Z.can(m.Plq.ADMINISTRATOR, I)),
        { canSeeInAppReportingButtons: v } = h.N.useExperiment({ location: '0e35b9_1' }, { autoTrackExposure: !1 }),
        S = () => {
            (0, s.Zy)(), null == f || f();
        },
        N = r.useCallback((e) => {
            e.stopPropagation();
        }, []);
    return (0, i.jsx)(l.Clickable, {
        onClick: N,
        children: (0, i.jsxs)(l.Menu, {
            onSelect: g,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != _ ? _ : p.intl.string(p.t.ogxXGh),
            onClose: s.Zy,
            children: [
                (0, i.jsx)(l.MenuGroup, {
                    children:
                        !C && v
                            ? (0, i.jsx)(l.MenuItem, {
                                  id: 'report-guild-discovery-listing',
                                  label: p.intl.string(p.t.Aen9en),
                                  action: () => {
                                      (0, c.lt)(t), S();
                                  },
                                  icon: l.FlagIcon,
                                  color: 'danger'
                              })
                            : null
                }),
                (0, i.jsx)(l.MenuGroup, { children: E })
            ]
        })
    });
}
let f = (e) => {
    let { guild: t, children: n, onRequestOpen: r, onRequestClose: a } = e;
    return (0, i.jsx)(l.Popout, {
        onRequestOpen: r,
        onRequestClose: a,
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(g, {
                guild: t,
                closePopout: n
            });
        },
        children: n
    });
};
