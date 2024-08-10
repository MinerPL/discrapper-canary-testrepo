n.d(t, {
  Z: function() {
return B;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(287734),
  u = n(872810),
  c = n(110924),
  d = n(100527),
  _ = n(906732),
  E = n(194082),
  f = n(318374),
  h = n(382182),
  p = n(769654),
  m = n(543882),
  I = n(592125),
  T = n(430824),
  g = n(496675),
  S = n(914010),
  A = n(938475),
  N = n(502762),
  v = n(652853),
  O = n(194811),
  R = n(373826),
  C = n(315324),
  y = n(582123),
  D = n(648926),
  L = n(290274),
  b = n(318134),
  M = n(228168),
  P = n(981631),
  U = n(689938),
  w = n(692184),
  x = n(744171),
  G = n(924482),
  k = n(774797);

function B(e) {
  let {
user: t,
currentUser: n,
stream: i,
className: B,
onClose: F
  } = e, {
profileType: V,
theme: H
  } = (0, v.z)(), Z = {
[x.fullSize]: V === M.y0.FULL_SIZE,
[w.fullSize]: V === M.y0.FULL_SIZE
  }, {
analyticsLocations: Y
  } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
onAction: j,
trackViewRef: W
  } = (0, b.Z)({
display: 'live',
user: t,
stream: i,
analyticsLocations: Y
  }), K = (0, s.e7)([S.Z], () => S.Z.getGuildId()), z = (0, s.e7)([T.Z], () => T.Z.getGuild(null == i ? void 0 : i.guildId)), q = (0, s.e7)([I.Z], () => I.Z.getChannel(null == i ? void 0 : i.channelId)), Q = (0, s.Wu)([A.ZP], () => null != q ? A.ZP.getVoiceStatesForChannel(q).map(e => {
let {
  user: t
} = e;
return t;
  }) : []), [X, $] = (0, h.wq)(q), {
url: J,
isLoading: ee,
canSeePreview: et
  } = (0, s.cj)([
g.Z,
m.Z
  ], () => {
let e = null != q && g.Z.canBasicChannel(P.S7T.CONNECT, q);
return e ? {
  url: m.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
  isLoading: m.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
  canSeePreview: e
} : {
  url: null,
  isLoading: !1,
  canSeePreview: e
};
  }), en = (0, c.Z)(ee ? null : J), er = ee || null == J ? en : J;
  if (null == z || null == q)
return null;
  let ei = () => {
  let e = a()(x.preview, Z),
    t = () => {
      j({
        action: 'PRESS_STREAM_IMAGE'
      }), l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == F || F();
    };
  return null == er && ee ? (0, r.jsx)('div', {
    className: e,
    children: (0, r.jsx)(o.Spinner, {})
  }) : null == er ? (0, r.jsxs)(o.Clickable, {
    className: a()(e, {
      [x.clickable]: X
    }),
    onClick: X ? t : void 0,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        src: H === P.BRd.LIGHT ? k : G
      }),
      V !== M.y0.FULL_SIZE && (0, r.jsx)(o.Text, {
        variant: 'text-xs/normal',
        children: et ? U.Z.Messages.STREAM_NO_PREVIEW : U.Z.Messages.STREAM_NO_PERMISSION_CTA
      })
    ]
  }) : (0, r.jsxs)(o.Clickable, {
    className: a()(e, x.overlay, {
      [x.clickable]: X
    }),
    onClick: X ? t : void 0,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        src: er,
        className: x.image
      }),
      V === M.y0.BITE_SIZE && (0, r.jsx)(o.ClydeIcon, {
        size: 'xs',
        color: 'currentColor',
        className: x.clyde
      })
    ]
  });
},
ea = () => V !== M.y0.FULL_SIZE ? null : (0, r.jsxs)('div', {
  className: w.details,
  children: [
    (0, r.jsxs)('div', {
      children: [
        (0, r.jsxs)('div', {
          className: w.voiceChannelInfo,
          children: [
            (0, r.jsx)(o.VoiceNormalIcon, {
              size: 'xxs',
              color: o.tokens.colors.TEXT_NORMAL
            }),
            (0, r.jsx)(R.Z, {
              variant: 'heading-sm/semibold',
              text: q.name
            })
          ]
        }),
        (0, r.jsx)(R.Z, {
          variant: 'text-xs/normal',
          text: U.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
            guildName: z.name
          }),
          onClick: z.id === K ? void 0 : () => {
            (0, p.X)(z.id), j({
              action: 'OPEN_VOICE_CHANNEL'
            }), null == F || F();
          }
        })
      ]
    }),
    (0, r.jsx)(f.Z, {
      users: Q,
      guildId: z.id,
      channelId: q.id,
      maxUsers: C.W,
      size: o.AvatarSizes.SIZE_16,
      disableUsernameTooltip: !0,
      disableUserPopout: e => e === t.id,
      overflowCountVariant: 'text-xxs/semibold',
      overflowCountColor: 'text-muted'
    })
  ]
}),
es = () => V === M.y0.FULL_SIZE ? null : (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: w.voiceChannelDivider
    }),
    (0, r.jsx)(C.Z, {
      user: t,
      guild: z,
      channel: q,
      onAction: j,
      onClose: F
    })
  ]
}),
eo = () => t.id === n.id ? null : (0, r.jsx)('div', {
  className: a()(w.actions, Z),
  children: (0, r.jsx)(D.Z, {
    stream: i,
    canWatch: X,
    unavailableReason: $,
    onAction: j,
    onClose: F
  })
});
  return (0, r.jsx)(_.Gt, {
value: Y,
children: (0, r.jsx)(y.Z, {
  user: t,
  onClose: F,
  children: e => {
    let {
      onAutoDismiss: n
    } = e;
    return (0, r.jsxs)(N.Z.Overlay, {
      className: a()(w.card, B),
      ref: W,
      children: [
        (0, r.jsx)(O.Z, {
          text: U.Z.Messages.USER_ACTIVITY_STREAMING,
          tags: (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(E.ZP, {
                size: E.OH.SMALL
              }),
              (0, r.jsx)(L.Z, {
                display: 'live',
                user: t,
                onClose: F,
                onRequestOpen: n
              })
            ]
          })
        }),
        (0, r.jsxs)('div', {
          className: w.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(w.content, Z),
              children: [
                ei(),
                ea(),
                V === M.y0.FULL_SIZE && eo()
              ]
            }),
            es()
          ]
        }),
        V !== M.y0.FULL_SIZE && eo()
      ]
    });
  }
})
  });
}