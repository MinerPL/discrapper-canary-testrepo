"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var i, s, r, a, o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  d = n("95410"),
  c = n("913144"),
  f = n("116319"),
  _ = n("49111"),
  h = n("13030");
(i = r || (r = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (s = a || (a = {})).VERY_LOW = "very_low", s.LOW = "low", s.MEDIUM = "medium", s.HIGH = "high", s.VERY_HIGH = "very_high";
let g = (window.innerWidth - _.CHANNEL_SIDEBAR_WIDTH) / 2,
  m = null,
  E = {};
class p extends u.default.DeviceSettingsStore {
  initialize(e) {
    var t;
    (E = null != e ? e : {}).darkSidebar = null !== (t = E.darkSidebar) && void 0 !== t ? t : function() {
      var e;
      let t = u.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
      return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
    }()
  }
  getUserAgnosticState() {
    return E
  }
  get displayCompactAvatars() {
    var e;
    return null !== (e = E.displayCompactAvatars) && void 0 !== e && e
  }
  get lowQualityImageMode() {
    var e;
    return null !== (e = E.lowQualityImageMode) && void 0 !== e && e
  }
  get videoUploadQuality() {
    var e;
    return null !== (e = E.videoUploadQuality) && void 0 !== e ? e : "standard"
  }
  get dataSavingMode() {
    var e, t;
    return null !== (t = null !== (e = E.dataSavingMode) && void 0 !== e ? e : E.lowQualityImageMode) && void 0 !== t && t
  }
  get expressionPickerWidth() {
    var e;
    return null !== (e = E.expressionPickerWidth) && void 0 !== e ? e : h.ExpressionPickerWidths.MIN
  }
  get messageRequestSidebarWidth() {
    var e;
    return null !== (e = E.messageRequestSidebarWidth) && void 0 !== e ? e : _.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
  }
  get threadSidebarWidth() {
    var e;
    return null !== (e = E.threadSidebarWidth) && void 0 !== e ? e : _.DEFAULT_CHAT_SIDEBAR_WIDTH
  }
  get postSidebarWidth() {
    var e;
    return null !== (e = E.postSidebarWidth) && void 0 !== e ? e : g
  }
  get callChatSidebarWidth() {
    var e;
    return null !== (e = E.callChatSidebarWidth) && void 0 !== e ? e : _.DEFAULT_CHAT_SIDEBAR_WIDTH
  }
  get homeSidebarWidth() {
    var e;
    return null !== (e = E.homeSidebarWidth) && void 0 !== e ? e : (null == m && (m = Math.max((window.innerWidth - _.CHANNEL_SIDEBAR_WIDTH) * .4, _.DEFAULT_CHAT_SIDEBAR_WIDTH)), m)
  }
  get callHeaderHeight() {
    return E.callHeaderHeight
  }
  get useSystemTheme() {
    var e;
    return null !== (e = E.useSystemTheme) && void 0 !== e ? e : f.SystemThemeState.UNSET
  }
  get activityPanelHeight() {
    return E.activityPanelHeight
  }
  get disableVoiceChannelChangeAlert() {
    var e;
    return null !== (e = E.disableVoiceChannelChangeAlert) && void 0 !== e && e
  }
  get disableEmbeddedActivityPopOutAlert() {
    var e;
    return null !== (e = E.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
  }
  get disableActivityHardwareAccelerationPrompt() {
    var e;
    return null !== (e = E.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
  }
  get disableInviteWithTextChannelActivityLaunch() {
    var e;
    return null !== (e = E.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
    var e;
    return null !== (e = E.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
  }
  get pushUpsellUserSettingsDismissed() {
    var e;
    return null !== (e = E.pushUpsellDismissed) && void 0 !== e && e
  }
  get disableActivityHostLeftNitroUpsell() {
    var e;
    return null !== (e = E.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
  }
  get disableCallUserConfirmationPrompt() {
    var e;
    return null !== (e = E.disableCallUserConfirmationPrompt) && void 0 !== e && e
  }
  get disableApplicationSubscriptionCancellationSurvey() {
    var e;
    return null !== (e = E.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
  }
  get enableAndroidChatListAnimations() {
    var e;
    return null !== (e = E.enableAndroidChatListAnimations) && void 0 !== e && e
  }
  get darkSidebar() {
    var e;
    return null !== (e = E.darkSidebar) && void 0 !== e && e
  }
  get useMobileChatCustomRenderer() {
    var e;
    return null !== (e = E.useMobileChatCustomRenderer) && void 0 !== e && e
  }
  get saveCameraUploadsToDevice() {
    var e;
    return null === (e = E.saveCameraUploadsToDevice) || void 0 === e || e
  }
  get swipeToReply() {
    var e;
    return null !== (e = E.swipeToReply) && void 0 !== e && e
  }
}
p.displayName = "UnsyncedUserSettingsStore", p.persistKey = "UnsyncedUserSettingsStore", p.migrations = [() => {
  let e = d.default.get("UserSettingsStore");
  return d.default.remove("UserSettingsStore"), l.pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
}];
var v = new p(c.default, {
  UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
    E = {
      ...E,
      ...e.settings
    }
  },
  LOGOUT: function() {
    E = {
      useSystemTheme: E.useSystemTheme,
      darkSidebar: E.darkSidebar
    }
  },
  LOGIN_SUCCESS: function() {
    null == E && (E = {})
  },
  REGISTER_SUCCESS: function() {},
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return E.darkSidebar = !E.darkSidebar, !0
  }
})