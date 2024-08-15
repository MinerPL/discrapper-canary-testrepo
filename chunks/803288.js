n.d(t, {
	T: function () {
		return D;
	},
	Z: function () {
		return j;
	}
}),
	n(757143),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(442837),
	o = n(481060),
	c = n(497321),
	d = n(852860),
	u = n(100527),
	_ = n(367907),
	I = n(906732),
	E = n(263145),
	T = n(807582),
	m = n(26323),
	N = n(366980),
	S = n(246946),
	h = n(709586),
	g = n(267642),
	C = n(999382),
	x = n(621319),
	p = n(44550),
	R = n(770270),
	f = n(981631),
	L = n(30513),
	O = n(689938),
	A = n(684972);
function M(e, t, n) {
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
let D = l.ZP.connectStores([C.Z, p.Z], () => {
	let e = p.Z.vanityURLCode,
		t = C.Z.getGuildId();
	return {
		vanityURLCode: e,
		guildId: t,
		onReset() {
			(0, x.H7)();
		},
		onSave() {
			null != t && (0, x.en)(t, e);
		}
	};
})(d.Z);
class v extends a.PureComponent {
	componentWillUnmount() {
		(0, x.xv)();
	}
	renderEditCard() {
		let { isRemoving: e } = this.state,
			{ hasError: t, originalVanityURLCode: n, vanityURLCode: a, vanityURLUses: i, guild: r } = this.props;
		if (null == a) return (0, s.jsx)(o.Spinner, {});
		let l = (null == r ? void 0 : r.hasFeature(f.oNc.VANITY_URL)) === !0;
		return (0, s.jsxs)(o.Card, {
			editable: !0,
			className: A.editVanityUrlCard,
			children: [
				(0, s.jsxs)(o.FormTitle, {
					className: A.__invalid_formTitle,
					children: [
						(0, s.jsx)('div', {
							className: A.formTitleField,
							children: O.Z.Messages.INVITE_URL
						}),
						a.length > 0 ? (0, s.jsx)('div', { children: O.Z.Messages.VANITY_URL_USES.format({ uses: i }) }) : null
					]
				}),
				(0, s.jsx)(E.Z, {
					prefix: ''.concat('https://discord.gg', '/'),
					value: a,
					onChange: this.handleInviteCodeChange,
					maxLength: 25,
					autoFocus: !0,
					error: t,
					disabled: !l
				}),
				null != n && n.length > 0
					? (0, s.jsx)(o.Button, {
							className: A.removeVanityUrlButton,
							onClick: this.handleRemoveVanityURL,
							submitting: e,
							look: o.Button.Looks.LINK,
							size: o.Button.Sizes.MIN,
							color: o.Button.Colors.RED,
							children: O.Z.Messages.REMOVE_VANITY_URL
						})
					: null
			]
		});
	}
	renderUpsellButton() {
		return (0, s.jsxs)(o.ShinyButton, {
			color: o.Button.Colors.GREEN,
			className: r()(A.marginTop16),
			innerClassName: A.upsellButton,
			onClick: this.handleVanityUrlUpsellButton,
			children: [
				(0, s.jsx)(h.Z, {
					height: 16,
					width: 16,
					className: A.premiumUpsellBadge
				}),
				' ',
				O.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
			]
		});
	}
	renderInfo() {
		let { hasError: e, errorDetails: t, originalVanityURLCode: n } = this.props;
		if (e)
			return (0, s.jsx)(o.Text, {
				variant: 'text-md/normal',
				color: 'text-danger',
				className: A.__invalid_marginTop20,
				children: (0, R.i)(null == t ? void 0 : t.code)
			});
		if (null != n && n.length > 0) {
			let e = (0, N.Z)(n);
			return (0, s.jsx)(o.FormText, {
				className: A.__invalid_marginTop20,
				type: o.FormTextTypes.LABEL_DESCRIPTOR,
				children: O.Z.Messages.VANITY_URL_HELP_EXTENDED_LINK.format({
					urlText: e,
					urlValue: e
				})
			});
		}
	}
	handleRemoveVanityURL() {
		(0, x.Gy)('');
	}
	handleInviteCodeChange(e) {
		(0, x.Gy)(e.replace(/ /g, '-'));
	}
	render() {
		let { hide: e, guild: t } = this.props;
		return null == t
			? null
			: e
				? (0, s.jsx)(c.Z, {})
				: (0, s.jsxs)(o.FormSection, {
						children: [
							(0, s.jsxs)(o.FormTitle, {
								tag: o.FormTitleTags.H1,
								className: A.flexFormTitle,
								children: [
									(0, s.jsx)('div', { children: O.Z.Messages.VANITY_URL }),
									(0, s.jsx)(T.Z, {
										guild: t,
										guildFeature: f.oNc.VANITY_URL,
										className: A.guildFeatureAvailabilityIndicator,
										onClick: this.handleVanityUrlUpsellIndicator
									})
								]
							}),
							(0, s.jsx)(o.FormText, {
								type: o.FormTextTypes.DESCRIPTION,
								className: A.__invalid_marginBottom8,
								children: O.Z.Messages.VANITY_URL_HELP
							}),
							(0, s.jsx)(o.FormText, {
								type: o.FormTextTypes.DESCRIPTION,
								className: A.__invalid_marginBottom20,
								children: O.Z.Messages.VANITY_URL_HELP_CONFLICT
							}),
							(0, s.jsx)(o.FormText, {
								type: o.FormTextTypes.DESCRIPTION,
								className: A.__invalid_marginBottom20,
								children: O.Z.Messages.VANITY_URL_DEFAULT_CHANNEL
							}),
							(0, R.p)(t) ? this.renderEditCard() : this.renderUpsellButton(),
							this.renderInfo()
						]
					});
	}
	constructor(...e) {
		super(...e),
			M(this, 'state', { isRemoving: !1 }),
			M(this, 'handleShowModalUpsell', (e, t, n, s, a) => {
				e.preventDefault(), e.stopPropagation();
				let { guild: i, analyticsLocations: r } = this.props;
				null != i &&
					((0, _.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
						location: {
							section: n,
							object: f.qAy.LEARN_MORE,
							objectType: (0, g.ge)(t),
							location_stack: r
						},
						guild_id: null == i ? void 0 : i.id
					}),
					(0, m.Z)({
						analyticsLocations: r,
						analyticsSourceLocation: {
							section: n,
							object: s,
							page: f.ZY5.GUILD_SETTINGS
						},
						guild: i,
						perks: a
					}));
			}),
			M(this, 'handleVanityUrlUpsellIndicator', (e) => {
				this.handleShowModalUpsell(e, f.Eu4.TIER_3, f.jXE.GUILD_SETTINGS_VANITY_URL, f.qAy.BADGE, (0, L.WW)());
			}),
			M(this, 'handleVanityUrlUpsellButton', (e) => {
				this.handleShowModalUpsell(e, f.Eu4.TIER_3, f.jXE.GUILD_SETTINGS_VANITY_URL, f.qAy.BUTTON_CTA, (0, L.WW)());
			});
	}
}
function j() {
	let e = (0, l.e7)([C.Z], () => C.Z.getGuild()),
		t = (0, l.cj)([p.Z], () => ({
			vanityURLCode: p.Z.vanityURLCode,
			vanityURLUses: p.Z.vanityURLUses,
			originalVanityURLCode: p.Z.originalVanityURLCode,
			hasError: p.Z.hasError(),
			errorDetails: p.Z.errorDetails
		})),
		n = (0, l.e7)([S.Z], () => S.Z.hideInstantInvites),
		{ analyticsLocations: a } = (0, I.ZP)(u.Z.VANITY_URL);
	return (0, s.jsx)(I.Gt, {
		value: a,
		children: (0, s.jsx)(v, {
			guild: e,
			...t,
			hide: n,
			analyticsLocations: a
		})
	});
}
