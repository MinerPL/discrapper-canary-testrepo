var r = n(990547),
	i = n(544891),
	a = n(570140),
	s = n(37234),
	o = n(710845),
	l = n(408987),
	u = n(962086),
	c = n(160404),
	d = n(41776),
	_ = n(314897),
	E = n(271383),
	f = n(430824),
	h = n(546796),
	p = n(573261),
	m = n(999382),
	I = n(981631),
	T = n(308083),
	g = n(689938);
let S = new o.Z('GuildSettingsActionCreators'),
	A = {
		init(e, t, n, r) {
			a.Z.dispatch({
				type: 'GUILD_SETTINGS_INIT',
				guildId: e,
				section: t,
				subsection: r,
				location: n
			});
		},
		async open(e, t, r, i) {
			var a;
			await Promise.all([n.e('96427'), n.e('23755'), n.e('89350'), n.e('11751'), n.e('29549'), n.e('33053'), n.e('31605'), n.e('37581'), n.e('65840'), n.e('7654'), n.e('90508'), n.e('18146'), n.e('44156'), n.e('14203'), n.e('85552'), n.e('59217'), n.e('58227'), n.e('1187'), n.e('75531'), n.e('92557'), n.e('64679'), n.e('23693'), n.e('87713'), n.e('72907')]).then(n.bind(n, 994763)), (null === (a = f.Z.getGuild(e)) || void 0 === a ? void 0 : a.hasFeature(I.oNc.COMMUNITY)) && (t === I.pNK.GUILD_AUTOMOD && ((t = I.pNK.SAFETY), (i = I.KsC.SAFETY_AUTOMOD)), t === I.pNK.MEMBER_VERIFICATION && ((t = I.pNK.SAFETY), (i = I.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), A.init(e, t, r, i);
			(0, s.jN)(I.S9g.GUILD_SETTINGS);
		},
		close() {
			a.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' });
		},
		saveRouteStack(e) {
			a.Z.dispatch({
				type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
				state: e
			});
		},
		setSection(e, t) {
			var n;
			let r = m.Z.getGuildId();
			null != r &&
				((null === (n = f.Z.getGuild(r)) || void 0 === n ? void 0 : n.hasFeature(I.oNc.COMMUNITY)) && (e === I.pNK.GUILD_AUTOMOD && ((e = I.pNK.SAFETY), (t = I.KsC.SAFETY_AUTOMOD)), e === I.pNK.MEMBER_VERIFICATION && ((e = I.pNK.SAFETY), (t = I.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
				a.Z.dispatch({
					type: 'GUILD_SETTINGS_SET_SECTION',
					section: e,
					subsection: t
				}));
		},
		setSearchQuery(e) {
			a.Z.dispatch({
				type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
				searchQuery: e
			});
		},
		selectRole: (e, t) =>
			a.Z.dispatch({
				type: 'GUILD_SETTINGS_ROLE_SELECT',
				roleId: e,
				searchQuery: t
			}),
		updateEmbed(e, t, n) {
			i.tn
				.patch({
					url: I.ANM.GUILD_WIDGET(e),
					body: {
						enabled: t,
						channel_id: n
					},
					oldFormErrors: !0
				})
				.then((t) => {
					a.Z.dispatch({
						type: 'GUILD_SETTINGS_SET_WIDGET',
						guildId: e,
						enabled: t.body.enabled,
						channelId: t.body.channel_id
					});
				});
		},
		updateMFALevel(e) {
			let { guildId: t, level: n, isEnabled: r } = e;
			return (0, h.Z)(
				(e) =>
					i.tn.post({
						url: I.ANM.GUILD_MFA(t),
						body: {
							level: n,
							...e
						},
						oldFormErrors: !0
					}),
				{
					modalProps: {
						title: g.Z.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
						actionText: r ? g.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : g.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
					},
					checkEnabled: !1
				}
			).then((e) =>
				a.Z.dispatch({
					type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
					level: e.body.level
				})
			);
		},
		updateIcon(e, t) {
			i.tn
				.patch({
					url: I.ANM.GUILD(e),
					body: { icon: t },
					oldFormErrors: !0
				})
				.then(
					() => {
						a.Z.dispatch({
							type: 'GUILD_SETTINGS_UPDATE',
							icon: t
						}),
							l.Z.checkGuildTemplateDirty(e);
					},
					(e) =>
						a.Z.dispatch({
							type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
							errors: e.body
						})
				);
		},
		cancelChanges(e) {
			a.Z.dispatch({
				type: 'GUILD_SETTINGS_CANCEL_CHANGES',
				guildId: e
			});
		},
		updateGuild(e) {
			let { safetyAlertsChannelId: t, clan: n, ...r } = e,
				i = { ...r };
			if (null != n) {
				var s;
				i.clan = {
					...(null !== (s = i.clan) && void 0 !== s ? s : {}),
					...n
				};
			}
			null != m.Z.getGuildId() && null != t && (i.safetyAlertsChannelId = t),
				a.Z.dispatch({
					type: 'GUILD_SETTINGS_UPDATE',
					...i
				});
		},
		saveGuild(e, t) {
			let { name: n, description: r, icon: s, splash: o, banner: u, homeHeader: c, afkChannelId: d, afkTimeout: _, systemChannelId: E, verificationLevel: f, defaultMessageNotifications: h, explicitContentFilter: p, features: m, systemChannelFlags: g, preferredLocale: A, rulesChannelId: N, safetyAlertsChannelId: v, discoverySplash: O, publicUpdatesChannelId: R, premiumProgressBarEnabled: C, clan: y } = t,
				D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				L = {
					name: n,
					description: r,
					icon: s,
					splash: o,
					banner: u,
					home_header: c,
					features: m,
					preferred_locale: A,
					afk_channel_id: d,
					afk_timeout: _,
					system_channel_id: E,
					verification_level: f,
					default_message_notifications: h,
					explicit_content_filter: p,
					system_channel_flags: g,
					rules_channel_id: N,
					discovery_splash: O,
					public_updates_channel_id: R,
					safety_alerts_channel_id: v,
					...(null != C ? { premium_progress_bar_enabled: C } : null),
					clan: null != y ? (0, T.A9)(y) : y
				};
			return (
				a.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
				i.tn
					.patch({
						url: I.ANM.GUILD(e),
						query: { for_discovery: D.isForDiscovery },
						body: L,
						oldFormErrors: !0
					})
					.then(
						(t) => {
							a.Z.dispatch({
								type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
								guild: t.body
							}),
								l.Z.checkGuildTemplateDirty(e);
						},
						(e) => {
							if (
								(a.Z.dispatch({
									type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
									errors: e.body
								}),
								S.error('Failed to save guild settings', { errors: e.body }),
								D.throwErr)
							)
								throw e.body;
						}
					)
			);
		},
		updateGuildModeration: (e, t) =>
			i.tn
				.patch({
					url: I.ANM.GUILD(e),
					body: {
						verification_level: t.verificationLevel,
						explicit_content_filter: t.explicitContentFilter
					},
					oldFormErrors: !0
				})
				.then((t) => (l.Z.checkGuildTemplateDirty(e), t)),
		transferOwnership(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
				i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
			return (0, h.Z)(
				(a) =>
					p.Z.patch({
						url: I.ANM.GUILD(e),
						body: {
							owner_id: t,
							code: i,
							...a
						},
						oldFormErrors: !0,
						trackedActionData: {
							event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
							properties: {
								guild_id: e,
								verification_type: n
							}
						}
					}),
				{
					modalProps: {
						title: g.Z.Messages.TRANSFER_OWNERSHIP,
						actionText: g.Z.Messages.TRANSFER_OWNERSHIP
					},
					checkEnabled: !1
				}
			);
		},
		sendTransferOwnershipPincode(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			return p.Z.put({
				url: I.ANM.GUILD_PINCODE(e),
				oldFormErrors: !0,
				trackedActionData: {
					event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
					properties: {
						guild_id: e,
						is_resend: t
					}
				}
			});
		},
		deleteGuild: (e, t) =>
			(0, h.Z)(
				(t) =>
					i.tn.post({
						url: I.ANM.GUILD_DELETE(e),
						body: t,
						oldFormErrors: !0
					}),
				{
					modalProps: {
						title: g.Z.Messages.DELETE_SERVER_TITLE.format({ name: t }),
						actionText: g.Z.Messages.DELETE_SERVER,
						disallowBackupCodes: !0
					},
					checkEnabled: !1
				}
			).then(() => {
				A.close();
			}),
		async leaveGuild(e) {
			await i.tn.del({
				url: I.ANM.GUILD_LEAVE(e),
				body: { lurking: d.Z.isLurking(e) || E.ZP.isCurrentUserGuest(e) },
				oldFormErrors: !0
			}),
				A.close();
		},
		async updateMemberRoles(e, t, n, r, s) {
			if (c.Z.isFullServerPreview(e) && t === _.default.getId()) {
				(0, u.og)(e, n);
				return;
			}
			await i.tn.patch({
				url: I.ANM.GUILD_MEMBER(e, t),
				body: { roles: n },
				oldFormErrors: !0
			}),
				r.forEach((n) =>
					a.Z.dispatch({
						type: 'GUILD_ROLE_MEMBER_ADD',
						guildId: e,
						roleId: n,
						userId: t
					})
				),
				s.forEach((n) =>
					a.Z.dispatch({
						type: 'GUILD_ROLE_MEMBER_REMOVE',
						guildId: e,
						roleId: n,
						userId: t
					})
				);
		},
		bulkAddMemberRoles: (e, t, n) =>
			i.tn
				.patch({
					url: I.ANM.GUILD_ROLE_MEMBERS(e, t),
					body: { member_ids: n }
				})
				.then((n) => {
					a.Z.dispatch({
						type: 'GUILD_ROLE_MEMBER_BULK_ADD',
						guildId: e,
						roleId: t,
						added: n.body
					});
				}),
		enableIntegration: (e, t, n) =>
			i.tn.post({
				url: I.ANM.GUILD_INTEGRATIONS(e),
				body: {
					type: t,
					id: n
				},
				oldFormErrors: !0
			}),
		disableIntegration: (e, t) =>
			i.tn.del({
				url: I.ANM.GUILD_INTEGRATION(e, t),
				oldFormErrors: !0
			}),
		updateIntegration: (e, t, n, r, a) =>
			i.tn.patch({
				url: I.ANM.GUILD_INTEGRATION(e, t),
				body: {
					expire_behavior: n,
					expire_grace_period: r,
					enable_emoticons: a
				},
				oldFormErrors: !0
			}),
		syncIntegration(e, t) {
			i.tn.post({
				url: I.ANM.GUILD_INTEGRATION_SYNC(e, t),
				oldFormErrors: !0
			});
		}
	};
t.Z = A;
