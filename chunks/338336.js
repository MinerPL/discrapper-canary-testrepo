let r, i;
n.d(t, {
    Z: function () {
        return l;
    },
    r: function () {
        return u;
    }
});
var a = n(626135),
    s = n(307320),
    o = n(981631);
function l(e, t, n) {
    let { featureEnabled: l, windowLength: u, allowedPoorFpsRatio: c, fpsThreshold: d, backoffTimeSec: _ } = s.Z.getConfig(!1);
    a.default.track(o.rMx.VIDEO_TOGGLED, {
        video_toggle_reason: t,
        toggled_user_id: e,
        rtc_connection_id: null == r ? void 0 : r(),
        media_session_id: null == i ? void 0 : i(),
        video_health_manager_window_length: l ? u : null,
        video_health_manager_poor_fps_ratio: l ? c : null,
        video_health_manager_fps_threshold: l ? d : null,
        is_video_shown: n,
        video_health_manager_backoff_time_seconds: l ? _ : null
    });
}
function u(e, t) {
    (r = e), (i = t);
}
