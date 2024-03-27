"use strict";
s.r(t), s.d(t, {
  default: function() {
    return $
  }
}), s("222007"), s("424973"), s("506083");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("151426"),
  d = s("669491"),
  u = s("819855"),
  c = s("77078"),
  S = s("913144"),
  E = s("619340"),
  T = s("642950"),
  f = s("264044"),
  _ = s("135230"),
  m = s("841098"),
  g = s("376556"),
  h = s("572943"),
  N = s("535013"),
  I = s("816499"),
  p = s("926994"),
  C = s("10641"),
  A = s("47319"),
  O = s("305961"),
  x = s("677099"),
  R = s("102985"),
  M = s("941886"),
  D = s("931138"),
  v = s("476263"),
  L = s("945330"),
  P = s("772280"),
  j = s("486952"),
  b = s("956089"),
  U = s("599110"),
  y = s("701909"),
  B = s("915639"),
  F = s("333562"),
  G = s("216503"),
  k = s("187451"),
  H = s("470781"),
  w = s("49111"),
  V = s("214509"),
  Y = s("994428"),
  K = s("782340"),
  W = s("652827"),
  z = s("890957");
let Q = e => {
  var t, s;
  let n, {
      integration: l
    } = e,
    {
      isJoining: i,
      joinErrorMessage: o,
      showJoinErrorMessage: d
    } = (0, r.useStateFromStoresObject)([A.default], () => ({
      isJoining: A.default.isJoining(l.id),
      joinErrorMessage: "" === A.default.joinErrorMessage(l.id) ? K.default.Messages.ERROR : A.default.joinErrorMessage(l.id),
      showJoinErrorMessage: void 0 !== A.default.joinErrorMessage(l.id)
    }), [l.id]),
    u = null != (0, r.useStateFromStores)([O.default], () => O.default.getGuild(l.guild.id), [l.guild.id]);
  return !u && (n = (0, a.jsx)(c.Button, {
    size: c.ButtonSizes.SMALL,
    onClick: function() {
      E.default.joinServer(l.id, () => {})
    },
    disabled: i,
    children: (0, a.jsx)("span", {
      children: i ? K.default.Messages.JOINING_GUILD : K.default.Messages.JOIN_GUILD
    })
  })), (0, a.jsxs)("div", {
    className: W.integrationWrapper,
    children: [(0, a.jsxs)("div", {
      className: W.integration,
      children: [(0, a.jsx)(v.default, {
        size: v.default.Sizes.SMALL,
        guild: l.guild,
        className: W.guildIcon
      }), (0, a.jsxs)("div", {
        className: W.integrationInner,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: l.guild.toString()
        }), (0, a.jsx)(c.Anchor, {
          href: null === (s = g.default.get(l.type)) || void 0 === s ? void 0 : null === (t = s.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(s, l.account),
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: l.account.name
          })
        })]
      }), n]
    }), d && (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: W.integrationError,
      children: o
    })]
  })
};

