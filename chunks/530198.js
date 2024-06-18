"use strict";
t.d(s, {
  Z: function() {
    return v
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(780384),
  d = t(481060),
  u = t(99690),
  E = t(410030),
  _ = t(726542),
  I = t(465670),
  T = t(981631),
  N = t(856651),
  m = t(689938),
  S = t(90367);

function h(e) {
  var s, t;
  let i, {
    theme: l,
    platform: r,
    integration: E,
    onRemove: _,
    locked: T
  } = e;
  if ((null == E ? void 0 : E.application) != null) o()(null != E.application.bot, "bot is null"), i = (0, n.jsx)(u.Z, {
    size: d.AvatarSizes.SIZE_24,
    user: E.application.bot,
    className: S.verifiedIcon
  });
  else if (null != r) {
    let e = (0, c.ap)(l) ? r.icon.lightSVG : r.icon.darkSVG;
    i = (0, n.jsx)("img", {
      className: S.verifiedIcon,
      src: e,
      alt: m.Z.Messages.IMG_ALT_LOGO.format({
        name: r.name
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: a()(S.verifiedRow, (null == r ? void 0 : r.hasMetadata) === !0 || (null == E ? void 0 : E.role_connections_metadata) != null && (null == E ? void 0 : E.role_connections_metadata.length) > 0 ? S.verifiedRowWithMetadata : null),
    children: [i, (0, n.jsx)(d.Text, {
      variant: "text-md/medium",
      className: S.verifiedText,
      children: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_ACCOUNT.format({
        platformName: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : null == E ? void 0 : null === (s = E.application) || void 0 === s ? void 0 : s.name
      })
    }), (0, n.jsx)(d.Button, {
      "aria-label": m.Z.Messages.REMOVE,
      size: d.Button.Sizes.TINY,
      look: d.Button.Looks.BLANK,
      onClick: _,
      disabled: T,
      className: S.closeButton,
      children: (0, n.jsx)(d.Tooltip, {
        text: m.Z.Messages.REMOVE,
        children: e => (0, n.jsx)(I.Z, {
          className: S.closeIcon,
          ...e
        })
      })
    })]
  })
}

function g(e) {
  var s, t, l;
  let {
    inputRef: a,
    existingPendingConfiguration: r,
    locked: o,
    onConfigurationChange: c,
    platform: u,
    applicationId: E,
    metadataField: _,
    operator: I
  } = e, T = null !== (t = null == r ? void 0 : r.index) && void 0 !== t ? t : -1, m = null != I ? I : N.iO.GREATER_THAN, h = Math.round(Number(null !== (l = null == r ? void 0 : null === (s = r.configuration) || void 0 === s ? void 0 : s.value) && void 0 !== l ? l : 0));
  m === N.iO.GREATER_THAN ? h = Math.max(1, h + 1) : m === N.iO.LESS_THAN && (h = Math.max(0, h - 1));
  let [g, x] = i.useState(h.toString());
  return i.useEffect(() => {
    x(g)
  }, [g]), (0, n.jsx)(d.TextInput, {
    inputRef: a,
    type: "number",
    className: S.numericalRuleInput,
    size: d.TextInput.Sizes.MINI,
    value: g,
    onChange: e => {
      if (null != r) {
        if ("" !== e) {
          var s;
          let t = Math.round(Number(e));
          m === N.iO.GREATER_THAN ? t = Math.max(0, t - 1) : m === N.iO.LESS_THAN && (t = Math.max(1, t + 1)), c({
            connectionType: null !== (s = null == u ? void 0 : u.type) && void 0 !== s ? s : N.Kt,
            applicationId: E,
            connectionMetadataField: _,
            operator: m,
            value: t.toString()
          }, T)
        }
        x(e)
      }
    },
    disabled: o
  }, _)
}

function x(e) {
  let {
    titleText: s,
    fieldText: t,
    metadataField: i,
    existingPendingConfiguration: l,
    platform: a,
    applicationId: r,
    onConfigurationChange: o,
    locked: c
  } = e;
  return (0, n.jsxs)("div", {
    className: S.ruleContainer,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/bold",
        className: S.ruleItemHeader,
        children: s
      }), (0, n.jsx)("div", {
        className: S.numericalRuleSubItemContainer,
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          className: S.numericalRuleSubText,
          children: t
        })
      })]
    }), (0, n.jsx)(d.Switch, {
      className: S.ruleItemSwitch,
      checked: (null == l ? void 0 : l.configuration.value) === "1",
      onChange: e => {
        var s, t;
        let n = null;
        e && (n = {
          connectionType: null !== (s = null == a ? void 0 : a.type) && void 0 !== s ? s : N.Kt,
          applicationId: r,
          connectionMetadataField: i,
          operator: N.iO.EQUAL,
          value: "1"
        }), o(n, null !== (t = null == l ? void 0 : l.index) && void 0 !== t ? t : -1)
      },
      disabled: c
    })]
  }, i)
}

