"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("404118"),
  s = n("689226"),
  u = n("467475"),
  r = n("599110"),
  d = n("773336"),
  o = n("286235"),
  c = n("253981"),
  f = n("50885"),
  E = n("146574"),
  m = n("49111"),
  M = n("782340");
let g = "https://media.discordapp.net",
  p = /^.*\.discordapp\.net$/,
  S = "cdn.discordapp.com",
  I = "".concat(g, "/stickers"),
  v = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
  h = new Set(["jpg", "jpeg", "png"]),
  A = e => {
    var t, n, a, i;
    return null === (i = c.default.toURLSafe(e)) || void 0 === i ? void 0 : null === (a = i.pathname) || void 0 === a ? void 0 : null === (n = a.split(".")) || void 0 === n ? void 0 : null === (t = n.pop()) || void 0 === t ? void 0 : t.toLowerCase()
  };

function _(e, t) {
  l.default.show({
    title: M.default.Messages.ERROR,
    body: e
  }), o.default.captureException(t)
}

function T(e, t, n) {
  let l = (0, u.default)(null == t ? void 0 : t.getChannelId());
  if (l || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !d.isPlatformEmbedded || null == e || ! function(e) {
      let t = c.default.toURLSafe(e);
      if (null == t) return !1;
      let n = A(e);
      return (p.test(t.hostname) || t.host === S) && !e.startsWith(I) && !(0, s.isRoleIconAssetUrl)(e) && null != n && v.has(n)
    }(e)) return null;
  let o = function(e) {
      let t = c.default.toURLSafe(e);
      return null == t || t.host === S ? e : t.origin === g ? (t.host = S, t.searchParams.delete("size"), t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.delete("quality"), t.searchParams.delete("format"), t.toString()) : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
    }(e),
    T = async () => {
      try {
        await f.default.saveImage(o), r.default.track(m.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        r.default.track(m.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        }), _(M.default.Messages.ERROR_SAVING_IMAGE, e)
      }
    }, C = async () => {
      try {
        await f.default.copyImage(o), r.default.track(m.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        _(M.default.Messages.ERROR_COPYING_IMAGE, e), r.default.track(m.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        })
      }
    };
  return [f.default.canCopyImage() && function(e) {
    let t = A(e);
    return null != t && h.has(t)
  }(e) ? (0, a.jsx)(i.MenuItem, {
    id: "copy-image",
    label: M.default.Messages.COPY_IMAGE_MENU_ITEM,
    action: C
  }, "copy-image") : null, (0, a.jsx)(i.MenuItem, {
    id: "save-image",
    label: M.default.Messages.SAVE_IMAGE_MENU_ITEM,
    action: T
  }, "save-image")]
}