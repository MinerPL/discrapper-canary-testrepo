"use strict";
n.d(t, {
  Ah: function() {
    return i
  },
  CB: function() {
    return g
  },
  aU: function() {
    return O
  },
  cp: function() {
    return L
  },
  eL: function() {
    return C
  },
  vg: function() {
    return p
  },
  zy: function() {
    return R
  }
}), n(789020), n(47120), n(724458);
var i, r, s = n(470079),
  o = n(118139),
  a = n(144140),
  l = n(695346),
  u = n(592125),
  _ = n(375954),
  d = n(594174),
  c = n(630388),
  E = n(823379),
  I = n(709054),
  T = n(591759),
  h = n(981631);

function S(e) {
  if (null == e) return !1;
  let {
    filename: t,
    height: n,
    width: i
  } = e;
  return (0, o.CO)(t) && null != n && n > 0 && null != i && i > 0
}

function f(e) {
  return null != e && null != e && (0, o.NU)(e.filename) && null != e.proxy_url
}

function N(e) {
  return S(e) || f(e)
}(r = i || (i = {})).EMBED = "embed", r.ATTACHMENT = "attachment";

function A(e) {
  return function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.x4.getSetting();
    if (!t) return [];
    let n = null == e ? void 0 : e.attachments;
    return null == e || null == n ? [] : n.filter(N).map(e => {
      let {
        proxy_url: t,
        url: n,
        description: i,
        spoiler: r,
        flags: s,
        width: a,
        height: l,
        filename: u,
        content_scan_version: _
      } = e;
      if (null == a || null == l) return null;
      let d = (0, o.NU)(u),
        E = null != e.flags && (0, c.yE)(e.flags, h.J0y.IS_THUMBNAIL),
        I = null != t ? t : n;
      if (d) {
        let e = T.Z.toURLSafe(t);
        if (null == e) return null;
        e.searchParams.append("format", "jpeg"), I = e.toString()
      }
      return {
        src: I,
        width: a,
        height: l,
        spoiler: null != r && r,
        flags: s,
        contentScanVersion: _,
        alt: i,
        isVideo: d,
        isThumbnail: E,
        type: "attachment"
      }
    }).filter(E.lm)
  }(e, l.x4.useSetting())
}

function m(e, t) {
  let n = l.RS.useSetting(),
    i = l.NA.useSetting();
  if (null == e) return [];
  let r = e.embeds;
  return n && i && null != r ? r.map(e => {
    var n;
    let i = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
    if (null == i && null != e.images && (i = e.images[0]), null != i && null != i.url) {
      let {
        height: n,
        proxyURL: r,
        url: s,
        width: a
      } = i, l = null != r && (0, o.cb)(r);
      return {
        src: null != r && "" !== r ? r : s,
        height: n,
        width: a,
        spoiler: t,
        flags: e.flags,
        contentScanVersion: e.contentScanVersion,
        isVideo: l,
        type: "embed"
      }
    }
  }).filter(E.lm) : []
}

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = R(e, n);
  return s.useMemo(() => {
    if (null == t) return [];
    if (!t.isMediaChannel()) return i;
    {
      let e = i.find(e => e.isThumbnail);
      return null != e ? [e] : i
    }
  }, [t, i])
}

function R(e, t) {
  let n = A(e);
  return [...n, ...m(e, t)]
}

function C(e, t) {
  var n, i;
  let r = A(e),
    s = m(e, t);
  return null !== (i = null !== (n = r[0]) && void 0 !== n ? n : s[0]) && void 0 !== i ? i : null
}

function p(e, t) {
  let n = A(e),
    i = m(e, t);
  return null == n[0] && null != i[0]
}

function g(e, t) {
  var n;
  let i = u.Z.getChannel(t);
  if (null == i) return !1;
  let r = _.Z.getMessage(i.id, I.default.castChannelIdAsMessageId(i.id));
  return null != r && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && i.isForumPost() && i.ownerId === (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === a.Z.getCount(i.id) && (0 === r.attachments.length || null == r.attachments.find(e => S(e) || f(e)))
}

function L(e) {
  return e.reduce((e, t) => ({
    containsVideo: e.containsVideo || t.isVideo,
    containsGif: e.containsGif || (0, o.d$)(t.src)
  }), {
    containsVideo: !1,
    containsGif: !1
  })
}