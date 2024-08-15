n.d(t, {
	$0: function () {
		return R;
	},
	AN: function () {
		return P;
	},
	Ct: function () {
		return N;
	},
	EQ: function () {
		return G;
	},
	Ej: function () {
		return S;
	},
	ME: function () {
		return f;
	},
	O1: function () {
		return T;
	},
	O8: function () {
		return y;
	},
	Pl: function () {
		return g;
	},
	Uw: function () {
		return L;
	},
	ZE: function () {
		return M;
	},
	_G: function () {
		return m;
	},
	_O: function () {
		return A;
	},
	_y: function () {
		return h;
	},
	do: function () {
		return U;
	},
	g7: function () {
		return C;
	},
	g_: function () {
		return _;
	},
	j4: function () {
		return O;
	},
	ks: function () {
		return B;
	},
	lX: function () {
		return I;
	},
	m_: function () {
		return E;
	},
	qH: function () {
		return D;
	},
	tj: function () {
		return p;
	},
	uw: function () {
		return v;
	},
	wN: function () {
		return x;
	},
	zZ: function () {
		return w;
	},
	zm: function () {
		return b;
	}
});
var r = n(848246),
	i = n(710845),
	a = n(380684),
	s = n(533293),
	o = n(575691),
	l = n(474936);
let u = new i.Z('ProductCatalog.tsx'),
	c = Object.freeze({
		[l.p9.TIER_0]: l.Si.TIER_0,
		[l.p9.TIER_1]: l.Si.TIER_1,
		[l.p9.TIER_2]: l.Si.TIER_2
	});
class d extends s.Z {
	constructor(e, t) {
		super(
			e,
			(e) =>
				(function (e, t) {
					if (null == t || null == t.premiumType) return !1;
					try {
						let n = c[t.premiumType];
						if (null == n)
							return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
						let r = k[n];
						if (null == r)
							return (
								u.warn(
									"Cannot find the corresponding product catalog entry to the user's SKU "
										.concat(n, ' and premium type ')
										.concat(t.premiumType)
								),
								!1
							);
						return r.skuFeatures.includes(e);
					} catch (e) {
						var n;
						u.error(
							"Error while retrieving user's feature access: ".concat(
								null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)
							)
						);
					}
					return !1;
				})(this, e),
			t
		);
	}
}
let _ = new d(r.q.ANIMATED_EMOJIS),
	E = new d(r.q.EMOJIS_EVERYWHERE),
	f = new d(r.q.STICKERS_EVERYWHERE),
	h = new d(r.q.SOUNDBOARD_EVERYWHERE),
	p = new d(r.q.CUSTOM_CALL_SOUNDS),
	I = new d(r.q.ANIMATED_AVATAR),
	m = new d(r.q.CUSTOM_DISCRIMINATOR),
	T = new d(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
	g = new d('profileBadges'),
	S = new d(r.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
	A = new d('collectibles'),
	N = new d('appIcons'),
	v = new d(r.q.CLIENT_THEMES),
	O = new d('boostDiscount'),
	R = new d('freeBoosts'),
	C = new d(r.q.STREAM_MID_QUALITY),
	y = new d(r.q.STREAM_HIGH_QUALITY),
	D = new d(r.q.CUSTOM_NOTIFICATION_SOUNDS),
	L = new d('fancyVoiceChannelReactions'),
	b = new d('installPremiumApplications'),
	M = new d('redeemPremiumPerks'),
	P = new d(r.q.VIDEO_FILTER_ASSETS);
new s.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, a.h6);
let U = new d(r.q.INCREASED_GUILD_LIMIT),
	w = new d(r.q.INCREASED_MESSAGE_LENGTH),
	x = new d('increasedVideoUploadQuality'),
	G = new d('uploadLargeFiles'),
	k = Object.freeze({
		[l.Si.TIER_0]: new o.Z(l.Si.TIER_0, [_, E, f, g, P, x, G, N]),
		[l.Si.TIER_1]: new o.Z(l.Si.TIER_1, [_, E, I, m, g, O, C, L, x, G, N]),
		[l.Si.TIER_2]: new o.Z(l.Si.TIER_2, [_, E, f, h, p, I, m, T, g, S, v, O, R, C, y, L, b, M, P, U, w, x, G, N, A, D])
	});
function B(e, t) {
	return e.getFeatureValue(t);
}
