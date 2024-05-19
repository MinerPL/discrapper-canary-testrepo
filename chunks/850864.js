"use strict";
s.r(t), s.d(t, {
  GuildSettingsHomeSettingsNotice: function() {
    return eE
  },
  default: function() {
    return eu
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("399606"),
  o = s("780384"),
  d = s("481060"),
  u = s("852860"),
  c = s("367907"),
  E = s("471445"),
  _ = s("603211"),
  I = s("710344"),
  T = s("807582"),
  S = s("26323"),
  f = s("307707"),
  m = s("734893"),
  N = s("305762"),
  g = s("150512"),
  h = s("516129"),
  C = s("813197"),
  R = s("210887"),
  x = s("314897"),
  L = s("592125"),
  O = s("984933"),
  A = s("430824"),
  p = s("976644"),
  M = s("93879"),
  D = s("263704"),
  v = s("465670"),
  G = s("548343"),
  j = s("586791"),
  U = s("709586"),
  P = s("151785"),
  b = s("931468"),
  B = s("768581"),
  y = s("700785"),
  F = s("434404"),
  H = s("999382"),
  k = s("8426"),
  w = s("969632"),
  V = s("981631"),
  Y = s("30513"),
  W = s("486324"),
  z = s("200299"),
  K = s("689938"),
  Z = s("94078"),
  X = s("91716"),
  Q = s("470264"),
  J = s("710043"),
  q = s("847950");

function $(e) {
  let {
    guildId: t,
    welcomeMessage: n
  } = e, o = l.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("36371")]).then(s.bind(s, "893626"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        welcomeMessage: n,
        onSave: e => (0, k.updateWelcomeMessage)(e)
      })
    })
  }, [t, n]), u = (0, r.useStateFromStores)([x.default], () => x.default.getId());
  return (0, m.isWelcomeMessageEmpty)(n) ? (0, a.jsx)(d.Button, {
    size: d.Button.Sizes.SMALL,
    onClick: o,
    children: (0, a.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_SETUP_WELCOME
    })
  }) : (0, a.jsxs)(d.Clickable, {
    className: Z.editWelcomeSection,
    onClick: o,
    children: [(0, a.jsx)(g.default, {
      guildId: t,
      welcomeMessage: {
        authorIds: n.authorIds.length > 0 ? n.authorIds : [u],
        message: n.message
      }
    }), (0, a.jsx)(d.Tooltip, {
      text: K.default.Messages.EDIT,
      children: e => (0, a.jsxs)("div", {
        ...e,
        className: i()(Z.actionItemEditButton, Z.editWelcomeButton),
        children: [(0, a.jsx)(j.default, {
          className: Z.__invalid_editIcon
        }), (0, a.jsx)(d.HiddenVisually, {
          children: K.default.Messages.EDIT
        })]
      })
    })]
  })
}

