"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("470079"),
  s = n("512722"),
  l = n.n(s),
  i = n("157925"),
  r = n("765305");

function d(e) {
  let {
    stageInstance: t,
    defaultStep: n,
    error: s,
    onSave: d
  } = e, [u, o] = a.useState(n), [c, E] = a.useState(), [f, h] = a.useState(null);
  return a.useEffect(() => {
    null != s && o(i.StartStageSteps.STAGE_CHANNEL_SETTINGS)
  }, [s]), {
    modalStep: u,
    setModalStep: o,
    readySlide: f,
    handleSlideReady: function(e) {
      return h(e)
    },
    savedOptions: c,
    handleSettingsSave: function(e) {
      if (E(e), e.privacyLevel === r.GuildScheduledEventPrivacyLevel.PUBLIC && (null == t ? void 0 : t.privacy_level) !== r.GuildScheduledEventPrivacyLevel.PUBLIC) {
        o(i.StartStageSteps.PUBLIC_STAGE_PREVIEW);
        return
      }
      d(e)
    },
    handleDelayedSave: function() {
      l()(null != c, "Must have some saved options."), d(c)
    }
  }
}