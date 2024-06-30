n(47120);
var s = n(735250);
n(470079);
var a = n(442837), i = n(481060), r = n(496675), l = n(434404), o = n(845377), c = n(981631), d = n(689938), u = n(298151);
t.Z = e => {
    let {guild: t} = e, n = (0, a.e7)([r.Z], () => r.Z.can(c.Plq.ADMINISTRATOR, t), [t]), _ = t.hasFeature(c.oNc.DISCOVERABLE), E = () => {
            let e = new Set(t.features);
            t.hasFeature(c.oNc.DISCOVERABLE) && e.delete(c.oNc.DISCOVERABLE), l.Z.updateGuild({ features: e });
        };
    return (0, s.jsxs)(i.FormSection, {
        title: d.Z.Messages.DISCOVERY,
        tag: 'h2',
        children: [
            (0, s.jsx)('div', { className: u.background }),
            (0, s.jsxs)('div', {
                className: u.discoverySettings,
                children: [
                    (0, s.jsx)('div', { className: u.image }),
                    (0, s.jsx)(i.Heading, {
                        className: u.header,
                        variant: 'heading-xl/semibold',
                        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED
                    }),
                    (0, s.jsx)(i.Text, {
                        className: u.description,
                        variant: 'text-md/normal',
                        children: d.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED_DESCRIPTION.format()
                    }),
                    (0, s.jsx)(o.Z, {
                        className: u.checklist,
                        guild: t,
                        guildId: t.id,
                        noHeader: !0,
                        failedItemsOnly: !0
                    }),
                    _ && (0, s.jsx)(i.Tooltip, {
                        text: n ? null : d.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
                        children: e => (0, s.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            onClick: E,
                            color: i.Button.Colors.PRIMARY,
                            className: u.disableDiscoveryButton,
                            disabled: !n,
                            ...e,
                            children: d.Z.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE_PERMINENTLY
                        })
                    })
                ]
            })
        ]
    });
};
