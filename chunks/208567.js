l.d(n, {
	S: function () {
		return T;
	}
}),
	l(47120);
var s,
	a = l(735250),
	t = l(470079),
	i = l(120356),
	r = l.n(i),
	o = l(512722),
	d = l.n(o),
	c = l(481060),
	u = l(624138),
	E = l(792125),
	_ = l(813197),
	I = l(981631),
	x = l(689938),
	m = l(953752);
function N(e, n, l) {
	return (
		n in e
			? Object.defineProperty(e, n, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[n] = l),
		e
	);
}
function T(e) {
	let { className: n, icon: l = null } = e;
	return (0, a.jsx)('div', {
		className: r()(m.imageUploaderIcon, n, (0, E.Q)(I.BRd.LIGHT)),
		children: l
	});
}
class h extends (s = t.PureComponent) {
	handleExternalFileChange(e) {
		d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
	}
	render() {
		var e;
		let n, l, s, t;
		let { image: i, hint: o, name: d, makeURL: E, disabled: N, onChange: h, showIcon: g, showIconDisabled: v, className: S, imageClassName: C, iconClassName: L, iconWrapperClassName: A, icon: Z, hideSize: f, imageStyle: j, showRemoveButton: M, maxFileSizeBytes: D, onFileSizeError: R, onOpenImageSelectModal: p, 'aria-label': V } = this.props;
		if (
			(null != (n = null != i && /^data:/.test(i) ? i : E(i))
				? (l = 'url("'.concat(n, '")'))
				: null != d &&
					(s = (0, a.jsx)(c.Heading, {
						variant: 'heading-xxl/normal',
						color: 'always-white',
						className: m.imageUploaderAcronym,
						children: (0, u.Zg)(d)
					})),
			N)
		)
			return (0, a.jsx)('div', {
				className: r()(m.imageUploader, m.disabled, S),
				children: (0, a.jsxs)('div', {
					className: r()(m.imageUploaderInner, C),
					style: {
						...j,
						backgroundImage: l
					},
					children: [
						s,
						v &&
							(0, a.jsx)('div', {
								className: r()(m.imageUploaderIcon, m.imageUploaderIconDisabled, L),
								children: Z
							})
					]
				})
			});
		null != i
			? (t = (0, a.jsx)(c.Anchor, {
					className: m.removeButton,
					onClick: this.handleRemove,
					children: x.Z.Messages.REMOVE
				}))
			: !f &&
				(t = (0, a.jsx)('small', {
					className: m.sizeInfo,
					children: x.Z.Messages.MINIMUM_SIZE.format({ size: I.IXf })
				}));
		let G = null !== (e = null != V ? V : o) && void 0 !== e ? e : x.Z.Messages.CHANGE_AVATAR;
		return (0, a.jsxs)('div', {
			className: r()(m.imageUploader, S),
			children: [
				(0, a.jsx)(c.FocusRing, {
					within: !0,
					children: (0, a.jsxs)('div', {
						className: g ? r()(m.imageUploaderIconWrapper, A) : void 0,
						children: [
							(0, a.jsxs)('div', {
								className: r()(m.imageUploaderInner, C),
								style: {
									...j,
									backgroundImage: l
								},
								children: [
									(0, a.jsx)('span', {
										'aria-hidden': !0,
										children: s
									}),
									null != p
										? (0, a.jsx)(c.Clickable, {
												className: m.imageUploaderFileInput,
												'aria-label': G,
												onClick: p
											})
										: (0, a.jsx)(_.ZP, {
												ref: this.inputRef,
												onChange: h,
												className: m.imageUploaderFileInput,
												'aria-label': G,
												tabIndex: 0,
												maxFileSizeBytes: D,
												onFileSizeError: R
											})
								]
							}),
							null != o &&
								(0, a.jsx)('div', {
									className: m.imageUploaderHint,
									'aria-hidden': 'true',
									children: o
								}),
							g &&
								(0, a.jsx)(T, {
									className: L,
									icon: Z
								})
						]
					})
				}),
				M ? t : null
			]
		});
	}
	constructor(...e) {
		super(...e),
			N(this, 'inputRef', t.createRef()),
			N(this, 'handleRemove', () => {
				this.props.onChange(null);
			});
	}
}
N(h, 'defaultProps', {
	name: '',
	makeURL: (e) => e,
	disabled: !1,
	showIcon: !1,
	hideSize: !1,
	showRemoveButton: !0,
	maxFileSizeBytes: 1 / 0,
	icon: null
}),
	(n.Z = h);
