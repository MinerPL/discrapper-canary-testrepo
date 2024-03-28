"use strict";
s.r(t), s.d(t, {
  CollectiblesDCToDisplayOptions: function() {
    return O
  },
  CollectiblesMarketingVariant: function() {
    return a
  },
  getCountdownDisplayOptions: function() {
    return b
  },
  getCustomConfettiDisplayOptions: function() {
    return S
  }
}), s("627341");
var a, i, c = s("278074"),
  n = s("180650"),
  C = s("524437"),
  o = s("689938"),
  d = s("160506"),
  _ = s("263660"),
  E = s("22344"),
  L = s("165047"),
  T = s("167087"),
  f = s("692797"),
  I = s("186077"),
  r = s("376477");
(i = a || (a = {}))[i.NONE = 0] = "NONE", i[i.TOOLTIP = 1] = "TOOLTIP", i[i.COACHTIP = 2] = "COACHTIP";
let O = {
    [C.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
      type: 1,
      title: () => o.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
      emojiName: "dragon"
    },
    [C.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP]: {
      type: 1,
      title: () => o.default.Messages.COLLECTIBLES_ELEMENTS_TOOLTIP_TITLE,
      emojiName: "fire"
    },
    [C.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_DISCRIPTION,
      imageSrc: L,
      assetIds: ["a_a065206df7b011a5510e4e5bca7d49be", "a_554b7c34f7b6c709f19535aacb128e7b", "a_250640ab00a8837a1d56f35879138177", "a_fa014594d4b2b4249e1098c0adc85b47"]
    },
    [C.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_ANIME_V2_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_ANIME_V2_COACHTIP_DISCRIPTION,
      imageSrc: f,
      assetIds: ["a_c3cffc19e9784f7d0b005eecdf1b566e", "a_f3af281c65cf0cf590e9e1f59e9c6cf6", "a_51d3bb502109eec26c76386ec980bc8b"]
    },
    [C.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_SPRINGTOONS_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_SPRINGTOONS_COACHTIP_DESCRIPTION,
      imageSrc: T,
      assetIds: ["a_ab95c78401ce4ec85c25a6d308db9d85", "a_4cd9ae5a8d103c219eacd3674d7730cd", "a_27bbf0b53b1054cf61e9a4c0e8d4027f"]
    },
    [C.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: r,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: d,
        srcLight: _
      },
      entryPointClassName: "shyButton"
    }
  },
  b = e => (0, c.match)(e).with(n.CollectiblesCategorySkuId.SHY, () => ({
    label: () => o.default.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: I
  })).otherwise(() => null),
  l = {
    SHY: {
      confettiAssetSrc: E,
      style: {
        position: "absolute",
        width: "600px"
      }
    }
  },
  S = e => (0, c.match)(e).with("1220513977683935373", () => l.SHY).with("1220432647453409384", () => l.SHY).with("1220432697718083614", () => l.SHY).otherwise(() => null)