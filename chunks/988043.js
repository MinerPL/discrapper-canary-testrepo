t.d(s, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(430824),
    o = t(626135),
    l = t(709054),
    c = t(88658),
    d = t(695346),
    _ = t(838436),
    u = t(51331),
    E = t(922628),
    T = t(726985),
    S = t(736530),
    I = t(981631),
    N = t(689938);
function m(e) {
    let { guildId: s, isHubGuild: t } = e,
        m = d.h2.useSetting().includes(s),
        [C, A] = a.useState(d.iG.useSetting()),
        g = a.useCallback(
            (e) => {
                let t = new Set((0, c.YK)());
                e ? t.delete(s) : t.add(s), d.h2.updateSetting(Array.from(t));
            },
            [s]
        );
    function h(e, s) {
        o.default.track(I.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    let O = (e) => {
        (0, E.V)({
            header: N.Z.Messages.USER_DM_SETTINGS_TITLE,
            body: N.Z.Messages.USER_DM_SETTINGS_DESCRIPTION,
            confirmText: N.Z.Messages.NO_TEXT,
            cancelText: N.Z.Messages.YES_TEXT,
            confirmButtonColor: i.Button.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), h(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? l.default.keys(r.Z.getGuilds()) : []), h(e, !0);
            }
        });
    };
    return (0, n.jsx)(_.U, {
        setting: T.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            s === S.T
                ? (0, n.jsx)(u.Z, {
                      title: N.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE,
                      note: N.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_GLOBAL_NOTE,
                      value: !C,
                      onChange: (e) => {
                          A(!e), O(!e);
                      }
                  })
                : (0, n.jsx)(u.Z, {
                      title: N.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE,
                      note: t ? N.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : N.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
                      value: !m,
                      onChange: g
                  })
    });
}
