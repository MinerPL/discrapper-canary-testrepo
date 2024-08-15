t(47120);
var a = t(735250),
	l = t(470079),
	i = t(120356),
	n = t.n(i),
	o = t(481060),
	r = t(313201),
	c = t(689938),
	d = t(323362);
let _ = (e) => {
	let { index: s, title: t, selected: l } = e;
	return (0, a.jsxs)('div', {
		className: n()(d.overviewStep, { [d.selected]: l }),
		children: [
			(0, a.jsx)(o.Text, {
				className: d.stepIndex,
				variant: 'text-sm/normal',
				children: s + 1
			}),
			(0, a.jsx)(o.Text, {
				variant: 'text-md/normal',
				className: d.stepTitle,
				children: t
			})
		]
	});
};
s.Z = (e) => {
	let {
			className: s,
			title: t,
			stepData: i,
			transitionState: E,
			onClose: N,
			completeButtonText: I,
			overviewFooter: T,
			onNextPressed: M,
			onPrevPressed: m,
			onComplete: x,
			sequencerClassName: u,
			initialStep: L = 0,
			forceStep: O,
			submitting: C = !1,
			autoCloseOnComplete: h = !0
		} = e,
		[A, p] = l.useState([]),
		[S, f] = l.useState(L),
		g = (0, r.Dt)();
	l.useEffect(() => {
		p([...Array(i.length).keys()]);
	}, [i.length]);
	let v = null != O ? O : S,
		b = i[v],
		D = 0 === v,
		j = v === i.length - 1,
		R = null != I ? I : c.Z.Messages.DONE,
		U = l.useCallback(() => {
			null == m || m(), f(v - 1);
		}, [m, v, f]);
	return (0, a.jsxs)(o.ModalRoot, {
		size: o.ModalSize.MEDIUM,
		className: n()(d.container, s),
		transitionState: E,
		'aria-labelledby': g,
		children: [
			(0, a.jsxs)('div', {
				className: d.overviewSidebar,
				children: [
					(0, a.jsx)(o.Heading, {
						id: g,
						variant: 'heading-xl/semibold',
						className: d.header,
						children: t
					}),
					(0, a.jsx)('div', {
						className: d.overviewSteps,
						children: i.map((e, s) =>
							(0, a.jsx)(
								_,
								{
									index: s,
									title: e.overviewTitle,
									selected: s === v
								},
								s
							)
						)
					}),
					T
				]
			}),
			(0, a.jsxs)('div', {
				className: d.modal,
				children: [
					(0, a.jsxs)(o.ModalContent, {
						children: [
							(0, a.jsx)(o.ModalCloseButton, {
								focusProps: {
									offset: {
										top: 4,
										right: 4,
										left: 4
									}
								},
								onClick: N,
								className: d.closeButton
							}),
							(0, a.jsx)(o.Sequencer, {
								step: v,
								steps: A,
								sideMargin: 24,
								verticalMargin: 24,
								className: n()(d.sequencer, u),
								innerClassName: d.innerSequencer,
								children: b.modalContent
							})
						]
					}),
					(0, a.jsxs)(o.ModalFooter, {
						className: d.footer,
						children: [
							(0, a.jsx)(o.Button, {
								type: 'submit',
								submitting: C,
								onClick: () => {
									j ? (x(), h && N()) : (null == M || M(), f(v + 1));
								},
								color: o.Button.Colors.GREEN,
								disabled: b.disableNextStep,
								children: j ? R : c.Z.Messages.NEXT
							}),
							D
								? null
								: (0, a.jsx)(o.Button, {
										look: o.Button.Looks.LINK,
										color: o.Button.Colors.PRIMARY,
										size: o.Button.Sizes.MIN,
										onClick: U,
										children: c.Z.Messages.BACK
									})
						]
					})
				]
			})
		]
	});
};
