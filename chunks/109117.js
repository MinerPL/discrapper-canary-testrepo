"use strict";
n.d(t, {
  S1: function() {
    return c
  }
});
var i = n(268146),
  r = n(433517),
  s = n(131951),
  o = n(594174),
  a = n(626135),
  l = n(729345),
  u = n(981631);
let _ = window.DiscordNative,
  d = "".concat(u.rMx.APP_NATIVE_CRASH, "Storage");
async function c() {
  var e;
  if (__OVERLAY__) return;
  let t = null == _ ? void 0 : null === (e = _.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
  if (null == t) {
    console.log("AppCrashedFatalReport: getLastCrash not supported.");
    return
  }
  let n = await t(),
    {
      didCrashReporterSeeCrash: s,
      didCrashOrUncleanExit: o
    } = function(e, t) {
      var n;
      let i = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        r = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null;
      return {
        didCrashReporterSeeCrash: i,
        didCrashOrUncleanExit: i || null != r && 0 !== r
      }
    }(r.K.get(d, {}), n),
    l = function(e, t, n) {
      var r, s, o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m, O;

      function R(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e]
      }

      function C(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e]
      }
      let p = {
        did_crash: t,
        renderer_crash_reason: null !== (_ = null == n ? void 0 : n.rendererCrashReason) && void 0 !== _ ? _ : null,
        renderer_crash_exit_code: null !== (d = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== d ? d : null,
        had_rtc_connection: R(i.X4.HasRTCConnection),
        was_sending_video: R(i.X4.IsSendingVideo),
        was_sending_stream: R(i.X4.IsSendingStream),
        was_receiving_video: R(i.X4.IsReceivingVideo),
        was_receiving_stream: R(i.X4.IsReceivingStream),
        video_media_session_id: C(i.X4.VideoMediaSessionId),
        stream_media_session_id: C(i.X4.StreamMediaSessionId),
        last_memory_usage_kb: null !== (c = null == n ? void 0 : null === (r = n.lastMemoryInformation) || void 0 === r ? void 0 : r.memoryUsageKB) && void 0 !== c ? c : null,
        last_used_js_heap_size_kb: null !== (E = null == n ? void 0 : null === (s = n.lastMemoryInformation) || void 0 === s ? void 0 : s.usedJSHeapSizeKB) && void 0 !== E ? E : null,
        last_memory_usage_uptime: null !== (I = null == n ? void 0 : null === (o = n.lastMemoryInformation) || void 0 === o ? void 0 : o.uptimeSeconds) && void 0 !== I ? I : null,
        highest_memory_usage_kb: null !== (T = null == n ? void 0 : null === (a = n.highestMemoryInformation) || void 0 === a ? void 0 : a.memoryUsageKB) && void 0 !== T ? T : null,
        highest_used_js_heap_size_kb: null !== (h = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.usedJSHeapSizeKB) && void 0 !== h ? h : null,
        highest_memory_usage_uptime: null !== (S = null == n ? void 0 : null === (u = n.highestMemoryInformation) || void 0 === u ? void 0 : u.uptimeSeconds) && void 0 !== S ? S : null
      };
      if (!e || null == n) return {
        electron_crash_reporter_did_crash: !1,
        minidump_exception_type: null,
        minidump_exception_module_name: null,
        minidump_relative_crash_address: null,
        minidump_exception_module_version: null,
        minidump_exception_module_code_id: null,
        ...p
      };
      console.log("AppCrashedFatalReport lastCrash:", n, e);
      let g = null == n ? void 0 : n.minidumpInformation;
      return {
        electron_crash_reporter_did_crash: e,
        minidump_exception_type: null !== (f = null == g ? void 0 : g.exceptionString) && void 0 !== f ? f : null,
        minidump_exception_module_name: null !== (N = null == g ? void 0 : g.exceptionModuleName) && void 0 !== N ? N : null,
        minidump_relative_crash_address: null !== (A = null == g ? void 0 : g.relativeCrashAddress) && void 0 !== A ? A : null,
        minidump_exception_module_version: null !== (m = null == g ? void 0 : g.exceptionModuleVersion) && void 0 !== m ? m : null,
        minidump_exception_module_code_id: null !== (O = null == g ? void 0 : g.exceptionModuleCodeId) && void 0 !== O ? O : null,
        ...p
      }
    }(s, o, n);
  a.default.track(u.rMx.APP_NATIVE_CRASH, l), r.K.set(d, {
    lastId: null == n ? void 0 : n.id
  }), o && setTimeout(async () => await E(), 1e4)
}
async function E() {
  var e, t;
  if (null !== (t = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t) try {
    await s.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(u.GU0.RTC), console.log("Successfully uploaded debug files")
  } catch (e) {
    console.log("Failed to upload debug files")
  }
}