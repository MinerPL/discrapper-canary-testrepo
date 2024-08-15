n.d(t, {
	Z: function () {
		return L;
	}
}),
	n(653041),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(831209),
	l = n(442837),
	r = n(704215),
	o = n(481060),
	c = n(538239),
	u = n(566620),
	d = n(403404),
	h = n(906732),
	m = n(605236),
	p = n(706140),
	_ = n(243778),
	f = n(488131),
	E = n(375954),
	g = n(626135),
	C = n(585483),
	I = n(403182),
	x = n(127654),
	T = n(752305),
	N = n(951211),
	v = n(981631),
	S = n(921944),
	Z = n(489887),
	A = n(689938),
	M = n(383985);
function b(e, t, a, s) {
	(0, o.openModalLazy)(
		async () => {
			let { default: l } = await Promise.resolve().then(n.bind(n, 538239));
			return (n) =>
				(0, i.jsx)(l, {
					...n,
					activity: e,
					channel: t,
					activityActionType: a,
					analyticsLocations: s
				});
		},
		{ modalKey: c.activityInviteKey }
	);
}
let R = /(.*)```(\w+)\n(.*)```(.*)/s;
function j() {
	let e = (0, l.e7)([E.Z], () => E.Z.hasCurrentUserSentMessageSinceAppStart()),
		t = [];
	e && t.push(r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
	let [n] = (0, p.cv)(t);
	return (
		a.useEffect(
			() => () => {
				n === r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE &&
					(0, m.EW)(r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: S.L.TAKE_ACTION });
			},
			[n]
		),
		(0, i.jsx)(_.ZP, {
			contentTypes: t,
			children: (e) => {
				let { visibleContent: t } = e;
				return t === r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
					? (0, i.jsx)(o.TextBadge, {
							text: A.Z.Messages.NEW,
							color: s.Z.BUTTON_DANGER_BACKGROUND
						})
					: null;
			}
		})
	);
}
function L(e) {
	let {
			channel: t,
			options: l,
			onFileUpload: c,
			onClose: p,
			onSelect: _,
			draftType: E,
			editorTextContent: L,
			setValue: P,
			openClips: O
		} = e,
		{ analyticsLocations: y } = (0, h.ZP)();
	a.useEffect(() => {
		g.default.track(v.rMx.OPEN_POPOUT, {
			type: 'Send Attachment',
			channel_id: t.id,
			guild_id: t.guild_id
		});
	}, [t.guild_id, t.id]);
	function D() {
		(0, f.R6)(t, void 0, 'Plus Button');
	}
	function k() {
		g.default.track(v.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), P('/', (0, T.JM)('/'));
	}
	function U() {
		O();
	}
	function w() {
		(0, m.EW)(r.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: S.L.TAKE_ACTION }),
			(0, o.openModalLazy)(
				async () => {
					let { default: e } = await n.e('68784').then(n.bind(n, 611611));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							channel: t
						});
				},
				{ modalKey: Z.$z }
			);
	}
	function B() {
		g.default.track(v.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
			channel_type: t.type,
			channel_id: t.id,
			guild_id: t.guild_id
		}),
			(0, d.Z)({
				channel: t,
				guildId: t.guild_id,
				locationObject: {
					page: t.isPrivate() ? v.ZY5.DM_CHANNEL : v.ZY5.GUILD_CHANNEL,
					section: v.jXE.CHANNEL_TEXT_AREA,
					object: v.qAy.CONTEXT_MENU_ITEM,
					objectType: v.Qqv.ACTIVITY
				},
				openInPopout: !1,
				enableSelectedTextChannelInvite: !0,
				analyticsLocations: y
			}),
			(0, u.w1)({ guildId: t.guild_id });
	}
	function H() {
		let e = L,
			n = 'txt',
			i = '',
			a = L.match(R);
		null != a && ((i = a[1]), (n = a[2]), (e = a[3]), (i += a[4])),
			(0, x.d)([(0, I.dp)(new Blob([e], { type: 'text/plain' }), 'message.'.concat(n))], t, E),
			C.S.dispatchToLastSubscribed(v.CkL.CLEAR_TEXT),
			'' !== i && C.S.dispatchToLastSubscribed(v.CkL.INSERT_TEXT, { plainText: i });
	}
	return (0, i.jsx)(o.Menu, {
		onSelect: _,
		navId: 'channel-attach',
		onClose: p,
		'aria-label': A.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
		className: M.menu,
		children: l.map(function (e) {
			var n;
			let a = (0, i.jsxs)('div', {
				className: M.optionLabel,
				children: [
					(0, i.jsx)(e.icon, {
						className: M.optionIcon,
						color: 'currentColor'
					}),
					(0, i.jsx)('div', {
						className: M.optionName,
						children: e.display
					}),
					null != e.badgeVal &&
						e.badgeVal > 0 &&
						(0, i.jsx)(o.NumberBadge, {
							className: M.badge,
							color: null !== (n = e.badgeColor) && void 0 !== n ? n : s.Z.STATUS_DANGER,
							count: e.badgeVal
						})
				]
			});
			switch (e.type) {
				case N.r.UPLOAD_A_FILE:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'upload-file',
							label: a,
							action: c
						},
						'upload-file'
					);
				case N.r.UPLOAD_TEXT_AS_FILE:
					if ('' === L) return null;
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'upload-text-as-file',
							label: a,
							action: H
						},
						'upload-text-as-file'
					);
				case N.r.CLIPS:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'clips',
							label: a,
							action: U
						},
						'clips'
					);
				case N.r.POLL:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'poll',
							label: a,
							action: w
						},
						'poll'
					);
				case N.r.INVITE_TO_PLAY_GAME:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'play',
							label: a,
							action: () => {
								var n;
								return (
									(n = e.activity),
									void (g.default.track(v.rMx.OPEN_MODAL, {
										type: 'Send Join Invite',
										application_id: n.application_id,
										location: v.jXE.CHANNEL_TEXT_AREA
									}),
									b(n, t, v.mFx.JOIN, y))
								);
							}
						},
						'play'
					);
				case N.r.INVITE_TO_LISTEN:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'listen',
							label: a,
							action: () => {
								var n;
								return (
									(n = e.activity),
									void (g.default.track(v.rMx.OPEN_MODAL, {
										type: 'Send Listen Invite',
										location: v.jXE.CHANNEL_TEXT_AREA
									}),
									b(n, t, v.mFx.LISTEN, y))
								);
							}
						},
						'listen'
					);
				case N.r.INVITE_TO_WATCH:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'watch',
							label: a,
							action: () => {
								var n;
								return (
									(n = e.activity),
									void (g.default.track(v.rMx.OPEN_MODAL, {
										type: 'Send Watch Invite',
										location: v.jXE.CHANNEL_TEXT_AREA
									}),
									b(n, t, v.mFx.WATCH, y))
								);
							}
						},
						'watch'
					);
				case N.r.CREATE_THREAD:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'THREAD',
							label: a,
							action: D
						},
						'THREAD'
					);
				case N.r.SLASH_COMMAND:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'SLASH_COMMAND',
							label: a,
							action: k
						},
						'SLASH_COMMAND'
					);
				case N.r.ACTIVITY:
					return (0, i.jsx)(
						o.MenuItem,
						{
							id: 'activity',
							label: a,
							action: B,
							hint: (0, i.jsx)(j, {})
						},
						'activity'
					);
				default:
					return null;
			}
		})
	});
}
