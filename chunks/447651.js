"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("404118"),
  u = n("689226"),
  o = n("467475"),
  s = n("599110"),
  c = n("773336"),
  r = n("286235"),
  d = n("50885"),
  f = n("146574"),
  E = n("49111"),
  _ = n("782340");
let g = "https://media.discordapp.net",
  p = /^.*\.discordapp\.net$/,
  v = "https://cdn.discordapp.com",
  h = "".concat(g, "/stickers"),
  M = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
  C = new Set(["jpg", "jpeg", "png"]),
  I = e => {
    var t;
    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
  };

function N(e, t) {
  i.default.show({
    title: _.default.Messages.ERROR,
    body: e
  }), r.default.captureException(t)
}

function A(e, t, n) {
  let i = (0, o.default)(null == t ? void 0 : t.getChannelId());
  if (i || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !c.isPlatformEmbedded || null == e || ! function(e) {
      let t = new URL(e),
        n = I(e);
      return (p.test(t.hostname) || t.origin === v) && !e.startsWith(h) && !(0, u.isRoleIconAssetUrl)(e) && null != n && M.has(n)
    }(e)) return null;
  let r = function(e) {
      let t = new URL(e);
      return t.origin === v ? e : t.origin === g ? v + t.pathname : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
    }(e),
    A = async () => {
      try {
        await d.default.saveImage(r), s.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        s.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        }), N(_.default.Messages.ERROR_SAVING_IMAGE, e)
      }
    }, m = async () => {
      try {
        await d.default.copyImage(r), s.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        N(_.default.Messages.ERROR_COPYING_IMAGE, e), s.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      }
    };
  return [d.default.canCopyImage() && function(e) {
    let t = I(e);
    return null != t && C.has(t)
  }(e) ? (0, a.jsx)(l.MenuItem, {
    id: "copy-image",
    label: _.default.Messages.COPY_IMAGE_MENU_ITEM,
    action: m
  }, "copy-image") : null, (0, a.jsx)(l.MenuItem, {
    id: "save-image",
    label: _.default.Messages.SAVE_IMAGE_MENU_ITEM,
    action: A
  }, "save-image")]
}