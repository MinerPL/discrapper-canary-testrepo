n.d(t, {
    Z: function () {
        return E;
    }
});
var s = n(735250);
n(470079);
var a = n(442837), i = n(481060), r = n(933557), l = n(592125), o = n(699516), c = n(594174), d = n(556012), u = n(689938), _ = n(716054);
function E(e) {
    var t;
    let {
            action: n,
            triggerType: E,
            toggled: I,
            onToggleAction: T
        } = e, m = e => () => T(e), N = (0, d.c)(n.type, n, E), S = null === (t = n.metadata) || void 0 === t ? void 0 : t.channelId, h = (0, a.e7)([
            c.default,
            o.Z,
            l.Z
        ], () => {
            let e = l.Z.getChannel(S);
            return null == e ? null : (0, r.F6)(e, c.default, o.Z);
        }, [S]);
    if (null == N)
        return null;
    let {
        headerText: g,
        descriptionText: C,
        icon: x
    } = N;
    return (0, s.jsxs)('div', {
        className: _.actionContainer,
        children: [
            (0, s.jsx)('div', {
                className: _.actionIconContainer,
                children: (0, s.jsx)(x, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.actionIcon
                })
            }),
            (0, s.jsxs)('div', {
                className: _.actionTextContainer,
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-sm/semibold',
                        children: g
                    }),
                    (0, s.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: C
                    }),
                    I && (0, s.jsxs)(i.Text, {
                        color: 'text-muted',
                        variant: 'text-xs/medium',
                        children: [
                            null != h && u.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_EDIT_HELPER.format({ channelName: h }),
                            (0, s.jsx)(i.Clickable, {
                                onClick: m(!0),
                                className: _.editChannel,
                                tag: 'span',
                                role: 'link',
                                children: u.Z.Messages.EDIT_CHANNEL
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                children: (0, s.jsx)(i.Checkbox, {
                    type: i.Checkbox.Types.INVERTED,
                    value: I,
                    onChange: m(!1),
                    className: _.__invalid_actionCheckbox
                })
            })
        ]
    });
}
