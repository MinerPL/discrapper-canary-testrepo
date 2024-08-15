n.d(t, {
	Lx: function () {
		return O;
	},
	kq: function () {
		return v;
	},
	vy: function () {
		return N;
	},
	yX: function () {
		return i;
	}
});
var r,
	i,
	a = n(392711),
	s = n(544891),
	o = n(570140),
	l = n(100527),
	u = n(367907),
	c = n(339085),
	d = n(697426),
	_ = n(100986),
	E = n(944486),
	f = n(70956),
	h = n(176354),
	p = n(696900),
	I = n(456631),
	m = n(963838),
	T = n(353368),
	g = n(981631),
	S = n(710111);
function A(e) {
	let t = new AbortController(),
		n = (0, a.throttle)((n) => {
			E.Z.getVoiceChannelId() !== e && t.abort();
		}, 1000);
	return {
		abortController: t,
		onRequestProgress: n
	};
}
function N(e, t, n) {
	var r;
	let { abortController: i, onRequestProgress: a } = A(e),
		o = null !== (r = p.Z.getState().animationType) && void 0 !== r ? r : T.q.BASIC,
		u = {
			animation_type: o,
			animation_id: (0, m.Iu)(o, m.v)
		};
	s.tn
		.post({
			url: g.ANM.CUSTOM_CALL_SOUNDS(e),
			body: u,
			signal: i.signal,
			onRequestProgress: a
		})
		.then(g.VqG, () => {
			if (i.signal.aborted) return;
		}),
		(0, _.Z)([l.Z.CHANNEL_CALL], n, t, d.jy.ENTRY);
}
function v(e, t, n, r) {
	var i, a;
	let o = c.ZP.getCustomEmojiById(null !== (i = t.emojiId) && void 0 !== i ? i : ''),
		{ abortController: l, onRequestProgress: u } = A(e),
		E = {
			sound_id: t.soundId,
			emoji_id: t.emojiId,
			emoji_name: null !== (a = t.emojiName) && void 0 !== a ? a : null == o ? void 0 : o.name
		};
	t.guildId !== S.X8 && (E.source_guild_id = t.guildId),
		s.tn
			.post({
				url: g.ANM.SEND_SOUNDBOARD_SOUND(e),
				body: E,
				signal: l.signal,
				onRequestProgress: u
			})
			.then(g.VqG, () => {
				if (l.signal.aborted) return;
			}),
		(0, _.Z)(null != r ? r : [], n, t, d.jy.DEFAULT);
}
((r = i || (i = {})).EMOJI_PICKER = 'emoji_picker'), (r.EFFECT_BAR = 'effect_bar');
let O = async (e) => {
		let { channel: t, emoji: n, location: r, animationType: i, animationId: a, isPremium: l } = e;
		if (null == n || I.Z.isOnCooldown) return;
		let u = l && null != i ? i : T.q.BASIC;
		try {
			let e =
				null != n.id
					? {
							emoji_id: n.id,
							emoji_name: n.name,
							animation_type: u,
							animation_id: a
						}
					: {
							emoji_id: null,
							emoji_name: n.optionallyDiverseSequence,
							animation_type: u,
							animation_id: a
						};
			await s.tn.post({
				url: g.ANM.VOICE_CHANNEL_EFFECTS(t.id),
				body: e
			}),
				C(t, n, r, u),
				o.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
		} catch (e) {
			if (429 === e.status && null != e.body.retry_after) {
				let t = e.body.retry_after * f.Z.Millis.SECOND;
				o.Z.dispatch({
					type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
					cooldownEndsAtMs: t
				});
			}
		}
	},
	R = {
		[T.q.BASIC]: 'Basic',
		[T.q.PREMIUM]: 'Premium'
	},
	C = (e, t, n, r) => {
		let {
				unicode: i,
				custom: a,
				customExternal: s,
				managed: o,
				managedExternal: l,
				animated: c
			} = (0, h.sp)([t], e.getGuildId()),
			d = R[r];
		u.ZP.trackWithMetadata(g.rMx.VOICE_CHANNEL_EFFECT_SENT, {
			channel_id: e.id,
			guild_id: e.getGuildId(),
			location: n,
			emoji_unicode: i,
			emoji_custom: a,
			emoji_custom_external: s,
			emoji_managed: o,
			emoji_managed_external: l,
			emoji_animated: c,
			animation_type: d,
			is_broadcast: e.isBroadcastChannel()
		});
	};
