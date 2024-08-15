n.r(t),
	n.d(t, {
		default: function () {
			return D;
		}
	}),
	n(47120);
var s = n(735250),
	i = n(470079),
	r = n(392711),
	o = n.n(r),
	l = n(442837),
	a = n(481060),
	d = n(846027),
	u = n(825209),
	c = n(600164),
	h = n(313201),
	m = n(382577),
	p = n(131951),
	g = n(36703),
	_ = n(981631),
	b = n(65154),
	E = n(689938),
	C = n(433787),
	R = n(224499);
function f(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let T = (0, h.hQ)(),
	O = (0, h.hQ)(),
	M = (0, h.hQ)();
class x extends i.PureComponent {
	handleValueRender(e) {
		return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
	}
	renderAutomaticVADToggle() {
		let { autoThreshold: e } = this.props;
		return (0, s.jsx)(h.FG, {
			children: (t) =>
				(0, s.jsxs)(c.Z, {
					className: R.marginBottom4,
					children: [
						(0, s.jsx)(a.FormTitle, {
							tag: a.FormTitleTags.H3,
							children: (0, s.jsx)('label', {
								htmlFor: t,
								children: E.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
							})
						}),
						(0, s.jsx)(a.Switch, {
							id: t,
							checked: e,
							onChange: this.handleAutoThresholdChange
						})
					]
				})
		});
	}
	renderSlider() {
		let { autoThreshold: e, threshold: t } = this.props;
		if (!e)
			return (0, s.jsx)(a.Slider, {
				initialValue: t + 100,
				onValueRender: this.handleValueRender,
				onValueChange: this.handleSensitivityChange,
				'aria-label': E.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
			});
	}
	render() {
		return (0, s.jsxs)(a.FormItem, {
			title: E.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
			className: R.marginBottom8,
			children: [this.renderAutomaticVADToggle(), this.renderSlider()]
		});
	}
	constructor(...e) {
		super(...e),
			f(this, 'handleAutoThresholdChange', (e) => {
				let { onThresholdChange: t, threshold: n } = this.props;
				null == t || t(n, e);
			}),
			f(this, 'handleSensitivityChange', (e) => {
				let { onThresholdChange: t, autoThreshold: n } = this.props;
				null == t || t(-((100 - e) * 1), n);
			});
	}
}
let I = l.ZP.connectStores([p.Z], (e) => {
	let { mediaEngineContext: t } = e;
	return {
		inputVolume: p.Z.getInputVolume(),
		outputVolume: p.Z.getOutputVolume(),
		inputDeviceId: p.Z.getInputDeviceId(),
		inputDevices: p.Z.getInputDevices(),
		outputDevices: p.Z.getOutputDevices(),
		outputDeviceId: p.Z.getOutputDeviceId(),
		inputMode: p.Z.getMode(t),
		shortcut: p.Z.getModeOptions(t).shortcut,
		vadThreshold: p.Z.getModeOptions(t).threshold,
		vadAutoThreshold: p.Z.getModeOptions(t).autoThreshold,
		delay: p.Z.getModeOptions(t).delay
	};
})((e) => {
	let t,
		{
			mediaEngineContext: n,
			inputMode: r,
			shortcut: l,
			delay: c,
			vadThreshold: h,
			vadAutoThreshold: m,
			inputDevices: p,
			inputDeviceId: b,
			inputVolume: C,
			outputDeviceId: f,
			outputDevices: I,
			outputVolume: D,
			speaking: Z = !1
		} = e,
		v = o().first(p),
		N = null != v && v.disabled,
		j = o().first(I),
		S = null != j && j.disabled,
		U = [
			{
				value: _.pM4.VOICE_ACTIVITY,
				name: E.Z.Messages.INPUT_MODE_VAD
			},
			{
				value: _.pM4.PUSH_TO_TALK,
				name: E.Z.Messages.INPUT_MODE_PTT
			}
		];
	return (
		(t =
			r === _.pM4.PUSH_TO_TALK
				? (0, s.jsxs)(i.Fragment, {
						children: [
							(0, s.jsx)(a.FormItem, {
								title: E.Z.Messages.FORM_LABEL_SHORTCUT,
								className: R.marginBottom20,
								children: (0, s.jsx)(u.Z, {
									defaultValue: l,
									onChange: (e) => d.Z.setMode(r, { shortcut: e }, n)
								})
							}),
							(0, s.jsxs)(a.FormItem, {
								className: R.marginBottom8,
								children: [
									(0, s.jsx)(a.FormTitle, {
										id: T,
										children: E.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
									}),
									(0, s.jsx)(a.Slider, {
										initialValue: c,
										onValueChange: (e) => d.Z.setMode(r, { delay: e }, n),
										onValueRender: (e) =>
											e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms'),
										maxValue: _.qhL,
										'aria-labelledby': T
									})
								]
							})
						]
					})
				: (0, s.jsx)(x, {
						speaking: Z,
						inputMode: r,
						threshold: h,
						autoThreshold: m,
						onThresholdChange: (e, t) =>
							d.Z.setMode(
								r,
								{
									threshold: e,
									autoThreshold: t
								},
								n
							)
					})),
		(0, s.jsxs)(i.Fragment, {
			children: [
				(0, s.jsx)(a.FormItem, {
					title: E.Z.Messages.FORM_LABEL_INPUT_DEVICE,
					className: R.marginBottom20,
					children: (0, s.jsx)(a.SingleSelect, {
						value: b,
						onChange: (e) => d.Z.setInputDevice(e, 'Voice Settings'),
						options: o().map(p, (e) => {
							let { id: t, name: n } = e;
							return {
								value: t,
								label: n
							};
						}),
						isDisabled: N
					})
				}),
				(0, s.jsxs)(a.FormItem, {
					className: R.marginBottom20,
					children: [
						(0, s.jsx)(a.FormTitle, {
							id: O,
							children: E.Z.Messages.FORM_LABEL_INPUT_VOLUME
						}),
						(0, s.jsx)(a.Slider, {
							initialValue: (0, g.P)(C),
							asValueChanges: (e) => d.Z.setInputVolume((0, g.A)(e)),
							'aria-labelledby': O
						})
					]
				}),
				(0, s.jsx)(a.FormItem, {
					title: E.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
					className: R.marginBottom20,
					children: (0, s.jsx)(a.SingleSelect, {
						value: f,
						onChange: (e) => d.Z.setOutputDevice(e, 'Voice Settings'),
						options: o().map(I, (e) => {
							let { id: t, name: n } = e;
							return {
								value: t,
								label: n
							};
						}),
						isDisabled: S
					})
				}),
				(0, s.jsxs)(a.FormItem, {
					className: R.marginBottom20,
					children: [
						(0, s.jsx)(a.FormTitle, {
							id: M,
							children: E.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
						}),
						(0, s.jsx)(a.Slider, {
							initialValue: (0, g.P)(D),
							maxValue: 200,
							asValueChanges: (e) => d.Z.setOutputVolume((0, g.A)(e)),
							'aria-labelledby': M
						})
					]
				}),
				(0, s.jsx)(a.FormItem, {
					title: E.Z.Messages.FORM_LABEL_INPUT_MODE,
					className: R.marginBottom20,
					children: (0, s.jsx)(a.RadioGroup, {
						onChange: (e) => {
							let { value: t } = e;
							return d.Z.setMode(t, {}, n);
						},
						options: U,
						value: r
					})
				}),
				t
			]
		})
	);
});
function D(e) {
	var t;
	return (
		(0, m.Z)(() => {
			null != _.e3s && e.onClose();
		}),
		(0, s.jsxs)(a.ModalRoot, {
			transitionState: e.transitionState,
			'aria-label': E.Z.Messages.VOICE_SETTINGS,
			children: [
				(0, s.jsxs)(a.ModalHeader, {
					children: [
						(0, s.jsxs)(c.Z.Child, {
							children: [
								(0, s.jsx)(a.FormTitle, {
									tag: 'h1',
									className: R.marginReset,
									children: E.Z.Messages.VOICE_SETTINGS
								}),
								(0, s.jsx)(a.Text, {
									variant: 'text-xs/normal',
									className: C.title,
									children: e.title
								})
							]
						}),
						(0, s.jsx)(c.Z.Child, {
							grow: 0,
							children: (0, s.jsx)(a.ModalCloseButton, { onClick: e.onClose })
						})
					]
				}),
				(0, s.jsx)(a.ModalContent, {
					children: (0, s.jsx)(I, {
						mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : b.Yn.DEFAULT
					})
				})
			]
		})
	);
}
