var r = n(735250),
	i = n(470079),
	a = n(481060),
	s = n(600164),
	o = n(689938),
	l = n(509674);
t.Z = (e) => {
	let t,
		{ button: n, submitting: u, disableNext: c, onClick: d, canNavigateBack: _, onBackClicked: E } = e,
		f = i.useRef(null),
		h = null != n && 'cancel' !== n.type,
		p = _ && (null == n ? void 0 : n.type) !== 'done',
		m = h || p;
	if (
		(i.useEffect(() => {
			if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
				var e;
				null === (e = f.current) || void 0 === e || e.focus();
			}
		}, [null == n ? void 0 : n.type]),
		!m)
	)
		return null;
	let I = o.Z.Messages.DONE;
	return (
		(null == n ? void 0 : n.type) === 'submit' ? ((I = o.Z.Messages.MOBILE_REPORTS_SUBMIT_REPORT), (t = a.Button.Colors.RED)) : (null == n ? void 0 : n.type) === 'next' ? (I = o.Z.Messages.NEXT) : (null == n ? void 0 : n.type) === 'cancel' && ((I = o.Z.Messages.CANCEL), (t = a.Button.Colors.TRANSPARENT)),
		(0, r.jsxs)(a.ModalFooter, {
			direction: s.Z.Direction.HORIZONTAL,
			children: [
				p &&
					(0, r.jsx)(a.Button, {
						onClick: E,
						color: a.Button.Colors.TRANSPARENT,
						disabled: u,
						children: o.Z.Messages.BACK
					}),
				h &&
					(0, r.jsx)(a.Button, {
						onClick: () => {
							if (null != n) d(n);
						},
						color: t,
						className: l.actionButton,
						disabled: u || c,
						buttonRef: f,
						children: I
					})
			]
		})
	);
};
