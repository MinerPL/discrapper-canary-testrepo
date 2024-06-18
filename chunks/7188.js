"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(158631),
  l = n(709369),
  u = n(544384),
  _ = n(76021),
  d = n(592125),
  c = n(594174),
  E = n(937482),
  I = n(834348),
  T = n(806519),
  h = n(74538),
  S = n(618158),
  f = n(871499),
  N = n(981631),
  A = n(474936),
  m = n(689938),
  O = n(726425);

function R(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)(E.Z, {
    className: t
  })
}

function C(e) {
  let {
    className: t
  } = e;
  return (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(T.ZP, {
      className: t,
      mask: T.ZP.Masks.HEADER_BAR_BADGE,
      children: (0, i.jsx)(R, {})
    }), (0, i.jsx)(I.Z, {
      className: O.badgeUpgrade
    })]
  })
}

function p(e) {
  let {
    hideBadges: t = !1,
    stream: n,
    ...E
  } = e, I = (0, s.e7)([c.default], () => h.ZP.isPremium(c.default.getCurrentUser(), A.p9.TIER_1)), T = (0, s.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channelId)), O = r.useMemo(() => null != n ? [n] : [], [n]), p = (0, a.zW)(null == T ? void 0 : T.id), g = r.useCallback(() => {
    null != T && (0, _.Z)(T.getGuildId(), T.id, N.jXE.STREAM_SETTINGS)
  }, [T]);
  if (null == n || null == T) return null;
  let L = R;
  return !t && !I && (L = C), (0, i.jsx)(o.Popout, {
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(S.Z, {
        children: p ? (0, i.jsx)(l.Z, {
          onClose: t
        }) : (0, i.jsx)(u.Z, {
          channel: T,
          currentUser: c.default.getCurrentUser(),
          activeStreams: O,
          onClose: t,
          showReportOption: !0,
          handleGoLive: g
        })
      })
    },
    animation: o.Popout.Animation.FADE,
    children: e => (0, i.jsx)(f.Z, {
      ...e,
      label: m.Z.Messages.STREAMER_SETTINGS_TITLE,
      iconComponent: L,
      ...E
    })
  })
}