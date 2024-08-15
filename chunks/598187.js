n.d(t, {
	Z: function () {
		return H;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(913527),
	o = n.n(l),
	c = n(722770),
	u = n(320285),
	d = n(688813),
	_ = n(442837),
	E = n(692547),
	I = n(481060),
	m = n(256638),
	T = n(385499),
	h = n(528011),
	N = n(533244),
	f = n(825829),
	C = n(226192),
	p = n(36459),
	g = n(434404),
	S = n(103575),
	A = n(204197),
	R = n(592125),
	x = n(271383),
	O = n(594174),
	M = n(464891),
	v = n(348238),
	L = n(83561),
	Z = n(834129),
	P = n(981631),
	b = n(674563),
	D = n(689938),
	j = n(549766);
function U() {
	return (0, i.jsx)('div', { className: j.dot });
}
function y(e) {
	let { message: t, compact: n } = e,
		{ notificationType: a } = (0, f.FL)(t);
	switch (a) {
		case f.nj:
		case u.p.RAID:
			return (0, i.jsx)(F, {
				message: t,
				compact: n
			});
		case u.p.MENTION_RAID:
			return (0, i.jsx)(w, {
				message: t,
				compact: n
			});
		case u.p.ACTIVITY_ALERTS_ENABLED:
			return (0, i.jsx)(G, {
				message: t,
				compact: n
			});
		case u.p.INTERACTION_BLOCKED:
			return (0, i.jsx)(k, { compact: n });
		default:
			return (0, i.jsx)(B, { compact: n });
	}
}
function B(e) {
	let { compact: t } = e;
	return (0, i.jsx)(V, {
		compact: t,
		header: (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsx)(I.CircleWarningIcon, {
					size: 'xs',
					color: E.Z.colors.HEADER_SECONDARY.css
				}),
				(0, i.jsx)(I.Text, {
					variant: 'text-md/semibold',
					color: 'header-secondary',
					children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
				})
			]
		}),
		content: (0, i.jsx)(I.Text, {
			variant: 'text-md/normal',
			color: 'text-muted',
			children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
		})
	});
}
function k(e) {
	let { compact: t } = e;
	return (0, i.jsx)(V, {
		compact: t,
		header: (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsx)(I.CircleWarningIcon, {
					size: 'xs',
					color: E.Z.colors.HEADER_SECONDARY.css
				}),
				(0, i.jsx)(I.Text, {
					variant: 'text-md/semibold',
					color: 'header-secondary',
					children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_TITLE
				})
			]
		}),
		content: (0, i.jsx)(I.Text, {
			variant: 'text-md/normal',
			color: 'text-muted',
			children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_DESCRIPTION
		})
	});
}
function G(e) {
	var t;
	let { message: n, compact: s } = e,
		r = O.default.getUser((0, f.Sw)(n)),
		l = null === (t = R.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
		c = null != l && null != r ? x.ZP.getMember(l, r.id) : null,
		{
			avatarSrc: u,
			avatarDecorationSrc: d,
			eventHandlers: _
		} = (0, A.Z)({
			user: r,
			guildId: l,
			size: 12
		});
	return (0, i.jsx)(V, {
		compact: s,
		header: (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsx)(I.SettingsInfoIcon, {
					size: 'xs',
					color: E.Z.colors.TEXT_POSITIVE.css
				}),
				(0, i.jsx)(I.Text, {
					variant: 'text-md/semibold',
					color: 'text-positive',
					children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
				})
			]
		}),
		subheader: (0, i.jsxs)('div', {
			className: j.dotSeparatedRow,
			children: [
				(0, i.jsx)('div', {
					className: j.alertsEnabledSubHeader,
					children:
						null != c &&
						null != r &&
						(0, i.jsxs)(a.Fragment, {
							children: [
								(0, i.jsx)(I.Text, {
									variant: 'text-xs/medium',
									color: 'text-normal',
									children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
								}),
								(0, i.jsx)(I.Popout, {
									renderPopout: function (e) {
										return null == r
											? (0, i.jsx)(i.Fragment, {})
											: (0, i.jsx)(S.Z, {
													...e,
													location: 'AutomodNotification',
													userId: r.id,
													user: r,
													guildId: l,
													channelId: n.channel_id,
													messageId: n.id
												});
									},
									children: (e) =>
										(0, i.jsxs)(I.Clickable, {
											className: j.alertsEnabledSubHeaderAvatarUsername,
											...e,
											children: [
												(0, i.jsx)('div', {
													..._,
													children: (0, i.jsx)(I.Avatar, {
														src: u,
														avatarDecoration: d,
														size: I.AvatarSizes.SIZE_16,
														'aria-label': 'TODO'
													})
												}),
												(0, i.jsxs)(I.Text, {
													variant: 'text-xs/medium',
													style: { color: null != c.colorString ? c.colorString : E.Z.colors.TEXT_NORMAL.css },
													children: [' ', '@', r.username]
												})
											]
										})
								})
							]
						})
				}),
				(0, i.jsx)(U, {}),
				(0, i.jsx)(I.Text, {
					variant: 'text-xs/medium',
					color: 'text-normal',
					children: o()(n.timestamp).fromNow()
				})
			]
		}),
		content: (0, i.jsx)(I.Text, {
			variant: 'text-md/normal',
			color: 'text-muted',
			children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
		})
	});
}
function F(e) {
	var t;
	let { message: n, compact: s } = e,
		{ joinAttempts: r, raidDatetime: l, dmsSent: u, raidType: m, resolvedReason: T } = (0, f.FL)(n),
		p = (0, _.e7)([R.Z], () => R.Z.getChannel(n.channel_id), [n.channel_id]),
		g = null !== (t = null == p ? void 0 : p.guild_id) && void 0 !== t ? t : null,
		{ shouldShowIncidentActions: S } = (0, h.mI)(g),
		A = (0, v.sR)(n.author.id, n.channel_id),
		x = a.useCallback(() => {
			let e = null == p ? void 0 : p.guild_id;
			null != e && (0, C.kW)(n.id, e);
		}, [n.id, p]),
		O = m === d.$.DM_RAID,
		M = O ? I.CircleWarningIcon : I.ChatWarningIcon;
	return (0, i.jsx)(V, {
		compact: s,
		header: (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsx)(M, {
					size: 'xs',
					color: E.Z.colors.TEXT_DANGER.css
				}),
				(0, i.jsx)(I.Text, {
					variant: 'text-md/semibold',
					color: 'text-danger',
					children: O ? D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
				})
			]
		}),
		subheader: (0, i.jsxs)('div', {
			className: j.dotSeparatedRow,
			children: [
				null != r &&
					(0, i.jsx)(I.Text, {
						variant: 'text-xs/medium',
						color: 'text-normal',
						children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({ joinCount: r })
					}),
				null != u &&
					(0, i.jsx)(I.Text, {
						variant: 'text-xs/medium',
						color: 'text-normal',
						children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({ dmsSent: u })
					}),
				null != l &&
					(0, i.jsxs)(a.Fragment, {
						children: [
							(0, i.jsx)(U, {}),
							(0, i.jsx)(I.Text, {
								variant: 'text-xs/medium',
								color: 'text-normal',
								children: o()(l).fromNow()
							})
						]
					})
			]
		}),
		content:
			null != l
				? (0, i.jsx)(I.Text, {
						variant: 'text-md/normal',
						color: 'text-muted',
						children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({ dateTime: l.toLocaleString(D.Z.getLocale(), N.pQ) })
					})
				: null,
		footerButtons: S
			? (0, i.jsxs)('div', {
					className: j.dotSeparatedRow,
					children: [
						(0, i.jsx)(I.Button, {
							onClick: (e) => {
								A(e);
							},
							color: I.Button.Colors.LINK,
							look: I.Button.Looks.LINK,
							size: I.Button.Sizes.SMALL,
							className: j.buttonStyle,
							children: (0, i.jsxs)('div', {
								className: j.footerAction,
								children: [
									(0, i.jsx)(I.ShieldIcon, {
										size: 'xs',
										color: c.Z.BLUE_345,
										className: j.footerIcon
									}),
									(0, i.jsx)(I.Text, {
										variant: 'text-xs/medium',
										color: 'text-link',
										children: D.Z.Messages.ACTIONS
									})
								]
							})
						}),
						(0, i.jsx)(U, {}),
						(0, i.jsx)(I.Button, {
							onClick: x,
							color: I.Button.Colors.LINK,
							look: I.Button.Looks.LINK,
							size: I.Button.Sizes.SMALL,
							className: j.buttonStyle,
							children: (0, i.jsx)('div', {
								className: j.footerAction,
								children: (0, i.jsx)(I.Text, {
									variant: 'text-xs/medium',
									color: 'text-link',
									children: (0, f.ge)(T)
								})
							})
						})
					]
				})
			: null
	});
}
function w(e) {
	var t;
	let { message: n, compact: s } = e,
		r = null === (t = R.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
		{ raidDatetime: l, decisionId: c, suspiciousMentionActivityUntil: u } = (0, f.FL)(n);
	return (0, i.jsx)(V, {
		compact: s,
		header: (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsx)(I.CircleWarningIcon, {
					size: 'xs',
					color: E.Z.colors.TEXT_DANGER.css
				}),
				(0, i.jsx)(I.Text, {
					variant: 'text-md/semibold',
					color: 'text-danger',
					children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
				})
			]
		}),
		subheader: (0, i.jsx)('div', {
			className: j.dotSeparatedRow,
			children:
				null != l &&
				(0, i.jsx)(I.Text, {
					variant: 'text-xs/medium',
					color: 'text-normal',
					children: o()(l).fromNow()
				})
		}),
		content: (0, i.jsx)(I.Text, {
			variant: 'text-md/normal',
			color: 'text-muted',
			children: D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
		}),
		footerButtons: (0, i.jsxs)('div', {
			className: j.dotSeparatedRow,
			children: [
				(0, i.jsx)(I.Button, {
					onClick: function () {
						null != r &&
							null != c &&
							(0, p.UE)(r, c, () => {
								(0, m.c)(u), (0, p.T9)(r);
							});
					},
					color: I.Button.Colors.LINK,
					look: I.Button.Looks.LINK,
					size: I.Button.Sizes.SMALL,
					className: j.buttonStyle,
					children: (0, i.jsx)('div', {
						className: j.footerAction,
						children: (0, i.jsx)(I.Text, {
							variant: 'text-xs/medium',
							color: 'text-link',
							children: D.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
						})
					})
				}),
				(0, i.jsx)(U, {}),
				(0, i.jsx)(I.Button, {
					onClick: function () {
						null != r && g.Z.open(r, P.pNK.GUILD_AUTOMOD, void 0, P.KsC.AUTOMOD_MENTION_SPAM);
					},
					color: I.Button.Colors.LINK,
					look: I.Button.Looks.LINK,
					size: I.Button.Sizes.SMALL,
					className: j.buttonStyle,
					children: (0, i.jsx)('div', {
						className: j.footerAction,
						children: (0, i.jsx)(I.Text, {
							variant: 'text-xs/medium',
							color: 'text-link',
							children: D.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
						})
					})
				})
			]
		})
	});
}
function V(e) {
	let { compact: t, header: n, subheader: a, content: s, footerButtons: l } = e;
	return (0, i.jsx)(i.Fragment, {
		children: (0, i.jsxs)('div', {
			className: r()(j.embedCard, { [j.compact]: t }),
			children: [
				(0, i.jsxs)('div', {
					className: j.cardContent,
					children: [
						(0, i.jsxs)('div', {
							className: j.cardHeaderContianer,
							children: [
								(0, i.jsx)('div', {
									className: j.cardHeader,
									children: n
								}),
								null != a &&
									(0, i.jsx)('div', {
										className: j.subheader,
										children: a
									})
							]
						}),
						s
					]
				}),
				null != l &&
					(0, i.jsx)('div', {
						className: r()(j.centeredRowContainer, j.cardFooter, { [j.compact]: t }),
						children: l
					})
			]
		})
	});
}
function H(e) {
	let { id: t, compact: n, message: a, channel: s } = e,
		{
			avatarSrc: l,
			eventHandlers: { onMouseEnter: o, onMouseLeave: c }
		} = (0, L.m)(!0),
		{ notificationType: d } = (0, f.FL)(a),
		_ = null == d || d === u.p.RAID;
	return (0, i.jsx)('div', {
		onMouseEnter: o,
		onMouseLeave: c,
		children: (0, i.jsx)(Z.Z, {
			className: r()(j.mainContainer, { [j.compact]: n }),
			iconNode: n ? null : (0, i.jsx)(L.S, { src: l }),
			iconContainerClassName: j.iconContainer,
			compact: n,
			children: (0, i.jsxs)('div', {
				className: r()(j.content, { [j.compact]: n }),
				children: [
					(0, i.jsx)(M.nD, {
						message: a,
						messageClassname: j.spanCorrection,
						className: r()(j.usernameContainer, j.spanCorrection, { [j.compact]: n }),
						username: (0, i.jsxs)('div', {
							className: j.spanCorrection,
							children: [
								(0, i.jsx)(I.Text, {
									variant: 'text-md/normal',
									color: 'text-brand',
									tag: 'span',
									className: j.username,
									children: D.Z.Messages.GUILD_AUTOMOD_USERNAME
								}),
								(0, i.jsx)(T.Z, {
									type: b.Hb.SYSTEM_DM,
									className: j.systemTag
								}),
								_ &&
									(0, i.jsx)(I.Text, {
										variant: 'text-md/normal',
										color: 'header-primary',
										tag: 'span',
										className: j.spanCorrection,
										children: D.Z.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
									})
							]
						}),
						compact: n,
						showTimestamp: !0
					}),
					(0, i.jsx)('div', { className: j.flexLineBreak }),
					(0, i.jsx)(y, {
						message: a,
						compact: n
					})
				]
			})
		})
	});
}
