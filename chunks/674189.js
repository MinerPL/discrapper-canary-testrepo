t.r(i),
	t.d(i, {
		default: function () {
			return p;
		}
	}),
	t(47120);
var n = t(735250),
	l = t(470079),
	s = t(512722),
	a = t.n(s),
	d = t(481060),
	u = t(313201),
	r = t(560067),
	o = t(434404),
	c = t(430824),
	I = t(313741),
	S = t(7801),
	C = t(689938),
	E = t(770782);
function _(e) {
	let { className: i, guildId: t, onChange: l, isGuildIncluded: s } = e,
		{ options: a } = (0, S.Z)({ isGuildIncluded: s });
	return (0, n.jsx)(d.SearchableSelect, {
		className: i,
		onChange: l,
		value: t,
		options: a,
		placeholder: C.Z.Messages.GUILD_SELECT
	});
}
function p(e) {
	let { transitionState: i, onClose: t, feature: s, section: S, subsection: C } = e,
		p = (0, u.Dt)(),
		{ canCreateGuild: G, createGuildCta: T, createGuildDescription: g, selectGuildCta: R, title: Z, description: L, isGuildSupported: N } = (0, I.K)(s),
		[m, D] = l.useState(),
		[h, O] = l.useState(!1),
		f = async () => {
			var e;
			O(!0);
			let i = await new Promise((e) => {
				r.Z.openCreateGuildModal({ onSuccess: e });
			});
			await ((e = i),
			new Promise((i) => {
				c.Z.addChangeListener(function t() {
					null != c.Z.getGuild(e) && (c.Z.removeChangeListener(t), i());
				});
			})),
				o.Z.open(i, S, void 0, C),
				null == t || t();
		};
	return (0, n.jsxs)(d.ModalRoot, {
		transitionState: i,
		'aria-labelledby': p,
		children: [
			(0, n.jsxs)(d.ModalHeader, {
				className: E.modalHeader,
				separator: !1,
				children: [
					(0, n.jsx)(d.Heading, {
						id: p,
						variant: 'heading-lg/medium',
						children: Z
					}),
					(0, n.jsx)(d.ModalCloseButton, { onClick: t })
				]
			}),
			(0, n.jsxs)(d.ModalContent, {
				className: E.modalContent,
				children: [
					(0, n.jsx)(d.Text, {
						variant: 'text-md/medium',
						children: L
					}),
					(0, n.jsx)(d.Spacer, { size: 16 }),
					(0, n.jsxs)('div', {
						className: E.guildSelection,
						children: [
							(0, n.jsx)('div', {
								className: E.guildSelectorContainer,
								children: (0, n.jsx)(_, {
									guildId: m,
									onChange: D,
									isGuildIncluded: N
								})
							}),
							(0, n.jsx)(d.Button, {
								onClick: () => {
									a()(null != m, 'Guild ID must not be null on click'), o.Z.open(m, S, void 0, C), null == t || t();
								},
								disabled: null == m,
								children: R
							})
						]
					}),
					G &&
						(0, n.jsxs)(n.Fragment, {
							children: [
								(0, n.jsx)(d.Spacer, { size: 32 }),
								(0, n.jsx)(d.Text, {
									variant: 'text-md/medium',
									children: g
								}),
								(0, n.jsx)(d.Spacer, { size: 8 }),
								(0, n.jsx)(d.Button, {
									onClick: f,
									submitting: h,
									children: T
								})
							]
						})
				]
			})
		]
	});
}
