t.d(n, {
	Z: function () {
		return R;
	}
}),
	t(47120);
var i = t(735250);
t(470079);
var a = t(481060),
	l = t(668781),
	r = t(829883),
	s = t(976853),
	o = t(626135),
	u = t(358085),
	d = t(960048),
	c = t(591759),
	E = t(998502),
	M = t(36998),
	I = t(981631),
	m = t(689938);
let _ = 'https://media.discordapp.net',
	g = /^.*\.discordapp\.net$/,
	f = 'cdn.discordapp.com',
	Z = ''.concat(_, '/stickers'),
	S = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
	T = new Set(['jpg', 'jpeg', 'png']),
	v = (e) => {
		var n, t, i, a;
		return null === (a = c.Z.toURLSafe(e)) || void 0 === a ? void 0 : null === (i = a.pathname) || void 0 === i ? void 0 : null === (t = i.split('.')) || void 0 === t ? void 0 : null === (n = t.pop()) || void 0 === n ? void 0 : n.toLowerCase();
	};
function A(e, n) {
	l.Z.show({
		title: m.Z.Messages.ERROR,
		body: e
	}),
		d.Z.captureException(n);
}
function R(e, n, t) {
	if (
		(0, s.Z)(null == n ? void 0 : n.getChannelId()) ||
		(null == t ? void 0 : t.shouldHideMediaOptions) === !0 ||
		!u.isPlatformEmbedded ||
		null == e ||
		!(function (e) {
			let n = c.Z.toURLSafe(e);
			if (null == n) return !1;
			let t = v(e);
			return (g.test(n.hostname) || n.host === f) && !e.startsWith(Z) && !(0, r.zt)(e) && null != t && S.has(t);
		})(e)
	)
		return null;
	let l = (function (e) {
			let n = c.Z.toURLSafe(e);
			return null == n || n.host === f ? e : n.origin === _ ? ((n.host = f), n.searchParams.delete('size'), n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.delete('quality'), n.searchParams.delete('format'), n.toString()) : (n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.set('quality', 'lossless'), n.toString());
		})(e),
		d = async () => {
			try {
				await E.ZP.saveImage(l), o.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVED, { ...(0, M.v)() });
			} catch (e) {
				o.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, M.v)() }), A(m.Z.Messages.ERROR_SAVING_IMAGE, e);
			}
		},
		R = async () => {
			try {
				await E.ZP.copyImage(l), o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPIED, { ...(0, M.v)() });
			} catch (e) {
				A(m.Z.Messages.ERROR_COPYING_IMAGE, e), o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, M.v)() });
			}
		};
	return [
		E.ZP.canCopyImage() &&
		(function (e) {
			let n = v(e);
			return null != n && T.has(n);
		})(e)
			? (0, i.jsx)(
					a.MenuItem,
					{
						id: 'copy-image',
						label: m.Z.Messages.COPY_IMAGE_MENU_ITEM,
						action: R
					},
					'copy-image'
				)
			: null,
		(0, i.jsx)(
			a.MenuItem,
			{
				id: 'save-image',
				label: m.Z.Messages.SAVE_IMAGE_MENU_ITEM,
				action: d
			},
			'save-image'
		)
	];
}