function C(e) {
  let {
    titleText: s,
    fieldText: t,
    fieldTextHook: l,
    metadataField: a,
    existingPendingConfiguration: r,
    platform: o,
    applicationId: c,
    onConfigurationChange: u,
    locked: E,
    operator: _
  } = e, I = i.createRef(), T = (null == r ? void 0 : r.configuration) != null, m = (0, n.jsx)(g, {
    inputRef: I,
    metadataField: a,
    existingPendingConfiguration: r,
    locked: E || !T,
    onConfigurationChange: u,
    platform: o,
    operator: _,
    applicationId: c
  }, a), h = null != l ? l.format({
    metadataHook: () => m
  }) : (0, n.jsxs)(n.Fragment, {
    children: [m, (0, n.jsx)("span", {
      className: S.fieldText,
      children: t
    })]
  });
  return (0, n.jsxs)("div", {
    className: S.ruleContainer,
    children: [(0, n.jsxs)("div", {
      className: S.ruleContainerLabel,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/bold",
        className: S.ruleItemHeader,
        children: s
      }), (0, n.jsx)("div", {
        className: S.numericalRuleSubItemContainer,
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          className: S.numericalRuleSubText,
          children: h
        })
      })]
    }), (0, n.jsx)(d.Switch, {
      className: S.ruleItemSwitch,
      checked: T,
      onChange: e => {
        var s, t, n;
        let i = null;
        if (e) {
          let e = null != _ ? _ : N.iO.GREATER_THAN,
            n = Math.round(Number(null === (s = I.current) || void 0 === s ? void 0 : s.value));
          e === N.iO.GREATER_THAN ? n = Math.max(0, n - 1) : e === N.iO.LESS_THAN && (n = Math.max(1, n + 1)), i = {
            connectionType: null !== (t = null == o ? void 0 : o.type) && void 0 !== t ? t : N.Kt,
            applicationId: c,
            connectionMetadataField: a,
            operator: e,
            value: n.toString()
          }
        }
        u(i, null !== (n = null == r ? void 0 : r.index) && void 0 !== n ? n : -1)
      },
      disabled: E
    })]
  }, a)
}

function R(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i
  } = e, l = _.Z.get(T.ABu.STEAM);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: N.PC.CREATED_AT,
      existingPendingConfiguration: s.get(N.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_STEAM_GAMES,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_GAMES,
      metadataField: N.PC.STEAM_GAME_COUNT,
      existingPendingConfiguration: s.get(N.PC.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
        gameName: m.Z.Messages.CONNECTIONS_STEAM_DOTA2
      }),
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_DOTA2,
      metadataField: N.PC.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: s.get(N.PC.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
        gameName: m.Z.Messages.CONNECTIONS_STEAM_TF2
      }),
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TF2,
      metadataField: N.PC.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: s.get(N.PC.STEAM_ITEM_COUNT_TF2),
      platform: l,
      onConfigurationChange: t,
      locked: i
    })]
  })
}

