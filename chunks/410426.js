a.d(t, {
	Z: function () {
		return x;
	}
});
var l = a(735250),
	n = a(470079),
	s = a(120356),
	i = a.n(s),
	o = a(399606),
	r = a(481060),
	c = a(547972),
	d = a(556296),
	u = a(13140),
	m = a(435064),
	p = a(981631),
	C = a(332325),
	v = a(689938),
	h = a(801398);
function x(e) {
	let { isEmptyBecauseQuery: t, closePopout: a } = e,
		s = (0, o.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)),
		x = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
		g = t ? h.noSearchResultsImage : h.noClipsImage,
		L = n.useCallback(() => {
			a(), (0, c.Z)(C.Z.CLIPS);
		}, [a]),
		f = (() => {
			if (!x) return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({ onClick: L });
			if (t) return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
			if (null == s) return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({ onClick: L });
			{
				let e = u.BB(s.shortcut, !0);
				return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS.format({
					keybind: e,
					keybindHook: () =>
						(0, l.jsx)('span', {
							className: h.keybindHintKeys,
							children: (0, l.jsx)(r.KeyCombo, {
								className: h.keybindShortcut,
								shortcut: e
							})
						})
				});
			}
		})();
	return (0, l.jsx)('div', {
		className: h.container,
		children: (0, l.jsxs)('div', {
			className: h.content,
			children: [
				(0, l.jsx)('div', { className: g }),
				(0, l.jsx)(r.Text, {
					variant: 'text-md/medium',
					className: i()(h.noClipsText, { [h.noSearchResultsText]: t }),
					children: f
				})
			]
		})
	});
}