function ee(e) {
  var t, n, o, u, c;
  let {
    guildId: I,
    action: T,
    actionIndex: S,
    onChange: g,
    onDelete: h,
    onDragStart: C,
    onDragComplete: R,
    onDragReset: x
  } = e, O = (0, r.useStateFromStores)([L.default], () => L.default.getChannel(T.channelId)), p = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(I)), {
    customEmoji: D,
    unicodeEmoji: v
  } = (0, f.default)(null === (t = T.emoji) || void 0 === t ? void 0 : t.id, null === (n = T.emoji) || void 0 === n ? void 0 : n.name), U = null == T.emoji || null != D || null != v, P = B.default.getNewMemberActionIconURL({
    channelId: T.channelId,
    icon: T.icon
  }), b = null;
  null != O && (0, m.isChannelValidForNewMemberAction)(O) ? !U && (b = K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL_EMOJI) : b = K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL;
  let {
    drag: y,
    dragSourcePosition: F,
    drop: H,
    setIsDraggable: w
  } = (0, _.default)({
    type: "NEW_MEMBER_ACTION",
    index: S,
    optionId: T.channelId,
    onDragStart: C,
    onDragComplete: R,
    onDragReset: x
  }), V = l.useCallback((e, t) => {
    (0, k.updateNewMemberActionIconData)(e.channelId, t)
  }, []), Y = l.useCallback(() => {
    if (null != I) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("14653")]).then(s.bind(s, "380716"));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: I,
        action: T,
        onSave: (e, t) => g(S, e, t),
        onDelete: () => h(S),
        onIconUpload: V
      })
    })
  }, [I, T, S, g, h, V]);
  if (null == O || null == p) return null;
  let W = null !== (c = (0, E.getChannelIconComponent)(O)) && void 0 !== c ? c : M.default;
  return (0, a.jsxs)("div", {
    className: i()(Z.actionItemContainer),
    children: [(0, a.jsxs)("div", {
      className: i()(Z.actionItem, {
        [Z.dropIndicatorBefore]: null != F && S < F,
        [Z.dropIndicatorAfter]: null != F && S > F,
        [Z.actionItemError]: null != b
      }),
      ref: e => y(H(e)),
      children: [(0, a.jsx)("div", {
        className: Z.dragContainer,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: (0, a.jsx)(G.default, {
          className: Z.dragIcon
        })
      }), null != P ? (0, a.jsx)("div", {
        className: Z.iconWrapper,
        children: (0, a.jsx)("img", {
          src: P,
          className: Z.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, a.jsx)("div", {
        className: Z.actionItemEmojiWrapper,
        children: (0, a.jsx)(N.default, {
          emojiId: null === (o = T.emoji) || void 0 === o ? void 0 : o.id,
          emojiName: null === (u = T.emoji) || void 0 === u ? void 0 : u.name,
          size: N.CTAEmojiSize.MEDIUM,
          defaultComponent: (0, a.jsx)(W, {})
        })
      }), (0, a.jsxs)("div", {
        className: Z.actionItemText,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: T.title
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: K.default.Messages.NEW_MEMBER_ACTION_CHANNEL.format({
            channelName: O.name
          })
        })]
      }), (0, a.jsx)(d.Tooltip, {
        text: K.default.Messages.EDIT,
        children: e => (0, a.jsxs)(d.Button, {
          ...e,
          className: Z.actionItemEditButton,
          innerClassName: Z.actionItemEditButtonInner,
          size: d.Button.Sizes.MIN,
          onClick: Y,
          children: [(0, a.jsx)(j.default, {
            className: Z.__invalid_editIcon
          }), (0, a.jsx)(d.HiddenVisually, {
            children: K.default.Messages.EDIT
          })]
        })
      })]
    }), null != b && (0, a.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: b
    })]
  })
}

function et(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStoresArray)([w.default], () => {
    var e;
    return null !== (e = w.default.getSettings().newMemberActions) && void 0 !== e ? e : []
  }), n = l.useCallback((e, s) => {
    if (null == t) return;
    (0, k.addNewMemberAction)(e);
    let a = w.default.getSettings();
    if (null == a) return;
    let {
      channelId: l
    } = e;
    (0, k.saveHomeSettings)(t, a, !0).then(() => {
      null != s && (0, k.updateNewMemberActionIcon)(t, l, s, !0)
    })
  }, [t]), i = l.useCallback((e, a, l) => {
    var n;
    if (null == t) return;
    let i = null === (n = s[e]) || void 0 === n ? void 0 : n.channelId;
    if (null == i) return;
    let r = w.default.getSettings();
    if (null == r) return;
    let o = w.default.hasActionIconChanged(i);
    (0, k.updateNewMemberAction)(i, a), (0, k.saveHomeSettings)(t, r, !0).then(() => {
      (0, k.updateNewMemberActionIcon)(t, i, l, o)
    })
  }, [s, t]), o = l.useCallback(e => {
    var t;
    let a = null === (t = s[e]) || void 0 === t ? void 0 : t.channelId;
    null != a && (0, k.deleteNewMemberAction)(a)
  }, [s]), d = s.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: u,
    handleDragReset: c,
    handleDragComplete: E
  } = (0, I.default)(d, k.reorderNewMemberActions);
  return null == t ? null : (0, a.jsxs)("div", {
    className: Z.section,
    children: [s.map((e, s) => (0, a.jsx)(ee, {
      guildId: t,
      action: e,
      actionIndex: s,
      onChange: i,
      onDelete: o,
      onDragStart: u,
      onDragReset: c,
      onDragComplete: E
    }, e.channelId)), (0, a.jsx)(es, {}), s.length < m.NEW_MEMBER_ACTION_MAX && (0, a.jsx)(ea, {
      guildId: t,
      onAddAction: n
    })]
  })
}

