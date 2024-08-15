t.d(s, {
	L1: function () {
		return S;
	},
	o1: function () {
		return T;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(481060),
	o = t(570140),
	l = t(782568),
	c = t(313201),
	d = t(960359),
	_ = t(524347),
	E = t(853197),
	u = t(689938),
	I = t(144048);
function T(e) {
	let { onClose: s, code: t, copyInputTitle: a, bodyText: i } = e;
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsxs)(r.ModalHeader, {
				separator: !1,
				className: I.headerContainer,
				children: [
					(0, n.jsx)('div', { className: I.dropArt }),
					(0, n.jsx)(r.Heading, {
						variant: 'heading-xl/semibold',
						children: u.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
					})
				]
			}),
			(0, n.jsxs)(r.ModalContent, {
				className: I.modalContent,
				children: [
					(0, n.jsx)(r.Text, {
						variant: 'text-md/normal',
						className: I.codeBodyText,
						children: i
					}),
					(0, n.jsx)(r.FormDivider, { className: I.formDivider }),
					(0, n.jsx)(r.FormSection, {
						title: a,
						className: I.formSection,
						children: (0, n.jsx)(r.Button, {
							onClick: () => (0, l.Z)(t),
							color: r.Button.Colors.BRAND,
							look: r.Button.Looks.FILLED,
							children: u.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
						})
					})
				]
			}),
			(0, n.jsx)(r.ModalFooter, {
				className: I.modalFooter,
				children: (0, n.jsx)(r.Button, {
					className: I.closeButton,
					onClick: s,
					look: r.Button.Looks.LINK,
					color: I.closeButton,
					children: u.Z.Messages.CLOSE
				})
			})
		]
	});
}
function S(e) {
	let { onClose: s, errorCode: t } = e,
		a = {
			260000: u.Z.Messages.DROPS_USER_NOT_ENROLLED_ERROR,
			260001: u.Z.Messages.DROPS_QUEST_NOT_COMPLETED_ERROR,
			260002: u.Z.Messages.DROPS_NO_CODE_AVAILABLE_ERROR,
			260003: u.Z.Messages.DROPS_CODE_ALREADY_CLAIMED_ERROR
		},
		i = u.Z.Messages.GENERIC_ERROR_BODY;
	return (
		null != a[t] && (i = a[t]),
		(0, n.jsxs)(n.Fragment, {
			children: [
				(0, n.jsxs)(r.ModalHeader, {
					separator: !1,
					className: I.errorHeader,
					children: [
						(0, n.jsx)('div', { className: I.errorArt }),
						(0, n.jsx)(r.Heading, {
							variant: 'heading-xl/semibold',
							children: u.Z.Messages.GENERIC_ERROR_TITLE
						})
					]
				}),
				(0, n.jsx)(r.ModalContent, {
					className: I.errorBody,
					children: (0, n.jsx)(r.Text, {
						variant: 'text-md/normal',
						className: I.bodyText,
						children: i
					})
				}),
				(0, n.jsx)(r.ModalFooter, {
					children: (0, n.jsx)(r.Button, {
						color: r.Button.Colors.BRAND,
						onClick: s,
						children: u.Z.Messages.CLOSE
					})
				})
			]
		})
	);
}
s.ZP = function (e) {
	let { onClose: s, code: l, drop: S, platform: N, transitionState: C } = e,
		m = (0, c.Dt)(),
		[A, O] = a.useState();
	a.useEffect(() => {
		null == l &&
			o.Z.wait(async () => {
				await (0, d.dN)(S.dropsQuestId);
			});
	}, [S.dropsQuestId, l]);
	let g = (0, i.e7)([_.Z], () => _.Z.platformAvailability);
	return (0, n.jsx)(r.ModalRoot, {
		transitionState: C,
		'aria-labelledby': m,
		children: (0, n.jsx)(n.Fragment, {
			children: (() => {
				if (null != l)
					return (0, n.jsx)(T, {
						bodyText: S.messages.claimTip(),
						onClose: s,
						copyInputTitle: u.Z.Messages.DROPS_REDEMPTION_CODE_PLATFORM_TITLE.format({ platform: N }),
						code: l
					});
				if (null === g)
					return (0, n.jsx)('div', {
						className: I.spinnerContainer,
						children: (0, n.jsx)(r.Spinner, {})
					});
				{
					let e = g.length > 0,
						a = 1 === g.length;
					return (0, n.jsxs)(n.Fragment, {
						children: [
							(0, n.jsxs)(r.ModalHeader, {
								separator: !1,
								className: I.headerContainer,
								children: [
									(0, n.jsx)('div', { className: I.dropArt }),
									(0, n.jsx)(r.Heading, {
										variant: 'heading-lg/semibold',
										children: u.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
									})
								]
							}),
							(0, n.jsxs)(r.ModalContent, {
								children: [
									(0, n.jsx)(r.Text, {
										variant: 'text-md/normal',
										className: I.dropBodyText,
										children: a ? u.Z.Messages.DROPS_MODAL_CHOOSE_SINGLE_PLATFORM.format({ platform: (0, E.Un)(g[0]) }) : u.Z.Messages.DROPS_MODAL_CHOOSE_PLATFORM.format({ title: S.title })
									}),
									(0, n.jsx)(r.FormDivider, { className: I.formDivider }),
									(0, n.jsxs)(r.FormSection, {
										className: I.dropFormSection,
										children: [
											(0, n.jsx)(r.SingleSelect, {
												onChange: O,
												options: g.map((e) => ({
													value: e,
													label: (0, E.Un)(e)
												})),
												value: a ? g[0] : A,
												isDisabled: !e,
												className: e ? '' : I.selectDangerBorder,
												look: e ? r.SelectLooks.FILLED : r.SelectLooks.CUSTOM
											}),
											!e &&
												(0, n.jsx)(r.Text, {
													variant: 'text-sm/medium',
													color: 'text-danger',
													className: I.errorCodesText,
													children: u.Z.Messages.DROPS_CODES_RAN_OUT
												})
										]
									})
								]
							}),
							(0, n.jsxs)(r.ModalFooter, {
								children: [
									e &&
										(0, n.jsx)(r.Button, {
											color: r.Button.Colors.BRAND,
											onClick: () => {
												(0, r.openModalLazy)(async () => {
													let { default: e } = await t.e('5004').then(t.bind(t, 233070));
													return (t) =>
														(void 0 !== A || a) &&
														(0, n.jsx)(e, {
															...t,
															platform: void 0 === A ? g[0] : A,
															code: l,
															dropsQuestId: S.dropsQuestId,
															closeParentModal: s,
															singlePlatformClaim: a
														});
												});
											},
											disabled: void 0 === A && !a,
											children: u.Z.Messages.UNLOCK_CODE
										}),
									e
										? (0, n.jsx)(r.Button, {
												onClick: s,
												look: r.Button.Looks.LINK,
												color: I.maybeLaterButton,
												children: u.Z.Messages.MAYBE_LATER
											})
										: (0, n.jsx)(r.Button, {
												onClick: s,
												look: r.Button.Looks.LINK,
												color: I.closeButton,
												children: u.Z.Messages.CLOSE
											})
								]
							})
						]
					});
				}
			})()
		})
	});
};
