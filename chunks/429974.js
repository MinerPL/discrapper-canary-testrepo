n.d(t, {
	z: function () {
		return I;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(570140),
	s = n(317770),
	o = n(603113),
	l = n(812206),
	u = n(158776),
	c = n(699516),
	d = n(594174),
	_ = n(626135),
	E = n(621853),
	f = n(981631),
	h = n(616922);
let p = null;
function I(e, t) {
	return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t || t === f.ME ? '' : t);
}
async function m(e) {
	var t, a, s, m;
	let {
			userId: T,
			section: g,
			subsection: S,
			guildId: A = f.ME,
			channelId: N,
			friendToken: v,
			analyticsLocation: O,
			showGuildProfile: R = !0,
			...C
		} = e,
		y = d.default.getUser(T);
	if (null == y) return;
	let D = E.Z.getUserProfile(T),
		L = u.Z.getPrimaryActivity(T),
		b = u.Z.getStatus(T),
		M = u.Z.isMobileOnline(T),
		{ party: P, assets: U, application_id: w } = null != L ? L : {},
		x = null != w ? l.Z.getApplication(w) : null,
		G = M ? f.j28.ONLINE_MOBILE : f.j28.ONLINE_DESKTOP,
		k = b === f.Skl.ONLINE ? G : b;
	(p = await (0, i.openModalLazy)(
		async () => {
			let { default: e } = await Promise.all([n.e('12661'), n.e('17373')]).then(n.bind(n, 304113));
			return (t) =>
				(0, r.jsx)(e, {
					location: 'handleOpenUserProfileModal',
					user: y,
					guildId: A,
					friendToken: v,
					initialSection: g,
					initialSubsection: S,
					channelId: N,
					showGuildProfile: R,
					...t,
					...C
				});
		},
		{ modalKey: I(T, R ? A : void 0) }
	)),
		_.default.track(f.rMx.OPEN_MODAL, {
			type: 'Profile Modal',
			guild_id: A !== f.ME ? A : null,
			channel_id: N,
			other_user_id: T,
			application_id: null !== (a = null == L ? void 0 : L.application_id) && void 0 !== a ? a : null,
			application_name: null == L ? void 0 : L.name,
			sku_id: null !== (s = null == x ? void 0 : x.primarySkuId) && void 0 !== s ? s : null,
			is_friend: c.Z.isFriend(T),
			has_images: !!(null !== (m = null == U ? void 0 : U.large_image) && void 0 !== m
				? m
				: null == U
					? void 0
					: U.small_image),
			party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
			party_id: null == P ? void 0 : P.id,
			party_platform: (0, h.Ps)(null == P ? void 0 : P.id) ? f.ABu.SPOTIFY : null,
			game_platform: (0, o.Z)(L),
			profile_user_status: k,
			profile_has_nitro_customization: (null == D ? void 0 : D.banner) != null,
			profile_has_profile_effect: (null == D ? void 0 : D.profileEffectId) != null,
			...(null == O ? null : (0, _.expandLocation)(O))
		});
}
function T() {
	null != p && (0, i.closeModal)(p), (p = null);
}
class g extends s.Z {
	_initialize() {
		a.Z.subscribe('USER_PROFILE_MODAL_OPEN', m), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', T);
	}
	_terminate() {
		a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', m), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', T);
	}
}
t.Z = new g();
