"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("668781"),
  s = n("829883"),
  u = n("976853"),
  r = n("626135"),
  o = n("358085"),
  d = n("960048"),
  c = n("591759"),
  f = n("998502"),
  E = n("36998"),
  M = n("981631"),
  m = n("689938");
let g = "https://media.discordapp.net",
  S = /^.*\.discordapp\.net$/,
  v = "cdn.discordapp.com",
  p = "".concat(g, "/stickers"),
  I = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
  h = new Set(["jpg", "jpeg", "png"]),
  A = e => {
    var t, n, a, i;
    return null === (i = c.default.toURLSafe(e)) || void 0 === i ? void 0 : null === (a = i.pathname) || void 0 === a ? void 0 : null === (n = a.split(".")) || void 0 === n ? void 0 : null === (t = n.pop()) || void 0 === t ? void 0 : t.toLowerCase()
  };

function _(e, t) {
  l.default.show({
    title: m.default.Messages.ERROR,
    body: e
  }), d.default.captureException(t)
}

function T(e, t, n) {
  if ((0, u.default)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !o.isPlatformEmbedded || null == e || ! function(e) {
      let t = c.default.toURLSafe(e);
      if (null == t) return !1;
      let n = A(e);
      return (S.test(t.hostname) || t.host === v) && !e.startsWith(p) && !(0, s.isRoleIconAssetUrl)(e) && null != n && I.has(n)
    }(e)) return null;
  let l = function(e) {
      let t = c.default.toURLSafe(e);
      return null == t || t.host === v ? e : t.origin === g ? (t.host = v, t.searchParams.delete("size"), t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.delete("quality"), t.searchParams.delete("format"), t.toString()) : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
    }(e),
    d = async () => {
      try {
        await f.default.saveImage(l), r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        }), _(m.default.Messages.ERROR_SAVING_IMAGE, e)
      }
    }, T = async () => {
      try {
        await f.default.copyImage(l), r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        _(m.default.Messages.ERROR_COPYING_IMAGE, e), r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
          ...(0, E.getNativeContextMenuChannelAnalytics)()
        })
      }
    };
  return [f.default.canCopyImage() && function(e) {
    let t = A(e);
    return null != t && h.has(t)
  }(e) ? (0, a.jsx)(i.MenuItem, {
    id: "copy-image",
    label: m.default.Messages.COPY_IMAGE_MENU_ITEM,
    action: T
  }, "copy-image") : null, (0, a.jsx)(i.MenuItem, {
    id: "save-image",
    label: m.default.Messages.SAVE_IMAGE_MENU_ITEM,
    action: d
  }, "save-image")]
}