t(47120), t(653041);
var i = t(735250),
  a = t(470079),
  s = t(392711),
  l = t.n(s),
  o = t(442837),
  r = t(481060),
  d = t(139387),
  c = t(503089),
  u = t(231757),
  I = t(106976),
  m = t(488915),
  _ = t(984933),
  N = t(496675),
  E = t(285952),
  T = t(585483),
  h = t(63063),
  g = t(919196),
  p = t(731072),
  C = t(494118),
  f = t(351644),
  x = t(720764),
  O = t(981631),
  S = t(689938),
  A = t(781677);

function R(e, n) {
  switch (e) {
case O.b4C.APPLICATION:
  var t;
  return null !== (t = null == n ? void 0 : n.application.name) && void 0 !== t ? t : '';
case O.b4C.OVERVIEW:
  return S.Z.Messages.INTEGRATIONS_OVERVIEW;
case O.b4C.CHANNEL_FOLLOWING:
  return S.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
case O.b4C.TWITCH:
  return S.Z.Messages.INTEGRATIONS_TWITCH;
case O.b4C.WEBHOOKS:
  return S.Z.Messages.INTEGRATIONS_WEBHOOKS;
case O.b4C.YOUTUBE:
  return S.Z.Messages.INTEGRATIONS_YOUTUBE;
default:
  return '';
  }
}
n.Z = a.memo(function(e) {
  let {
section: n,
sectionId: t,
guild: s,
channel: b,
integrations: Z,
editedIntegration: v,
webhooks: M,
editedWebhook: L,
isFetching: j,
refToScroller: D,
errors: P,
hasChanges: B
  } = e, y = (0, o.e7)([_.ZP], () => null != s ? _.ZP.getDefaultChannel(s.id) : null), G = (0, o.cj)([_.ZP], () => _.ZP.getChannels(null == s ? void 0 : s.id)), k = (0, o.cj)([N.Z], () => l().keyBy(G.SELECTABLE.map(e => e.channel).filter(e => N.Z.can(O.Plq.MANAGE_WEBHOOKS, e)), 'id')), U = (0, o.cj)([N.Z], () => l().keyBy(G.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && N.Z.can(O.Plq.MANAGE_WEBHOOKS, e)), 'id')), H = null != b ? b : y, w = n === O.b4C.APPLICATION ? t : null, [W, F] = a.useState(c.$x), V = a.useCallback(() => B() ? (T.S.dispatch(O.CkL.SHAKE_APP, {
duration: 300,
intensity: W
  }), F(Math.min(W + c.d7, c.w6)), T.S.dispatch(O.CkL.EMPHASIZE_NOTICE), !1) : (F(c.$x), !0), [
B,
W
  ]), K = a.useCallback(e => !!V() && (d.Z.setSection(e), !0), [V]), {
applicationIntegrations: Y,
applicationBotIds: z,
builtInIntegrations: q,
customWebhooks: J,
followedChannelWebhooks: X
  } = a.useMemo(() => {
let e = {},
  n = {},
  t = {},
  i = [],
  a = [];
if (null != Z)
  for (let i of Z)
    if ('discord' === i.type) {
      if (null != i.application) {
        var s;
        e[i.application.id] = {
          application: i.application,
          integration: i,
          webhooks: []
        }, (null === (s = i.application.bot) || void 0 === s ? void 0 : s.id) !== void 0 && (n[i.application.bot.id] = i.application.id);
      }
    } else
      !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
for (let n of M) {
  if (n.channel_id in k || n.channel_id in U)
    null != n.application_id && n.application_id in e ? e[n.application_id].webhooks.push(n) : n.type === O.ylB.CHANNEL_FOLLOWER ? a.push(n) : i.push(n);
}
return {
  applicationIntegrations: e,
  applicationBotIds: n,
  builtInIntegrations: t,
  customWebhooks: i,
  followedChannelWebhooks: a
};
  }, [
Z,
k,
U,
M
  ]);
  a.useEffect(() => {
if (!j)
  switch (n) {
    case O.b4C.TWITCH:
      null == q[O.ABu.TWITCH] && d.Z.setSection(O.b4C.OVERVIEW);
      break;
    case O.b4C.YOUTUBE:
      null == q[O.ABu.YOUTUBE] && d.Z.setSection(O.b4C.OVERVIEW);
      break;
    case O.b4C.APPLICATION:
      (null == w || !(w in z || w in Y)) && d.Z.setSection(O.b4C.OVERVIEW);
  }
  }, [
Y,
z,
q,
w,
n,
j
  ]), a.useEffect(() => {
if ((null == s ? void 0 : s.id) != null)
  m.Z.getEntitlementsForGuildFetchState(s.id) === m.M.NOT_FETCHED && I.i1(s.id);
  }, [null == s ? void 0 : s.id]);
  let Q = null;
  switch (n) {
case O.b4C.TWITCH:
  null != q[O.ABu.TWITCH] && (Q = (0, i.jsx)(p.Z, {
    guild: s,
    integrations: q[O.ABu.TWITCH],
    editedIntegration: v,
    labelText: S.Z.Messages.INTEGRATIONS_TWITCH,
    platformType: O.ABu.TWITCH,
    descriptionText: S.Z.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
    helpText: S.Z.Messages.INTEGRATIONS_TWITCH_HELP.format({
      connectAction: () => (0, u.Z)({
        platformType: O.ABu.TWITCH,
        location: 'Integration Settings'
      }),
      helpdeskArticle: h.Z.getArticleURL(O.BhN.TWITCH_INTEGRATION)
    }),
    canNavigate: V
  }));
  break;
case O.b4C.YOUTUBE:
  null != q[O.ABu.YOUTUBE] && (Q = (0, i.jsx)(p.Z, {
    guild: s,
    integrations: q[O.ABu.YOUTUBE],
    editedIntegration: v,
    labelText: S.Z.Messages.INTEGRATIONS_YOUTUBE,
    platformType: O.ABu.YOUTUBE,
    descriptionText: S.Z.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
    helpText: S.Z.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
      connectAction: () => (0, u.Z)({
        platformType: O.ABu.YOUTUBE
      }),
      helpdeskArticle: h.Z.getArticleURL(O.BhN.YOUTUBE_INTEGRATION)
    }),
    canNavigate: V
  }));
  break;
