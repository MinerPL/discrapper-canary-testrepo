"use strict";
n.r(t), n.d(t, {
  generateWatchContentImage: function() {
    return c
  }
}), n("653041");
var a = n("55000"),
  l = n("693824"),
  s = n("690725"),
  i = n("737583"),
  r = n("169040"),
  o = n("689938");
let u = (e, t, n) => ({
    AvatarImage: e,
    ...null != t && {
      MediaImage: t
    },
    ...null != n && {
      ApplicationImage: n
    }
  }),
  d = (e, t) => {
    let n = [{
      iconPath: r.WATCH_ICON_PATH,
      text: e
    }];
    return null != t && n.push({
      iconPath: r.SCROLL_ICON_PATH,
      text: t
    }), n
  },
  c = async e => {
    let {
      mediaImageSrc: t,
      entry: n,
      avatarSrc: c,
      description: f,
      timestamp: h,
      episodeDescription: m,
      colors: p,
      channelId: E
    } = e, C = n.extra.media_title, g = u(c, t);
    return await (0, s.generateImageFromCanvas)({
      assetsToLoad: g,
      drawImage: e => {
        let t = p.map((e, t) => ({
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
          family: ["gg sans", "sans-serif"],
          weight: 500,
          truncate: l.TextTruncationMethod.None
        }), e.drawText(o.default.Messages.BETA, {
          x: r.imageWidth - r.imagePadding - 29,
          y: 26
        }, !0), e.setColor("white");
        let n = e.drawRoundedImage("MediaImage", {
          x: r.imagePadding,
          y: r.imagePadding
        }, {
          w: r.applicationImageSize,
          h: r.applicationImageSize
        }, 8, {
          fillMode: l.FillMode.Contain
        });
        n === l.DrawResultStatus.Failure && (n = e.drawRoundedImage("ApplicationImage", {
          x: r.imagePadding,
          y: r.imagePadding
        }, {
          w: r.applicationImageSize,
          h: r.applicationImageSize
        }, 8)), n === l.DrawResultStatus.Failure && e.drawPath(a.ACTIVITY_IMAGE_FALLBACK_PATH, {
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
          truncate: l.TextTruncationMethod.Wrap
        }), e.drawText(f, {
          x: r.descriptionIndent,
          y: 64,
          h: 32,
          w: r.descriptionMaxWidth
        }, !0);
        let s = d(h, m);
        (0, i.drawBadges)({
          canvas: e,
          badges: s,
          startPosition: r.descriptionIndent,
          maxWidth: r.descriptionMaxWidth
        })
      },
      exportConfigs: {
        format: l.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(C, ".png").toLowerCase(),
        fileType: "png",
        channelId: E
      }
    })
  }