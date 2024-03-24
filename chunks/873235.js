"use strict";
n.r(t), n.d(t, {
  generateWatchContentImage: function() {
    return o
  }
});
var a = n("407462"),
  l = n("695412"),
  s = n("999317"),
  i = n("878984"),
  r = n("782340");
let u = (e, t, n) => ({
    AvatarImage: e,
    ...null != t && {
      MediaImage: t
    },
    ...null != n && {
      ApplicationImage: n
    }
  }),
  o = async e => {
    let {
      mediaImageSrc: t,
      entry: n,
      avatarSrc: o,
      description: d,
      timestamp: c,
      colors: f
    } = e, h = n.extra.media_title, m = u(o, t);
    return await (0, s.generateImageFromCanvas)({
      assetsToLoad: m,
      drawImage: e => {
        let t = f.map((e, t) => ({
          color: e,
          stop: t
        }));
        e.setSize({
          w: i.imageWidth,
          h: i.imageHeight
        }, 4), e.drawRoundedGradientRect(t, {
          x: 0,
          y: i.imageHeight
        }, {
          x: i.imageWidth,
          y: 0
        }, {
          x: 0,
          y: 0,
          h: i.imageHeight,
          w: i.imageWidth
        }, 8), e.setColor("white"), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
          x: i.imageWidth - i.imagePadding - i.betaTagWidth,
          y: i.imagePadding,
          w: i.betaTagWidth,
          h: i.betaTagHeight
        }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)"), e.setFont({
          size: 12,
          family: '"gg sans", sans-serif',
          weight: 500,
          truncate: l.TextTruncationMethod.None
        }), e.drawText(r.default.Messages.BETA, {
          x: i.imageWidth - i.imagePadding - 29,
          y: 26
        }, !0);
        let n = e.drawRoundedImage("MediaImage", {
          x: i.imagePadding,
          y: i.imagePadding
        }, {
          w: i.applicationImageSize,
          h: i.applicationImageSize
        }, 8, {
          fillMode: l.FillMode.Contain
        });
        n === l.DrawResultStatus.Failure && (n = e.drawRoundedImage("ApplicationImage", {
          x: i.imagePadding,
          y: i.imagePadding
        }, {
          w: i.applicationImageSize,
          h: i.applicationImageSize
        }, 8)), n === l.DrawResultStatus.Failure && e.drawPath(a.ACTIVITY_IMAGE_FALLBACK_PATH, {
          x: i.imagePadding,
          y: i.imagePadding
        }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
          x: i.descriptionIndent,
          y: i.imagePadding
        }, {
          w: i.avatarImageSize,
          h: i.avatarImageSize
        }, 50), e.setFont({
          size: 16,
          family: '"gg sans", sans-serif',
          weight: 500,
          truncate: l.TextTruncationMethod.Wrap
        }), e.drawText(d, {
          x: i.descriptionIndent,
          y: 64,
          h: 32,
          w: i.descriptionMaxWidth
        }, !0), e.setFont({
          size: 12,
          family: '"gg sans", sans-serif',
          weight: 500,
          truncate: l.TextTruncationMethod.None
        }), e.drawText(c, {
          x: i.descriptionIndent + i.attributionSpacing,
          y: i.attributionTextPosition,
          w: i.descriptionMaxWidth
        }, !0), e.drawPath(i.WATCH_ICON_PATH_TOP, {
          x: i.descriptionIndent,
          y: i.attributionIconPosition + 1
        }, !0, 1.1), e.drawPath(i.WATCH_ICON_PATH_BOTTOM, {
          x: i.descriptionIndent,
          y: i.attributionIconPosition + 1
        }, !0, 1.1)
      },
      exportConfigs: {
        format: l.DiscordCanvasExporterOutputFormats.File,
        quality: 1,
        fileName: "user-reacting-to-".concat(h, ".png").toLowerCase(),
        fileType: "png"
      }
    })
  }