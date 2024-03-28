"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("780384"),
  u = s("481060"),
  c = s("99690"),
  E = s("410030"),
  _ = s("726542"),
  I = s("465670"),
  T = s("981631"),
  S = s("856651"),
  f = s("689938"),
  m = s("567977");

function N(e) {
  var t, s;
  let l, {
    theme: n,
    platform: r,
    integration: E,
    onRemove: _,
    locked: T
  } = e;
  if ((null == E ? void 0 : E.application) != null) o()(null != E.application.bot, "bot is null"), l = (0, a.jsx)(c.default, {
    size: u.AvatarSizes.SIZE_24,
    user: E.application.bot,
    className: m.verifiedIcon
  });
  else if (null != r) {
    let e = (0, d.isThemeLight)(n) ? r.icon.lightSVG : r.icon.darkSVG;
    l = (0, a.jsx)("img", {
      className: m.verifiedIcon,
      src: e,
      alt: f.default.Messages.IMG_ALT_LOGO.format({
        name: r.name
      })
    })
  }
  return (0, a.jsxs)("div", {
    className: i()(m.verifiedRow, (null == r ? void 0 : r.hasMetadata) === !0 || (null == E ? void 0 : E.role_connections_metadata) != null && (null == E ? void 0 : E.role_connections_metadata.length) > 0 ? m.verifiedRowWithMetadata : null),
    children: [l, (0, a.jsx)(u.Text, {
      variant: "text-md/medium",
      className: m.verifiedText,
      children: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_ACCOUNT.format({
        platformName: null !== (s = null == r ? void 0 : r.name) && void 0 !== s ? s : null == E ? void 0 : null === (t = E.application) || void 0 === t ? void 0 : t.name
      })
    }), (0, a.jsx)(u.Button, {
      "aria-label": f.default.Messages.REMOVE,
      size: u.Button.Sizes.TINY,
      look: u.Button.Looks.BLANK,
      onClick: _,
      disabled: T,
      className: m.closeButton,
      children: (0, a.jsx)(u.Tooltip, {
        text: f.default.Messages.REMOVE,
        children: e => (0, a.jsx)(I.default, {
          className: m.closeIcon,
          ...e
        })
      })
    })]
  })
}

function g(e) {
  var t, s, n;
  let {
    inputRef: i,
    existingPendingConfiguration: r,
    locked: o,
    onConfigurationChange: d,
    platform: c,
    applicationId: E,
    metadataField: _,
    operator: I
  } = e, T = null !== (s = null == r ? void 0 : r.index) && void 0 !== s ? s : -1, f = null != I ? I : S.OperatorTypes.GREATER_THAN, N = Math.round(Number(null !== (n = null == r ? void 0 : null === (t = r.configuration) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0));
  f === S.OperatorTypes.GREATER_THAN ? N = Math.max(1, N + 1) : f === S.OperatorTypes.LESS_THAN && (N = Math.max(0, N - 1));
  let [g, h] = l.useState(N.toString());
  return l.useEffect(() => {
    h(g)
  }, [g]), (0, a.jsx)(u.TextInput, {
    inputRef: i,
    type: "number",
    className: m.numericalRuleInput,
    size: u.TextInput.Sizes.MINI,
    value: g,
    onChange: e => {
      if (null != r) {
        if ("" !== e) {
          var t;
          let s = Math.round(Number(e));
          f === S.OperatorTypes.GREATER_THAN ? s = Math.max(0, s - 1) : f === S.OperatorTypes.LESS_THAN && (s = Math.max(1, s + 1)), d({
            connectionType: null !== (t = null == c ? void 0 : c.type) && void 0 !== t ? t : S.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE,
            applicationId: E,
            connectionMetadataField: _,
            operator: f,
            value: s.toString()
          }, T)
        }
        h(e)
      }
    },
    disabled: o
  }, _)
}

function h(e) {
  let {
    titleText: t,
    fieldText: s,
    metadataField: l,
    existingPendingConfiguration: n,
    platform: i,
    applicationId: r,
    onConfigurationChange: o,
    locked: d
  } = e;
  return (0, a.jsxs)("div", {
    className: m.ruleContainer,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/bold",
        className: m.ruleItemHeader,
        children: t
      }), (0, a.jsx)("div", {
        className: m.numericalRuleSubItemContainer,
        children: (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          className: m.numericalRuleSubText,
          children: s
        })
      })]
    }), (0, a.jsx)(u.Switch, {
      className: m.ruleItemSwitch,
      checked: (null == n ? void 0 : n.configuration.value) === "1",
      onChange: e => {
        var t, s;
        let a = null;
        e && (a = {
          connectionType: null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : S.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE,
          applicationId: r,
          connectionMetadataField: l,
          operator: S.OperatorTypes.EQUAL,
          value: "1"
        }), o(a, null !== (s = null == n ? void 0 : n.index) && void 0 !== s ? s : -1)
      },
      disabled: d
    })]
  }, l)
}

