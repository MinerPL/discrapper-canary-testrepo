n.d(t, {
	Z: function () {
		return d;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(898531),
	o = n(314897),
	l = n(131951),
	u = n(689938),
	c = n(526535);
function d(e) {
	let t = (0, a.useModalContext)(),
		d = (0, i.e7)([l.Z], () => l.Z.isVideoEnabled()),
		_ = (0, i.e7)([o.default], () => o.default.getId() === e),
		E = (0, s.Z)();
	return (!d || E) && _
		? (0, r.jsx)(a.MenuItem, {
				id: 'change-video-background',
				label: (0, r.jsx)('div', {
					className: c.item,
					children: d ? u.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : u.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
				}),
				action: function () {
					(0, a.openModalLazy)(
						async () => {
							let { default: e } = await Promise.all([n.e('5528'), n.e('59967')]).then(n.bind(n, 601572));
							return (t) =>
								(0, r.jsx)(e, {
									...t,
									videoEnabled: d
								});
						},
						{
							modalKey: 'camera-preview',
							contextKey: t
						}
					);
				}
			})
		: null;
}
