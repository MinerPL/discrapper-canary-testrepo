t.d(n, {
  QC: function() {
return Z;
  },
  SO: function() {
return R;
  }
}), t(653041);
var l = t(512722),
  r = t.n(l),
  a = t(913527),
  o = t.n(a),
  i = t(705512),
  u = t(812206),
  s = t(55000),
  c = t(220082),
  d = t(693824),
  E = t(690725),
  _ = t(706454),
  f = t(594174),
  T = t(70956),
  v = t(709054),
  m = t(561308),
  N = t(206295),
  x = t(737583),
  g = t(438226),
  h = t(169040),
  I = t(689938);
let M = (e, n) => ({
AvatarImage1: e[0],
...null != e[1] && {
  AvatarImage2: e[1]
},
...null != e[2] && {
  AvatarImage3: e[2]
},
...null != n && {
  ApplicationImage: n
}
  }),
  A = (e, n) => {
let t = [{
    iconPath: h.NM,
    text: n
  }],
  l = v.default.extractTimestamp(e.extra.application_id);
if (7 >= o()().diff(o()(l), 'days') && t.push({
    iconPath: h.As,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  }), (0, m.Ol)(e) && t.push({
    iconPath: h.fO,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
  }), (0, m.q_)(e)) {
  let n = (0, m.vU)(e);
  t.push({
    iconPath: h.t1,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    })
  });
}
(0, m.ig)(e) === i.o.GLOBAL && t.push({
  iconPath: h.Op,
  text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
});
let r = (0, m.dw)(e);
if (null != r && t.push({
    iconPath: h.Z,
    text: (0, m.GE)(r)
  }), (0, m.V5)(e) && t.push({
    iconPath: h.Md,
    text: (0, m.kr)(e) ? (0, m.z5)(e) : (0, m.nB)(e)
  }), (0, m.Jd)(e)) {
  let n = (0, m.yA)(e);
  if (null != n) {
    let e = I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
      hours: Math.round(n / T.Z.Seconds.HOUR)
    });
    return [{
      iconPath: h.eF,
      text: ''.concat(I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
    }];
  }
}
return t;
  },
  C = (e, n) => {
let {
  timestamp: t,
  colors: l,
  description: r,
  entry: a,
  numAvatars: o
} = n, i = l.map((e, n) => ({
  color: e,
  stop: n
}));
e.setSize({
  w: h.nx,
  h: h.bg
}, 4), e.drawRoundedGradientRect(i, {
  x: 0,
  y: h.bg
}, {
  x: h.nx,
  y: 0
}, {
  x: 0,
  y: 0,
  h: h.bg,
  w: h.nx
}, 8), e.setColor('rgba(108, 111, 124, 0.24)'), e.drawRoundedRect({
  x: h.nx - h.sB - h.if,
  y: h.sB,
  w: h.if,
  h: h.wI
}, 4, !0), e.setColor('rgba(255, 255, 255, 0.5)');
e.setFont({
  size: 12,
  family: [
    'gg sans',
    'sans-serif'
  ],
  weight: 500,
  truncate: d.GX.None
}), e.drawText(I.Z.Messages.BETA, {
  x: h.nx - h.sB - 29,
  y: h.sB + 12 + 2
}, !0), e.setColor('white'), e.drawRoundedImage('ApplicationImage', {
  x: h.sB,
  y: h.sB
}, {
  w: h.Pu,
  h: h.Pu
}, 8) === d.vP.Failure && e.drawPath(s.Cv, {
  x: h.sB,
  y: h.sB
}, !0, 2 + 2 / 3);
(0, x.l)({
  canvas: e,
  avatarSrcs: [
    'AvatarImage1',
    'AvatarImage2',
    'AvatarImage3'
  ].slice(0, o),
  position: {
    x: h.Iq,
    y: h.sB
  },
  avatarImageSize: h.$S
}), e.setColor('white'), e.setFont({
  size: 16,
  truncate: d.GX.Wrap
}), e.drawText(r, {
  x: h.Iq,
  y: 64,
  h: 32,
  w: h.kC
}, !0);
let u = A(a, t);
(0, x.J)({
  canvas: e,
  badges: u,
  startPosition: h.Iq,
  maxWidth: h.kC
});
  },
  R = async e => {
let {
  applicationImageSrc: n,
  entry: t,
  avatarSrcs: l,
  description: r,
  timestamp: a,
  colors: o,
  channelId: i
} = e, u = t.extra.game_name, s = M(l, n);
return await (0, E.f)({
  assetsToLoad: s,
  drawImage: e => C(e, {
    timestamp: a,
    colors: o,
    description: r,
    entry: t,
    numAvatars: l.length
  }),
  exportConfigs: {
    format: d.kH.CloudUpload,
    quality: 1,
    fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
    fileType: 'png',
    channelId: i
  }
});
  };
async function Z(e, n, t) {
  let l = e.extra.game_name,
a = u.Z.getApplication(e.extra.application_id),
o = null == a ? void 0 : a.getIconURL(128),
i = f.default.getUser(e.author_id);
  r()(null != i, 'Author must not be null'), await (0, c.vM)(null != o ? o : '');
  let s = [null == i ? void 0 : i.getAvatarURL(n.guild_id, 128)],
T = M(s, o),
v = _.default.locale,
x = (0, m.yh)(e, v),
{
  primaryColor: h,
  secondaryColor: I
} = (0, N.w)(null != o ? o : ''),
A = (0, g.HV)(e, n, i),
R = {
  format: t,
  quality: 1,
  fileName: 'user-reacting-to-'.concat(l, '.png').toLowerCase(),
  fileType: 'png'
};
  if (t === d.kH.CloudUpload) {
var Z;
R.channelId = null !== (Z = n.id) && void 0 !== Z ? Z : '';
  }
  return await (0, E.f)({
assetsToLoad: T,
drawImage: n => C(n, {
  timestamp: x,
  colors: [
    h,
    I
  ],
  description: A,
  entry: e,
  numAvatars: s.length
}),
exportConfigs: R
  });
}