t.d(n, {
	Z: function () {
		return S;
	}
});
var i = t(735250);
t(470079);
var a = t(442837),
	l = t(481060),
	r = t(239091),
	o = t(749210),
	c = t(305325),
	s = t(281956),
	d = t(889161),
	u = t(703656),
	_ = t(922482),
	g = t(984933),
	v = t(430824),
	h = t(496675),
	f = t(626135),
	I = t(572004),
	m = t(482241),
	p = t(951539),
	E = t(894017),
	x = t(274311),
	b = t(854698),
	C = t(118998),
	N = t(139712),
	T = t(765305),
	Z = t(981631),
	j = t(689938);
function S(e) {
	let { guild: n, channel: S, guildScheduledEvent: L, isActive: D, recurrenceId: k, onActionTaken: R } = e,
		{ scheduled_start_time: y, id: M, entity_type: B, guild_id: P } = L,
		{ canManageGuildEvent: w } = (0, d.XJ)(null != S ? S : n),
		A = w(L),
		G = (0, p.ZP)(L),
		O = (0, x.T)(null == S ? void 0 : S.id, L.id),
		{ withinStartWindow: U } = (0, b.ub)(y),
		V = (0, a.e7)([h.Z], () => (null == S ? !void 0 : !S.isGuildVocal()) || h.Z.can(Z.Plq.CONNECT, S), [S]),
		F = (0, s.J)(P),
		H = (0, E.Z)(k, M);
	function z(e) {
		e.stopPropagation(), (0, N.Z)(M, k, P);
	}
	async function W(e) {
		e.stopPropagation(), await o.Z.joinGuild(P), v.Z.addConditionalChangeListener(() => null == v.Z.getGuild(P) || (!D && z(e), X(e), !1));
	}
	function X(e) {
		e.stopPropagation();
		let n = g.ZP.getDefaultChannel(P);
		(0, l.closeAllModals)(), (0, u.XU)(P, null == n ? void 0 : n.id);
	}
	return {
		onDeleteClick: A
			? function (e) {
					if ((e.stopPropagation(), !!A && !D))
						(0, l.openModal)((e) =>
							(0, i.jsx)(l.ConfirmModal, {
								...e,
								header: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
								confirmText: j.Z.Messages.DELETE,
								cancelText: j.Z.Messages.CANCEL,
								onConfirm: () => m.Z.deleteGuildEvent(M, P),
								children: (0, i.jsx)(l.Text, {
									variant: 'text-md/normal',
									children: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
								})
							})
						);
				}
			: void 0,
		onContextMenu: function (e) {
			e.stopPropagation(),
				null != n &&
					(0, r.jW)(e, async () => {
						let { default: e } = await Promise.all([t.e('15450'), t.e('37133')]).then(t.bind(t, 215269));
						return (t) =>
							(0, i.jsx)(e, {
								guildEventId: M,
								recurrenceId: k,
								channel: S,
								guild: n,
								...t
							});
					});
		},
		onJoinClick:
			V || F
				? function (e) {
						if ((e.stopPropagation(), F)) {
							null == R || R(), (0, c.hk)(P);
							return;
						}
						(null == S ? void 0 : S.isGuildStageVoice()) ? ((0, _.Cq)(S), null == R || R()) : (null == S ? void 0 : S.isGuildVoice()) && (m.Z.joinVoiceEvent(S.guild_id, S.id), null == R || R());
					}
				: void 0,
		onRsvpClick: z,
		onStartClick:
			A && U && !(null == H ? void 0 : H.is_canceled)
				? function (e) {
						e.stopPropagation(),
							(0, l.openModalLazy)(async () => {
								let { default: e } = await Promise.all([t.e('84722'), t.e('36783')]).then(t.bind(t, 296864));
								return (n) =>
									(0, i.jsx)(e, {
										...n,
										event: L,
										onSuccess: R
									});
							});
					}
				: void 0,
		onInviteClick: function (e) {
			if ((e.stopPropagation(), null != n)) {
				if (!G || !O) {
					let e = (0, C.H)({
						guildId: P,
						guildEventId: M
					});
					(0, I.JG)(e),
						f.default.track(Z.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
							guild_id: P,
							guild_scheduled_event_id: M
						});
					return;
				}
				(0, l.openModalLazy)(async () => {
					let { default: e } = await Promise.all([t.e('7654'), t.e('1187'), t.e('31400')]).then(t.bind(t, 560114));
					return (t) =>
						(0, i.jsx)(e, {
							...t,
							guild: n,
							channel: S,
							guildScheduledEvent: L,
							source: Z.t4x.GUILD_EVENTS
						});
				});
			}
		},
		onEndClick:
			A && B === T.WX.EXTERNAL && D
				? function (e) {
						if ((e.stopPropagation(), !A)) return;
						let n = () => {
							m.Z.endEvent(M, P), (0, l.closeAllModals)();
						};
						(0, l.openModal)((e) =>
							(0, i.jsx)(l.ConfirmModal, {
								...e,
								header: j.Z.Messages.END_EVENT,
								confirmText: j.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
								cancelText: j.Z.Messages.CANCEL,
								onConfirm: n,
								children: (0, i.jsx)(l.Text, {
									variant: 'text-md/normal',
									children: j.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
								})
							})
						);
					}
				: void 0,
		onJoinGuildClick: W,
		onGoToGuildClick: X
	};
}
