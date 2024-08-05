n.d(t, {
  Z: function() {
return k;
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
  E = n(318374),
  f = n(382182),
  h = n(769654),
  p = n(543882),
  m = n(592125),
  I = n(430824),
  T = n(496675),
  g = n(914010),
  S = n(938475),
  A = n(368666),
  N = n(502762),
  v = n(652853),
  O = n(194811),
  R = n(373826),
  C = n(315324),
  y = n(582123),
  D = n(648926),
  L = n(290274),
  b = n(228168),
  M = n(981631),
  P = n(689938),
  U = n(692184),
  w = n(744171),
  x = n(924482),
  G = n(774797);

function k(e) {
  let {
user: t,
currentUser: n,
stream: i,
className: k,
onAction: B,
onClose: F
  } = e, {
analyticsLocations: V
  } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
profileType: H,
theme: Z
  } = (0, v.z)(), Y = {
[w.fullSize]: H === b.y0.FULL_SIZE,
[U.fullSize]: H === b.y0.FULL_SIZE
  }, j = (0, s.e7)([g.Z], () => g.Z.getGuildId()), W = (0, s.e7)([I.Z], () => I.Z.getGuild(null == i ? void 0 : i.guildId)), K = (0, s.e7)([m.Z], () => m.Z.getChannel(null == i ? void 0 : i.channelId)), z = (0, s.Wu)([S.ZP], () => null != K ? S.ZP.getVoiceStatesForChannel(K).map(e => {
let {
  user: t
} = e;
return t;
  }) : []), [q, Q] = (0, f.wq)(K), {
url: X,
isLoading: $,
canSeePreview: J
  } = (0, s.cj)([
T.Z,
p.Z
  ], () => {
let e = null != K && T.Z.canBasicChannel(M.S7T.CONNECT, K);
return e ? {
  url: p.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
  isLoading: p.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
  canSeePreview: e
} : {
  url: null,
  isLoading: !1,
  canSeePreview: e
};
  }), ee = (0, c.Z)($ ? null : X), et = $ || null == X ? ee : X;
  if (null == W || null == K)
return null;
  let en = () => {
  let e = a()(w.preview, Y),
    t = () => {
      l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == F || F();
    };
  return null == et && $ ? (0, r.jsx)('div', {
    className: e,
    children: (0, r.jsx)(o.Spinner, {})
  }) : null == et ? (0, r.jsxs)(o.Clickable, {
    className: a()(e, {
      [w.clickable]: q
    }),
    onClick: q ? t : void 0,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        src: Z === M.BRd.LIGHT ? G : x
      }),
      H !== b.y0.FULL_SIZE && (0, r.jsx)(o.Text, {
        variant: 'text-xs/normal',
        children: J ? P.Z.Messages.STREAM_NO_PREVIEW : P.Z.Messages.STREAM_NO_PERMISSION_CTA
      })
    ]
  }) : (0, r.jsxs)(o.Clickable, {
    className: a()(e, w.overlay, {
      [w.clickable]: q
    }),
    onClick: q ? t : void 0,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        src: et,
        className: w.image
      }),
      H === b.y0.BITE_SIZE && (0, r.jsx)(o.ClydeIcon, {
        size: 'xs',
        color: 'currentColor',
        className: w.clyde
      })
    ]
  });
},
er = () => H !== b.y0.FULL_SIZE ? null : (0, r.jsxs)('div', {
  className: U.details,
  children: [
    (0, r.jsxs)('div', {
      children: [
        (0, r.jsxs)('div', {
          className: U.voiceChannelInfo,
          children: [
            (0, r.jsx)(o.VoiceNormalIcon, {
              size: 'xxs',
              color: o.tokens.colors.TEXT_NORMAL
            }),
            (0, r.jsx)(R.Z, {
              variant: 'heading-sm/semibold',
              text: K.name
            })
          ]
        }),
        (0, r.jsx)(R.Z, {
          variant: 'text-xs/normal',
          text: P.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
            guildName: W.name
          }),
          onClick: W.id === j ? void 0 : () => {
            (0, h.X)(W.id), null == F || F();
          }
        })
      ]
    }),
    (0, r.jsx)(E.Z, {
      users: z,
      guildId: W.id,
      channelId: K.id,
      maxUsers: C.W,
      size: o.AvatarSizes.SIZE_16,
      disableUsernameTooltip: !0,
      disableUserPopout: e => e === t.id,
      overflowCountVariant: 'text-xxs/semibold',
      overflowCountColor: 'text-muted'
    })
  ]
}),
ei = () => H === b.y0.FULL_SIZE ? null : (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: U.voiceChannelDivider
    }),
    (0, r.jsx)(C.Z, {
      user: t,
      guild: W,
      channel: K,
      onClose: F
    })
  ]
}),
ea = () => t.id === n.id ? null : (0, r.jsx)('div', {
  className: a()(U.actions, Y),
  children: (0, r.jsx)(D.Z, {
    stream: i,
    canWatch: q,
    unavailableReason: Q,
    onClick: B,
    onClose: F
  })
});
  return (0, r.jsx)(_.Gt, {
value: V,
children: (0, r.jsx)(y.Z, {
  user: t,
  onClose: F,
  children: e => {
    let {
      onAutoDismiss: n
    } = e;
    return (0, r.jsxs)(N.Z.Overlay, {
      className: a()(U.card, k),
      children: [
        (0, r.jsx)(O.Z, {
          text: P.Z.Messages.USER_ACTIVITY_STREAMING,
          tags: (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(A.ZP, {
                size: A.OH.SMALL
              }),
              (0, r.jsx)(L.Z, {
                display: 'live',
                user: t,
                onRequestOpen: n
              })
            ]
          })
        }),
        (0, r.jsxs)('div', {
          className: U.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(U.content, Y),
              children: [
                en(),
                er(),
                H === b.y0.FULL_SIZE && ea()
              ]
            }),
            ei()
          ]
        }),
        H !== b.y0.FULL_SIZE && ea()
      ]
    });
  }
})
  });
}