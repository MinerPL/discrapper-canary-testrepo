n.d(t, {
  Cb: function() {
return r;
  },
  VY: function() {
return l;
  },
  ym: function() {
return s;
  }
}), n(789020);
var r, i, a = n(630388),
  o = n(981631);
(i = r || (r = {}))[i.EXPLICIT = 1] = 'EXPLICIT';

function s(e) {
  var t;
  return {
url: e.url,
proxyUrl: e.proxy_url,
height: e.height,
width: e.width,
placeholder: e.placeholder,
placeholderVersion: e.placeholder_version,
contentType: e.content_type,
contentScanMetadata: null != e.content_scan_metadata ? {
  version: (t = e.content_scan_metadata).version,
  contentScanFlags: t.content_scan_flags
} : void 0
  };
}

function l(e) {
  var t, n, r, i;
  let s = 0;
  return (0, a.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, o.J0y.CONTAINS_EXPLICIT_MEDIA) && (s += 1), {
url: e.url,
proxyUrl: e.proxy_url,
height: null !== (n = e.height) && void 0 !== n ? n : 0,
width: null !== (r = e.width) && void 0 !== r ? r : 0,
contentType: null !== (i = e.content_type) && void 0 !== i ? i : 'unknown/unknown',
placeholder: e.placeholder,
placeholderVersion: e.placeholder_version,
contentScanMetadata: null == e.content_scan_version ? void 0 : {
  version: e.content_scan_version,
  contentScanFlags: s
}
  };
}