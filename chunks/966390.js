n(47120), n(789020);
var r = n(481060),
	i = n(570140),
	a = n(430742),
	s = n(904245),
	o = n(166459),
	l = n(531643),
	u = n(881052),
	c = n(673750),
	d = n(141795),
	_ = n(476326),
	E = n(680287),
	f = n(163268),
	h = n(539573),
	p = n(786761),
	I = n(3148),
	m = n(48854),
	T = n(785359),
	g = n(79390),
	S = n(623292),
	A = n(807092),
	N = n(467798),
	v = n(703558),
	O = n(117530),
	R = n(630388),
	C = n(226351),
	y = n(981631),
	D = n(689938);
async function L(e) {
	var t, n, r;
	let d,
		{ channelId: _, uploads: L, draftType: b, parsedMessage: M, options: P = {}, raiseEndpointErrors: U = !1 } = e,
		w = new E.Z(y.ANM.MESSAGES(_)),
		x = new C.o(),
		G = {
			content: '',
			nonce: '',
			channel_id: _,
			type: y.uaV.DEFAULT,
			sticker_ids: null == P ? void 0 : P.stickerIds,
			poll: null == P ? void 0 : P.poll
		};
	null != M && (G.content = null == M ? void 0 : M.content),
		null != A.Z.getPendingReply(_) &&
			((G.type = y.uaV.REPLY),
			(G.message_reference = P.messageReference),
			(G.allowed_mentions = P.allowedMentions),
			(0, S.A6)(_));
	let [k, B] = (0, N.Z)(G.content);
	k &&
		((G.content = B),
		(G.flags = (0, R.pj)(null !== (t = G.flags) && void 0 !== t ? t : 0, y.iLy.SUPPRESS_NOTIFICATIONS)));
	let F = null !== (n = P.nonce) && void 0 !== n ? n : (0, m.r)(),
		V = (0, I.ZP)({
			channelId: _,
			content: G.content,
			tts: null !== (r = null == M ? void 0 : M.tts) && void 0 !== r && r,
			type: G.type,
			messageReference: G.message_reference,
			flags: G.flags,
			nonce: F,
			poll: (0, g.x9)(P.poll)
		});
	return (
		((G.nonce = F),
		w.on('start', (e) => {
			(d = (0, p.e5)({
				...V,
				id: e.id
			})),
				i.Z.dispatch({
					type: 'UPLOAD_START',
					channelId: _,
					file: e,
					message: d,
					uploader: w
				});
		}),
		w.on('progress', (e) => {
			i.Z.dispatch({
				type: 'UPLOAD_PROGRESS',
				channelId: _,
				file: e
			});
		})),
		w.on('error', (e, t, n, r) => {
			if (
				(i.Z.dispatch({
					type: 'UPLOAD_FAIL',
					channelId: _,
					file: e,
					messageRecord: d
				}),
				(0, T.x)({
					fileItems: e.items,
					failureCode: t,
					errorMessage: null == r ? void 0 : r.msg
				}),
				t === y.evJ.EXPLICIT_CONTENT)
			) {
				s.Z.sendExplicitMediaClydeError(
					_,
					null == n ? void 0 : n.attachments,
					f.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED
				);
				return;
			}
			if (t === y.evJ.AUTOMOD_MESSAGE_BLOCKED) {
				let e = {
						code: t,
						message: null == n ? void 0 : n.message
					},
					r =
						null == d
							? null
							: {
									type: c.$V.SEND,
									message: {
										...d,
										channelId: _
									}
								};
				(0, l.openUploadError)({
					title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
					help: (0, h.uF)(r, e)
				});
				return;
			}
			if (t !== y.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
				if (U)
					x.reject(
						new u.Hx(
							{
								status: t,
								body: null != n ? n : {}
							},
							t
						)
					);
				else {
					var E;
					(0, l.openUploadError)({
						title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
						help:
							null !== (E = null == n ? void 0 : n.message) && void 0 !== E
								? E
								: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
					});
				}
				'' !== G.content && '' === v.Z.getDraft(_, b) && a.Z.saveDraft(_, G.content, b),
					0 === O.Z.getUploadCount(_, b) &&
						o.Z.setUploads({
							channelId: _,
							uploads: L,
							draftType: b
						});
			}
		}),
		w.on('complete', (e, t) => {
			i.Z.dispatch({
				type: 'UPLOAD_COMPLETE',
				channelId: _,
				file: e,
				aborted: w._aborted,
				messageRecord: t
			});
		}),
		await w.uploadFiles(L, G),
		x.resolve(),
		x.promise
	);
}
t.Z = {
	instantBatchUpload: function (e) {
		let { channelId: t, files: n, draftType: r, isThumbnail: i = !1, filesMetadata: a = [] } = e,
			s = Array.from(n).map((e, n) => {
				let r = null != a ? a[n] : {};
				return new d.n(
					{
						file: e,
						platform: _.ow.WEB,
						isThumbnail: i,
						...r
					},
					t
				);
			});
		L({
			channelId: t,
			uploads: s,
			draftType: r
		});
	},
	upload: function e(t) {
		let { channelId: n, file: o, draftType: u, message: c, hasSpoiler: d, filename: _ } = t,
			h = {
				content: '',
				tts: !1,
				hasSpoiler: d,
				filename: _
			};
		if (null != c) {
			(h.content = c.content), (h.tts = c.tts), (h.channel_id = c.channel_id);
			let e = A.Z.getPendingReply(n);
			if (null != e) {
				let t = s.Z.getSendMessageOptionsForReply(e);
				(h.type = y.uaV.REPLY),
					(h.message_reference = t.messageReference),
					(h.allowed_mentions = t.allowedMentions),
					(0, S.A6)(n);
			}
		}
		let p = new E.Z(y.ANM.MESSAGES(n));
		p.on('start', (e) => {
			i.Z.dispatch({
				type: 'UPLOAD_START',
				channelId: n,
				file: e,
				uploader: p
			});
		}),
			p.on('progress', (e) => {
				i.Z.dispatch({
					type: 'UPLOAD_PROGRESS',
					channelId: n,
					file: e
				});
			}),
			p.on('error', (t, d, _) => {
				if (
					(i.Z.dispatch({
						type: 'UPLOAD_FAIL',
						channelId: n,
						file: t
					}),
					(0, T.x)({
						fileItems: t.items,
						failureCode: d
					}),
					d === y.evJ.EXPLICIT_CONTENT)
				) {
					s.Z.sendExplicitMediaClydeError(
						n,
						null == _ ? void 0 : _.attachments,
						f.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED
					);
					return;
				}
				(0, l.openUploadError)({
					title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
					help: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
						onClick: () => {
							(0, r.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
								e({
									channelId: n,
									file: o,
									draftType: u,
									message: c
								});
						}
					})
				}),
					'' !== h.content && '' === v.Z.getDraft(n, u) && a.Z.saveDraft(n, h.content, u);
			}),
			p.on('complete', (e) => {
				i.Z.dispatch({
					type: 'UPLOAD_COMPLETE',
					channelId: n,
					file: e
				});
			}),
			p.upload(o, h);
	},
	uploadFiles: L,
	cancel(e) {
		i.Z.dispatch({
			type: 'UPLOAD_CANCEL_REQUEST',
			file: e
		}),
			null != e.draftContent &&
				null != e.channelId &&
				'' === v.Z.getDraft(e.channelId, v.d.ChannelMessage) &&
				i.Z.dispatch({
					type: 'DRAFT_SAVE',
					channelId: e.channelId,
					draft: e.draftContent,
					draftType: v.d.ChannelMessage
				});
	}
};
