"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("809206"),
  r = n("317770"),
  o = n("18438"),
  u = n("350327"),
  d = n("594174"),
  c = n("74538"),
  f = n("486324");
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
    } = e, _ = null != E ? o.setPendingAvatar : i.setPendingAvatar, C = null != E ? o.setPendingBanner : u.setPendingBanner, m = d.default.getCurrentUser();
    if (r === f.UploadTypes.AVATAR) {
      if (h) {
        (0, u.setTryItOutAvatar)(t);
        return
      }
      if (c.default.canUseAnimatedAvatar(m) || "image/gif" !== l.type) {
        _(t);
        return
      }(0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("12736")]).then(n.bind(n, "844594"));
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
      if (c.default.canUsePremiumProfileCustomization(m)) {
        C(t);
        return
      }(0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("12736")]).then(n.bind(n, "844594"));
        return n => (0, a.jsx)(e, {
          bannerSrc: t,
          onSubscribe: () => C(t),
          ...n
        })
      })
    }
  }
}
t.default = new E