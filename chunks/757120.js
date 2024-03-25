"use strict";
s.r(t), s.d(t, {
  GuildSettingsVanityURLNotice: function() {
    return D
  },
  default: function() {
    return G
  }
}), s("781738"), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("642950"),
  u = s("45299"),
  c = s("812204"),
  E = s("716241"),
  _ = s("685665"),
  I = s("634544"),
  T = s("379532"),
  S = s("52393"),
  f = s("102985"),
  m = s("409633"),
  N = s("181114"),
  g = s("118503"),
  h = s("427459"),
  C = s("900938"),
  R = s("610494"),
  x = s("914581"),
  L = s("11893"),
  O = s("49111"),
  A = s("944305"),
  p = s("782340"),
  M = s("705289");
let D = r.default.connectStores([C.default, x.default], () => {
  let e = x.default.vanityURLCode,
    t = C.default.getGuildId();
  return {
    vanityURLCode: e,
    guildId: t,
    onReset() {
      (0, R.resetCode)()
    },
    onSave() {
      null != t && (0, R.saveCode)(t, e)
    }
  }
})(u.default);
class v extends l.PureComponent {
  componentWillUnmount() {
    (0, R.close)()
  }
  renderEditCard() {
    let {
      isRemoving: e
    } = this.state, {
      hasError: t,
      originalVanityURLCode: s,
      vanityURLCode: l,
      vanityURLUses: n,
      guild: i
    } = this.props;
    if (null == l) return (0, a.jsx)(o.Spinner, {});
    let r = (null == i ? void 0 : i.hasFeature(O.GuildFeatures.VANITY_URL)) === !0;
    return (0, a.jsxs)(o.Card, {
      editable: !0,
      className: M.editVanityUrlCard,
      children: [(0, a.jsxs)(o.FormTitle, {
        className: M.formTitle,
        children: [(0, a.jsx)("div", {
          className: M.formTitleField,
          children: p.default.Messages.INVITE_URL
        }), l.length > 0 ? (0, a.jsx)("div", {
          children: p.default.Messages.VANITY_URL_USES.format({
            uses: n
          })
        }) : null]
      }), (0, a.jsx)(m.default, {
        prefix: "".concat("https://discord.gg", "/"),
        value: l,
        onChange: this.handleInviteCodeChange,
        maxLength: 25,
        autoFocus: !0,
        error: t,
        disabled: !r
      }), null != s && s.length > 0 ? (0, a.jsx)(o.Button, {
        className: M.removeVanityUrlButton,
        onClick: this.handleRemoveVanityURL,
        submitting: e,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.MIN,
        color: o.Button.Colors.RED,
        children: p.default.Messages.REMOVE_VANITY_URL
      }) : null]
    })
  }
  renderUpsellButton() {
    return (0, a.jsxs)(N.default, {
      color: o.Button.Colors.GREEN,
      className: i(M.marginTop16),
      innerClassName: M.upsellButton,
      onClick: this.handleVanityUrlUpsellButton,
      children: [(0, a.jsx)(g.default, {
        height: 16,
        width: 16,
        className: M.premiumUpsellBadge
      }), " ", p.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    })
  }
  renderInfo() {
    let {
      hasError: e,
      errorDetails: t,
      originalVanityURLCode: s
    } = this.props;
    if (e) return (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      className: M.marginTop20,
      children: (0, L.getErrorMessageFromErrorCode)(null == t ? void 0 : t.code)
    });
    if (null != s && s.length > 0) {
      let e = (0, S.default)(s);
      return (0, a.jsx)(o.FormText, {
        className: M.marginTop20,
        type: o.FormTextTypes.LABEL_DESCRIPTOR,
        children: p.default.Messages.VANITY_URL_HELP_EXTENDED_LINK.format({
          urlText: e,
          urlValue: e
        })
      })
    }
  }
  handleRemoveVanityURL() {
    (0, R.setCode)("")
  }
  handleInviteCodeChange(e) {
    (0, R.setCode)(e.replace(/ /g, "-"))
  }
  render() {
    let {
      hide: e,
      guild: t
    } = this.props;
    return null == t ? null : e ? (0, a.jsx)(d.default, {}) : (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsxs)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: M.flexFormTitle,
        children: [(0, a.jsx)("div", {
          children: p.default.Messages.VANITY_URL
        }), (0, a.jsx)(I.default, {
          guild: t,
          guildFeature: O.GuildFeatures.VANITY_URL,
          className: M.guildFeatureAvailabilityIndicator,
          onClick: this.handleVanityUrlUpsellIndicator
        })]
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.marginBottom8,
        children: p.default.Messages.VANITY_URL_HELP
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.marginBottom20,
        children: p.default.Messages.VANITY_URL_HELP_CONFLICT
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.marginBottom20,
        children: p.default.Messages.VANITY_URL_DEFAULT_CHANNEL
      }), (0, L.canSeeVanityUrlSettings)(t) ? this.renderEditCard() : this.renderUpsellButton(), this.renderInfo()]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      isRemoving: !1
    }, this.handleShowModalUpsell = (e, t, s, a, l) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: n,
        analyticsLocations: i
      } = this.props;
      null != n && ((0, E.trackWithMetadata)(O.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: s,
          object: O.AnalyticsObjects.LEARN_MORE,
          objectType: (0, h.boostedGuildTierToAnalyticsObjectType)(t),
          location_stack: i
        },
        guild_id: null == n ? void 0 : n.id
      }), (0, T.default)({
        analyticsLocations: i,
        analyticsSourceLocation: {
          section: s,
          object: a,
          page: O.AnalyticsPages.GUILD_SETTINGS
        },
        guild: n,
        perks: l
      }))
    }, this.handleVanityUrlUpsellIndicator = e => {
      this.handleShowModalUpsell(e, O.BoostedGuildTiers.TIER_3, O.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, O.AnalyticsObjects.BADGE, (0, A.vanityUrlUpsellPerks)())
    }, this.handleVanityUrlUpsellButton = e => {
      this.handleShowModalUpsell(e, O.BoostedGuildTiers.TIER_3, O.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, O.AnalyticsObjects.BUTTON_CTA, (0, A.vanityUrlUpsellPerks)())
    }
  }
}

function G() {
  let e = (0, r.useStateFromStores)([C.default], () => C.default.getGuild()),
    t = (0, r.useStateFromStoresObject)([x.default], () => ({
      vanityURLCode: x.default.vanityURLCode,
      vanityURLUses: x.default.vanityURLUses,
      originalVanityURLCode: x.default.originalVanityURLCode,
      hasError: x.default.hasError(),
      errorDetails: x.default.errorDetails
    })),
    s = (0, r.useStateFromStores)([f.default], () => f.default.hideInstantInvites),
    {
      analyticsLocations: l
    } = (0, _.default)(c.default.VANITY_URL);
  return (0, a.jsx)(_.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsx)(v, {
      guild: e,
      ...t,
      hide: s,
      analyticsLocations: l
    })
  })
}