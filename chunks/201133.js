n.d(t, {
	B: function () {
		return h;
	},
	a: function () {
		return f;
	}
}),
	n(411104);
var r = n(570140),
	i = n(493683),
	a = n(957730),
	s = n(222677),
	o = n(995774),
	l = n(314897),
	u = n(592125),
	c = n(703558),
	d = n(62817);
let _ = (e) => {
		let t = d.Z.getFiles(e)[0];
		return null == d.Z.getMessageForFile(t.id)
			? Promise.reject()
			: new Promise((e, n) => {
					let i = (a) => {
						a.file.id === t.id &&
							(r.Z.unsubscribe('UPLOAD_COMPLETE', i),
							r.Z.unsubscribe('UPLOAD_FAIL', i),
							'UPLOAD_COMPLETE' === a.type ? e(a.messageRecord) : n(Error('Upload failed')));
					};
					r.Z.subscribe('UPLOAD_COMPLETE', i), r.Z.subscribe('UPLOAD_FAIL', i);
				});
	},
	E = async function (e, t) {
		var r;
		let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			s = arguments.length > 3 ? arguments[3] : void 0,
			o = arguments.length > 4 ? arguments[4] : void 0,
			d = u.Z.getChannel(t);
		if (((r = l.default.getToken()), a.ZP.parse(d, ''), i));
		else {
			if (null == u.Z.getChannel(t))
				throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
			{
				let r = n(966390).Z;
				(e.description = s),
					await r.uploadFiles({
						channelId: t,
						uploads: [e],
						draftType: c.d.ChannelMessage,
						parsedMessage: o
					});
			}
		}
	},
	f = async (e) => {
		let { file: t, reaction: n, user: r, altText: a, requireConfirmation: l = !1 } = e,
			u = await i.Z.openPrivateChannel(r.id, !1, !1);
		E(t, u, l, a);
		let c = await _(u);
		if (null != c) {
			let e = (0, o.g1)(n);
			await (0, s.rU)(u, c.id, e);
		}
	},
	h = (e) => {
		let { file: t, reply: n, channel: r, altText: i, requireConfirmation: s = !1 } = e,
			o = a.ZP.parse(r, n);
		return E(t, r.id, s, i, o);
	};
