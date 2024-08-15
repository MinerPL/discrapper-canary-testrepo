var i = n(735250);
n(470079);
var a = n(481060),
	s = n(689938),
	l = n(358758);
t.Z = (e) => {
	let { guild: t, onClose: r } = e;
	return (0, i.jsxs)('div', {
		className: l.container,
		children: [
			(0, i.jsx)('img', {
				alt: '',
				className: l.image,
				src: n(238980)
			}),
			(0, i.jsxs)('div', {
				className: l.content,
				children: [
					(0, i.jsx)(a.Heading, {
						variant: 'heading-md/semibold',
						children: s.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({ guild: t.name })
					}),
					(0, i.jsx)(a.Text, {
						color: 'header-secondary',
						variant: 'text-sm/normal',
						children: s.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
					}),
					(0, i.jsx)('div', {
						className: l.buttonContainer,
						children: (0, i.jsx)(a.Button, {
							onClick: r,
							children: s.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
						})
					})
				]
			})
		]
	});
};
