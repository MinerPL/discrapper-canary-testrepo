n(47120), n(653041);
var r,
	i,
	a,
	s,
	o = n(392711),
	l = n.n(o),
	u = n(442837),
	c = n(570140),
	d = n(668781),
	_ = n(141795),
	E = n(596956),
	f = n(703558),
	h = n(981631),
	p = n(689938);
let m = new Map(),
	I = [];
function T(e, t) {
	var n, r;
	return null !== (r = null === (n = g(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : I;
}
function g(e) {
	var t;
	return null !== (t = m.get(e)) && void 0 !== t ? t : new Map();
}
function S(e, t, n) {
	let r = g(e);
	r.set(t, n), m.set(e, r);
}
class A extends (r = u.ZP.Store) {
	getFirstUpload(e, t) {
		let n = T(e, t);
		return n.length > 0 ? n[0] : null;
	}
	hasAdditionalUploads(e, t) {
		var n;
		return (null !== (n = T(e, t).length) && void 0 !== n ? n : 0) > 1;
	}
	getUploads(e, t) {
		return T(e, t);
	}
	getUploadCount(e, t) {
		var n;
		return null !== (n = T(e, t).length) && void 0 !== n ? n : 0;
	}
	getUpload(e, t, n) {
		return T(e, n).find((e) => e.id === t);
	}
	findUpload(e, t, n) {
		return T(e, t).find(n);
	}
}
(s = 'UploadAttachmentStore'),
	(a = 'displayName') in (i = A)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new A(c.Z, {
		UPLOAD_ATTACHMENT_POP_FILE: function (e) {
			let { channelId: t } = e,
				n = [...T(t, f.d.ChannelMessage)];
			n.shift(), S(t, f.d.ChannelMessage, n);
		},
		UPLOAD_ATTACHMENT_ADD_FILES: (e) => {
			let { files: t, channelId: n, showLargeMessageDialog: r, draftType: i } = e,
				a = [...T(n, i)];
			if (a.length + t.length > h.dN1 && i !== f.d.SlashCommand && i !== f.d.ApplicationLauncherCommand) {
				d.Z.show({
					title: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
					body: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({ limit: h.dN1 })
				});
				return;
			}
			l().forEach(t, (e) => {
				let t = new _.n(e, n, r, a.length);
				t.upload(), a.push(t);
			}),
				S(n, i, a);
		},
		UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
			let { channelId: t, id: n, filename: r, description: i, spoiler: a, thumbnail: s, draftType: o } = e,
				l = [...T(t, o)].map((e) => (e.id === n && (void 0 !== r && (e.filename = r), void 0 !== a && (e.spoiler = a), void 0 !== i && (e.description = i), void 0 !== s && (e.isThumbnail = s)), e));
			S(t, o, l);
		},
		UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
			let { channelId: t, id: n, draftType: r } = e,
				i = [...T(t, r)],
				a = i.findIndex((e) =>
					(0, E.T)(
						{
							uri: n,
							filename: n
						},
						e
					)
				);
			a > -1 && (i.splice(a, 1)[0].cancel(), S(t, r, i));
		},
		UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
			let { channelId: t, attachmentIds: n, draftType: r } = e,
				i = [...T(t, r)];
			n.forEach((e) => {
				let t = i.findIndex((t) => e === t.id);
				t > -1 && i.splice(t, 1)[0].cancel();
			}),
				S(t, r, i);
		},
		UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
			let { channelId: t, draftType: n } = e;
			S(t, n, []);
		},
		UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
			let { channelId: t, uploads: n, draftType: r } = e;
			S(t, r, n);
		},
		UPLOAD_ATTACHMENT_SET_FILE: function (e) {
			let { channelId: t, id: n, file: r, draftType: i } = e,
				a = [...T(t, i)].filter((e) => e.id !== n),
				s = new _.n(r, t);
			s.upload(), a.push(s), S(t, i, a);
		},
		SIDEBAR_CLOSE: function (e) {
			let { baseChannelId: t } = e;
			S(t, f.d.FirstThreadMessage, []);
		}
	}));
