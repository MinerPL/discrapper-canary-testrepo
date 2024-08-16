n.d(t, {
    Q: function () {
        return I;
    }
});
var s = n(735250);
n(470079);
var a = n(740903),
    i = n(426434),
    r = n(112824),
    l = n(181339),
    o = n(195189),
    c = n(616230),
    d = n(3896),
    u = n(981631),
    _ = n(689938);
let I = (e) => ({
    [a.u.CAPTCHA_AND_RAID_PROTECTION]: [
        {
            renderComponent: () => (0, s.jsx)(l.Z, { guild: e }, 'raid-alerts'),
            enabled: !e.hasFeature(u.oNc.RAID_ALERTS_DISABLED)
        },
        {
            renderComponent: () => (0, s.jsx)(o.Z, { title: _.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_CAPTCHA }, 'captcha-suspicious-joins'),
            enabled: !0
        },
        {
            renderComponent: () => (0, s.jsx)(o.Z, { title: _.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_CAPTCH_RAID }, 'captcha-raid-joins'),
            enabled: !0
        }
    ],
    [a.u.DM_AND_SPAM_PROTECTION]: [
        {
            renderComponent: () => (0, s.jsx)(d.Z, { guild: e }, 'verification-level'),
            enabled: !0
        },
        {
            renderComponent: () => (0, s.jsx)(c.Z, { guild: e }, 'member-verification'),
            enabled: e.hasVerificationGate()
        },
        {
            renderComponent: () =>
                (0, s.jsx)(
                    o.Z,
                    {
                        title: _.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_DMS,
                        details: _.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_DMS_DESCRIPTION
                    },
                    'hide-suspicious-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () =>
                (0, s.jsx)(
                    o.Z,
                    {
                        title: _.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_NON_FRIENDS,
                        details: _.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_NON_FRIENDS_DESCRIPTION
                    },
                    'filter-unknown-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () => (0, s.jsx)(o.Z, { title: _.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_LINKS }, 'outbound-links-warn'),
            enabled: !0
        },
        {
            renderComponent: () => (0, s.jsx)(o.Z, { title: _.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_SUSPCIOUS_MESSAGES }, 'delete-spam'),
            enabled: !0
        }
    ],
    [a.u.PERMISSIONS]: [
        {
            renderComponent: () => (0, s.jsx)(i.Z, { guild: e }, 'guild-mfa'),
            enabled: e.mfaLevel === u.BpS.ELEVATED
        },
        {
            renderComponent: () => (0, s.jsx)(r.Z, { guild: e }, 'disable-risky-perms'),
            enabled: 0 === (0, r.R)(e).length
        }
    ]
});
