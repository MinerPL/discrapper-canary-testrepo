n.d(t, {
  M: function() {
return Z;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(704215),
  r = n(481060),
  o = n(2052),
  c = n(40851),
  d = n(317381),
  u = n(683921),
  h = n(588580),
  p = n(374065),
  m = n(451576),
  _ = n(526846),
  f = n(938655),
  E = n(403404),
  C = n(906732),
  g = n(424602),
  I = n(243778),
  x = n(579185),
  T = n(301076),
  v = n(981631),
  N = n(921944),
  S = n(269794);

function Z(e) {
  let {
channel: t
  } = e, n = (0, l.e7)([d.ZP], () => d.ZP.isLaunchingActivity()), Z = (0, p.KF)(t.id), A = (0, p.g5)(Z), M = Z !== p.jy.CAN_LAUNCH || n, {
isHovered: b,
setIsHovered: R,
onMouseEnter: j,
onMouseLeave: L
  } = (0, x.Z)(200, 300), P = (0, h.a)(), O = (0, u.Z)({
channelId: t.id
  }), y = !M, D = a.useCallback(e => {
'focus' !== e.type && j();
  }, [j]), k = (0, o.O)(), U = (0, c.bp)() === v.IlC.POPOUT, {
analyticsLocations: w
  } = (0, C.ZP)(), B = w.length > 0 ? w[w.length - 1] : 'open-activity-shelf';
  g.m1.useExperiment({
location: B
  }, {
autoTrackExposure: !0
  });
  let H = a.useCallback(() => {
  (0, E.Z)({
    channel: t,
    guildId: t.guild_id,
    locationObject: k.location,
    openInPopout: U,
    analyticsLocations: w,
    opensAppLauncherModal: !0
  });
}, [
  k.location,
  w,
  t,
  U
]),
G = [];
  return !M && G.push(s.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.Z)(t.id) && !M && G.push(s.z.ACTIVITY_GDM_ROCKET_SPARKLE), (0, i.jsx)(I.Z, {
contentTypes: G,
children: e => {
  let {
    visibleContent: n,
    markAsDismissed: a
  } = e;
  return (0, i.jsx)(r.Popout, {
    fixed: !0,
    shouldShow: b,
    animationPosition: 'bottom',
    position: 'bottom',
    align: 'center',
    spacing: 16,
    onRequestClose: () => {
      R(!1);
    },
    renderPopout: e => {
      let {
        closePopout: n,
        setPopoutRef: l
      } = e;
      return y ? (0, i.jsx)(_.m, {
        ref: l,
        channel: t,
        closePopout: n,
        onMouseEnter: j,
        onMouseLeave: L,
        isHovered: b,
        onClick: () => a(N.L.UNKNOWN)
      }) : (0, i.jsx)(i.Fragment, {});
    },
    children: () => (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(T.Z, {
          disabled: M,
          'aria-label': A,
          label: y ? void 0 : A,
          isActivityActive: O || b,
          className: S.controlButton,
          onClick: () => {
            H(), (n === s.z.ACTIVITIES_MINI_SHELF_SPARKLES || n === s.z.ACTIVITY_GDM_ROCKET_SPARKLE || n === s.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === s.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && a(N.L.UNKNOWN);
          },
          onMouseEnter: D,
          onMouseLeave: L
        }),
        P ? (0, i.jsx)(f.A, {
          top: 4,
          right: 10,
          size: 12,
          maskColor: f.T.BLACK
        }) : null
      ]
    })
  });
}
  });
}