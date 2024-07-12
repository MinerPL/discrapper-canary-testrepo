var r, i, a, o, s, l = n(392711),
  u = n.n(l),
  c = n(442837),
  d = n(433517),
  _ = n(570140);
n(541049);
var E = n(874893),
  f = n(981631),
  h = n(957825);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(r = a || (a = {})).DATA_SAVER = 'data_saver', r.STANDARD = 'standard', r.BEST = 'best', (i = o || (o = {})).VERY_LOW = 'very_low', i.LOW = 'low', i.MEDIUM = 'medium', i.HIGH = 'high', i.VERY_HIGH = 'very_high';
let m = (window.innerWidth - f.PrS) / 2,
  I = null,
  T = {};
class g extends(s = c.ZP.DeviceSettingsStore) {
  initialize(e) {
var t;
T = null != e ? e : {};
T.darkSidebar = null !== (t = T.darkSidebar) && void 0 !== t ? t : function() {
  var e;
  let t = c.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
  return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
}();
  }
  getUserAgnosticState() {
return T;
  }
  get displayCompactAvatars() {
var e;
return null !== (e = T.displayCompactAvatars) && void 0 !== e && e;
  }
  get lowQualityImageMode() {
var e;
return null !== (e = T.lowQualityImageMode) && void 0 !== e && e;
  }
  get videoUploadQuality() {
var e;
return null !== (e = T.videoUploadQuality) && void 0 !== e ? e : 'standard';
  }
  get dataSavingMode() {
var e, t;
return null !== (t = null !== (e = T.dataSavingMode) && void 0 !== e ? e : T.lowQualityImageMode) && void 0 !== t && t;
  }
  get expressionPickerWidth() {
var e;
return null !== (e = T.expressionPickerWidth) && void 0 !== e ? e : h._j.MIN;
  }
  get messageRequestSidebarWidth() {
var e;
return null !== (e = T.messageRequestSidebarWidth) && void 0 !== e ? e : f.R7I;
  }
  get threadSidebarWidth() {
var e;
return null !== (e = T.threadSidebarWidth) && void 0 !== e ? e : f.$Y6;
  }
  get postSidebarWidth() {
var e;
return null !== (e = T.postSidebarWidth) && void 0 !== e ? e : m;
  }
  get callChatSidebarWidth() {
var e;
return null !== (e = T.callChatSidebarWidth) && void 0 !== e ? e : f.$Y6;
  }
  get homeSidebarWidth() {
var e;
return null !== (e = T.homeSidebarWidth) && void 0 !== e ? e : (null == I && (I = Math.max((window.innerWidth - f.PrS) * 0.4, f.$Y6)), I);
  }
  get callHeaderHeight() {
return T.callHeaderHeight;
  }
  get useSystemTheme() {
var e;
return null !== (e = T.useSystemTheme) && void 0 !== e ? e : E.K.UNSET;
  }
  get activityPanelHeight() {
return T.activityPanelHeight;
  }
  get disableVoiceChannelChangeAlert() {
var e;
return null !== (e = T.disableVoiceChannelChangeAlert) && void 0 !== e && e;
  }
  get disableEmbeddedActivityPopOutAlert() {
var e;
return null !== (e = T.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
  }
  get disableActivityHardwareAccelerationPrompt() {
var e;
return null !== (e = T.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
  }
  get disableInviteWithTextChannelActivityLaunch() {
var e;
return null !== (e = T.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
var e;
return null !== (e = T.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
  }
  get pushUpsellUserSettingsDismissed() {
var e;
return null !== (e = T.pushUpsellDismissed) && void 0 !== e && e;
  }
  get disableActivityHostLeftNitroUpsell() {
var e;
return null !== (e = T.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
  }
  get disableCallUserConfirmationPrompt() {
var e;
return null !== (e = T.disableCallUserConfirmationPrompt) && void 0 !== e && e;
  }
  get disableApplicationSubscriptionCancellationSurvey() {
var e;
return null !== (e = T.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
  }
  get enableAndroidChatListAnimations() {
var e;
return null !== (e = T.enableAndroidChatListAnimations) && void 0 !== e && e;
  }
  get darkSidebar() {
var e;
return null !== (e = T.darkSidebar) && void 0 !== e && e;
  }
  get useMobileChatCustomRenderer() {
var e;
return null !== (e = T.useMobileChatCustomRenderer) && void 0 !== e && e;
  }
  get saveCameraUploadsToDevice() {
var e;
return null === (e = T.saveCameraUploadsToDevice) || void 0 === e || e;
  }
  get swipeToReply() {
var e;
return null !== (e = T.swipeToReply) && void 0 !== e && e;
  }
}
p(g, 'displayName', 'UnsyncedUserSettingsStore'), p(g, 'persistKey', 'UnsyncedUserSettingsStore'), p(g, 'migrations', [() => {
  let e = d.K.get('UserSettingsStore');
  return d.K.remove('UserSettingsStore'), u().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations');
}]), t.ZP = new g(_.Z, {
  UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
T = {
  ...T,
  ...e.settings
};
  },
  LOGOUT: function() {
T = {
  useSystemTheme: T.useSystemTheme,
  darkSidebar: T.darkSidebar
};
  },
  LOGIN_SUCCESS: function() {
null == T && (T = {});
  },
  REGISTER_SUCCESS: function() {},
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
return T.darkSidebar = !T.darkSidebar, !0;
  }
});