function L(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i
  } = e, l = _.Z.get(T.ABu.TWITTER);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: N.PC.CREATED_AT,
      existingPendingConfiguration: s.get(N.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_TWITTER_FOLLOWERS,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
      metadataField: N.PC.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: s.get(N.PC.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_TWITTER_STATUSES,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TWEETS,
      metadataField: N.PC.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: s.get(N.PC.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(x, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_VERIFIED,
      fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
      metadataField: N.PC.TWITTER_VERIFIED,
      existingPendingConfiguration: s.get(N.PC.TWITTER_VERIFIED),
      platform: l,
      onConfigurationChange: t,
      locked: i
    })]
  })
}

function O(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i
  } = e, l = _.Z.get(T.ABu.REDDIT);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: N.PC.CREATED_AT,
      existingPendingConfiguration: s.get(N.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_REDDIT_KARMA,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_KARMA,
      metadataField: N.PC.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: s.get(N.PC.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(x, {
      titleText: m.Z.Messages.CONNECTIONS_REDDIT_MOD,
      fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_MOD,
      metadataField: N.PC.REDDIT_MOD,
      existingPendingConfiguration: s.get(N.PC.REDDIT_MOD),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(x, {
      titleText: m.Z.Messages.CONNECTIONS_REDDIT_GOLD,
      fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_GOLD,
      metadataField: N.PC.REDDIT_GOLD,
      existingPendingConfiguration: s.get(N.PC.REDDIT_GOLD),
      platform: l,
      onConfigurationChange: t,
      locked: i
    })]
  })
}

function A(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i
  } = e, l = _.Z.get(T.ABu.PAYPAL);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: N.PC.CREATED_AT,
      existingPendingConfiguration: s.get(N.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(x, {
      titleText: m.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED,
      fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_PAYPAL_VERIFIED_BANK_ACCOUNT,
      metadataField: N.PC.PAYPAL_VERIFIED,
      existingPendingConfiguration: s.get(N.PC.PAYPAL_VERIFIED),
      platform: l,
      onConfigurationChange: t,
      locked: i
    })]
  })
}

function p(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i
  } = e, l = _.Z.get(T.ABu.EBAY);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(C, {
      titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
      metadataField: N.PC.CREATED_AT,
      existingPendingConfiguration: s.get(N.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_POSITIVE_FEEDBACK_PERCENTAGE,
      metadataField: N.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: s.get(N.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      metadataField: N.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: s.get(N.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_MOST_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      metadataField: N.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: s.get(N.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i,
      operator: N.iO.LESS_THAN
    }), (0, n.jsx)(x, {
      titleText: m.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER,
      fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_TOP_RATED_SELLER,
      metadataField: N.PC.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: s.get(N.PC.EBAY_TOP_RATED_SELLER),
      platform: l,
      onConfigurationChange: t,
      locked: i
    })]
  })
}

function M(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i
  } = e, l = _.Z.get(T.ABu.TIKTOK);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(x, {
      titleText: m.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED,
      fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
      metadataField: N.PC.TIKTOK_VERIFIED,
      existingPendingConfiguration: s.get(N.PC.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_TIKTOK_FOLLOWERS,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
      metadataField: N.PC.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: s.get(N.PC.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_TIKTOK_FOLLOWING,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWING,
      metadataField: N.PC.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: s.get(N.PC.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    }), (0, n.jsx)(C, {
      titleText: m.Z.Messages.CONNECTIONS_TIKTOK_LIKES,
      fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_LIKES,
      metadataField: N.PC.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: s.get(N.PC.TIKTOK_LIKES_COUNT),
      platform: l,
      onConfigurationChange: t,
      locked: i
    })]
  })
}

