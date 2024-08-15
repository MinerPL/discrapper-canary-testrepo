var r = n(544891),
	i = n(570140),
	a = n(367907),
	s = n(957730),
	o = n(592125),
	l = n(493683),
	u = n(904245),
	c = n(981631);
t.Z = {
	updateActivity(e) {
		let { applicationId: t, distributor: n, shareActivity: a, token: s = null, duration: o = 0, closed: l = !1, exePath: u = null, voiceChannelId: d = null, sessionId: _ = null, mediaSessionId: E = null } = e;
		i.Z.wait(() =>
			i.Z.dispatch({
				type: 'ACTIVITY_UPDATE_START',
				applicationId: t,
				duration: o,
				distributor: n
			})
		),
			r.tn
				.post({
					url: c.ANM.ACTIVITIES,
					body: {
						application_id: t,
						token: s,
						duration: o,
						share_activity: a,
						distributor: n,
						closed: l,
						exePath: u,
						voice_channel_id: d,
						session_id: _,
						media_session_id: E
					},
					retries: 1,
					oldFormErrors: !0
				})
				.then((e) => {
					let {
						body: { token: r }
					} = e;
					i.Z.dispatch({
						type: 'ACTIVITY_UPDATE_SUCCESS',
						applicationId: t,
						token: r,
						duration: o,
						distributor: n
					});
				})
				.catch(() => {
					i.Z.dispatch({
						type: 'ACTIVITY_UPDATE_FAIL',
						applicationId: t
					});
				});
	},
	sendActivityInvite(e) {
		let { channelId: t, type: n, activity: r, content: i, location: l } = e,
			d = o.Z.getChannel(t);
		if (null == d) return Promise.resolve(null);
		let _ = s.ZP.parse(d, null != i ? i : '');
		return u.Z.sendMessage(d.id, _, !1, {
			activityAction: {
				type: n,
				activity: r
			}
		}).then(
			(e) => (
				a.ZP.trackWithMetadata(c.rMx.INVITE_SENT, {
					location: l,
					invite_type: r.type === c.IIU.LISTENING ? c.dAT.SPOTIFY : c.dAT.APPLICATION,
					application_id: r.application_id,
					guild_id: d.getGuildId(),
					channel_id: d.id,
					message_id: null != e ? e.body.id : null
				}),
				Promise.resolve(d)
			),
			(e) => Promise.reject(e)
		);
	},
	sendActivityInviteUser(e) {
		let { userId: t, type: n, activity: r, content: i, location: a } = e;
		return l.Z.ensurePrivateChannel(t).then((e) =>
			this.sendActivityInvite({
				channelId: e,
				type: n,
				activity: r,
				content: i,
				location: a
			})
		);
	},
	async getJoinSecret(e, t, n, i, a) {
		let s = {};
		return (
			null != i && (s.channel_id = i),
			null != a && (s.message_id = a),
			(
				await r.tn.get({
					url: c.ANM.USER_ACTIVITY_JOIN(e, t, n),
					retries: 3,
					query: s
				})
			).body.secret
		);
	}
};
