l.d(t, {
	G: function () {
		return M;
	},
	d: function () {
		return x;
	}
}),
	l(653041),
	l(47120),
	l(411104);
var i = l(475179),
	n = l(166459),
	s = l(966390),
	a = l(531643),
	o = l(476326),
	r = l(367907),
	d = l(358221),
	u = l(117530),
	c = l(594174),
	_ = l(626135),
	m = l(403182),
	f = l(74538),
	g = l(979956),
	h = l(981631),
	E = l(959517),
	A = l(474936),
	p = l(689938);
function M(e, t) {
	let l = c.default.getCurrentUser(),
		i = e.getGuildId(),
		n = m.dg(i),
		s = [],
		o = 0,
		d = 0,
		u = 0,
		_ = [];
	for (let e of t)
		(u += 1),
			(o += e.size),
			s.push(e.size),
			e.size > d && (d = e.size),
			null != e.type ? _.push(e.type) : _.push('unknown');
	if (d > n) {
		(0, r.yw)(h.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
			channel_id: e.id,
			guild_id: i,
			user_individual_file_size_limit: n,
			pre_compression_file_sizes: s,
			pre_compression_aggregate_file_size: o,
			num_attachments: u,
			error_type: E.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
			attachment_mimetypes: _
		}),
			(0, a.openUploadError)({
				title: p.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
				help: (0, g.BK)(l, i),
				showPremiumUpsell: !(0, f.M5)(l, A.p9.TIER_2),
				fileSize: d
			});
		return;
	}
	(0, a.openUploadError)({
		title: p.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
		help: p.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({ maxSize: m.Ng(m.OC()) })
	});
}
function x(e, t, l) {
	let {
		filesMetadata: r,
		requireConfirm: c = !0,
		showLargeMessageDialog: m = !1,
		isThumbnail: f = !1
	} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
	if (e.length < 1) return;
	if (null != r && r.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
	let E = t.getGuildId();
	if ((0, g.Bf)(e, E)) {
		M(t, e);
		return;
	}
	if (u.Z.getUploadCount(t.id, l) + e.length > h.dN1) {
		(0, a.openUploadError)({
			title: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
			help: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({ limit: h.dN1 })
		}),
			_.default.track(h.rMx.UPLOAD_FILE_LIMIT_ERROR, {
				existing_count: u.Z.getUploadCount(t.id, l),
				new_count: e.length
			});
		return;
	}
	if (
		((t.type === h.d4z.GUILD_VOICE || t.type === h.d4z.GUILD_STAGE_VOICE) &&
			!d.Z.getChatOpen(t.id) &&
			i.Z.updateChatOpen(t.id, !0),
		c)
	) {
		let i = Array.from(e).map((e, t) => ({
			file: e,
			platform: o.ow.WEB,
			isThumbnail: f,
			...(null == r ? void 0 : r[t])
		}));
		n.Z.addFiles({
			files: i,
			channelId: t.id,
			showLargeMessageDialog: m,
			draftType: l
		});
	} else
		s.Z.instantBatchUpload({
			channelId: t.id,
			files: e,
			draftType: l,
			isThumbnail: f,
			filesMetadata: r
		});
}
