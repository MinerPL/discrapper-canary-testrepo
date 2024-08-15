n.d(t, {
	W: function () {
		return a;
	},
	_: function () {
		return _;
	}
});
var r = n(544891),
	i = n(570140),
	s = n(814443),
	I = n(428598),
	u = n(981631);
function a() {
	let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
	return s.Z.needsRefresh()
		? (i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
			r.tn
				.get({
					url: u.ANM.USER_AFFINITIES,
					retries: e ? 3 : 0,
					oldFormErrors: !0
				})
				.then(
					(e) => {
						let { body: t } = e;
						i.Z.dispatch({
							type: 'LOAD_USER_AFFINITIES_SUCCESS',
							affinities: t
						});
					},
					() => {
						i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
					}
				))
		: Promise.resolve();
}
function _() {
	let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
	return I.Z.shouldFetch()
		? (i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
			r.tn
				.get({
					url: u.ANM.USER_AFFINITIES_V2,
					retries: e ? 3 : 0,
					oldFormErrors: !0
				})
				.then(
					(e) => {
						let { body: t } = e;
						i.Z.dispatch({
							type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
							affineUsers: t.user_affinities.map((e) => {
								var t, n, r, i, s, I, u, a;
								return {
									otherUserId: e.other_user_id,
									userSegment: e.user_segment,
									otherUserSegment: e.other_user_segment,
									isFriend: e.is_friend,
									dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
									dmRank: null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
									vcProbability: null !== (r = e.vc_probability) && void 0 !== r ? r : 0,
									vcRank: null !== (i = e.vc_rank) && void 0 !== i ? i : 0,
									serverMessageProbability: null !== (s = e.server_message_probability) && void 0 !== s ? s : 0,
									serverMessageRank: null !== (I = e.server_message_rank) && void 0 !== I ? I : 0,
									communicationProbability: null !== (u = e.communication_probability) && void 0 !== u ? u : 0,
									communicationRank: null !== (a = e.communication_rank) && void 0 !== a ? a : 0
								};
							})
						});
					},
					() => {
						i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
					}
				))
		: Promise.resolve();
}
