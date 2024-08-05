n.d(t, {
  Z: function() {
return F;
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
  c = n(841784),
  d = n(833664),
  _ = n(834353),
  E = n(802856),
  f = n(420660),
  h = n(100527),
  p = n(906732),
  m = n(314091),
  I = n(810568),
  T = n(168524),
  g = n(833858),
  S = n(223135),
  A = n(769654),
  N = n(914010),
  v = n(502762),
  O = n(652853),
  R = n(979038),
  C = n(448980),
  y = n(194811),
  D = n(60241),
  L = n(373826),
  b = n(315324),
  M = n(582123),
  P = n(290274),
  U = n(228168),
  w = n(981631),
  x = n(701488),
  G = n(689938),
  k = n(692184);
let {
  getAssetImage: B
} = n(81063);

function F(e) {
  var t;
  let {
user: n,
currentUser: i,
activity: F,
application: V,
guild: H,
channel: Z,
className: Y,
onAction: j,
onClose: W
  } = e, {
analyticsLocations: K
  } = (0, p.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), z = (0, o.e7)([N.Z], () => N.Z.getGuildId()), {
profileType: q
  } = (0, O.z)(), Q = {
[k.fullSize]: q === U.y0.FULL_SIZE
  }, X = (0, T.Z)({
location: 'UserProfileActivityCard',
applicationId: null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : F.application_id,
source: I.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  }), $ = (0, s.EQ)(F.type).with(w.IIU.PLAYING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).with(w.IIU.STREAMING, () => G.Z.Messages.USER_ACTIVITY_STREAMING).with(w.IIU.LISTENING, () => G.Z.Messages.USER_ACTIVITY_LISTENING_TO).with(w.IIU.WATCHING, () => G.Z.Messages.USER_ACTIVITY_WATCHING).with(w.IIU.HANG_STATUS, () => G.Z.Messages.USER_ACTIVITY_CURRENTLY).with(w.IIU.COMPETING, () => G.Z.Messages.USER_ACTIVITY_PLAYING).otherwise(() => null), J = () => {
var e, t, n, i;
if (F.type === w.IIU.HANG_STATUS)
  return (0, r.jsx)('div', {
    className: k.hangStatusIconBackground,
    children: (0, r.jsx)(S.Z, {
      hangStatusActivity: F,
      className: k.hangStatusIcon
    })
  });
let a = null === (e = F.assets) || void 0 === e ? void 0 : e.large_image,
  s = null === (t = F.assets) || void 0 === t ? void 0 : t.small_image,
  o = null === (n = F.assets) || void 0 === n ? void 0 : n.large_text,
  l = null === (i = F.assets) || void 0 === i ? void 0 : i.small_text;
if (null == a && null == s && (0, E.Z)(F)) {
  let e = u.Z.get(w.ABu.XBOX).icon.customPNG;
  return (0, r.jsx)(D.Z, {
    src: e,
    alt: G.Z.Messages.XBOX
  });
}
if (null == a && null == s && (0, _.Z)(F)) {
  let e = u.Z.get(w.ABu.PLAYSTATION).icon.customPNG;
  return (0, r.jsx)(D.Z, {
    src: e,
    alt: G.Z.Messages.PLAYSTATION
  });
}
return null == a && null != V ? (0, r.jsx)(D.Z, {
  src: e => V.getIconURL(e),
  alt: G.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({
    applicationName: V.name
  })
}) : null == a && null != s ? (0, r.jsx)(D.Z, {
  src: e => B(F.application_id, s, e),
  alt: l,
  tooltipText: l
}) : null != s && (0, d.Z)(F) ? (0, r.jsxs)('div', {
  className: k.imagePosition,
  children: [
    (0, r.jsx)(D.Z, {
      src: e => B(F.application_id, a, e),
      alt: o,
      tooltipText: o
    }),
    (0, r.jsx)(D.Z, {
      src: e => B(F.application_id, s, e),
      size: 'small',
      alt: l,
      tooltipText: l
    })
  ]
}) : (0, r.jsx)(D.Z, {
  src: e => B(F.application_id, a, e),
  alt: o,
  tooltipText: o
});
  }, ee = () => {
var e;
return F.type === w.IIU.HANG_STATUS ? (0, r.jsx)(L.Z, {
  variant: 'heading-sm/semibold',
  text: (0, g.O8)(F)
}) : (0, f.Z)(F) && null != Z ? (0, r.jsxs)('div', {
  className: k.voiceChannelInfo,
  children: [
    (0, r.jsx)(l.VoiceNormalIcon, {
      size: 'xxs',
      color: l.tokens.colors.TEXT_NORMAL
    }),
    (0, r.jsx)(L.Z, {
      variant: 'heading-sm/semibold',
      text: Z.name
    })
  ]
}) : (0, d.Z)(F) ? (0, r.jsx)(L.Z, {
  variant: 'heading-sm/semibold',
  text: F.name
}) : (0, r.jsx)(L.Z, {
  variant: 'heading-sm/semibold',
  text: null !== (e = F.details) && void 0 !== e ? e : F.name
});
  }, et = () => F.type === w.IIU.HANG_STATUS ? null : (0, f.Z)(F) && null != H ? (0, r.jsx)(L.Z, {
variant: 'text-xs/normal',
text: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
  guildName: H.name
}),
onClick: H.id === z ? void 0 : () => {
  (0, A.X)(H.id), null == W || W();
}
  }) : (0, d.Z)(F) ? (0, r.jsx)(L.Z, {
variant: 'text-xs/normal',
text: F.details
  }) : (0, r.jsx)(L.Z, {
text: F.state,
variant: 'text-xs/normal'
  }), en = () => {
var e;
return F.type === w.IIU.WATCHING ? null : (0, d.Z)(F) ? er() : (0, r.jsx)(L.Z, {
  text: null === (e = F.assets) || void 0 === e ? void 0 : e.large_text,
  variant: 'text-xs/normal'
});
  }, er = () => {
var e, t, n, i;
return (null === (e = F.party) || void 0 === e ? void 0 : e.size) == null && F.application_id === x.Zc ? (0, r.jsxs)('div', {
  className: k.gameState,
  children: [
    (0, r.jsx)(L.Z, {
      variant: 'text-xs/normal',
      text: F.state
    }),
    (0, r.jsx)(L.Z, {
      variant: 'text-xs/normal',
      text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: '0',
        max: null !== (i = null == V ? void 0 : V.getMaxParticipants()) && void 0 !== i ? i : 0
      })
    })
  ]
}) : (0, c.Z)(F) && (null === (t = F.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = F.party) || void 0 === n ? void 0 : n.size.length) >= 2 ? (0, r.jsxs)('div', {
  className: k.gameState,
  children: [
    (0, r.jsx)(L.Z, {
      variant: 'text-xs/normal',
      text: F.state
    }),
    (0, r.jsx)(L.Z, {
      variant: 'text-xs/normal',
      text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
        count: F.party.size[0],
        max: F.party.size[1]
      })
    })
  ]
}) : null == F.party ? (0, r.jsx)(L.Z, {
  variant: 'text-xs/normal',
  text: F.state
}) : null;
  }, ei = () => null == X ? (0, r.jsxs)('div', {
className: k.details,
children: [
  (0, r.jsxs)('div', {
    children: [
      ee(),
      et(),
      en()
    ]
  }),
  (0, r.jsx)(C.Z, {
    user: n,
    activity: F,
    className: k.badges
  })
]
  }) : (0, r.jsxs)('div', {
className: k.details,
children: [
  (0, r.jsxs)(l.Clickable, {
    className: k.clickable,
    onClick: () => {
      X(), null == W || W();
    },
    children: [
      ee(),
      et(),
      en()
    ]
  }),
  (0, r.jsx)(C.Z, {
    user: n,
    activity: F,
    className: k.badges
  })
]
  }), ea = () => null == H || null == Z ? null : (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)('div', {
    className: k.voiceChannelDivider
  }),
  (0, r.jsx)(b.Z, {
    user: n,
    guild: H,
    channel: Z,
    onClose: W
  })
]
  }), es = () => n.id === i.id ? null : (0, r.jsx)('div', {
className: a()(k.actions, Q),
children: (0, r.jsx)(R.Z, {
  activity: F,
  user: n,
  currentUser: i,
  onAction: j,
  onClose: W
})
  });
  return (0, r.jsx)(p.Gt, {
value: K,
children: (0, r.jsx)(M.Z, {
  user: n,
  onClose: W,
  children: e => {
    let {
      onAutoDismiss: t
    } = e;
    return (0, r.jsxs)(v.Z.Overlay, {
      className: a()(k.card, Y),
      children: [
        (0, r.jsx)(y.Z, {
          text: $,
          platform: (0, m.ZH)(F),
          tags: (0, r.jsx)(P.Z, {
            display: 'live',
            user: n,
            activity: F,
            onRequestOpen: t
          })
        }),
        (0, r.jsxs)('div', {
          className: k.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(k.content, Q),
              children: [
                J(),
                ei(),
                q === U.y0.FULL_SIZE && es()
              ]
            }),
            ea()
          ]
        }),
        q !== U.y0.FULL_SIZE && es()
      ]
    });
  }
})
  });
}