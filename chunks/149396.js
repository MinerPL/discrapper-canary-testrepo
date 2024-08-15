n.d(t, {
	$A: function () {
		return u.$A;
	},
	$B: function () {
		return u.$B;
	},
	$j: function () {
		return u.$j;
	},
	AN: function () {
		return u.AN;
	},
	Av: function () {
		return u.Av;
	},
	Dg: function () {
		return u.Dg;
	},
	GO: function () {
		return d;
	},
	H0: function () {
		return c;
	},
	H3: function () {
		return u.H3;
	},
	Pf: function () {
		return l;
	},
	Qx: function () {
		return u.Qx;
	},
	Yh: function () {
		return u.Yh;
	},
	Yn: function () {
		return u.Yn;
	},
	ad: function () {
		return u.ad;
	},
	eR: function () {
		return s;
	},
	ed: function () {
		return u.ed;
	},
	h7: function () {
		return u.h7;
	},
	iA: function () {
		return u.iA;
	},
	jg: function () {
		return u.jg;
	},
	mC: function () {
		return u.mC;
	},
	mN: function () {
		return u.mN;
	},
	pM: function () {
		return u.pM;
	},
	uA: function () {
		return u.uA;
	},
	uJ: function () {
		return o;
	},
	w5: function () {
		return u.w5;
	}
});
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(65154);
let c = 30000,
	d = {
		[u.pM.VOICE_ACTIVITY]: 1,
		[u.pM.PUSH_TO_TALK]: 2
	};
((r = s || (s = {})).VOICE_SOUND_STOP_LOOP = 'voice_sound_stop_loop'),
	(r.VOICE_RELATIVE_SOUNDS = 'voice_relative_sounds'),
	(r.VOICE_LEGACY_SUBSYSTEM = 'voice_legacy_subsystem'),
	(r.VOICE_EXPERIMENTAL_SUBSYSTEM = 'voice_experimental_subsystem'),
	(r.ELEVATED_HOOK = 'elevated_hook'),
	(r.DEBUG_LOGGING = 'debug_logging'),
	(r.SOUNDSHARE = 'soundshare'),
	(r.SOUNDSHARE_LOOPBACK = 'soundshare_loopback'),
	(r.SET_AUDIO_DEVICE_BY_ID = 'set_audio_device_by_id'),
	(r.SET_VIDEO_DEVICE_BY_ID = 'set_video_device_by_id'),
	(r.LOOPBACK = 'loopback'),
	(r.WUMPUS_VIDEO = 'wumpus_video'),
	(r.HYBRID_VIDEO = 'hybrid_video'),
	(r.EXPERIMENTAL_ENCODERS = 'experimental_encoders'),
	(r.EXPERIMENT_CONFIG = 'experiment_config'),
	(r.REMOTE_LOCUS_NETWORK_CONTROL = 'remote_locus_network_control'),
	(r.SCREEN_PREVIEWS = 'screen_previews'),
	(r.WINDOW_PREVIEWS = 'window_previews'),
	(r.AUDIO_DEBUG_STATE = 'audio_debug_state'),
	(r.CONNECTION_REPLAY = 'connection_replay'),
	(r.SIMULCAST = 'simulcast'),
	(r.SIMULCAST_BUGFIX = 'simulcast_bugfix'),
	(r.RTC_REGION_RANKING = 'RTC_REGION_RANKING'),
	(r.VIDEO_EFFECTS = 'video_effects'),
	(r.DIRECT_VIDEO = 'direct_video'),
	(r.ELECTRON_VIDEO = 'electron_video'),
	(r.MEDIAPIPE = 'mediapipe'),
	(r.FIXED_KEYFRAME_INTERVAL = 'fixed_keyframe_interval'),
	(r.FIRST_FRAME_CALLBACK = 'first_frame_callback'),
	(r.REMOTE_USER_MULTI_STREAM = 'remote_user_multi_stream'),
	(r.CLIPS = 'clips'),
	(r.GO_LIVE_HARDWARE = 'go_live_hardware'),
	(r.IMAGE_QUALITY_MEASUREMENT = 'image_quality_measurement'),
	(r.AMD_EXPERIMENTAL_RATE_CONTROL = 'amd_experimental_rate_control'),
	(r.SCREEN_CAPTURE_KIT = 'screen_capture_kit'),
	(r.CAPTURE_TIMEOUT_EXPERIMENTS = 'capture_timeout_experiments'),
	(r.SCREEN_SOUNDSHARE = 'screen_soundshare'),
	(r.NATIVE_SCREENSHARE_PICKER = 'native_screenshare_picker'),
	((i = o || (o = {}))[(i.LOW = 2)] = 'LOW'),
	(i[(i.BELOW_NORMAL = 1)] = 'BELOW_NORMAL'),
	(i[(i.NORMAL = 0)] = 'NORMAL'),
	(i[(i.ABOVE_NORMAL = -1)] = 'ABOVE_NORMAL'),
	(i[(i.HIGH = -2)] = 'HIGH'),
	((a = l || (l = {}))[(a.Started = 0)] = 'Started'),
	(a[(a.Ended = 1)] = 'Ended'),
	(a[(a.Error = 2)] = 'Error'),
	(a[(a.TransferredToVoiceCall = 3)] = 'TransferredToVoiceCall'),
	(a[(a.TransferredToGoLive = 4)] = 'TransferredToGoLive'),
	(a[(a.StoppedByGoLive = 5)] = 'StoppedByGoLive'),
	(a[(a.BlockedByGoLive = 6)] = 'BlockedByGoLive'),
	(a[(a.GoLiveEnded = 7)] = 'GoLiveEnded');
