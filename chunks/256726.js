n.d(t, {
  CR: function() {
return m;
  },
  UU: function() {
return h;
  },
  jE: function() {
return u;
  }
}), n(627494), n(757143);
var i = n(884439),
  a = n(55000),
  l = n(693824),
  s = n(690725),
  r = n(561308),
  o = n(737583),
  c = n(169040),
  d = n(689938);
let u = e => {
let {
  timestamp: t
} = e;
return [{
  iconPath: c.mb,
  text: t
}];
  },
  h = e => {
var t;
let n = null === (t = (0, r.PJ)(e, i.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
return null == n ? [] : [{
  iconPath: c.eF,
  text: d.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: n
  })
}];
  },
  p = e => {
let {
  avatarSrc: t,
  mediaImageSrc: n
} = e;
return {
  AvatarImage: t,
  ...null != n && {
    MediaImage: n
  }
};
  },
  m = async e => {
let {
  user: t,
  channel: n,
  mediaImageSrc: i,
  artist: r,
  description: u,
  colors: h,
  badges: m
} = e, _ = p({
  avatarSrc: t.getAvatarURL(n.guild_id, 128),
  mediaImageSrc: i
}), f = r.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-');
return await (0, s.f)({
  assetsToLoad: _,
  drawImage: e => {
    (function(e, t) {
      let n = t.map((e, t) => ({
        color: e,
        stop: t
      }));
      e.setSize({
        w: c.nx,
        h: c.bg
      }, 4), e.drawRoundedGradientRect(n, {
        x: 0,
        y: c.bg
      }, {
        x: c.nx,
        y: 0
      }, {
        x: 0,
        y: 0,
        h: c.bg,
        w: c.nx
      }, 8);
    }(e, h), function(e) {
      e.setColor('rgba(108, 111, 124, 0.24)'), e.drawRoundedRect({
        x: c.nx - c.sB - c.if,
        y: c.sB,
        w: c.if,
        h: c.wI
      }, 4, !0), e.setColor('rgba(255, 255, 255, 0.5)'), e.setFont({
        size: 12,
        family: [
          'gg sans',
          'sans-serif'
        ],
        weight: 500,
        truncate: l.GX.None
      }), e.drawText(d.Z.Messages.BETA, {
        x: c.nx - c.sB - 29,
        y: 26
      }, !0);
    }(e), function(e) {
      e.drawRoundedImage('MediaImage', {
        x: c.sB,
        y: c.sB
      }, {
        w: c.Pu,
        h: c.Pu
      }, 8, {
        fillMode: l.JU.Contain
      }) === l.vP.Failure && e.drawPath(a.Cv, {
        x: c.sB,
        y: c.sB
      }, !0, 2 + 2 / 3);
    }(e), function(e) {
      e.drawRoundedImage('AvatarImage', {
        x: c.Iq,
        y: c.sB
      }, {
        w: c.$S,
        h: c.$S
      }, 50);
    }(e), function(e, t) {
      e.setColor('white'), e.setFont({
        size: 16,
        truncate: l.GX.Wrap
      }), e.drawText(t, {
        x: c.Iq,
        y: 64,
        h: 32,
        w: c.kC
      }, !0);
    }(e, u), (0, o.J)({
      canvas: e,
      badges: m,
      startPosition: c.Iq,
      maxWidth: c.kC
    }));
  },
  exportConfigs: {
    format: l.kH.CloudUpload,
    quality: 1,
    fileName: 'user-reacting-to-'.concat(f, '.png').toLowerCase(),
    fileType: 'png',
    channelId: n.id
  }
});
  };