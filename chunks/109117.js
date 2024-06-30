n.d(t, {
    S1: function () {
        return _;
    }
});
var r = n(268146), i = n(433517), a = n(131951), o = n(594174), s = n(626135), l = n(729345), u = n(981631);
let c = window.DiscordNative, d = ''.concat(u.rMx.APP_NATIVE_CRASH, 'Storage');
async function _() {
    var e;
    if (__OVERLAY__)
        return;
    let t = null == c ? void 0 : null === (e = c.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
    if (null == t) {
        console.log('AppCrashedFatalReport: getLastCrash not supported.');
        return;
    }
    let n = await t(), {
            didCrashReporterSeeCrash: a,
            didCrashOrUncleanExit: o
        } = function (e, t) {
            var n;
            let r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null, i = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null;
            return {
                didCrashReporterSeeCrash: r,
                didCrashOrUncleanExit: r || null != i && 0 !== i
            };
        }(i.K.get(d, {}), n), l = function (e, t, n) {
            var i, a, o, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S, A;
            function N(e) {
                return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
            }
            function v(e) {
                return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
            }
            let O = {
                did_crash: t,
                renderer_crash_reason: null !== (c = null == n ? void 0 : n.rendererCrashReason) && void 0 !== c ? c : null,
                renderer_crash_exit_code: null !== (d = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== d ? d : null,
                had_rtc_connection: N(r.X4.HasRTCConnection),
                was_sending_video: N(r.X4.IsSendingVideo),
                was_sending_stream: N(r.X4.IsSendingStream),
                was_receiving_video: N(r.X4.IsReceivingVideo),
                was_receiving_stream: N(r.X4.IsReceivingStream),
                video_media_session_id: v(r.X4.VideoMediaSessionId),
                stream_media_session_id: v(r.X4.StreamMediaSessionId),
                last_memory_usage_kb: null !== (_ = null == n ? void 0 : null === (i = n.lastMemoryInformation) || void 0 === i ? void 0 : i.memoryUsageKB) && void 0 !== _ ? _ : null,
                last_used_js_heap_size_kb: null !== (E = null == n ? void 0 : null === (a = n.lastMemoryInformation) || void 0 === a ? void 0 : a.usedJSHeapSizeKB) && void 0 !== E ? E : null,
                last_memory_usage_uptime: null !== (f = null == n ? void 0 : null === (o = n.lastMemoryInformation) || void 0 === o ? void 0 : o.uptimeSeconds) && void 0 !== f ? f : null,
                highest_memory_usage_kb: null !== (h = null == n ? void 0 : null === (s = n.highestMemoryInformation) || void 0 === s ? void 0 : s.memoryUsageKB) && void 0 !== h ? h : null,
                highest_used_js_heap_size_kb: null !== (p = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.usedJSHeapSizeKB) && void 0 !== p ? p : null,
                highest_memory_usage_uptime: null !== (m = null == n ? void 0 : null === (u = n.highestMemoryInformation) || void 0 === u ? void 0 : u.uptimeSeconds) && void 0 !== m ? m : null
            };
            if (!e || null == n)
                return {
                    electron_crash_reporter_did_crash: !1,
                    minidump_exception_type: null,
                    minidump_exception_module_name: null,
                    minidump_relative_crash_address: null,
                    minidump_exception_module_version: null,
                    minidump_exception_module_code_id: null,
                    ...O
                };
            console.log('AppCrashedFatalReport lastCrash:', n, e);
            let R = null == n ? void 0 : n.minidumpInformation;
            return {
                electron_crash_reporter_did_crash: e,
                minidump_exception_type: null !== (I = null == R ? void 0 : R.exceptionString) && void 0 !== I ? I : null,
                minidump_exception_module_name: null !== (T = null == R ? void 0 : R.exceptionModuleName) && void 0 !== T ? T : null,
                minidump_relative_crash_address: null !== (g = null == R ? void 0 : R.relativeCrashAddress) && void 0 !== g ? g : null,
                minidump_exception_module_version: null !== (S = null == R ? void 0 : R.exceptionModuleVersion) && void 0 !== S ? S : null,
                minidump_exception_module_code_id: null !== (A = null == R ? void 0 : R.exceptionModuleCodeId) && void 0 !== A ? A : null,
                ...O
            };
        }(a, o, n);
    s.default.track(u.rMx.APP_NATIVE_CRASH, l), i.K.set(d, { lastId: null == n ? void 0 : n.id }), o && setTimeout(async () => await E(), 10000);
}
async function E() {
    var e, t;
    if (null !== (t = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t)
        try {
            await a.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(u.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