function f(e) {
  let {
    configMetadataMap: s,
    onConfigurationChange: t,
    locked: i,
    integration: l
  } = e;
  if (null == l || null == l.role_connections_metadata) return null;
  let a = l.role_connections_metadata.map(e => {
    var a, r;
    let o;
    switch (e.type) {
      case N.xn.INTEGER_LESS_THAN_EQUAL:
      case N.xn.DATETIME_LESS_THAN_EQUAL:
        o = N.iO.LESS_THAN;
        break;
      case N.xn.INTEGER_GREATER_THAN_EQUAL:
      case N.xn.DATETIME_GREATER_THAN_EQUAL:
        o = N.iO.GREATER_THAN;
        break;
      case N.xn.INTEGER_EQUAL:
      case N.xn.BOOLEAN_EQUAL:
        o = N.iO.EQUAL;
        break;
      case N.xn.INTEGER_NOT_EQUAL:
      case N.xn.BOOLEAN_NOT_EQUAL:
        o = N.iO.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case N.xn.INTEGER_LESS_THAN_EQUAL:
      case N.xn.INTEGER_GREATER_THAN_EQUAL:
      case N.xn.INTEGER_EQUAL:
      case N.xn.INTEGER_NOT_EQUAL:
      case N.xn.DATETIME_LESS_THAN_EQUAL:
      case N.xn.DATETIME_GREATER_THAN_EQUAL:
        return (0, n.jsx)(C, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: s.get(e.key),
          platform: null,
          onConfigurationChange: t,
          locked: i,
          operator: o,
          applicationId: null === (a = l.application) || void 0 === a ? void 0 : a.id
        }, e.key);
      case N.xn.BOOLEAN_EQUAL:
      case N.xn.BOOLEAN_NOT_EQUAL:
        return (0, n.jsx)(x, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: s.get(e.key),
          platform: null,
          onConfigurationChange: t,
          locked: i,
          operator: o,
          applicationId: null === (r = l.application) || void 0 === r ? void 0 : r.id
        }, e.key)
    }
  });
  return (0, n.jsx)(n.Fragment, {
    children: a
  })
}

function v(e) {
  let s, {
      configurationItems: t,
      onConfigurationChange: i,
      locked: l,
      integrations: a
    } = e,
    r = (0, E.ZP)();
  if (t.length < 1) return null;
  let o = t[0].configuration.applicationId,
    c = null != o ? null == a ? void 0 : a.find(e => {
      var s;
      return (null === (s = e.application) || void 0 === s ? void 0 : s.id) === o
    }) : void 0;
  if (null != o && null == c) return null;
  let d = null;
  try {
    d = _.Z.get(t[0].configuration.connectionType)
  } catch (e) {}
  let u = new Map;
  t.forEach(e => {
    null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (s = e)
  });
  let I = {
      configMetadataMap: u,
      onConfigurationChange: i,
      locked: l
    },
    N = null;
  switch (null == d ? void 0 : d.type) {
    case T.ABu.STEAM:
      N = (0, n.jsx)(R, {
        ...I
      });
      break;
    case T.ABu.TWITTER:
      N = (0, n.jsx)(L, {
        ...I
      });
      break;
    case T.ABu.REDDIT:
      N = (0, n.jsx)(O, {
        ...I
      });
      break;
    case T.ABu.PAYPAL:
      N = (0, n.jsx)(A, {
        ...I
      });
      break;
    case T.ABu.EBAY:
      N = (0, n.jsx)(p, {
        ...I
      });
      break;
    case T.ABu.TIKTOK:
      N = (0, n.jsx)(M, {
        ...I
      });
      break;
    default:
      N = (0, n.jsx)(f, {
        ...I,
        integration: c
      })
  }
  return (0, n.jsxs)("div", {
    className: S.container,
    children: [(0, n.jsx)(h, {
      theme: r,
      platform: d,
      integration: c,
      onRemove: () => i(null, s.index),
      locked: l
    }), N]
  })
}