n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(481060),
    o = n(367907),
    c = n(626135),
    u = n(152376),
    d = n(981631),
    h = n(689938),
    m = n(499256);
function p(e) {
    let { channel: t, narrow: n } = e;
    return (
        a.useEffect(() => {
            c.default.track(d.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'channel_opt_in'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: l()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, i.jsx)(r.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: h.Z.Messages.OPT_IN_CHANNEL_NOTICE
                }),
                (0, i.jsxs)(r.Button, {
                    size: r.Button.Sizes.TINY,
                    className: m.chatHeaderBarButton,
                    innerClassName: m.chatHeaderBarButtonInner,
                    color: r.Button.Colors.BRAND,
                    onClick: () => {
                        c.default.track(d.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.hH)(t.getGuildId()),
                            ...(0, o.v_)(t),
                            banner_type: 'channel_opt_in',
                            cta_type: 'add channel'
                        }),
                            (0, u.XQ)(t.guild_id, t.id, !0, { section: d.jXE.CHANNEL });
                    },
                    children: [
                        (0, i.jsx)(r.PlusSmallIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 14,
                            height: 14
                        }),
                        h.Z.Messages.OPT_IN_CHANNEL_NOTICE_CTA
                    ]
                })
            ]
        })
    );
}
