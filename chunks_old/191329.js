"use strict";
s.r(t), s.d(t, {
  GuildSettingsDiscoveryNotice: function() {
    return w
  },
  default: function() {
    return Y
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("748820"),
  i = s("446674"),
  r = s("77078"),
  o = s("45299"),
  d = s("828116"),
  u = s("679653"),
  c = s("804578"),
  E = s("271889"),
  _ = s("75766"),
  I = s("758276"),
  T = s("453910"),
  S = s("283167"),
  f = s("868246"),
  m = s("324105"),
  N = s("385976"),
  g = s("101263"),
  h = s("407063"),
  C = s("694187"),
  R = s("608684"),
  x = s("459698"),
  L = s("923959"),
  O = s("957255"),
  A = s("27618"),
  p = s("697218"),
  M = s("414943"),
  D = s("315102"),
  v = s("794818"),
  G = s("592407"),
  j = s("900938"),
  U = s("26991"),
  P = s("796178"),
  b = s("237938"),
  B = s("53948"),
  y = s("49111"),
  F = s("447621"),
  H = s("782340"),
  k = s("111681");
let w = i.default.connectStores([j.default], () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: s,
    guildMetadata: a
  } = j.default.getProps();
  return {
    guild: e,
    submitting: s,
    onReset() {
      null != e && G.default.init(e.id)
    },
    onSave() {
      null != e && ((0, I.trackDiscoverySettingsChange)(e, t), G.default.saveGuild(e.id, {
        features: e.features,
        discoverySplash: e.discoverySplash,
        description: e.description,
        safetyAlertsChannelId: e.safetyAlertsChannelId,
        rulesChannelId: e.rulesChannelId,
        preferredLocale: e.preferredLocale
      }), S.saveGuildMetadata({
        guildId: e.id,
        primaryCategoryId: a.primaryCategoryId,
        keywords: a.keywords,
        emojiDiscoverabilityEnabled: a.emojiDiscoverabilityEnabled,
        partnerActionedTimestamp: a.partnerActionedTimestamp,
        partnerApplicationTimestamp: a.partnerApplicationTimestamp,
        isPublished: a.isPublished,
        reasonsToJoin: a.reasonsToJoin,
        socialLinks: a.socialLinks,
        about: a.about
      }))
    }
  }
})(o.default);
class V extends l.PureComponent {
  async componentDidMount() {
    let {
      guild: e
    } = this.props;
    if (null != e) {
      (0, E.fetchDiscoveryChecklist)(e.id).then(() => {
        (0, c.trackGuildSettingsDiscoveryViewed)(e.id)
      }), S.maybeFetchGuildDiscoveryCategories(), S.fetchMetadataForGuild(e.id);
      let t = await (0, v.getDiscoverableGuild)(e.id);
      null != t && this.setState({
        discoverableGuild: t
      });
      let s = this.checkForLowerMemberCountReqEnabled(e);
      s && T.DiscoveryRequirementsM2Experiment.trackExposure({
        guildId: e.id,
        location: "006266_1"
      })
    }
  }
  renderDiscoverableSection() {
    let {
      guild: e,
      isGuildAdmin: t
    } = this.props;
    if (null == e) return;
    let s = e.hasFeature(y.GuildFeatures.DISCOVERABLE);
    return (0, a.jsxs)(r.FormSection, {
      className: k.twoColumnFormSection,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.FormTitle, {
          className: k.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: k.formDescription,
          children: H.default.Messages.FORM_HELP_ENABLE_DISCOVERABLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: k.formDescription,
          children: H.default.Messages.FORM_HELP_DISCOVERABLE_CHANGE_TIME
        }), (0, a.jsx)(r.Tooltip, {
          text: t ? null : H.default.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
          children: e => (0, a.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: this.handleToggleDiscovery,
            color: s ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
            hover: s ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
            disabled: !t,
            ...e,
            children: s ? H.default.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE : H.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
          })
        })]
      }), (0, a.jsx)(m.default, {
        className: k.guildCard,
        loading: null == e,
        guild: e
      })]
    })
  }
  renderCoverImageSection() {
    let {
      guild: e,
      errors: t,
      canManageGuild: s
    } = this.props;
    if (null != e) return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(r.FormSection, {
        className: k.twoColumnFormSection,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(r.FormTitle, {
            className: k.formTitle,
            children: H.default.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
          }), (0, a.jsx)(r.FormText, {
            type: r.FormTextTypes.DESCRIPTION,
            className: k.formDescription,
            children: H.default.Messages.FORM_HELP_DISCOVERY_COVER_IMAGE
          }), (0, a.jsxs)(r.Button, {
            size: r.Button.Sizes.SMALL,
            color: r.Button.Colors.PRIMARY,
            hover: r.Button.Colors.PRIMARY,
            children: [H.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(C.default, {
              disabled: !s,
              onChange: this.handleSplashChange
            })]
          })]
        }), (0, a.jsx)("div", {
          className: k.imageUploaderWrapper,
          children: (0, a.jsx)(R.default, {
            image: e.discoverySplash,
            makeURL: t => D.default.getGuildDiscoverySplashURL({
              id: e.id,
              splash: t,
              size: 512 * (0, h.getDevicePixelRatio)()
            }),
            disabled: !s,
            onChange: this.handleSplashChange,
            hint: H.default.Messages.CHANGE_SPLASH,
            imageClassName: k.imageUploaderInnerSquare,
            hideSize: !0
          })
        })]
      }), (null == t ? void 0 : t.discovery_splash) != null ? (0, a.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: t.discovery_splash
      }) : null]
    })
  }
  renderEmojiDiscoverabilitySection() {
    var e;
    let {
      canManageGuild: t,
      guildMetadata: s,
      guild: l
    } = this.props, {
      discoverableGuild: i
    } = this.state, {
      emojiDiscoverabilityEnabled: o
    } = s, d = i;
    if (null == d && null != l) {
      let e = N.default.getGuildEmoji(l.id);
      d = {
        ...l,
        premiumSubscriptionCount: null == l ? void 0 : l.premiumSubscriberCount,
        emojis: e,
        emojiCount: e.length,
        presenceCount: 1234,
        memberCount: 1234
      }
    }
    let u = null != d ? g.default.createFromDiscoverableGuild(d) : null,
      c = null == d ? void 0 : null === (e = d.emojis) || void 0 === e ? void 0 : e[0],
      E = null != c ? {
        name: c.require_colons ? ":".concat(c.name, ":") : c.name,
        emojiId: c.id,
        animated: c.animated,
        jumboable: !0
      } : {};
    return (0, a.jsxs)(r.FormSection, {
      className: k.twoColumnFormSection,
      children: [(0, a.jsxs)("div", {
        className: k.formColumnLeft,
        children: [(0, a.jsx)(r.FormTitle, {
          className: k.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_TITLE
        }), (0, a.jsx)(r.FormText, {
          className: k.description,
          type: r.FormTextTypes.DESCRIPTION,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DESCRIPTION
        }), (0, a.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          color: o ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
          hover: o ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
          disabled: !t,
          onClick: this.handleToggleEmojiDiscoverability,
          children: o ? H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DISABLE : H.default.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_ENABLE
        })]
      }), null != u && u.isDiscoverable() && (0, a.jsx)(x.CustomGuildEmojiPopout, {
        expressionSourceGuild: u,
        node: E,
        closePopout: y.NOOP,
        nonce: (0, n.v4)(),
        demoMode: !0
      })]
    })
  }
  renderLocaleSelector() {
    let {
      guild: e,
      canManageGuild: t,
      localeOptions: s
    } = this.props;
    if (null != e) return (0, a.jsxs)(r.FormSection, {
      className: k.twoColumnFormSection,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.FormTitle, {
          className: k.formTitle,
          children: H.default.Messages.FORM_LABEL_SERVER_LANGUAGE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: k.formDescription,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_LOCALE_HELP
        })]
      }), (0, a.jsx)("div", {
        className: k.formSelect,
        children: (0, a.jsx)(r.SingleSelect, {
          value: e.preferredLocale,
          options: s,
          onChange: this.handleLocaleChange,
          isDisabled: !t
        })
      })]
    })
  }
  renderCategoriesSection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      primaryCategoryOptions: s,
      errors: l,
      guild: n
    } = this.props;
    if (null != n) return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(r.FormSection, {
        children: [(0, a.jsx)(r.FormTitle, {
          className: k.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_TITLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: k.description,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_DESCRIPTION
        })]
      }), (0, a.jsx)(M.default, {
        value: t.primaryCategoryId === F.DEFAULT_DISCOVERY_CATEGORY_ID ? null : t.primaryCategoryId,
        placeholder: H.default.Messages.SELECT,
        options: s,
        onChange: this.handlePrimaryCategoryChange,
        disabled: !e,
        searchable: !0,
        clearable: !0
      }), (0, a.jsxs)(r.FormSection, {
        className: k.noDividerFormSection,
        children: [(0, a.jsx)(r.FormTitle, {
          className: k.formTitle,
          children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
        }), (0, a.jsx)(U.default, {
          guild: n,
          guildMetadata: t
        })]
      }), (null == l ? void 0 : l.category) != null ? (0, a.jsx)(r.Text, {
        color: "text-danger",
        className: k.error,
        variant: "text-sm/normal",
        children: l.category
      }) : null]
    })
  }
  renderKeywordsSection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      errors: s
    } = this.props;
    return (0, a.jsxs)(r.FormSection, {
      children: [(0, a.jsx)(r.FormTitle, {
        className: k.formTitle,
        children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_TITLE
      }), (0, a.jsx)(r.FormText, {
        className: k.description,
        type: r.FormTextTypes.DESCRIPTION,
        children: H.default.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_DESCRIPTION.format()
      }), (0, a.jsx)(d.default, {
        tags: t.keywords,
        onRemoveTag: this.handleRemoveKeyword,
        onAddTag: this.handleAddKeyword,
        maxTags: B.MAX_KEYWORDS,
        maxTaxLength: B.MAX_KEYWORD_LENGTH,
        disabled: !e
      }), (null == s ? void 0 : s.keywords) != null ? (0, a.jsx)(r.Text, {
        color: "text-danger",
        className: k.error,
        variant: "text-sm/normal",
        children: s.keywords
      }) : null]
    })
  }
  render() {
    let {
      guild: e,
      discoveryChecklist: t,
      isGuildAdmin: s
    } = this.props;
    if (null == e || null == t) return null;
    let l = (0, I.getSettingsView)(e, t);
    switch (l) {
      case I.DiscoverySettingsViews.INTRO:
        return (0, a.jsx)(b.default, {
          guild: e,
          onEnableDiscovery: this.handleEnableDiscovery,
          isGuildAdmin: s
        });
      case I.DiscoverySettingsViews.DISQUALIFIED:
        return (0, a.jsx)(P.default, {
          guild: e
        });
      case I.DiscoverySettingsViews.SETTINGS:
        return (0, a.jsxs)(r.FormSection, {
          className: k.discoverySettings,
          title: H.default.Messages.DISCOVERY,
          tag: r.FormTitleTags.H1,
          children: [this.renderDiscoverableSection(), (0, a.jsx)(r.FormDivider, {
            className: k.divider
          }), this.renderCoverImageSection(), (0, a.jsx)(r.FormDivider, {
            className: k.divider
          }), this.renderEmojiDiscoverabilitySection(), (0, a.jsx)(r.FormDivider, {
            className: k.divider
          }), this.renderCategoriesSection(), (0, a.jsx)(r.FormDivider, {
            className: k.divider
          }), this.renderKeywordsSection(), (0, a.jsx)(r.FormDivider, {
            className: k.divider
          }), this.renderLocaleSelector()]
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), this.state = {
      discoverableGuild: null
    }, this.checkForLowerMemberCountReqEnabled = e => {
      let {
        isGuildAdmin: t
      } = this.props, s = e.hasFeature(y.GuildFeatures.COMMUNITY), {
        enableLowerMemberCountReq: a
      } = T.DiscoveryRequirementsM2Experiment.getCurrentConfig({
        guildId: e.id,
        location: "006266_2"
      }, {
        disable: !(t && s),
        autoTrackExposure: !1
      });
      return a
    }, this.handleToggleDiscovery = () => {
      let {
        guild: e
      } = this.props;
      if (null == e) return;
      let t = new Set(e.features);
      e.hasFeature(y.GuildFeatures.DISCOVERABLE) ? t.delete(y.GuildFeatures.DISCOVERABLE) : t.add(y.GuildFeatures.DISCOVERABLE), G.default.updateGuild({
        features: t
      })
    }, this.handleEnableDiscovery = async () => {
      let e = await (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("941089").then(s.bind(s, "941089"));
        return t => {
          let {
            ...s
          } = t;
          return (0, a.jsx)(e, {
            ...s
          })
        }
      }, {
        onCloseRequest: () => {
          null != e && (0, r.closeModal)(e)
        }
      })
    }, this.handleSplashChange = e => {
      G.default.updateGuild({
        discoverySplash: e
      })
    }, this.handleLocaleChange = e => {
      G.default.updateGuild({
        preferredLocale: e
      })
    }, this.handlePrimaryCategoryChange = e => {
      var t;
      let {
        guild: s
      } = this.props;
      (null == s ? void 0 : s.id) != null && S.updateGuildPrimaryCategory(null == s ? void 0 : s.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : F.DEFAULT_DISCOVERY_CATEGORY_ID)
    }, this.handleRemoveKeyword = e => {
      let {
        guild: t,
        guildMetadata: s
      } = this.props;
      if ((null == t ? void 0 : t.id) == null) return;
      let a = [...s.keywords];
      a.splice(e, 1), S.updateGuildKeywords(t.id, a)
    }, this.handleAddKeyword = e => {
      let {
        guild: t,
        guildMetadata: s
      } = this.props, {
        keywords: a
      } = s;
      if ((null == t ? void 0 : t.id) != null) !(a.length >= B.MAX_KEYWORDS) && S.updateGuildKeywords(t.id, [...a, e])
    }, this.handleToggleEmojiDiscoverability = () => {
      let {
        guild: e,
        guildMetadata: t
      } = this.props, {
        emojiDiscoverabilityEnabled: s
      } = t;
      (null == e ? void 0 : e.id) != null && S.updateGuildEmojiDiscoverabilityEnabled(e.id, !s)
    }
  }
}
var Y = i.default.connectStores([j.default, O.default, _.default, L.default, f.default, p.default, A.default], () => {
  let {
    guild: e,
    errors: t,
    submitting: s,
    guildMetadata: a
  } = j.default.getProps(), l = O.default.can(y.Permissions.MANAGE_GUILD, e), n = O.default.can(y.Permissions.ADMINISTRATOR, e), i = null != e ? _.default.getDiscoveryChecklist(e.id) : null, r = null != e ? L.default.getChannels(e.id) : null, o = [];
  null != r && r[0, L.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
    let {
      channel: t
    } = e;
    t.type === y.ChannelTypes.GUILD_TEXT && o.push({
      value: t.id,
      label: (0, u.computeChannelName)(t, p.default, A.default, !0)
    })
  });
  let d = f.default.getPrimaryCategories().map(e => {
      let {
        categoryId: t,
        name: s
      } = e;
      return {
        value: t,
        label: s
      }
    }),
    c = (0, F.calculateLocaleOptions)();
  return {
    guild: e,
    errors: t,
    submitting: s,
    discoveryChecklist: i,
    selectableChannels: o,
    canManageGuild: l,
    isGuildAdmin: n,
    guildMetadata: a,
    primaryCategoryOptions: d,
    localeOptions: c
  }
})(V)