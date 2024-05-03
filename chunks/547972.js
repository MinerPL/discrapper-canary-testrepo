"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("230711"),
  n = s("202527"),
  i = s("332325"),
  r = s("981631");

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      shouldMergeGameSettings: s
    } = n.GameSettingsMergeExperiment.getCurrentConfig({
      location: "navigator"
    }, {
      autoTrackExposure: !1
    });
  s ? a.default.open(r.UserSettingsSections.GAMES, e, t) : a.default.open(function(e) {
    switch (e) {
      case i.GameSettingsTab.MY_GAMES:
        return r.UserSettingsSections.REGISTERED_GAMES;
      case i.GameSettingsTab.CLIPS:
        return r.UserSettingsSections.CLIPS;
      case i.GameSettingsTab.OVERLAY:
        return r.UserSettingsSections.OVERLAY;
      case i.GameSettingsTab.ACTIVITY_PRIVACY:
        return r.UserSettingsSections.ACTIVITY_PRIVACY
    }
  }(e), null, t)
}