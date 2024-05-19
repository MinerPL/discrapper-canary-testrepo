"use strict";
n.r(t), n.d(t, {
  generateGamingContentImage: function() {
    return p
  }
}), n("653041");
var a = n("705512"),
  l = n("55000"),
  s = n("693824"),
  i = n("690725"),
  r = n("70956"),
  o = n("561308"),
  u = n("737583"),
  d = n("169040"),
  c = n("689938");
let f = (e, t) => ({
    AvatarImage1: e[0],
    ...null != e[1] && {
      AvatarImage2: e[1]
    },
    ...null != e[2] && {
      AvatarImage3: e[2]
    },
    ...null != t && {
      ApplicationImage: t
    }
  }),
  h = (e, t) => {
    let n = [{
      iconPath: d.GAME_CONTROLLER_ICON_PATH,
      text: t
    }];
    if ((0, o.isEntryNew)(e) && n.push({
        iconPath: d.NEW_GAME_ICON_PATH,
        text: c.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
      }), (0, o.isValidStreak)(e)) {
      let t = (0, o.getStreakCount)(e);
      n.push({
        iconPath: d.FLASH_ICON_PATH,
        text: c.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
          days: t
        })
      })
    }
    let l = (0, o.getResurrectedEntryLastPlayTime)(e);
    if (null != l && n.push({
        iconPath: d.RESURRECTED_ICON_PATH,
        text: (0, o.getFullResurrectedBadgeText)(l)
      }), (0, o.isEntryMarathon)(e) && n.push({
        iconPath: d.TIMER_ICON_PATH,
        text: (0, o.isEntryActive)(e) ? (0, o.getMarathonName)(e) : (0, o.getFullMarathonDescription)(e)
      }), (0, o.isEntryTopGame)(e)) {
      let t = (0, o.getEntryDuration)(e);
      if (null != t) {
        let e = c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
          hours: Math.round(t / r.default.Seconds.HOUR)
        });
        return [{
          iconPath: d.TROPHY_ICON_PATH,
          text: "".concat(c.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, " — ").concat(e)
        }]
      }
    }
    return (0, o.getTrendingType)(e) === a.TrendingType.GLOBAL && n.push({
      iconPath: d.TRENDING_ICON_PATH,
      text: c.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
    }), n
  },
  m = (e, t) => {
    let {
      timestamp: n,
      colors: a,
      description: i,
      entry: r,
      numAvatars: o
    } = t, f = a.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: d.imageWidth,
      h: d.imageHeight
    }, 4), e.drawRoundedGradientRect(f, {
      x: 0,
      y: d.imageHeight
    }, {
      x: d.imageWidth,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: d.imageHeight,
      w: d.imageWidth
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: d.imageWidth - d.imagePadding - d.betaTagWidth,
      y: d.imagePadding,
      w: d.betaTagWidth,
      h: d.betaTagHeight
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: s.TextTruncationMethod.None
    }), e.drawText(c.default.Messages.BETA, {
      x: d.imageWidth - d.imagePadding - 29,
      y: d.imagePadding + 12 + 2
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: d.imagePadding,
      y: d.imagePadding
    }, {
      w: d.applicationImageSize,
      h: d.applicationImageSize
    }, 8) === s.DrawResultStatus.Failure && e.drawPath(l.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: d.imagePadding,
      y: d.imagePadding
    }, !0, 2 + 2 / 3);
    (0, u.drawAvatars)({
      canvas: e,
      avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, o),
      position: {
        x: d.descriptionIndent,
        y: d.imagePadding
      },
      avatarImageSize: d.avatarImageSize
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: s.TextTruncationMethod.Wrap
    }), e.drawText(i, {
      x: d.descriptionIndent,
      y: 64,
      h: 32,
      w: d.descriptionMaxWidth
    }, !0);
    let m = h(r, n);
    (0, u.drawBadges)({
      canvas: e,
      badges: m,
      startPosition: d.descriptionIndent,
      maxWidth: d.descriptionMaxWidth
    })
  },
  p = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrcs: a,
      description: l,
      timestamp: r,
      colors: o,
      channelId: u
    } = e, d = n.extra.game_name, c = f(a, t);
    return await (0, i.generateImageFromCanvas)({
      assetsToLoad: c,
      drawImage: e => m(e, {
        timestamp: r,
        colors: o,
        description: l,
        entry: n,
        numAvatars: a.length
      }),
      exportConfigs: {
        format: s.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(d, ".png").toLowerCase(),
        fileType: "png",
        channelId: u
      }
    })
  }