function X(e) {
  var t, s, l;
  let i, r, o, {
      onDisconnect: S,
      account: T,
      theme: f,
      locale: m
    } = e,
    [C, A] = n.useState(T.friendSync),
    [O, x] = n.useState(T.visibility),
    [R, M] = n.useState(T.metadataVisibility),
    [v, P] = n.useState(T.showActivity),
    [U, B] = n.useState(null),
    [Y, z] = n.useState(null),
    [X, q] = n.useState(!1),
    [Z, J] = n.useState([]),
    $ = (0, h.useLegacyPlatformType)(T.type),
    ee = g.default.get($);
  n.useEffect(() => {
    A(T.friendSync), x(T.visibility), M(T.metadataVisibility), P(T.showActivity)
  }, [T]), n.useEffect(() => {
    !1 !== T.verified && (null != U && (x(U), E.default.setVisibility(T.type, T.id, U), B(null)), null != Y && (M(Y), E.default.setMetadataVisibility(T.type, T.id, Y), z(null)))
  }, [T]);

  function et() {
    (0, p.default)(T.type, "User Settings")
  }

  function es() {
    let e = g.default.get(T.type),
      t = K.default.Messages.DISCONNECT_ACCOUNT_BODY;
    (0, F.default)(T) && (t = (0, a.jsxs)(a.Fragment, {
      children: [t, (0, a.jsx)(G.default, {
        className: W.infoBox,
        children: K.default.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({
          platformName: e.name
        })
      })]
    })), (0, c.openModal)(s => (0, a.jsx)(_.default, {
      title: K.default.Messages.DISCONNECT_ACCOUNT_TITLE.format({
        name: e.name
      }),
      body: t,
      confirmText: K.default.Messages.DISCONNECT_ACCOUNT,
      cancelText: K.default.Messages.CANCEL,
      onConfirm: S,
      ...s
    }))
  }

  function ea(e) {
    let {
      verified: t
    } = T, s = e ? 1 : 0;
    if (e && !t) {
      B(s), (0, p.default)(T.type, "User Settings");
      return
    }
    x(s), E.default.setVisibility(T.type, T.id, s)
  }

  function en(e) {
    let {
      verified: t
    } = T, s = e ? 1 : 0;
    if (e && !t) {
      z(s), (0, p.default)(T.type, "User Settings");
      return
    }
    M(s), E.default.setMetadataVisibility(T.type, T.id, s)
  }

  function el(e) {
    A(e), E.default.setFriendSync(T.type, T.id, e)
  }

  function ei(e) {
    P(e), E.default.setShowActivity(T.type, T.id, e)
  }
  return (0, a.jsxs)("div", {
    className: W.connection,
    children: [function(e) {
      var t;
      let s = g.default.get(e.type),
        n = g.default.get($),
        l = null !== (t = e.metadata) && void 0 !== t ? t : {},
        i = "1" === l[V.MetadataFields.TWITTER_VERIFIED],
        r = null;
      return s.type === w.PlatformTypes.TWITTER && i && (r = (0, a.jsx)(c.Tooltip, {
        text: K.default.Messages.CONNECTION_VERIFIED_ON_TWITTER,
        children: e => (0, a.jsx)(D.default, {
          ...e,
          className: W.connectionAccountLabelVerified,
          color: d.default.unsafe_rawColors.TWITTER.css,
          children: (0, a.jsx)(j.default, {
            color: d.default.unsafe_rawColors.WHITE_500.css
          })
        })
      })), (0, a.jsxs)("div", {
        className: W.connectionHeader,
        children: [(0, a.jsx)("img", {
          alt: n.name,
          className: W.connectionIcon,
          src: (0, u.isThemeDark)(f) ? n.icon.darkSVG : n.icon.lightSVG
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: W.connectionAccountValue,
            children: (0, a.jsxs)("div", {
              className: W.connectionAccountLabelContainer,
              children: [e.name, r]
            })
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: W.connectionAccountLabel,
            children: n.name
          })]
        }), (0, a.jsx)(c.Clickable, {
          className: W.connectionDelete,
          onClick: es,
          "aria-label": K.default.Messages.SERVICE_CONNECTIONS_DISCONNECT,
          focusProps: {
            offset: {
              top: -4,
              left: -4,
              right: -4
            }
          },
          children: (0, a.jsx)(L.default, {
            width: 16,
            height: 16
          })
        })]
      })
    }(T), (t = T).twoWayLink ? null : t.type === w.PlatformTypes.XBOX ? (0, a.jsx)("div", {
      className: W.upsellWrapper,
      children: (0, a.jsx)(H.XboxTwoWayLinkUpsell, {})
    }) : t.type === w.PlatformTypes.PLAYSTATION ? (0, a.jsx)("div", {
      className: W.upsellWrapper,
      children: (0, a.jsx)(k.PlayStationTwoWayLinkUpsell, {})
    }) : null, function(e) {
      var t;
      let s = null !== (t = e.metadata) && void 0 !== t ? t : {},
        n = null,
        l = (0, N.getCreatedAtDate)(s[V.MetadataFields.CREATED_AT], m);
      switch (e.type) {
        case w.PlatformTypes.REDDIT:
          n = (0, I.generateRedditMetadataItems)(s, W.metadataItem);
          break;
        case w.PlatformTypes.STEAM:
          n = (0, I.generateSteamMetadataItems)(s, W.metadataItem);
          break;
        case w.PlatformTypes.TWITTER:
          n = (0, I.generateTwitterMetadataItems)(s, W.metadataItem);
          break;
        case w.PlatformTypes.EBAY:
          n = (0, I.generateEbayMetadataItems)(s, W.metadataItem);
          break;
        case w.PlatformTypes.PAYPAL:
          n = (0, I.generatePaypalMetadataItems)(s, W.metadataItem);
          break;
        case w.PlatformTypes.TIKTOK:
          n = (0, I.generateTikTokMetadataItems)(s, W.metadataItem)
      }
      null !== l && (null == n && (n = []), null == n || n.push((0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "interactive-active",
        className: W.connectedAccountVanityMetadataCreatedAt,
        children: K.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: l
        })
      }, "member-since")));
      let i = Z.includes(e.id),
        r = K.default.Messages.REFRESH;
      if (null == n || 0 === n.length) {
        if (!0 !== g.default.get(e.type).hasMetadata) return null;
        n = [(0, a.jsx)(b.TextBadge, {
          className: W.connectionMetadataUpsellTag,
          text: K.default.Messages.NEW
        }, "badge"), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: W.connectionMetadataUpsellDescription,
          children: K.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({
            helpdeskUrl: y.default.getArticleURL(w.HelpdeskArticles.CONNECTION_DETAILS)
          })
        }, "label")], r = K.default.Messages.CONNECTED_ACCOUNT_ADD_DETAILS
      }
      return i && (r = K.default.Messages.DONE), n.push((0, a.jsx)(c.Button, {
        className: W.metadataRefreshButton,
        color: i ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
        size: c.Button.Sizes.SMALL,
        submitting: X,
        disabled: i,
        onClick: i ? void 0 : () => {
          q(!0), E.default.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              Z.push(e.id), J(Z), q(!1)
            }, 2e3)
          })
        },
        children: r
      }, "refresh-button")), (0, a.jsx)("div", {
        className: W.metadataContainer,
        children: n
      })
    }(T), (s = ee, w.FRIEND_SYNC_PLATFORM_TYPES.has(T.type) && (i = (0, a.jsx)(c.FormSwitch, {
      className: W.connectionOptionSwitch,
      hideBorder: !0,
      value: C,
      onChange: el,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: K.default.Messages.SYNC_FRIENDS
      })
    })), w.ACTIVITY_PLATFORM_TYPES.has(T.type) && (r = (0, a.jsx)(c.FormSwitch, {
      className: W.connectionOptionSwitch,
      hideBorder: !0,
      value: v,
      onChange: ei,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: K.default.Messages.DISPLAY_ACTIVITY.format({
          platform: s.name
        })
      })
    })), (null === (l = g.default.get(T.type)) || void 0 === l ? void 0 : l.hasMetadata) === !0 && (o = (0, a.jsx)(c.FormSwitch, {
      className: W.connectionOptionSwitch,
      hideBorder: !0,
      value: 1 === R,
      onChange: en,
      disabled: 1 !== O || null == T.metadata,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: K.default.Messages.DISPLAY_DETAILS_ON_PROFILE
      })
    })), (0, a.jsx)("div", {
      className: W.connectionOptionsWrapper,
      children: (0, a.jsxs)("div", {
        className: W.connectionOptions,
        children: [(0, a.jsx)(c.FormSwitch, {
          className: W.connectionOptionSwitch,
          hideBorder: !0,
          value: 1 === O,
          onChange: ea,
          children: (0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: K.default.Messages.DISPLAY_ON_PROFILE
          })
        }), o, r, i]
      })
    })), function() {
      if (T.revoked || T.integrations.length > 0) return (0, a.jsx)(c.FormDivider, {
        className: W.connectedAccountSeparator
      })
    }(), T.revoked ? (0, a.jsx)(c.FormItem, {
      className: W.integrationsWrapper,
      children: (0, a.jsx)(c.FormText, {
        className: W.integrationRevoked,
        children: K.default.Messages.CONNECTED_ACCOUNT_REVOKED.format({
          onReconnect: et
        })
      })
    }) : T.integrations.length > 0 ? (0, a.jsxs)(c.FormItem, {
      className: W.integrationsWrapper,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/semibold",
          children: K.default.Messages.SUB_ENABLED_SERVERS
        })
      }), (0, a.jsx)("div", {
        children: T.integrations.map(e => (0, a.jsx)(Q, {
          integration: e
        }, e.id))
      })]
    }) : void 0]
  })
}

