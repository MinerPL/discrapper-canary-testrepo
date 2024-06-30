var s, a, i, r, l = n(442837), o = n(570140), c = n(430824), d = n(981631);
let u = {
        description: '',
        channels: [],
        enabled: !1
    }, _ = u, E = !1, I = !1, T = u;
function m(e) {
    let {
            welcomeScreen: t,
            guildId: n
        } = e, s = c.Z.getGuild(n);
    if (null != t) {
        var a, i;
        T = _ = {
            description: null !== (a = t.description) && void 0 !== a ? a : '',
            channels: null !== (i = t.welcome_channels) && void 0 !== i ? i : [],
            enabled: null == s ? void 0 : s.hasFeature(d.oNc.WELCOME_SCREEN_ENABLED)
        };
    } else
        T = _ = u;
    I = !1;
}
class N extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    get() {
        return T;
    }
    showNotice() {
        return I;
    }
    getSettingsProps() {
        return {
            submitting: E,
            hasErrors: I,
            welcomeSettings: T,
            originalWelcomeSettings: _
        };
    }
}
i = 'WelcomeScreenSettingsStore', (a = 'displayName') in (s = N) ? Object.defineProperty(s, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[a] = i, t.Z = new N(o.Z, {
    WELCOME_SCREEN_FETCH_SUCCESS: m,
    WELCOME_SCREEN_UPDATE: m,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        T = _, I = !1;
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        T = u, _ = u;
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let {settings: t} = e;
        T = {
            ...T,
            ...t
        };
    },
    WELCOME_SCREEN_SUBMIT: function () {
        E = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        m(e), E = !1;
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        I = !0, E = !1;
    }
});
