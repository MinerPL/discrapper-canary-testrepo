n.d(t, {
    B5: function () {
        return p;
    },
    PI: function () {
        return f;
    },
    ui: function () {
        return m;
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
let f = 0.5;
class h {
    constructor({ questOrQuests: e, questContent: t, triggeredByStatusChange: n, trackGuildAndChannelMetadata: r, questContentPosition: i, questContentRowIndex: o }) {
        var p = this;
        E(this, 'id', void 0),
            E(this, 'quests', void 0),
            E(this, 'questContent', void 0),
            E(this, 'triggeredByStatusChange', void 0),
            E(this, 'trackGuildAndChannelMetadata', void 0),
            E(this, 'questContentPosition', void 0),
            E(this, 'questContentRowIndex', void 0),
            E(this, 'heartbeatTimeoutId', void 0),
            E(this, 'lastBeatTime', void 0),
            E(this, 'minViewTimeReachedTimeoutId', void 0),
            E(this, 'minViewTimeSeconds', void 0),
            E(this, 'minViewportPercentage', void 0),
            E(this, 'isRunning', !1),
            E(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, d.T)().info(''.concat(e.config.messages.questName, ' Quest viewed for at least ').concat(this.minViewTimeSeconds, 's'), { impressionId: this.id }),
                        (0, u.dA)({
                            questId: e.id,
                            event: _.rMx.QUEST_CONTENT_VIEWED,
                            properties: {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange,
                                ...this.commonProperties(e)
                            },
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                        });
                });
            }),
            E(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                p.quests.forEach((t) => {
                    if (null != p.lastBeatTime) {
                        let n = Math.round(Date.now() - p.lastBeatTime);
                        (0, d.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: p.id }
                        ),
                            (0, u.dA)({
                                questId: t.id,
                                event: _.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: {
                                    is_termination_beat: e,
                                    viewed_time_ms: n,
                                    triggered_by_status_change: p.triggeredByStatusChange,
                                    ...p.commonProperties(t)
                                },
                                trackGuildAndChannelMetadata: p.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (p.lastBeatTime = Date.now());
            }),
            E(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                quest_status: (0, u.uk)(e),
                ...(0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            E(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new h({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t
                    })
                );
            }),
            E(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 60000)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, d.T)().info(''.concat(e.config.messages.questName, ' Quest became visible'), { impressionId: this.id }),
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
                        }),
                    (this.isRunning = !0);
            }),
            E(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && p.beat(!0), (p.lastBeatTime = void 0), clearInterval(p.heartbeatTimeoutId), clearTimeout(p.minViewTimeReachedTimeoutId), (p.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = 1),
            (this.minViewportPercentage = f),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = o);
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
    I = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, o.Z)(t);
        return t !== n;
    };
function m(e) {
    let { visible: t, visibleChanged: n, reference: a, focused: s, focusedChanged: o, impression: l } = e,
        u = I(e.questOrQuests);
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
