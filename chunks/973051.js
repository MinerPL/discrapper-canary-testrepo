n.d(t, {
	Z: function () {
		return _;
	}
}),
	n(47120);
var s = n(735250),
	r = n(470079),
	o = n(399606),
	l = n(780384),
	i = n(481060),
	a = n(410030),
	d = n(367907),
	c = n(863249),
	u = n(944163),
	m = n(768762),
	p = n(454585),
	h = n(626135),
	g = n(981631),
	x = n(689938),
	f = n(379946);
function _(e) {
	var t;
	let {
			guild: n,
			prompts: _,
			completeOnboarding: N,
			setCurrentStep: I,
			disableTracking: b,
			previousPromptIndex: C
		} = e,
		E = r.useRef(null),
		v = (0, o.e7)([u.Z], () => u.Z.getRulesPrompt(n.id)),
		[j, O] = r.useState(null !== (t = null == v ? void 0 : v.response) && void 0 !== t && t),
		Z = (0, o.e7)([u.Z], () => u.Z.get(n.id)),
		B = (0, a.ZP)(),
		R = r.useRef(null),
		T = r.useRef(null),
		D = (0, l.wj)(B)
			? 'linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))'
			: 'linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))',
		M = r.useCallback(async () => {
			if (null != Z && null != v) {
				try {
					await c.Z.submitVerificationForm(n.id, {
						...Z,
						formFields: [
							{
								...v,
								response: j
							}
						]
					});
				} catch {}
				N();
			}
		}, [n.id, Z, v, j, N]);
	function P(e) {
		let [t] = e;
		t.isIntersecting && O(!0);
	}
	return (r.useEffect(() => {
		let e = new IntersectionObserver(P, {
				root: R.current,
				rootMargin: '0px',
				threshold: 0
			}),
			t = T.current;
		return (
			null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
			() => {
				null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
			}
		);
	}, [T, R]),
	null == v)
		? null
		: (0, s.jsx)('div', {
				className: f.prompt,
				children: (0, s.jsxs)('div', {
					className: f.promptContent,
					ref: R,
					children: [
						(0, s.jsxs)(i.AdvancedScrollerThin, {
							className: f.scrollerContent,
							ref: E,
							children: [
								(0, s.jsx)(i.Text, {
									variant: 'text-sm/medium',
									color: 'text-muted',
									children: x.Z.Messages.ONBOARDING_RULES_STEP
								}),
								(0, s.jsx)(i.Heading, {
									variant: 'heading-xl/semibold',
									children: x.Z.Messages.ONBOARDING_RULES_TITLE
								}),
								(0, s.jsx)('div', {
									className: f.termsFieldBody,
									ref: T,
									children: v.values.map((e, t) =>
										(0, s.jsxs)(
											'div',
											{
												className: f.termsRow,
												children: [
													(0, s.jsx)(i.Text, {
														variant: 'text-sm/normal',
														color: 'text-muted',
														children: ''.concat(t + 1, '.')
													}),
													(0, s.jsx)(i.Text, {
														variant: 'text-sm/normal',
														className: f.termsRowContent,
														children: p.Z.parseGuildVerificationFormRule(e, !0, { channelId: n.rulesChannelId })
													})
												]
											},
											'term-'.concat(t)
										)
									)
								})
							]
						}),
						(0, s.jsx)('div', {
							className: f.overlay,
							style: { background: D }
						}),
						(0, s.jsxs)('div', {
							className: f.navButtons,
							children: [
								(0, s.jsx)('div', {
									className: f.leftButtons,
									children:
										-1 !== C &&
										(0, s.jsxs)(i.Button, {
											innerClassName: f.buttonInner,
											onClick: () => {
												!b &&
													(h.default.track(g.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
														...(0, d.hH)(n.id),
														step: -1,
														skipped: !1,
														back: !0,
														options_selected: 0,
														in_onboarding: !0,
														is_final_step: !1
													}),
													C >= 0 &&
														h.default.track(g.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
															...(0, d.hH)(n.id),
															step: C,
															required: _[C].required
														})),
													I(C);
											},
											size: i.Button.Sizes.MEDIUM,
											look: i.Button.Looks.OUTLINED,
											grow: !1,
											color: i.Button.Colors.PRIMARY,
											children: [
												(0, s.jsx)(m.Z, {
													className: f.arrow,
													direction: m.Z.Directions.LEFT
												}),
												x.Z.Messages.BACK
											]
										})
								}),
								(0, s.jsxs)('div', {
									className: f.rightButtons,
									children: [
										(0, s.jsx)(i.Text, {
											className: f.helpText,
											variant: 'text-xs/normal',
											color: 'text-muted',
											children: j
												? x.Z.Messages.MEMBER_VERIFICATION_READ_AGREE_RULES
												: x.Z.Messages.MEMBER_VERIFICATION_MUST_READ_RULES
										}),
										(0, s.jsxs)(i.Button, {
											innerClassName: f.buttonInner,
											onClick: M,
											disabled: !j,
											size: i.Button.Sizes.MEDIUM,
											look: i.Button.Looks.FILLED,
											grow: !1,
											color: i.Button.Colors.BRAND,
											children: [
												x.Z.Messages.FINISH,
												(0, s.jsx)('span', {
													className: f.finishEmoji,
													role: 'img',
													'aria-hidden': !0,
													children: '\uD83C\uDF89'
												})
											]
										})
									]
								})
							]
						})
					]
				})
			});
}
