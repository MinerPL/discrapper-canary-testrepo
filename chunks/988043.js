t.d(s, {
    Z: function () {
        return C;
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
    _ = t(639814),
    u = t(838436),
    E = t(51331),
    T = t(922628),
    S = t(726985),
    I = t(736530),
    N = t(981631),
    A = t(689938);
function C() {
    let e = (0, _.is)(),
        s = (0, _.c_)(),
        t = d.h2.useSetting().includes(e),
        C = d.iG.useSetting(),
        m = a.useCallback(
            (s) => {
                let t = new Set((0, c.YK)());
                s ? t.delete(e) : t.add(e), d.h2.updateSetting(Array.from(t));
            },
            [e]
        );
    function g(e, s) {
        o.default.track(N.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    let h = (e) => {
        (0, T.V)({
            header: A.Z.Messages.USER_DM_SETTINGS_TITLE,
            body: A.Z.Messages.USER_DM_SETTINGS_DESCRIPTION,
            confirmText: A.Z.Messages.NO_TEXT,
            cancelText: A.Z.Messages.YES_TEXT,
            confirmButtonColor: i.Button.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), g(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? l.default.keys(r.Z.getGuilds()) : []), g(e, !0);
            }
        });
    };
    return (0, n.jsx)(u.U, {
        setting: S.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            e === I.T
                ? (0, n.jsx)(E.Z, {
                      title: A.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE,
                      note: A.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_GLOBAL_NOTE,
                      value: !C,
                      onChange: (e) => {
                          h(!e);
                      }
                  })
                : (0, n.jsx)(E.Z, {
                      title: A.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE,
                      note: s ? A.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : A.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
                      value: !t,
                      onChange: m
                  })
    });
}
