"use strict";
n.d(t, {
  dY: function() {
    return A
  },
  kC: function() {
    return f
  },
  l3: function() {
    return m
  },
  o3: function() {
    return N
  },
  vP: function() {
    return O
  }
}), n(789020), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(913527),
  o = n.n(s),
  a = n(866442),
  l = n(709054),
  u = n(981631),
  _ = n(817384);
let d = /sketchfab/i,
  c = /^https:\/\/sketchfab\.com/i,
  E = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
  I = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
  T = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;

function h(e) {
  let {
    width: t,
    height: n
  } = e;
  return t > 0 && n > 0
}

function S(e) {
  let {
    url: t,
    proxy_url: n,
    width: i,
    height: r,
    placeholder: s,
    placeholder_version: o
  } = e;
  return {
    url: t,
    proxyURL: n,
    width: i,
    height: r,
    placeholder: s,
    placeholderVersion: o
  }
}

function f(e, t, n) {
  let i = {
    id: r().uniqueId("embed_"),
    url: n.url,
    type: n.type,
    rawTitle: n.title,
    rawDescription: n.description,
    referenceId: n.reference_id,
    flags: n.flags,
    contentScanVersion: n.content_scan_version
  };
  if (null != n.footer && (i.footer = {
      text: n.footer.text,
      iconURL: n.footer.icon_url,
      iconProxyURL: n.footer.proxy_icon_url
    }), null != n.author && null != n.author.name && (i.author = {
      name: n.author.name,
      url: n.author.url,
      iconURL: n.author.icon_url,
      iconProxyURL: n.author.proxy_icon_url
    }), null != n.provider && null != n.provider.name && (i.provider = {
      name: n.provider.name,
      url: n.provider.url
    }), null != n.timestamp && (i.timestamp = o()(new Date(n.timestamp))), null != n.color && (i.color = (0, a.ho)(n.color, !0)), null != n.thumbnail && h(n.thumbnail)) switch (i.type) {
    case u.hBH.ARTICLE:
    case u.hBH.IMAGE:
      i.image = S(n.thumbnail);
      break;
    default:
      i.thumbnail = S(n.thumbnail)
  }
  if (null != n.image && h(n.image) && (i.image = S(n.image)), null != n.video && (null == i.thumbnail && null != n.video.proxy_url && h(n.video) && (i.thumbnail = {
      width: n.video.width,
      height: n.video.height,
      url: function(e, t) {
        let n = new URL(e);
        return Object.keys(t).forEach(e => {
          n.searchParams.set(e, t[e])
        }), n.toString()
      }(n.video.proxy_url, {
        format: "jpeg"
      })
    }), null != i.thumbnail && h(n.video) && function(e, t, n) {
      if (null != t && d.test(t.name) || c.test(n.url)) return !1;
      let i = null != n.proxy_url || /^https:/i.test(n.url);
      return null != e && 1492472454139 > l.default.extractTimestamp(e) && (i = i && null != t && E.test(t.name)), i
    }(t, n.provider, n.video) && (i.video = S(n.video))), _.k.has(i.type)) {
    var s;
    let e = null !== (s = n.fields) && void 0 !== s ? s : [];
    i.fields = e.map(e => {
      let {
        name: t,
        value: n,
        inline: i
      } = e;
      return {
        rawName: t,
        rawValue: n,
        inline: i
      }
    })
  } else i.fields = [];
  return i
}

function N(e) {
  let t = new Map,
    n = [];
  return e.forEach(e => {
    if (null == e.url) {
      n.push(e);
      return
    }
    let i = t.get(e.url);
    if (null == i) {
      n.push(e), t.set(e.url, e);
      return
    }
    if (null != e.image) null == i.images && (i.images = [], null != i.image && i.images.push(i.image)), i.images.push(e.image)
  }), n
}

function A(e) {
  let {
    image: t,
    video: n,
    type: i,
    author: r,
    rawTitle: s
  } = e;
  return (null != t || null != n) && (i === u.hBH.GIFV || i !== u.hBH.RICH && null == r && null == s)
}

function m(e) {
  return e.type === u.hBH.ARTICLE && null != e.url && (T.test(e.url) || I.test(e.url))
}

function O(e, t, n) {
  var i;
  return null != t && null != n ? {
    maxMediaWidth: t,
    maxMediaHeight: n
  } : (null === (i = e.provider) || void 0 === i ? void 0 : i.name) === "TikTok" ? {
    maxMediaWidth: 400,
    maxMediaHeight: 450
  } : {
    maxMediaWidth: 400,
    maxMediaHeight: 300
  }
}