function es() {
  return (0, a.jsx)("div", {
    className: Z.actionItemContainer,
    children: (0, a.jsxs)("div", {
      className: Z.actionItem,
      children: [(0, a.jsx)("div", {
        className: Z.actionItemEmojiWrapper,
        children: (0, a.jsx)(b.default, {
          height: 20,
          width: 22
        })
      }), (0, a.jsx)("div", {
        className: Z.actionItemText,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })
  })
}

function ea(e) {
  let {
    guildId: t,
    onAddAction: n
  } = e, i = l.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("14653")]).then(s.bind(s, "380716"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onSave: n
      })
    })
  }, [t, n]);
  return (0, a.jsxs)(d.Clickable, {
    className: Z.addActionItem,
    onClick: i,
    children: [(0, a.jsx)(P.default, {}), (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "none",
      children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_TASK
    })]
  })
}

function el() {
  return (0, a.jsxs)("div", {
    className: Z.badExample,
    children: [(0, a.jsx)(d.Text, {
      variant: "eyebrow",
      color: "header-secondary",
      children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_REASON
    }), (0, a.jsxs)("div", {
      className: Z.example,
      children: [(0, a.jsx)("div", {
        className: Z.badExampleIcon,
        children: (0, a.jsx)(v.default, {})
      }), (0, a.jsxs)("div", {
        className: Z.__invalid_exampleText,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_TITLE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_CHANNEL
        })]
      })]
    })]
  })
}

function en(e) {
  var t;
  let {
    guildId: n
  } = e, i = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(n)), o = null !== (t = null == i ? void 0 : i.hasFeature(V.GuildFeatures.BANNER)) && void 0 !== t && t, u = l.useCallback((e, t) => {
    if (null != n) {
      if (null == e || void 0 === t) {
        F.default.updateGuild({
          homeHeader: null
        });
        return
      }(0, d.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([s.e("99387"), s.e("75409")]).then(s.bind(s, "850085"));
        return s => (0, a.jsx)(l, {
          imgURI: e,
          file: t,
          onCrop: e => F.default.saveGuild(n, {
            homeHeader: e
          }),
          uploadType: W.UploadTypes.HOME_HEADER,
          ...s
        })
      })
    }
  }, [n]), E = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != i && ((0, c.trackWithMetadata)(V.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: V.AnalyticsSections.GUILD_SETTINGS_ONBOARDING,
        object: V.AnalyticsObjects.LEARN_MORE
      },
      guild_id: null == i ? void 0 : i.id,
      location_stack: []
    }), (0, S.default)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: V.AnalyticsSections.GUILD_SETTINGS_ONBOARDING,
        object: V.AnalyticsObjects.ONBOARDING_EDIT,
        page: V.AnalyticsPages.GUILD_SETTINGS
      },
      guild: i,
      perks: (0, Y.guildBannerUpsellPerks)()
    }))
  }, [i]);
  if (null == i) return null;
  let _ = (0, a.jsx)(h.default, {
    image: i.homeHeader,
    makeURL: e => null != e ? B.default.getGuildHomeHeaderURL({
      id: i.id,
      homeHeader: e
    }) : null,
    disabled: !o,
    onChange: u,
    hint: K.default.Messages.CHANGE_HOME_HEADER,
    enabled: o,
    maxFileSizeBytes: z.MAX_IMAGE_UPLOAD_FILESIZE_BYTES
  });
  return o ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: Z.sectionHeader,
      children: [(0, a.jsx)(d.Heading, {
        className: Z.header,
        variant: "heading-lg/extrabold",
        children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, a.jsx)(T.default, {
        className: Z.boostIndicator,
        guild: i,
        guildFeature: V.GuildFeatures.BANNER,
        onClick: E
      })]
    }), (0, a.jsxs)("div", {
      className: Z.section,
      children: [(0, a.jsxs)("div", {
        className: Z.homeBannerExplainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: K.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, a.jsxs)(d.Button, {
          color: d.ButtonColors.BRAND_NEW,
          className: Z.uploadButton,
          children: [K.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(C.default, {
            onChange: u,
            maxFileSizeBytes: z.MAX_IMAGE_UPLOAD_FILESIZE_BYTES
          })]
        })]
      }), (0, a.jsx)("div", {
        className: Z.__invalid_homeBannerImage,
        children: _
      })]
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: Z.sectionHeader,
      children: [(0, a.jsx)(d.Heading, {
        className: Z.header,
        variant: "heading-lg/extrabold",
        children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, a.jsx)(T.default, {
        className: Z.boostIndicator,
        guild: i,
        guildFeature: V.GuildFeatures.BANNER,
        onClick: E
      })]
    }), (0, a.jsxs)("div", {
      className: Z.section,
      children: [(0, a.jsxs)("div", {
        className: Z.homeBannerExplainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: K.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, a.jsxs)(p.default, {
          className: Z.upsellButton,
          innerClassName: Z.upsellButtonInner,
          color: d.Button.Colors.GREEN,
          onClick: E,
          children: [(0, a.jsx)(U.default, {
            height: 16,
            width: 16,
            className: Z.__invalid_premiumUpsellBadge
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: K.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
          })]
        })]
      }), (0, a.jsx)("div", {
        className: Z.__invalid_homeBannerImage,
        children: (0, a.jsx)(d.Clickable, {
          "aria-hidden": !0,
          tabIndex: -1,
          className: Z.__invalid_upsell,
          onClick: E,
          children: _
        })
      })]
    })]
  })
}

