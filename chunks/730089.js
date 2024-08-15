n.d(t, {
	G: function () {
		return m;
	}
});
var s = n(36793),
	a = n(668781),
	i = n(80932),
	r = n(426642),
	l = n(626135),
	o = n(176354),
	c = n(956664),
	d = n(185923),
	u = n(981631),
	_ = n(689938),
	I = n(413135).Buffer;
let E = (e, t, n, s) => (
		l.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
			guild_id: n,
			file_size: t,
			upload_id: s
		}),
		r.d.TOO_BIG
	),
	T = (e, t, n) => {
		l.default.track(u.rMx.EMOJI_FILE_RESIZED, {
			is_animated: !1,
			file_type: e.type.split('/').pop(),
			original_file_size_bytes: e.size,
			resized_file_size_bytes: (0, c.QB)(t),
			resized_file_too_big: n
		});
	},
	m = async (e) => {
		let { data: t, file: n, guildId: c, uploadId: m, roles: N, image: S, hideErrorModal: h } = e,
			g = o.ZP.sanitizeEmojiName(n.name.split('.')[0]);
		if (o.ZP.isFileTooBig(n)) {
			if ('image/gif' === n.type) return E(n.name, n.size, c, m);
			if (null != S) {
				let e;
				t = (0, s.Ae)(S, 128, 128);
				try {
					e = o.ZP.isDataTooBig(t);
				} catch (e) {
					return E(n.name, n.size, c, m);
				}
				if ((T(n, t, e), e)) return E(n.name, n.size, c, m);
			}
		}
		try {
			await (0, i.rS)({
				guildId: c,
				image: t,
				name: g,
				roles: N
			}),
				l.default.track(u.rMx.EMOJI_UPLOAD_COMPLETED, {
					guild_id: c,
					upload_id: m
				});
		} catch (o) {
			let e, n;
			let { body: s, status: i } = o;
			return (
				null != s &&
					(s.code === u.evJ.TOO_MANY_EMOJI
						? ((e = _.Z.Messages.TOO_MANY_EMOJI), (n = r.d.TOO_MANY_EMOJI))
						: s.code === u.evJ.TOO_MANY_ANIMATED_EMOJI
							? ((e = _.Z.Messages.TOO_MANY_ANIMATED_EMOJI), (n = r.d.TOO_MANY_ANIMATED_EMOJI))
							: null != s.image || s.code === u.evJ.INVALID_FILE_ASSET_SIZE
								? (l.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
										guild_id: c,
										file_size: I.byteLength(t),
										upload_id: m
									}),
									(e = _.Z.Messages.EMOJI_TOO_BIG.format({ maxSize: d.xG })),
									(n = r.d.TOO_BIG))
								: (null != s.image || s.code === u.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = r.d.RESIZE_GIF)),
				429 === i && ((e = _.Z.Messages.RATE_LIMITED), (n = r.d.RATE_LIMIT)),
				null != e &&
					!h &&
					a.Z.show({
						title: _.Z.Messages.GENERIC_ERROR_TITLE,
						body: e
					}),
				n
			);
		}
	};
