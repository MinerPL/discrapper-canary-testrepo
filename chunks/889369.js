t(47120);
var s,
    l,
    a,
    i,
    r = t(392711),
    o = t.n(r),
    c = t(442837),
    d = t(570140),
    I = t(45966),
    N = t(999382),
    _ = t(981631);
let u = !1,
    E = null,
    T = new Set();
function m() {
    (function () {
        (u = !1), (E = null);
    })(),
        null != (E = N.Z.getGuildId()) && N.Z.getSection() === _.pNK.ONBOARDING && (T = new Set(I.Z.getDefaultChannelIds(E)));
}
class O extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, I.Z);
    }
    hasChanges() {
        if (null == E) return !1;
        let e = I.Z.getDefaultChannelIds(E).sort(),
            n = Array.from(T).sort();
        return !o().isEqual(e, n);
    }
    get guildId() {
        return E;
    }
    get submitting() {
        return u;
    }
    get editedDefaultChannelIds() {
        return T;
    }
}
(i = 'GuildSettingsDefaultChannelsStore'),
    (a = 'displayName') in (l = O)
        ? Object.defineProperty(l, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = i),
    (n.Z = new O(d.Z, {
        GUILD_SETTINGS_INIT: m,
        GUILD_SETTINGS_SET_SECTION: m,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
        GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: m,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: m,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
            u = !1;
        },
        GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
            let { channelId: n } = e;
            (T = new Set(T)).has(n) ? T.delete(n) : T.add(n);
        },
        GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
            u = !0;
        }
    }));
