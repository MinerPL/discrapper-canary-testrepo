var r,
    i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(433517),
    f = n(570140);
n(541049);
var _ = n(874893),
    h = n(981631),
    p = n(957825);
function m(e, t, n) {
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
((r = a || (a = {})).DATA_SAVER = 'data_saver'), (r.STANDARD = 'standard'), (r.BEST = 'best'), ((i = s || (s = {})).VERY_LOW = 'very_low'), (i.LOW = 'low'), (i.MEDIUM = 'medium'), (i.HIGH = 'high'), (i.VERY_HIGH = 'very_high');
let g = (window.innerWidth - h.PrS) / 2,
    E = null,
    v = {};
class I extends (o = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        v = null != e ? e : {};
        v.darkSidebar =
            null !== (t = v.darkSidebar) && void 0 !== t
                ? t
                : (function () {
                      var e;
                      let t = c.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
                      return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
                  })();
    }
    getUserAgnosticState() {
        return v;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = v.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = v.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = v.videoUploadQuality) && void 0 !== e ? e : 'standard';
    }
    get dataSavingMode() {
        var e, t;
        return null !== (t = null !== (e = v.dataSavingMode) && void 0 !== e ? e : v.lowQualityImageMode) && void 0 !== t && t;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = v.expressionPickerWidth) && void 0 !== e ? e : p._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = v.messageRequestSidebarWidth) && void 0 !== e ? e : h.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = v.threadSidebarWidth) && void 0 !== e ? e : h.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = v.postSidebarWidth) && void 0 !== e ? e : g;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = v.callChatSidebarWidth) && void 0 !== e ? e : h.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = v.homeSidebarWidth) && void 0 !== e ? e : (null == E && (E = Math.max((window.innerWidth - h.PrS) * 0.4, h.$Y6)), E);
    }
    get callHeaderHeight() {
        return v.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = v.useSystemTheme) && void 0 !== e ? e : _.K.UNSET;
    }
    get activityPanelHeight() {
        return v.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = v.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = v.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = v.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = v.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = v.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = v.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = v.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = v.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = v.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = v.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = v.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = v.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = v.swipeToReply) && void 0 !== e && e;
    }
}
m(I, 'displayName', 'UnsyncedUserSettingsStore'),
    m(I, 'persistKey', 'UnsyncedUserSettingsStore'),
    m(I, 'migrations', [
        () => {
            let e = d.K.get('UserSettingsStore');
            return d.K.remove('UserSettingsStore'), u().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations');
        }
    ]),
    (t.ZP = new I(f.Z, {
        UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
            v = {
                ...v,
                ...e.settings
            };
        },
        LOGOUT: function () {
            v = {
                useSystemTheme: v.useSystemTheme,
                darkSidebar: v.darkSidebar
            };
        },
        LOGIN_SUCCESS: function () {
            null == v && (v = {});
        },
        REGISTER_SUCCESS: function () {},
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
            return (v.darkSidebar = !v.darkSidebar), !0;
        }
    }));
