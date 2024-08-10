n(47120);
var i = n(735250),
  a = n(470079),
  s = n(704215),
  l = n(974674),
  r = n(481060),
  o = n(243778),
  c = n(261892),
  u = n(197115),
  d = n(703656),
  h = n(594174),
  p = n(626135),
  m = n(74538),
  _ = n(204197),
  f = n(502762),
  E = n(981631),
  g = n(921944),
  C = n(474936),
  I = n(689938),
  x = n(186916);

function T() {
  p.default.track(E.rMx.PREMIUM_UPSELL_INTERACTED, {
cta_type: 'Learn more button',
target: 'premium marketing page'
  }), (0, d.uL)(E.Z5c.APPLICATION_STORE);
}

function N(e) {
  let {
avatarSrc: t,
username: n
  } = e, [a, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], g.R.SIDEBAR, !0);
  return a !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, i.jsxs)(f.Z.Overlay, {
className: x.overlay,
children: [
  (0, i.jsxs)('div', {
    className: x.contentGroup,
    children: [
      (0, i.jsx)(l.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        'aria-label': n
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/medium',
        className: x.contentText,
        children: I.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
          username: n
        })
      }),
      (0, i.jsx)(r.Clickable, {
        onClick: () => c(g.L.USER_DISMISS),
        'aria-label': I.Z.Messages.DISMISS,
        className: x.closeIconWrapper,
        children: (0, i.jsx)(r.XSmallIcon, {
          size: 'md',
          color: 'currentColor',
          className: x.closeIcon
        })
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: x.buttonGroup,
    children: [
      (0, i.jsx)(r.Button, {
        className: x.learnMoreButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        onClick: T,
        children: I.Z.Messages.LEARN_MORE
      }),
      (0, i.jsx)(u.Z, {
        className: x.getNitroButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        buttonText: I.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO
      })
    ]
  })
]
  });
}

function v(e) {
  let {
avatarSrc: t,
username: n
  } = e, [a, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], g.R.SIDEBAR, !0);
  return a !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, i.jsx)(f.Z.Overlay, {
className: x.overlay2,
children: (0, i.jsxs)('div', {
  className: x.contentGroup,
  children: [
    (0, i.jsx)(l.qE, {
      src: t,
      size: r.AvatarSizes.SIZE_32,
      status: r.StatusTypes.UNKNOWN,
      'aria-label': n
    }),
    (0, i.jsx)(r.Text, {
      variant: 'text-sm/medium',
      className: x.contentText,
      children: I.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
        username: n,
        onClickLearnMore: T
      })
    }),
    (0, i.jsx)(r.Clickable, {
      onClick: () => c(g.L.USER_DISMISS),
      'aria-label': I.Z.Messages.DISMISS,
      className: x.closeIconWrapper,
      children: (0, i.jsx)(r.XSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: x.closeIcon
      })
    })
  ]
})
  });
}

function S(e) {
  let {
avatarSrc: t,
username: n
  } = e;
  return (0, i.jsx)(f.Z.Overlay, {
className: x.overlay2,
children: (0, i.jsxs)('div', {
  className: x.contentGroup,
  children: [
    (0, i.jsx)(l.qE, {
      src: t,
      size: r.AvatarSizes.SIZE_32,
      status: r.StatusTypes.UNKNOWN,
      'aria-label': n
    }),
    (0, i.jsx)(r.Text, {
      variant: 'text-sm/medium',
      className: x.contentText,
      children: I.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
        username: n,
        onClickLearnMore: T
      })
    })
  ]
})
  });
}

function Z(e) {
  let {
variant: t,
avatarSrc: n,
username: a
  } = e;
  if (1 === t)
return (0, i.jsx)(N, {
  avatarSrc: n,
  username: a
});
  if (2 === t)
return (0, i.jsx)(v, {
  avatarSrc: n,
  username: a
});
  if (3 === t)
return (0, i.jsx)(S, {
  avatarSrc: n,
  username: a
});
  return null;
}
let A = a.memo(function(e) {
  let {
user: t,
displayProfile: n
  } = e, {
avatarSrc: a
  } = (0, _.Z)({
user: t,
size: r.AvatarSizes.SIZE_32
  }), s = h.default.getCurrentUser(), l = m.ZP.isPremium(s) || null == n || !m.ZP.isPremiumAtLeast(n.premiumType, C.p9.TIER_2), {
enabled: o,
variant: u
  } = c.f.useExperiment({
location: 'SimplifiedProfilePanelPremiumUpsell'
  }, {
disable: l,
autoTrackExposure: !l
  });
  return o ? (0, i.jsx)(Z, {
variant: u,
avatarSrc: a,
username: t.username
  }) : null;
});
t.Z = A;