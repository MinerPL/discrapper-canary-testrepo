var s,
    a,
    i,
    r,
    l = n(442837),
    o = n(570140),
    c = n(999382),
    d = n(740903),
    u = n(981631);
let _ = d.u.OVERVIEW,
    I = null;
function E(e) {
    let { subsection: t } = e;
    switch (t) {
        case u.KsC.SAFETY_AUTOMOD:
            _ = d.u.AUTOMOD;
            break;
        case u.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
            _ = d.u.DM_AND_SPAM_PROTECTION;
            break;
        case u.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            _ = d.u.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case u.KsC.SAFETY_PERMISSIONS:
            _ = d.u.PERMISSIONS;
            break;
        case u.KsC.SAFETY_OVERVIEW:
        default:
            _ = d.u.OVERVIEW;
    }
}
class T extends (r = l.ZP.Store) {
    getCurrentPage() {
        return _;
    }
}
(i = 'GuildSettingsSafetyStore'),
    (a = 'displayName') in (s = T)
        ? Object.defineProperty(s, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = i),
    (t.Z = new T(o.Z, {
        GUILD_SETTINGS_INIT: function () {
            if (c.Z.getGuildId() === I) return !1;
            I = c.Z.getGuildId();
        },
        GUILD_SETTINGS_SET_SECTION: E,
        GUILD_SETTINGS_SAFETY_SET_SUBSECTION: E,
        GUILD_SETTINGS_SAFETY_PAGE: function (e) {
            let { page: t } = e;
            _ = t;
        }
    }));