function ei(e) {
  let {
    guildId: t,
    resourceChannel: n,
    index: o,
    onDragComplete: u,
    onDragStart: c,
    onDragReset: E
  } = e, I = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(t)), {
    title: T,
    channelId: S,
    description: f
  } = n, N = L.default.getChannel(S), g = null;
  (null == N || !(0, m.isChannelValidForResourceChannel)(N)) && (g = K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_RESOURCE_CHANNEL);
  let h = null == f || 0 === f.length,
    C = B.default.getResourceChannelIconURL({
      channelId: n.channelId,
      icon: n.icon
    }),
    {
      drag: R,
      dragSourcePosition: x,
      drop: O,
      setIsDraggable: p
    } = (0, _.default)({
      type: "RESOURCE_CHANNEL",
      optionId: n.channelId,
      index: o,
      onDragStart: c,
      onDragComplete: u,
      onDragReset: E
    }),
    M = l.useCallback(e => {
      (0, k.updateResourceChannel)(n.channelId, e)
    }, [n.channelId]),
    D = l.useCallback((e, s) => {
      if (null == t) return;
      let a = w.default.getSettings();
      null != a && ((0, k.updateResourceChannel)(n.channelId, e), (0, k.saveHomeSettings)(t, a).then(() => {
        (0, k.updateResourceChannelIcon)(t, e.channelId, s)
      }))
    }, [t, n]),
    v = l.useCallback(() => {
      if (null != t) return (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("84725")]).then(s.bind(s, "462499"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          resourceChannel: n,
          onSave: M,
          onDelete: () => (0, k.deleteResourceChannel)(n.channelId),
          onIconUpload: D
        })
      })
    }, [t, n, M, D]);
  return null == I || null == N ? null : (0, a.jsxs)("div", {
    className: i()(Z.resourceChannelContainer),
    children: [(0, a.jsxs)("div", {
      className: i()(Z.resourceChannel, {
        [Z.dropIndicatorBefore]: null != x && o < x,
        [Z.dropIndicatorAfter]: null != x && o > x,
        [Z.resourceChannelError]: null != g
      }),
      ref: e => R(O(e)),
      children: [(0, a.jsx)("div", {
        className: Z.dragContainer,
        onMouseEnter: () => p(!0),
        onMouseLeave: () => p(!1),
        children: (0, a.jsx)(G.default, {
          className: Z.dragIcon
        })
      }), null != C && (0, a.jsx)("div", {
        className: Z.iconWrapper,
        children: (0, a.jsx)("img", {
          src: C,
          className: Z.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: Z.resourceChannelContent,
        children: [(0, a.jsx)(d.Text, {
          className: Z.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: T
        }), !h && (0, a.jsx)(d.Text, {
          className: Z.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: f
        })]
      }), (0, a.jsx)(d.Tooltip, {
        text: K.default.Messages.EDIT,
        children: e => (0, a.jsxs)(d.Button, {
          ...e,
          className: Z.resourceChannelEditButton,
          innerClassName: Z.resourceChannelEditButtonInner,
          size: d.Button.Sizes.MIN,
          onClick: v,
          children: [(0, a.jsx)(j.default, {}), (0, a.jsx)(d.HiddenVisually, {
            children: K.default.Messages.EDIT
          })]
        })
      })]
    }), null != g && (0, a.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: g
    })]
  })
}

