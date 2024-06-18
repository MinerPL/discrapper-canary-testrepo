"use strict";
n.d(t, {
  CN: function() {
    return s
  },
  N7: function() {
    return d
  },
  ZW: function() {
    return _
  },
  fj: function() {
    return o
  },
  qP: function() {
    return i
  },
  xG: function() {
    return a
  }
});

function i(e) {
  return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
}

function r(e) {
  return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null
}

function s(e, t) {
  return null == e.content_scan_version || e.content_scan_version < (null != t ? t : 1)
}

function o(e, t) {
  var n, i, s, o, a, l, u;
  let _ = r(e);
  return !((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (i = e.video) || void 0 === i ? void 0 : i.height) === 0 || (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.width) === 0 && (null === (o = e.thumbnail) || void 0 === o ? void 0 : o.height) === 0 || (null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (l = e.image) || void 0 === l ? void 0 : l.height) === 0 || "images" in e && (null === (u = e.images) || void 0 === u ? void 0 : u.some(e => 0 === e.width && 0 === e.height))) && (null == _ || _ < (null != t ? t : 1))
}

function a(e) {
  let {
    attachmentIds: t,
    embedIds: n
  } = function(e) {
    var t, n, i, r, a, l, u, _;
    let d = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
      c = null !== (l = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0;
    if (0 === d && 0 === c) return {
      attachmentIds: [],
      embedIds: []
    };
    let E = null !== (u = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(s)) && void 0 !== u ? u : [],
      I = null !== (_ = null == e ? void 0 : null === (r = e.embeds) || void 0 === r ? void 0 : r.filter(o)) && void 0 !== _ ? _ : [];
    return {
      attachmentIds: E.map(e => e.id).filter(Boolean),
      embedIds: I.map((e, t) => "embed_".concat(t)).filter(Boolean)
    }
  }(e);
  return t.length > 0 || n.length > 0
}

function l(e) {
  return null == e.content_scan_version
}

function u(e) {
  var t, n, i, s, o, a, l;
  let u = r(e);
  return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0 || (null === (o = e.image) || void 0 === o ? void 0 : o.width) === 0 && (null === (a = e.image) || void 0 === a ? void 0 : a.height) === 0 || "images" in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some(e => 0 === e.width && 0 === e.height))) && null == u
}

function _(e) {
  var t, n, i, r, s, o, a, _;
  let d = null !== (s = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0,
    c = null !== (o = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0;
  if (0 === d && 0 === c) return {
    attachmentIds: [],
    embedIds: []
  };
  let E = null !== (a = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(l)) && void 0 !== a ? a : [],
    I = null !== (_ = null == e ? void 0 : null === (r = e.embeds) || void 0 === r ? void 0 : r.filter(u)) && void 0 !== _ ? _ : [];
  return {
    attachmentIds: E.map(e => e.id).filter(Boolean),
    embedIds: I.map((e, t) => "embed_".concat(t)).filter(Boolean)
  }
}

function d(e) {
  let {
    attachmentIds: t,
    embedIds: n
  } = _(e);
  return t.length > 0 || n.length > 0
}