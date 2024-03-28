"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("570140"),
  l = n("317770"),
  i = n("663993"),
  r = n("788983"),
  o = n("981631");
n("299552");
let u = (0, i.makeLazy)({
    createPromise: () => n.e("58621").then(n.bind(n, "223455")),
    webpackId: "223455",
    name: "PopoutWindowChannelCall"
  }),
  d = (0, i.makeLazy)({
    createPromise: () => n.e("91032").then(n.bind(n, "432472")),
    webpackId: "432472",
    name: "PopoutWindowStageChannelCall"
  }),
  c = (0, i.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("33053"), n.e("92006")]).then(n.bind(n, "945778")),
    webpackId: "945778",
    name: "PopoutWindowRTCDebug"
  });
class f extends l.default {
  _initialize() {
    s.default.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.default.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  _terminate() {
    s.default.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.default.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    r.open(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, a.jsx)(d, {
      windowKey: e,
      channelId: t.id
    }) : (0, a.jsx)(u, {
      windowKey: e,
      channelId: t.id
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenRTCDebugPopout() {
    r.open(o.PopoutWindowKeys.RTC_DEBUG_POPOUT, e => (0, a.jsx)(c, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
}
t.default = new f