function er(e) {
  var t;
  let {
    channel: s,
    isLast: n
  } = e, i = l.useCallback(() => {
    (0, k.addResourceChannel)({
      channelId: s.id,
      title: s.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [s]), r = null !== (t = (0, E.getChannelIconComponent)(s)) && void 0 !== t ? t : M.default;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: Z.suggestedChannel,
      children: [(0, a.jsx)(r, {
        className: Z.suggestedChannelIcon
      }), (0, a.jsx)(d.Text, {
        className: Z.suggestedChannelText,
        variant: "text-sm/normal",
        children: s.name
      }), (0, a.jsx)(d.Button, {
        className: Z.suggestedChannelButton,
        size: d.Button.Sizes.MIN,
        onClick: i,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: K.default.Messages.ADD
        })
      })]
    }), n && (0, a.jsx)("div", {
      className: Z.suggestedSeparator
    })]
  })
}

function eo(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(t)), n = (0, r.useStateFromStoresArray)([w.default], () => {
    var e, t;
    return null !== (t = null === (e = w.default.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== t ? t : []
  }), i = (0, r.useStateFromStoresArray)([w.default], () => w.default.getDismissedSuggestedChannelIds(t)), o = (0, r.useStateFromStores)([O.default], () => null == t ? [] : O.default.getSelectableChannels(t)).filter(e => !i.includes(e.channel.id) && !n.includes(e.channel.id) && e.channel.type === V.ChannelTypes.GUILD_TEXT && y.canEveryoneRole(V.Permissions.VIEW_CHANNEL, e.channel) && !y.canEveryoneRole(V.Permissions.SEND_MESSAGES, e.channel) && e.channel.id !== (null == s ? void 0 : s.rulesChannelId)).slice(0, 5), u = l.useCallback(() => {
    let e = o.map(e => e.channel.id);
    (0, k.dismissSuggestedChannels)(t, e)
  }, [t, o]);
  return o.length <= 0 || n.length >= m.RESOURCE_CHANNEL_MAX ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: Z.suggestedChannelsSection,
      children: [(0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: K.default.Messages.RECOMMENDED
      }), (0, a.jsxs)("div", {
        className: Z.suggestedChannelsHeader,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_EXPLAINER
        }), (0, a.jsxs)(d.Clickable, {
          className: Z.suggestedChannelsDismiss,
          onClick: u,
          children: [(0, a.jsx)(D.default, {
            className: Z.suggestedChannelsDismissCheck
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_DISMISS
          })]
        })]
      }), (0, a.jsx)("div", {
        className: Z.suggestedChannels,
        children: o.map((e, t) => (0, a.jsx)(er, {
          channel: e.channel,
          isLast: t < o.length - 1
        }, e.channel.id))
      })]
    }), (0, a.jsx)("div", {
      className: Z.sectionSeparator
    })]
  })
}

function ed(e) {
  let {
    guildId: t
  } = e, n = (0, r.useStateFromStoresArray)([w.default], () => {
    var e;
    return null !== (e = w.default.getSettings().resourceChannels) && void 0 !== e ? e : []
  }), i = n.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: o,
    handleDragReset: u,
    handleDragComplete: c
  } = (0, I.default)(i, k.reorderResourceChannels), E = l.useCallback((e, s) => {
    if (null == t) return;
    let a = w.default.getSettings();
    null != a && ((0, k.addResourceChannel)(e), (0, k.saveHomeSettings)(t, a).then(() => {
      (0, k.updateResourceChannelIcon)(t, e.channelId, s)
    }))
  }, [t]), _ = l.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("84725")]).then(s.bind(s, "462499"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onSave: k.addResourceChannel,
        onIconUpload: E
      })
    })
  }, [t, E]);
  return (0, a.jsxs)("div", {
    className: Z.editResources,
    children: [n.map((e, s) => (0, a.jsx)(ei, {
      guildId: t,
      resourceChannel: e,
      index: s,
      onDragStart: o,
      onDragReset: u,
      onDragComplete: c
    }, e.channelId)), n.length < m.RESOURCE_CHANNEL_MAX && (0, a.jsxs)(d.Clickable, {
      className: Z.addActionItem,
      onClick: _,
      children: [(0, a.jsx)(P.default, {}), (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "none",
        children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_RESOURCE
      })]
    })]
  })
}

