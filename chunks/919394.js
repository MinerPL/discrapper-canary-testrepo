"use strict";
n.r(t), n.d(t, {
  generateGamingContentImage: function() {
    return m
  }
}), n("653041");
var a = n("55000"),
  l = n("693824"),
  s = n("690725"),
  i = n("70956"),
  r = n("561308"),
  o = n("737583"),
  u = n("169040"),
  d = n("689938");
let c = (e, t) => ({
    AvatarImage: e,
    ...null != t && {
      ApplicationImage: t
    }
  }),
  f = (e, t) => {
    let n = [{
      iconPath: u.GAME_CONTROLLER_ICON_PATH,
      text: t
    }];
    (0, r.isEntryNew)(e) && n.push({
      iconPath: u.NEW_GAME_ICON_PATH,
      text: d.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
    });
    let a = (0, r.getStreakCount)(e);
    null != a && a > 1 && n.push({
      iconPath: u.FLASH_ICON_PATH,
      text: d.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
        days: a
      })
    });
    let l = (0, r.getResurrectedEntryLastPlayTime)(e);
    if (null != l && n.push({
        iconPath: u.RESURRECTED_ICON_PATH,
        text: (0, r.getFullResurrectedBadgeText)(l)
      }), (0, r.isEntryMarathon)(e) && n.push({
        iconPath: u.TIMER_ICON_PATH,
        text: (0, r.isEntryActive)(e) ? (0, r.getMarathonName)(e) : (0, r.getFullMarathonDescription)(e)
      }), (0, r.isEntryTopGame)(e)) {
      let t = (0, r.getEntryDuration)(e);
      if (null != t) {
        let e = d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
          hours: Math.round(t / i.default.Seconds.HOUR)
        });
        return [{
          iconPath: u.TROPHY_ICON_PATH,
          text: "".concat(d.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, " — ").concat(e)
        }]
      }
    }
    return n
  },
  h = (e, t) => {
    let {
      timestamp: n,
      colors: s,
      description: i,
      entry: r
    } = t, c = s.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: u.imageWidth,
      h: u.imageHeight
    }, 4), e.drawRoundedGradientRect(c, {
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
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: u.imageWidth - u.imagePadding - u.betaTagWidth,
      y: u.imagePadding,
      w: u.betaTagWidth,
      h: u.betaTagHeight
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: l.TextTruncationMethod.None
    }), e.drawText(d.default.Messages.BETA, {
      x: u.imageWidth - u.imagePadding - 29,
      y: u.imagePadding + 12 + 2
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: u.imagePadding,
      y: u.imagePadding
    }, {
      w: u.applicationImageSize,
      h: u.applicationImageSize
    }, 8) === l.DrawResultStatus.Failure && e.drawPath(a.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: u.imagePadding,
      y: u.imagePadding
    }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
      x: u.descriptionIndent,
      y: u.imagePadding
    }, {
      w: u.avatarImageSize,
      h: u.avatarImageSize
    }, 50, {
      fillMode: l.FillMode.Cover
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: l.TextTruncationMethod.Wrap
    }), e.drawText(i, {
      x: u.descriptionIndent,
      y: 64,
      h: 32,
      w: u.descriptionMaxWidth
    }, !0);
    let h = f(r, n);
    (0, o.drawBadges)({
      canvas: e,
      badges: h,
      startPosition: u.descriptionIndent,
      maxWidth: u.descriptionMaxWidth
    })
  },
  m = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrc: a,
      description: i,
      timestamp: r,
      colors: o,
      channelId: u
    } = e, d = n.extra.game_name, f = c(a, t);
    return await (0, s.generateImageFromCanvas)({
      assetsToLoad: f,
      drawImage: e => h(e, {
        timestamp: r,
        colors: o,
        description: i,
        entry: n
      }),
      exportConfigs: {
        format: l.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(d, ".png").toLowerCase(),
        fileType: "png",
        channelId: u
      }
    })
  }