function q() {
  return n.useEffect(() => () => {
    (0, C.markDismissibleContentAsDismissed)(o.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: Y.ContentDismissActionType.AUTO
    })
  }, []), (0, a.jsxs)("div", {
    className: W.connectContainer,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: W.connectHeader,
      children: K.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
    }), (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: K.default.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({
        privacyPolicyUrl: w.MarketingURLs.PRIVACY
      })
    }), (0, a.jsx)(Z, {})]
  })
}

function Z() {
  function e(e) {
    let t = g.default.get(e);
    (0, p.default)(t.type), U.default.track(w.AnalyticEvents.ACCOUNT_LINK_STEP, {
      previous_step: "desktop connections",
      current_step: "desktop oauth",
      platform_type: t.type
    })
  }

  function t() {
    S.default.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: e
    })
  }
  let s = (0, h.usePlatforms)(),
    n = (0, c.useRedesignIconContext)().enabled,
    l = n ? 24 : 18;
  return (0, a.jsxs)("div", {
    className: W.connectionsContainer,
    children: [s.slice(0, 10).map(e => (0, a.jsx)(f.default, {
      type: e.type,
      className: W.accountButton,
      innerClassName: W.accountButtonInner
    }, e.type)), (0, a.jsx)(c.Tooltip, {
      text: K.default.Messages.CONNECTIONS_VIEW_MORE,
      children: e => {
        let {
          onMouseEnter: s,
          onMouseLeave: n
        } = e;
        return (0, a.jsx)("div", {
          className: i(W.accountAddWrapper, W.accountButton),
          children: (0, a.jsx)(c.FocusRing, {
            children: (0, a.jsx)("button", {
              onMouseEnter: s,
              onMouseLeave: n,
              className: i(W.accountAddInner, W.accountButtonInner),
              type: "button",
              onClick: t,
              "aria-label": K.default.Messages.ADD_NEW_CONNECTION,
              children: (0, a.jsx)(P.default, {
                height: l,
                width: l,
                "aria-label": K.default.Messages.CONNECTIONS_VIEW_MORE
              })
            })
          })
        })
      }
    })]
  })
}

