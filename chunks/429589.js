n.d(t, {
	Z: function () {
		return F;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(278323),
	l = n(224706),
	u = n(287734),
	c = n(2052),
	d = n(906732),
	_ = n(835473),
	E = n(592745),
	f = n(592125),
	h = n(757266),
	p = n(650774),
	m = n(430824),
	I = n(283595),
	T = n(496675),
	g = n(699516),
	S = n(944486),
	A = n(594174),
	N = n(979651),
	v = n(181106),
	O = n(417363),
	R = n(358085),
	C = n(804739),
	y = n(566620),
	D = n(317381),
	L = n(638880),
	b = n(255621),
	M = n(452634),
	P = n(527805),
	U = n(620662),
	w = n(275920),
	x = n(915863),
	G = n(701488),
	k = n(981631),
	B = n(689938);
function F(e) {
	var t, n;
	let { activity: F, embeddedActivity: V, user: H, onAction: Z, isEmbedded: Y = !1, ButtonComponent: j = x.Z, ...W } = e,
		{ analyticsLocations: K } = (0, d.ZP)(),
		[z, q] = i.useState(!1),
		Q = (0, a.e7)([A.default], () => A.default.getCurrentUser()),
		X = H.id === (null == Q ? void 0 : Q.id),
		$ = null !== (t = null == V ? void 0 : V.applicationId) && void 0 !== t ? t : null == F ? void 0 : F.application_id,
		J = (0, M.Z)({
			channelId: null == V ? void 0 : V.channelId,
			userId: H.id,
			activity: F
		}),
		ee = (0, a.e7)(
			[I.Z, E.Z, O.Z, h.Z],
			() =>
				Y ||
				(null != $ &&
					(0, C.t)({
						LibraryApplicationStore: I.Z,
						LaunchableGameStore: E.Z,
						DispatchApplicationStore: O.Z,
						ConnectedAppsStore: h.Z,
						applicationId: $
					}))
		),
		et = (0, a.e7)([D.ZP], () =>
			Array.from(D.ZP.getSelfEmbeddedActivities().values()).some((e) => {
				let { applicationId: t, channelId: n } = e;
				return (t === (null == F ? void 0 : F.application_id) || t === (null == V ? void 0 : V.applicationId)) && n === J;
			})
		),
		en = (0, a.e7)([v.Z], () => null != F && null != F.application_id && v.Z.getState(F.application_id, k.mFx.JOIN) === k.OcF.LOADING),
		[er] = (0, _.Z)((null == V ? void 0 : V.applicationId) != null ? [null == V ? void 0 : V.applicationId] : (null == F ? void 0 : F.application_id) != null ? [null == F ? void 0 : F.application_id] : []),
		ei = (0, P.s5)({
			userId: H.id,
			activity: F,
			channelId: J,
			application: er
		}),
		ea = (0, a.e7)([f.Z, m.Z, p.Z, g.Z, S.Z, N.Z, T.Z], () =>
			null != V
				? ei === P.Fw.CAN_JOIN
				: null != F
					? (0, b.Z)({
							user: H,
							activity: F,
							application: er,
							channelId: J,
							currentUser: Q,
							isEmbedded: Y,
							ChannelStore: f.Z,
							GuildStore: m.Z,
							GuildMemberCountStore: p.Z,
							RelationshipStore: g.Z,
							SelectedChannelStore: S.Z,
							VoiceStateStore: N.Z,
							PermissionStore: T.Z
						})
					: void 0
		),
		es = (0, a.e7)([D.ZP], () => Array.from(D.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == V ? void 0 : V.applicationId) && e.channelId === (null == V ? void 0 : V.channelId))),
		eo = (0, c.O)(),
		el = !R.isPlatformEmbedded;
	if (!((0, U.Z)(F, k.xjy.JOIN) || Y) || null == $) return null;
	let eu = !X || (Y && !es),
		ec = eu && (el || ee) && !z && !et && (!Y || ea),
		ed = null;
	eu ? !el && !ee && null != F && (ed = B.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: F.name })) : (ed = B.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
	let e_ = null !== (n = null == V ? void 0 : V.launchId) && void 0 !== n ? n : null == F ? void 0 : F.session_id,
		eE = async (e, t) => {
			var n;
			if (null != e_ && null != $)
				await l.Z.join({
					userId: e.id,
					sessionId: e_,
					applicationId: $,
					channelId: S.Z.getVoiceChannelId(),
					messageId: null,
					intent: G.Ws.PLAY,
					embedded: (0, U.Z)(t, k.xjy.EMBEDDED)
				}),
					(0, w.Z)({
						type: k.q5t.JOIN,
						userId: e.id,
						applicationId: $,
						partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
						locationObject: eo.location,
						analyticsLocations: K
					});
		},
		ef = async () => {
			let e = !1;
			if (Y) {
				if (!ea || null == J || null == $) return;
				e = await (0, L.Z)({
					applicationId: $,
					activityChannelId: J,
					locationObject: eo.location,
					analyticsLocations: K
				});
			}
			if (!e) {
				let e;
				ea && (null == Z || Z(), eE(H, F)),
					q(!0),
					null != J && null != $
						? (e = await y.pu({
								channelId: J,
								applicationId: $,
								userId: H.id,
								location: k.Sbl.PROFILE_POPOUT
							}))
						: null != F &&
							(e = await o.Z.sendActivityInviteUser({
								type: k.mFx.JOIN_REQUEST,
								userId: H.id,
								activity: F,
								location: k.Sbl.PROFILE_POPOUT
							})),
					null != e && u.default.selectPrivateChannel(e.id);
			}
		},
		eh = ea ? B.Z.Messages.JOIN : B.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
	return (
		Y && (eh = B.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
		es && (eh = B.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
		(0, r.jsx)(
			s.Tooltip,
			{
				text: ed,
				children: (e) => {
					let { onMouseEnter: t, onMouseLeave: n } = e;
					return (0, r.jsx)(j, {
						onClick: ef,
						onMouseEnter: t,
						onMouseLeave: n,
						disabled: !ec,
						submitting: en,
						fullWidth: !0,
						...W,
						children: eh
					});
				}
			},
			'join'
		)
	);
}
