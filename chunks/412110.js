t.d(A, {
	V: function () {
		return i;
	}
});
var a = t(735250);
t(470079);
var n = t(952265),
	r = t(776045),
	s = t(871388),
	o = t(981631),
	l = t(689938);
function i(e, A, i) {
	var d, c, u;
	switch (e.code) {
		case o.evJ.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
			(0, s.B)(
				l.Z.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE,
				l.Z.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY,
				r.IconVariant.DANGER
			);
			break;
		case o.evJ.TWO_FA_NOT_ENABLED:
			(0, s.B)(
				l.Z.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE,
				l.Z.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY,
				r.IconVariant.WARNING
			);
			break;
		case o.evJ.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
			(0, s.B)(
				l.Z.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE,
				l.Z.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY,
				r.IconVariant.WARNING
			);
			break;
		case o.evJ.MONETIZATION_TERMS_NOT_ACCEPTED:
			(d = A),
				(0, n.ZD)(async () => {
					let { default: e } = await t.e('31835').then(t.bind(t, 393809));
					return (A) =>
						(0, a.jsx)(e, {
							guildId: d,
							...A
						});
				});
			break;
		case o.evJ.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
			(0, s.B)(
				l.Z.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE,
				l.Z.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY,
				r.IconVariant.WARNING
			);
			break;
		case o.evJ.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
			let C, g;
			null != i
				? ((C = l.Z.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK),
					(g = { url: o.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i) }))
				: (C = l.Z.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY),
				(0, s.B)(
					l.Z.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE,
					C,
					r.IconVariant.WARNING,
					g
				);
			break;
		default:
			let T =
				null !== (u = e.getFirstFieldErrorMessage(['published'])) && void 0 !== u
					? u
					: (null === (c = e.hasFieldErrors) || void 0 === c ? void 0 : c.call(e))
						? void 0
						: e.message;
			if (null != T) (0, s.B)(l.Z.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, T, r.IconVariant.WARNING);
	}
}
