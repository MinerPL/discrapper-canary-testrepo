n.d(t, {
	$d: function () {
		return N;
	},
	AA: function () {
		return v;
	},
	Db: function () {
		return b;
	},
	Dx: function () {
		return A;
	},
	R: function () {
		return D;
	},
	TB: function () {
		return O;
	},
	XE: function () {
		return C;
	},
	hs: function () {
		return R;
	},
	w: function () {
		return S;
	},
	xR: function () {
		return y;
	},
	xz: function () {
		return L;
	}
}),
	n(47120),
	n(653041);
var r = n(392711),
	i = n.n(r),
	a = n(544891),
	s = n(570140),
	o = n(668781),
	l = n(479531),
	u = n(675478),
	c = n(763296),
	d = n(697426),
	_ = n(174470),
	E = n(710111),
	f = n(981631),
	h = n(526761),
	p = n(689938);
let m = async (e) => {
		try {
			let t = (
				await a.tn.get({
					url: f.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
					query: { guild_ids: e }
				})
			).body.map((e) => (0, d.o3)(e, E.X8));
			s.Z.dispatch({
				type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS',
				soundboardSounds: t
			});
		} catch (e) {
			throw (s.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE' }), new l.Z(e));
		}
	},
	I = (e) =>
		new Promise((t) => {
			let n = () => {
				s.Z.unsubscribe(e, n), setTimeout(t, 0);
			};
			s.Z.subscribe(e, n);
		}),
	T = (e) => {
		if (!c.Z.shouldFetchDefaultSounds()) return Promise.resolve();
		s.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS' });
		let t = I('SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS');
		return m(e), t;
	},
	g = () => {
		let e = (0, _.D)();
		if (0 === e.length) return Promise.resolve();
		let t = I('SOUNDBOARD_SOUNDS_RECEIVED');
		return (
			s.Z.dispatch({ type: 'GUILD_SOUNDBOARD_FETCH' }),
			s.Z.dispatch({
				type: 'REQUEST_SOUNDBOARD_SOUNDS',
				guildIds: e
			}),
			t
		);
	},
	S = () => (__OVERLAY__ ? (s.Z.dispatch({ type: 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST' }), Promise.all([])) : Promise.all([T(), g()]));
async function A(e) {
	let { guildId: t, name: n, sound: r, volume: i, emojiId: s, emojiName: o } = e,
		l = await a.tn.post({
			url: f.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
			body: {
				name: n,
				sound: r,
				volume: i,
				emoji_id: s,
				emoji_name: o
			}
		});
	return (0, d.o3)(l.body, t);
}
async function N(e) {
	let { guildId: t, soundId: n, name: r, volume: i, emojiId: s, emojiName: o } = e,
		l = await a.tn.patch({
			url: f.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
			body: {
				name: r,
				volume: i,
				emoji_id: s,
				emoji_name: o
			}
		});
	return (0, d.o3)(l.body, t);
}
async function v(e, t) {
	await a.tn.del({
		url: f.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
		oldFormErrors: !0
	});
}
function O(e) {
	u.DZ.updateAsync(
		'favoriteSoundboardSounds',
		(t) =>
			i().size(t.soundIds) >= h.oX
				? (o.Z.show({
						title: p.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
						body: p.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({ count: h.oX })
					}),
					!1)
				: !t.soundIds.includes(e) && void t.soundIds.push(e),
		h.fy.INFREQUENT_USER_ACTION
	);
}
function R(e) {
	u.DZ.updateAsync(
		'favoriteSoundboardSounds',
		(t) => {
			t.soundIds = t.soundIds.filter((t) => t !== e);
		},
		h.fy.INFREQUENT_USER_ACTION
	);
}
function C(e, t, n) {
	s.Z.dispatch({
		type: 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
		sound: t,
		channelId: e,
		trigger: n
	});
}
function y(e, t) {
	s.Z.dispatch({
		type: 'GUILD_SOUNDBOARD_SOUND_PLAY_START',
		soundId: e,
		userId: t
	});
}
function D(e, t) {
	s.Z.dispatch({
		type: 'GUILD_SOUNDBOARD_SOUND_PLAY_END',
		soundId: e,
		userId: t
	});
}
function L(e) {
	s.Z.dispatch({
		type: 'USER_SOUNDBOARD_SET_VOLUME',
		volume: e
	});
}
function b(e) {
	s.Z.dispatch({
		type: 'SOUNDBOARD_MUTE_JOIN_SOUND',
		channelId: e
	});
}
