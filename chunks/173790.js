"use strict";
n.d(t, {
  Z: function() {
    return h
  }
}), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(218061),
  o = n(481060),
  a = n(127255),
  l = n(361213),
  u = n(778569),
  _ = n(783097),
  d = n(753972),
  c = n(387658),
  E = n(536650),
  I = n(675993),
  T = n(564446);

function h(e) {
  let {
    channel: t,
    application: n,
    sectionName: a
  } = e, l = (0, _.ye)({
    application: n
  });
  if (!(0, _.BQ)(n)) throw Error("AppLauncherApplicationViewScreen was passed the Built-in App, which is not supported.");
  let u = r.useRef(null);
  return (0, i.jsxs)(o.ScrollerNone, {
    className: T.container,
    fade: !0,
    ref: u,
    children: [(0, i.jsx)(E.Z, {
      application: n,
      scrollerRef: u
    }), (0, i.jsx)(d.Z, {
      application: n,
      className: T.appIcon,
      size: 80
    }), (0, i.jsx)(s.Z, {
      size: 54
    }), (0, i.jsx)(l ? S : f, {
      channel: t,
      application: n,
      sectionName: a
    }), (0, i.jsx)(c.Z, {
      channel: t,
      application: n,
      sectionName: a
    })]
  })
}

function S(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e, s = (0, a.Z)({
    guildId: t.getGuildId(),
    channel: t
  }).find(e => e.activity.application_id === n.id), o = (0, u.Z)({
    applicationId: n.id,
    size: 2048,
    names: ["embedded_cover"]
  }), _ = null != s && null != s.activity.activity_preview_video_asset_id ? (0, l.Z)(n.id, s.activity.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(I.Z, {
    channel: t,
    application: n,
    imageCoverUrl: o.url,
    videoUrl: _,
    sectionName: r
  })
}

function f(e) {
  let {
    channel: t,
    application: n,
    sectionName: r
  } = e;
  return (0, i.jsx)(I.Z, {
    channel: t,
    application: n,
    sectionName: r
  })
}