case O.b4C.APPLICATION:
  var $;
  let ee = null != w ? null !== ($ = Y[z[w]]) && void 0 !== $ ? $ : Y[w] : null;
  null != ee && (Q = (0, i.jsx)(g.Z, {
    guild: s,
    applicationIntegration: ee,
    editedWebhook: L,
    selectableWebhookChannels: k,
    errors: P,
    canNavigate: V
  }));
  break;
case O.b4C.CHANNEL_FOLLOWING:
  Q = (0, i.jsx)(C.Z, {
    followedChannelWebhooks: X,
    editedWebhook: L,
    selectableWebhookChannels: k,
    canNavigate: V,
    errors: P
  });
  break;
case O.b4C.WEBHOOKS:
  Q = (0, i.jsx)(x.Z, {
    guild: s,
    channel: b,
    customWebhooks: J,
    editedWebhook: L,
    selectableWebhookChannels: {
      ...k,
      ...U
    },
    canNavigate: V,
    refToScroller: D,
    errors: P
  });
  break;
default:
  Q = (0, i.jsx)(f.Z, {
    guild: s,
    channel: b,
    applicationIntegrations: Y,
    builtInIntegrations: q,
    customWebhooks: J,
    followedChannelWebhooks: X,
    isLoading: j || null == s,
    canCreateWebhook: null != H,
    onManageCustomWebhooks: () => {
      d.Z.setSection(O.b4C.WEBHOOKS);
    },
    onManageFollowedChannels: () => {
      d.Z.setSection(O.b4C.CHANNEL_FOLLOWING);
    },
    onManageApplication: e => {
      d.Z.setSection(O.b4C.APPLICATION, e);
    },
    onManageBuiltIn: e => {
      switch (e) {
        case O.ABu.TWITCH:
          d.Z.setSection(O.b4C.TWITCH);
          break;
        case O.ABu.YOUTUBE:
          d.Z.setSection(O.b4C.YOUTUBE);
      }
    }
  });
  }
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(E.Z, {
    align: E.Z.Align.CENTER,
    className: A.breadcrumbs,
    children: n === O.b4C.OVERVIEW ? (0, i.jsx)(r.FormTitle, {
      tag: 'h1',
      children: R(O.b4C.OVERVIEW)
    }) : (0, i.jsx)(r.Breadcrumbs, {
      activeId: n.toString(),
      breadcrumbs: [
        O.b4C.OVERVIEW,
        n
      ].map(e => ({
        id: e.toString(),
        label: R(e, Y[w])
      })),
      onBreadcrumbClick: e => {
        if (n !== parseInt(e.id))
          K(parseInt(e.id));
      },
      renderCustomBreadcrumb: (e, n) => (0, i.jsx)(r.FormTitle, {
        tag: 'h1',
        className: n ? A.breadcrumbActive : A.breadcrumbInactive,
        children: e.label
      })
    })
  }),
  Q
]
  });
});