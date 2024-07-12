n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(442837),
  o = n(481060),
  c = n(232567),
  d = n(100527),
  _ = n(906732),
  u = n(204197),
  E = n(598077),
  T = n(594174),
  I = n(626135),
  R = n(63063),
  C = n(276444),
  p = n(520540),
  g = n(197115),
  A = n(119269),
  m = n(981631),
  N = n(689938),
  f = n(141253),
  S = n(691766);
let h = e => {
let {
  userRecord: t,
  placement: n
} = e, {
  avatarSrc: a,
  eventHandlers: r
} = (0, u.Z)({
  user: t,
  size: o.AvatarSizes.SIZE_32,
  animateOnHover: !0
}), i = null != t, l = i ? (0, s.jsx)(o.Avatar, {
  src: a,
  'aria-label': t.username,
  size: o.AvatarSizes.SIZE_32,
  ...r
}) : (0, s.jsx)(o.Heading, {
  variant: 'heading-md/semibold',
  className: f.userAvatarProgressBarUnitNum,
  children: n
});
return (0, s.jsx)(o.Tooltip, {
  text: N.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
  shouldShow: !i,
  tooltipContentClassName: f.unsentTooltipContent,
  children: e => (0, s.jsx)('div', {
    className: f.userAvatarProgressBarUnit,
    ...e,
    children: l
  })
});
  },
  M = e => {
let {
  numSentReferrals: t,
  placement: n
} = e;
return (0, s.jsxs)('div', {
  className: f.avatarProgressBarUnitConnectorContainer,
  children: [
    (0, s.jsx)('div', {
      className: f.avatarProgressBarUnitConnectorBase
    }),
    (0, s.jsx)('div', {
      className: i()({
        [f.fullHighlight]: t > n,
        [f.halfHighlight]: t === n
      })
    })
  ]
});
  },
  x = e => {
let {
  userRecords: t
} = e, n = t.length, a = n < 1 ? null : t[0], r = n < 2 ? null : t[1], i = n < 3 ? null : t[2];
return (0, s.jsxs)('div', {
  className: f.userAvatarProgressBarContainer,
  children: [
    (0, s.jsx)(h, {
      userRecord: a,
      placement: 1
    }),
    (0, s.jsx)(M, {
      numSentReferrals: n,
      placement: 1
    }),
    (0, s.jsx)(h, {
      userRecord: r,
      placement: 2
    }),
    (0, s.jsx)(M, {
      numSentReferrals: n,
      placement: 2
    }),
    (0, s.jsx)(h, {
      userRecord: i,
      placement: 3
    })
  ]
});
  },
  b = (e, t, n, s) => e ? N.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
helpdeskArticle: s
  }) : t ? N.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
numFriends: 3 - n,
helpdeskArticle: s
  }) : N.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
numFriends: 3,
helpdeskArticle: s
  });
t.Z = e => {
  let {
isInSettings: t = !1
  } = e, r = (0, l.Wu)([C.Z], () => C.Z.getSentUserIds()), u = (0, l.Wu)([T.default], () => r.map(e => T.default.getUser(e)).filter(e => null != e)), h = a.useMemo(() => u.map(e => new E.Z(e)), [u]), {
subscriberHomeVariant: M
  } = p.g.useExperiment({
location: 'ReferralProgramProgressBar'
  }, {
autoTrackExposure: !1
  }), O = M === p.p.VARIANT_2;
  a.useEffect(() => {
r.forEach(e => {
  (0, c.PR)(e);
});
  }, [r]);
  let L = r.length,
P = 3 === L,
v = R.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM),
Z = P ? N.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : N.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
{
  analyticsLocations: D
} = (0, _.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
B = a.useRef(null),
[j, U] = a.useState(!1),
G = () => {
  if (null != B.current) {
    let {
      clientWidth: e
    } = B.current;
    U(e <= 568);
  }
};
  a.useEffect(() => (G(), window.addEventListener('resize', G), () => {
window.removeEventListener('resize', G);
  }), []);
  let y = (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(A.Z, {
    percentage: L / 3 * 100,
    progressCircleVariation: A.Q.NITRO_LOGO,
    iconClassName: i()({
      [f.referralProgressBarIcon]: !t,
      [f.referralProgressBarIconSettings]: t
    })
  }),
  (0, s.jsxs)('div', {
    className: f.expandedProgressBarContent,
    children: [
      (0, s.jsx)(o.Heading, {
        variant: t ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
        className: f.expandedProgressBarHeader,
        children: Z
      }),
      (0, s.jsx)(x, {
        userRecords: h
      }),
      (0, s.jsx)(o.Text, {
        variant: t ? 'text-sm/normal' : 'text-lg/medium',
        children: b(P, L > 0, r.length, v)
      }),
      (0, s.jsxs)('div', {
        className: i()(f.expandedProgressBarButtonContainer, {
          [f.expandedProgressBarButtonContainerMinLayout]: j && !t,
          [f.expandedProgressBarButtonContainerLayout]: !j && !t
        }),
        children: [
          !t && !O && (0, s.jsx)(g.Z, {
            color: o.ButtonColors.CUSTOM,
            buttonText: N.Z.Messages.GIFT_NITRO,
            className: i()(f.expandedProgressBarGiftingCTA, {
              [f.expandedProgressBarGiftingCTAMinLayout]: j && !t,
              [f.expandedProgressBarGiftingCTALayout]: !j && !t
            }),
            look: o.ButtonLooks.OUTLINED,
            isGift: !0
          }),
          (0, s.jsx)(o.ShinyButton, {
            className: f.expandedProgressBarSelectFriendsCTA,
            color: o.ButtonColors.CUSTOM,
            onClick: () => {
              I.default.track(m.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                location_stack: D
              }), (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await n.e('47435').then(n.bind(n, 204387));
                return t => (0, s.jsx)(e, {
                  ...t,
                  sourceAnalyticsLocations: D
                });
              });
            },
            onlyShineOnHover: !0,
            children: (0, s.jsxs)('div', {
              className: f.expandedProgressBarSelectFriendsCTAInner,
              children: [
                (0, s.jsx)('img', {
                  src: S,
                  alt: '',
                  className: f.expandedProgressBarSelectFriendsIcon
                }),
                P ? N.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : N.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
              ]
            })
          })
        ]
      })
    ]
  })
]
  });
  return (0, s.jsx)(_.Gt, {
value: D,
children: (0, s.jsx)('div', {
  ref: B,
  className: i()({
    [f.expandedProgressBarContainer]: !t,
    [f.expandedProgressBarContainerSettingsPage]: t,
    [f.expandedProgressBarContainerVariant1]: !O && !t,
    [f.expandedProgressBarContainerVariant2]: O && !t,
    [f.allReferralsSentBorder]: 3 === r.length
  }),
  children: y
})
  });
};