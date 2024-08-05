n.d(t, {
  JS: function() {
return i;
  },
  Qv: function() {
return A;
  },
  ZP: function() {
return E;
  },
  w1: function() {
return w;
  }
}), n(757143);
var i, l, r = n(442837),
  a = n(911969),
  o = n(906732),
  u = n(835473),
  c = n(592125),
  d = n(358085),
  s = n(317381),
  p = n(638880),
  f = n(146936),
  v = n(619915),
  h = n(761122),
  Z = n(361213),
  _ = n(716600),
  m = n(952561),
  g = n(778569),
  I = n(701488);
(l = i || (i = {}))[l.START = 0] = 'START', l[l.JOIN = 1] = 'JOIN', l[l.LEAVE = 2] = 'LEAVE';

function E(e) {
  let {
activityItem: t,
channel: n,
guildId: i,
locationObject: l,
onActivityItemSelected: r,
embeddedActivitiesManager: o,
assetNames: u = ['embedded_cover'],
backgroundResolution: c = 250
  } = e, {
application: s,
activity: p
  } = t, f = p.client_platform_config[(0, h.Z)((0, d.getOS)())], _ = null != f.label_until && Date.now() < Date.parse(f.label_until), m = (0, g.Z)({
applicationId: s.id,
size: c,
names: u
  }), E = null != p.activity_preview_video_asset_id ? (0, Z.Z)(s.id, p.activity_preview_video_asset_id) : null, b = (0, v.ZP)(n).find(e => {
let {
  embeddedActivity: t
} = e;
return s.id === t.applicationId;
  }), y = A({
channelId: null == n ? void 0 : n.id,
applicationId: s.id
  }), C = w({
applicationId: t.application.id,
channelId: null == n ? void 0 : n.id,
guildId: i,
locationObject: l,
embeddedActivitiesManager: o,
onActivityItemSelectedProp: r
  }), S = t.activity.client_platform_config[(0, h.Z)((0, d.getOS)())].release_phase, T = I.eB.includes(S) ? S.replace('_', ' ').replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
imageBackground: m,
videoUrl: E,
joinableEmbeddedApp: b,
activityAction: y,
onActivityItemSelected: C,
labelType: _ ? f.label_type : a.ww.NONE,
staffReleasePhase: T
  };
}

function A(e) {
  let {
channelId: t,
applicationId: n
  } = e, i = 0, l = (0, r.e7)([c.Z], () => c.Z.getChannel(t)), a = (0, _.Z)(), o = (0, m.Z)(), d = (0, u.q)(n), s = (0, v.ZP)(l).find(e => {
let {
  embeddedActivity: t
} = e;
return null != d && d.id === t.applicationId;
  });
  return null == d ? i : (null != l && (null == a ? void 0 : a.channelId) === l.id && (null == o ? void 0 : o.id) === d.id ? i = 2 : null != s && (i = 1), i);
}

function w(e) {
  let {
applicationId: t,
channelId: n,
guildId: i,
locationObject: l,
embeddedActivitiesManager: r,
onActivityItemSelectedProp: a
  } = e, u = A({
channelId: n,
applicationId: t
  }), c = (0, m.Z)(), {
analyticsLocations: d
  } = (0, o.ZP)();
  switch (u) {
case 0:
  return () => {
    (0, f.Z)({
      targetApplicationId: t,
      currentEmbeddedApplication: c,
      locationObject: l,
      guildId: i,
      channelId: n,
      embeddedActivitiesManager: r,
      analyticsLocations: d
    }).then(e => e && (null == a ? void 0 : a({
      applicationId: t
    })));
  };
case 1:
  return () => {
    !s.ZP.isLaunchingActivity() && (0, p.Z)({
      applicationId: t,
      currentEmbeddedApplication: c,
      activityChannelId: n,
      locationObject: l,
      embeddedActivitiesManager: r,
      analyticsLocations: d
    }).then(e => e && (null == a ? void 0 : a({
      applicationId: t
    })));
  };
case 2:
  return () => {
    !s.ZP.isLaunchingActivity() && (null != n && r.leaveActivity({
      channelId: n,
      applicationId: t
    }), null == a || a({
      applicationId: t
    }));
  };
  }
}