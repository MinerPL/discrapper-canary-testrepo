"use strict";
n.d(t, {
  $A: function() {
    return K
  },
  $B: function() {
    return X
  },
  $j: function() {
    return C
  },
  AN: function() {
    return v
  },
  AS: function() {
    return D
  },
  Av: function() {
    return j
  },
  Dg: function() {
    return y
  },
  Er: function() {
    return ee
  },
  Gs: function() {
    return J
  },
  H3: function() {
    return B
  },
  P8: function() {
    return $
  },
  QP: function() {
    return p
  },
  Qx: function() {
    return V
  },
  Tr: function() {
    return U
  },
  Uc: function() {
    return k
  },
  V8: function() {
    return w
  },
  XR: function() {
    return er
  },
  YE: function() {
    return et
  },
  Yh: function() {
    return Z
  },
  Yn: function() {
    return m
  },
  Z: function() {
    return L
  },
  ad: function() {
    return P
  },
  dX: function() {
    return H
  },
  ed: function() {
    return F
  },
  fC: function() {
    return g
  },
  h7: function() {
    return O
  },
  iA: function() {
    return M
  },
  jg: function() {
    return W
  },
  kS: function() {
    return es
  },
  mC: function() {
    return q
  },
  mN: function() {
    return z
  },
  pM: function() {
    return R
  },
  pk: function() {
    return ei
  },
  u$: function() {
    return Q
  },
  uA: function() {
    return G
  },
  ux: function() {
    return eo
  },
  vA: function() {
    return x.vA
  },
  w5: function() {
    return Y
  },
  yf: function() {
    return en
  }
});
var i, r, s, o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m, O, R, C, p, g, L, v, D, M, P, y, U, b, G, w, k, B, x = n(268146);
(i = m || (m = {})).DEFAULT = "default", i.STREAM = "stream", (r = O || (O = {})).AUDIO_INPUT = "audioinput", r.AUDIO_OUTPUT = "audiooutput", r.VIDEO_INPUT = "videoinput", (s = R || (R = {})).PUSH_TO_TALK = "PUSH_TO_TALK", s.VOICE_ACTIVITY = "VOICE_ACTIVITY", (o = C || (C = {})).DISCONNECTED = "DISCONNECTED", o.CONNECTING = "CONNECTING", o.CONNECTED = "CONNECTED", o.NO_ROUTE = "NO_ROUTE", o.ICE_CHECKING = "ICE_CHECKING", o.DTLS_CONNECTING = "DTLS_CONNECTING", (a = p || (p = {}))[a.TRANSPORT = 1] = "TRANSPORT", a[a.OUTBOUND = 2] = "OUTBOUND", a[a.INBOUND = 4] = "INBOUND", a[a.ALL = 7] = "ALL", (l = g || (g = {})).MANUAL_DISABLE = "video_manual_disable", l.MANUAL_ENABLE = "video_manual_enable", l.MANUAL_REENABLE = "video_manual_reenable", l.AUTO_DISABLE = "video_auto_disable", l.AUTO_ENABLE = "video_auto_enable", l.AUTO_DOWNGRADE = "video_auto_downgrade", l.AUTO_UPGRADE = "video_auto_upgrade,", (u = L || (L = {})).NO_OVERRIDE = "no_override", u.HIGH = "high", u.LOW = "low";
let V = 100,
  Z = 18,
  H = 64e3,
  F = 128e3,
  Y = "default",
  j = "disabled",
  W = .1,
  K = 6e5,
  z = 15e4,
  q = 1e7,
  X = 5e3,
  Q = 15e3,
  J = 30,
  $ = 20,
  ee = 12,
  et = 4e6,
  en = 8e6,
  ei = 5e5,
  er = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
  es = {
    videoBudget: {
      width: 1280,
      height: 720,
      framerate: J
    },
    videoCapture: {
      width: 1280,
      height: 720,
      framerate: 30
    },
    videoBitrate: {
      min: 15e4,
      max: 25e5
    },
    desktopBitrate: {
      min: 5e5,
      max: 4e6,
      target: 6e5
    },
    videoBitrateFloor: 15e4
  },
  eo = 6e4;
