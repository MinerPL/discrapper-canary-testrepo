n.d(t, {
	B: function () {
		return l;
	},
	Fm: function () {
		return d;
	},
	Lc: function () {
		return c;
	},
	Ld: function () {
		return o;
	},
	U4: function () {
		return u;
	},
	hn: function () {
		return _;
	},
	zz: function () {
		return s;
	}
}),
	n(411104);
var r = n(830496),
	i = n(959517);
let a = [
		{
			reName: /\.jpe?g$/i,
			name: (e) => 'image'.concat(e, '.jpg'),
			type: 'image/jpeg'
		},
		{
			reName: /\.png$/i,
			name: (e) => 'image'.concat(e, '.png'),
			type: 'image/png'
		},
		{
			reName: /\.gif$/i,
			name: (e) => 'image'.concat(e, '.gif'),
			type: 'image/gif'
		},
		{
			reName: /\.webp$/i,
			name: (e) => 'image'.concat(e, '.webp'),
			type: 'image/webp'
		},
		{
			reName: /\.heic$/i,
			name: (e) => 'image'.concat(e, '.heic'),
			type: 'image/heic'
		},
		{
			reName: /\.heif$/i,
			name: (e) => 'image'.concat(e, '.heif'),
			type: 'image/heif'
		},
		{
			reName: /\.dng$/i,
			name: (e) => 'image'.concat(e, '.dng'),
			type: 'image/x-adobe-dng'
		},
		{
			reName: /\.mov$/i,
			name: (e) => 'video'.concat(e, '.mov'),
			type: 'video/quicktime'
		},
		{
			reName: /\.avi$/i,
			name: (e) => 'video'.concat(e, '.avi'),
			type: 'video/x-msvideo'
		},
		{
			reName: /\.mp4$/i,
			name: (e) => 'video'.concat(e, '.mp4'),
			type: 'video/mp4'
		},
		{
			reName: /\.webm$/i,
			name: (e) => 'video'.concat(e, '.webm'),
			type: 'image/webm'
		}
	],
	s = 524288000,
	o = 1073741824;
function l(e) {
	var t;
	let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
		a = arguments.length > 2 ? arguments[2] : void 0,
		s = { id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id };
	null != e.description && (s.description = e.description);
	let o = (function (e) {
		let { spoiler: t } = e;
		return t ? i._j : '';
	})({ spoiler: e.spoiler });
	return (
		(s.filename = ''.concat(o).concat(null != a ? a : e.filename)),
		(s.uploaded_filename = e.uploadedFilename),
		'durationSecs' in e && null != e.durationSecs && (s.duration_secs = e.durationSecs),
		'waveform' in e && null != e.waveform && (s.waveform = e.waveform),
		'isThumbnail' in e && !0 === e.isThumbnail && (s.is_thumbnail = e.isThumbnail),
		'isRemix' in e && !0 === e.isRemix && (s.is_remix = e.isRemix),
		'clip' in e &&
			null != e.clip &&
			((s.is_clip = !0),
			(s.title = e.clip.name),
			(s.application_id = e.clip.applicationId),
			(s.clip_created_at = (0, r.U)(e.clip.id)),
			(s.clip_participant_ids = (0, r.Z)(e.clip.users))),
		s
	);
}
function u(e, t, n) {
	let r = new XMLHttpRequest();
	return new Promise((i, a) => {
		r.open('GET', e, !0),
			(r.responseType = 'blob'),
			r.setRequestHeader('Range', 'bytes='.concat(t, '-').concat(n)),
			(r.onabort = (e) => a(e)),
			(r.onerror = (e) => a(e)),
			(r.ontimeout = (e) => a(e)),
			(r.onload = () => {
				206 === r.status ? i(r.response) : a(Error('Range request failed'));
			}),
			r.send();
	});
}
function c(e) {
	let t = new XMLHttpRequest();
	return new Promise((n, r) => {
		t.open('GET', e, !0),
			(t.responseType = 'blob'),
			(t.onabort = (e) => r(e)),
			(t.onerror = (e) => r(e)),
			(t.ontimeout = (e) => r(e)),
			(t.onload = () => {
				var e;
				return n(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.data);
			}),
			t.send();
	});
}
function d(e) {
	return new Promise((t, n) => {
		let r = new XMLHttpRequest();
		r.open('HEAD', e, !0),
			(r.onload = () => {
				if (r.status >= 200 && r.status < 300) {
					let e = r.getResponseHeader('Content-Length');
					null != e && '' !== e ? t(parseInt(e, 10)) : n(Error('Content-Length header is missing'));
				} else n(Error('HTTP request failed with status code '.concat(r.status)));
			}),
			(r.onerror = n),
			(r.onabort = n),
			(r.ontimeout = n),
			r.send();
	});
}
function _(e) {
	var t, n, r, i, s, o;
	let l,
		{ uri: u, i: c, overrideFilename: d, overrideType: _ } = e,
		E = u.split('/'),
		f = E[E.length - 1];
	f =
		null !==
			(r =
				null === (n = f.split('?')) || void 0 === n
					? void 0
					: null === (t = n[0]) || void 0 === t
						? void 0
						: t.toLowerCase()) && void 0 !== r
			? r
			: '';
	let h = a.find((e) => e.reName.test(f));
	if ((null == h && null != d && (h = a.find((e) => e.reName.test(d))), null != h && null != d)) {
		let e = h.name(c).split('.').pop(),
			t = d.lastIndexOf('.');
		l = -1 !== t ? ''.concat(d.substr(0, t), '.').concat(e) : ''.concat(d, '.').concat(e);
	} else l = null != h ? h.name(c) : null != d ? d : 'unknown';
	return {
		uri: u,
		filename: l,
		type: null !== (i = null != _ ? _ : null == h ? void 0 : h.type) && void 0 !== i ? i : 'unknown',
		isVideo:
			-1 !== (null !== (s = null != _ ? _ : null == h ? void 0 : h.name(c)) && void 0 !== s ? s : '').indexOf('video'),
		isImage:
			-1 !== (null !== (o = null != _ ? _ : null == h ? void 0 : h.name(c)) && void 0 !== o ? o : '').indexOf('image')
	};
}
