n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(481060),
    s = n(410575),
    a = n(471445),
    u = n(19780),
    c = n(981631),
    d = n(388032),
    h = n(549584);
function f(e) {
    let { recentVoiceChannels: t, currentVoiceChannel: n, onClose: f, onSelect: p } = e,
        m = o.useCallback(
            (e) => {
                p(e), f();
            },
            [p, f]
        ),
        v = (0, r.e7)([u.Z], () => u.Z.getQuality()),
        g = {
            [c.IE4.FINE]: l.ConnectionFineIcon,
            [c.IE4.AVERAGE]: l.ConnectionAverageIcon,
            [c.IE4.BAD]: l.ConnectionBadIcon,
            [c.IE4.UNKNOWN]: l.ConnectionUnknownIcon
        }[v];
    return (0, i.jsx)(s.Z, {
        section: c.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(l.Menu, {
            onSelect: f,
            navId: 'manage-streams',
            onClose: f,
            'aria-label': d.intl.string(d.t['+9QSnp']),
            children: (0, i.jsx)(l.MenuGroup, {
                children: t.map((e) => {
                    let t = (0, a.KS)(e),
                        o = e.id === (null == n ? void 0 : n.id);
                    return (0, i.jsx)(
                        l.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsxs)(l.Text, {
                                variant: 'text-sm/semibold',
                                className: h.label,
                                color: o ? 'text-positive' : 'text-normal',
                                children: [
                                    null != t
                                        ? (0, i.jsx)(t, {
                                              color: 'currentColor',
                                              size: 'xs'
                                          })
                                        : void 0,
                                    e.name
                                ]
                            }),
                            icon: o ? g : void 0,
                            action: () => m(e)
                        },
                        e.id
                    );
                })
            })
        })
    });
}
