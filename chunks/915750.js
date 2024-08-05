n.d(t, {
  B: function() {
return f;
  },
  u: function() {
return p;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(772848),
  s = n(286379),
  o = n(110924),
  l = n(797614),
  u = n(617136),
  c = n(184309),
  d = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class E {
  constructor({
questOrQuests: e,
questContent: t,
questContentPosition: n,
questContentRowIndex: r,
triggeredByStatusChange: i,
trackGuildAndChannelMetadata: o
  }) {
var E = this;
_(this, 'id', void 0), _(this, 'quests', void 0), _(this, 'questContent', void 0), _(this, 'questContentPosition', void 0), _(this, 'trackGuildAndChannelMetadata', void 0), _(this, 'triggeredByStatusChange', void 0), _(this, 'beatTimeout', void 0), _(this, 'lastBeatTime', void 0), _(this, 'minViewTimeReachedTimeout', void 0), _(this, 'minViewTimeSecond', void 0), _(this, 'minViewportPercentage', void 0), _(this, 'questContentRowIndex', void 0), _(this, 'onMinViewTimeReached', () => {
  this.quests.forEach(e => {
    (0, u.dA)({
      questId: e.id,
      event: d.rMx.QUEST_CONTENT_VIEWED,
      properties: {
        min_view_time_seconds: this.minViewTimeSecond,
        min_viewport_percentage: this.minViewportPercentage,
        triggered_by_status_change: this.triggeredByStatusChange,
        ...this.commonProperties(e)
      },
      trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
    });
  });
}), _(this, 'heartbeat', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  E.quests.forEach(t => {
    null != E.lastBeatTime && (0, u.dA)({
      questId: t.id,
      event: d.rMx.QUEST_CONTENT_VIEW_TIME,
      properties: {
        is_termination_beat: e,
        viewed_time_ms: Date.now() - E.lastBeatTime,
        triggered_by_status_change: E.triggeredByStatusChange,
        ...E.commonProperties(t)
      },
      trackGuildAndChannelMetadata: E.trackGuildAndChannelMetadata
    });
  }), E.lastBeatTime = Date.now();
}), _(this, 'commonProperties', e => ({
  impression_id: this.id,
  quest_status: (0, u.uk)(e),
  ...(0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
})), _(this, 'start', () => {
  this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = window.setInterval(() => this.heartbeat(), 60000), this.minViewTimeReachedTimeout = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSecond), this.quests.forEach(e => {
    (0, u.dA)({
      questId: e.id,
      event: d.rMx.QUEST_CONTENT_LOADED,
      properties: {
        triggered_by_status_change: this.triggeredByStatusChange,
        ...this.commonProperties(e)
      },
      trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
    });
  }), (0, c.a)('QuestImpressionTracker') && l.Z.increment({
    name: s.V.QUEST_CONTENT_IMPRESSION,
    tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
  });
}), _(this, 'stop', function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  e && E.heartbeat(!0), E.lastBeatTime = void 0, clearInterval(E.beatTimeout), clearTimeout(E.minViewTimeReachedTimeout);
}), this.id = (0, a.Z)(), this.questContent = t, this.questContentPosition = n, this.minViewTimeSecond = 1, this.minViewportPercentage = 0.5, this.quests = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = o, this.triggeredByStatusChange = i, this.questContentRowIndex = r;
  }
}
let f = (e, t) => {
let n = Array.isArray(e) ? e.sort().map(e => e.id).join('_') : e.id;
return ''.concat(n, '_').concat(t);
  },
  h = e => {
let t = Array.isArray(e) ? null : (0, u.uk)(e),
  n = (0, o.Z)(t);
return t !== n;
  };

function p(e) {
  let {
visible: t,
visibleChanged: n,
reference: a,
focused: s,
focusedChanged: o,
impression: l
  } = e, u = h(e.questOrQuests);
  return i.useEffect(() => () => {
null != l.current && l.current.stop();
  }, [l]), i.useEffect(() => {
let r = s && t,
  i = (n || o || u) && r,
  a = (n || o) && !r || u;
(i || a) && null != l.current && l.current.stop(), i && (l.current = new E({
  questOrQuests: e.questOrQuests,
  questContent: e.questContent,
  questContentPosition: e.questContentPosition,
  questContentRowIndex: e.questContentRowIndex,
  triggeredByStatusChange: u,
  trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata
}), l.current.start());
  }, [
s,
t,
l,
o,
n,
e.questOrQuests,
e.questContent,
e.questContentPosition,
e.questContentRowIndex,
e.trackGuildAndChannelMetadata,
u
  ]), (0, r.jsx)(r.Fragment, {
children: e.children(a)
  });
}