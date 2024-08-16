n.d(t, {
    B: function () {
        return p;
    },
    u: function () {
        return I;
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
    d = n(5881),
    _ = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = (0, d.T)();
class h {
    constructor({ questOrQuests: e, questContent: t, questContentPosition: n, questContentRowIndex: r, triggeredByStatusChange: i, trackGuildAndChannelMetadata: o }) {
        var d = this;
        E(this, 'id', void 0),
            E(this, 'quests', void 0),
            E(this, 'questContent', void 0),
            E(this, 'questContentPosition', void 0),
            E(this, 'trackGuildAndChannelMetadata', void 0),
            E(this, 'triggeredByStatusChange', void 0),
            E(this, 'beatTimeout', void 0),
            E(this, 'lastBeatTime', void 0),
            E(this, 'minViewTimeReachedTimeout', void 0),
            E(this, 'minViewTimeSecond', void 0),
            E(this, 'minViewportPercentage', void 0),
            E(this, 'questContentRowIndex', void 0),
            E(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    f.info('trackQuestEvent - '.concat(e.config.messages.questName, ' Quest')),
                        (0, u.dA)({
                            questId: e.id,
                            event: _.rMx.QUEST_CONTENT_VIEWED,
                            properties: {
                                min_view_time_seconds: this.minViewTimeSecond,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange,
                                ...this.commonProperties(e)
                            },
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                        });
                });
            }),
            E(this, 'heartbeat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                d.quests.forEach((t) => {
                    null != d.lastBeatTime &&
                        (0, u.dA)({
                            questId: t.id,
                            event: _.rMx.QUEST_CONTENT_VIEW_TIME,
                            properties: {
                                is_termination_beat: e,
                                viewed_time_ms: Date.now() - d.lastBeatTime,
                                triggered_by_status_change: d.triggeredByStatusChange,
                                ...d.commonProperties(t)
                            },
                            trackGuildAndChannelMetadata: d.trackGuildAndChannelMetadata
                        });
                }),
                    (d.lastBeatTime = Date.now());
            }),
            E(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                quest_status: (0, u.uk)(e),
                ...(0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            E(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.beatTimeout = window.setInterval(() => this.heartbeat(), 60000)),
                    (this.minViewTimeReachedTimeout = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSecond)),
                    this.quests.forEach((e) => {
                        (0, u.dA)({
                            questId: e.id,
                            event: _.rMx.QUEST_CONTENT_LOADED,
                            properties: {
                                triggered_by_status_change: this.triggeredByStatusChange,
                                ...this.commonProperties(e)
                            },
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                        });
                    }),
                    (0, c.a)('QuestImpressionTracker') &&
                        l.Z.increment({
                            name: s.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        });
            }),
            E(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && d.heartbeat(!0), (d.lastBeatTime = void 0), clearInterval(d.beatTimeout), clearTimeout(d.minViewTimeReachedTimeout);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = n),
            (this.minViewTimeSecond = 1),
            (this.minViewportPercentage = 0.5),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = o),
            (this.triggeredByStatusChange = i),
            (this.questContentRowIndex = r);
    }
}
let p = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    m = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, o.Z)(t);
        return t !== n;
    };
function I(e) {
    let { visible: t, visibleChanged: n, reference: a, focused: s, focusedChanged: o, impression: l } = e,
        u = m(e.questOrQuests);
    return (
        i.useEffect(
            () => () => {
                null != l.current && l.current.stop();
            },
            [l]
        ),
        i.useEffect(() => {
            let r = s && t,
                i = (n || o || u) && r,
                a = ((n || o) && !r) || u;
            (i || a) && null != l.current && l.current.stop(),
                i &&
                    ((l.current = new h({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata
                    })),
                    l.current.start());
        }, [s, t, l, o, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u]),
        (0, r.jsx)(r.Fragment, { children: e.children(a) })
    );
}
