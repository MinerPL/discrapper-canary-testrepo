"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("152584"),
  r = n("316272"),
  o = n("929423"),
  u = n("783142"),
  d = n("697218"),
  c = n("719923"),
  f = n("75015");
class E extends r.default {
  _initialize() {
    l.default.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  _terminate() {
    l.default.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
  }
  maybeOpenProfilePreviewModal(e) {
    let {
      imageSrc: t,
      file: l,
      uploadType: r,
      guildId: E,
      isTryItOutFlow: h
    } = e, _ = null != E ? o.setPendingAvatar : i.setPendingAvatar, C = null != E ? o.setPendingBanner : u.setPendingBanner, S = d.default.getCurrentUser();
    if (r === f.UploadTypes.AVATAR) {
      if (h) {
        (0, u.setTryItOutAvatar)(t);
        return
      }
      let e = c.default.canUseAnimatedAvatar(S);
      if (e || "image/gif" !== l.type) {
        _(t);
        return
      }(0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("745544").then(n.bind(n, "745544"));
        return n => (0, a.jsx)(e, {
          avatarSrc: t,
          onSubscribe: () => _(t),
          ...n
        })
      })
    } else if (r === f.UploadTypes.BANNER) {
      if (h) {
        (0, u.setTryItOutBanner)(t);
        return
      }
      let e = c.default.canUsePremiumProfileCustomization(S);
      if (e) {
        C(t);
        return
      }(0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("745544").then(n.bind(n, "745544"));
        return n => (0, a.jsx)(e, {
          bannerSrc: t,
          onSubscribe: () => C(t),
          ...n
        })
      })
    }
  }
}
var h = new E