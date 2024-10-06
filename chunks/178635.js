n.d(t, {
    R: function () {
        return f;
    },
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(433517),
    s = n(147913),
    o = n(536442),
    l = n(810788),
    u = n(19780),
    c = n(115470),
    d = n(531578);
function _(e, t, n) {
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
let E = {
        chance: 0.2,
        cooldown: 86400000
    },
    f = {
        [d.nw.VOICE]: {
            ...E,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            eligibilityChecks: [
                function (e) {
                    return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant();
                }
            ]
        },
        [d.nw.STREAM]: {
            ...E,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback'
        },
        [d.nw.VIDEO_BACKGROUND]: {
            ...E,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback'
        },
        [d.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback'
        },
        [d.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback'
        },
        [d.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            hotspot: o.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute'
        },
        [d.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            hotspot: o.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser'
        }
    };
function h(e) {
    return l.Z.hasHotspot(e.hotspot);
}
function p(e) {
    return Math.random() < e.chance;
}
function I(e) {
    if (null != e.storageKey) {
        let t = a.K.get(e.storageKey);
        if (null != t && Date.now() - t < e.cooldown) return !1;
    }
    return !0;
}
class m extends s.Z {
    possiblyShowFeedbackModal(e, t) {
        if (
            !!(function (e) {
                var t, n;
                if (__OVERLAY__) return !1;
                let r = null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t ? t : f[e],
                    i = null !== (n = r.eligibilityChecks) && void 0 !== n ? n : [];
                return [I, p, h].every((e) => e(r)) && i.every((e) => e(r));
            })(e) &&
            (null == this.feedbackTypeToShow || !(d.b5[this.feedbackTypeToShow] < d.b5[e]))
        )
            (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t);
    }
    constructor(...e) {
        super(...e),
            _(this, 'feedbackTypeToShow', null),
            _(
                this,
                'showFeedbackModalDebounced',
                i().debounce((e) => {
                    null != this.feedbackTypeToShow &&
                        (!(function (e) {
                            let t = f[e];
                            null != t.storageKey && a.K.set(t.storageKey, Date.now());
                        })(this.feedbackTypeToShow),
                        (this.feedbackTypeToShow = null),
                        e());
                }, 200)
            );
    }
}
