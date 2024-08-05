n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
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
  C = n(63063),
  f = n(74538),
  p = n(276444),
  g = n(790368),
  S = n(786397),
  A = n(474936),
  R = n(981631),
  O = n(689938),
  x = n(951992);
class M extends s.Component {
  renderTitle(e, t, n) {
let {
  trialOffer: i
} = this.props, s = T.default.getUser(i.user_id), a = null != s ? s.username : '???', r = T.default.getUser(i.referrer_id), l = null != r ? r.username : '???';
if (e && void 0 === i.redeemed_at)
  return O.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
    username: a
  });
if (t)
  return n ? O.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : O.Z.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({
    userName: l
  });
return O.Z.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
  senderUserName: l,
  recipientUserName: a
});
  }
  renderBody(e, t, n) {
let {
  trialOffer: i
} = this.props;
return e && !n && void 0 === i.redeemed_at ? O.Z.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({
  helpdeskArticle: C.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM)
}) : t ? null : O.Z.Messages.REFERRAL_PROGRAM_EMBED_BODY;
  }
  renderActions(e, t, n) {
let {
  trialOffer: s,
  currentUser: a,
  analyticsLocations: r
} = this.props, l = {
  onClick: () => {
    this.handleStartTrial(s, r);
  },
  color: d.Button.Colors.BRAND
}, o = a.id !== s.user_id || (0, f.I5)(a) || !a.verified || (0, S.B)(s), c = this.renderExpirationDate(e, t, n);
return l.disabled = o, (0, i.jsxs)('div', {
  className: x.buttonContainer,
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
            trialId: s.trial_id,
            referralTrialOfferId: s.id
          });
        },
        children: O.Z.Messages.START_TRIAL
      })
    }),
    (0, i.jsx)('div', {
      className: x.metadata,
      children: c
    })
  ]
});
  }
  renderExpirationDate(e, t, n) {
let {
  trialOffer: i,
  trialEndsAt: s
} = this.props;
if (void 0 !== i.redeemed_at && !n && null !== s)
  return O.Z.Messages.TRIAL_EXPIRES.format({
    date: (0, N.vc)(o()(s), 'LL')
  });
if (e || void 0 === i.expires_at)
  return null;
let a = o()(i.expires_at);
if (t)
  return O.Z.Messages.EXPIRED_DATE.format({
    date: (0, N.vc)(o()(a), 'LL')
  });
let r = a.diff(o()(), 'h');
if (r > 48) {
  let e = a.diff(o()(), 'd');
  return O.Z.Messages.EXPIRES_DAYS.format({
    numDays: e
  });
}
if (r > 1)
  return O.Z.Messages.EXPIRES_HOURS.format({
    numHours: r
  });
let l = a.diff(o()(), 'minutes');
return O.Z.Messages.EXPIRES_MINUTES.format({
  numMinutes: l
});
  }
  renderMedia(e) {
return (0, i.jsx)('div', {
  className: r()({
    [x.referral]: !e,
    [x.birthdayReferral]: e
  })
});
  }
  render() {
let {
  trialOffer: e,
  currentUser: t,
  recipientHasNitro: n,
  shouldShowBirthdayUX: s
} = this.props, a = (0, S.B)(e), l = t.id === e.referrer_id;
return (0, i.jsxs)('div', {
  className: r()(x.tile, x.container),
  children: [
    (0, i.jsx)('div', {
      className: x.media,
      children: this.renderMedia(s)
    }),
    (0, i.jsxs)('div', {
      className: x.description,
      children: [
        (0, i.jsx)(d.H, {
          className: x.title,
          children: this.renderTitle(n, a, l)
        }),
        (0, i.jsx)('div', {
          className: x.tagline,
          children: this.renderBody(n, a, l)
        }),
        (0, i.jsx)('div', {
          className: x.actions,
          children: this.renderActions(n, a, l)
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
trialOffer: s,
isResolving: a
  } = (0, u.cj)([p.Z], () => ({
trialOffer: n ? p.Z.getRelevantUserTrialOffer(t) : null,
isResolving: !!n && p.Z.isResolving(t)
  }), [
n,
t
  ]), r = T.default.getCurrentUser(), l = (0, u.e7)([T.default], () => null != s && (0, f.I5)(void 0 !== r && s.user_id === r.id ? r : T.default.getUser(s.user_id))), o = (0, u.e7)([h.ZP], () => {
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
  return a ? (0, i.jsx)(_.OR, {
isHorizontal: !c.tq
  }) : n && null != s && void 0 !== r ? (0, i.jsx)(M, {
trialOffer: s,
currentUser: r,
recipientHasNitro: l,
trialEndsAt: o,
analyticsLocations: d,
shouldShowBirthdayUX: m,
...e
  }) : (0, i.jsx)('div', {
className: x.invalidWrapper,
children: (0, i.jsx)('div', {
  className: x.invalid
})
  });
}