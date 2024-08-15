n.d(t, {
	a: function () {
		return S;
	}
}),
	n(47120);
var r,
	i,
	a,
	s = n(735250),
	o = n(470079),
	l = n(120356),
	u = n.n(l),
	c = n(692547),
	d = n(481060),
	_ = n(169525),
	E = n(823379),
	f = n(689938),
	h = n(775448);
function p(e, t, n) {
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
((a = r || (r = {})).TEXT = 'text'), (a.ATTACHMENT = 'attachment'), (a.EMBED = 'embed');
let m = (e) => {
		let { className: t } = e;
		return (0, s.jsx)('div', {
			className: u()(h.spoilerWarning, t),
			children: f.Z.Messages.SPOILER
		});
	},
	I = (e) => {
		let { className: t, isSingleMosaicItem: n, obscureOnly: r } = e;
		return (0, s.jsx)('div', {
			className: u()(h.explicitContentWarning, t),
			children: r
				? null
				: (0, s.jsxs)(s.Fragment, {
						children: [
							(0, s.jsx)(d.ImageWarningIcon, {
								size: 'lg',
								color: c.Z.colors.WHITE
							}),
							n &&
								(0, s.jsx)(d.Text, {
									variant: 'text-sm/normal',
									color: 'always-white',
									className: h.explicitContentWarningText,
									children: f.Z.Messages.EXPLICIT_CONTENT_WARNING
								})
						]
					})
		});
	},
	T = (e) => {
		let { reason: t = _.wk.SPOILER, className: n, isSingleMosaicItem: r = !1 } = e;
		switch (t) {
			case _.wk.SPOILER:
				return (0, s.jsx)(m, { className: n });
			case _.wk.EXPLICIT_CONTENT:
				return (0, s.jsx)(I, {
					isSingleMosaicItem: r,
					className: n
				});
			case _.wk.POTENTIAL_EXPLICIT_CONTENT:
				return (0, s.jsx)(I, {
					isSingleMosaicItem: r,
					className: n,
					obscureOnly: !0
				});
			default:
				return (0, E.vE)(t);
		}
	},
	g = (e) => {
		let { obscureReason: t, isVisible: n, handleToggleObscurity: r, obscurityControlClassName: i } = e;
		return t !== _.wk.EXPLICIT_CONTENT
			? null
			: (0, s.jsx)('div', {
					className: u()(h.obscureButtonContainer, i),
					children: (0, s.jsx)(d.Clickable, {
						className: u()(h.obscureHoverButton),
						onClick: r,
						'aria-label': f.Z.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
						children: n
							? (0, s.jsx)(d.EyeIcon, {
									size: 'md',
									color: 'currentColor'
								})
							: (0, s.jsx)(d.EyeSlashIcon, {
									size: 'md',
									color: 'currentColor'
								})
					})
				});
	},
	S = o.createContext(!1);
class A extends (i = o.PureComponent) {
	renderWithTooltip(e) {
		return (0, s.jsx)(d.Tooltip, {
			position: 'left',
			text: this.state.visible ? null : this.tooltipText,
			children: (t) => {
				let { onMouseEnter: n, onMouseLeave: r } = t;
				return o.cloneElement(o.Children.only(e), {
					onMouseEnter: n,
					onMouseLeave: r
				});
			}
		});
	}
	renderObscuredAttachment() {
		let { children: e, inline: t, className: n, containerStyles: r, obscured: i = !0, reason: a = _.wk.SPOILER, isSingleMosaicItem: o = !1, obscurityControlClassName: l } = this.props,
			{ visible: c } = this.state,
			E = (0, s.jsx)(S.Consumer, {
				children: (E) => {
					let f = E || c || !i;
					return [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(a) && !t
						? (0, s.jsxs)('div', {
								'aria-label': f ? void 0 : this.ariaLabel,
								'aria-expanded': f,
								style: r,
								className: u()(n, h.spoilerContent, h.spoilerContainer, {
									[h.hidden]: !f,
									[h.constrainedObscureContent]: o
								}),
								role: f ? 'presentation' : 'button',
								tabIndex: f ? -1 : 0,
								children: [
									f || t
										? null
										: (0, s.jsx)(T, {
												reason: a,
												isSingleMosaicItem: o
											}),
									(0, s.jsx)('div', {
										'aria-hidden': !f,
										className: h.spoilerInnerContainer,
										children: e(!f)
									}),
									(0, s.jsx)(g, {
										obscureReason: a,
										isVisible: c,
										handleToggleObscurity: this.handleToggleObscurity,
										obscurityControlClassName: l
									})
								]
							})
						: (0, s.jsxs)(d.Clickable, {
								onClick: f ? void 0 : this.removeObscurity,
								'aria-label': f ? void 0 : this.ariaLabel,
								'aria-expanded': f,
								style: r,
								className: u()(n, h.spoilerContent, h.spoilerContainer, {
									[h.hidden]: !f,
									[h.hiddenSpoiler]: !f
								}),
								role: f ? 'presentation' : 'button',
								tabIndex: f ? -1 : 0,
								children: [
									f || t
										? null
										: (0, s.jsx)(T, {
												reason: a,
												isSingleMosaicItem: o
											}),
									(0, s.jsx)('div', {
										'aria-hidden': !f,
										className: h.spoilerInnerContainer,
										children: e(!f)
									})
								]
							});
				}
			});
		return t ? this.renderWithTooltip(E) : E;
	}
	renderObscuredEmbed() {
		let { children: e, className: t, containerStyles: n, isSingleMosaicItem: r, obscurityControlClassName: i, reason: a = _.wk.SPOILER } = this.props,
			{ visible: o } = this.state;
		return (0, s.jsx)(S.Consumer, {
			children: (l) => {
				let c = l || o;
				return [_.wk.EXPLICIT_CONTENT, _.wk.POTENTIAL_EXPLICIT_CONTENT].includes(a)
					? (0, s.jsxs)('div', {
							'aria-label': o ? void 0 : this.ariaLabel,
							'aria-expanded': c,
							style: n,
							className: u()(t, h.spoilerContent, h.spoilerContainer, { [h.hidden]: !c }),
							role: c ? 'presentation' : 'button',
							tabIndex: c ? -1 : 0,
							children: [
								c
									? null
									: (0, s.jsx)(T, {
											reason: a,
											isSingleMosaicItem: r
										}),
								(0, s.jsx)('div', {
									'aria-hidden': !c,
									className: h.spoilerInnerContainer,
									children: e(!c)
								}),
								(0, s.jsx)(g, {
									obscureReason: a,
									isVisible: o,
									handleToggleObscurity: this.handleToggleObscurity,
									obscurityControlClassName: i
								})
							]
						})
					: (0, s.jsxs)(d.Clickable, {
							'aria-label': this.ariaLabel,
							'aria-expanded': c,
							className: u()(t, h.spoilerContent, h.spoilerContainer, { [h.hidden]: !c }),
							onClick: c ? void 0 : this.removeObscurity,
							style: n,
							role: c ? 'presentation' : 'button',
							tabIndex: c ? -1 : 0,
							children: [
								c
									? null
									: (0, s.jsx)(T, {
											reason: a,
											className: h.embed
										}),
								(0, s.jsx)('div', {
									'aria-hidden': !c,
									children: e(!c)
								})
							]
						});
			}
		});
	}
	renderObscuredText() {
		let { children: e, renderTextElement: t, className: n } = this.props,
			{ visible: r } = this.state,
			i = (0, s.jsx)(S.Consumer, {
				children: (i) => {
					let a = i || r,
						l = o.Children.toArray(e(a)),
						c = o.Children.map(l, (e) => (o.isValidElement(e) && null != t ? t(e, a) : e));
					return (0, s.jsx)(d.Clickable, {
						tag: 'span',
						onClick: a ? void 0 : this.removeObscurity,
						'aria-label': a ? void 0 : this.ariaLabel,
						'aria-expanded': a,
						tabIndex: a ? -1 : 0,
						role: a ? 'presentation' : 'button',
						className: u()(n, h.spoilerContent, h.spoilerMarkdownContent, { [h.hidden]: !a }),
						children: (0, s.jsx)('span', {
							className: h.obscuredTextContent,
							children: (0, s.jsx)('span', {
								'aria-hidden': !a,
								className: h.obscuredTextContentInner,
								children: c
							})
						})
					});
				}
			});
		return this.renderWithTooltip(i);
	}
	render() {
		let { type: e = 'text' } = this.props;
		switch (e) {
			case 'text':
				return this.renderObscuredText();
			case 'attachment':
				return this.renderObscuredAttachment();
			case 'embed':
				return this.renderObscuredEmbed();
			default:
				return (0, E.vE)(e);
		}
	}
	get ariaLabel() {
		let { reason: e = _.wk.SPOILER } = this.props;
		switch (e) {
			case _.wk.SPOILER:
				return f.Z.Messages.SPOILER;
			case _.wk.EXPLICIT_CONTENT:
				return f.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
			case _.wk.POTENTIAL_EXPLICIT_CONTENT:
				return f.Z.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
			default:
				return (0, E.vE)(e);
		}
	}
	get tooltipText() {
		let { reason: e = _.wk.SPOILER } = this.props;
		switch (e) {
			case _.wk.SPOILER:
				return f.Z.Messages.SPOILER;
			case _.wk.EXPLICIT_CONTENT:
				return f.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
			case _.wk.POTENTIAL_EXPLICIT_CONTENT:
				return f.Z.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
			default:
				return (0, E.vE)(e);
		}
	}
	constructor(...e) {
		super(...e),
			p(this, 'state', { visible: !1 }),
			p(this, 'removeObscurity', (e) => {
				let { visible: t } = this.state;
				if (t) return;
				!t && (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
				let { onReveal: n } = this.props;
				null != n && n();
			}),
			p(this, 'handleToggleObscurity', (e) => {
				e.stopPropagation(), e.nativeEvent.stopPropagation();
				let { onToggleObscurity: t } = this.props;
				null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
			}),
			p(this, 'obscure', () => {
				let { visible: e } = this.state;
				e && this.setState({ visible: !1 });
			});
	}
}
p(A, 'Types', r), p(A, 'Reasons', _.wk), (t.Z = A);
