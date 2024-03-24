"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("424973"), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("448105"),
  o = l.n(r),
  d = l("446674"),
  u = l("819855"),
  c = l("77078"),
  f = l("54239"),
  m = l("841098"),
  I = l("376556"),
  T = l("412707"),
  N = l("646186"),
  E = l("926994"),
  h = l("47319"),
  g = l("957255"),
  p = l("145131"),
  S = l("810567"),
  O = l("841811"),
  _ = l("295810"),
  A = l("741919"),
  C = l("599110"),
  x = l("315102"),
  R = l("701909"),
  M = l("299039"),
  v = l("158998"),
  L = l("700104"),
  j = l("15639"),
  b = l("49111"),
  P = l("782340"),
  D = l("201093"),
  y = l("390494"),
  G = l("449638"),
  B = l("117809");

function H(e, t) {
  return t.includes(e)
}

function k(e) {
  let {
    query: t,
    setQuery: l
  } = e, s = a.useCallback(e => {
    l(e)
  }, [l]);
  return (0, n.jsx)("div", {
    className: D.searchContainer,
    children: (0, n.jsx)(S.default, {
      size: S.default.Sizes.MEDIUM,
      query: t,
      onChange: s,
      onClear: () => l(""),
      placeholder: P.default.Messages.INTEGRATIONS_SEARCH,
      "aria-label": P.default.Messages.INTEGRATIONS_SEARCH
    })
  })
}

