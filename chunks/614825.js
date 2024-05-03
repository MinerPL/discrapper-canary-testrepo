"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("873546"),
  d = n("442837"),
  c = n("481060"),
  f = n("568836"),
  E = n("100527"),
  _ = n("906732"),
  m = n("963249"),
  T = n("594174"),
  I = n("78839"),
  p = n("55935"),
  h = n("63063"),
  N = n("74538"),
  S = n("276444"),
  C = n("790368"),
  A = n("786397"),
  g = n("474936"),
  M = n("981631"),
  R = n("689938"),
  v = n("712348");
class O extends a.Component {
  renderTitle(e, t, n) {
    let {
      trialOffer: s
    } = this.props, a = T.default.getUser(s.user_id), l = null != a ? a.username : "???", i = T.default.getUser(s.referrer_id), r = null != i ? i.username : "???";
    if (e && void 0 === s.redeemed_at) return R.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
      username: l
    });
    if (t) return n ? R.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : R.default.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({
      userName: r
    });
    return R.default.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
      senderUserName: r,
      recipientUserName: l
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: s
    } = this.props;
    return e && !n && void 0 === s.redeemed_at ? R.default.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({
      helpdeskArticle: h.default.getArticleURL(M.HelpdeskArticles.REFERRAL_PROGRAM)
    }) : t ? null : R.default.Messages.REFERRAL_PROGRAM_EMBED_BODY
  }
  renderActions(e, t, n) {
    let {
      trialOffer: a,
      currentUser: l,
      analyticsLocations: i
    } = this.props, r = {
      onClick: () => {
        this.handleStartTrial(a, i)
      },
      color: c.Button.Colors.BRAND
    }, o = l.id !== a.user_id || (0, N.isPremium)(l) || !l.verified || (0, A.hasUserTrialOfferExpired)(a), u = this.renderExpirationDate(e, t, n);
    return r.disabled = o, (0, s.jsxs)("div", {
      className: v.buttonContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(c.Button, {
          ...r,
          size: c.Button.Sizes.SMALL,
          onClick: () => {
            (0, m.default)({
              initialPlanId: null,
              subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: i,
              trialId: a.trial_id,
              referralTrialOfferId: a.id
            })
          },
          children: R.default.Messages.START_TRIAL
        })
      }), (0, s.jsx)("div", {
        className: v.metadata,
        children: u
      })]
    })
  }
  renderExpirationDate(e, t, n) {
    let {
      trialOffer: s,
      trialEndsAt: a
    } = this.props;
    if (void 0 !== s.redeemed_at && !n && null !== a) return R.default.Messages.TRIAL_EXPIRES.format({
      date: (0, p.dateFormat)(o()(a), "LL")
    });
    if (e || void 0 === s.expires_at) return null;
    let l = o()(s.expires_at);
    if (t) return R.default.Messages.EXPIRED_DATE.format({
      date: (0, p.dateFormat)(o()(l), "LL")
    });
    let i = l.diff(o()(), "h");
    if (i > 48) {
      let e = l.diff(o()(), "d");
      return R.default.Messages.EXPIRES_DAYS.format({
        numDays: e
      })
    }
    if (i > 1) return R.default.Messages.EXPIRES_HOURS.format({
      numHours: i
    });
    let r = l.diff(o()(), "minutes");
    return R.default.Messages.EXPIRES_MINUTES.format({
      numMinutes: r
    })
  }
  renderMedia(e) {
    return (0, s.jsx)("div", {
      className: i()({
        [v.referral]: !e,
        [v.birthdayReferral]: e
      })
    })
  }
  render() {
    let {
      trialOffer: e,
      currentUser: t,
      recipientHasNitro: n,
      shouldShowBirthdayUX: a
    } = this.props, l = (0, A.hasUserTrialOfferExpired)(e), r = t.id === e.referrer_id;
    return (0, s.jsxs)("div", {
      className: i()(v.tile, v.container),
      children: [(0, s.jsx)("div", {
        className: v.media,
        children: this.renderMedia(a)
      }), (0, s.jsxs)("div", {
        className: v.description,
        children: [(0, s.jsx)(c.H, {
          className: v.title,
          children: this.renderTitle(n, l, r)
        }), (0, s.jsx)("div", {
          className: v.tagline,
          children: this.renderBody(n, l, r)
        }), (0, s.jsx)("div", {
          className: v.actions,
          children: this.renderActions(n, l, r)
        })]
      })]
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleStartTrial", s = (e, t) => {
      (0, m.default)({
        initialPlanId: null,
        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: t,
        trialId: e.trial_id
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function x(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: a,
    isResolving: l
  } = (0, d.useStateFromStoresObject)([S.default], () => ({
    trialOffer: n ? S.default.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && S.default.isResolving(t)
  }), [n, t]), i = T.default.getCurrentUser(), r = (0, d.useStateFromStores)([T.default], () => null != a && (0, N.isPremium)(void 0 !== i && a.user_id === i.id ? i : T.default.getUser(a.user_id))), o = (0, d.useStateFromStores)([I.default], () => {
    var e;
    return r ? null === (e = I.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
  }), {
    analyticsLocations: c
  } = (0, _.default)(E.default.SHARE_NITRO_EMBED), {
    enabled: m
  } = C.default.useExperiment({
    location: "f4ff1d_1"
  }, {
    autoTrackExposure: !0
  });
  return l ? (0, s.jsx)(f.ResponsiveLoadingEmbedTile, {
    isHorizontal: !u.isMobile
  }) : n && null != a && void 0 !== i ? (0, s.jsx)(O, {
    trialOffer: a,
    currentUser: i,
    recipientHasNitro: r,
    trialEndsAt: o,
    analyticsLocations: c,
    shouldShowBirthdayUX: m,
    ...e
  }) : (0, s.jsx)("div", {
    className: v.invalidWrapper,
    children: (0, s.jsx)("div", {
      className: v.invalid
    })
  })
}