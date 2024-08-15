n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(913527),
  o = n.n(l),
  c = n(873546),
  u = n(442837),
  d = n(481060),
  _ = n(568836),
  E = n(100527),
  I = n(906732),
  m = n(963249),
  T = n(594174),
  h = n(78839),
  N = n(55935),
  f = n(63063),
  C = n(74538),
  p = n(276444),
  g = n(790368),
  S = n(786397),
  A = n(474936),
  R = n(981631),
  x = n(689938),
  O = n(474013);
class M extends a.Component {
  renderTitle(e, t, n) {
let {
  trialOffer: i
} = this.props, a = T.default.getUser(i.user_id), s = null != a ? a.username : '???', r = T.default.getUser(i.referrer_id), l = null != r ? r.username : '???';
if (e && void 0 === i.redeemed_at)
  return x.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
    username: s
  });
if (t)
  return n ? x.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : x.Z.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({
    userName: l
  });
return x.Z.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
  senderUserName: l,
  recipientUserName: s
});
  }
  renderBody(e, t, n) {
let {
  trialOffer: i
} = this.props;
return e && !n && void 0 === i.redeemed_at ? x.Z.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({
  helpdeskArticle: f.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM)
}) : t ? null : x.Z.Messages.REFERRAL_PROGRAM_EMBED_BODY;
  }
  renderActions(e, t, n) {
let {
  trialOffer: a,
  currentUser: s,
  analyticsLocations: r
} = this.props, l = {
  onClick: () => {
    this.handleStartTrial(a, r);
  },
  color: d.Button.Colors.BRAND
}, o = s.id !== a.user_id || (0, C.I5)(s) || !s.verified || (0, S.B)(a), c = this.renderExpirationDate(e, t, n);
return l.disabled = o, (0, i.jsxs)('div', {
  className: O.buttonContainer,
  children: [
    (0, i.jsx)('div', {
      children: (0, i.jsx)(d.Button, {
        ...l,
        size: d.Button.Sizes.SMALL,
        onClick: () => {
          (0, m.Z)({
            initialPlanId: null,
            subscriptionTier: A.Si.TIER_2,
            analyticsLocations: r,
            trialId: a.trial_id,
            referralTrialOfferId: a.id
          });
        },
        children: x.Z.Messages.START_TRIAL
      })
    }),
    (0, i.jsx)('div', {
      className: O.metadata,
      children: c
    })
  ]
});
  }
  renderExpirationDate(e, t, n) {
let {
  trialOffer: i,
  trialEndsAt: a
} = this.props;
if (void 0 !== i.redeemed_at && !n && null !== a)
  return x.Z.Messages.TRIAL_EXPIRES.format({
    date: (0, N.vc)(o()(a), 'LL')
  });
if (e || void 0 === i.expires_at)
  return null;
let s = o()(i.expires_at);
if (t)
  return x.Z.Messages.EXPIRED_DATE.format({
    date: (0, N.vc)(o()(s), 'LL')
  });
let r = s.diff(o()(), 'h');
if (r > 48) {
  let e = s.diff(o()(), 'd');
  return x.Z.Messages.EXPIRES_DAYS.format({
    numDays: e
  });
}
if (r > 1)
  return x.Z.Messages.EXPIRES_HOURS.format({
    numHours: r
  });
let l = s.diff(o()(), 'minutes');
return x.Z.Messages.EXPIRES_MINUTES.format({
  numMinutes: l
});
  }
  renderMedia(e) {
return (0, i.jsx)('div', {
  className: r()({
    [O.referral]: !e,
    [O.birthdayReferral]: e
  })
});
  }
  render() {
let {
  trialOffer: e,
  currentUser: t,
  recipientHasNitro: n,
  shouldShowBirthdayUX: a
} = this.props, s = (0, S.B)(e), l = t.id === e.referrer_id;
return (0, i.jsxs)('div', {
  className: r()(O.tile, O.container),
  children: [
    (0, i.jsx)('div', {
      className: O.media,
      children: this.renderMedia(a)
    }),
    (0, i.jsxs)('div', {
      className: O.description,
      children: [
        (0, i.jsx)(d.H, {
          className: O.title,
          children: this.renderTitle(n, s, l)
        }),
        (0, i.jsx)('div', {
          className: O.tagline,
          children: this.renderBody(n, s, l)
        }),
        (0, i.jsx)('div', {
          className: O.actions,
          children: this.renderActions(n, s, l)
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'handleStartTrial', i = (e, t) => {
  (0, m.Z)({
    initialPlanId: null,
    subscriptionTier: A.Si.TIER_2,
    analyticsLocations: t,
    trialId: e.trial_id
  });
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}

function v(e) {
  let {
userTrialOfferId: t,
canRenderReferralEmbed: n
  } = e, {
trialOffer: a,
isResolving: s
  } = (0, u.cj)([p.Z], () => ({
trialOffer: n ? p.Z.getRelevantUserTrialOffer(t) : null,
isResolving: !!n && p.Z.isResolving(t)
  }), [
n,
t
  ]), r = T.default.getCurrentUser(), l = (0, u.e7)([T.default], () => null != a && (0, C.I5)(void 0 !== r && a.user_id === r.id ? r : T.default.getUser(a.user_id))), o = (0, u.e7)([h.ZP], () => {
var e;
return l ? null === (e = h.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null;
  }), {
analyticsLocations: d
  } = (0, I.ZP)(E.Z.SHARE_NITRO_EMBED), {
enabled: m
  } = g.Z.useExperiment({
location: 'f4ff1d_1'
  }, {
autoTrackExposure: !0
  });
  return s ? (0, i.jsx)(_.OR, {
isHorizontal: !c.tq
  }) : n && null != a && void 0 !== r ? (0, i.jsx)(M, {
trialOffer: a,
currentUser: r,
recipientHasNitro: l,
trialEndsAt: o,
analyticsLocations: d,
shouldShowBirthdayUX: m,
...e
  }) : (0, i.jsx)('div', {
className: O.invalidWrapper,
children: (0, i.jsx)('div', {
  className: O.invalid
})
  });
}