function U(e) {
  let {
    guild: t,
    channel: l,
    applicationIntegrations: s,
    builtInIntegrations: r,
    customWebhooks: S,
    followedChannelWebhooks: U,
    isLoading: F,
    canCreateWebhook: w,
    onManageBuiltIn: W,
    onManageCustomWebhooks: V,
    onManageFollowedChannels: Y,
    onManageApplication: K
  } = e, z = (0, m.default)(), [Z, q] = a.useState(""), {
    isFetchingConnections: J,
    accounts: X
  } = (0, d.useStateFromStoresObject)([h.default], () => ({
    isFetchingConnections: h.default.isFetching(),
    accounts: h.default.getAccounts()
  }), []), {
    canManageWebhooks: Q,
    canManageGuild: $
  } = (0, d.useStateFromStoresObject)([g.default], () => ({
    canManageWebhooks: null != t && g.default.can(b.Permissions.MANAGE_WEBHOOKS, t) || null != l && g.default.can(b.Permissions.MANAGE_WEBHOOKS, l),
    canManageGuild: null != t && null == l && g.default.can(b.Permissions.MANAGE_GUILD, t)
  }), [t, l]), {
    availableTwitchIntegrations: ee,
    availableYoutubeIntegrations: et,
    guildTwitchIntegrations: el,
    guildYoutubeIntegrations: en
  } = a.useMemo(() => {
    var e, t, l, n, a, s, i, o;
    return {
      availableTwitchIntegrations: null !== (a = null === (e = r.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
      availableYoutubeIntegrations: null !== (s = null === (t = r.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0,
      guildTwitchIntegrations: null !== (i = null === (l = r.twitch) || void 0 === l ? void 0 : l.filter(e => e.enabled).length) && void 0 !== i ? i : 0,
      guildYoutubeIntegrations: null !== (o = null === (n = r.youtube) || void 0 === n ? void 0 : n.filter(e => e.enabled).length) && void 0 !== o ? o : 0
    }
  }, [r.twitch, r.youtube]), {
    showTwitchCard: ea,
    showYoutubeCard: es
  } = a.useMemo(() => {
    if (J || !$) return {
      showTwitchCard: !1,
      showYoutubeCard: !1
    };
    let e = null == t ? void 0 : t.hasFeature(b.GuildFeatures.COMMUNITY),
      l = X.filter(e => e.type === b.PlatformTypes.TWITCH).length > 0,
      n = X.filter(e => e.type === b.PlatformTypes.YOUTUBE).length > 0;
    return {
      showTwitchCard: ee > 0 || !l && e,
      showYoutubeCard: et > 0 || !n && e
    }
  }, [J, $, t, X, ee, et]), ei = Object.values(s).length, er = a.useMemo(() => {
    let e = ei > 100 ? H : o;
    return Object.values(s).filter(t => {
      var l, n, a;
      let {
        application: s
      } = t;
      return l = s, n = Z, a = e, !!("" === (n = n.trim().toLowerCase()) || l.id === n || a(n, l.name.toLowerCase()) || null != l.bot && a(n, l.bot.username.toLowerCase())) || !1
    })
  }, [s, ei, Z]), eo = (0, d.useStateFromStores)([j.default], () => {
    if (null != t) return er.find(e => j.default.canShowOverviewTooltip(t.id, e.integration.id))
  }, [er, t]), ed = a.useMemo(() => void 0 !== eo ? [eo, ...er.filter(e => e.integration.id !== eo.integration.id)] : er, [er, eo]), eu = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), [ec, ef] = a.useState(!1), em = a.useRef(0), eI = () => {
    ef(!0), clearTimeout(em.current), em.current = setTimeout(() => {
      ef(!1)
    }, 200)
  };
  a.useEffect(() => (window.addEventListener("scroll", eI, !0), () => window.removeEventListener("scroll", eI)));
  let eT = ed.map(e => {
      let l = !eu && e.integration.id === (null == eo ? void 0 : eo.integration.id);
      return function(e, t, l, a, s) {
        var i;
        let {
          application: r,
          integration: o
        } = t, d = [];
        return null != o.user ? d.push({
          icon: O.default,
          text: P.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
            timestamp: M.default.extractTimestamp(o.id),
            user: v.default.getUserTag(o.user)
          })
        }) : d.push({
          icon: O.default,
          text: P.default.Messages.INTEGRATION_ADDED_DATE.format({
            timestamp: M.default.extractTimestamp(o.id)
          })
        }), (0, n.jsx)(L.default, {
          name: r.name,
          imageSrc: null !== (i = r.getIconURL(48)) && void 0 !== i ? i : x.DEFAULT_AVATARS[0],
          integration: t,
          buttonText: P.default.Messages.INTEGRATIONS_APPLICATION_BUTTON,
          hasNextSection: !0,
          onButtonClick: () => {
            l(r.id), C.default.track(b.AnalyticEvents.APP_MANAGE_CTA_CLICKED, {
              application_id: r.id,
              guild_id: null == e ? void 0 : e.id,
              is_admin: null != e ? g.default.can(b.Permissions.ADMINISTRATOR, e) : void 0
            })
          },
          details: d,
          guildId: null == e ? void 0 : e.id,
          isScrolling: a,
          canShowMigrationTooltip: s
        }, "integration-".concat(o.id))
      }(t, e, K, ec, l)
    }),
    eN = (0, n.jsx)("div", {
      className: D.footerImage
    });
  0 === eT.length && $ && (eT = function(e, t, l) {
    let a = (0, u.isThemeDark)(e) ? G : B,
      s = (0, n.jsxs)(p.default, {
        direction: p.default.Direction.VERTICAL,
        align: p.default.Align.CENTER,
        className: D.emptyStateWrapper,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: a,
          className: D.emptyStateSearchImage
        }), (0, n.jsx)(c.Card, {
          editable: !0,
          className: D.emptyStateCard,
          children: (0, n.jsx)(c.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: P.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH
          })
        })]
      }),
      i = (0, n.jsx)(c.Card, {
        editable: !0,
        className: D.emptyStateCard,
        children: (0, n.jsxs)("div", {
          className: D.emptyStateText,
          children: [(0, n.jsx)("img", {
            alt: "",
            src: y,
            className: D.emptyStateImage
          }), (0, n.jsx)(c.Heading, {
            color: "header-secondary",
            variant: "heading-xl/bold",
            children: P.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
          }), (0, n.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: P.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
              handleGoToAppDirectory: () => {
                (0, N.goToAppDirectory)({
                  guildId: l,
                  entrypoint: {
                    name: T.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS
                  }
                }), (0, f.popLayer)()
              }
            })
          })]
        })
      });
    return t > 0 ? s : i
  }(z, ei, null == t ? void 0 : t.id), eN = null);
  let eE = R.default.getArticleURL(b.HelpdeskArticles.INTEGRATIONS),
    eh = null != l ? P.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : P.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
    eg = [];
  if (Q) {
    var ep, eS, eO, e_, eA;
    let e;
    if (eg.push((ep = S.length, eS = w, eO = V, e = ep > 0 ? P.default.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : P.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, n.jsx)(L.default, {
        name: P.default.Messages.INTEGRATIONS_WEBHOOKS,
        icon: A.default,
        buttonText: e,
        buttonDisabled: !eS,
        onButtonClick: eO,
        hasNextSection: ep > 0,
        details: [{
          text: P.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
            count: ep
          })
        }]
      }, "webhooks"))), (null == l ? void 0 : l.type) !== b.ChannelTypes.GUILD_VOICE && ((null == l ? void 0 : l.type) == null || !b.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type))) {
      ;
      let e, t;
      eg.push((e_ = U.length, eA = Y, e_ > 0 ? (e = P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, t = eA) : (e = P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, t = () => open(R.default.getArticleURL(b.HelpdeskArticles.CHANNEL_FOLLOWING))), (0, n.jsx)(L.default, {
        name: P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
        icon: _.default,
        buttonText: e,
        onButtonClick: t,
        hasNextSection: e_ > 0,
        details: [{
          text: P.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({
            count: e_
          })
        }]
      }, "channels-followed")))
    }
  }
  return ea && eg.push(function(e, t, l) {
    let a, s, i;
    let r = I.default.get(b.PlatformTypes.TWITCH);
    return e > 0 ? (a = P.default.Messages.INTEGRATIONS_TWITCH_BUTTON, s = P.default.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
      count: t
    }), i = () => l(b.PlatformTypes.TWITCH)) : (a = P.default.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, s = P.default.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, i = () => (0, E.default)(b.PlatformTypes.TWITCH, "Integration Settings")), (0, n.jsx)(L.default, {
      name: P.default.Messages.INTEGRATIONS_TWITCH,
      icon: r.icon.whiteSVG,
      iconBackgroundColor: r.color,
      iconClassName: D.platformIcon,
      buttonText: a,
      onButtonClick: i,
      hasNextSection: e > 0,
      details: [{
        text: s
      }]
    }, "integrations-twitch")
  }(ee, el, W)), es && eg.push(function(e, t, l) {
    let a, s, i;
    let r = I.default.get(b.PlatformTypes.YOUTUBE);
    return e > 0 ? (a = P.default.Messages.INTEGRATIONS_YOUTUBE_BUTTON, s = P.default.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
      count: t
    }), i = () => l(b.PlatformTypes.YOUTUBE)) : (a = P.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, s = P.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, i = () => (0, E.default)(b.PlatformTypes.YOUTUBE, "Integration Settings")), (0, n.jsx)(L.default, {
      name: P.default.Messages.INTEGRATIONS_YOUTUBE,
      icon: r.icon.whiteSVG,
      iconBackgroundColor: r.color,
      iconClassName: D.platformIcon,
      buttonText: a,
      onButtonClick: i,
      hasNextSection: e > 0,
      details: [{
        text: s
      }]
    }, "integrations-youtube")
  }(et, en, W)), (0, n.jsxs)(c.FormSection, {
    className: i(null != eN ? D.footerPlaceholder : null),
    children: [(0, n.jsx)(c.FormText, {
      type: c.FormTextTypes.DESCRIPTION,
      children: eh.format({
        helpdeskArticle: eE
      })
    }), (0, n.jsx)(c.FormDivider, {
      className: D.divider
    }), F || J || null == t ? (0, n.jsx)(c.Spinner, {
      className: D.spinner,
      type: c.Spinner.Type.SPINNING_CIRCLE
    }) : (0, n.jsxs)(n.Fragment, {
      children: [eg, $ ? (0, n.jsxs)(n.Fragment, {
        children: [eg.length > 0 ? (0, n.jsx)(c.FormDivider, {
          className: D.divider
        }) : null, (0, n.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: D.sectionHeader,
          children: P.default.Messages.INTEGRATIONS_APPLICATION_SECTION
        }), ei > 4 ? (0, n.jsx)(k, {
          query: Z,
          setQuery: q
        }) : null, eT]
      }) : null, eN]
    })]
  })
}