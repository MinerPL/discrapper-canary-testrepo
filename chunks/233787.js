var n,
	t,
	c = a(735250);
a(470079);
var i = a(481060),
	l = a(600164),
	o = a(690490);
((n = t || (t = {})).UPGRADE = 'UPGRADE'),
	(n.CANCEL = 'CANCEL'),
	(n.UNVERIFIED = 'UNVERIFIED'),
	(n.UNCLAIMED = 'UNCLAIMED'),
	(n.GRANDFATHERED = 'GRANDFATHERED');
let r = {
		UPGRADE: 'imageUpgrade',
		CANCEL: 'imageCancel',
		UNVERIFIED: 'imageUnverified',
		UNCLAIMED: 'imageUnclaimed',
		GRANDFATHERED: 'imageCancel'
	},
	d = (e) => {
		let { children: s, ...a } = e;
		return (0, c.jsx)(i.ModalRoot, {
			...a,
			children: s
		});
	};
(d.Header = (e) => {
	let { children: s, onClose: a } = e;
	return (0, c.jsxs)(i.ModalHeader, {
		justify: l.Z.Justify.BETWEEN,
		separator: !1,
		children: [
			(0, c.jsx)(i.FormTitle, {
				tag: i.FormTitleTags.H4,
				children: s
			}),
			null != a
				? (0, c.jsx)(i.ModalCloseButton, {
						className: o.__invalid_closeIcon,
						onClick: a
					})
				: null
		]
	});
}),
	(d.Content = (e) => {
		let { children: s, type: a } = e;
		return (0, c.jsxs)(i.ModalContent, {
			children: [
				(0, c.jsx)('div', { className: o[r[a]] }),
				(0, c.jsx)('div', {
					className: o.message,
					children: s
				})
			]
		});
	}),
	(d.Footer = (e) => {
		let { primary: s, primaryRenderer: a, secondary: n } = e;
		return (0, c.jsx)(i.ModalFooter, {
			children: (0, c.jsxs)(l.Z, {
				justify: l.Z.Justify.END,
				children: [
					null != n
						? (0, c.jsx)(i.Button, {
								onClick: n.onClick,
								look: i.Button.Looks.LINK,
								innerClassName: o.secondaryButton,
								children: n.label
							})
						: null,
					null != s
						? (0, c.jsx)(i.Button, {
								onClick: s.onClick,
								color: i.Button.Colors.BRAND,
								children: s.label
							})
						: a
				]
			})
		});
	}),
	(d.Types = t),
	(s.Z = d);
