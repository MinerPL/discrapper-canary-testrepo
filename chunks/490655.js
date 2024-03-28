"use strict";
l.r(t), l("47120"), l("653041");
var n = l("735250"),
  a = l("470079"),
  s = l("392711"),
  i = l.n(s),
  r = l("442837"),
  o = l("481060"),
  d = l("139387"),
  u = l("503089"),
  c = l("231757"),
  f = l("106976"),
  m = l("488915"),
  I = l("984933"),
  T = l("496675"),
  N = l("66579"),
  E = l("285952"),
  S = l("585483"),
  g = l("63063"),
  h = l("919196"),
  p = l("731072"),
  _ = l("494118"),
  O = l("351644"),
  A = l("720764"),
  C = l("981631"),
  x = l("689938"),
  R = l("246805");

function M(e, t) {
  switch (e) {
    case C.IntegrationSettingsSections.APPLICATION:
      var l;
      return null !== (l = null == t ? void 0 : t.application.name) && void 0 !== l ? l : "";
    case C.IntegrationSettingsSections.OVERVIEW:
      return x.default.Messages.INTEGRATIONS_OVERVIEW;
    case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
      return x.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
    case C.IntegrationSettingsSections.TWITCH:
      return x.default.Messages.INTEGRATIONS_TWITCH;
    case C.IntegrationSettingsSections.WEBHOOKS:
      return x.default.Messages.INTEGRATIONS_WEBHOOKS;
    case C.IntegrationSettingsSections.YOUTUBE:
      return x.default.Messages.INTEGRATIONS_YOUTUBE;
    default:
      return ""
  }
}
t.default = a.memo(function(e) {
  let {
    section: t,
    sectionId: l,
    guild: s,
    channel: v,
    integrations: L,
    editedIntegration: j,
    webhooks: P,
    editedWebhook: b,
    isFetching: D,
    refToScroller: y,
    errors: G,
    hasChanges: B
  } = e, H = (0, r.useStateFromStores)([I.default], () => null != s ? I.default.getDefaultChannel(s.id) : null), k = (0, r.useStateFromStoresObject)([I.default], () => I.default.getChannels(null == s ? void 0 : s.id)), U = (0, r.useStateFromStoresObject)([T.default], () => i().keyBy(k.SELECTABLE.map(e => e.channel).filter(e => T.default.can(C.Permissions.MANAGE_WEBHOOKS, e)), "id")), F = (0, r.useStateFromStoresObject)([T.default], () => i().keyBy(k.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && T.default.can(C.Permissions.MANAGE_WEBHOOKS, e)), "id")), w = null != v ? v : H, W = t === C.IntegrationSettingsSections.APPLICATION ? l : null, [V, Y] = a.useState(u.SHAKE_INTENSITY_DEFAULT), K = a.useCallback(() => B() ? (S.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
    duration: 300,
    intensity: V
  }), Y(Math.min(V + u.SHAKE_INTENSITY_INCREMENT, u.SHAKE_INTENSITY_MAX)), S.ComponentDispatch.dispatch(C.ComponentActions.EMPHASIZE_NOTICE), !1) : (Y(u.SHAKE_INTENSITY_DEFAULT), !0), [B, V]), z = a.useCallback(e => !!K() && (d.default.setSection(e), !0), [K]), {
    applicationIntegrations: Z,
    applicationBotIds: q,
    builtInIntegrations: J,
    customWebhooks: X,
    followedChannelWebhooks: Q
  } = a.useMemo(() => {
    let e = {},
      t = {},
      l = {},
      n = [],
      a = [];
    if (null != L)
      for (let n of L)
        if ("discord" === n.type) {
          if (null != n.application) {
            var s;
            e[n.application.id] = {
              application: n.application,
              integration: n,
              webhooks: []
            }, (null === (s = n.application.bot) || void 0 === s ? void 0 : s.id) !== void 0 && (t[n.application.bot.id] = n.application.id)
          }
        } else !(n.type in l) && (l[n.type] = []), l[n.type].push(n);
    for (let t of P)(t.channel_id in U || t.channel_id in F) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === C.WebhookTypes.CHANNEL_FOLLOWER ? a.push(t) : n.push(t));
    return {
      applicationIntegrations: e,
      applicationBotIds: t,
      builtInIntegrations: l,
      customWebhooks: n,
      followedChannelWebhooks: a
    }
  }, [L, U, F, P]);
  a.useEffect(() => {
    if (!D) switch (t) {
      case C.IntegrationSettingsSections.TWITCH:
        null == J[C.PlatformTypes.TWITCH] && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
        break;
      case C.IntegrationSettingsSections.YOUTUBE:
        null == J[C.PlatformTypes.YOUTUBE] && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
        break;
      case C.IntegrationSettingsSections.APPLICATION:
        (null == W || !(W in q || W in Z)) && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW)
    }
  }, [Z, q, J, W, t, D]), a.useEffect(() => {
    if ((null == s ? void 0 : s.id) != null) m.default.getEntitlementsForGuildFetchState(s.id) === m.FetchState.NOT_FETCHED && f.fetchEntitlementsForGuild(s.id)
  }, [null == s ? void 0 : s.id]);
  let $ = null;
  switch (t) {
    case C.IntegrationSettingsSections.TWITCH:
      null != J[C.PlatformTypes.TWITCH] && ($ = (0, n.jsx)(p.default, {
        guild: s,
        integrations: J[C.PlatformTypes.TWITCH],
        editedIntegration: j,
        labelText: x.default.Messages.INTEGRATIONS_TWITCH,
        platformType: C.PlatformTypes.TWITCH,
        descriptionText: x.default.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
        helpText: x.default.Messages.INTEGRATIONS_TWITCH_HELP.format({
          connectAction: () => (0, c.default)({
            platformType: C.PlatformTypes.TWITCH,
            location: "Integration Settings"
          }),
          helpdeskArticle: g.default.getArticleURL(C.HelpdeskArticles.TWITCH_INTEGRATION)
        }),
        canNavigate: K
      }));
      break;
    case C.IntegrationSettingsSections.YOUTUBE:
      null != J[C.PlatformTypes.YOUTUBE] && ($ = (0, n.jsx)(p.default, {
        guild: s,
        integrations: J[C.PlatformTypes.YOUTUBE],
        editedIntegration: j,
        labelText: x.default.Messages.INTEGRATIONS_YOUTUBE,
        platformType: C.PlatformTypes.YOUTUBE,
        descriptionText: x.default.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
        helpText: x.default.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
          connectAction: () => (0, c.default)({
            platformType: C.PlatformTypes.YOUTUBE
          }),
          helpdeskArticle: g.default.getArticleURL(C.HelpdeskArticles.YOUTUBE_INTEGRATION)
        }),
        canNavigate: K
      }));
      break;
    case C.IntegrationSettingsSections.APPLICATION:
      var ee;
      let et = null != W ? null !== (ee = Z[q[W]]) && void 0 !== ee ? ee : Z[W] : null;
      null != et && ($ = (0, n.jsx)(h.default, {
        guild: s,
        applicationIntegration: et,
        editedWebhook: b,
        selectableWebhookChannels: U,
        errors: G,
        canNavigate: K
      }));
      break;
    case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
      $ = (0, n.jsx)(_.default, {
        followedChannelWebhooks: Q,
        editedWebhook: b,
        selectableWebhookChannels: U,
        canNavigate: K,
        errors: G
      });
      break;
    case C.IntegrationSettingsSections.WEBHOOKS:
      $ = (0, n.jsx)(A.default, {
        guild: s,
        channel: v,
        customWebhooks: X,
        editedWebhook: b,
        selectableWebhookChannels: {
          ...U,
          ...F
        },
        canNavigate: K,
        refToScroller: y,
        errors: G
      });
      break;
    default:
      $ = (0, n.jsx)(O.default, {
        guild: s,
        channel: v,
        applicationIntegrations: Z,
        builtInIntegrations: J,
        customWebhooks: X,
        followedChannelWebhooks: Q,
        isLoading: D || null == s,
        canCreateWebhook: null != w,
        onManageCustomWebhooks: () => {
          d.default.setSection(C.IntegrationSettingsSections.WEBHOOKS)
        },
        onManageFollowedChannels: () => {
          d.default.setSection(C.IntegrationSettingsSections.CHANNEL_FOLLOWING)
        },
        onManageApplication: e => {
          d.default.setSection(C.IntegrationSettingsSections.APPLICATION, e)
        },
        onManageBuiltIn: e => {
          switch (e) {
            case C.PlatformTypes.TWITCH:
              d.default.setSection(C.IntegrationSettingsSections.TWITCH);
              break;
            case C.PlatformTypes.YOUTUBE:
              d.default.setSection(C.IntegrationSettingsSections.YOUTUBE)
          }
        }
      })
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(E.default, {
      align: E.default.Align.CENTER,
      className: R.breadcrumbs,
      children: t === C.IntegrationSettingsSections.OVERVIEW ? (0, n.jsx)(o.FormTitle, {
        tag: "h1",
        children: M(C.IntegrationSettingsSections.OVERVIEW)
      }) : (0, n.jsx)(N.default, {
        activeId: t.toString(),
        breadcrumbs: [C.IntegrationSettingsSections.OVERVIEW, t].map(e => ({
          id: e.toString(),
          label: M(e, Z[W])
        })),
        onBreadcrumbClick: e => {
          t !== parseInt(e.id) && z(parseInt(e.id))
        },
        renderCustomBreadcrumb: (e, t) => (0, n.jsx)(o.FormTitle, {
          tag: "h1",
          className: t ? R.breadcrumbActive : R.breadcrumbInactive,
          children: e.label
        })
      })
    }), $]
  })
})