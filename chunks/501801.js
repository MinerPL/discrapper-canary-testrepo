E.d(_, {
	mp: function () {
		return g;
	},
	tP: function () {
		return f;
	},
	xO: function () {
		return c;
	}
}),
	E(653041);
var s = E(735250),
	T = E(470079),
	I = E(120356),
	n = E.n(I),
	t = E(392711),
	A = E.n(t),
	r = E(913527),
	a = E.n(r),
	N = E(481060),
	l = E(596454),
	L = E(479099),
	S = E(592125),
	D = E(430824),
	U = E(594174),
	G = E(274730),
	O = E(934415),
	o = E(823379),
	i = E(624138),
	M = E(981631),
	u = E(689938),
	R = E(170644);
function c(e, _) {
	let E = G.vc[e.targetType];
	return null != E && !0 === E[_.key];
}
let C = {
	[M.vB8.CREATE]: R.typeCreate,
	[M.vB8.UPDATE]: R.typeUpdate,
	[M.vB8.DELETE]: R.typeDelete
};
function d(e) {
	let { changeItem: _, subChanges: E, changeNumber: T, log: I, oldValue: n, newValue: t, change: A } = e,
		r = null;
	if (('string' == typeof _ && (r = _), null != _ && 'object' == typeof _)) {
		if (null == _.format) {
			let e = _[A.newValue];
			null == e && null != _[G.Et] ? (_ = _[G.Et]) : null != e && (_ = e);
		}
		if (null != _ && null != _.format) {
			var a, S;
			r = _.format({
				user: I.user,
				target: I.target,
				oldValue: n,
				newValue: t,
				count: Array.isArray(t) ? t.length : null,
				subtarget:
					null !== (S = null !== (a = I.options.subtarget) && void 0 !== a ? a : A.subtarget) && void 0 !== S
						? S
						: null,
				newColorHook: (e, _) =>
					(0, s.jsx)(
						'div',
						{
							className: R.colorHook,
							style: { backgroundColor: A.newValue }
						},
						_
					),
				oldColorHook: (e, _) =>
					(0, s.jsx)(
						'div',
						{
							className: R.colorHook,
							style: { backgroundColor: A.oldValue }
						},
						_
					),
				oldTagHook: (e, _) =>
					(0, s.jsx)(
						L.Z,
						{
							tag: n,
							size: L.Z.Sizes.SMALL
						},
						_
					),
				newTagHook: (e, _) =>
					(0, s.jsx)(
						L.Z,
						{
							tag: t,
							size: L.Z.Sizes.SMALL
						},
						_
					),
				oldEmojiHook: (e, _) => (0, s.jsx)(l.Z, { emojiId: n }, _),
				newEmojiHook: (e, _) => (0, s.jsx)(l.Z, { emojiId: t }, _)
			});
		} else r = _;
	}
	return null == r
		? (console.warn('No change string for', A), null)
		: '' === r
			? null
			: (0, s.jsxs)(
					'div',
					{
						className: R.detail,
						style: {
							position: 'relative',
							top: 1
						},
						children: [
							(0, s.jsxs)(N.Text, {
								className: R.prefix,
								variant: 'code',
								color: (function (e) {
									switch (e) {
										case M.vB8.CREATE:
											return 'text-positive';
										case M.vB8.DELETE:
											return 'status-danger';
										default:
											return 'text-warning';
									}
								})(I.actionType),
								children: [
									T < 10 ? '0'.concat(T) : T,
									(0, s.jsx)('span', {
										className: R.dash,
										children: '\u2014'
									})
								]
							}),
							(0, s.jsxs)('div', {
								className: R.change,
								children: [
									(0, s.jsx)('div', {
										className: R.changeStr,
										children: r
									}),
									null != E ? (0, s.jsx)('div', { children: E }) : null
								]
							})
						]
					},
					T
				);
}
class g extends T.PureComponent {
	render() {
		var e, _;
		let { actionType: E, targetType: T, action: I, themeOverride: t } = this.props,
			A = null != t ? R['themeOverride'.concat((0, i.De)(t))] : null;
		let r = n()(
			R.icon,
			C[E],
			((e = T),
			(_ = I) === M.rsA.MESSAGE_DELETE
				? R.targetMessage
				: _ === M.rsA.AUTO_MODERATION_BLOCK_MESSAGE ||
					  _ === M.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL ||
					  _ === M.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
					  _ === M.rsA.AUTO_MODERATION_QUARANTINE_USER
					? R.autoModerationBlockMessage
					: {
							[M.KFR.ALL]: R.targetAll,
							[M.KFR.GUILD]: R.targetGuild,
							[M.KFR.CHANNEL]: R.targetChannel,
							[M.KFR.CHANNEL_OVERWRITE]: R.targetChannel,
							[M.KFR.USER]: R.targetMember,
							[M.KFR.ROLE]: R.targetRole,
							[M.KFR.ONBOARDING_PROMPT]: R.targetOnboarding,
							[M.KFR.GUILD_ONBOARDING]: R.targetOnboarding,
							[M.KFR.HOME_SETTINGS]: R.targetOnboarding,
							[M.KFR.INTEGRATION]: R.targetIntegration,
							[M.KFR.INVITE]: R.targetInvite,
							[M.KFR.WEBHOOK]: R.targetWebhook,
							[M.KFR.EMOJI]: R.targetEmoji,
							[M.KFR.STICKER]: R.targetSticker,
							[M.KFR.STAGE_INSTANCE]: R.targetStageInstance,
							[M.KFR.GUILD_SCHEDULED_EVENT]: R.targetGuildScheduledEvent,
							[M.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: R.targetGuildScheduledEvent,
							[M.KFR.THREAD]: R.thread,
							[M.KFR.APPLICATION_COMMAND]: R.applicationCommand,
							[M.KFR.AUTO_MODERATION_RULE]: R.autoModerationRule,
							[M.KFR.GUILD_HOME]: R.targetGuildHome,
							[M.KFR.GUILD_SOUNDBOARD]: R.targetGuildSoundboard,
							[M.KFR.VOICE_CHANNEL_STATUS]: R.targetChannel
						}[e]),
			A
		);
		return (0, s.jsx)('div', { className: r });
	}
}
function f(e) {
	let { log: _, guild: E, onContentClick: I, className: t } = e,
		r = T.useCallback(
			(e) => {
				if (null == _.changes) return null;
				let T = 0,
					r = A()
						.flatten(
							_.changes.map((I) => {
								let { oldValue: n, newValue: t } = I,
									r = null;
								if (
									(_.action === M.rsA.MEMBER_ROLE_UPDATE
										? (r = (function (e) {
												let { newValue: _ } = e;
												return Array.isArray(_)
													? _.map((e) =>
															(0, s.jsx)(
																'div',
																{
																	className: R.subListItem,
																	children: e.name
																},
																e.id
															)
														)
													: null;
											})(I))
										: _.targetType === M.KFR.ROLE ||
											  _.action === M.rsA.CHANNEL_OVERWRITE_CREATE ||
											  _.action === M.rsA.CHANNEL_OVERWRITE_UPDATE
											? (r = (function (e, _) {
													let { newValue: E } = e;
													return Array.isArray(E)
														? E.map((e, E) =>
																(0, s.jsx)(
																	'div',
																	{
																		className: R.subListItem,
																		children: G.hQ(e, _)
																	},
																	E
																)
															)
														: null;
												})(I, _))
											: (_.action === M.rsA.CHANNEL_UPDATE || _.action === M.rsA.THREAD_UPDATE) &&
												I.key === M.zUn.FLAGS &&
												(r = (function (e) {
													let { newValue: _, oldValue: E } = e,
														T = [];
													return (Array.isArray(E) &&
														(T = T.concat(
															E.map((e) =>
																(0, s.jsx)(
																	'div',
																	{
																		className: R.subListItem,
																		children: G.cT(e)
																	},
																	e
																)
															)
														)),
													Array.isArray(_) &&
														(T = T.concat(
															_.map((e) =>
																(0, s.jsx)(
																	'div',
																	{
																		className: R.subListItem,
																		children: G.em(e)
																	},
																	e
																)
															)
														)),
													T.length > 0)
														? T
														: null;
												})(I)),
									(_.action === M.rsA.CHANNEL_UPDATE || _.action === M.rsA.CHANNEL_CREATE) &&
										I.key === M.zUn.TYPE &&
										(null != n && (n = (0, O.a5)({ type: n })), null != t && (t = (0, O.a5)({ type: t }))),
									_.action === M.rsA.MEMBER_UPDATE && I.key === M.zUn.COMMUNICATION_DISABLED_UNTIL)
								) {
									if (null == (t = a()(t)) || !t.isValid()) return null;
									t = t.calendar();
								}
								(_.action === M.rsA.ONBOARDING_PROMPT_UPDATE || _.action === M.rsA.ONBOARDING_PROMPT_CREATE) &&
									I.key === M.zUn.OPTIONS &&
									(r = (function (e, _, E) {
										let { newValue: T, oldValue: I } = e,
											n = (e) => {
												var _;
												let s =
													null != E ? (null === (_ = D.Z.getRole(E.id, e)) || void 0 === _ ? void 0 : _.name) : void 0;
												return null == s ? null : '@'.concat(s);
											},
											t = (e) => {
												var _;
												let E = null === (_ = S.Z.getChannel(e)) || void 0 === _ ? void 0 : _.name;
												return null == E ? null : '#'.concat(E);
											},
											r = (e, E) => {
												let { title: T, id: I } = E,
													r = e.role_ids.map(n).filter(o.lm),
													a = e.channel_ids.map(t).filter(o.lm),
													l = E.role_ids.map(n).filter(o.lm),
													L = E.channel_ids.map(t).filter(o.lm),
													S = A().difference(l, r),
													D = A().difference(r, l),
													U = A().difference(L, a),
													G = A().difference(a, L),
													O = [];
												return (!A().isEqual(e.title, E.title) && O.push('title'),
												!A().isEqual(e.description, E.description) && O.push('description'),
												0 === S.length && 0 === D.length && 0 === U.length && 0 === G.length && 0 === O.length)
													? null
													: (0, s.jsxs)(
															'li',
															{
																children: [
																	(0, s.jsxs)('div', {
																		className: R.onboardingChangeLogItemTitle,
																		children: [
																			(0, s.jsx)(g, {
																				actionType: M.vB8.UPDATE,
																				targetType: _.targetType,
																				action: _.action
																			}),
																			(0, s.jsx)(N.Text, {
																				variant: 'text-md/normal',
																				children:
																					u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format(
																						{ title: T }
																					)
																			})
																		]
																	}),
																	(0, s.jsxs)('div', {
																		className: R.onboardingChangeLogItemChanges,
																		children: [
																			S.length > 0 &&
																				(0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
																							roles: S.join(', ')
																						})
																				}),
																			D.length > 0 &&
																				(0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format(
																							{ roles: D.join(', ') }
																						)
																				}),
																			U.length > 0 &&
																				(0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format(
																							{ channels: U.join(', ') }
																						)
																				}),
																			G.length > 0 &&
																				(0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format(
																							{ channels: G.join(', ') }
																						)
																				}),
																			O.map((_, T) =>
																				(0, s.jsx)(
																					N.Text,
																					{
																						variant: 'text-md/normal',
																						children:
																							u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format(
																								{
																									key: _,
																									oldValue: e[_],
																									newValue: E[_]
																								}
																							)
																					},
																					T
																				)
																			)
																		]
																	})
																]
															},
															I
														);
											},
											a = A().keyBy(null != I ? I : [], 'id'),
											l = A().keyBy(null != T ? T : [], 'id'),
											L = A()
												.difference(Object.keys(l), Object.keys(a))
												.map((e) => l[e]),
											U = A()
												.difference(Object.keys(a), Object.keys(l))
												.map((e) => a[e]),
											G = A().intersection(Object.keys(l), Object.keys(a));
										return (0, s.jsxs)(
											'ul',
											{
												className: R.onboardingChangeLogContainer,
												children: [
													L.map((e) => {
														let { role_ids: E, channel_ids: T, title: I, id: A } = e,
															r = (null != E ? E : []).map(n).filter(o.lm),
															a = (null != T ? T : []).map(t).filter(o.lm);
														return (0, s.jsxs)(
															'li',
															{
																children: [
																	(0, s.jsxs)('div', {
																		className: R.onboardingChangeLogItemTitle,
																		children: [
																			(0, s.jsx)(g, {
																				actionType: M.vB8.CREATE,
																				targetType: _.targetType,
																				action: _.action
																			}),
																			(0, s.jsx)(N.Text, {
																				variant: 'text-md/normal',
																				children:
																					u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format(
																						{ title: I }
																					)
																			})
																		]
																	}),
																	(0, s.jsxs)('div', {
																		className: R.onboardingChangeLogItemChanges,
																		children: [
																			r.length > 0 &&
																				(0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
																							roles: r.join(', ')
																						})
																				}),
																			a.length > 0 &&
																				(0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format(
																							{ channels: a.join(', ') }
																						)
																				})
																		]
																	})
																]
															},
															A
														);
													}),
													U.map((e) =>
														(0, s.jsx)(
															'li',
															{
																children: (0, s.jsxs)('div', {
																	className: R.onboardingChangeLogItemTitle,
																	children: [
																		(0, s.jsx)(g, {
																			actionType: M.vB8.DELETE,
																			targetType: _.targetType,
																			action: _.action
																		}),
																		(0, s.jsx)(N.Text, {
																			variant: 'text-md/normal',
																			children:
																				u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
																					title: e.title
																				})
																		})
																	]
																})
															},
															e.id
														)
													),
													G.map((e) => r(a[e], l[e]))
												]
											},
											'options'
										);
									})(I, _, E)),
									(_.action === M.rsA.HOME_SETTINGS_CREATE || _.action === M.rsA.HOME_SETTINGS_UPDATE) &&
										(r = (function (e, _) {
											let { oldValue: E, newValue: T, key: I } = e,
												{ targetType: n, action: t } = _;
											switch (I) {
												case M.zUn.WELCOME_MESSAGE:
													return ((e, _) => {
														var E, T, I, n, t;
														let A = U.default.getUser(
																null == _ ? void 0 : null === (E = _.author_ids) || void 0 === E ? void 0 : E[0]
															),
															r = U.default.getUser(null === (T = e.author_ids) || void 0 === T ? void 0 : T[0]),
															a =
																(null == A ? void 0 : A.id) !== (null == r ? void 0 : r.id)
																	? (0, s.jsx)('li', {
																			children: (0, s.jsx)('div', {
																				className: R.onboardingChangeLogItemTitle,
																				children: (0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
																							oldUser:
																								null !== (I = null == A ? void 0 : A.username) && void 0 !== I
																									? I
																									: u.Z.Messages.NONE,
																							newUser:
																								null !== (n = null == r ? void 0 : r.username) && void 0 !== n
																									? n
																									: u.Z.Messages.NONE
																						})
																				})
																			})
																		})
																	: null,
															l =
																(null == _ ? void 0 : _.message) !== e.message
																	? (0, s.jsx)('li', {
																			children: (0, s.jsx)('div', {
																				className: R.onboardingChangeLogItemTitle,
																				children: (0, s.jsx)(N.Text, {
																					variant: 'text-md/normal',
																					children:
																						u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
																							oldMessage:
																								null !== (t = null == _ ? void 0 : _.message) && void 0 !== t
																									? t
																									: u.Z.Messages.NONE,
																							newMessage: e.message
																						})
																				})
																			})
																		})
																	: null;
														return (0, s.jsxs)('ul', {
															children: [a, l]
														});
													})(T, E);
												case M.zUn.NEW_MEMBER_ACTIONS:
													return ((e, _) => {
														let E = e.map((e) => e.channel_id),
															T = _.map((e) => e.channel_id),
															I = A().difference(T, E),
															r = A().difference(E, T),
															a = _.filter((e) => I.includes(e.channel_id)),
															l = e.filter((e) => r.includes(e.channel_id));
														return (0, s.jsxs)('ul', {
															children: [
																a.map((e) =>
																	(0, s.jsx)(
																		'li',
																		{
																			children: (0, s.jsxs)('div', {
																				className: R.onboardingChangeLogItemTitle,
																				children: [
																					(0, s.jsx)(g, {
																						actionType: M.vB8.CREATE,
																						targetType: n,
																						action: t
																					}),
																					(0, s.jsx)(N.Text, {
																						variant: 'text-md/normal',
																						children:
																							u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format(
																								{ name: e.title }
																							)
																					})
																				]
																			})
																		},
																		e.channel_id
																	)
																),
																l.map((e) =>
																	(0, s.jsx)(
																		'li',
																		{
																			children: (0, s.jsxs)('div', {
																				className: R.onboardingChangeLogItemTitle,
																				children: [
																					(0, s.jsx)(g, {
																						actionType: M.vB8.DELETE,
																						targetType: n,
																						action: t
																					}),
																					(0, s.jsx)(N.Text, {
																						variant: 'text-md/normal',
																						children:
																							u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format(
																								{ name: e.title }
																							)
																					})
																				]
																			})
																		},
																		e.channel_id
																	)
																)
															]
														});
													})(null != E ? E : [], T);
												case M.zUn.RESOURCE_CHANNELS:
													return ((e, _) => {
														let E = e.map((e) => e.channel_id),
															T = _.map((e) => e.channel_id),
															I = A().difference(T, E),
															r = A().difference(E, T),
															a = _.filter((e) => I.includes(e.channel_id)),
															l = e.filter((e) => r.includes(e.channel_id));
														return (0, s.jsxs)('ul', {
															children: [
																a.map((e) =>
																	(0, s.jsx)(
																		'li',
																		{
																			children: (0, s.jsxs)('div', {
																				className: R.onboardingChangeLogItemTitle,
																				children: [
																					(0, s.jsx)(g, {
																						actionType: M.vB8.CREATE,
																						targetType: n,
																						action: t
																					}),
																					(0, s.jsx)(N.Text, {
																						variant: 'text-md/normal',
																						children:
																							u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format(
																								{ name: e.title }
																							)
																					})
																				]
																			})
																		},
																		e.channel_id
																	)
																),
																l.map((e) =>
																	(0, s.jsx)(
																		'li',
																		{
																			children: (0, s.jsxs)('div', {
																				className: R.onboardingChangeLogItemTitle,
																				children: [
																					(0, s.jsx)(g, {
																						actionType: M.vB8.DELETE,
																						targetType: n,
																						action: t
																					}),
																					(0, s.jsx)(N.Text, {
																						variant: 'text-md/normal',
																						children:
																							u.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format(
																								{ name: e.title }
																							)
																					})
																				]
																			})
																		},
																		e.channel_id
																	)
																)
															]
														});
													})(null != E ? E : [], T);
												default:
													return null;
											}
										})(I, _));
								let l = e[I.key];
								return c(_, I)
									? null
									: ('function' == typeof l && (l = l(I)), Array.isArray(l))
										? l.map(
												(e) => (
													T++,
													d({
														changeItem: e,
														subChanges: r,
														changeNumber: T,
														log: _,
														oldValue: n,
														newValue: t,
														change: I
													})
												)
											)
										: (T++,
											d({
												changeItem: l,
												subChanges: r,
												changeNumber: T,
												log: _,
												oldValue: n,
												newValue: t,
												change: I
											}));
							})
						)
						.filter(o.lm);
				return (0, s.jsx)(N.Clickable, {
					onClick: I,
					className: n()(R.changeDetails, t),
					children: r
				});
			},
			[_, E, I, t]
		),
		l = T.useMemo(() => {
			switch (_.targetType) {
				case M.KFR.GUILD:
					return r(G.pY());
				case M.KFR.CHANNEL:
				case M.KFR.CHANNEL_OVERWRITE:
					return r(G.ML());
				case M.KFR.USER:
					return r(G.lU());
				case M.KFR.ROLE:
					return r(G.HE());
				case M.KFR.ONBOARDING_PROMPT:
					return r(G.oD());
				case M.KFR.GUILD_ONBOARDING:
					return r(G.EN());
				case M.KFR.HOME_SETTINGS:
					return r(G.hx());
				case M.KFR.INVITE:
					return r(G.HN());
				case M.KFR.WEBHOOK:
					return r(G.lR());
				case M.KFR.EMOJI:
					return r(G.N$());
				case M.KFR.STICKER:
					return r(G.Bq());
				case M.KFR.INTEGRATION:
					return r(G.K());
				case M.KFR.STAGE_INSTANCE:
					return r(G.C2());
				case M.KFR.GUILD_SCHEDULED_EVENT:
					return r(G.uB());
				case M.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
					return r(G.pi());
				case M.KFR.THREAD:
					return r(G.pA());
				case M.KFR.APPLICATION_COMMAND:
					return r(G.vm(_.changes));
				case M.KFR.AUTO_MODERATION_RULE:
					return r(G.rK());
				case M.KFR.GUILD_SOUNDBOARD:
					return r(G.C0());
				case M.KFR.VOICE_CHANNEL_STATUS:
					return r(G.F1());
			}
		}, [_.targetType, _.changes, r]);
	return (0, s.jsx)(s.Fragment, { children: l });
}
