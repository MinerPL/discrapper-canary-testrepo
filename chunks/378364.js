"use strict";
n.r(t);
var s = n("318217"),
  a = n("689938"),
  l = n("586393"),
  i = n("464912");
let r = {
  experiment: s.default,
  startTimeMs: 17025768e5,
  endTimeMs: 17042184e5,
  isDesktopOnly: !0,
  ringtone: "call_ringing_snowsgiving",
  getRingtoneSettingsLabel: () => a.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
  appSpinnerSources: {
    webmDark: l,
    webmLight: i
  },
  getLoadingTips: () => []
};
t.default = r