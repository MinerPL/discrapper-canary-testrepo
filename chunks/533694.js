n.d(t, {
	Z: function () {
		return T;
	}
});
var i = n(735250);
n(470079);
var a = n(399606),
	s = n(481060),
	r = n(607070),
	l = n(739566),
	o = n(942951),
	c = n(834129),
	u = n(703656),
	d = n(331372),
	_ = n(981631),
	E = n(689938),
	I = n(87191);
function m(e) {
	let { guildId: t, user: n, username: l } = e,
		o = (0, a.e7)([r.Z], () => !r.Z.useReducedMotion),
		c = n.getAvatarURL(t, 56, o),
		u = (0, i.jsx)('img', {
			src: c,
			className: I.userAvatar,
			alt: ''
		});
	return (0, i.jsxs)('div', {
		className: I.thankYouCard,
		role: 'img',
		'aria-label': E.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({ username: l }),
		children: [
			(0, i.jsx)(d.Z, { avatar: u }),
			(0, i.jsx)(s.Text, {
				className: I.thankYouText,
				tag: 'p',
				color: 'status-positive-text',
				variant: 'heading-xl/medium',
				children: E.Z.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
					username: l,
					usernameHook: (e, t) =>
						(0, i.jsx)(
							s.Text,
							{
								tag: 'span',
								color: 'status-positive-text',
								variant: 'heading-xxl/extrabold',
								lineClamp: 3,
								children: e
							},
							t
						)
				})
			})
		]
	});
}
function T(e) {
	var t, a, s;
	let { channel: r, message: d, compact: I } = e,
		T = (0, l.ZP)(d),
		h = (0, o.l)({
			user: d.author,
			channelId: r.id,
			guildId: r.guild_id,
			messageId: d.id
		})(T),
		N = E.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
			username: T.nick,
			usernameHook: h,
			productName: null !== (s = null === (a = d.purchaseNotification) || void 0 === a ? void 0 : null === (t = a.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== s ? s : '',
			handleProductListingClick: () => {
				var e, t, n;
				(0, u.uL)(_.Z5c.GUILD_PRODUCT(r.guild_id, null !== (n = null === (t = d.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ''));
			}
		});
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)(c.Z, {
				icon: n(570111),
				timestamp: d.timestamp,
				compact: I,
				children: N
			}),
			(0, i.jsx)(m, {
				username: T.nick,
				guildId: r.guild_id,
				user: d.author
			})
		]
	});
}
