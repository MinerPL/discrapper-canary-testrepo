"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("481060"),
  u = s("232567"),
  d = s("100527"),
  c = s("906732"),
  _ = s("204197"),
  E = s("598077"),
  T = s("594174"),
  I = s("976644"),
  R = s("626135"),
  f = s("63063"),
  S = s("276444"),
  m = s("520540"),
  A = s("197115"),
  N = s("119269"),
  p = s("981631"),
  g = s("689938"),
  C = s("831003"),
  P = s("691766");
let O = e => {
    let {
      userRecord: t,
      placement: s
    } = e, {
      avatarSrc: r,
      eventHandlers: i
    } = (0, _.default)({
      user: t,
      size: o.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), n = null != t, l = n ? (0, a.jsx)(o.Avatar, {
      src: r,
      "aria-label": t.username,
      size: o.AvatarSizes.SIZE_32,
      ...i
    }) : (0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: C.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(o.Tooltip, {
      text: g.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !n,
      tooltipContentClassName: C.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: C.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  M = e => {
    let {
      numSentReferrals: t,
      placement: s
    } = e;
    return (0, a.jsxs)("div", {
      className: C.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: C.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: n()({
          [C.fullHighlight]: t > s,
          [C.halfHighlight]: t === s
        })
      })]
    })
  },
  h = e => {
    let {
      userRecords: t
    } = e, s = t.length, r = s < 1 ? null : t[0], i = s < 2 ? null : t[1], n = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: C.userAvatarProgressBarContainer,
      children: [(0, a.jsx)(O, {
        userRecord: r,
        placement: 1
      }), (0, a.jsx)(M, {
        numSentReferrals: s,
        placement: 1
      }), (0, a.jsx)(O, {
        userRecord: i,
        placement: 2
      }), (0, a.jsx)(M, {
        numSentReferrals: s,
        placement: 2
      }), (0, a.jsx)(O, {
        userRecord: n,
        placement: 3
      })]
    })
  },
  L = (e, t, s, a) => e ? g.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: a
  }) : t ? g.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: a
  }) : g.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: a
  });
t.default = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.useStateFromStoresArray)([S.default], () => S.default.getSentUserIds()), _ = (0, l.useStateFromStoresArray)([T.default], () => i.map(e => T.default.getUser(e)).filter(e => null != e)), O = r.useMemo(() => _.map(e => new E.default(e)), [_]), {
    subscriberHomeVariant: M
  } = m.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), x = M === m.SubscriberHomeVariant.VARIANT_2;
  r.useEffect(() => {
    i.forEach(e => {
      (0, u.getUser)(e)
    })
  }, [i]);
  let v = i.length,
    b = 3 === v,
    D = f.default.getArticleURL(p.HelpdeskArticles.REFERRAL_PROGRAM),
    U = b ? g.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : g.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: j
    } = (0, c.default)(d.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    y = r.useRef(null),
    [B, G] = r.useState(!1),
    k = () => {
      if (null != y.current) {
        let {
          clientWidth: e
        } = y.current;
        G(e <= 568)
      }
    };
  r.useEffect(() => (k(), window.addEventListener("resize", k), () => {
    window.removeEventListener("resize", k)
  }), []);
  let H = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(N.default, {
      percentage: v / 3 * 100,
      progressCircleVariation: N.ProgressCircleVariation.NITRO_LOGO,
      iconClassName: n()({
        [C.referralProgressBarIcon]: !t,
        [C.referralProgressBarIconSettings]: t
      })
    }), (0, a.jsxs)("div", {
      className: C.expandedProgressBarContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: C.expandedProgressBarHeader,
        children: U
      }), (0, a.jsx)(h, {
        userRecords: O
      }), (0, a.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: L(b, v > 0, i.length, D)
      }), (0, a.jsxs)("div", {
        className: n()(C.expandedProgressBarButtonContainer, {
          [C.expandedProgressBarButtonContainerMinLayout]: B && !t,
          [C.expandedProgressBarButtonContainerLayout]: !B && !t
        }),
        children: [!t && !x && (0, a.jsx)(A.default, {
          color: o.ButtonColors.CUSTOM,
          buttonText: g.default.Messages.GIFT_NITRO,
          className: n()(C.expandedProgressBarGiftingCTA, {
            [C.expandedProgressBarGiftingCTAMinLayout]: B && !t,
            [C.expandedProgressBarGiftingCTALayout]: !B && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, a.jsx)(I.default, {
          className: C.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            R.default.track(p.AnalyticEvents.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: j
            }), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("47435")]).then(s.bind(s, "204387"));
              return t => (0, a.jsx)(e, {
                ...t,
                sourceAnalyticsLocations: j
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, a.jsxs)("div", {
            className: C.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, a.jsx)("img", {
              src: P,
              alt: "",
              className: C.expandedProgressBarSelectFriendsIcon
            }), b ? g.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : g.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: j,
    children: (0, a.jsx)("div", {
      ref: y,
      className: n()({
        [C.expandedProgressBarContainer]: !t,
        [C.expandedProgressBarContainerSettingsPage]: t,
        [C.expandedProgressBarContainerVariant1]: !x && !t,
        [C.expandedProgressBarContainerVariant2]: x && !t,
        [C.allReferralsSentBorder]: 3 === i.length
      }),
      children: H
    })
  })
}