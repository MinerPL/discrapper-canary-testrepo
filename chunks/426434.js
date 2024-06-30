n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(735250);
n(470079);
var a = n(392711), i = n(442837), r = n(481060), l = n(230711), o = n(496675), c = n(594174), d = n(434404), u = n(449226), _ = n(981631), E = n(689938), I = n(609191);
function T(e) {
    let t, {guild: n} = e, T = n.mfaLevel, m = (0, i.e7)([o.Z], () => null != n && o.Z.can(_.Plq.MANAGE_GUILD, n), [n]), N = (0, i.e7)([c.default], () => c.default.getCurrentUser()), S = n.isOwner(N), h = null == N ? void 0 : N.mfaEnabled, g = T === _.BpS.ELEVATED, C = S && h, x = (0, a.throttle)(async e => {
            if (!!C)
                await d.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? _.BpS.ELEVATED : _.BpS.NONE,
                    isEnabled: !e
                });
        }, 1000);
    if (!m)
        return null;
    !C && (t = S ? E.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_DETAIL.format({ settingsHook: () => l.Z.open(_.oAB.ACCOUNT) }) : E.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_DETAIL);
    let p = n.hasFeature(_.oNc.DISCOVERABLE);
    return (0, s.jsxs)('div', {
        className: I.simpleItemWrapper,
        children: [
            (0, s.jsxs)('div', {
                className: I.itemContent,
                children: [
                    (0, s.jsx)(r.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: E.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
                    }),
                    (0, s.jsxs)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [
                            E.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_BODY,
                            ' ',
                            t
                        ]
                    })
                ]
            }),
            !C || g && p ? (0, s.jsx)(r.Tooltip, {
                text: p ? E.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_DISCOVERABLE_DISABLED_TOOLTIP : S ? E.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_TOOLTIP : E.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_TOOLTIP,
                children: e => (0, s.jsx)(u.Z, {
                    checked: g,
                    disabled: !0,
                    onChange: x,
                    className: I.bringToFront,
                    tooltipProps: e
                })
            }) : (0, s.jsx)(u.Z, {
                checked: g,
                onChange: x,
                className: I.bringToFront
            })
        ]
    });
}
