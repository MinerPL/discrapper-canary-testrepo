"use strict";
n.r(t), n.d(t, {
  generateGamingContentImage: function() {
    return d
  }
});
var a = n("407462"),
  l = n("695412"),
  s = n("999317"),
  i = n("476774"),
  r = n("878984"),
  u = n("782340");
let o = (e, t) => ({
    AvatarImage: e,
    ...null != t && {
      ApplicationImage: t
    }
  }),
  d = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrc: d,
      description: c,
      timestamp: f,
      colors: h
    } = e, m = n.extra.game_name, p = o(d, t);
    return await (0, s.generateImageFromCanvas)({
      assetsToLoad: p,
      drawImage: e => {
        let t = h.map((e, t) => ({
          color: e,
          stop: t
        }));
        e.setSize({
          w: r.imageWidth,
          h: r.imageHeight
        }, 4), e.drawRoundedGradientRect(t, {
          x: 0,
          y: r.imageHeight
        }, {
          x: r.imageWidth,
          y: 0
        }, {
          x: 0,
          y: 0,
          h: r.imageHeight,
          w: r.imageWidth
        }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
          x: r.imageWidth - r.imagePadding - r.betaTagWidth,
          y: r.imagePadding,
          w: r.betaTagWidth,
          h: r.betaTagHeight
        }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)"), e.setFont({
          size: 12,
          family: '"gg sans", sans-serif',
          weight: 500,
          truncate: l.TextTruncationMethod.None
        }), e.drawText(u.default.Messages.BETA, {
          x: r.imageWidth - r.imagePadding - 29,
          y: 26
        }, !0), e.setColor("white");
        let s = e.drawRoundedImage("ApplicationImage", {
          x: r.imagePadding,
          y: r.imagePadding
        }, {
          w: r.applicationImageSize,
          h: r.applicationImageSize
        }, 8);
        s === l.DrawResultStatus.Failure && e.drawPath(a.ACTIVITY_IMAGE_FALLBACK_PATH, {
          x: r.imagePadding,
          y: r.imagePadding
        }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
          x: r.descriptionIndent,
          y: r.imagePadding
        }, {
          w: r.avatarImageSize,
          h: r.avatarImageSize
        }, 50), e.setFont({
          size: 16,
          family: '"gg sans", sans-serif',
          weight: 500,
          truncate: l.TextTruncationMethod.Wrap
        }), e.drawText(c, {
          x: r.descriptionIndent,
          y: 64,
          h: 32,
          w: r.descriptionMaxWidth
        }, !0), e.setFont({
          size: 12,
          family: '"gg sans", sans-serif',
          weight: 500,
          truncate: l.TextTruncationMethod.None
        }), e.drawText(f, {
          x: r.descriptionIndent + r.attributionSpacing,
          y: r.attributionTextPosition,
          w: r.descriptionMaxWidth
        }, !0), e.drawPath(r.GAME_CONTROLLER_ICON_PATH, {
          x: r.descriptionIndent,
          y: r.attributionIconPosition
        }, !0, .6), (0, i.isEntryNew)(n) && (e.drawPath(r.NEW_GAME_ICON_PATH_TOP, {
          x: r.descriptionIndent + r.attributionSize,
          y: r.attributionIconPosition
        }, !0, .6), e.drawPath(r.NEW_GAME_ICON_PATH_BOTTOM, {
          x: r.descriptionIndent + r.attributionSize,
          y: r.attributionIconPosition
        }, !0, .6), e.drawText(u.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME, {
          x: r.descriptionIndent + r.attributionSize + r.attributionSpacing,
          y: r.attributionTextPosition
        }, !0))
      },
      exportConfigs: {
        format: l.DiscordCanvasExporterOutputFormats.File,
        quality: 1,
        fileName: "user-reacting-to-".concat(m, ".png").toLowerCase(),
        fileType: "png"
      }
    })
  }