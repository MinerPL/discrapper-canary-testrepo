n.d(t, {
	o: function () {
		return _;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(481060),
	l = n(788307),
	o = n(2052),
	c = n(695346),
	d = n(689938),
	u = n(684351);
function _(e) {
	let { customStatus: t, focusedClassName: a, analyticsLocations: _, trackUserProfileAction: E } = e,
		h = (0, o.O)(),
		m = () => {
			(0, r.openModalLazy)(async () => {
				let { default: e } = await n.e('51714').then(n.bind(n, 211065));
				return (t) =>
					(0, i.jsx)(e, {
						sourceAnalyticsContext: h,
						sourceAnalyticsLocations: _,
						...t
					});
			});
		};
	return null != t
		? (0, i.jsx)(r.MenuItem, {
				id: 'edit-custom-status',
				label: d.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
				focusedClassName: a,
				icon:
					null != t.emoji
						? (e) => {
								let { className: n } = e;
								return (0, i.jsx)(l.I, {
									className: n,
									emoji: t.emoji,
									animate: !0,
									hideTooltip: !0
								});
							}
						: void 0,
				showIconFirst: !0,
				hint: (e) =>
					(0, i.jsx)(r.Clickable, {
						...e,
						onClick: (e) => {
							e.stopPropagation(),
								E({
									action: 'PRESS_CLEAR_CUSTOM_STATUS',
									analyticsLocations: _
								}),
								c.Ok.updateSetting(void 0);
						},
						tabIndex: -1,
						children: (0, i.jsx)(r.CircleXIcon, {
							size: 'sm',
							color: 'currentColor'
						})
					}),
				action: () => {
					E({
						action: 'PRESS_EDIT_CUSTOM_STATUS',
						analyticsLocations: _
					}),
						m();
				}
			})
		: (0, i.jsx)(r.MenuItem, {
				id: 'add-custom-status',
				focusedClassName: a,
				label: d.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
				icon: (e) => (0, i.jsx)('div', { className: s()(u.customEmojiPlaceholder, e) }),
				showIconFirst: !0,
				action: () => {
					E({
						action: 'PRESS_ADD_CUSTOM_STATUS',
						analyticsLocations: _
					}),
						m();
				}
			});
}
