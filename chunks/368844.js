n.d(t, {
  Ah: function() {
return r;
  },
  CB: function() {
return R;
  },
  aU: function() {
return A;
  },
  cp: function() {
return C;
  },
  eL: function() {
return v;
  },
  vg: function() {
return O;
  },
  zy: function() {
return N;
  }
}), n(789020), n(47120), n(724458);
var r, i, a = n(470079),
  o = n(406432),
  s = n(144140),
  l = n(695346),
  u = n(592125),
  c = n(375954),
  d = n(594174),
  _ = n(630388),
  E = n(823379),
  f = n(709054),
  h = n(591759),
  p = n(981631);

function m(e) {
  if (null == e)
return !1;
  let {
filename: t,
height: n,
width: r
  } = e;
  return (0, o.CO)(t) && null != n && n > 0 && null != r && r > 0;
}

function I(e) {
  return null != e && null != e && (0, o.NU)(e.filename) && null != e.proxy_url;
}

function T(e) {
  return m(e) || I(e);
}
(i = r || (r = {})).EMBED = 'embed', i.ATTACHMENT = 'attachment';

function g(e) {
  return function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.x4.getSetting();
if (!t)
  return [];
let n = null == e ? void 0 : e.attachments;
return null == e || null == n ? [] : n.filter(T).map((e, t) => {
  let {
    proxy_url: n,
    url: r,
    description: i,
    spoiler: a,
    flags: s,
    width: l,
    height: u,
    filename: c,
    content_scan_version: d
  } = e;
  if (null == l || null == u)
    return null;
  let E = (0, o.NU)(c),
    f = null != e.flags && (0, _.yE)(e.flags, p.J0y.IS_THUMBNAIL),
    m = null != n ? n : r;
  if (E) {
    let e = h.Z.toURLSafe(n);
    if (null == e)
      return null;
    e.searchParams.append('format', 'jpeg'), m = e.toString();
  }
  return {
    src: m,
    width: l,
    height: u,
    spoiler: null != a && a,
    flags: s,
    contentScanVersion: d,
    alt: i,
    isVideo: E,
    isThumbnail: f,
    type: 'attachment',
    attachmentId: e.id,
    mediaIndex: t
  };
}).filter(E.lm);
  }(e, l.x4.useSetting());
}

function S(e, t) {
  let n = l.RS.useSetting(),
r = l.NA.useSetting();
  if (null == e)
return [];
  let i = e.embeds;
  return n && r && null != i ? i.map((e, n) => {
var r;
let i = null !== (r = e.image) && void 0 !== r ? r : e.thumbnail;
if (null == i && null != e.images && (i = e.images[0]), null != i && null != i.url) {
  let {
    height: r,
    proxyURL: a,
    url: s,
    width: l
  } = i, u = null != a && (0, o.cb)(a);
  return {
    src: null != a && '' !== a ? a : s,
    height: r,
    width: l,
    spoiler: t,
    flags: e.flags,
    contentScanVersion: e.contentScanVersion,
    isVideo: u,
    type: 'embed',
    mediaIndex: n
  };
}
  }).filter(E.lm) : [];
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
r = N(e, n);
  return a.useMemo(() => {
if (null == t)
  return [];
if (!t.isMediaChannel())
  return r;
{
  let e = r.find(e => e.isThumbnail);
  return null != e ? [e] : r;
}
  }, [
t,
r
  ]);
}

function N(e, t) {
  let n = g(e);
  return [
...n,
...S(e, t)
  ];
}

function v(e, t) {
  var n, r;
  let i = g(e),
a = S(e, t);
  return null !== (r = null !== (n = i[0]) && void 0 !== n ? n : a[0]) && void 0 !== r ? r : null;
}

function O(e, t) {
  let n = g(e),
r = S(e, t);
  return null == n[0] && null != r[0];
}

function R(e, t) {
  var n;
  let r = u.Z.getChannel(t);
  if (null == r)
return !1;
  let i = c.Z.getMessage(r.id, f.default.castChannelIdAsMessageId(r.id));
  return null != i && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && r.isForumPost() && r.ownerId === (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === s.Z.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find(e => m(e) || I(e)));
}

function C(e) {
  return e.reduce((e, t) => ({
containsVideo: e.containsVideo || t.isVideo,
containsGif: e.containsGif || (0, o.d$)(t.src)
  }), {
containsVideo: !1,
containsGif: !1
  });
}