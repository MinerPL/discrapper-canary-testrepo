n.d(t, {
    $A: function () {
        return X;
    },
    $B: function () {
        return ee;
    },
    $j: function () {
        return O;
    },
    AN: function () {
        return L;
    },
    AS: function () {
        return y;
    },
    Av: function () {
        return j;
    },
    Dg: function () {
        return M;
    },
    Er: function () {
        return ei;
    },
    Gs: function () {
        return en;
    },
    H3: function () {
        return k;
    },
    JA: function () {
        return Q;
    },
    P8: function () {
        return er;
    },
    QO: function () {
        return q;
    },
    QP: function () {
        return R;
    },
    Qx: function () {
        return F;
    },
    Tr: function () {
        return P;
    },
    Uc: function () {
        return G;
    },
    V8: function () {
        return x;
    },
    WA: function () {
        return z;
    },
    XR: function () {
        return el;
    },
    YE: function () {
        return ea;
    },
    Yh: function () {
        return V;
    },
    Yn: function () {
        return g;
    },
    Z: function () {
        return C;
    },
    Zq: function () {
        return K;
    },
    ad: function () {
        return b;
    },
    dX: function () {
        return H;
    },
    ed: function () {
        return Z;
    },
    fC: function () {
        return v;
    },
    h7: function () {
        return A;
    },
    iA: function () {
        return D;
    },
    jg: function () {
        return W;
    },
    kS: function () {
        return eu;
    },
    mC: function () {
        return J;
    },
    mN: function () {
        return $;
    },
    pM: function () {
        return N;
    },
    pk: function () {
        return eo;
    },
    u$: function () {
        return et;
    },
    uA: function () {
        return w;
    },
    ux: function () {
        return ec;
    },
    vA: function () {
        return B.vA;
    },
    w5: function () {
        return Y;
    },
    yf: function () {
        return es;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    _,
    E,
    f,
    h,
    p,
    I,
    m,
    T,
    S,
    g,
    A,
    N,
    O,
    R,
    v,
    C,
    L,
    y,
    D,
    b,
    M,
    P,
    U,
    w,
    x,
    G,
    k,
    B = n(268146);
((r = g || (g = {})).DEFAULT = 'default'), (r.STREAM = 'stream'), ((i = A || (A = {})).AUDIO_INPUT = 'audioinput'), (i.AUDIO_OUTPUT = 'audiooutput'), (i.VIDEO_INPUT = 'videoinput'), ((a = N || (N = {})).PUSH_TO_TALK = 'PUSH_TO_TALK'), (a.VOICE_ACTIVITY = 'VOICE_ACTIVITY'), ((s = O || (O = {})).DISCONNECTED = 'DISCONNECTED'), (s.CONNECTING = 'CONNECTING'), (s.CONNECTED = 'CONNECTED'), (s.NO_ROUTE = 'NO_ROUTE'), (s.ICE_CHECKING = 'ICE_CHECKING'), (s.DTLS_CONNECTING = 'DTLS_CONNECTING'), ((o = R || (R = {}))[(o.TRANSPORT = 1)] = 'TRANSPORT'), (o[(o.OUTBOUND = 2)] = 'OUTBOUND'), (o[(o.INBOUND = 4)] = 'INBOUND'), (o[(o.ALL = 7)] = 'ALL'), ((l = v || (v = {})).MANUAL_DISABLE = 'video_manual_disable'), (l.MANUAL_ENABLE = 'video_manual_enable'), (l.MANUAL_REENABLE = 'video_manual_reenable'), (l.AUTO_DISABLE = 'video_auto_disable'), (l.AUTO_ENABLE = 'video_auto_enable'), (l.AUTO_DOWNGRADE = 'video_auto_downgrade'), (l.AUTO_UPGRADE = 'video_auto_upgrade,'), ((u = C || (C = {})).NO_OVERRIDE = 'no_override'), (u.HIGH = 'high'), (u.LOW = 'low');
let F = 100,
    V = 18,
    H = 64000,
    Z = 128000,
    Y = 'default',
    j = 'disabled',
    W = 0.1,
    K = -40,
    z = -25,
    q = 1 / 15,
    Q = 0.8,
    X = 600000,
    $ = 150000,
    J = 10000000,
    ee = 5000,
    et = 15000,
    en = 30,
    er = 20,
    ei = 12,
    ea = 3500000,
    es = 9000000,
    eo = 500000,
    el = ['remoteSinkWantsPixelCount', 'remoteSinkWantsMaxFramerate', 'encodingVideoMinBitRate', 'encodingVideoMaxBitRate', 'encodingVideoBitRate', 'streamParameters'],
    eu = {
        videoBudget: {
            width: 1280,
            height: 720,
            framerate: en
        },
        videoCapture: {
            width: 1280,
            height: 720,
            framerate: 30
        },
        videoBitrate: {
            min: 150000,
            max: 2500000
        },
        desktopBitrate: {
            min: 500000,
            max: 3500000,
            target: 600000
        },
        videoBitrateFloor: 150000
    },
    ec = 60000;
((c = L || (L = {})).AUTO_ENABLE = 'AUTO_ENABLE'),
    (c.ATTENUATION = 'ATTENUATION'),
    (c.AUDIO_INPUT_DEVICE = 'AUDIO_INPUT_DEVICE'),
    (c.AUDIO_OUTPUT_DEVICE = 'AUDIO_OUTPUT_DEVICE'),
    (c.VOICE_PROCESSING = 'VOICE_PROCESSING'),
    (c.QOS = 'QOS'),
    (c.NATIVE_PING = 'NATIVE_PING'),
    (c.LEGACY_AUDIO_SUBSYSTEM = 'LEGACY_AUDIO_SUBSYSTEM'),
    (c.EXPERIMENTAL_AUDIO_SUBSYSTEM = 'EXPERIMENTAL_AUDIO_SUBSYSTEM'),
    (c.AUTOMATIC_AUDIO_SUBSYSTEM = 'AUTOMATIC_AUDIO_SUBSYSTEM'),
    (c.DEBUG_LOGGING = 'DEBUG_LOGGING'),
    (c.AUTOMATIC_VAD = 'AUTOMATIC_VAD'),
    (c.VOICE_PANNING = 'VOICE_PANNING'),
    (c.DIAGNOSTICS = 'DIAGNOSTICS'),
    (c.VIDEO = 'VIDEO'),
    (c.DESKTOP_CAPTURE = 'DESKTOP_CAPTURE'),
    (c.DESKTOP_CAPTURE_FORMAT = 'DESKTOP_CAPTURE_FORMAT'),
    (c.DESKTOP_CAPTURE_APPLICATIONS = 'DESKTOP_CAPTURE_APPLICATIONS'),
    (c.SOUNDSHARE = 'SOUNDSHARE'),
    (c.LOOPBACK = 'LOOPBACK'),
    (c.VIDEO_HOOK = 'VIDEO_HOOK'),
    (c.EXPERIMENTAL_SOUNDSHARE = 'EXPERIMENTAL_SOUNDSHARE'),
    (c.WUMPUS_VIDEO = 'WUMPUS_VIDEO'),
    (c.ELEVATED_HOOK = 'ELEVATED_HOOK'),
    (c.HYBRID_VIDEO = 'HYBRID_VIDEO'),
    (c.OPEN_H264 = 'OPEN_H264'),
    (c.EXPERIMENTAL_ENCODERS = 'EXPERIMENTAL_ENCODERS'),
    (c.REMOTE_LOCUS_NETWORK_CONTROL = 'REMOTE_LOCUS_NETWORK_CONTROL'),
    (c.SCREEN_PREVIEWS = 'SCREEN_PREVIEWS'),
    (c.WINDOW_PREVIEWS = 'WINDOW_PREVIEWS'),
    (c.AUDIO_DEBUG_STATE = 'AUDIO_DEBUG_STATE'),
    (c.AEC_DUMP = 'AEC_DUMP'),
    (c.DISABLE_VIDEO = 'DISABLE_VIDEO'),
    (c.CONNECTION_REPLAY = 'CONNECTION_REPLAY'),
    (c.SIMULCAST = 'SIMULCAST'),
    (c.RTC_REGION_RANKING = 'RTC_REGION_RANKING'),
    (c.DIRECT_VIDEO = 'DIRECT_VIDEO'),
    (c.ELECTRON_VIDEO = 'ELECTRON_VIDEO'),
    (c.MEDIAPIPE = 'MEDIAPIPE'),
    (c.FIXED_KEYFRAME_INTERVAL = 'FIXED_KEYFRAME_INTERVAL'),
    (c.SAMPLE_PLAYBACK = 'SAMPLE_PLAYBACK'),
    (c.FIRST_FRAME_CALLBACK = 'FIRST_FRAME_CALLBACK'),
    (c.REMOTE_USER_MULTI_STREAM = 'REMOTE_USER_MULTI_STREAM'),
    (c.NOISE_SUPPRESSION = 'NOISE_SUPPRESSION'),
    (c.NOISE_CANCELLATION = 'NOISE_CANCELLATION'),
    (c.AUTOMATIC_GAIN_CONTROL = 'AUTOMATIC_GAIN_CONTROL'),
    (c.CLIPS = 'CLIPS'),
    (c.SPEED_TEST = 'SPEED_TEST'),
    (c.IMAGE_QUALITY_MEASUREMENT = 'IMAGE_QUALITY_MEASUREMENT'),
    (c.AMD_EXPERIMENTAL_RATE_CONTROL = 'AMD_EXPERIMENTAL_RATE_CONTROL'),
    (c.GO_LIVE_HARDWARE = 'GO_LIVE_HARDWARE'),
    (c.SCREEN_CAPTURE_KIT = 'SCREEN_CAPTURE_KIT'),
    (c.CAPTURE_TIMEOUT_EXPERIMENTS = 'CAPTURE_TIMEOUT_EXPERIMENTS'),
    (c.SCREEN_SOUNDSHARE = 'SCREEN_SOUNDSHARE'),
    (c.NATIVE_SCREENSHARE_PICKER = 'NATIVE_SCREENSHARE_PICKER'),
    (c.MLS_PAIRWISE_FINGERPRINTS = 'MLS_PAIRWISE_FINGERPRINTS'),
    ((d = y || (y = {})).NATIVE = 'NATIVE'),
    (d.WEBRTC = 'WEBRTC'),
    (d.DUMMY = 'DUMMY'),
    ((_ = D || (D = {})).LEGACY = 'legacy'),
    (_.STANDARD = 'standard'),
    (_.EXPERIMENTAL = 'experimental'),
    (_.AUTOMATIC = 'automatic'),
    ((E = b || (b = {})).OPUS = 'opus'),
    (E.VP8 = 'VP8'),
    (E.VP9 = 'VP9'),
    (E.H264 = 'H264'),
    (E.RTX = 'rtx'),
    (E.TEST = 'TEST'),
    ((f = M || (M = {}))[(f.NONE = 0)] = 'NONE'),
    (f[(f.VOICE = 1)] = 'VOICE'),
    (f[(f.SOUNDSHARE = 2)] = 'SOUNDSHARE'),
    (f[(f.PRIORITY = 4)] = 'PRIORITY'),
    ((h = P || (P = {})).AUDIO = 'audio'),
    (h.VIDEO = 'video'),
    (h.SCREEN = 'screen'),
    (h.TEST = 'test'),
    ((p = U || (U = {})).PLAYING = 'playing'),
    (p.PAUSED = 'paused'),
    ((I = w || (w = {})).FIXED = 'fixed'),
    (I.SOURCE = 'source'),
    ((m = x || (x = {})).VIDEOTOOLBOX_RATE_CONTROL = 'videotoolbox_rate_control'),
    (m.SIGNAL_AV1 = 'signal_av1'),
    (m.SIGNAL_AV1_DECODE = 'signal_av1_decode'),
    (m.SIGNAL_AV1_HARDWARE_DECODE = 'signal_av1_hardware_decode'),
    (m.STREAMER_CLIP = 'streamer_clip'),
    (m.VIEWER_CLIP = 'viewer_clip'),
    (m.MUTE_BEFORE_PROCESSING = 'mute_before_processing'),
    (m.PTT_BEFORE_PROCESSING = 'ptt_before_processing'),
    (m.SKIP_ENCODE = 'skip_encode'),
    (m.RESET_DECODER_ON_ERRORS = 'reset_decoder_on_errors'),
    (m.SOFTWARE_FALLBACK_ON_ERRORS = 'software_fallback_on_errors'),
    (m.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = 'software_fallback_on_consecutive_errors'),
    (m.GOLIVE_SIMULCAST_480P_500K = 'golive_simulcast_480p@500kbps'),
    (m.GOLIVE_SIMULCAST_480P_750K = 'golive_simulcast_480p@750kbps'),
    (m.GOLIVE_SIMULCAST_480P_1000K = 'golive_simulcast_480p@1000kbps'),
    ((T = G || (G = {}))[(T.AUTO = 1)] = 'AUTO'),
    (T[(T.FULL = 2)] = 'FULL'),
    ((S = k || (k = {}))[(S.CPU_OVERUSE = 1)] = 'CPU_OVERUSE'),
    (S[(S.FAILED = 2)] = 'FAILED'),
    (S[(S.VAD_CPU_OVERUSE = 3)] = 'VAD_CPU_OVERUSE'),
    (S[(S.INITIALIZED = 4)] = 'INITIALIZED');
