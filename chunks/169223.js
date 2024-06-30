n(47120);
var r = n(735250);
n(470079);
var i = n(481060), a = n(812206), o = n(569545), s = n(687516), l = n(981283), u = n(928518), c = n(314897), d = n(592125), _ = n(158776), E = n(19780), f = n(959457), h = n(178635), p = n(531578), m = n(981631);
function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class T extends h.Z {
    _initialize() {
        l.Z.init();
    }
    constructor(...e) {
        super(...e), I(this, 'actions', {
            VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
            STREAM_CLOSE: e => this.handleStreamClose(e),
            VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
            EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
            IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e)
        }), I(this, 'handleVoiceChannelFeedback', e => {
            let {analyticsData: t} = e;
            this.possiblyShowFeedbackModal(p.nw.VOICE, () => {
                (0, i.openModalLazy)(async () => {
                    let {default: e} = await n.e('96888').then(n.bind(n, 988645));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        analyticsData: t
                    });
                });
            });
        }), I(this, 'handleStreamClose', e => {
            var t;
            let {
                    streamKey: a,
                    canShowFeedback: l
                } = e, u = (0, o.my)(a), d = (0, s.L2)(u, _.Z), E = null !== (t = f.Z.getVideoStats(a)) && void 0 !== t ? t : {}, h = {
                    media_session_id: f.Z.getMediaSessionId(a),
                    rtc_connection_id: f.Z.getRtcConnectionId(a),
                    stream_region: f.Z.getRegion(a),
                    max_viewers: f.Z.getMaxViewers(a),
                    ...E
                };
            l && this.possiblyShowFeedbackModal(p.nw.STREAM, () => {
                (0, i.openModalLazy)(async () => {
                    let {default: e} = await n.e('23657').then(n.bind(n, 142402));
                    return t => (0, r.jsx)(e, {
                        stream: u,
                        streamApplication: d,
                        isStreamer: u.ownerId === c.default.getId(),
                        ...t,
                        analyticsData: h
                    });
                });
            });
        }), I(this, 'handleVideoBackgroundShowFeedback', e => {
            let {analyticsData: t} = e;
            this.possiblyShowFeedbackModal(p.nw.VIDEO_BACKGROUND, () => {
                (0, i.openModalLazy)(async () => {
                    let {default: e} = await n.e('11495').then(n.bind(n, 801320));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        analyticsData: t
                    });
                });
            });
        }), I(this, 'handleActivityClose', e => {
            let {
                    applicationId: t,
                    channelId: o,
                    showFeedback: s
                } = e, l = a.Z.getApplication(t), c = d.Z.getChannel(o), _ = {
                    rtc_connection_id: E.Z.getRTCConnectionId(),
                    media_session_id: E.Z.getMediaSessionId()
                }, f = u.Z.getWindowOpen(m.KJ3.CHANNEL_CALL_POPOUT) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
            null != l && null != c && s && this.possiblyShowFeedbackModal(p.nw.ACTIVITY, () => {
                (0, i.openModalLazy)(async () => {
                    let {default: e} = await n.e('4413').then(n.bind(n, 450634));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        activityApplication: l,
                        channel: c,
                        analyticsData: _
                    });
                }, { contextKey: f });
            });
        }), I(this, 'handleInAppReportsFeedback', e => {
            let {
                reportId: t,
                reportType: a
            } = e;
            this.possiblyShowFeedbackModal(p.nw.IN_APP_REPORTS, () => {
                (0, i.openModalLazy)(async () => {
                    let {default: e} = await n.e('72135').then(n.bind(n, 442173));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        reportId: t,
                        reportType: a
                    });
                });
            });
        });
    }
}
t.Z = new T();
