a.d(t, {
	Z: function () {
		return E;
	}
});
var n = a(735250);
a(470079);
var s = a(866442),
	l = a(481060),
	i = a(377171),
	r = a(937615),
	c = a(549631),
	o = a(981631),
	d = a(689938),
	_ = a(554234);
function m(e) {
	let { listing: t } = e,
		{ name: a, image: i, description: c } = t,
		d = (0, r.T4)(t.price_tier, o.pKx.USD);
	return (0, n.jsxs)('div', {
		children: [
			(0, n.jsxs)('div', {
				className: _.listingInfoRow,
				children: [
					(0, n.jsx)('img', {
						src: i,
						alt: '',
						className: _.avatar
					}),
					(0, n.jsxs)('div', {
						children: [
							(0, n.jsx)(l.Heading, {
								variant: 'heading-md/medium',
								className: _.tierName,
								children: a
							}),
							(0, n.jsx)(l.Text, {
								variant: 'text-md/medium',
								tag: 'span',
								children: d
							}),
							(0, n.jsx)(l.Text, {
								variant: 'text-xxs/medium',
								tag: 'span',
								children: '/mo.'
							})
						]
					})
				]
			}),
			(0, n.jsxs)('div', {
				className: _.listingRoleRow,
				children: [
					(0, n.jsx)('div', {
						style: { backgroundColor: (0, s.Rf)(t.role_color) },
						className: _.roleColor
					}),
					(0, n.jsx)('img', {
						src: i,
						alt: '',
						className: _.roleIcon
					}),
					(0, n.jsx)(l.Text, {
						variant: 'text-xs/medium',
						children: a
					})
				]
			}),
			(0, n.jsx)(l.Text, {
				variant: 'text-xs/normal',
				className: _.tierDescription,
				children: c
			})
		]
	});
}
function T(e) {
	let { channel: t } = e,
		a = (function (e) {
			switch (e) {
				case o.d4z.GUILD_TEXT:
					return l.TextLockIcon;
				case o.d4z.GUILD_VOICE:
					return l.VoiceLockIcon;
				case o.d4z.GUILD_STAGE_VOICE:
					return l.StageLockIcon;
				case o.d4z.GUILD_FORUM:
					return l.ForumLockIcon;
				case o.d4z.GUILD_MEDIA:
					return l.ImageLockIcon;
				case o.d4z.GUILD_ANNOUNCEMENT:
					return l.AnnouncementsLockIcon;
				default:
					return null;
			}
		})(t.type);
	return (0, n.jsxs)('div', {
		className: _.channelBenefitRow,
		children: [
			null != a &&
				(0, n.jsx)(a, {
					className: _.channelBenefitIcon,
					color: 'currentColor'
				}),
			(0, n.jsxs)('div', {
				className: _.channelBenefitText,
				children: [
					(0, n.jsx)(l.Text, {
						variant: 'text-sm/normal',
						children: t.name
					}),
					(0, n.jsx)(l.Text, {
						variant: 'text-xs/normal',
						className: _.channelBenefitTagline,
						children: t.tagline
					})
				]
			}),
			(0, n.jsx)(c.Z, {
				className: _.__invalid_emojiIcon,
				color: i.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
			})
		]
	});
}
function x(e) {
	let { benefit: t } = e;
	return void 0 === t
		? null
		: (0, n.jsxs)('div', {
				className: _.intangibleBenefitRow,
				children: [
					(0, n.jsx)('div', { className: _.intangibleBenefitIcon }),
					(0, n.jsx)(l.Text, {
						variant: 'text-sm/normal',
						children: t
					})
				]
			});
}
function I(e) {
	let { listing: t } = e;
	return (0, n.jsxs)('div', {
		children: [
			(0, n.jsx)(l.Heading, {
				variant: 'heading-sm/semibold',
				className: _.perksHeader,
				children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PERKS_HEADER
			}),
			(0, n.jsx)(l.Text, {
				variant: 'text-xs/semibold',
				className: _.benefitTypeHeader,
				children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_CHANNELS_HEADER
			}),
			t.channels.map((e) => (0, n.jsx)(T, { channel: e }, e.id)),
			(0, n.jsx)(l.Text, {
				variant: 'text-xs/semibold',
				className: _.benefitTypeHeader,
				children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_BENEFITS_HEADER
			}),
			t.additional_perks.map((e, t) => (0, n.jsx)(x, { benefit: e.name }, t))
		]
	});
}
function E(e) {
	let { selectedTemplate: t, handleSelectTemplate: a } = e;
	if (void 0 === t) return null;
	let s = t.listings[0];
	return (0, n.jsxs)('div', {
		className: _.container,
		children: [
			(0, n.jsxs)(l.ScrollerThin, {
				className: _.content,
				children: [
					(0, n.jsx)(m, { listing: s }),
					(0, n.jsx)('div', { className: _.divider }),
					(0, n.jsx)(I, { listing: s })
				]
			}),
			(0, n.jsx)(l.Button, {
				size: l.Button.Sizes.MEDIUM,
				onClick: () => {
					a(t);
				},
				children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
			})
		]
	});
}
