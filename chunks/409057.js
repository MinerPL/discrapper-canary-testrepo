n.d(t, {
  Z: function() {
return Y;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(278074),
  o = n(442837),
  l = n(481060),
  u = n(726542),
  c = n(394821),
  d = n(841784),
  _ = n(833664),
  E = n(834353),
  f = n(802856),
  h = n(420660),
  p = n(100527),
  m = n(906732),
  I = n(314091),
  T = n(180335),
  g = n(810568),
  S = n(168524),
  A = n(833858),
  N = n(223135),
  v = n(769654),
  O = n(914010),
  R = n(502762),
  C = n(652853),
  y = n(979038),
  D = n(448980),
  L = n(194811),
  b = n(60241),
  M = n(373826),
  P = n(315324),
  U = n(582123),
  w = n(290274),
  x = n(553375),
  G = n(318134),
  k = n(228168),
  B = n(981631),
  F = n(701488),
  V = n(689938),
  H = n(692184);
let {
  getAssetImage: Z
} = n(81063);

function Y(e) {
  let {
user: t,
currentUser: n,
activity: i,
application: Y,
guild: j,
channel: W,
className: K,
onClose: z
  } = e, {
analyticsLocations: q
  } = (0, m.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), Q = (0, o.e7)([O.Z], () => O.Z.getGuildId()), {
profileType: X
  } = (0, C.z)(), $ = {
[H.fullSize]: X === k.y0.FULL_SIZE
  }, J = (0, T.Bq)({
activity: i,
user: t
  }), ee = (0, S.Z)({
location: 'UserProfileActivityCard',
source: g.m1.UserProfile,
trackEntryPointImpression: !0,
...(0, x.n)({
  user: t,
  activity: i,
  entry: J
})
  }), {
onAction: et,
trackViewRef: en
  } = (0, G.Z)({
display: 'live',
user: t,
activity: i,
entry: J,
analyticsLocations: q
  }), er = (0, s.EQ)(i.type).with(B.IIU.PLAYING, () => V.Z.Messages.USER_ACTIVITY_PLAYING).with(B.IIU.STREAMING, () => V.Z.Messages.USER_ACTIVITY_STREAMING).with(B.IIU.LISTENING, () => V.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(B.IIU.WATCHING, () => V.Z.Messages.USER_ACTIVITY_WATCHING).with(B.IIU.HANG_STATUS, () => V.Z.Messages.USER_ACTIVITY_CURRENTLY).with(B.IIU.COMPETING, () => V.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null), ei = () => {
var e, t, n, a;
let s = (0, c.Z)(i) ? 'crunchyroll' : 'default';
if (i.type === B.IIU.HANG_STATUS)
  return (0, r.jsx)('div', {
    className: H.hangStatusIconBackground,
    children: (0, r.jsx)(N.Z, {
      hangStatusActivity: i,
      className: H.hangStatusIcon
    })
  });
if ((0, d.Z)(i) && null != Y)
  return (0, r.jsx)(b.ZP, {
    image: {
      src: Y.getIconURL(b.WQ),
      alt: V.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
        applicationName: Y.name
      })
    }
  });
let o = null === (e = i.assets) || void 0 === e ? void 0 : e.large_image,
  l = null === (t = i.assets) || void 0 === t ? void 0 : t.small_image,
  h = null === (n = i.assets) || void 0 === n ? void 0 : n.large_text,
  p = null === (a = i.assets) || void 0 === a ? void 0 : a.small_text,
  m = null == ee ? void 0 : () => {
    et({
      action: 'PRESS_GAME_IMAGE'
    }), ee();
  };
if (null == o && null == l && (0, f.Z)(i)) {
  let e = u.Z.get(B.ABu.XBOX).icon.customPNG;
  return (0, r.jsx)(b.ZP, {
    image: {
      src: e,
      alt: V.Z.Messages.XBOX
    },
    onClick: m
  });
}
if (null == o && null == l && (0, E.Z)(i)) {
  let e = u.Z.get(B.ABu.PLAYSTATION).icon.customPNG;
  return (0, r.jsx)(b.ZP, {
    image: {
      src: e,
      alt: V.Z.Messages.PLAYSTATION
    },
    onClick: m
  });
}
return null == o && null != Y ? (0, r.jsx)(b.ZP, {
  image: {
    src: Y.getIconURL(b.WQ),
    alt: V.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
      applicationName: Y.name
    })
  },
  onClick: m,
  aspectRatio: s
}) : null == o && null != l ? (0, r.jsx)(b.ZP, {
  image: {
    src: Z(i.application_id, l, b.WQ),
    text: p
  },
  onClick: m,
  aspectRatio: s
}) : null != l && (0, _.Z)(i) ? (0, r.jsx)(b.ZP, {
  image: {
    src: Z(i.application_id, o, b.WQ),
    text: h
  },
  richImage: {
    src: Z(i.application_id, l, b.Bp),
    text: p
  },
  onClick: m
}) : (0, r.jsx)(b.ZP, {
  image: {
    src: Z(i.application_id, o, b.WQ),
    text: h
  },
  onClick: m,
  aspectRatio: s
});
  }, ea = () => {
var e;
return i.type === B.IIU.HANG_STATUS ? (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: (0, A.O8)(i)
}) : (0, h.Z)(i) && null != W ? (0, r.jsxs)('div', {
  className: H.voiceChannelInfo,
  children: [
    (0, r.jsx)(l.VoiceNormalIcon, {
      size: 'xxs',
      color: l.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(M.Z, {
      variant: 'heading-sm/semibold',
      text: W.name
    })
  ]
}) : (0, _.Z)(i) ? (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: i.name
}) : (0, r.jsx)(M.Z, {
  variant: 'heading-sm/semibold',
  text: null !== (e = i.details) && void 0 !== e ? e : i.name
});
  }, es = () => i.type === B.IIU.HANG_STATUS ? null : (0, h.Z)(i) && null != j ? (0, r.jsx)(M.Z, {
variant: 'text-xs/normal',
text: V.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
  guildName: j.name
}),
onClick: j.id === Q ? void 0 : () => {
  et({
    action: 'OPEN_VOICE_CHANNEL'
  }), (0, v.X)(j.id), null == z || z();
}
  }) : (0, _.Z)(i) ? (0, r.jsx)(M.Z, {
variant: 'text-xs/normal',
text: i.details
  }) : (0, r.jsx)(M.Z, {
text: i.state,
variant: 'text-xs/normal'
  }), eo = () => {
var e;
return i.type === B.IIU.WATCHING ? null : (0, _.Z)(i) ? el() : (0, r.jsx)(M.Z, {
  text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
  variant: 'text-xs/normal'
});
  }, el = () => {
var e, t, n, a;
return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === F.Zc ? (0, r.jsxs)('div', {
  className: H.gameState,
  children: [
    (0, r.jsx)(M.Z, {
      variant: 'text-xs/normal',
      text: i.state
    }),
    (0, r.jsx)(M.Z, {
      variant: 'text-xs/normal',
      text: V.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: '0',
        max: null !== (a = null == Y ? void 0 : Y.getMaxParticipants()) && void 0 !== a ? a : 0
      })
    })
  ]
}) : (0, d.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
  className: H.gameState,
  children: [
    (0, r.jsx)(M.Z, {
      variant: 'text-xs/normal',
      text: i.state
    }),
    (0, r.jsx)(M.Z, {
      variant: 'text-xs/normal',
      text: V.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: i.party.size[0],
        max: i.party.size[1]
      })
    })
  ]
}) : null == i.party ? (0, r.jsx)(M.Z, {
  variant: 'text-xs/normal',
  text: i.state
}) : null;
  }, eu = () => null == ee ? (0, r.jsxs)('div', {
className: H.details,
children: [
  (0, r.jsxs)('div', {
    children: [
      ea(),
      es(),
      eo()
    ]
  }),
  (0, r.jsx)(D.Z, {
    user: t,
    activity: i,
    className: H.badges
  })
]
  }) : (0, r.jsxs)('div', {
className: H.details,
children: [
  (0, r.jsxs)(l.Clickable, {
    className: H.clickable,
    onClick: () => {
      et({
        action: 'OPEN_GAME_PROFILE'
      }), ee(), null == z || z();
    },
    children: [
      ea(),
      es(),
      eo()
    ]
  }),
  (0, r.jsx)(D.Z, {
    user: t,
    activity: i,
    className: H.badges
  })
]
  }), ec = () => null == j || null == W ? null : (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)('div', {
    className: H.voiceChannelDivider
  }),
  (0, r.jsx)(P.Z, {
    user: t,
    guild: j,
    channel: W,
    onAction: et,
    onClose: z
  })
]
  }), ed = () => t.id === n.id ? null : (0, r.jsx)('div', {
className: a()(H.actions, $),
children: (0, r.jsx)(y.Z, {
  activity: i,
  user: t,
  currentUser: n,
  onAction: et,
  onClose: z
})
  });
  return (0, r.jsx)(m.Gt, {
value: q,
children: (0, r.jsx)(U.Z, {
  user: t,
  onClose: z,
  children: e => {
    let {
      onAutoDismiss: n
    } = e;
    return (0, r.jsxs)(R.Z.Overlay, {
      className: a()(H.card, K),
      ref: en,
      children: [
        (0, r.jsx)(L.Z, {
          text: er,
          platform: (0, I.ZH)(i),
          tags: (0, r.jsx)(w.Z, {
            display: 'live',
            user: t,
            activity: i,
            entry: J,
            onClose: z,
            onRequestOpen: n
          })
        }),
        (0, r.jsxs)('div', {
          className: H.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(H.content, $),
              children: [
                ei(),
                eu(),
                X === k.y0.FULL_SIZE && ed()
              ]
            }),
            ec()
          ]
        }),
        X !== k.y0.FULL_SIZE && ed()
      ]
    });
  }
})
  });
}