(_ = v || (v = {})).AUTO_ENABLE = "AUTO_ENABLE", _.ATTENUATION = "ATTENUATION", _.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", _.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", _.VOICE_PROCESSING = "VOICE_PROCESSING", _.QOS = "QOS", _.NATIVE_PING = "NATIVE_PING", _.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", _.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", _.DEBUG_LOGGING = "DEBUG_LOGGING", _.AUTOMATIC_VAD = "AUTOMATIC_VAD", _.VOICE_PANNING = "VOICE_PANNING", _.DIAGNOSTICS = "DIAGNOSTICS", _.VIDEO = "VIDEO", _.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", _.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", _.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", _.SOUNDSHARE = "SOUNDSHARE", _.LOOPBACK = "LOOPBACK", _.VIDEO_HOOK = "VIDEO_HOOK", _.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", _.WUMPUS_VIDEO = "WUMPUS_VIDEO", _.ELEVATED_HOOK = "ELEVATED_HOOK", _.HYBRID_VIDEO = "HYBRID_VIDEO", _.OPEN_H264 = "OPEN_H264", _.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", _.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", _.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", _.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", _.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", _.AEC_DUMP = "AEC_DUMP", _.DISABLE_VIDEO = "DISABLE_VIDEO", _.CONNECTION_REPLAY = "CONNECTION_REPLAY", _.SIMULCAST = "SIMULCAST", _.RTC_REGION_RANKING = "RTC_REGION_RANKING", _.DIRECT_VIDEO = "DIRECT_VIDEO", _.ELECTRON_VIDEO = "ELECTRON_VIDEO", _.MEDIAPIPE = "MEDIAPIPE", _.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", _.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", _.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", _.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", _.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", _.NOISE_CANCELLATION = "NOISE_CANCELLATION", _.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", _.CLIPS = "CLIPS", _.SPEED_TEST = "SPEED_TEST", _.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", _.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", _.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", _.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", _.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", _.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (d = D || (D = {})).NATIVE = "NATIVE", d.WEBRTC = "WEBRTC", d.DUMMY = "DUMMY", (c = M || (M = {})).LEGACY = "legacy", c.STANDARD = "standard", c.EXPERIMENTAL = "experimental", (E = P || (P = {})).OPUS = "opus", E.VP8 = "VP8", E.VP9 = "VP9", E.H264 = "H264", E.RTX = "rtx", E.TEST = "TEST", (I = y || (y = {}))[I.NONE = 0] = "NONE", I[I.VOICE = 1] = "VOICE", I[I.SOUNDSHARE = 2] = "SOUNDSHARE", I[I.PRIORITY = 4] = "PRIORITY", (T = U || (U = {})).AUDIO = "audio", T.VIDEO = "video", T.SCREEN = "screen", T.TEST = "test", (h = b || (b = {})).PLAYING = "playing", h.PAUSED = "paused", (S = G || (G = {})).FIXED = "fixed", S.SOURCE = "source", (f = w || (w = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", f.SIGNAL_AV1_SUPPORT = "signal_av1_support", f.SIGNAL_AV1_HARDWARE_DECODE = "signal_av1_hardware_decode", f.STREAMER_CLIP = "streamer_clip", f.VIEWER_CLIP = "viewer_clip", f.MUTE_BEFORE_PROCESSING = "mute_before_processing", f.PTT_BEFORE_PROCESSING = "ptt_before_processing", f.SKIP_ENCODE = "skip_encode", f.RESET_DECODER_ON_ERRORS = "reset_decoder_on_errors", f.SOFTWARE_FALLBACK_ON_ERRORS = "software_fallback_on_errors", f.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = "software_fallback_on_consecutive_errors", f.GOLIVE_SIMULCAST = "golive_simulcast", (N = k || (k = {}))[N.AUTO = 1] = "AUTO", N[N.FULL = 2] = "FULL", (A = B || (B = {}))[A.CPU_OVERUSE = 1] = "CPU_OVERUSE", A[A.FAILED = 2] = "FAILED", A[A.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", A[A.INITIALIZED = 4] = "INITIALIZED"