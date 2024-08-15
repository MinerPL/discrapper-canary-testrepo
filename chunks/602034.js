n.d(t, {
	Z: function () {
		return C;
	},
	r: function () {
		return I;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(143927),
	l = n(481060),
	r = n(570140),
	o = n(668781),
	c = n(966390),
	u = n(680287),
	d = n(470623),
	h = n(957730),
	m = n(48854),
	p = n(703558),
	_ = n(403182),
	f = n(928477),
	E = n(981631),
	g = n(689938);
function C(e) {
	let {
			parentChannel: t,
			parentMessageId: n,
			threadSettings: i,
			privateThreadMode: s,
			location: l,
			onThreadCreated: r,
			useDefaultThreadName: o
		} = e,
		u = a.useCallback((e, t, n, i) => {
			c.Z.uploadFiles({
				channelId: e.id,
				uploads: t,
				draftType: p.d.FirstThreadMessage,
				options: { stickerIds: i },
				parsedMessage: h.ZP.parse(e, n)
			});
		}, []);
	return (0, f.JA)({
		parentChannel: t,
		parentMessageId: n,
		threadSettings: i,
		privateThreadMode: s,
		location: l,
		onThreadCreated: r,
		useDefaultThreadName: o,
		uploadHandler: u
	});
}
function I(e) {
	let { parentChannel: t } = e,
		{ name: a, appliedTags: c } = (0, d.xH)((e) => {
			let { name: t, appliedTags: n } = e;
			return {
				name: t,
				appliedTags: n
			};
		}, s.Z);
	return (0, f.Wj)({
		parentChannel: t,
		name: a,
		appliedTags: c,
		upload: function (e, a, s) {
			return new Promise((c, d) => {
				let h = new u.Z(e);
				h.on('error', (e, a, s) => {
					if (a === E.evJ.EXPLICIT_CONTENT) {
						let e = (0, m.r)();
						null != s &&
							null != s.attachments &&
							s.attachments.length > 0 &&
							(r.Z.dispatch({
								type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
								messageId: e,
								channelId: t.id,
								attachments: s.attachments
							}),
							(0, l.openModalLazy)(async () => {
								let { default: a } = await n.e('57539').then(n.bind(n, 924188));
								return (n) =>
									(0, i.jsx)(a, {
										...n,
										channelId: t.id,
										messageId: e
									});
							}));
					} else if (a === E.evJ.ENTITY_TOO_LARGE) {
						let e = (0, _.dg)(t.getGuildId());
						o.Z.show({
							title: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
							body: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, _.Ng)(e) })
						});
					} else
						a === E.evJ.TOO_MANY_ATTACHMENTS &&
							o.Z.show({
								title: g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
								body: g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({ limit: E.dN1 })
							});
					d({ body: s });
				}),
					h.on('complete', (e, t) => {
						c({ body: t });
					}),
					h.uploadFiles(s, a, { addFilesTo: 'message.attachments' });
			});
		}
	});
}
