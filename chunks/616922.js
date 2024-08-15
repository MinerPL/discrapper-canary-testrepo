n.d(t, {
	C7: function () {
		return I;
	},
	Hw: function () {
		return a;
	},
	M5: function () {
		return c;
	},
	Ps: function () {
		return E;
	},
	SD: function () {
		return f;
	},
	ai: function () {
		return _;
	},
	c8: function () {
		return m;
	},
	kG: function () {
		return s;
	},
	lS: function () {
		return d;
	}
});
var r,
	i,
	a,
	s,
	o = n(726542),
	l = n(358085),
	u = n(981631);
let c = 'spotify',
	d = 'spotify:',
	_ = o.Z.get(u.ABu.SPOTIFY).name;
function E(e) {
	return null != e && e.startsWith(d);
}
((r = a || (a = {})).TRACK = 'track'),
	(r.ARTIST = 'artist'),
	(r.ALBUM = 'album'),
	(r.PLAYLIST = 'playlist'),
	(r.EPISODE = 'episode'),
	(r.SHOW = 'show'),
	((i = s || (s = {})).USER_ACTIVITY_PLAY = 'user_activity_play'),
	(i.USER_ACTIVITY_SYNC = 'user_activity_sync'),
	(i.EMBED_SYNC = 'embed_sync');
let f = ['open.spotify.com', 'www.spotify.com'],
	h = 'https://api.spotify.com/v1',
	p = (e) => '?utm_source=discord&utm_medium='.concat(e),
	I = Object.freeze({
		PROFILE: ''.concat(h, '/me'),
		NOTIFICATIONS_PLAYER: ''.concat(h, '/me/notifications/player'),
		PLAYER: ''.concat(h, '/me/player'),
		PLAYER_DEVICES: ''.concat(h, '/me/player/devices'),
		PLAYER_PLAY: ''.concat(h, '/me/player/play'),
		PLAYER_PAUSE: ''.concat(h, '/me/player/pause'),
		PLAYER_REPEAT: ''.concat(h, '/me/player/repeat'),
		WEB_OPEN: function (e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'desktop';
			return 'https://open.spotify.com/'.concat(encodeURIComponent(e), '/').concat(encodeURIComponent(t)).concat(p(n));
		},
		EMBED: function (e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'desktop';
			return 'https://open.spotify.com/embed'.concat(e).concat(p(t));
		},
		PLAYER_OPEN: function (e, t) {
			let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'desktop';
			return ''
				.concat(c, ':')
				.concat(encodeURIComponent(e), ':')
				.concat(encodeURIComponent(t))
				.concat(n ? p(r) : '');
		},
		PREMIUM_SITE: 'https://www.spotify.com/premium/'.concat(p('desktop')),
		INSTALL_ATTRIBUTION: (e) => 'https://app.adjust.com/bdyga9?campaign='.concat(e),
		APP_STORE: (0, l.isAndroid)()
			? 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US'
			: 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8',
		IOS_APP_STORE: 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8'
	});
function m(e) {
	if ('string' != typeof e) return null;
	switch (e) {
		case 'track':
			return 'track';
		case 'artist':
			return 'artist';
		case 'album':
			return 'album';
		case 'playlist':
			return 'playlist';
		case 'episode':
			return 'episode';
		case 'show':
			return 'show';
		default:
			return null;
	}
}
