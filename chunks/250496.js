"use strict";
l.r(t), l.d(t, {
  SupportedEmbedIFrame: function() {
    return r
  },
  default: function() {
    return m
  }
});
var n, r, i = l("735250"),
  s = l("470079"),
  a = l("729594"),
  o = l("351233");

function d(e) {
  let {
    autoMute: t,
    ...l
  } = e, n = s.useRef(null), r = s.useCallback(e => {
    if (e.data["x-tiktok-embed"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type) {
      var l, r, i, s;
      t && (null === (s = n.current) || void 0 === s || null === (i = s.contentWindow) || void 0 === i || i.postMessage({
        type: "mute",
        "x-tiktok-embed": !0
      }, e.origin)), null === (r = n.current) || void 0 === r || null === (l = r.contentWindow) || void 0 === l || l.postMessage({
        type: "play",
        "x-tiktok-embed": !0
      }, e.origin)
    }
  }, [t]);
  return s.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, i.jsx)(c, {
    ref: n,
    ...l
  })
}

function u(e) {
  let {
    src: t,
    autoMute: l,
    ...n
  } = e, r = a.parse(null != t ? t : "", !0);
  r.query = {
    ...r.query,
    autoplay: "1",
    auto_play: "1"
  }, l && (r.query.mute = "1"), r.search = null;
  let s = a.format(r);
  return (0, i.jsx)(c, {
    src: s,
    ...n
  })
}
let c = s.forwardRef(function(e, t) {
  return (0, i.jsx)("iframe", {
    ref: t,
    className: o.embedIframe,
    allow: "autoplay",
    frameBorder: 0,
    scrolling: "no",
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
    ...e
  })
});

function m(e) {
  switch (e.provider) {
    case "YouTube":
      return (0, i.jsx)(u, {
        ...e
      });
    case "TikTok":
      return (0, i.jsx)(d, {
        ...e
      });
    default:
      return (0, i.jsx)(c, {
        ...e
      })
  }
}(n = r || (r = {})).YOUTUBE = "YouTube", n.TIKTOK = "TikTok"