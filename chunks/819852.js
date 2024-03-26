"use strict";
n.r(t), n.d(t, {
  CollectiblesMarketingVariant: function() {
    return s
  },
  CollectiblesDCToDisplayOptions: function() {
    return _
  },
  SkuIdToCountdownDisplayOptions: function() {
    return C
  },
  SkuIdToCustomConfettiDisplayOptions: function() {
    return I
  }
});
var a, s, l = n("151426"),
  i = n("782340"),
  r = n("919806"),
  o = n("424744"),
  u = n("753867"),
  d = n("577151"),
  c = n("177493"),
  f = n("66453"),
  E = n("446707"),
  h = n("566247");
(a = s || (s = {}))[a.NONE = 0] = "NONE", a[a.TOOLTIP = 1] = "TOOLTIP", a[a.COACHTIP = 2] = "COACHTIP";
let _ = {
    [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
      type: 1,
      title: () => i.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
      emojiName: "dragon"
    },
    [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP]: {
      type: 1,
      title: () => i.default.Messages.COLLECTIBLES_ELEMENTS_TOOLTIP_TITLE,
      emojiName: "fire"
    },
    [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]: {
      type: 2,
      title: () => i.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_TITLE,
      body: () => i.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_DISCRIPTION,
      imageSrc: d,
      assetIds: ["a_a065206df7b011a5510e4e5bca7d49be", "a_554b7c34f7b6c709f19535aacb128e7b", "a_250640ab00a8837a1d56f35879138177", "a_fa014594d4b2b4249e1098c0adc85b47"]
    },
    [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP]: {
      type: 2,
      title: () => i.default.Messages.COLLECTIBLES_ANIME_V2_COACHTIP_TITLE,
      body: () => i.default.Messages.COLLECTIBLES_ANIME_V2_COACHTIP_DISCRIPTION,
      imageSrc: f,
      assetIds: ["a_c3cffc19e9784f7d0b005eecdf1b566e", "a_f3af281c65cf0cf590e9e1f59e9c6cf6", "a_51d3bb502109eec26c76386ec980bc8b"]
    },
    [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP]: {
      type: 2,
      title: () => i.default.Messages.COLLECTIBLES_SPRINGTOONS_COACHTIP_TITLE,
      body: () => i.default.Messages.COLLECTIBLES_SPRINGTOONS_COACHTIP_DESCRIPTION,
      imageSrc: c,
      assetIds: ["a_ab95c78401ce4ec85c25a6d308db9d85", "a_4cd9ae5a8d103c219eacd3674d7730cd", "a_27bbf0b53b1054cf61e9a4c0e8d4027f"]
    },
    [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => i.default.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => i.default.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: h,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_d22ba4f29568b6ebd2cfc5e95428f5b6", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: r,
        srcLight: o
      },
      entryPointClassName: "shyButton"
    }
  },
  C = {
    "1220513972189663413": {
      label: () => i.default.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
      backgroundColor: "rgba(255, 70, 85, 1)",
      boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
      labelColor: "rgba(15, 25, 35, 1)",
      iconSrc: E
    }
  },
  S = {
    SHY: {
      confettiAssetSrc: u,
      style: {
        position: "absolute",
        top: "-120px",
        right: "-75px",
        width: "600px"
      }
    }
  },
  I = {
    "1220513977683935373": S.SHY,
    "1220432647453409384": S.SHY,
    "1220432697718083614": S.SHY
  }