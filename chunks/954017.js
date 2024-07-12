n.r(t), n.d(t, {
  sendReactionToActivity: function() {
return T;
  },
  sendReplyToActivity: function() {
return g;
  }
});
var r = n(512722),
  i = n.n(r),
  a = n(493683),
  o = n(726542),
  s = n(122810),
  l = n(503438),
  u = n(693824),
  c = n(690725),
  d = n(592125),
  _ = n(81063),
  E = n(176354),
  f = n(201133),
  h = n(55000),
  p = n(314091),
  m = n(981631),
  I = n(689938);
let T = async e => {
  let {
reaction: t,
altText: n,
...r
  } = e, i = await A(r);
  (0, f.a)({
file: i,
altText: n,
user: r.user,
reaction: t
  });
}, g = async e => {
  let {
reply: t,
altText: n,
...r
  } = e, o = await A(r), s = await a.Z.openPrivateChannel(r.user.id, !1, !1), l = d.Z.getChannel(s);
  i()(null != l, 'Channel cannot be null'), (0, f.B)({
file: o,
altText: n,
channel: l,
reply: t
  });
}, S = e => {
  var t;
  let {
activity: r,
application: i,
user: a
  } = e, {
theme: o
  } = (0, p.j3)(a, 'black'), s = 'dark' === o, l = (0, p.ZH)(r), {
assets: u,
application_id: c
  } = r, d = (0, _.getAssetImage)(c, null == u ? void 0 : u.large_image, 64), f = null == i ? void 0 : i.getIconURL(64), h = null != l ? s ? l.icon.darkPNG : l.icon.lightPNG : r.type === m.IIU.PLAYING ? s ? n(414575) : n(807612) : null, I = r.type === m.IIU.HANG_STATUS && (null === (t = r.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, E.qc)({
id: r.emoji.id,
name: r.emoji.name,
animated: !1
  }) : null;
  return {
...null != h && {
  Platform: h
},
...null != d && {
  AssetImage: d.includes('http') ? d : n(869469)(d)
},
...null != f && {
  ApplicationImage: f
},
...null != I && {
  HangStatus: I
}
  };
}, A = async e => {
  let {
user: t,
activity: n,
application: r,
stream: i
  } = e, d = await a.Z.openPrivateChannel(t.id, !1, !1), _ = S({
activity: n,
application: r,
user: t
  });
  return await (0, c.f)({
assetsToLoad: _,
drawImage: e => {
  var r;
  e.setFont({
    truncate: u.GX.Truncate
  }), null != i ? y(e, n, t) : (0, l.Z)(n) ? O(e, n, t) : (0, s.Z)(n) && n.name === o.Z.get(m.ABu.LEAGUE_OF_LEGENDS).name ? C(e, n, t) : n.type === m.IIU.HANG_STATUS ? R(e, n, t) : v(e, n, t), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('Platform')) && e.drawImage('Platform', {
    x: h.En - h.o3 - h.ez,
    y: h.o3
  }, {
    w: h.ez,
    h: h.ez
  });
},
exportConfigs: {
  format: u.kH.CloudUpload,
  quality: 1,
  fileName: 'user-reacting-to-'.concat(n.name, '.png').toLowerCase(),
  fileType: 'png',
  channelId: d
}
  });
}, N = (e, t) => {
  e.setColor('dark' === t ? 'white' : 'black'), e.drawPath(h.Cv, {
x: h.o3,
y: h.o3
  }, !0, 2 + 2 / 3);
}, v = (e, t, n) => {
  var r, i, a;
  e.setSize({
w: h.En,
h: h.dI
  });
  let {
color: o,
theme: s
  } = (0, p.j3)(n, 'black');
  e.setColor(o), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage')) ? e.drawRoundedImage('AssetImage', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8) : (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('ApplicationImage')) ? e.drawRoundedImage('ApplicationImage', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8) : N(e, s);
  let l = h.vS + h.o3 + h.sB;
  e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'), e.setFont({
size: 16,
family: [
  'gg sans',
  'sans-serif'
],
weight: 700
  }), e.drawText(''.concat(t.name), {
x: l,
y: h.SG + 1 * h.Nv,
w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(h.W3.Platform)) ? h.ee : h.sp
  }, !0), null != t.timestamps && (e.setFont({
size: 14,
weight: 400
  }), e.drawText('for '.concat((0, p.b6)(t.timestamps)), {
x: l,
y: h.SG + 2 * h.Nv
  }, !0));
}, O = (e, t, n) => {
  var r, i;
  e.setSize({
w: h.En,
h: h.dI
  });
  let {
color: a,
theme: o
  } = (0, p.j3)(n, 'black');
  e.setColor(a), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), e.setColor('dark' === o ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage')) && e.drawRoundedImage('AssetImage', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8);
  let s = h.vS + h.o3 + h.sB;
  e.setColor('dark' === o ? 'white' : 'rgb(6, 6, 7)'), e.setFont({
size: 14,
family: [
  'gg sans',
  'sans-serif'
],
weight: 700
  }), e.drawText(''.concat(t.details), {
x: s,
y: h.SG + 1 * h.Nv,
w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(h.W3.Platform)) ? h.ee : h.sp
  }, !0), e.setFont({
size: 14,
weight: 400
  }), e.drawText('by '.concat(t.state), {
x: s,
y: h.SG + 2 * h.Nv
  }, !0);
}, R = (e, t, r) => {
  var i, a;
  e.setSize({
w: h.En,
h: h.dI
  });
  let {
color: o,
theme: s
  } = (0, p.j3)(r, 'black');
  e.setColor(o), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('HangStatus')) ? e.drawRoundedImage('HangStatus', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8) : N(e, s);
  let l = h.vS + h.o3 + h.sB;
  e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'), e.setFont({