function C(e) {
  let {
    titleText: t,
    fieldText: s,
    fieldTextHook: n,
    metadataField: i,
    existingPendingConfiguration: r,
    platform: o,
    applicationId: d,
    onConfigurationChange: c,
    locked: E,
    operator: _
  } = e, I = l.createRef(), T = (null == r ? void 0 : r.configuration) != null, f = (0, a.jsx)(g, {
    inputRef: I,
    metadataField: i,
    existingPendingConfiguration: r,
    locked: E || !T,
    onConfigurationChange: c,
    platform: o,
    operator: _,
    applicationId: d
  }, i), N = null != n ? n.format({
    metadataHook: () => f
  }) : (0, a.jsxs)(a.Fragment, {
    children: [f, (0, a.jsx)("span", {
      className: m.fieldText,
      children: s
    })]
  });
  return (0, a.jsxs)("div", {
    className: m.ruleContainer,
    children: [(0, a.jsxs)("div", {
      className: m.ruleContainerLabel,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/bold",
        className: m.ruleItemHeader,
        children: t
      }), (0, a.jsx)("div", {
        className: m.numericalRuleSubItemContainer,
        children: (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          className: m.numericalRuleSubText,
          children: N
        })
      })]
    }), (0, a.jsx)(u.Switch, {
      className: m.ruleItemSwitch,
      checked: T,
      onChange: e => {
        var t, s, a;
        let l = null;
        if (e) {
          let e = null != _ ? _ : S.OperatorTypes.GREATER_THAN,
            a = Math.round(Number(null === (t = I.current) || void 0 === t ? void 0 : t.value));
          e === S.OperatorTypes.GREATER_THAN ? a = Math.max(0, a - 1) : e === S.OperatorTypes.LESS_THAN && (a = Math.max(1, a + 1)), l = {
            connectionType: null !== (s = null == o ? void 0 : o.type) && void 0 !== s ? s : S.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE,
            applicationId: d,
            connectionMetadataField: i,
            operator: e,
            value: a.toString()
          }
        }
        c(l, null !== (a = null == r ? void 0 : r.index) && void 0 !== a ? a : -1)
      },
      disabled: E
    })]
  }, i)
}

function R(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l
  } = e, n = _.default.get(T.PlatformTypes.STEAM);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: S.MetadataFields.CREATED_AT,
      existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_STEAM_GAMES,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_GAMES,
      metadataField: S.MetadataFields.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.STEAM_GAME_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
        gameName: f.default.Messages.CONNECTIONS_STEAM_DOTA2
      }),
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_DOTA2,
      metadataField: S.MetadataFields.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(S.MetadataFields.STEAM_ITEM_COUNT_DOTA2),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
        gameName: f.default.Messages.CONNECTIONS_STEAM_TF2
      }),
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TF2,
      metadataField: S.MetadataFields.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(S.MetadataFields.STEAM_ITEM_COUNT_TF2),
      platform: n,
      onConfigurationChange: s,
      locked: l
    })]
  })
}

function x(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l
  } = e, n = _.default.get(T.PlatformTypes.TWITTER);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: S.MetadataFields.CREATED_AT,
      existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_TWITTER_FOLLOWERS,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
      metadataField: S.MetadataFields.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.TWITTER_FOLLOWERS_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_TWITTER_STATUSES,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TWEETS,
      metadataField: S.MetadataFields.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.TWITTER_STATUSES_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(h, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_VERIFIED,
      fieldText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
      metadataField: S.MetadataFields.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(S.MetadataFields.TWITTER_VERIFIED),
      platform: n,
      onConfigurationChange: s,
      locked: l
    })]
  })
}

function L(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l
  } = e, n = _.default.get(T.PlatformTypes.REDDIT);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: S.MetadataFields.CREATED_AT,
      existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_REDDIT_KARMA,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_KARMA,
      metadataField: S.MetadataFields.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(S.MetadataFields.REDDIT_TOTAL_KARMA),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(h, {
      titleText: f.default.Messages.CONNECTIONS_REDDIT_MOD,
      fieldText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_MOD,
      metadataField: S.MetadataFields.REDDIT_MOD,
      existingPendingConfiguration: t.get(S.MetadataFields.REDDIT_MOD),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(h, {
      titleText: f.default.Messages.CONNECTIONS_REDDIT_GOLD,
      fieldText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_GOLD,
      metadataField: S.MetadataFields.REDDIT_GOLD,
      existingPendingConfiguration: t.get(S.MetadataFields.REDDIT_GOLD),
      platform: n,
      onConfigurationChange: s,
      locked: l
    })]
  })
}

function O(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l
  } = e, n = _.default.get(T.PlatformTypes.PAYPAL);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: S.MetadataFields.CREATED_AT,
      existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(h, {
      titleText: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED,
      fieldText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_PAYPAL_VERIFIED_BANK_ACCOUNT,
      metadataField: S.MetadataFields.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(S.MetadataFields.PAYPAL_VERIFIED),
      platform: n,
      onConfigurationChange: s,
      locked: l
    })]
  })
}

