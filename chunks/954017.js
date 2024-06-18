"use strict";
n.r(t), n.d(t, {
  sendReactionToActivity: function() {
    return N
  },
  sendReplyToActivity: function() {
    return A
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(493683),
  o = n(726542),
  a = n(122810),
  l = n(503438),
  u = n(693824),
  _ = n(690725),
  d = n(592125),
  c = n(81063),
  E = n(176354),
  I = n(201133),
  T = n(55e3),
  h = n(314091),
  S = n(981631),
  f = n(689938);
let N = async e => {
  let {
    reaction: t,
    altText: n,
    ...i
  } = e, r = await O(i);
  (0, I.a)({
    file: r,
    altText: n,
    user: i.user,
    reaction: t
  })
}, A = async e => {
  let {
    reply: t,
    altText: n,
    ...i
  } = e, o = await O(i), a = await s.Z.openPrivateChannel(i.user.id, !1, !1), l = d.Z.getChannel(a);
  r()(null != l, "Channel cannot be null"), (0, I.B)({
    file: o,
    altText: n,
    channel: l,
    reply: t
  })
}, m = e => {
  var t;
  let {
    activity: i,
    application: r,
    user: s
  } = e, {
    theme: o
  } = (0, h.j3)(s, "black"), a = "dark" === o, l = (0, h.ZH)(i), {
    assets: u,
    application_id: _
  } = i, d = (0, c.getAssetImage)(_, null == u ? void 0 : u.large_image, 64), I = null == r ? void 0 : r.getIconURL(64), T = null != l ? a ? l.icon.darkPNG : l.icon.lightPNG : i.type === S.IIU.PLAYING ? a ? n(414575) : n(807612) : null, f = i.type === S.IIU.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, E.qc)({
    id: i.emoji.id,
    name: i.emoji.name,
    animated: !1
  }) : null;
  return {
    ...null != T && {
      Platform: T
    },
    ...null != d && {
      AssetImage: d.includes("http") ? d : n(869469)(d)
    },
    ...null != I && {
      ApplicationImage: I
    },
    ...null != f && {
      HangStatus: f
    }
  }
}, O = async e => {
  let {
    user: t,
    activity: n,
    application: i,
    stream: r
  } = e, d = await s.Z.openPrivateChannel(t.id, !1, !1), c = m({
    activity: n,
    application: i,
    user: t
  });
  return await (0, _.f)({
    assetsToLoad: c,
    drawImage: e => {
      var i;
      e.setFont({
        truncate: u.GX.Truncate
      }), null != r ? v(e, n, t) : (0, l.Z)(n) ? p(e, n, t) : (0, a.Z)(n) && n.name === o.Z.get(S.ABu.LEAGUE_OF_LEGENDS).name ? L(e, n, t) : n.type === S.IIU.HANG_STATUS ? g(e, n, t) : C(e, n, t), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) && e.drawImage("Platform", {
        x: T.En - T.o3 - T.ez,
        y: T.o3
      }, {
        w: T.ez,
        h: T.ez
      })
    },
    exportConfigs: {
      format: u.kH.CloudUpload,
      quality: 1,
      fileName: "user-reacting-to-".concat(n.name, ".png").toLowerCase(),
      fileType: "png",
      channelId: d
    }
  })
}, R = (e, t) => {
  e.setColor("dark" === t ? "white" : "black"), e.drawPath(T.Cv, {
    x: T.o3,
    y: T.o3
  }, !0, 2 + 2 / 3)
}, C = (e, t, n) => {
  var i, r, s;
  e.setSize({
    w: T.En,
    h: T.dI
  });
  let {
    color: o,
    theme: a
  } = (0, h.j3)(n, "black");
  e.setColor(o), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8) : R(e, a);
  let l = T.vS + T.o3 + T.sB;
  e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
    size: 16,
    family: ["gg sans", "sans-serif"],
    weight: 700
  }), e.drawText("".concat(t.name), {
    x: l,
    y: T.SG + 1 * T.Nv,
    w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(T.W3.Platform)) ? T.ee : T.sp
  }, !0), null != t.timestamps && (e.setFont({
    size: 14,
    weight: 400
  }), e.drawText("for ".concat((0, h.b6)(t.timestamps)), {
    x: l,
    y: T.SG + 2 * T.Nv
  }, !0))
}, p = (e, t, n) => {
  var i, r;
  e.setSize({
    w: T.En,
    h: T.dI
  });
  let {
    color: s,
    theme: o
  } = (0, h.j3)(n, "black");
  e.setColor(s), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) && e.drawRoundedImage("AssetImage", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8);
  let a = T.vS + T.o3 + T.sB;
  e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
    size: 14,
    family: ["gg sans", "sans-serif"],
    weight: 700
  }), e.drawText("".concat(t.details), {
    x: a,
    y: T.SG + 1 * T.Nv,
    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(T.W3.Platform)) ? T.ee : T.sp
  }, !0), e.setFont({
    size: 14,
    weight: 400
  }), e.drawText("by ".concat(t.state), {
    x: a,
    y: T.SG + 2 * T.Nv
  }, !0)
}, g = (e, t, i) => {
  var r, s;
  e.setSize({
    w: T.En,
    h: T.dI
  });
  let {
    color: o,
    theme: a
  } = (0, h.j3)(i, "black");
  e.setColor(o), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("HangStatus")) ? e.drawRoundedImage("HangStatus", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8) : R(e, a);
  let l = T.vS + T.o3 + T.sB;
  e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
    size: 14,
    family: ["gg sans", "sans-serif"],
    weight: 700
  }), e.drawText(f.Z.Messages.STATUS_LEAD_IN_JUST, {
    x: l,
    y: T.SG + 1 * T.Nv,
    w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(T.W3.Platform)) ? T.ee : T.sp
  }, !0), e.setFont({
    size: 14,
    weight: 400
  });
  let u = "";
  u = (0, n(833858).O8)(t), e.drawText(u, {
    x: l,
    y: T.SG + 2 * T.Nv
  }, !0)
}, L = (e, t, n) => {
  var i;
  e.setSize({
    w: T.En,
    h: T.dI
  });
  let {
    color: r,
    theme: s
  } = (0, h.j3)(n, "black");
  e.setColor(r), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), e.setColor("dark" === s ? "white" : "black"), e.drawRoundedImage("AssetImage", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8) === u.vP.Failure && e.drawPath(T.Cv, {
    x: T.o3,
    y: T.o3
  }, !0, 2 + 2 / 3);
  let o = T.vS + T.o3 + T.sB;
  e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
    size: 14,
    family: ["gg sans", "sans-serif"],
    weight: 700
  }), e.drawText("".concat(t.details), {
    x: o,
    y: T.SG + 1 * T.Nv,
    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) ? T.ee : T.sp
  }, !0), e.setFont({
    size: 14,
    weight: 400
  }), e.drawText("".concat(t.state), {
    x: o,
    y: T.SG + 2 * T.Nv
  }, !0)
}, v = (e, t, n) => {
  var i, r, s;
  e.setSize({
    w: T.En,
    h: T.dI
  });
  let {
    color: o,
    theme: a
  } = (0, h.j3)(n, "black");
  e.setColor(o), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
    x: 0,
    y: 0,
    h: T.dI,
    w: T.En
  }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
    x: T.o3,
    y: T.o3
  }, {
    w: T.vS,
    h: T.vS
  }, 8) : R(e, a);
  let l = T.vS + T.o3 + T.sB;
  e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
    size: 16,
    family: ["gg sans", "sans-serif"],
    weight: 700
  }), e.drawText("Streaming ".concat(t.name), {
    x: l,
    y: T.SG + T.Nv * (null != t.timestamps ? 1 : 1.5),
    w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(T.W3.Platform)) ? T.ee : T.sp
  }, !0), null != t.timestamps && (e.setFont({
    size: 14,
    weight: 500
  }), e.drawText("for ".concat((0, h.b6)(t.timestamps)), {
    x: l,
    y: T.SG + 2 * T.Nv
  }, !0))
}