size: 14,
family: [
  'gg sans',
  'sans-serif'
],
weight: 700
  }), e.drawText(I.Z.Messages.STATUS_LEAD_IN_JUST, {
x: l,
y: h.SG + 1 * h.Nv,
w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(h.W3.Platform)) ? h.ee : h.sp
  }, !0), e.setFont({
size: 14,
weight: 400
  });
  let u = '';
  u = (0, n(833858).O8)(t), e.drawText(u, {
x: l,
y: h.SG + 2 * h.Nv
  }, !0);
}, C = (e, t, n) => {
  var r;
  e.setSize({
w: h.En,
h: h.dI
  });
  let {
color: i,
theme: a
  } = (0, p.j3)(n, 'black');
  e.setColor(i), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), e.setColor('dark' === a ? 'white' : 'black'), e.drawRoundedImage('AssetImage', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8) === u.vP.Failure && e.drawPath(h.Cv, {
x: h.o3,
y: h.o3
  }, !0, 2 + 2 / 3);
  let o = h.vS + h.o3 + h.sB;
  e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'), e.setFont({
size: 14,
family: [
  'gg sans',
  'sans-serif'
],
weight: 700
  }), e.drawText(''.concat(t.details), {
x: o,
y: h.SG + 1 * h.Nv,
w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('Platform')) ? h.ee : h.sp
  }, !0), e.setFont({
size: 14,
weight: 400
  }), e.drawText(''.concat(t.state), {
x: o,
y: h.SG + 2 * h.Nv
  }, !0);
}, y = (e, t, n) => {
  var r, i, a;
  e.setSize({
w: h.En,
h: h.dI
  });
  let {
color: o,
theme: s
  } = (0, p.j3)(n, 'black');
  e.setColor(o), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'), e.drawRoundedRect({
x: 0,
y: 0,
h: h.dI,
w: h.En
  }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage')) ? e.drawRoundedImage('AssetImage', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8) : (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('ApplicationImage')) ? e.drawRoundedImage('ApplicationImage', {
x: h.o3,
y: h.o3
  }, {
w: h.vS,
h: h.vS
  }, 8) : N(e, s);
  let l = h.vS + h.o3 + h.sB;
  e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'), e.setFont({
size: 16,
family: [
  'gg sans',
  'sans-serif'
],
weight: 700
  }), e.drawText('Streaming '.concat(t.name), {
x: l,
y: h.SG + h.Nv * (null != t.timestamps ? 1 : 1.5),
w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(h.W3.Platform)) ? h.ee : h.sp
  }, !0), null != t.timestamps && (e.setFont({
size: 14,
weight: 500
  }), e.drawText('for '.concat((0, p.b6)(t.timestamps)), {
x: l,
y: h.SG + 2 * h.Nv
  }, !0));
};