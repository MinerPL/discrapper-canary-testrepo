n.d(t, {
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
    c = n(531578);
function d(e, t, n) {
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
let _ = {
        chance: 0.2,
        cooldown: 86400000
    },
    E = {
        [c.nw.VOICE]: {
            ..._,
            hotspot: o.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            eligibilityChecks: [
                function (e) {
                    return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant();
                }
            ]
        },
        [c.nw.STREAM]: {
            ..._,
            hotspot: o.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback'
        },
        [c.nw.VIDEO_BACKGROUND]: {
            ..._,
            hotspot: o.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback'
        },
        [c.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            hotspot: o.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback'
        },
        [c.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            hotspot: o.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback'
        }
    };
function f(e) {
    return l.Z.hasHotspot(e.hotspot);
}
function h(e) {
    return Math.random() < e.chance;
}
function p(e) {
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
                var t;
                if (__OVERLAY__) return !1;
                let n = E[e],
                    r = null !== (t = n.eligibilityChecks) && void 0 !== t ? t : [];
                return [p, h, f].every((e) => e(n)) && r.every((e) => e(n));
            })(e) &&
            (null == this.feedbackTypeToShow || !(c.b5[this.feedbackTypeToShow] < c.b5[e]))
        )
            (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t);
    }
    constructor(...e) {
        super(...e),
            d(this, 'feedbackTypeToShow', null),
            d(
                this,
                'showFeedbackModalDebounced',
                i().debounce((e) => {
                    null != this.feedbackTypeToShow &&
                        (!(function (e) {
                            let t = E[e];
                            null != t.storageKey && a.K.set(t.storageKey, Date.now());
                        })(this.feedbackTypeToShow),
                        (this.feedbackTypeToShow = null),
                        e());
                }, 200)
            );
    }
}
