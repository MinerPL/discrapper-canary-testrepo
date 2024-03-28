"use strict";
s.r(a), s.d(a, {
  default: function() {
    return _
  }
}), s("47120");
var t = s("735250");
s("470079");
var n = s("512722"),
  i = s.n(n),
  l = s("481060"),
  r = s("584825"),
  o = s("353254"),
  c = s("866104"),
  d = s("689938"),
  u = s("337547");

function _(e) {
  let {
    onClose: a,
    guildId: s,
    transitionState: n
  } = e, _ = (0, r.useSubscriptionsSettings)(s);
  i()(null != _, "subscriptionsSettings cannot be null");
  let m = _.cover_image_asset,
    [h] = (0, o.default)(null != m ? m : void 0);
  return (0, t.jsxs)(l.ModalRoot, {
    className: u.modal,
    size: l.ModalSize.MEDIUM,
    transitionState: n,
    "aria-label": d.default.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_ARIA,
    children: [(0, t.jsx)("div", {
      ref: h,
      className: u.coverImageContainer,
      children: null != m && (0, t.jsx)(c.HeroImage, {
        coverImageAsset: m
      })
    }), (0, t.jsx)(l.Heading, {
      variant: "text-lg/medium",
      color: "header-primary",
      className: u.header,
      children: d.default.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_HEADER
    }), (0, t.jsx)(l.ModalContent, {
      className: u.content,
      children: (0, t.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.description,
        children: _.description
      })
    }), (0, t.jsx)(l.ModalFooter, {
      className: u.__invalid_footer,
      children: (0, t.jsx)(l.Button, {
        onClick: a,
        children: d.default.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_CTA
      })
    })]
  })
}