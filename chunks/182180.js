n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(100527),
  l = n(906732),
  o = n(739566),
  c = n(942951),
  d = n(703656),
  u = n(702346),
  _ = n(35125),
  E = n(626751),
  I = n(891614),
  m = n(981631),
  T = n(176505),
  h = n(689938),
  N = n(20151);

function f(e) {
  let {
username: t
  } = e;
  return (0, i.jsx)('div', {
className: N.welcomeCardText,
children: (0, i.jsx)(s.Text, {
  tag: 'p',
  className: N.welcomeCardText,
  color: 'status-positive-text',
  variant: 'heading-xl/medium',
  children: h.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
    username: t,
    usernameHook: (e, t) => (0, i.jsx)(s.Text, {
      tag: 'span',
      color: 'status-positive-text',
      variant: 'heading-xxl/extrabold',
      lineClamp: 3,
      children: e
    }, t)
  })
})
  });
}

function p(e) {
  let {
guildId: t,
user: n,
username: a
  } = e;
  return (0, i.jsxs)('div', {
className: N.welcomeCard,
role: 'img',
'aria-label': h.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
  username: a
}),
children: [
  (0, i.jsx)(I.Z, {
    guildId: t,
    user: n,
    className: N.welcomeCardBadge
  }),
  (0, i.jsx)(f, {
    username: a
  })
]
  });
}

function C(e) {
  var t, s;
  let {
channel: I,
message: h,
compact: N
  } = e, f = (0, o.ZP)(h), C = function(e) {
let {
  author: t,
  channel: n,
  message: i
} = e, s = n.guild_id, o = (0, c.l)({
  user: i.author,
  channelId: n.id,
  guildId: s,
  messageId: i.id
})(t), {
  analyticsLocations: u
} = (0, l.ZP)(r.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), E = i.roleSubscriptionData, I = a.useCallback(() => {
  (0, d.uL)(m.Z5c.CHANNEL(s, T.oC.ROLE_SUBSCRIPTIONS), {
    sourceLocationStack: u
  }), (null == E ? void 0 : E.role_subscription_listing_id) != null && (0, _.y8)(s, n.id, i.id, E.role_subscription_listing_id);
}, [
  s,
  n,
  i,
  E,
  u
]);
return null == E ? null : (0, _.Tn)({
  username: t.nick,
  usernameOnClickHandler: o,
  roleSubscriptionOnClickHandler: I,
  guildId: s,
  roleSubscriptionData: i.roleSubscriptionData
});
  }({
channel: I,
message: h,
author: f
  }), g = (null === (t = h.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (s = h.roleSubscriptionData) || void 0 === s ? void 0 : s.total_months_subscribed) <= 1;
  return null == C ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(u.Z, {
    icon: n(570111),
    timestamp: h.timestamp,
    compact: N,
    children: C
  }),
  g && (0, i.jsx)(p, {
    guildId: I.guild_id,
    user: h.author,
    username: f.nick
  }),
  (0, i.jsx)(E.Z, {
    channel: I,
    message: h
  })
]
  });
}