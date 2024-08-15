l.d(n, {
	Z: function () {
		return o;
	}
});
var s = l(735250);
l(470079);
var a = l(481060),
	t = l(195367),
	i = l(689938),
	r = l(271004);
function o(e) {
	let { isSlideReady: n, ...l } = e;
	return (0, s.jsxs)('div', {
		className: r.__invalid_slideContainer,
		children: [
			(0, s.jsxs)('div', {
				className: r.header,
				children: [
					(0, s.jsx)(a.Heading, {
						variant: 'heading-xl/semibold',
						children: i.Z.Messages.GUILD_EVENT_CREATE_HEADER
					}),
					(0, s.jsx)(a.Text, {
						color: 'header-secondary',
						className: r.text,
						variant: 'text-sm/normal',
						children: i.Z.Messages.GUILD_EVENT_CREATE_BODY
					})
				]
			}),
			(0, s.jsx)(t.Z, {
				...l,
				canSetFocus: n
			})
		]
	});
}
