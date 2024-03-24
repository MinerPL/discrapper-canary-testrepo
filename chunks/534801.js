"use strict";
n.r(t), n.d(t, {
  QuestContentImpressionTracker: function() {
    return g
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("748820"),
  s = n("432710"),
  u = n("446674"),
  o = n("811425"),
  a = n("84339"),
  d = n("155084"),
  c = n("471671"),
  f = n("815496"),
  S = n("188649"),
  E = n("2973"),
  h = n("49111");
class _ {
  constructor(e, t) {
    var n = this;
    this.onMinViewTimeReached = () => {
      this.questIds.forEach(e => {
        (0, f.trackQuestEvent)(e, h.AnalyticEvents.QUEST_CONTENT_VIEWED, {
          min_view_time_seconds: this.minViewTimeSecond,
          min_viewport_percentage: this.minViewportPercentage,
          ...this.commonProperties(e)
        })
      })
    }, this.heartbeat = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      n.questIds.forEach(t => {
        null != n.lastBeatTime && (0, f.trackQuestEvent)(t, h.AnalyticEvents.QUEST_CONTENT_VIEW_TIME, {
          is_termination_beat: e,
          viewed_time_ms: Date.now() - n.lastBeatTime,
          ...n.commonProperties(t)
        })
      }), n.lastBeatTime = Date.now()
    }, this.commonProperties = e => ({
      impression_id: this.id,
      quest_status: (0, f.getQuestStatus)(E.default.quests.get(e)),
      ...(0, f.getContentProperties)(this.questContent)
    }), this.start = () => {
      this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = setInterval(() => this.heartbeat(), 6e4), this.minViewTimeReachedTimeout = setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSecond), this.questIds.forEach(e => {
        (0, f.trackQuestEvent)(e, h.AnalyticEvents.QUEST_CONTENT_LOADED, this.commonProperties(e))
      }), (0, S.isEligibleForQuestsClientMonitoring)("QuestImpressionTracker") && d.default.increment({
        name: s.MetricEvents.QUEST_CONTENT_IMPRESSION,
        tags: ["quest_content:".concat((0, f.getQuestContentName)(this.questContent))]
      })
    }, this.stop = function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      e && n.heartbeat(!0), n.lastBeatTime = void 0, clearInterval(n.beatTimeout), clearTimeout(n.minViewTimeReachedTimeout)
    }, this.id = (0, l.v4)(), this.questContent = t, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.questIds = Array.isArray(e) ? e : [e]
  }
}

function g(e) {
  let t = Array.isArray(e.questId) ? e.questId.sort().join("_") : e.questId;
  return (0, i.jsx)(p, {
    ...e
  }, "".concat(t, "_").concat(e.questContent))
}

function p(e) {
  var t;
  let n = (0, u.useStateFromStores)([c.default], () => c.default.isFocused()),
    l = n !== (0, a.default)(n),
    [s, d] = r.useState(!1),
    f = null !== (t = e.overrideVisibility) && void 0 !== t ? t : s,
    S = f !== (0, a.default)(f),
    E = r.useRef(null),
    h = (0, o.useIsVisible)(e => d(e), .5);
  return r.useEffect(() => () => {
    null != E.current && E.current.stop()
  }, []), r.useEffect(() => {
    let t = S && f || l && n && f,
      i = S && !f || l && !n;
    (t || i) && null != E.current && E.current.stop(), t && (E.current = new _(e.questId, e.questContent), E.current.start())
  }, [n, f, E, l, S, e.questId, e.questContent]), (0, i.jsx)(i.Fragment, {
    children: e.children(h)
  })
}