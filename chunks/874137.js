"use strict";
n.r(t), n.d(t, {
  QuestContentImpressionTracker: function() {
    return S
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("153832"),
  s = n("286379"),
  o = n("442837"),
  l = n("434650"),
  u = n("110924"),
  d = n("797614"),
  _ = n("451478"),
  c = n("617136"),
  E = n("184309"),
  I = n("981631");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f {
  constructor(e, t, n, i, r) {
    var o = this;
    T(this, "id", void 0), T(this, "quests", void 0), T(this, "questContent", void 0), T(this, "questContentPosition", void 0), T(this, "trackGuildAndChannelMetadata", void 0), T(this, "triggeredByStatusChange", void 0), T(this, "beatTimeout", void 0), T(this, "lastBeatTime", void 0), T(this, "minViewTimeReachedTimeout", void 0), T(this, "minViewTimeSecond", void 0), T(this, "minViewportPercentage", void 0), T(this, "onMinViewTimeReached", () => {
      this.quests.forEach(e => {
        (0, c.trackQuestEvent)({
          questId: e.id,
          event: I.AnalyticEvents.QUEST_CONTENT_VIEWED,
          properties: {
            min_view_time_seconds: this.minViewTimeSecond,
            min_viewport_percentage: this.minViewportPercentage,
            triggered_by_status_change: this.triggeredByStatusChange,
            ...this.commonProperties(e)
          },
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
        })
      })
    }), T(this, "heartbeat", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      o.quests.forEach(t => {
        null != o.lastBeatTime && (0, c.trackQuestEvent)({
          questId: t.id,
          event: I.AnalyticEvents.QUEST_CONTENT_VIEW_TIME,
          properties: {
            is_termination_beat: e,
            viewed_time_ms: Date.now() - o.lastBeatTime,
            triggered_by_status_change: o.triggeredByStatusChange,
            ...o.commonProperties(t)
          },
          trackGuildAndChannelMetadata: o.trackGuildAndChannelMetadata
        })
      }), o.lastBeatTime = Date.now()
    }), T(this, "commonProperties", e => ({
      impression_id: this.id,
      quest_status: (0, c.getQuestStatus)(e),
      ...(0, c.getContentProperties)(this.questContent, this.questContentPosition)
    })), T(this, "start", () => {
      this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = setInterval(() => this.heartbeat(), 6e4), this.minViewTimeReachedTimeout = setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSecond), this.quests.forEach(e => {
        (0, c.trackQuestEvent)({
          questId: e.id,
          event: I.AnalyticEvents.QUEST_CONTENT_LOADED,
          properties: {
            triggered_by_status_change: this.triggeredByStatusChange,
            ...this.commonProperties(e)
          },
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
        })
      }), (0, E.isEligibleForQuestsClientMonitoring)("QuestImpressionTracker") && d.default.increment({
        name: s.MetricEvents.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, c.getQuestContentName)(this.questContent))]
      })
    }), T(this, "stop", function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      e && o.heartbeat(!0), o.lastBeatTime = void 0, clearInterval(o.beatTimeout), clearTimeout(o.minViewTimeReachedTimeout)
    }), this.id = (0, a.v4)(), this.questContent = t, this.questContentPosition = n, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.quests = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = r, this.triggeredByStatusChange = i
  }
}

function S(e) {
  let t = Array.isArray(e.questOrQuests) ? e.questOrQuests.sort().map(e => e.id).join("_") : e.questOrQuests.id;
  return (0, i.jsx)(h, {
    ...e
  }, "".concat(t, "_").concat(e.questContent))
}

function h(e) {
  var t;
  let n = (0, o.useStateFromStores)([_.default], () => _.default.isFocused()),
    a = n !== (0, u.default)(n),
    [s, d] = r.useState(!1),
    E = null !== (t = e.overrideVisibility) && void 0 !== t ? t : s,
    I = E !== (0, u.default)(E),
    T = Array.isArray(e.questOrQuests) ? null : (0, c.getQuestStatus)(e.questOrQuests),
    S = (0, u.default)(T),
    h = T !== S,
    A = r.useRef(null),
    m = (0, l.useIsVisible)(e => d(e), .5);
  return r.useEffect(() => () => {
    null != A.current && A.current.stop()
  }, []), r.useEffect(() => {
    let t = n && E,
      i = (I || a || h) && t,
      r = (I || a) && !t || h;
    (i || r) && null != A.current && A.current.stop(), i && (A.current = new f(e.questOrQuests, e.questContent, e.questContentPosition, h, e.trackGuildAndChannelMetadata), A.current.start())
  }, [n, E, A, a, I, e.questOrQuests, e.questContent, e.questContentPosition, e.trackGuildAndChannelMetadata, h]), (0, i.jsx)(i.Fragment, {
    children: e.children(m)
  })
}