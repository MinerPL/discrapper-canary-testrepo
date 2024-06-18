"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(812206),
  o = n(569545),
  a = n(687516),
  l = n(981283),
  u = n(928518),
  _ = n(314897),
  d = n(592125),
  c = n(158776),
  E = n(19780),
  I = n(959457),
  T = n(178635),
  h = n(531578),
  S = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class N extends T.Z {
  _initialize() {
    l.Z.init()
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
      STREAM_CLOSE: e => this.handleStreamClose(e),
      VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
      EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
      IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e)
    }), f(this, "handleVoiceChannelFeedback", e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(h.nw.VOICE, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("821")]).then(n.bind(n, 988645));
          return n => (0, i.jsx)(e, {
            ...n,
            analyticsData: t
          })
        })
      })
    }), f(this, "handleStreamClose", e => {
      var t;
      let {
        streamKey: s,
        canShowFeedback: l
      } = e, u = (0, o.my)(s), d = (0, a.L2)(u, c.Z), E = null !== (t = I.Z.getVideoStats(s)) && void 0 !== t ? t : {}, T = {
        media_session_id: I.Z.getMediaSessionId(s),
        rtc_connection_id: I.Z.getRtcConnectionId(s),
        stream_region: I.Z.getRegion(s),
        max_viewers: I.Z.getMaxViewers(s),
        ...E
      };
      l && this.possiblyShowFeedbackModal(h.nw.STREAM, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96307")]).then(n.bind(n, 142402));
          return t => (0, i.jsx)(e, {
            stream: u,
            streamApplication: d,
            isStreamer: u.ownerId === _.default.getId(),
            ...t,
            analyticsData: T
          })
        })
      })
    }), f(this, "handleVideoBackgroundShowFeedback", e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(h.nw.VIDEO_BACKGROUND, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("67920")]).then(n.bind(n, 801320));
          return n => (0, i.jsx)(e, {
            ...n,
            analyticsData: t
          })
        })
      })
    }), f(this, "handleActivityClose", e => {
      let {
        applicationId: t,
        channelId: o,
        showFeedback: a
      } = e, l = s.Z.getApplication(t), _ = d.Z.getChannel(o), c = {
        rtc_connection_id: E.Z.getRTCConnectionId(),
        media_session_id: E.Z.getMediaSessionId()
      }, I = u.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
      null != l && null != _ && a && this.possiblyShowFeedbackModal(h.nw.ACTIVITY, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("32627")]).then(n.bind(n, 450634));
          return t => (0, i.jsx)(e, {
            ...t,
            activityApplication: l,
            channel: _,
            analyticsData: c
          })
        }, {
          contextKey: I
        })
      })
    }), f(this, "handleInAppReportsFeedback", e => {
      let {
        reportId: t,
        reportType: s
      } = e;
      this.possiblyShowFeedbackModal(h.nw.IN_APP_REPORTS, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("77927")]).then(n.bind(n, 442173));
          return n => (0, i.jsx)(e, {
            ...n,
            reportId: t,
            reportType: s
          })
        })
      })
    })
  }
}
t.Z = new N