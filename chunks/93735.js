n.d(t, {
    CN: function () {
        return s;
    },
    N7: function () {
        return _;
    },
    OR: function () {
        return i;
    },
    ZW: function () {
        return d;
    },
    fj: function () {
        return o;
    },
    xG: function () {
        return l;
    }
}),
    n(47120),
    n(774863);
function r(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function i(e) {
    if (null == e) return !1;
    let t = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return r(e) || (null != t && (null == t ? void 0 : t.some((e) => r(e.message))));
}
function a(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function s(e, t) {
    return null == e.content_scan_version || e.content_scan_version < (null != t ? t : 1);
}
function o(e, t) {
    var n, r, i, s, o, l, u;
    if (((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0) || ((null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0) || ((null === (o = e.image) || void 0 === o ? void 0 : o.width) === 0 && (null === (l = e.image) || void 0 === l ? void 0 : l.height) === 0) || ('images' in e && (null === (u = e.images) || void 0 === u ? void 0 : u.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let c = a(e);
    return null == c || c < (null != t ? t : 1);
}
function l(e) {
    var t, n, r, i;
    if ((null === (t = e.attachments) || void 0 === t ? void 0 : t.some(s)) || (null === (n = e.embeds) || void 0 === n ? void 0 : n.some(o))) return !0;
    let a = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null == a || 0 === a.length) return !1;
    for (let e of a) if ((null === (r = e.message.attachments) || void 0 === r ? void 0 : r.some(s)) || (null === (i = e.message.embeds) || void 0 === i ? void 0 : i.some(o))) return !0;
    return !1;
}
function u(e) {
    return null == e.content_scan_version;
}
function c(e) {
    var t, n, r, i, s, o, l;
    let u = a(e);
    return !(((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0) || ((null === (r = e.thumbnail) || void 0 === r ? void 0 : r.width) === 0 && (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.height) === 0) || ((null === (s = e.image) || void 0 === s ? void 0 : s.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0) || ('images' in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some((e) => 0 === e.width && 0 === e.height)))) && null == u;
}
function d(e) {
    var t, n, r, i, a, s, o, l;
    let d = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
        _ = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
    if (0 === d && 0 === _)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let E = null !== (o = null == e ? void 0 : null === (r = e.attachments) || void 0 === r ? void 0 : r.filter(u)) && void 0 !== o ? o : [],
        f = null !== (l = null == e ? void 0 : null === (i = e.embeds) || void 0 === i ? void 0 : i.filter(c)) && void 0 !== l ? l : [];
    return {
        attachmentIds: E.map((e) => e.id).filter(Boolean),
        embedIds: f.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
    };
}
function _(e) {
    let { attachmentIds: t, embedIds: n } = d(e);
    return t.length > 0 || n.length > 0;
}
