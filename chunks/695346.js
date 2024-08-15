n.d(t, {
	CM: function () {
		return K;
	},
	Cr: function () {
		return er;
	},
	D3: function () {
		return W;
	},
	DC: function () {
		return z;
	},
	Ex: function () {
		return ey;
	},
	Fg: function () {
		return V;
	},
	G6: function () {
		return ee;
	},
	GA: function () {
		return el;
	},
	H1: function () {
		return v;
	},
	L1: function () {
		return eT;
	},
	MI: function () {
		return eo;
	},
	NA: function () {
		return eE;
	},
	OW: function () {
		return X;
	},
	Ok: function () {
		return ei;
	},
	Ou: function () {
		return P;
	},
	Pe: function () {
		return b;
	},
	QK: function () {
		return eg;
	},
	QZ: function () {
		return m;
	},
	R$: function () {
		return E;
	},
	RS: function () {
		return e_;
	},
	R_: function () {
		return eD;
	},
	SE: function () {
		return ev;
	},
	Sb: function () {
		return em;
	},
	Sh: function () {
		return eL;
	},
	T4: function () {
		return N;
	},
	UP: function () {
		return $;
	},
	Uc: function () {
		return es;
	},
	Wp: function () {
		return eA;
	},
	Wz: function () {
		return eC;
	},
	Xc: function () {
		return L;
	},
	Xk: function () {
		return O;
	},
	Xr: function () {
		return J;
	},
	Yk: function () {
		return eS;
	},
	_O: function () {
		return A;
	},
	bh: function () {
		return j;
	},
	bm: function () {
		return Q;
	},
	cC: function () {
		return p;
	},
	cP: function () {
		return M;
	},
	co: function () {
		return en;
	},
	d$: function () {
		return D;
	},
	d4: function () {
		return S;
	},
	dN: function () {
		return _;
	},
	eo: function () {
		return C;
	},
	ev: function () {
		return H;
	},
	fq: function () {
		return h;
	},
	fv: function () {
		return T;
	},
	gw: function () {
		return eb;
	},
	h2: function () {
		return B;
	},
	iG: function () {
		return k;
	},
	iH: function () {
		return eR;
	},
	jU: function () {
		return Z;
	},
	kJ: function () {
		return G;
	},
	kU: function () {
		return Y;
	},
	l4: function () {
		return eM;
	},
	mX: function () {
		return x;
	},
	nc: function () {
		return ef;
	},
	qF: function () {
		return R;
	},
	rN: function () {
		return eh;
	},
	tU: function () {
		return ec;
	},
	uL: function () {
		return y;
	},
	up: function () {
		return f;
	},
	vF: function () {
		return I;
	},
	x4: function () {
		return ed;
	},
	xM: function () {
		return q;
	},
	xd: function () {
		return eu;
	},
	xq: function () {
		return F;
	},
	zA: function () {
		return w;
	}
}),
	n(47120);
var r = n(442837),
	i = n(524437),
	a = n(381499),
	s = n(85746),
	o = n(560997),
	l = n(263937),
	u = n(973005),
	c = n(981631),
	d = n(611480);
