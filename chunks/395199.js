l(724458), l(653041), l(47120);
var n,
	t = l(735250),
	r = l(470079),
	a = l(120356),
	i = l.n(a),
	o = l(442837),
	d = l(215569),
	u = l(481060),
	c = l(600164),
	C = l(777789),
	m = l(78839),
	S = l(709054),
	I = l(689938),
	M = l(816748);
function _(e, s, l) {
	return (
		s in e
			? Object.defineProperty(e, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[s] = l),
		e
	);
}
class x extends r.PureComponent {
	render() {
		let { onClose: e } = this.props;
		return (0, t.jsxs)(u.ModalHeader, {
			separator: !1,
			justify: c.Z.Justify.BETWEEN,
			children: [
				(0, t.jsx)(u.Heading, {
					variant: 'heading-md/semibold',
					children: this.props.text
				}),
				null != e ? (0, t.jsx)(u.ModalCloseButton, { onClick: e }) : null
			]
		});
	}
}
function E(e) {
	let { imageClass: s, children: l, error: n, onDismissError: r } = e;
	return (0, t.jsxs)('div', {
		className: M.content,
		children: [
			(0, t.jsx)('div', { className: i()(M.image, s) }),
			l,
			(0, t.jsx)(d.W, {
				children:
					null != n
						? (0, t.jsx)(u.SlideIn, {
								className: M.error,
								children: (0, t.jsx)(u.FormErrorBlock, {
									onDismiss: r,
									children: n.message
								})
							})
						: null
			})
		]
	});
}
let U = (e) => {
	let { canceledCount: s } = e,
		l = (0, o.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription());
	return null == l
		? null
		: (0, t.jsxs)('div', {
				className: M.pendingCancellation,
				children: [
					(0, t.jsx)(u.CircleWarningIcon, {
						size: 'custom',
						width: 20,
						height: 20,
						color: 'currentColor',
						className: M.pendingCancellationIcon
					}),
					(0, t.jsx)(u.Text, {
						variant: 'text-md/normal',
						className: M.pendingCancellationMessage,
						children: I.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
							date: l.currentPeriodEnd,
							canceledCount: s
						})
					})
				]
			});
};
function R(e) {
	let { imageClass: s, blurb: l, guild: n, warning: r, error: a, onDismissError: i, slotCount: o = 1, canceledCount: d = 0 } = e;
	return (0, t.jsxs)(E, {
		imageClass: s,
		error: a,
		onDismissError: i,
		children: [
			(0, t.jsx)(u.Text, {
				variant: 'text-md/normal',
				children: l
			}),
			(0, t.jsx)(C.Z, {
				className: M.guildCard,
				guild: n,
				subscriptionChange: o
			}),
			(0, t.jsx)(u.Text, {
				variant: 'text-md/normal',
				children: r
			}),
			d > 0 ? (0, t.jsx)(U, { canceledCount: d }) : null
		]
	});
}
class h extends r.PureComponent {
	render() {
		let { confirmation: e, confirmationLabel: s, isModifyingSubscription: l, onConfirm: n, onCancel: r } = this.props;
		return (0, t.jsxs)(u.ModalFooter, {
			children: [
				(0, t.jsx)(u.Button, {
					onClick: n,
					submitting: l,
					'aria-label': s,
					children: e
				}),
				(0, t.jsx)(u.Button, {
					look: u.Button.Looks.LINK,
					color: u.Button.Colors.PRIMARY,
					onClick: r,
					disabled: l,
					children: I.Z.Messages.CANCEL
				})
			]
		});
	}
}
class N extends (n = r.PureComponent) {
	render() {
		let { guild: e, header: s, blurb: l, warning: n, confirmation: a, confirmationLabel: i, imageClass: o, error: d, isModifyingSubscription: c, onConfirm: C, onCancel: m, onDismissError: S, canceledCount: I } = this.props;
		return (0, t.jsxs)(r.Fragment, {
			children: [
				(0, t.jsx)(x, { text: s }),
				(0, t.jsx)(u.ModalContent, {
					children: (0, t.jsx)(R, {
						guild: e,
						blurb: l,
						warning: n,
						imageClass: o,
						error: d,
						onDismissError: S,
						canceledCount: I
					})
				}),
				(0, t.jsx)(h, {
					confirmation: a,
					confirmationLabel: i,
					isModifyingSubscription: c,
					onConfirm: C,
					onCancel: m
				})
			]
		});
	}
}
_(N, 'Header', x),
	_(N, 'ApplyBody', R),
	_(N, 'TransferBody', function (e) {
		var s, l;
		let { imageClass: n, blurb: a, fromGuilds: i, toGuild: o, error: d, onDismissError: c, slotCount: m = 1, canceledCount: _ = 0 } = e,
			x = r.useRef(i),
			R = null === (s = x.current) || void 0 === s ? void 0 : s.length,
			h = null === (l = x.current) || void 0 === l ? void 0 : l.reduce((e, s) => (!e.hasOwnProperty(s.id) && (e[s.id] = []), e[s.id].push(s), e), {});
		return (0, t.jsxs)(E, {
			imageClass: n,
			error: d,
			onDismissError: c,
			children: [
				(0, t.jsx)(u.Text, {
					variant: 'text-md/normal',
					children: a
				}),
				(0, t.jsx)(u.Text, {
					variant: 'text-xs/bold',
					className: M.transferGuildCardHeader,
					children: I.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({ guildCount: R })
				}),
				null != h
					? S.default.keys(h).map((e) =>
							(0, t.jsx)(
								C.Z,
								{
									className: M.transferFromGuildCard,
									guild: h[e][0],
									subscriptionChange: -1 * h[e].length
								},
								e
							)
						)
					: null,
				(0, t.jsx)(u.Text, {
					variant: 'text-xs/normal',
					className: M.transferGuildCardHeader,
					children: I.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({ slotCount: m })
				}),
				(0, t.jsx)('div', {
					className: M.activeTransferGuildCardBorder,
					children: (0, t.jsx)(C.Z, {
						className: M.transferToGuildCard,
						guild: o,
						subscriptionChange: null != i ? i.length : 1
					})
				}),
				_ > 0 ? (0, t.jsx)(U, { canceledCount: _ }) : null
			]
		});
	}),
	_(N, 'Footer', h),
	(s.Z = N);