function A(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l
  } = e, n = _.default.get(T.PlatformTypes.EBAY);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(C, {
      titleText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: S.MetadataFields.CREATED_AT,
      existingPendingConfiguration: t.get(S.MetadataFields.CREATED_AT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_POSITIVE_FEEDBACK_PERCENTAGE,
      metadataField: S.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(S.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      metadataField: S.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_MOST_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      metadataField: S.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l,
      operator: S.OperatorTypes.LESS_THAN
    }), (0, a.jsx)(h, {
      titleText: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER,
      fieldText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_TOP_RATED_SELLER,
      metadataField: S.MetadataFields.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(S.MetadataFields.EBAY_TOP_RATED_SELLER),
      platform: n,
      onConfigurationChange: s,
      locked: l
    })]
  })
}

function p(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l
  } = e, n = _.default.get(T.PlatformTypes.TIKTOK);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h, {
      titleText: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED,
      fieldText: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
      metadataField: S.MetadataFields.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_VERIFIED),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_TIKTOK_FOLLOWERS,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
      metadataField: S.MetadataFields.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_FOLLOWER_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_TIKTOK_FOLLOWING,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWING,
      metadataField: S.MetadataFields.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_FOLLOWING_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    }), (0, a.jsx)(C, {
      titleText: f.default.Messages.CONNECTIONS_TIKTOK_LIKES,
      fieldTextHook: f.default.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_LIKES,
      metadataField: S.MetadataFields.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(S.MetadataFields.TIKTOK_LIKES_COUNT),
      platform: n,
      onConfigurationChange: s,
      locked: l
    })]
  })
}

function M(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: s,
    locked: l,
    integration: n
  } = e;
  if (null == n || null == n.role_connections_metadata) return null;
  let i = n.role_connections_metadata.map(e => {
    var i, r;
    let o;
    switch (e.type) {
      case S.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
      case S.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
        o = S.OperatorTypes.LESS_THAN;
        break;
      case S.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
      case S.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
        o = S.OperatorTypes.GREATER_THAN;
        break;
      case S.MetadataItemTypes.INTEGER_EQUAL:
      case S.MetadataItemTypes.BOOLEAN_EQUAL:
        o = S.OperatorTypes.EQUAL;
        break;
      case S.MetadataItemTypes.INTEGER_NOT_EQUAL:
      case S.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
        o = S.OperatorTypes.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case S.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
      case S.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
      case S.MetadataItemTypes.INTEGER_EQUAL:
      case S.MetadataItemTypes.INTEGER_NOT_EQUAL:
      case S.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
      case S.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
        return (0, a.jsx)(C, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: s,
          locked: l,
          operator: o,
          applicationId: null === (i = n.application) || void 0 === i ? void 0 : i.id
        }, e.key);
      case S.MetadataItemTypes.BOOLEAN_EQUAL:
      case S.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
        return (0, a.jsx)(h, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: s,
          locked: l,
          operator: o,
          applicationId: null === (r = n.application) || void 0 === r ? void 0 : r.id
        }, e.key)
    }
  });
  return (0, a.jsx)(a.Fragment, {
    children: i
  })
}

function D(e) {
  let t, {
      configurationItems: s,
      onConfigurationChange: l,
      locked: n,
      integrations: i
    } = e,
    r = (0, E.default)();
  if (s.length < 1) return null;
  let o = s[0].configuration.applicationId,
    d = null != o ? null == i ? void 0 : i.find(e => {
      var t;
      return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === o
    }) : void 0;
  if (null != o && null == d) return null;
  let u = null;
  try {
    u = _.default.get(s[0].configuration.connectionType)
  } catch (e) {}
  let c = new Map;
  s.forEach(e => {
    null != e.configuration.connectionMetadataField ? c.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
  });
  let I = {
      configMetadataMap: c,
      onConfigurationChange: l,
      locked: n
    },
    S = null;
  switch (null == u ? void 0 : u.type) {
    case T.PlatformTypes.STEAM:
      S = (0, a.jsx)(R, {
        ...I
      });
      break;
    case T.PlatformTypes.TWITTER:
      S = (0, a.jsx)(x, {
        ...I
      });
      break;
    case T.PlatformTypes.REDDIT:
      S = (0, a.jsx)(L, {
        ...I
      });
      break;
    case T.PlatformTypes.PAYPAL:
      S = (0, a.jsx)(O, {
        ...I
      });
      break;
    case T.PlatformTypes.EBAY:
      S = (0, a.jsx)(A, {
        ...I
      });
      break;
    case T.PlatformTypes.TIKTOK:
      S = (0, a.jsx)(p, {
        ...I
      });
      break;
    default:
      S = (0, a.jsx)(M, {
        ...I,
        integration: d
      })
  }
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)(N, {
      theme: r,
      platform: u,
      integration: d,
      onRemove: () => l(null, t.index),
      locked: n
    }), S]
  })
}