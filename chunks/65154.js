n.d(t, {
	$A: function () {
		return K;
	},
	$B: function () {
		return Q;
	},
	$j: function () {
		return v;
	},
	AN: function () {
		return y;
	},
	AS: function () {
		return D;
	},
	Av: function () {
		return j;
	},
	Dg: function () {
		return M;
	},
	Er: function () {
		return ee;
	},
	Gs: function () {
		return $;
	},
	H3: function () {
		return k;
	},
	P8: function () {
		return J;
	},
	QP: function () {
		return O;
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
	XR: function () {
		return ei;
	},
	YE: function () {
		return et;
	},
	Yh: function () {
		return V;
	},
	Yn: function () {
		return S;
	},
	Z: function () {
		return C;
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
		return R;
	},
	h7: function () {
		return A;
	},
	iA: function () {
		return L;
	},
	jg: function () {
		return W;
	},
	kS: function () {
		return ea;
	},
	mC: function () {
		return q;
	},
	mN: function () {
		return z;
	},
	pM: function () {
		return N;
	},
	pk: function () {
		return er;
	},
	u$: function () {
		return X;
	},
	uA: function () {
		return w;
	},
	ux: function () {
		return es;
	},
	vA: function () {
		return B.vA;
	},
	w5: function () {
		return Y;
	},
	yf: function () {
		return en;
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
	m,
	I,
	T,
	g,
	S,
	A,
	N,
	v,
	O,
	R,
	C,
	y,
	D,
	L,
	b,
	M,
	P,
	U,
	w,
	x,
	G,
	k,
	B = n(268146);
((r = S || (S = {})).DEFAULT = 'default'), (r.STREAM = 'stream'), ((i = A || (A = {})).AUDIO_INPUT = 'audioinput'), (i.AUDIO_OUTPUT = 'audiooutput'), (i.VIDEO_INPUT = 'videoinput'), ((a = N || (N = {})).PUSH_TO_TALK = 'PUSH_TO_TALK'), (a.VOICE_ACTIVITY = 'VOICE_ACTIVITY'), ((s = v || (v = {})).DISCONNECTED = 'DISCONNECTED'), (s.CONNECTING = 'CONNECTING'), (s.CONNECTED = 'CONNECTED'), (s.NO_ROUTE = 'NO_ROUTE'), (s.ICE_CHECKING = 'ICE_CHECKING'), (s.DTLS_CONNECTING = 'DTLS_CONNECTING'), ((o = O || (O = {}))[(o.TRANSPORT = 1)] = 'TRANSPORT'), (o[(o.OUTBOUND = 2)] = 'OUTBOUND'), (o[(o.INBOUND = 4)] = 'INBOUND'), (o[(o.ALL = 7)] = 'ALL'), ((l = R || (R = {})).MANUAL_DISABLE = 'video_manual_disable'), (l.MANUAL_ENABLE = 'video_manual_enable'), (l.MANUAL_REENABLE = 'video_manual_reenable'), (l.AUTO_DISABLE = 'video_auto_disable'), (l.AUTO_ENABLE = 'video_auto_enable'), (l.AUTO_DOWNGRADE = 'video_auto_downgrade'), (l.AUTO_UPGRADE = 'video_auto_upgrade,'), ((u = C || (C = {})).NO_OVERRIDE = 'no_override'), (u.HIGH = 'high'), (u.LOW = 'low');
let F = 100,
	V = 18,
	H = 64000,
	Z = 128000,
	Y = 'default',
	j = 'disabled',
	W = 0.1,
	K = 600000,
	z = 150000,
	q = 10000000,
	Q = 5000,
	X = 15000,
	$ = 30,
	J = 20,
	ee = 12,
	et = 3500000,
	en = 9000000,
	er = 500000,
	ei = ['remoteSinkWantsPixelCount', 'remoteSinkWantsMaxFramerate', 'encodingVideoMinBitRate', 'encodingVideoMaxBitRate', 'encodingVideoBitRate', 'streamParameters'],
	ea = {
		videoBudget: {
			width: 1280,
			height: 720,
			framerate: $
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
	es = 60000;
((c = y || (y = {})).AUTO_ENABLE = 'AUTO_ENABLE'),
	(c.ATTENUATION = 'ATTENUATION'),
	(c.AUDIO_INPUT_DEVICE = 'AUDIO_INPUT_DEVICE'),
	(c.AUDIO_OUTPUT_DEVICE = 'AUDIO_OUTPUT_DEVICE'),
	(c.VOICE_PROCESSING = 'VOICE_PROCESSING'),
	(c.QOS = 'QOS'),
	(c.NATIVE_PING = 'NATIVE_PING'),
	(c.LEGACY_AUDIO_SUBSYSTEM = 'LEGACY_AUDIO_SUBSYSTEM'),
	(c.EXPERIMENTAL_AUDIO_SUBSYSTEM = 'EXPERIMENTAL_AUDIO_SUBSYSTEM'),
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
	((d = D || (D = {})).NATIVE = 'NATIVE'),
	(d.WEBRTC = 'WEBRTC'),
	(d.DUMMY = 'DUMMY'),
	((_ = L || (L = {})).LEGACY = 'legacy'),
	(_.STANDARD = 'standard'),
	(_.EXPERIMENTAL = 'experimental'),
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
	((m = w || (w = {})).FIXED = 'fixed'),
	(m.SOURCE = 'source'),
	((I = x || (x = {})).VIDEOTOOLBOX_RATE_CONTROL = 'videotoolbox_rate_control'),
	(I.SIGNAL_AV1 = 'signal_av1'),
	(I.SIGNAL_AV1_DECODE = 'signal_av1_decode'),
	(I.SIGNAL_AV1_HARDWARE_DECODE = 'signal_av1_hardware_decode'),
	(I.STREAMER_CLIP = 'streamer_clip'),
	(I.VIEWER_CLIP = 'viewer_clip'),
	(I.MUTE_BEFORE_PROCESSING = 'mute_before_processing'),
	(I.PTT_BEFORE_PROCESSING = 'ptt_before_processing'),
	(I.SKIP_ENCODE = 'skip_encode'),
	(I.RESET_DECODER_ON_ERRORS = 'reset_decoder_on_errors'),
	(I.SOFTWARE_FALLBACK_ON_ERRORS = 'software_fallback_on_errors'),
	(I.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = 'software_fallback_on_consecutive_errors'),
	(I.GOLIVE_SIMULCAST_480P_500K = 'golive_simulcast_480p@500kbps'),
	(I.GOLIVE_SIMULCAST_480P_750K = 'golive_simulcast_480p@750kbps'),
	(I.GOLIVE_SIMULCAST_480P_1000K = 'golive_simulcast_480p@1000kbps'),
	((T = G || (G = {}))[(T.AUTO = 1)] = 'AUTO'),
	(T[(T.FULL = 2)] = 'FULL'),
	((g = k || (k = {}))[(g.CPU_OVERUSE = 1)] = 'CPU_OVERUSE'),
	(g[(g.FAILED = 2)] = 'FAILED'),
	(g[(g.VAD_CPU_OVERUSE = 3)] = 'VAD_CPU_OVERUSE'),
	(g[(g.INITIALIZED = 4)] = 'INITIALIZED');
