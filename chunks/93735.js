n.d(t, {
	CN: function () {
		return a;
	},
	N7: function () {
		return d;
	},
	ZW: function () {
		return c;
	},
	fj: function () {
		return s;
	},
	qP: function () {
		return r;
	},
	xG: function () {
		return o;
	}
}),
	n(653041),
	n(47120);
function r(e) {
	return null != e && ((null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0));
}
function i(e) {
	return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function a(e, t) {
	return null == e.content_scan_version || e.content_scan_version < (null != t ? t : 1);
}
function s(e, t) {
	var n, r, a, s, o, l, u;
	if (((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0) || ((null === (a = e.thumbnail) || void 0 === a ? void 0 : a.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0) || ((null === (o = e.image) || void 0 === o ? void 0 : o.width) === 0 && (null === (l = e.image) || void 0 === l ? void 0 : l.height) === 0) || ('images' in e && (null === (u = e.images) || void 0 === u ? void 0 : u.some((e) => 0 === e.width && 0 === e.height)))) return !1;
	let c = i(e);
	return null == c || c < (null != t ? t : 1);
}
function o(e) {
	var t, n, r, i;
	let o = null !== (t = e.attachments) && void 0 !== t ? t : [],
		l = null !== (n = e.embeds) && void 0 !== n ? n : [],
		u = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
	if (null != u && u.length > 0)
		for (let e of u) {
			let t = null !== (r = e.message.attachments) && void 0 !== r ? r : [],
				n = null !== (i = e.message.embeds) && void 0 !== i ? i : [];
			o.push(...t), l.push(...n);
		}
	return o.some(a) || l.some(s);
}
function l(e) {
	return null == e.content_scan_version;
}
function u(e) {
	var t, n, r, a, s, o, l;
	let u = i(e);
	return !(((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0) || ((null === (r = e.thumbnail) || void 0 === r ? void 0 : r.width) === 0 && (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.height) === 0) || ((null === (s = e.image) || void 0 === s ? void 0 : s.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0) || ('images' in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some((e) => 0 === e.width && 0 === e.height)))) && null == u;
}
function c(e) {
	var t, n, r, i, a, s, o, c;
	let d = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
		_ = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
	if (0 === d && 0 === _)
		return {
			attachmentIds: [],
			embedIds: []
		};
	let E = null !== (o = null == e ? void 0 : null === (r = e.attachments) || void 0 === r ? void 0 : r.filter(l)) && void 0 !== o ? o : [],
		f = null !== (c = null == e ? void 0 : null === (i = e.embeds) || void 0 === i ? void 0 : i.filter(u)) && void 0 !== c ? c : [];
	return {
		attachmentIds: E.map((e) => e.id).filter(Boolean),
		embedIds: f.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
	};
}
function d(e) {
	let { attachmentIds: t, embedIds: n } = c(e);
	return t.length > 0 || n.length > 0;
}
