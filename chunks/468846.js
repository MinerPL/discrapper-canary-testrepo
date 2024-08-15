n.d(t, {
	ZP: function () {
		return h;
	},
	pn: function () {
		return r;
	}
});
var l,
	r,
	i = n(735250),
	a = n(470079),
	o = n(729594),
	s = n(592733);
function d(e) {
	let { autoMute: t, ...n } = e,
		l = a.useRef(null),
		r = a.useCallback(
			(e) => {
				if (!!e.data['x-tiktok-embed'] && 'https://www.tiktok.com' === e.origin) {
					if ('onPlayerReady' === e.data.type) {
						var n, r, i, a;
						t &&
							(null === (a = l.current) ||
								void 0 === a ||
								null === (i = a.contentWindow) ||
								void 0 === i ||
								i.postMessage(
									{
										type: 'mute',
										'x-tiktok-embed': !0
									},
									e.origin
								)),
							null === (r = l.current) ||
								void 0 === r ||
								null === (n = r.contentWindow) ||
								void 0 === n ||
								n.postMessage(
									{
										type: 'play',
										'x-tiktok-embed': !0
									},
									e.origin
								);
					}
				}
			},
			[t]
		);
	return (
		a.useEffect(() => (window.addEventListener('message', r), () => window.removeEventListener('message', r)), [r]),
		(0, i.jsx)(m, {
			ref: l,
			...n
		})
	);
}
function u(e) {
	let { src: t, autoMute: n, ...l } = e,
		r = o.parse(null != t ? t : '', !0);
	(r.query = {
		...r.query,
		autoplay: '1',
		auto_play: '1'
	}),
		n && (r.query.mute = '1'),
		(r.search = null);
	let a = o.format(r);
	return (0, i.jsx)(m, {
		src: a,
		...l
	});
}
let m = a.forwardRef(function (e, t) {
	return (0, i.jsx)('iframe', {
		ref: t,
		className: s.embedIframe,
		allow: 'autoplay',
		frameBorder: 0,
		scrolling: 'no',
		sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
		...e
	});
});
function h(e) {
	switch (e.provider) {
		case 'YouTube':
			return (0, i.jsx)(u, { ...e });
		case 'TikTok':
			return (0, i.jsx)(d, { ...e });
		default:
			return (0, i.jsx)(m, { ...e });
	}
}
((l = r || (r = {})).YOUTUBE = 'YouTube'), (l.TIKTOK = 'TikTok');
