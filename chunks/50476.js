var s = n(735250),
	o = n(481060),
	a = n(689938),
	r = n(173074);
function l(e) {
	let { onClick: t, children: n } = e;
	return (0, s.jsx)(o.Button, {
		onClick: t,
		className: r.button,
		innerClassName: r.buttonInner,
		look: 'blank',
		children: n
	});
}
t.Z = function (e) {
	let { onDesktop: t, onConsole: n } = e;
	return (0, s.jsxs)('div', {
		className: r.buttons,
		children: [
			(0, s.jsxs)(l, {
				onClick: t,
				children: [a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP, (0, s.jsx)(o.ScreenIcon, {})]
			}),
			(0, s.jsxs)(l, {
				onClick: n,
				children: [a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE, (0, s.jsx)(o.GameControllerIcon, {})]
			})
		]
	});
};
