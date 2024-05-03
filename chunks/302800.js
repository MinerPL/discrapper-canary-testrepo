"use strict";
n.r(t), n.d(t, {
  CollectiblesDCToDisplayOptions: function() {
    return m
  },
  CollectiblesMarketingVariant: function() {
    return a
  },
  ShopCoachtipEditions: function() {
    return s
  },
  getCountdownDisplayOptions: function() {
    return p
  },
  getCustomConfettiDisplayOptions: function() {
    return T
  }
}), n("627341");
var a, s, l, i, r = n("278074"),
  o = n("180650"),
  u = n("524437"),
  d = n("689938"),
  c = n("160506"),
  f = n("263660"),
  E = n("22344"),
  h = n("848359"),
  _ = n("782984"),
  C = n("186077"),
  S = n("376477");
(l = a || (a = {}))[l.NONE = 0] = "NONE", l[l.TOOLTIP = 1] = "TOOLTIP", l[l.COACHTIP = 2] = "COACHTIP", (i = s || (s = {})).NONE = "NONE", i.SHY = "SHY", i.LOFI_VIBES = "LOFI_VIBES", i.GALAXY = "GALAXY";
let m = {
    [u.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: S,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: c,
        srcLight: f
      },
      entryPointClassName: "shyButton"
    },
    [u.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: _,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [u.DismissibleContent.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: h,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    }
  },
  p = e => (0, r.match)(e).with(o.CollectiblesCategorySkuId.SHY, () => ({
    label: () => d.default.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: C
  })).otherwise(() => null),
  I = {
    SHY: {
      confettiAssetSrc: E,
      style: {
        position: "absolute",
        width: "600px"
      }
    }
  },
  T = e => (0, r.match)(e).with("1220513977683935373", () => I.SHY).with("1220432647453409384", () => I.SHY).with("1220432697718083614", () => I.SHY).otherwise(() => null)