function J(e) {
  let t, {
    fetching: n,
    accounts: l,
    theme: i,
    locale: r
  } = e;
  return t = n ? (0, a.jsx)(c.Spinner, {
    className: z.marginTop20,
    type: c.Spinner.Type.SPINNING_CIRCLE
  }) : 0 === l.length ? (0, a.jsxs)(M.default, {
    className: z.marginTop40,
    theme: i,
    children: [(0, a.jsx)(M.EmptyStateImage, {
      darkSrc: s("137718"),
      lightSrc: s("631399"),
      width: 230,
      height: 220
    }), (0, a.jsx)(M.EmptyStateText, {
      note: K.default.Messages.CONNECTED_ACCOUNTS_NONE,
      children: K.default.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
    })]
  }) : l.filter(e => g.default.isSupported(e.type)).map((e, t) => (0, a.jsx)(X, {
    theme: i,
    account: e,
    locale: r,
    onDisconnect: () => (function(e) {
      let {
        type: t,
        id: s
      } = e;
      E.default.disconnect(t, s)
    })(e)
  }, t)), (0, a.jsx)(c.FormItem, {
    className: W.connectionList,
    children: t
  })
}
var $ = () => {
  let e = (0, r.useStateFromStores)([R.default], () => R.default.hidePersonalInformation),
    t = (0, r.useStateFromStores)([A.default], () => A.default.isFetching()),
    s = (0, r.useStateFromStores)([A.default], () => A.default.getAccounts()),
    l = (0, m.default)();
  (0, r.useStateFromStores)([x.default], () => x.default.getFlattenedGuildIds());
  let i = (0, r.useStateFromStores)([B.default], () => B.default.locale);
  return (n.useEffect(() => {
    E.default.fetch()
  }, []), e) ? (0, a.jsx)(T.default, {}) : (0, a.jsxs)(c.FormSection, {
    className: W.connections,
    tag: c.FormTitleTags.H1,
    title: K.default.Messages.CONNECTIONS,
    children: [(0, a.jsx)(q, {}), (0, a.jsx)(J, {
      fetching: t,
      accounts: s,
      theme: l,
      locale: i
    })]
  })
}