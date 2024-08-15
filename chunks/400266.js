n.d(t, {
	Z: function () {
		return u;
	}
}),
	n(757143);
var l = n(735250);
n(470079);
var r = n(120356),
	i = n.n(r),
	a = n(729594),
	o = n(785992),
	s = n(616922),
	d = n(592733);
function u(e) {
	let {
		className: t,
		embed: { url: n }
	} = e;
	if (null == n) return null;
	let r = null,
		u = null;
	try {
		let e = a.parse(n.replace(/intl-[^/]+\//, ''), !0);
		(r = e.host), (u = e.pathname);
	} catch (e) {
		return null;
	}
	if (!(0, o.E)(r) || null == u) return null;
	let m = u.split('/'),
		h = null != m[1] ? m[1].toLowerCase() : null,
		c = null != m[3] ? m[3].toLowerCase() : null,
		p = m[4];
	if (
		!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != h ? h : '') ||
		('user' === h && 'playlist' !== c)
	)
		return null;
	'user' === h && 'playlist' === c && null != p && (u = '/playlist/'.concat(p));
	let b = 352;
	return (
		'track' === h ? (b = 80) : ('episode' === h || 'show' === h) && (b = 232),
		(0, l.jsx)('iframe', {
			className: i()(d.embedSpotify, t),
			src: s.C7.EMBED(u),
			style: {
				width: 400,
				height: b
			},
			frameBorder: 0,
			sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
		})
	);
}
