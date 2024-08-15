n.d(t, {
	NK: function () {
		return O;
	},
	R6: function () {
		return N;
	},
	ok: function () {
		return A;
	},
	vN: function () {
		return v;
	}
});
var r = n(512722),
	i = n.n(r),
	a = n(392711),
	s = n.n(a),
	o = n(570140),
	l = n(430742),
	u = n(40851),
	c = n(367907),
	d = n(727429),
	_ = n(703656),
	E = n(359110),
	f = n(695346),
	h = n(703558),
	p = n(944486),
	m = n(979651),
	I = n(585483),
	T = n(124368),
	g = n(981631),
	S = n(176505);
function A(e, t, n) {
	u.UI.dispatch(g.CkL.POPOUT_CLOSE);
	let r = !s().isEmpty(m.Z.getVoiceStatesForChannel(e.id));
	if (t || !f.vF.getSetting() || __OVERLAY__ || r) {
		o.Z.dispatch({
			type: 'SIDEBAR_CLOSE',
			baseChannelId: e.parent_id
		}),
			null != n ? (0, E.ad)(e, { source: n }) : (0, E.Kh)(e.id);
		return;
	}
	i()(null != e.parent_id, 'all threads must have parents');
	let a = p.Z.getChannelId();
	e.parent_id !== a && !(0, S.ME)(a) && (0, E.Kh)(e.parent_id),
		(0, _.uL)(g.Z5c.CHANNEL_THREAD_VIEW((0, d.e)(e), (0, S.ME)(a) ? S.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? { source: T.on.FORUM } : void 0),
		setTimeout(() => {
			I.S.dispatch(g.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
		}, 0);
}
function N(e, t, n) {
	if (
		(i()(!e.isForumLikeChannel(), 'cannot open thread creation sidebar in forums'),
		i()(!__OVERLAY__, 'Cannot create threads in the overlay.'),
		(0, c.yw)(g.rMx.THREAD_CREATION_STARTED, {
			location: n,
			channel_id: e.id,
			guild_id: e.guild_id
		}),
		u.UI.dispatch(g.CkL.POPOUT_CLOSE),
		p.Z.getChannelId() !== e.id && (0, E.Kh)(e.id),
		'' === h.Z.getDraft(e.id, h.d.FirstThreadMessage))
	) {
		let t = h.Z.getDraft(e.id, h.d.ChannelMessage);
		l.Z.saveDraft(e.id, '', h.d.ChannelMessage), l.Z.saveDraft(e.id, t, h.d.FirstThreadMessage);
	}
	setTimeout(() => {
		o.Z.dispatch({
			type: 'SIDEBAR_CREATE_THREAD',
			parentChannelId: e.id,
			parentMessageId: null == t ? void 0 : t.id,
			location: n
		});
	}, 0);
}
function v(e, t) {
	(0, _.uL)(g.Z5c.CHANNEL(e, (0, S.ME)(t) ? S.oC.GUILD_HOME : t)),
		o.Z.dispatch({
			type: 'SIDEBAR_CLOSE',
			baseChannelId: t
		});
}
function O(e) {
	o.Z.dispatch({
		type: 'SIDEBAR_CLOSE',
		baseChannelId: e
	}),
		o.Z.dispatch({
			type: 'DRAFT_CLEAR',
			channelId: e,
			draftType: h.d.FirstThreadMessage
		}),
		o.Z.dispatch({
			type: 'DRAFT_CLEAR',
			channelId: e,
			draftType: h.d.ThreadSettings
		});
}
