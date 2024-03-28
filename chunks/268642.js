"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var n = l("735250");
l("470079");
var r = l("803997"),
  i = l.n(r),
  s = l("729594"),
  a = l("616922"),
  o = l("351233");

function d(e) {
  let {
    className: t,
    embed: {
      url: l
    }
  } = e;
  if (null == l) return null;
  let r = null,
    d = null;
  try {
    let e = s.parse(l, !0);
    r = e.host, d = e.pathname
  } catch (e) {
    return null
  }
  if ("open.spotify.com" !== r || null == d) return null;
  let u = d.split("/"),
    c = null != u[1] ? u[1].toLowerCase() : null,
    m = null != u[3] ? u[3].toLowerCase() : null,
    h = u[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != c ? c : "") || "user" === c && "playlist" !== m) return null;
  "user" === c && "playlist" === m && null != h && (d = "/playlist/".concat(h));
  let p = 352;
  return "track" === c ? p = 80 : ("episode" === c || "show" === c) && (p = 232), (0, n.jsx)("iframe", {
    className: i()(o.embedSpotify, t),
    src: a.SpotifyEndpoints.EMBED(d),
    style: {
      width: 400,
      height: p
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}