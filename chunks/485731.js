let r;
var i,
    a = n(442837),
    s = n(570140),
    o = n(314897),
    l = n(979651),
    u = n(1163);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {
        hqStreamingFrameAnimationPlayed: !1,
        hqStreamingPopoutDismissed: !1,
        hqStreamingOptInPopoutDismissedCount: 0,
        hqStreamingOptInPopoutDismissed: !1,
        hqStreamingIsEnabled: !1,
        hqStreamingDidEnable: !1
    },
    _ = !1,
    E = d;
function f(e) {
    E = {
        ...E,
        ...(null == e ? void 0 : e(E))
    };
}
function h() {
    r = u.Z.getCurrentConfig({ location: 'handleExperimentFetch' }, { autoTrackExposure: !1 });
}
class p extends (i = a.ZP.PersistedStore) {
    getState() {
        return E;
    }
    shouldShowOptInPopout() {
        return _;
    }
    initialize(e) {
        null != e && (E = e);
    }
}
c(p, 'displayName', 'PerksDemosUIState'),
    c(p, 'persistKey', 'PerksDemosUIState'),
    (t.Z = new p(s.Z, {
        PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED: function () {
            f(() => ({ hqStreamingFrameAnimationPlayed: !0 }));
        },
        PREMIUM_PERKS_DEMO_POPOUT_DISMISSED: function () {
            f(() => ({ hqStreamingPopoutDismissed: !0 }));
        },
        PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED: function () {
            !E.hqStreamingOptInPopoutDismissed &&
                f((e) => ({
                    hqStreamingOptInPopoutDismissedCount: e.hqStreamingOptInPopoutDismissedCount + 1,
                    hqStreamingOptInPopoutDismissed: !0
                }));
        },
        PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW: function (e) {
            let { shouldShow: t } = e,
                n = null != r && r.extendedOptInDuration ? 5 : 1;
            _ = t && E.hqStreamingOptInPopoutDismissedCount < n;
        },
        PREMIUM_PERKS_DEMO_ENABLED: function (e) {
            let { enabled: t } = e;
            f((e) => ({
                hqStreamingIsEnabled: t,
                hqStreamingDidEnable: t || e.hqStreamingDidEnable
            }));
        },
        PREMIUM_PERKS_DEMO_UI_RESET: function () {
            f(() => d);
        },
        VOICE_STATE_UPDATES: function () {
            if (null == l.Z.getVoiceStateForUser(o.default.getId()))
                f(() => ({
                    hqStreamingOptInPopoutDismissed: !1,
                    hqStreamingFrameAnimationPlayed: !1
                }));
        },
        CONNECTION_OPEN: h,
        EXPERIMENTS_FETCH_SUCCESS: h,
        EXPERIMENT_OVERRIDE_BUCKET: h
    }));
