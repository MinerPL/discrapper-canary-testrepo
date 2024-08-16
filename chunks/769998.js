n.d(t, {
    Z: function () {
        return E;
    }
});
var s = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    r = n(430824),
    l = n(496675),
    o = n(556012),
    c = n(273504),
    d = n(981631),
    u = n(590433),
    _ = n(689938),
    I = n(794863);
function E(e) {
    var t;
    let { action: n, triggerType: E, guildId: T, toggled: m, onToggleAction: N } = e,
        S = (e) => () => N(e),
        h = (0, o.c)(n.type, n, E),
        g = null === (t = n.metadata) || void 0 === t ? void 0 : t.durationSeconds,
        C = null != g ? (0, u.L9)(g) : null,
        x = (0, a.e7)([l.Z, r.Z], () => l.Z.can(d.Plq.MODERATE_MEMBERS, r.Z.getGuild(T)), [T]);
    if (null == h) return null;
    let { headerText: p, descriptionText: R, icon: f } = h;
    return (0, s.jsxs)('div', {
        className: I.actionContainer,
        children: [
            (0, s.jsx)('div', {
                className: I.actionIconContainer,
                children: (0, s.jsx)(f, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.actionIcon
                })
            }),
            (0, s.jsxs)('div', {
                className: I.actionTextContainer,
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-sm/semibold',
                        children: p
                    }),
                    (0, s.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: R
                    }),
                    m &&
                        (0, s.jsxs)(i.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/medium',
                            children: [
                                (function (e, t) {
                                    if (null === t) return null;
                                    if (e === c.fX.MENTION_SPAM) return _.Z.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER_MENTION_SPAM.format({ friendlyDurationString: t });
                                    return _.Z.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER.format({ friendlyDurationString: t });
                                })(E, C),
                                x &&
                                    (0, s.jsx)(i.Clickable, {
                                        onClick: S(!0),
                                        className: I.editChannel,
                                        tag: 'span',
                                        role: 'link',
                                        children: _.Z.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_UPDATE_DURATION
                                    })
                            ]
                        })
                ]
            }),
            (0, s.jsx)(i.Tooltip, {
                text: _.Z.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.format(),
                'aria-label': _.Z.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.plainFormat(),
                shouldShow: !x,
                children: (e) =>
                    (0, s.jsx)('div', {
                        ...e,
                        children: (0, s.jsx)(i.Checkbox, {
                            type: i.Checkbox.Types.INVERTED,
                            value: m,
                            onChange: S(!1),
                            disabled: !x,
                            className: I.__invalid_actionCheckbox
                        })
                    })
            })
        ]
    });
}
