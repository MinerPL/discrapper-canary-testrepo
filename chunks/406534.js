n.d(t, {
	Z: function () {
		return et;
	}
}),
	n(653041),
	n(47120),
	n(733860);
var i = n(735250),
	a = n(470079),
	s = n(442837),
	l = n(904245),
	r = n(966390),
	o = n(902840),
	c = n(607070),
	u = n(367907),
	d = n(858644),
	h = n(600084),
	m = n(62764),
	p = n(79712),
	_ = n(736052),
	f = n(359110),
	E = n(359119),
	g = n(13279),
	C = n(248789),
	I = n(88101),
	x = n(576954),
	T = n(280006),
	N = n(347102),
	v = n(765104),
	S = n(122707),
	Z = n(779836),
	A = n(23750),
	M = n(496675),
	b = n(306680),
	R = n(944486),
	j = n(594174),
	L = n(55935),
	P = n(70956),
	O = n(709054),
	y = n(534091),
	D = n(900164),
	k = n(554838),
	U = n(481369),
	w = n(186877),
	B = n(294218),
	H = n(534469),
	G = n(993397),
	V = n(511010),
	F = n(524444),
	W = n(977391),
	z = n(921235),
	Y = n(97352),
	K = n(226027),
	q = n(959517),
	X = n(981631),
	Q = n(134612),
	J = n(689938);