let _ = (0, o.Zc)(
		'textAndImages',
		'useLegacyChatInput',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	E = (0, o.Zc)(
		'textAndImages',
		'useRichChatInput',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	f = (0, o.Zc)(
		'textAndImages',
		'expressionSuggestionsEnabled',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	h = (0, o.Zc)(
		'textAndImages',
		'includeStickersInAutocomplete',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	p = (0, o.Zc)(
		'textAndImages',
		'renderSpoilers',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.A2N.ON_CLICK;
		},
		(e) => a.Gm.create({ value: e })
	),
	I = (0, o.Zc)(
		'textAndImages',
		'useThreadSidebar',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	);
(0, o.Zc)(
	'notifications',
	'showInAppNotifications',
	(e) => {
		var t;
		return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
	},
	(e) => a.D5.create({ value: e })
);
let m = (0, o.Zc)(
		'notifications',
		'quietMode',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: !!e })
	),
	T = (0, o.Zc)(
		'notifications',
		'focusModeExpiresAtMs',
		(e) => (null != e ? e : '0'),
		(e) => e
	),
	g = [],
	S = (0, o.Zc)(
		'textAndImages',
		'emojiPickerCollapsedSections',
		(e) => (null != e ? e : g),
		(e) => e
	),
	A = (0, o.Zc)(
		'textAndImages',
		'stickerPickerCollapsedSections',
		(e) => (null != e ? e : g),
		(e) => e
	),
	N = (0, o.Zc)(
		'textAndImages',
		'soundboardPickerCollapsedSections',
		(e) => (null != e ? e : g),
		(e) => e
	),
	v = (0, o.Zc)(
		'textAndImages',
		'viewImageDescriptions',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	O = (0, o.Zc)(
		'textAndImages',
		'showCommandSuggestions',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	R = (0, o.Zc)(
		'voiceAndVideo',
		'alwaysPreviewVideo',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	C = (0, o.Zc)(
		'notifications',
		'notifyFriendsOnGoLive',
		(e) => (null == e ? void 0 : e.value),
		(e) => a.D5.create({ value: e })
	),
	y = '0',
	D = (0, o.Zc)(
		'notifications',
		'notificationCenterAckedBeforeId',
		(e) => (null != e ? e : y),
		(e) => e
	),
	L = (0, o.Zc)(
		'gameLibrary',
		'installShortcutDesktop',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	b = (0, o.Zc)(
		'gameLibrary',
		'installShortcutStartMenu',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	M = (0, o.Zc)(
		'privacy',
		'allowActivityPartyPrivacyFriends',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	P = (0, o.Zc)(
		'privacy',
		'allowActivityPartyPrivacyVoiceChannel',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	U = [],
	w = (0, o.Zc)(
		'privacy',
		'messageRequestRestrictedGuildIds',
		(e) => (null != e ? e : U),
		(e) => e
	),
	x = (0, o.Zc)(
		'privacy',
		'defaultMessageRequestRestricted',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	G = (0, o.Zc)(
		'privacy',
		'nonSpamRetrainingOptIn',
		(e) => (null == e ? void 0 : e.value),
		(e) => (null == e ? void 0 : a.D5.create({ value: e }))
	);
(0, o.Zc)(
	'privacy',
	'contactSyncEnabled',
	(e) => {
		var t;
		return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
	},
	(e) => a.D5.create({ value: e })
);
let k = (0, o.Zc)(
		'privacy',
		'defaultGuildsRestricted',
		(e) => null != e && e,
		(e) => e
	),
	B = (0, o.Zc)(
		'privacy',
		'restrictedGuildIds',
		(e) => (null != e ? e : []),
		(e) => e
	);
(0, o.Zc)(
	'privacy',
	'friendDiscoveryFlags',
	(e) => {
		var t;
		return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0;
	},
	(e) => a.yC.create({ value: e })
);
let F = (0, o.Zc)(
		'privacy',
		'friendSourceFlags',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.HGf;
		},
		(e) => a.yC.create({ value: e })
	),
	V = (0, o.Zc)(
		'debug',
		'rtcPanelShowVoiceStates',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	H = (0, o.Zc)(
		'textAndImages',
		'convertEmoticons',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	Z = (0, o.Zc)(
		'textAndImages',
		'messageDisplayCompact',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	Y = (0, o.Zc)(
		'voiceAndVideo',
		'soundboardSettings',
		(e) => e,
		(e) => e
	);
(0, o.Zc)(
	'voiceAndVideo',
	'streamNotificationsEnabled',
	(e) => {
		var t;
		return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
	},
	(e) => a.D5.create({ value: e })
);
let j = (0, o.Zc)(
		'privacy',
		'dropsOptedOut',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	W = (0, o.Zc)(
		'voiceAndVideo',
		'nativePhoneIntegrationEnabled',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	K = (0, o.Zc)(
		'voiceAndVideo',
		'afkTimeout',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600;
		},
		(e) => a.yC.create({ value: e })
	),
	z = (0, o.Zc)(
		'textAndImages',
		'viewNsfwGuilds',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	q = (0, o.Zc)(
		'textAndImages',
		'viewNsfwCommands',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	);
(0, o.Zc)(
	'privacy',
	'detectPlatformAccounts',
	(e) => {
		var t;
		return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
	},
	(e) => a.D5.create({ value: e })
);
let Q = (0, o.Zc)(
		'gameLibrary',
		'disableGamesTab',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	X = (0, o.Zc)(
		'textAndImages',
		'enableTtsCommand',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	$ = (0, o.Zc)(
		'textAndImages',
		'explicitContentFilter',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.TI.NON_FRIENDS;
		},
		(e) => a.yC.create({ value: e })
	);
(0, o.Zc)(
	'textAndImages',
	'dmSpamFilter',
	(e) => {
		var t;
		return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.fQ.NON_FRIENDS;
	},
	(e) => a.yC.create({ value: e })
);
let J = (0, o.Zc)(
		'textAndImages',
		'dmSpamFilterV2',
		(e) => (null != e ? e : i.Xr.DEFAULT_UNSET),
		(e) => e
	),
	ee = (0, o.Zc)(
		'status',
		'showCurrentGame',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	);
(0, o.Zc)(
	'privacy',
	'recentGamesEnabled',
	(e) => {
		var t;
		return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
	},
	(e) => a.D5.create({ value: e })
);
let et = new Set(Object.values(c.Skl)),
	en = (0, o.Zc)(
		'status',
		'status',
		(e) => (null != e && et.has(e.value) ? e.value : c.Skl.UNKNOWN),
		(e) => a.Gm.create({ value: e })
	),
	er = (0, o.Zc)(
		'status',
		'statusExpiresAtMs',
		(e) => (null != e ? e : '0'),
		(e) => e
	),
	ei = (0, o.Zc)(
		'status',
		'customStatus',
		(e) => e,
		(e) => e
	),
	ea = [],
	es = (0, o.Zc)(
		'broadcast',
		'allowFriends',
		(e) => (null == e ? void 0 : e.value),
		(e) => a.D5.create({ value: e })
	),
	eo = (0, o.Zc)(
		'broadcast',
		'allowedGuildIds',
		(e) => (null != e ? e : ea),
		(e) => e
	),
	el = (0, o.Zc)(
		'broadcast',
		'allowedUserIds',
		(e) => (null != e ? e : ea),
		(e) => e
	),
	eu = (0, o.Zc)(
		'broadcast',
		'autoBroadcast',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	ec = (0, o.Zc)(
		'clips',
		'allowVoiceRecording',
		(e) => {
			var t;
			return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
		},
		(e) => a.D5.create({ value: e })
	),
	ed = (0, o.KM)(
		(0, o.Zc)(
			'textAndImages',
			'inlineAttachmentMedia',
			(e) => {
				var t;
				return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
			},
			(e) => a.D5.create({ value: e })
		),
		'text',
		'inlineAttachmentMedia'
	),
	e_ = (0, o.KM)(
		(0, o.Zc)(
			'textAndImages',
			'inlineEmbedMedia',
			(e) => {
				var t;
				return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
			},
			(e) => a.D5.create({ value: e })
		),
		'text',
		'inlineEmbedMedia'
	),
	eE = (0, o.KM)(
		(0, o.Zc)(
			'textAndImages',
			'renderEmbeds',
			(e) => {
				var t;
				return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
			},
			(e) => a.D5.create({ value: e })
		),
		'text',
		'renderEmbeds'
	),
	ef = (0, o.KM)(
		(0, o.Zc)(
			'textAndImages',
			'renderReactions',
			(e) => {
				var t;
				return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
			},
			(e) => a.D5.create({ value: e })
		),
		'text',
		'renderReactions'
	),
	eh = (0, o.Zc)(
		'localization',
		'timezoneOffset',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null;
		},
		(e) => a.T4.create({ value: null != e ? e : 0 })
	),
	ep = new Set([s.l.COZY, s.l.COMPACT]);
(0, o.Zc)(
	'appearance',
	'channelListLayout',
	(e) => (null != e && ep.has(e.value) ? e.value : s.l.COZY),
	(e) => a.Gm.create({ value: e })
);
let eI = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, o.Zc)(
	'appearance',
	'messagePreviews',
	(e) => (null != e && eI.has(e.value) ? e.value : s.Z.ALL),
	(e) => a.Gm.create({ value: e })
);
let em = (0, o.KM)(
		(0, o.Zc)(
			'appearance',
			'developerMode',
			(e) => null != e && e,
			(e) => e
		),
		'appearance',
		'developerMode'
	),
	eT = (0, o.Zc)(
		'appearance',
		'clientThemeSettings',
		(e) => {
			var t;
			return {
				backgroundGradientPresetId:
					null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
			};
		},
		(e) => ({
			backgroundGradientPresetId:
				null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0
		})
	),
	eg = (0, o.R2)(
		(0, o.KM)(
			(0, o.Zc)(
				'textAndImages',
				'gifAutoPlay',
				(e) => {
					var t;
					return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
				},
				(e) => a.D5.create({ value: e })
			),
			'text',
			'gifAutoPlay'
		),
		'gifAutoPlay',
		() => {
			var e;
			return null === (e = l.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
		},
		() =>
			(0, r.e7)([l.Z], () => {
				var e;
				return null === (e = l.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
			})
	),
	eS = (0, o.R2)(
		(0, o.KM)(
			(0, o.Zc)(
				'textAndImages',
				'animateEmoji',
				(e) => {
					var t;
					return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
				},
				(e) => a.D5.create({ value: e })
			),
			'text',
			'animateEmoji'
		),
		'animateEmoji',
		() => {
			var e;
			return null === (e = l.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
		},
		() =>
			(0, r.e7)([l.Z], () => {
				var e;
				return null === (e = l.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
			})
	),
	eA = (0, o.R2)(
		(0, o.KM)(
			(0, o.Zc)(
				'textAndImages',
				'animateStickers',
				(e) => {
					var t;
					return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.yr.ALWAYS_ANIMATE;
				},
				(e) => a.yC.create({ value: e })
			),
			'text',
			'animateStickers'
		),
		'animateStickers',
		() => {
			var e;
			return null === (e = l.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
		},
		() =>
			(0, r.e7)([l.Z], () => {
				var e;
				return null === (e = l.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
			})
	),
	eN = [],
	ev = (0, o.Zc)(
		'privacy',
		'activityRestrictedGuildIds',
		(e) => (null != e ? e : eN),
		(e) => e
	),
	eO = [],
	eR = (0, o.Zc)(
		'privacy',
		'activityJoiningRestrictedGuildIds',
		(e) => (null != e ? e : eO),
		(e) => e
	),
	eC = (0, o.Zc)(
		'privacy',
		'defaultGuildsActivityRestricted',
		(e) => e === i.E5.ON_FOR_LARGE_GUILDS,
		(e) => (!0 === e ? i.E5.ON_FOR_LARGE_GUILDS : i.E5.OFF)
	),
	ey = (0, o.Zc)(
		'privacy',
		'familyCenterEnabledV2',
		(e) => (null == e ? void 0 : e.value),
		(e) => a.D5.create({ value: e })
	),
	eD = (0, o.Zc)(
		'privacy',
		'hideLegacyUsername',
		(e) => {
			var t;
			return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
		},
		(e) => a.D5.create({ value: e })
	),
	eL = (0, o.Zc)(
		'textAndImages',
		'explicitContentSettings',
		(e) => {
			let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = null != e ? e : {};
			return {
				explicitContentGuilds: null != t ? t : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
				explicitContentFriendDm: null != n ? n : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
				explicitContentNonFriendDm: null != r ? r : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
			};
		},
		(e) => {
			let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
			return {
				explicitContentGuilds: null != t ? t : void 0,
				explicitContentFriendDm: null != n ? n : void 0,
				explicitContentNonFriendDm: null != r ? r : void 0
			};
		}
	),
	eb = (0, o.Zc)(
		'textAndImages',
		'keywordFilterSettings',
		(e) => {
			let { profanity: t, sexualContent: n, slurs: r } = null != e ? e : {};
			return {
				profanity: null == t ? void 0 : t.value,
				sexualContent: null == n ? void 0 : n.value,
				slurs: null == r ? void 0 : r.value
			};
		},
		(e) => {
			let { profanity: t, sexualContent: n, slurs: r } = e;
			return {
				profanity: a.D5.create({ value: t }),
				sexualContent: a.D5.create({ value: n }),
				slurs: a.D5.create({ value: r })
			};
		}
	);
(0, o.Zc)(
	'appearance',
	'searchResultExactCountEnabled',
	(e) => {
		var t;
		return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
	},
	(e) => a.D5.create({ value: e })
);
let eM = (0, o.Zc)(
	'userContent',
	'lastReceivedChangelogId',
	(e) => (null != e ? e : '0'),
	(e) => e
);
