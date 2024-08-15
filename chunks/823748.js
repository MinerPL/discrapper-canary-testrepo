n(47120), n(653041);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(512722),
	o = n.n(r),
	c = n(392711),
	u = n.n(c),
	d = n(266067),
	h = n(848246),
	m = n(442837),
	p = n(704215),
	_ = n(952265),
	f = n(481060),
	E = n(239091),
	g = n(377993),
	C = n(457868),
	I = n(561472),
	x = n(36311),
	T = n(112724),
	N = n(902840),
	v = n(110924),
	S = n(317381),
	Z = n(82888),
	A = n(917107),
	M = n(296797),
	b = n(358221),
	R = n(677601),
	j = n(541716),
	L = n(236091),
	P = n(663993),
	O = n(252618),
	y = n(201493),
	D = n(605236),
	k = n(174130),
	U = n(588322),
	w = n(517525),
	B = n(445384),
	H = n(613464),
	G = n(705563),
	V = n(730647),
	F = n(66999),
	W = n(826763),
	z = n(180216),
	Y = n(51486),
	K = n(168843),
	q = n(442336),
	X = n(57304),
	Q = n(605953),
	J = n(374306),
	$ = n(984370),
	ee = n(910611),
	et = n(915718),
	en = n(518311),
	ei = n(180539),
	ea = n(882378),
	es = n(207868),
	el = n(246919),
	er = n(754688),
	eo = n(41776),
	ec = n(6242),
	eu = n(757692),
	ed = n(134483),
	eh = n(703656),
	em = n(359110),
	ep = n(854709),
	e_ = n(14091),
	ef = n(6025),
	eE = n(897473),
	eg = n(922482),
	eC = n(504185),
	eI = n(657218),
	ex = n(66556),
	eT = n(739830),
	eN = n(377929),
	ev = n(900157),
	eS = n(108427),
	eZ = n(171368),
	eA = n(346967),
	eM = n(524329),
	eb = n(995532),
	eR = n(738643),
	ej = n(433355),
	eL = n(592125),
	eP = n(703558),
	eO = n(486472),
	ey = n(731290),
	eD = n(430824),
	ek = n(158776),
	eU = n(768119),
	ew = n(944486),
	eB = n(914010),
	eH = n(594174),
	eG = n(979651),
	eV = n(74538),
	eF = n(792125),
	eW = n(933557),
	ez = n(287746),
	eY = n(325708),
	eK = n(335615),
	eq = n(992744),
	eX = n(923029),
	eQ = n(194082),
	eJ = n(176505),
	e$ = n(981631),
	e0 = n(918559),
	e1 = n(354459),
	e2 = n(921944),
	e7 = n(440493),
	e4 = n(157925),
	e3 = n(689938),
	e5 = n(625032);