function $(e) {
	return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = a.memo(function (e) {
	let { file: t, channel: n, user: a, isGroupStart: s } = e;
	return (0, i.jsx)(B.Z, {
		isGroupStart: s,
		channel: n,
		message: new A.ZP({
			id: t.id,
			key: 'pending-upload-'.concat(t.id),
			type: X.uaV.DEFAULT,
			author: a,
			channel_id: n.id,
			customRenderedContent: {
				hasSpoilerEmbeds: !1,
				content: (0, i.jsx)(d.g, {
					filename: t.name,
					progress: null != t.progress ? t.progress : 0,
					size: t.currentSize,
					onCancelUpload: () => {
						r.Z.cancel(t);
					}
				})
			}
		})
	});
});
function et(e) {
	var t;
	let n,
		a,
		{
			channel: r,
			messages: d,
			unreadCount: B,
			showNewMessagesBar: et,
			messageDisplayCompact: en,
			channelStream: ei,
			uploads: ea,
			scrollManager: es,
			specs: el,
			filterAfterTimestamp: er,
			showingQuarantineBanner: eo,
			hideSummaries: ec
		} = e,
		eu = j.default.getCurrentUser(),
		ed = () => es.isInitialized() || d.ready,
		eh = (0, w.$)(r),
		em = d.length > 0 && (null === (t = d.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(r)),
		ep = (0, o.ts)(r),
		e_ = (0, s.e7)([v.Z], () => v.Z.shouldShowTopicsBar() && !ec),
		ef = (0, I.P)(r.id, Q.zr),
		eE = (0, g.z)(r.id, Q.zr),
		eg = (0, U.Z)(),
		eC = (function (e, t) {
			return e.isDM() && null != t
				? t.type === E.pj.STRANGER_DANGER
					? (0, i.jsx)(x.M, {
							channelId: e.id,
							warningId: t.id,
							senderId: e.getRecipientId()
						})
					: (0, i.jsx)(C.Y, {
							channelId: e.id,
							warningId: t.id,
							senderId: e.getRecipientId()
						})
				: e.isGroupDM() && (0, T.f)({ location: 'blocked_user_banner' })
					? (0, i.jsx)(N.e, { channel: e })
					: null;
		})(r, null != ef ? ef : eE),
		eI = r.isForumPost() && !em ? (0, i.jsx)(m.Z, { postId: r.id }) : null,
		ex = (0, _.Z)(r.id);
	(0, Y.Z)();
	let eT = null,
		eN = [],
		ev = ei.map((e, t) => {
			if (e.type === X.ys_.DIVIDER) {
				var n, a;
				let s = null != e.unreadId;
				return null != er
					? null
					: e.isSummaryDivider
						? (0, i.jsx)(Z.Z, {
								index: t,
								item: e,
								channel: r,
								isBeforeGroup: null == e.content && $(ei[t + 1])
							})
						: (0, i.jsx)(
								V.Z,
								{
									isUnread: s,
									isBeforeGroup: null == e.content && $(ei[t + 1]),
									id: s ? q.j1 : void 0,
									children: e.content
								},
								'divider-'.concat(
									null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t
								)
							);
			}
			if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
				return (0, i.jsx)(
					m.Z,
					{
						parentChannelId: r.parent_id,
						postId: r.id,
						isLastItem: t + 1 === ei.length,
						isFirstMessage: !0
					},
					'forum-post-action-bar-'.concat(r.id)
				);
			if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
				let t;
				return (
					(t =
						e.type === X.ys_.MESSAGE_GROUP_BLOCKED
							? J.Z.Messages.BLOCKED_MESSAGE_COUNT
							: J.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT),
					(0, i.jsx)(
						G.Z,
						{
							unreadId: q.j1,
							messages: e,
							channel: r,
							compact: en,
							collapsedReason: t
						},
						e.key
					)
				);
			}
			if (null != er && er > e.content.timestamp.getTime() * P.Z.Millis.SECOND) return;
			let s = M.Z.can(X.Plq.CREATE_INSTANT_INVITE, r);
			if ((0, D.Z)(e.content, s)) return;
			e.type === X.ys_.MESSAGE && null == eT && (eT = e);
			let l = e.groupId === (null == eT ? void 0 : eT.groupId) ? eT.content.id : e.groupId,
				o = e.type === X.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
			return (0, i.jsx)(
				o,
				{
					compact: en,
					channel: r,
					message: e.content,
					groupId: l,
					flashKey: e.flashKey,
					id: (0, y.p)(r.id, e.content.id),
					isLastItem: t >= ei.length - 1,
					renderContentOnly: ex
				},
				e.content.id
			);
		});
	eN.push(...ev);
	let eS = ei[ei.length - 1];
	if (
		(null != eu &&
			ea.forEach((e, t) => {
				let n =
					0 === t &&
					(0, k.J)(
						r,
						eS,
						new A.ZP({
							type: X.uaV.DEFAULT,
							author: eu
						})
					);
				eN.push(
					(0, i.jsx)(
						ee,
						{
							file: e,
							channel: r,
							user: eu,
							isGroupStart: n
						},
						'upload-'.concat(e.id)
					)
				);
			}),
		d.hasMoreBefore && null == er)
	) {
		d.length > 0 &&
			eN.unshift(
				(0, i.jsx)(
					'div',
					{
						style: {
							height: q.D4,
							flex: '0 0 auto'
						}
					},
					'buffer'
				)
			);
		let { useReducedMotion: e } = c.Z;
		((e && ed()) || !e) &&
			eN.unshift(
				(0, i.jsx)(
					W.ZP,
					{
						compact: en,
						...el
					},
					'has-more'
				)
			);
	}
	if (
		((!d.hasMoreBefore || null != er) &&
			eN.unshift(
				(0, i.jsx)(
					h.Z,
					{
						channel: r,
						showingBanner: eo
					},
					'empty-message'
				)
			),
		d.hasMoreAfter &&
			eN.push(
				(0, i.jsx)(
					W.ZP,
					{
						compact: en,
						...el
					},
					'has-more-after'
				)
			),
		!eo && eh && ed() && eN.push((0, i.jsx)(z.Z, { channel: r })),
		B > 0 && et && ed())
	) {
		let e, t;
		let a = b.ZP.getOldestUnreadTimestamp(r.id),
			s = 0 !== a ? a : O.default.extractTimestamp(r.id),
			l = (0, L.KC)(new Date(), new Date(s));
		if (
			(b.ZP.isEstimated(r.id)
				? ((e = l ? J.Z.Messages.NEW_MESSAGES_ESTIMATED : J.Z.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE),
					(t = J.Z.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES))
				: ((e = l ? J.Z.Messages.NEW_MESSAGES : J.Z.Messages.NEW_MESSAGES_WITH_DATE),
					(t = J.Z.Messages.NEW_MESSAGES_SUMMARIES)),
			ep && (0, o.tW)(r) && eg.includes(K.E.SUMMARIES))
		) {
			let a = b.ZP.ackMessageId(r.id),
				l = (0, S.q)(r.id, b.ZP.getOldestUnreadMessageId(r.id));
			if (
				((0, u.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
					num_unread_summaries: l,
					num_unread_messages: B,
					last_ack_message_id: a,
					summaries_enabled_by_user: e_,
					summaries_enabled_for_channel: (0, o.Lp)(r)
				}),
				(0, o.Lp)(r))
			) {
				let a = e_
					? t.format({ count: B })
					: e.format({
							count: B,
							timestamp: s
						});
				if (e_) {
					let e =
						l > 0
							? (0, i.jsxs)('div', {
									style: {
										display: 'flex',
										textTransform: 'none',
										alignItems: 'center',
										position: 'absolute',
										left: '40%'
									},
									children: [
										t.format({ count: B }),
										(0, i.jsx)(p.Z, {
											style: {
												paddingLeft: 8,
												paddingRight: 8
											},
											height: 4,
											width: 4
										}),
										J.Z.Messages.NEW_SUMMARIES.format({ count: l })
									]
								})
							: (0, i.jsx)('div', {
									style: {
										display: 'flex',
										textTransform: 'none',
										alignItems: 'center',
										position: 'absolute',
										left: '45%'
									},
									children: a
								});
					n = (0, i.jsx)(F.G5, {
						scrollManager: es,
						content: e,
						channel: r
					});
				} else {
					let e = (0, i.jsx)('div', {
						style: {
							display: 'flex',
							textTransform: 'none',
							alignItems: 'center'
						},
						children:
							l > 0
								? (0, i.jsxs)(i.Fragment, {
										children: [
											t.format({ count: B }),
											(0, i.jsx)(p.Z, {
												style: {
													paddingLeft: 8,
													paddingRight: 8
												},
												height: 4,
												width: 4
											}),
											J.Z.Messages.NEW_SUMMARIES.format({ count: l })
										]
									})
								: (0, i.jsx)(i.Fragment, { children: a })
					});
					n = (0, i.jsx)(F.LE, {
						content: e,
						channelId: r.id
					});
				}
			}
		} else
			eg.includes(K.E.NEW_MESSAGES) &&
				(n = (0, i.jsx)(F.LE, {
					content: e.format({
						count: B,
						timestamp: s
					}),
					channelId: r.id
				}));
	}
	if (
		(null == n &&
			(0, o.Lp)(r) &&
			e_ &&
			eg.includes(K.E.SUMMARIES) &&
			(n = (0, i.jsx)(F.BO, {
				channel: r,
				scrollManager: es
			})),
		d.error)
	)
		a = (0, i.jsx)(F.Rp, {
			loading: d.loadingMore,
			onClick: () => {
				var e;
				return (
					(e = r.id),
					void l.Z.fetchMessages({
						channelId: e,
						limit: X.AQB,
						truncate: !0
					})
				);
			}
		});
	else if (d.hasMoreAfter && ed()) {
		let { jumpReturnTargetId: e } = d;
		a =
			d.loadingMore && d.jumpedToPresent
				? (0, i.jsx)(F.DR, {})
				: null != e
					? (0, i.jsx)(F.DR, {
							type: F.A7.REPLY,
							onClick: () => {
								var t, n;
								return (
									(t = r),
									(n = e),
									void l.Z.jumpToMessage({
										channelId: t.id,
										messageId: n,
										flash: !0
									})
								);
							}
						})
					: (0, i.jsx)(F.DR, {
							onClick: () =>
								(function (e) {
									l.Z.jumpToPresent(e.id, X.AQB);
									let t = R.Z.getChannelId();
									e.id === t && (0, f.Kh)(e.id);
								})(r)
						});
	}
	return {
		channelStreamMarkup: eN,
		newMessagesBar: n,
		jumpToPresentBar: a,
		forumPostActionBar: eI,
		safetyWarningBanner: eC
	};
}
