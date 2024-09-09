i.d(n, {
    Z: function () {
        return h;
    }
});
var l = i(735250);
i(470079);
var t = i(442837),
    a = i(481060),
    r = i(434404),
    s = i(147754),
    o = i(939863),
    c = i(430824),
    u = i(496675),
    d = i(981631),
    E = i(689938),
    g = i(760480);
function h(e) {
    let { guildId: n, onClose: i } = e,
        { showHubEventsList: h } = s.Z.useExperiment(
            {
                guildId: n,
                location: '6597ca_1'
            },
            { autoTrackExposure: !1 }
        ),
        v = (0, t.e7)(
            [c.Z, u.Z],
            () => {
                let e = c.Z.getGuild(n);
                return u.Z.can(d.Plq.MANAGE_ROLES, e);
            },
            [n]
        ),
        Z = (0, t.e7)(
            [c.Z],
            () => {
                let e = c.Z.getGuild(n);
                return h && (null == e ? void 0 : e.hasFeature(d.oNc.HUB));
            },
            [n, h]
        );
    return (0, l.jsxs)('div', {
        className: g.container,
        children: [
            (0, l.jsx)(o.Z, {
                children: (0, l.jsx)('div', {
                    className: g.circle,
                    children: (0, l.jsx)(a.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: g.icon
                    })
                })
            }),
            (0, l.jsx)(a.Heading, {
                color: 'header-primary',
                variant: 'heading-xl/semibold',
                className: g.title,
                children: Z ? E.Z.Messages.HUB_EVENTS_HEADER_TITLE : E.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
            }),
            (0, l.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: g.subtitle,
                children: Z ? E.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
            }),
            v &&
                (0, l.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: g.roleTip,
                    children: E.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                        onClick: () => {
                            r.Z.open(n, d.pNK.ROLES), i();
                        }
                    })
                })
        ]
    });
}