function eu(e) {
  let {
    saveOnClose: t
  } = e, s = (0, r.useStateFromStores)([H.default], () => H.default.getGuildId());
  return null == s ? null : (0, a.jsx)(ec, {
    guildId: s,
    saveOnClose: t
  })
}

function ec(e) {
  let {
    saveOnClose: t,
    guildId: s
  } = e, n = (0, r.useStateFromStoresObject)([w.default], () => {
    var e;
    return null !== (e = w.default.getSettings().welcomeMessage) && void 0 !== e ? e : {
      authorIds: [],
      message: ""
    }
  }), [i, u] = l.useState("new"), c = [{
    value: "new",
    name: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_NEW_MEMBER_EXAMPLE
  }, {
    value: "existing",
    name: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_EXISTING_MEMBER_EXAMPLE
  }], E = (0, r.useStateFromStores)([R.default], () => R.default.theme);
  return l.useEffect(() => () => {
    if (null == s) return;
    let e = w.default.getSettings();
    (0, k.saveHomeSettings)(s, e)
  }, [t, s]), (0, a.jsxs)("div", {
    className: Z.page,
    children: [(0, a.jsxs)("div", {
      className: Z.leftColumn,
      children: [(0, a.jsx)(d.Heading, {
        className: Z.header,
        variant: "heading-lg/extrabold",
        children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_TITLE
      }), (0, a.jsx)("div", {
        className: Z.descriptionSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION
        })
      }), (0, a.jsx)("div", {
        className: Z.section,
        children: (0, a.jsx)($, {
          guildId: s,
          welcomeMessage: n
        })
      }), (0, a.jsx)("div", {
        className: Z.sectionSeparator
      }), (0, a.jsx)(d.Heading, {
        className: Z.header,
        variant: "heading-lg/extrabold",
        children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_TITLE
      }), (0, a.jsx)("div", {
        className: Z.descriptionSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_DESCRIPTION.format()
        })
      }), (0, a.jsx)("div", {
        className: Z.section,
        children: (0, a.jsx)(el, {})
      }), (0, a.jsx)(et, {
        guildId: s
      }), (0, a.jsx)("div", {
        className: Z.sectionSeparator
      }), (0, a.jsx)(d.Heading, {
        className: Z.header,
        variant: "heading-lg/extrabold",
        children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_TITLE
      }), (0, a.jsxs)("div", {
        className: Z.descriptionSection,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_DESCRIPTION
        }), (0, a.jsxs)("ul", {
          className: Z.bulletList,
          children: [(0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_1
            })
          }), (0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_2
            })
          }), (0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_3
            })
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: Z.section,
        children: [(0, a.jsx)(eo, {
          guildId: s
        }), (0, a.jsx)(ed, {
          guildId: s
        })]
      }), (0, a.jsx)("div", {
        className: Z.sectionSeparator
      }), (0, a.jsx)(en, {
        guildId: s
      })]
    }), (0, a.jsxs)("div", {
      className: Z.rightColumn,
      children: [(0, a.jsx)("div", {
        className: Z.centeredSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.default.Messages.EXAMPLE
        })
      }), (0, a.jsx)("img", {
        className: Z.previewImage,
        src: (0, o.isThemeLight)(E) ? "existing" === i ? Q : q : "existing" === i ? X : J,
        alt: K.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_GUIDE_EXAMPLE_ALT
      }), (0, a.jsx)(d.SegmentedControl, {
        options: c,
        value: i,
        onChange: e => {
          let {
            value: t
          } = e;
          return u(String(t))
        },
        look: "pill"
      })]
    })]
  })
}

function eE() {
  let e = (0, r.useStateFromStores)([H.default], () => H.default.getGuild()),
    t = (0, r.useStateFromStores)([w.default], () => w.default.getSettings()),
    s = (0, r.useStateFromStores)([w.default], () => w.default.getSubmitting());
  return null == e ? null : (0, a.jsx)(u.default, {
    onSave: () => {
      try {
        (0, k.saveHomeSettings)(e.id, t)
      } catch {}
    },
    onReset: k.resetHomeSettings,
    submitting: s,
    onSaveText: K.default.Messages.SAVE
  })
}