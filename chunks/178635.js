"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(433517),
  o = n(147913),
  a = n(536442),
  l = n(810788),
  u = n(19780),
  _ = n(531578);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
    chance: .2,
    cooldown: 864e5
  },
  E = {
    [_.nw.VOICE]: {
      ...c,
      hotspot: a.v6.VOICE_CALL_FEEDBACK,
      storageKey: "lastVoiceFeedback",
      eligibilityChecks: [function(e) {
        return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant()
      }]
    },
    [_.nw.STREAM]: {
      ...c,
      hotspot: a.v6.REPORT_PROBLEM_POST_STREAM,
      storageKey: "lastStreamFeedback"
    },
    [_.nw.VIDEO_BACKGROUND]: {
      ...c,
      hotspot: a.v6.VIDEO_BACKGROUND_FEEDBACK,
      storageKey: "lastVideoBackgroundFeedback"
    },
    [_.nw.ACTIVITY]: {
      cooldown: 0,
      chance: .5,
      hotspot: a.v6.POST_ACTIVITY_FEEDBACK,
      storageKey: "lastActivityFeedback"
    },
    [_.nw.IN_APP_REPORTS]: {
      cooldown: 1728e5,
      chance: .5,
      hotspot: a.v6.IN_APP_REPORTS_FEEDBACK,
      storageKey: "inAppReportsFeedback"
    }
  };

function I(e) {
  return l.Z.hasHotspot(e.hotspot)
}

function T(e) {
  return Math.random() < e.chance
}

function h(e) {
  if (null != e.storageKey) {
    let t = s.K.get(e.storageKey);
    if (null != t && Date.now() - t < e.cooldown) return !1
  }
  return !0
}
class S extends o.Z {
  possiblyShowFeedbackModal(e, t) {
    if (!! function(e) {
        var t;
        if (__OVERLAY__) return !1;
        let n = E[e],
          i = null !== (t = n.eligibilityChecks) && void 0 !== t ? t : [];
        return [h, T, I].every(e => e(n)) && i.every(e => e(n))
      }(e) && (null == this.feedbackTypeToShow || !(_.b5[this.feedbackTypeToShow] < _.b5[e]))) this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t)
  }
  constructor(...e) {
    super(...e), d(this, "feedbackTypeToShow", null), d(this, "showFeedbackModalDebounced", r().debounce(e => {
      null != this.feedbackTypeToShow && (! function(e) {
        let t = E[e];
        null != t.storageKey && s.K.set(t.storageKey, Date.now())
      }(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e())
    }, 200))
  }
}