function e6(e, t, n) {
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
let e9 = (0, P.Un)({
	createPromise: () => n.e('49131').then(n.bind(n, 434878)),
	webpackId: 434878,
	renderLoader: () =>
		(0, i.jsx)('div', {
			className: e5.loader,
			children: (0, i.jsx)(f.Spinner, {})
		}),
	name: 'ForumChannel'
});
class e8 extends a.PureComponent {
	componentDidMount() {
		(0, eS.e)('guild_channel');
	}
	componentDidUpdate(e) {
		null != this.props.channel &&
			null != e.channel &&
			this.props.channel.id !== e.channel.id &&
			this.state.topicExpanded &&
			this.setState({ topicExpanded: !1 }),
			this.openChannelModal();
	}
	openChannelContextMenu(e, t) {
		let { guild: a } = this.props;
		o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
			o()(null != a, 'Missing guild in Channel.openChannelContextMenu'),
			(0, E.jW)(e, async () => {
				let { default: e } = await n.e('24783').then(n.bind(n, 439635));
				return (n) =>
					(0, i.jsx)(e, {
						...n,
						channel: t,
						guild: a
					});
			});
	}
	openThreadContextMenu(e, t) {
		o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
			(0, E.jW)(e, async () => {
				let { default: e } = await n.e('40157').then(n.bind(n, 422200));
				return (n) =>
					(0, i.jsx)(e, {
						...n,
						channel: t
					});
			});
	}
	openDMContextMenu(e, t) {
		o()(null != t, 'Missing channel in Channel.openDMContextMenu');
		let a = eH.default.getUser(t.getRecipientId());
		o()(null != a, 'Missing user in Channel.openDMContextMenu'),
			(0, E.jW)(e, async () => {
				let { default: e } = await Promise.all([
					n.e('79695'),
					n.e('70474'),
					n.e('22036'),
					n.e('56826'),
					n.e('30295')
				]).then(n.bind(n, 131404));
				return (n) =>
					(0, i.jsx)(e, {
						...n,
						user: a,
						channelSelected: !0,
						channel: t
					});
			});
	}
	shouldRenderCall() {
		let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: i } = this.props;
		return (!(null == e ? void 0 : e.isNSFW()) || (n && i)) && t;
	}
	renderCall() {
		let { channel: e } = this.props;
		if ((o()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
		switch (e.type) {
			case e$.d4z.GUILD_STAGE_VOICE:
				return (0, i.jsx)(eC.Z, { channel: e }, e.id);
			case e$.d4z.GUILD_VOICE:
			case e$.d4z.DM:
			case e$.d4z.GROUP_DM:
			case e$.d4z.PUBLIC_THREAD:
			case e$.d4z.PRIVATE_THREAD:
				let t = this.props.height - 200;
				return (0, i.jsx)(
					R.Z,
					{
						channel: e,
						renderExternalHeader: this.renderHeaderBar,
						maxHeight: t
					},
					'call-'.concat(e.id)
				);
			default:
				return null;
		}
	}
	renderEmbeddedActivityPanel() {
		let { channel: e } = this.props,
			t = this.shouldRenderCall();
		if ((o()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)) return null;
		let n = this.props.height - 200;
		return (0, i.jsx)(Z.Z, {
			maxHeight: n,
			renderExternalHeader: this.renderHeaderBar
		});
	}
	renderChat() {
		let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: a, needSubscriptionToAccess: s } = this.props;
		if ((o()(null != e, 'Missing channel in Channel.renderChat'), s))
			return (o()(null != n, 'premium channels must exist within a guild'),
			null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
				? (0, i.jsx)(W.Z, { guildId: n.id })
				: (0, i.jsx)(V.l, {
						guildId: n.id,
						children: (0, i.jsx)(z.Z, {
							channelId: e.id,
							guildId: n.id
						})
					});
		if (e.isNSFW() && (!a || !t)) return (0, i.jsx)(x.Z, { guild: n });
		if (e.isGuildVocal()) return null;
		if (e.isDirectory())
			return (
				o()(null != n, 'directory channels must exist within a guild'),
				(0, i.jsx)(y.Z, {
					channel: e,
					guild: n
				})
			);
		if (e.isForumLikeChannel()) {
			o()(null != n, 'forum channels must exist within a guild');
			let t = {
				isThreadSidebarFloating: this.state.isThreadSidebarFloating,
				threadSidebarWidth: this.state.threadSidebarWidth
			};
			return (0, i.jsx)(
				e9,
				{
					channel: e,
					guild: n,
					sidebarState: t
				},
				e.id
			);
		}
		return (0, i.jsx)(
			ez.Z,
			{
				channel: e,
				guild: n,
				chatInputType: j.I.NORMAL
			},
			null != n ? n.id : 'home'
		);
	}
	renderSidebar() {
		let {
			searchId: e,
			channel: t,
			parentChannel: n,
			guild: a,
			needSubscriptionToAccess: s,
			section: l,
			showCall: r,
			showActivityPanel: c
		} = this.props;
		if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || s));
		else if (l === e$.ULH.PROFILE && t.isPrivate() && !r && !c)
			return (0, i.jsx)(
				eA.Z,
				{
					location: 'Channel',
					channel: t
				},
				'private-channel-profile-'.concat(t.id)
			);
		else if (l === e$.ULH.MEMBERS)
			switch (t.type) {
				case e$.d4z.GROUP_DM:
					return (0, i.jsx)(g.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
				case e$.d4z.GUILD_DIRECTORY:
				case e$.d4z.GUILD_FORUM:
				case e$.d4z.GUILD_MEDIA:
				case e$.d4z.GUILD_ANNOUNCEMENT:
				case e$.d4z.GUILD_TEXT:
					var u;
					let d =
						!0 === e$.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
					return (0, i.jsx)(eK.Z, { channel: t }, 'channel-members-'.concat(d));
				case e$.d4z.ANNOUNCEMENT_THREAD:
					if (null != n) return (0, i.jsx)(eK.Z, { channel: n }, 'channel-members-'.concat(n.id));
					break;
				case e$.d4z.PUBLIC_THREAD:
				case e$.d4z.PRIVATE_THREAD:
					if (!t.isArchivedThread() && null != a)
						return (0, i.jsx)(
							C.Z,
							{
								channel: t,
								guild: a
							},
							'channel-members-'.concat(t.id)
						);
			}
		else if (l === e$.ULH.SEARCH && null != e) return (0, i.jsx)(e_.Z, { searchId: e });
		return null;
	}
	openChannelModal() {
		let {
			channel: e,
			guildId: t,
			hasModalOpen: a,
			showWelcomeModal: s,
			isLurking: l,
			isUnavailable: r,
			showRealNameModal: o
		} = this.props;
		return null == e || null == t || r || a
			? null
			: (o &&
					(0, f.openModalLazy)(
						async () => {
							let { default: e } = await n.e('53900').then(n.bind(n, 784280));
							return (n) =>
								(0, i.jsx)(e, {
									...n,
									guildId: t
								});
						},
						{
							onCloseCallback: () => B.Z.viewPrompt(e7.r.REAL_NAME_PROMPT, t),
							modalKey: 'Guild Hub Real Name Modal'
						}
					),
				s &&
					(0, f.openModalLazy)(
						async () => {
							let { default: e } = await n.e('77578').then(n.bind(n, 184782));
							return (n) =>
								(0, i.jsx)(e, {
									...n,
									guildId: t
								});
						},
						{
							onCloseCallback: () => (0, eM.y0)(t, l),
							modalKey: 'Guild Welcome Screen Modal'
						}
					),
				null);
	}
	renderThreadSidebar() {
		let e;
		let {
			channel: t,
			section: n,
			channelSidebarState: a,
			guildSidebarState: s,
			nsfwAgree: l,
			nsfwAllowed: r,
			width: o
		} = this.props;
		if (null == s && null == a) return null;
		if (n === e$.ULH.SIDEBAR_CHAT && null != a) {
			if ((null == t ? void 0 : t.isNSFW()) && (!r || !l)) return null;
			switch (a.type) {
				case eE.tI.CREATE_THREAD:
					if (null == t ? void 0 : t.isForumLikeChannel()) return null;
					e = (0, i.jsx)(eI.Z, {
						parentChannelId: a.parentChannelId,
						parentMessageId: a.parentMessageId,
						location: a.location
					});
					break;
				case eE.tI.VIEW_THREAD:
					let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.Z : ev.Z;
					e = (0, i.jsx)(n, { channelId: a.channelId });
					break;
				case eE.tI.VIEW_CHANNEL:
				case eE.tI.VIEW_MESSAGE_REQUEST:
				default:
					return null;
			}
		}
		if (null != s && null == e) {
			if (s.type === eE.jL.GUILD_MEMBER_MOD_VIEW) {
				let { guildId: e, userId: t } = s.details;
				return (0, i.jsx)('div', {
					style: { width: e$.$Y6 },
					className: e5.guildSidebar,
					children: (0, i.jsx)(H.Z, {
						guildId: e,
						userId: t,
						onClose: () => ef.Z.closeGuildSidebar(e)
					})
				});
			}
			return null;
		}
		if (null == e) return null;
		let c = (null == t ? void 0 : t.type) != null && e$.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
			u = o - e$.PrS - c;
		return (0, i.jsx)(eY.Z, {
			sidebarType:
				(null == t ? void 0 : t.type) != null && e$.TPd.GUILD_THREADS_ONLY.has(t.type)
					? eY.y.PostSidebar
					: eY.y.ThreadSidebar,
			maxWidth: u,
			onWidthChange: this.handleThreadSidebarResize,
			children: e
		});
	}
	render() {
		let {
				channel: e,
				guild: t,
				formattedChannelName: n,
				isUnavailable: a,
				layout: s,
				section: r,
				hasModalOpen: o,
				guildSidebarState: c,
				hasTextActivityInPanelMode: u
			} = this.props,
			{ threadSidebarWidth: d, isThreadSidebarFloating: h } = this.state,
			m = this.shouldRenderCall();
		if (a) return (0, i.jsx)(eq.Z, {});
		if (null == e) return (0, i.jsx)(eX.Z, { channelId: this.props.channelId });
		let p = r === e$.ULH.SIDEBAR_CHAT,
			_ = null != c && !p,
			f = !e.isForumLikeChannel() && !o,
			E = null == t ? void 0 : t.name;
		return (0, i.jsxs)(i.Fragment, {
			children: [
				(0, i.jsx)(O.yY, {
					location: E,
					subsection: null != n ? n : void 0
				}),
				(0, i.jsxs)('div', {
					className: l()(e5.chat, {
						[e5.threadSidebarOpen]: p || _,
						[e5.threadSidebarFloating]: p && h
					}),
					children: [
						f
							? (0, i.jsx)(I.Z, {
									style: { right: p ? d : void 0 },
									className: e5.uploadArea,
									channel: e,
									draftType: eP.d.ChannelMessage
								})
							: null,
						m || u ? null : this.renderHeaderBar(),
						this.renderCall(),
						this.renderEmbeddedActivityPanel(),
						(0, i.jsxs)('div', {
							className: l()(e5.content, { [e5.noChat]: s === e$.AEg.NO_CHAT }),
							children: [this.renderChat(), this.renderSidebar()]
						})
					]
				}),
				this.renderThreadSidebar(),
				(0, i.jsx)(Y.Z, {})
			]
		});
	}
	constructor(...e) {
		super(...e),
			e6(this, 'state', {
				topicExpanded: !1,
				threadSidebarWidth: void 0,
				isThreadSidebarFloating: !1
			}),
			e6(this, 'handleTitleParentClick', () => {
				let { parentChannel: e } = this.props;
				if (null != e) (0, em.Kh)(e.id);
			}),
			e6(this, '_handleContextMenu', (e, t) => {
				switch (t.type) {
					case e$.d4z.GUILD_VOICE:
					case e$.d4z.GUILD_ANNOUNCEMENT:
					case e$.d4z.GUILD_TEXT:
					case e$.d4z.GUILD_FORUM:
					case e$.d4z.GUILD_MEDIA:
						this.openChannelContextMenu(e, t);
						break;
					case e$.d4z.ANNOUNCEMENT_THREAD:
					case e$.d4z.PUBLIC_THREAD:
					case e$.d4z.PRIVATE_THREAD:
						this.openThreadContextMenu(e, t);
						break;
					case e$.d4z.DM:
						this.openDMContextMenu(e, t);
				}
			}),
			e6(this, 'handleContextMenu', (e) => {
				o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'),
					this._handleContextMenu(e, this.props.channel);
			}),
			e6(this, 'handleParentContextMenu', (e) => {
				o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'),
					this._handleContextMenu(e, this.props.parentChannel);
			}),
			e6(this, 'handleThreadSidebarResize', (e, t) => {
				this.setState({
					threadSidebarWidth: e,
					isThreadSidebarFloating: t
				});
			}),
			e6(this, 'openUserProfile', () => {
				let { channel: e } = this.props;
				o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
					(0, eZ.openUserProfileModal)({
						userId: e.getRecipientId(),
						guildId: e.guild_id,
						channelId: e.id,
						analyticsLocation: { section: e$.jXE.CHANNEL_HEADER }
					});
			}),
			e6(this, 'renderJoinRequestInterviewButtons', () => {
				let { channel: e } = this.props;
				return (null == e ? void 0 : e.hasFlag(eJ.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
					? (0, i.jsx)(G.Z, {
							channelId: e.id,
							showTrailingDivider: !0
						})
					: null;
			}),
			e6(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
				let { inCall: e, voiceChannel: t } = this.props;
				return e ? (0, i.jsx)(L.Z, { channelId: null != t ? t.id : null }) : null;
			}),
			e6(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
				let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
				return (null == e ? void 0 : e.type) !== e1.fO.STREAM
					? null
					: (0, i.jsx)(
							w.Z,
							{
								size: eQ.ZP.Sizes.LARGE,
								participant: e,
								showQuality: !0,
								premiumIndicator: t
							},
							'live-indicator'
						);
			}),
			e6(this, 'renderHeaderToolbar', () => {
				let { channel: e, parentChannel: t, isLurking: n, showCall: a, showActivityPanel: s } = this.props;
				o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
				let l = [];
				if (e.isSystemDM()) return l;
				switch (e.type) {
					case e$.d4z.GUILD_STAGE_VOICE:
					case e$.d4z.GUILD_VOICE:
						break;
					case e$.d4z.DM:
						l.push(this.renderClipsEnabledIndicatorToolbarItem()),
							l.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
							l.push((0, i.jsx)(et.Z, { channel: e }, 'calls')),
							l.push((0, i.jsx)(X.Z, { channel: e }, 'pins')),
							l.push(
								(0, i.jsx)(
									en.Z,
									{
										channel: e,
										tooltip: e3.Z.Messages.GROUP_DM_ADD_FRIENDS
									},
									'invite'
								)
							),
							l.push(
								(0, i.jsx)(
									ei.Z,
									{
										channel: e,
										showCallOrActivityPanel: a || s
									},
									'profile'
								)
							),
							l.push((0, i.jsx)(ea.Z, { channel: e }, 'safety_tools'));
						break;
					case e$.d4z.GROUP_DM:
						if (
							(l.push(this.renderJoinRequestInterviewButtons()),
							l.push(this.renderClipsEnabledIndicatorToolbarItem()),
							l.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
							l.push((0, i.jsx)(et.Z, { channel: e }, 'calls')),
							l.push((0, i.jsx)(X.Z, { channel: e }, 'pins')),
							!e.isManaged())
						) {
							let t = e3.Z.Messages.GROUP_DM_ADD_FRIENDS;
							l.push(
								(0, i.jsx)(
									en.Z,
									{
										channel: e,
										tooltip: t
									},
									'invite'
								)
							);
						}
						l.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members'));
						break;
					case e$.d4z.ANNOUNCEMENT_THREAD:
					case e$.d4z.PRIVATE_THREAD:
					case e$.d4z.PUBLIC_THREAD:
						null != t && !t.isForumLikeChannel() && l.push((0, i.jsx)(ex.Z, { channel: t }, 'browser')),
							e.isVocalThread() && l.push((0, i.jsx)(es.Z, { channel: e }, 'thread-call')),
							l.push((0, i.jsx)(eT.Z, { channel: e }, 'notifications')),
							l.push((0, i.jsx)(X.Z, { channel: e }, 'pins')),
							!e.isArchivedThread() && l.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members')),
							null != t && (0, N.Lp)(e) && l.push((0, i.jsx)(Q.Z, { channel: e }, 'summaries')),
							l.push((0, i.jsx)(eN.Z, { channel: e }, 'threads-overflow'));
						break;
					case e$.d4z.GUILD_ANNOUNCEMENT:
					case e$.d4z.GUILD_TEXT:
						l.push((0, i.jsx)(k.Z, { channel: e }, 'favorites')),
							l.push((0, i.jsx)(ex.Z, { channel: e }, 'browser')),
							!n && l.push((0, i.jsx)(q.Z, { channel: e }, 'notifications')),
							l.push((0, i.jsx)(X.Z, { channel: e }, 'pins')),
							l.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members')),
							(0, N.Lp)(e) && l.push((0, i.jsx)(Q.Z, { channel: e }, 'summaries'));
						break;
					case e$.d4z.GUILD_FORUM:
					case e$.d4z.GUILD_MEDIA:
						!n &&
							(l.push((0, i.jsx)(J.Z, { channel: e }, 'forum-onboarding')),
							l.push((0, i.jsx)(q.Z, { channel: e }, 'notifications'))),
							!__OVERLAY__ && l.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members'));
						break;
					case e$.d4z.GUILD_DIRECTORY:
						l.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members'));
				}
				return l;
			}),
			e6(this, 'renderMobileToolbar', () => {
				let { channel: e } = this.props;
				o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
				let t = [];
				if (e.isSystemDM()) return t;
				switch (e.type) {
					case e$.d4z.GUILD_STAGE_VOICE:
					case e$.d4z.GUILD_VOICE:
					case e$.d4z.DM:
						break;
					case e$.d4z.GROUP_DM:
						t.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members'));
						break;
					case e$.d4z.ANNOUNCEMENT_THREAD:
					case e$.d4z.PRIVATE_THREAD:
					case e$.d4z.PUBLIC_THREAD:
						!e.isArchivedThread() && t.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members'));
						break;
					case e$.d4z.GUILD_ANNOUNCEMENT:
					case e$.d4z.GUILD_TEXT:
					case e$.d4z.GUILD_FORUM:
					case e$.d4z.GUILD_MEDIA:
					case e$.d4z.GUILD_DIRECTORY:
						t.push((0, i.jsx)(K.Z, { channelId: e.id }, 'members'));
				}
				return t;
			}),
			e6(this, 'renderFollowButton', () => {
				let { showFollowButton: e, channel: t } = this.props;
				return e
					? (0, i.jsx)(f.Button, {
							size: f.Button.Sizes.MIN,
							color: f.Button.Colors.PRIMARY,
							className: e5.followButton,
							onClick: () =>
								(0, f.openModalLazy)(async () => {
									let { default: e } = await n.e('54642').then(n.bind(n, 720589));
									return (n) =>
										(0, i.jsx)(e, {
											channel: t,
											...n
										});
								}),
							children: e3.Z.Messages.FOLLOW
						})
					: null;
			}),
			e6(this, 'renderHeaderBar', () => {
				let {
					channel: e,
					channelName: t,
					parentChannel: n,
					guild: a,
					guildId: s,
					showCall: r,
					showActivityPanel: c,
					hasVideo: u,
					headerGuildBreadcrumbPosition: d,
					isFavorites: h
				} = this.props;
				o()(null != e, 'Missing channel in Channel.renderHeaderBar'),
					o()(null != t, 'Should not be null if channel is not null.');
				let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
					p =
						(null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
							? this.handleTitleParentClick
							: void 0;
				return (0, i.jsxs)('div', {
					className: e5.subtitleContainer,
					children: [
						(0, i.jsxs)(
							$.Z,
							{
								guildId: s,
								channelId: e.id,
								channelType: e.type,
								hideSearch: e.isDirectory() || (h && !(0, ep.X)()),
								showDivider: h && !(0, ep.X)(),
								toolbar: this.renderHeaderToolbar(),
								mobileToolbar: this.renderMobileToolbar(),
								className: l()(e5.title, u && r ? (0, eF.Q)(e$.BRd.DARK) : null),
								transparent: r || c,
								'aria-label': e3.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
								children: [
									'left' === d &&
										(0, i.jsx)(ee.TS, {
											channel: e,
											guild: a,
											caretPosition: 'right'
										}),
									(0, ee.ud)({
										channel: e,
										channelName: t,
										parentChannel: n,
										guild: a,
										hasVideo: u,
										handleContextMenu: this.handleContextMenu,
										handleParentContextMenu: this.handleParentContextMenu,
										handleClick: m,
										handleParentClick: p,
										renderFollowButton: this.renderFollowButton
									}),
									'right' === d &&
										(0, i.jsx)(ee.TS, {
											channel: e,
											guild: a,
											caretPosition: 'left'
										}),
									(0, ee.v0)(e, a)
								]
							},
							'header-'.concat(e.id)
						),
						(0, i.jsx)(ed.Z, { channelId: e.id })
					]
				});
			});
	}
}
let te = (0, T.Z)(e8);
t.Z = a.memo(function (e) {
	var t;
	let { providedChannel: n } = e,
		[s, l] = a.useState(null),
		r = (0, m.e7)([ew.Z], () => ew.Z.getChannelId()),
		o = (0, m.e7)([ew.Z], () => ew.Z.getVoiceChannelId()),
		c = (0, m.e7)([eL.Z], () => (null != n ? n : eL.Z.getChannel(r)), [r, n]),
		f = (0, m.e7)([eL.Z], () => eL.Z.getChannel(o), [o]),
		E = null == c ? void 0 : c.parent_id,
		g = (0, m.e7)([eL.Z], () => eL.Z.getChannel(E), [E]),
		C = (0, m.e7)([eD.Z], () => eD.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
		{ needSubscriptionToAccess: I } = (0, F.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
		x = (0, m.e7)(
			[b.Z],
			() => {
				let e = null != r ? b.Z.getParticipants(r) : [],
					t = null != r ? b.Z.getActivityParticipants(r) : [];
				return e.length - t.length > 0;
			},
			[r]
		),
		T = (0, m.e7)([S.ZP], () => {
			var e;
			return S.ZP.getSelfEmbeddedActivityForChannel(
				null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e$.lds
			);
		}),
		Z = (0, m.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
		R = null != T && !(0, A.Z)(null == c ? void 0 : c.id) && Z === e0.Ez.PANEL,
		j = (0, m.e7)([eG.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eG.Z.getVoiceStatesForChannel(c.id)), [
			c
		]),
		L = null != c && c.isPrivate() && !R && x,
		P = (null == c ? void 0 : c.isGuildVocal()) || L || j,
		{ welcomeModalChannelId: O } = (0, d.TH)(),
		y = (0, m.e7)([eo.Z], () => null != c && eo.Z.isLurking(c.guild_id), [c]),
		k = (0, m.e7)([eb.Z], () => eb.Z.hasSeen(null == c ? void 0 : c.guild_id, y), [c, y]),
		U = (0, m.e7)(
			[b.Z, S.ZP],
			() =>
				null != S.ZP.getConnectedActivityChannelId() && S.ZP.getActivityPanelMode() === e0.Ez.PANEL
					? S.ZP.getFocusedLayout() === e0.MI.NO_CHAT
						? e$.AEg.NO_CHAT
						: e$.AEg.NORMAL
					: null != r
						? b.Z.getLayout(r)
						: e$.AEg.NORMAL,
			[r]
		),
		w = (0, m.e7)([b.Z], () => (null != c ? b.Z.getSelectedParticipant(c.id) : null)),
		B = (0, m.e7)([eH.default], () => eH.default.getCurrentUser()),
		H = (0, el.Z)(C),
		G = (0, eR.Z)(O, null == C ? void 0 : C.id),
		{ section: V, channelSidebarState: W } = (0, m.cj)(
			[ej.ZP],
			() => ({
				section: ej.ZP.getSection(r, null == c ? void 0 : c.isDM()),
				channelSidebarState: ej.ZP.getSidebarState(r)
			}),
			[r, c]
		),
		z = null == C ? void 0 : C.id,
		Y = (0, m.e7)([ej.ZP], () => ej.ZP.getGuildSidebarState(z), [z]),
		K = (0, m.e7)([eB.Z], () => eB.Z.getGuildId()) === e$.I_8,
		q = (0, eV.So)(h.q.STREAM_HIGH_QUALITY),
		X = (0, eu.o)(w, B),
		Q = (0, ec.lL)('Channel', !0, B, X),
		J = (0, eW.ZP)(c),
		$ = (0, eW.ZP)(c, !0),
		ee = null != c && o === c.id,
		et = null != c && c.isGuildStageVoice();
	(0, M.Z)({ onTransition: void 0 }),
		a.useEffect(() => {
			var e, t, n;
			let i = (0, eh.s1)();
			if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e4.Df) {
				let { channelId: e } =
					null !==
						(n = (0, er.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) &&
					void 0 !== n
						? n
						: {};
				null != e && l(e);
			}
		}, []),
		a.useEffect(() => {
			null != s && null != c && et && c.id === s && !ee && ((0, eg.Cq)(c), l(null));
		}, [s, et]);
	let en = (0, N.ts)(c),
		ei = null != c && c.isPrivate(),
		ea = (0, v.Z)(ei),
		es = (0, v.Z)(null == c ? void 0 : c.id);
	a.useEffect(() => {
		let e = ea && !ei,
			t = ea && ei && (null == c ? void 0 : c.id) !== es;
		(e || t) && (0, D.EW)(p.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e2.L.AUTO });
	}, [null == c ? void 0 : c.id, es, ei, ea]);
	let ed = (0, _.f9)();
	return (0, i.jsx)(te, {
		guildId: null == c ? void 0 : c.guild_id,
		channelId: r,
		channel: c,
		channelName: J,
		formattedChannelName: $,
		parentChannel: g,
		voiceChannel: f,
		layout: U,
		needSubscriptionToAccess: I,
		isLurking: y,
		hasModalOpen: ed,
		section: V,
		channelSidebarState: W,
		guildSidebarState: Y,
		guild: C,
		searchId: (0, m.e7)([eU.Z], () => eU.Z.getCurrentSearchId()),
		showCall: !I && P,
		showActivityPanel: R,
		nsfwAgree: (0, m.e7)([ey.Z], () => ey.Z.didAgree(null == c ? void 0 : c.guild_id)),
		isMobile: (0, m.e7)(
			[ek.Z],
			() => (null == c ? void 0 : c.type) === e$.d4z.DM && ek.Z.isMobileOnline(c.getRecipientId()),
			[c]
		),
		isUnavailable: (0, m.e7)(
			[eO.Z],
			() => (null == c ? void 0 : c.guild_id) != null && eO.Z.isUnavailable(c.guild_id),
			[c]
		),
		showRealNameModal: H,
		showWelcomeModal: !k && G,
		showFollowButton:
			((null == c ? void 0 : c.type) === e$.d4z.GUILD_ANNOUNCEMENT &&
				(null == C ? void 0 : C.hasFeature(e$.oNc.NEWS))) ||
			!1,
		...(0, m.cj)([eG.Z], () => ({ hasVideo: null != c && eG.Z.hasVideo(c.id) }), [c]),
		inCall: ee,
		selectedParticipant: w,
		nsfwAllowed: (null == B ? void 0 : B.nsfwAllowed) === !0,
		showChannelSummaries: en,
		isFavorites: K,
		headerGuildBreadcrumbPosition: K ? 'left' : 'right',
		premiumIndicatorEnabled: q || Q.enabled,
		hasTextActivityInPanelMode: R
	});
});
