var s = n(735250);
n(470079);
var a = n(120356),
	r = n.n(a),
	i = n(481060),
	l = n(785681),
	o = n(231994),
	c = n(689938),
	d = n(909481),
	_ = n(224499);
let u = (e) => {
	let { header: t, description: n, icon: a, inModal: l } = e;
	return (0, s.jsxs)('div', {
		className: r()(d.row, _.marginBottom8, { [d.inModal]: l }),
		children: [
			(0, s.jsx)('div', {
				className: d.iconContainer,
				children: a
			}),
			(0, s.jsxs)('div', {
				children: [
					(0, s.jsx)(i.Text, {
						className: d.header,
						variant: 'text-sm/bold',
						color: 'header-primary',
						children: t
					}),
					(0, s.jsx)(i.Text, {
						variant: 'text-xs/medium',
						color: 'header-secondary',
						children: n
					})
				]
			})
		]
	});
};
t.Z = (e) => {
	let { inModal: t } = e,
		n = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT),
		a = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT),
		r = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT),
		_ = (0, l.o)(c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
	return (0, s.jsxs)('div', {
		children: [
			(0, s.jsx)(i.Text, {
				className: d.groupHeader,
				variant: 'text-xxs/bold',
				color: 'header-secondary',
				children: n
			}),
			(0, s.jsx)(u, {
				header: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
				description: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
				icon: (0, s.jsx)(i.FriendsIcon, {
					size: 'custom',
					width: 20,
					height: 20,
					color: i.tokens.colors.WHITE.css
				}),
				inModal: t
			}),
			(0, s.jsx)(u, {
				header: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
				description: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
				icon: (0, s.jsx)(i.ServerGridIcon, {
					size: 'custom',
					width: 20,
					height: 20,
					color: i.tokens.colors.WHITE.css
				}),
				inModal: t
			}),
			(0, s.jsx)(u, {
				header: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
				description: c.Z.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
				icon: (0, s.jsx)(o.Z, {
					width: 20,
					height: 20,
					color: i.tokens.colors.WHITE.css
				}),
				inModal: t
			}),
			(0, s.jsx)(i.Text, {
				className: d.groupHeader,
				variant: 'text-xxs/bold',
				color: 'header-secondary',
				children: a
			}),
			(0, s.jsx)(u, {
				header: r,
				description: _,
				icon: (0, s.jsx)(i.XSmallIcon, {
					size: 'custom',
					width: 20,
					height: 20,
					color: i.tokens.colors.WHITE.css
				}),
				inModal: t
			})
		]
	});
};
