"use strict";
n.r(t), n.d(t, {
  generateListenContentImage: function() {
    return m
  },
  getListenSessionImageBadges: function() {
    return c
  },
  getTopArtistImageBadges: function() {
    return f
  }
}), n("627494"), n("757143");
var a = n("884439"),
  l = n("55000"),
  s = n("693824"),
  i = n("690725"),
  r = n("561308"),
  o = n("737583"),
  u = n("169040"),
  d = n("689938");
let c = e => {
    let {
      timestamp: t
    } = e;
    return [{
      iconPath: u.RECORD_PLAYER_ICON_PATH,
      text: t
    }]
  },
  f = e => {
    var t;
    let n = null === (t = (0, r.getTrait)(e, a.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
    return null == n ? [] : [{
      iconPath: u.TROPHY_ICON_PATH,
      text: d.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
        count: n
      })
    }]
  },
  h = e => {
    let {
      avatarSrc: t,
      mediaImageSrc: n
    } = e;
    return {
      AvatarImage: t,
      ...null != n && {
        MediaImage: n
      }
    }
  },
  m = async e => {
    let {
      user: t,
      channel: n,
      mediaImageSrc: a,
      artist: r,
      description: c,
      colors: f,
      badges: m
    } = e, p = h({
      avatarSrc: t.getAvatarURL(n.guild_id, 128),
      mediaImageSrc: a
    }), E = r.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
    return await (0, i.generateImageFromCanvas)({
      assetsToLoad: p,
      drawImage: e => {
        (function(e, t) {
          let n = t.map((e, t) => ({
            color: e,
            stop: t
          }));
          e.setSize({
            w: u.imageWidth,
            h: u.imageHeight
          }, 4), e.drawRoundedGradientRect(n, {
            x: 0,
            y: u.imageHeight
          }, {
            x: u.imageWidth,
            y: 0
          }, {
            x: 0,
            y: 0,
            h: u.imageHeight,
            w: u.imageWidth
          }, 8)
        })(e, f),
        function(e) {
          e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
            x: u.imageWidth - u.imagePadding - u.betaTagWidth,
            y: u.imagePadding,
            w: u.betaTagWidth,
            h: u.betaTagHeight
          }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)"), e.setFont({
            size: 12,
            family: ["gg sans", "sans-serif"],
            weight: 500,
            truncate: s.TextTruncationMethod.None
          }), e.drawText(d.default.Messages.BETA, {
            x: u.imageWidth - u.imagePadding - 29,
            y: 26
          }, !0)
        }(e),
        function(e) {
          e.drawRoundedImage("MediaImage", {
            x: u.imagePadding,
            y: u.imagePadding
          }, {
            w: u.applicationImageSize,
            h: u.applicationImageSize
          }, 8, {
            fillMode: s.FillMode.Contain
          }) === s.DrawResultStatus.Failure && e.drawPath(l.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: u.imagePadding,
            y: u.imagePadding
          }, !0, 2 + 2 / 3)
        }(e),
        function(e) {
          e.drawRoundedImage("AvatarImage", {
            x: u.descriptionIndent,
            y: u.imagePadding
          }, {
            w: u.avatarImageSize,
            h: u.avatarImageSize
          }, 50)
        }(e),
        function(e, t) {
          e.setColor("white"), e.setFont({
            size: 16,
            truncate: s.TextTruncationMethod.Wrap
          }), e.drawText(t, {
            x: u.descriptionIndent,
            y: 64,
            h: 32,
            w: u.descriptionMaxWidth
          }, !0)
        }(e, c), (0, o.drawBadges)({
          canvas: e,
          badges: m,
          startPosition: u.descriptionIndent,
          maxWidth: u.descriptionMaxWidth
        })
      },
      exportConfigs: {
        format: s.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(E, ".png").toLowerCase(),
        fileType: "png",
        channelId: n.id
      }
    })
  }