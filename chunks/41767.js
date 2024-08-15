t.r(n),
	t.d(n, {
		default: function () {
			return u;
		}
	}),
	t(47120);
var a = t(735250),
	r = t(470079),
	_ = t(481060),
	s = t(313201),
	l = t(556012),
	A = t(590433),
	o = t(689938),
	I = t(723527);
let O = (e) => {
	var n;
	let { duration: t, onSelectDuration: r } = e,
		s = (0, A.tr)(),
		l = s.find((e) => e.value === t);
	return (0, a.jsx)(_.FormItem, {
		className: I.durationSelector,
		required: !0,
		children: (0, a.jsx)(_.SearchableSelect, {
			value: null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : A.UK.DURATION_60_SEC,
			options: s,
			onChange: (e) => {
				let n = s.find((n) => n.value === e);
				null != n && r(n.value);
			},
			placeholder: o.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
		})
	});
};
function u(e) {
	let { action: n, triggerType: t, isEdit: u, onUpdateDuration: c, onClose: i, transitionState: S } = e,
		N = (0, s.Dt)(),
		[E, C] = r.useState(() => (null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : A.UK.DURATION_60_SEC)),
		M = (0, l.c)(n.type, n, t);
	if (null == M) return null;
	let { headerText: d } = M;
	return (0, a.jsxs)(_.ModalRoot, {
		transitionState: S,
		'aria-labelledby': N,
		size: _.ModalSize.SMALL,
		children: [
			(0, a.jsxs)(_.ModalContent, {
				className: I.actionContentContainer,
				children: [
					(0, a.jsx)(_.Heading, {
						id: N,
						color: 'header-primary',
						variant: 'heading-lg/semibold',
						className: I.header,
						children: d
					}),
					(0, a.jsx)(_.Text, {
						color: 'header-secondary',
						variant: 'text-sm/normal',
						children: o.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
					}),
					(0, a.jsx)(O, {
						duration: E,
						onSelectDuration: (e) => {
							C(e);
						}
					})
				]
			}),
			(0, a.jsxs)(_.ModalFooter, {
				children: [
					(0, a.jsx)(_.Button, {
						onClick: () => {
							c(E);
						},
						color: _.Button.Colors.BRAND,
						size: _.Button.Sizes.SMALL,
						children: u ? o.Z.Messages.EDIT : o.Z.Messages.SAVE
					}),
					(0, a.jsx)(_.Button, {
						onClick: () => {
							i();
						},
						color: _.Button.Colors.TRANSPARENT,
						look: _.Button.Looks.LINK,
						children: o.Z.Messages.CANCEL
					})
				]
			})
		]
	});
}
