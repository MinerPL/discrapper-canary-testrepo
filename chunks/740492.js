"use strict";
var i, r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  d = n(433517),
  c = n(570140);
n(541049);
var E = n(874893),
  I = n(981631),
  T = n(957825);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = s || (s = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (r = o || (o = {})).VERY_LOW = "very_low", r.LOW = "low", r.MEDIUM = "medium", r.HIGH = "high", r.VERY_HIGH = "very_high";
let S = (window.innerWidth - I.PrS) / 2,
  f = null,
  N = {};
class A extends(a = _.ZP.DeviceSettingsStore) {
  initialize(e) {
    var t;
    N = null != e ? e : {};
    N.darkSidebar = null !== (t = N.darkSidebar) && void 0 !== t ? t : function() {
      var e;
      let t = _.ZP.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
      return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
    }()
  }
  getUserAgnosticState() {
    return N
  }
  get displayCompactAvatars() {
    var e;
    return null !== (e = N.displayCompactAvatars) && void 0 !== e && e
  }
  get lowQualityImageMode() {
    var e;
    return null !== (e = N.lowQualityImageMode) && void 0 !== e && e
  }
  get videoUploadQuality() {
    var e;
    return null !== (e = N.videoUploadQuality) && void 0 !== e ? e : "standard"
  }
  get dataSavingMode() {
    var e, t;
    return null !== (t = null !== (e = N.dataSavingMode) && void 0 !== e ? e : N.lowQualityImageMode) && void 0 !== t && t
  }
  get expressionPickerWidth() {
    var e;
    return null !== (e = N.expressionPickerWidth) && void 0 !== e ? e : T._j.MIN
  }
  get messageRequestSidebarWidth() {
    var e;
    return null !== (e = N.messageRequestSidebarWidth) && void 0 !== e ? e : I.R7I
  }
  get threadSidebarWidth() {
    var e;
    return null !== (e = N.threadSidebarWidth) && void 0 !== e ? e : I.$Y6
  }
  get postSidebarWidth() {
    var e;
    return null !== (e = N.postSidebarWidth) && void 0 !== e ? e : S
  }
  get callChatSidebarWidth() {
    var e;
    return null !== (e = N.callChatSidebarWidth) && void 0 !== e ? e : I.$Y6
  }
  get homeSidebarWidth() {
    var e;
    return null !== (e = N.homeSidebarWidth) && void 0 !== e ? e : (null == f && (f = Math.max((window.innerWidth - I.PrS) * .4, I.$Y6)), f)
  }
  get callHeaderHeight() {
    return N.callHeaderHeight
  }
  get useSystemTheme() {
    var e;
    return null !== (e = N.useSystemTheme) && void 0 !== e ? e : E.K.UNSET
  }
  get activityPanelHeight() {
    return N.activityPanelHeight
  }
  get disableVoiceChannelChangeAlert() {
    var e;
    return null !== (e = N.disableVoiceChannelChangeAlert) && void 0 !== e && e
  }
  get disableEmbeddedActivityPopOutAlert() {
    var e;
    return null !== (e = N.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
  }
  get disableActivityHardwareAccelerationPrompt() {
    var e;
    return null !== (e = N.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
  }
  get disableInviteWithTextChannelActivityLaunch() {
    var e;
    return null !== (e = N.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
    var e;
    return null !== (e = N.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
  }
  get pushUpsellUserSettingsDismissed() {
    var e;
    return null !== (e = N.pushUpsellDismissed) && void 0 !== e && e
  }
  get disableActivityHostLeftNitroUpsell() {
    var e;
    return null !== (e = N.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
  }
  get disableCallUserConfirmationPrompt() {
    var e;
    return null !== (e = N.disableCallUserConfirmationPrompt) && void 0 !== e && e
  }
  get disableApplicationSubscriptionCancellationSurvey() {
    var e;
    return null !== (e = N.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
  }
  get enableAndroidChatListAnimations() {
    var e;
    return null !== (e = N.enableAndroidChatListAnimations) && void 0 !== e && e
  }
  get darkSidebar() {
    var e;
    return null !== (e = N.darkSidebar) && void 0 !== e && e
  }
  get useMobileChatCustomRenderer() {
    var e;
    return null !== (e = N.useMobileChatCustomRenderer) && void 0 !== e && e
  }
  get saveCameraUploadsToDevice() {
    var e;
    return null === (e = N.saveCameraUploadsToDevice) || void 0 === e || e
  }
  get swipeToReply() {
    var e;
    return null !== (e = N.swipeToReply) && void 0 !== e && e
  }
}
h(A, "displayName", "UnsyncedUserSettingsStore"), h(A, "persistKey", "UnsyncedUserSettingsStore"), h(A, "migrations", [() => {
  let e = d.K.get("UserSettingsStore");
  return d.K.remove("UserSettingsStore"), u().pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
}]), t.ZP = new A(c.Z, {
  UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
    N = {
      ...N,
      ...e.settings
    }
  },
  LOGOUT: function() {
    N = {
      useSystemTheme: N.useSystemTheme,
      darkSidebar: N.darkSidebar
    }
  },
  LOGIN_SUCCESS: function() {
    null == N && (N = {})
  },
  REGISTER_SUCCESS: function() {},
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return N.darkSidebar = !N.darkSidebar, !0
  }
})