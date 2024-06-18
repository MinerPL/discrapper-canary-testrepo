"use strict";
t.d(s, {
  T: function() {
    return eE
  },
  Z: function() {
    return ed
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(399606),
  o = t(780384),
  c = t(481060),
  d = t(852860),
  u = t(367907),
  E = t(471445),
  _ = t(603211),
  I = t(710344),
  T = t(807582),
  N = t(26323),
  m = t(307707),
  S = t(734893),
  h = t(305762),
  g = t(150512),
  x = t(516129),
  C = t(813197),
  R = t(210887),
  L = t(314897),
  O = t(592125),
  A = t(984933),
  p = t(430824),
  M = t(93879),
  f = t(263704),
  v = t(465670),
  D = t(548343),
  Z = t(586791),
  j = t(709586),
  U = t(151785),
  G = t(931468),
  P = t(768581),
  b = t(700785),
  B = t(434404),
  y = t(999382),
  F = t(8426),
  w = t(969632),
  k = t(535907),
  H = t(981631),
  V = t(30513),
  Y = t(486324),
  W = t(200299),
  K = t(689938),
  z = t(94078),
  q = t(91716),
  X = t(470264),
  Q = t(710043),
  J = t(847950);

function $(e) {
  let {
    guildId: s,
    welcomeMessage: l
  } = e, o = i.useCallback(() => {
    if (null != s) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("36371")]).then(t.bind(t, 893626));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        welcomeMessage: l,
        onSave: e => (0, F._N)(e)
      })
    })
  }, [s, l]), d = (0, r.e7)([L.default], () => L.default.getId());
  return (0, S.pw)(l) ? (0, n.jsx)(c.Button, {
    size: c.Button.Sizes.SMALL,
    onClick: o,
    children: (0, n.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_SETUP_WELCOME
    })
  }) : (0, n.jsxs)(c.Clickable, {
    className: z.editWelcomeSection,
    onClick: o,
    children: [(0, n.jsx)(g.Z, {
      guildId: s,
      welcomeMessage: {
        authorIds: l.authorIds.length > 0 ? l.authorIds : [d],
        message: l.message
      }
    }), (0, n.jsx)(c.Tooltip, {
      text: K.Z.Messages.EDIT,
      children: e => (0, n.jsxs)("div", {
        ...e,
        className: a()(z.actionItemEditButton, z.editWelcomeButton),
        children: [(0, n.jsx)(Z.Z, {}), (0, n.jsx)(c.HiddenVisually, {
          children: K.Z.Messages.EDIT
        })]
      })
    })]
  })
}

function ee(e) {
  var s, l, o, d, u;
  let {
    guildId: I,
    action: T,
    actionIndex: N,
    onChange: g,
    onDelete: x,
    onDragStart: C,
    onDragComplete: R,
    onDragReset: L
  } = e, A = (0, r.e7)([O.Z], () => O.Z.getChannel(T.channelId)), f = (0, r.e7)([p.Z], () => p.Z.getGuild(I)), {
    customEmoji: v,
    unicodeEmoji: j
  } = (0, m.Z)(null === (s = T.emoji) || void 0 === s ? void 0 : s.id, null === (l = T.emoji) || void 0 === l ? void 0 : l.name), U = null == T.emoji || null != v || null != j, G = P.ZP.getNewMemberActionIconURL({
    channelId: T.channelId,
    icon: T.icon
  }), b = null;
  null != A && (0, S.kb)(A) ? !U && (b = K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL_EMOJI) : b = K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL;
  let {
    drag: B,
    dragSourcePosition: y,
    drop: F,
    setIsDraggable: w
  } = (0, _.Z)({
    type: "NEW_MEMBER_ACTION",
    index: N,
    optionId: T.channelId,
    onDragStart: C,
    onDragComplete: R,
    onDragReset: L
  }), k = i.useCallback(() => {
    if (null != I) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("14653")]).then(t.bind(t, 380716));
      return s => (0, n.jsx)(e, {
        ...s,
        guildId: I,
        action: T,
        onSave: (e, s, t) => g(N, e, s, t),
        onDelete: () => x(N)
      })
    })
  }, [I, T, N, g, x]);
  if (null == A || null == f) return null;
  let H = null !== (u = (0, E.KS)(A)) && void 0 !== u ? u : M.Z;
  return (0, n.jsxs)("div", {
    className: a()(z.actionItemContainer),
    children: [(0, n.jsxs)("div", {
      className: a()(z.actionItem, {
        [z.dropIndicatorBefore]: null != y && N < y,
        [z.dropIndicatorAfter]: null != y && N > y,
        [z.actionItemError]: null != b
      }),
      ref: e => B(F(e)),
      children: [(0, n.jsx)("div", {
        className: z.dragContainer,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: (0, n.jsx)(D.Z, {
          className: z.dragIcon
        })
      }), null != G ? (0, n.jsx)("div", {
        className: z.iconWrapper,
        children: (0, n.jsx)("img", {
          src: G,
          className: z.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, n.jsx)("div", {
        className: z.actionItemEmojiWrapper,
        children: (0, n.jsx)(h.Z, {
          emojiId: null === (o = T.emoji) || void 0 === o ? void 0 : o.id,
          emojiName: null === (d = T.emoji) || void 0 === d ? void 0 : d.name,
          size: h.R.MEDIUM,
          defaultComponent: (0, n.jsx)(H, {})
        })
      }), (0, n.jsxs)("div", {
        className: z.actionItemText,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: T.title
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: K.Z.Messages.NEW_MEMBER_ACTION_CHANNEL.format({
            channelName: A.name
          })
        })]
      }), (0, n.jsx)(c.Tooltip, {
        text: K.Z.Messages.EDIT,
        children: e => (0, n.jsxs)(c.Button, {
          ...e,
          className: z.actionItemEditButton,
          innerClassName: z.actionItemEditButtonInner,
          size: c.Button.Sizes.MIN,
          onClick: k,
          children: [(0, n.jsx)(Z.Z, {}), (0, n.jsx)(c.HiddenVisually, {
            children: K.Z.Messages.EDIT
          })]
        })
      })]
    }), null != b && (0, n.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: b
    })]
  })
}

function es(e) {
  let {
    guildId: s
  } = e, t = (0, r.Wu)([w.Z], () => {
    var e;
    return null !== (e = w.Z.getSettings().newMemberActions) && void 0 !== e ? e : []
  }), l = i.useCallback((e, t) => {
    if (null == s) return;
    (0, F.vR)(e);
    let n = w.Z.getSettings();
    if (null == n) return;
    let {
      channelId: i
    } = e;
    (0, F.oo)(s, n, !0).then(() => {
      null != t && (0, F.ad)(s, i, t, !0)
    })
  }, [s]), a = i.useCallback((e, n, i, l) => {
    var a;
    if (null == s) return;
    let r = null === (a = t[e]) || void 0 === a ? void 0 : a.channelId;
    if (null == r) return;
    let o = w.Z.getSettings();
    null != o && ((0, F.el)(r, n), (0, F.oo)(s, o, !0).then(() => {
      (0, F.ad)(s, r, i, l)
    }))
  }, [t, s]), o = i.useCallback(e => {
    var s;
    let n = null === (s = t[e]) || void 0 === s ? void 0 : s.channelId;
    null != n && (0, F.Hr)(n)
  }, [t]), c = t.map(e => ({
    ...e,
    id: e.channelId
  })), d = i.useCallback(e => {
    if (null == s) return;
    (0, F.hS)(e);
    let t = w.Z.getSettings();
    null != t && (0, F.oo)(s, t, !0)
  }, [s]), {
    handleDragStart: u,
    handleDragReset: E,
    handleDragComplete: _
  } = (0, I.Z)(c, d);
  return null == s ? null : (0, n.jsxs)("div", {
    className: z.section,
    children: [t.map((e, t) => (0, n.jsx)(ee, {
      guildId: s,
      action: e,
      actionIndex: t,
      onChange: a,
      onDelete: o,
      onDragStart: u,
      onDragReset: E,
      onDragComplete: _
    }, e.channelId)), (0, n.jsx)(et, {}), t.length < S.O9 && (0, n.jsx)(en, {
      guildId: s,
      onAddAction: l
    })]
  })
}

function et() {
  return (0, n.jsx)("div", {
    className: z.actionItemContainer,
    children: (0, n.jsxs)("div", {
      className: z.actionItem,
      children: [(0, n.jsx)("div", {
        className: z.actionItemEmojiWrapper,
        children: (0, n.jsx)(G.Z, {
          height: 20,
          width: 22
        })
      }), (0, n.jsx)("div", {
        className: z.actionItemText,
        children: (0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })
  })
}

function en(e) {
  let {
    guildId: s,
    onAddAction: l
  } = e, a = i.useCallback(() => {
    if (null != s) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("14653")]).then(t.bind(t, 380716));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        onSave: l
      })
    })
  }, [s, l]);
  return (0, n.jsxs)(c.Clickable, {
    className: z.addActionItem,
    onClick: a,
    children: [(0, n.jsx)(U.Z, {}), (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "none",
      children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_TASK
    })]
  })
}

function ei() {
  return (0, n.jsxs)("div", {
    className: z.badExample,
    children: [(0, n.jsx)(c.Text, {
      variant: "eyebrow",
      color: "header-secondary",
      children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_REASON
    }), (0, n.jsxs)("div", {
      className: z.example,
      children: [(0, n.jsx)("div", {
        className: z.badExampleIcon,
        children: (0, n.jsx)(v.Z, {})
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_TITLE
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_CHANNEL
        })]
      })]
    })]
  })
}

function el(e) {
  var s;
  let {
    guildId: l
  } = e, a = (0, r.e7)([p.Z], () => p.Z.getGuild(l)), o = null !== (s = null == a ? void 0 : a.hasFeature(H.oNc.BANNER)) && void 0 !== s && s, d = i.useCallback((e, s) => {
    if (null != l) {
      if (null == e || void 0 === s) {
        B.Z.saveGuild(l, {
          homeHeader: null
        });
        return
      }(0, c.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("99387"), t.e("75409")]).then(t.bind(t, 850085));
        return t => (0, n.jsx)(i, {
          imgURI: e,
          file: s,
          onCrop: e => B.Z.saveGuild(l, {
            homeHeader: e
          }),
          uploadType: Y.pC.HOME_HEADER,
          ...t
        })
      })
    }
  }, [l]), E = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != a && ((0, u.yw)(H.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: H.jXE.GUILD_SETTINGS_ONBOARDING,
        object: H.qAy.LEARN_MORE
      },
      guild_id: null == a ? void 0 : a.id,
      location_stack: []
    }), (0, N.Z)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: H.jXE.GUILD_SETTINGS_ONBOARDING,
        object: H.qAy.ONBOARDING_EDIT,
        page: H.ZY5.GUILD_SETTINGS
      },
      guild: a,
      perks: (0, V.XO)()
    }))
  }, [a]);
  if (null == a) return null;
  let _ = (0, n.jsx)(x.Z, {
    image: a.homeHeader,
    makeURL: e => null != e ? P.ZP.getGuildHomeHeaderURL({
      id: a.id,
      homeHeader: e
    }) : null,
    disabled: !o,
    onChange: d,
    hint: K.Z.Messages.CHANGE_HOME_HEADER,
    enabled: o,
    maxFileSizeBytes: W.B
  });
  return o ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: z.sectionHeader,
      children: [(0, n.jsx)(c.Heading, {
        className: z.header,
        variant: "heading-lg/extrabold",
        children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, n.jsx)(T.Z, {
        className: z.boostIndicator,
        guild: a,
        guildFeature: H.oNc.BANNER,
        onClick: E
      })]
    }), (0, n.jsxs)("div", {
      className: z.section,
      children: [(0, n.jsxs)("div", {
        className: z.homeBannerExplainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: K.Z.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, n.jsxs)(c.Button, {
          color: c.ButtonColors.BRAND,
          className: z.uploadButton,
          children: [K.Z.Messages.UPLOAD_BACKGROUND, (0, n.jsx)(C.ZP, {
            onChange: d,
            maxFileSizeBytes: W.B
          })]
        })]
      }), (0, n.jsx)("div", {
        children: _
      })]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: z.sectionHeader,
      children: [(0, n.jsx)(c.Heading, {
        className: z.header,
        variant: "heading-lg/extrabold",
        children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, n.jsx)(T.Z, {
        className: z.boostIndicator,
        guild: a,
        guildFeature: H.oNc.BANNER,
        onClick: E
      })]
    }), (0, n.jsxs)("div", {
      className: z.section,
      children: [(0, n.jsxs)("div", {
        className: z.homeBannerExplainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: K.Z.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, n.jsxs)(c.ShinyButton, {
          className: z.upsellButton,
          innerClassName: z.upsellButtonInner,
          color: c.Button.Colors.GREEN,
          onClick: E,
          children: [(0, n.jsx)(j.Z, {
            height: 16,
            width: 16
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: K.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
          })]
        })]
      }), (0, n.jsx)("div", {
        children: (0, n.jsx)(c.Clickable, {
          "aria-hidden": !0,
          tabIndex: -1,
          onClick: E,
          children: _
        })
      })]
    })]
  })
}

function ea(e) {
  let {
    guildId: s,
    resourceChannel: l,
    index: o,
    onDragComplete: d,
    onDragStart: u,
    onDragReset: E
  } = e, I = (0, r.e7)([p.Z], () => p.Z.getGuild(s)), {
    title: T,
    channelId: N,
    description: m
  } = l, h = O.Z.getChannel(N), g = null;
  (null == h || !(0, S.k3)(h)) && (g = K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_RESOURCE_CHANNEL);
  let x = null == m || 0 === m.length,
    C = P.ZP.getResourceChannelIconURL({
      channelId: l.channelId,
      icon: l.icon
    }),
    {
      drag: R,
      dragSourcePosition: L,
      drop: A,
      setIsDraggable: M
    } = (0, _.Z)({
      type: "RESOURCE_CHANNEL",
      optionId: l.channelId,
      index: o,
      onDragStart: u,
      onDragComplete: d,
      onDragReset: E
    }),
    f = i.useCallback(e => {
      (0, F.XG)(l.channelId, e)
    }, [l.channelId]),
    v = i.useCallback((e, t) => {
      if (null == s) return;
      let n = w.Z.getSettings();
      null != n && ((0, F.XG)(l.channelId, e), (0, F.oo)(s, n).then(() => {
        (0, F.mM)(s, e.channelId, t)
      }))
    }, [s, l]),
    j = i.useCallback(() => {
      if (null != s) return (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("84725")]).then(t.bind(t, 462499));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s,
          resourceChannel: l,
          onSave: f,
          onDelete: () => (0, F.Hz)(l.channelId),
          onIconUpload: v
        })
      })
    }, [s, l, f, v]);
  return null == I || null == h ? null : (0, n.jsxs)("div", {
    className: a()(z.resourceChannelContainer),
    children: [(0, n.jsxs)("div", {
      className: a()(z.resourceChannel, {
        [z.dropIndicatorBefore]: null != L && o < L,
        [z.dropIndicatorAfter]: null != L && o > L,
        [z.resourceChannelError]: null != g
      }),
      ref: e => R(A(e)),
      children: [(0, n.jsx)("div", {
        className: z.dragContainer,
        onMouseEnter: () => M(!0),
        onMouseLeave: () => M(!1),
        children: (0, n.jsx)(D.Z, {
          className: z.dragIcon
        })
      }), null != C && (0, n.jsx)("div", {
        className: z.iconWrapper,
        children: (0, n.jsx)("img", {
          src: C,
          className: z.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": !0
        })
      }), (0, n.jsxs)("div", {
        className: z.resourceChannelContent,
        children: [(0, n.jsx)(c.Text, {
          className: z.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: T
        }), !x && (0, n.jsx)(c.Text, {
          className: z.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: m
        })]
      }), (0, n.jsx)(c.Tooltip, {
        text: K.Z.Messages.EDIT,
        children: e => (0, n.jsxs)(c.Button, {
          ...e,
          className: z.resourceChannelEditButton,
          innerClassName: z.resourceChannelEditButtonInner,
          size: c.Button.Sizes.MIN,
          onClick: j,
          children: [(0, n.jsx)(Z.Z, {}), (0, n.jsx)(c.HiddenVisually, {
            children: K.Z.Messages.EDIT
          })]
        })
      })]
    }), null != g && (0, n.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: g
    })]
  })
}

function er(e) {
  var s;
  let {
    channel: t,
    isLast: l
  } = e, a = i.useCallback(() => {
    (0, F.r2)({
      channelId: t.id,
      title: t.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [t]), r = null !== (s = (0, E.KS)(t)) && void 0 !== s ? s : M.Z;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: z.suggestedChannel,
      children: [(0, n.jsx)(r, {
        className: z.suggestedChannelIcon
      }), (0, n.jsx)(c.Text, {
        className: z.suggestedChannelText,
        variant: "text-sm/normal",
        children: t.name
      }), (0, n.jsx)(c.Button, {
        className: z.suggestedChannelButton,
        size: c.Button.Sizes.MIN,
        onClick: a,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: K.Z.Messages.ADD
        })
      })]
    }), l && (0, n.jsx)("div", {
      className: z.suggestedSeparator
    })]
  })
}

function eo(e) {
  let {
    guildId: s
  } = e, t = (0, r.e7)([p.Z], () => p.Z.getGuild(s)), l = (0, r.Wu)([w.Z], () => {
    var e, s;
    return null !== (s = null === (e = w.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== s ? s : []
  }), a = (0, r.Wu)([w.Z], () => w.Z.getDismissedSuggestedChannelIds(s)), o = (0, r.e7)([A.ZP], () => null == s ? [] : A.ZP.getSelectableChannels(s)).filter(e => !a.includes(e.channel.id) && !l.includes(e.channel.id) && e.channel.type === H.d4z.GUILD_TEXT && b.Uu(H.Plq.VIEW_CHANNEL, e.channel) && !b.Uu(H.Plq.SEND_MESSAGES, e.channel) && e.channel.id !== (null == t ? void 0 : t.rulesChannelId)).slice(0, 5), d = i.useCallback(() => {
    let e = o.map(e => e.channel.id);
    (0, F.q6)(s, e)
  }, [s, o]);
  return o.length <= 0 || l.length >= S.x3 ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: z.suggestedChannelsSection,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/semibold",
        children: K.Z.Messages.RECOMMENDED
      }), (0, n.jsxs)("div", {
        className: z.suggestedChannelsHeader,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_EXPLAINER
        }), (0, n.jsxs)(c.Clickable, {
          className: z.suggestedChannelsDismiss,
          onClick: d,
          children: [(0, n.jsx)(f.Z, {
            className: z.suggestedChannelsDismissCheck
          }), (0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_DISMISS
          })]
        })]
      }), (0, n.jsx)("div", {
        className: z.suggestedChannels,
        children: o.map((e, s) => (0, n.jsx)(er, {
          channel: e.channel,
          isLast: s < o.length - 1
        }, e.channel.id))
      })]
    }), (0, n.jsx)("div", {
      className: z.sectionSeparator
    })]
  })
}

function ec(e) {
  let {
    guildId: s
  } = e, l = (0, r.Wu)([w.Z], () => {
    var e;
    return null !== (e = w.Z.getSettings().resourceChannels) && void 0 !== e ? e : []
  }), a = l.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: o,
    handleDragReset: d,
    handleDragComplete: u
  } = (0, I.Z)(a, F.lq), E = i.useCallback((e, t) => {
    if (null == s) return;
    let n = w.Z.getSettings();
    null != n && ((0, F.r2)(e), (0, F.oo)(s, n).then(() => {
      (0, F.mM)(s, e.channelId, t)
    }))
  }, [s]), _ = i.useCallback(() => {
    if (null != s) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("84725")]).then(t.bind(t, 462499));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        onSave: F.r2,
        onIconUpload: E
      })
    })
  }, [s, E]);
  return (0, n.jsxs)("div", {
    className: z.editResources,
    children: [l.map((e, t) => (0, n.jsx)(ea, {
      guildId: s,
      resourceChannel: e,
      index: t,
      onDragStart: o,
      onDragReset: d,
      onDragComplete: u
    }, e.channelId)), l.length < S.x3 && (0, n.jsxs)(c.Clickable, {
      className: z.addActionItem,
      onClick: _,
      children: [(0, n.jsx)(U.Z, {}), (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "none",
        children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_RESOURCE
      })]
    })]
  })
}

function ed(e) {
  let {
    saveOnClose: s
  } = e, t = (0, r.e7)([y.Z], () => y.Z.getGuildId());
  return null == t ? null : (0, n.jsx)(eu, {
    guildId: t,
    saveOnClose: s
  })
}

function eu(e) {
  let {
    saveOnClose: s,
    guildId: t
  } = e, l = (0, r.cj)([w.Z], () => {
    var e;
    return null !== (e = w.Z.getSettings().welcomeMessage) && void 0 !== e ? e : k.z
  }), [a, d] = i.useState("new"), u = [{
    value: "new",
    name: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_NEW_MEMBER_EXAMPLE
  }, {
    value: "existing",
    name: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_EXISTING_MEMBER_EXAMPLE
  }], E = (0, r.e7)([R.Z], () => R.Z.theme);
  return i.useEffect(() => () => {
    if (null == t) return;
    let e = w.Z.getSettings();
    (0, F.oo)(t, e)
  }, [s, t]), (0, n.jsxs)("div", {
    className: z.page,
    children: [(0, n.jsxs)("div", {
      className: z.leftColumn,
      children: [(0, n.jsx)(c.Heading, {
        className: z.header,
        variant: "heading-lg/extrabold",
        children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_TITLE
      }), (0, n.jsx)("div", {
        className: z.descriptionSection,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION
        })
      }), (0, n.jsx)("div", {
        className: z.section,
        children: (0, n.jsx)($, {
          guildId: t,
          welcomeMessage: l
        })
      }), (0, n.jsx)("div", {
        className: z.sectionSeparator
      }), (0, n.jsx)(c.Heading, {
        className: z.header,
        variant: "heading-lg/extrabold",
        children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_TITLE
      }), (0, n.jsx)("div", {
        className: z.descriptionSection,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_DESCRIPTION.format()
        })
      }), (0, n.jsx)("div", {
        className: z.section,
        children: (0, n.jsx)(ei, {})
      }), (0, n.jsx)(es, {
        guildId: t
      }), (0, n.jsx)("div", {
        className: z.sectionSeparator
      }), (0, n.jsx)(c.Heading, {
        className: z.header,
        variant: "heading-lg/extrabold",
        children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_TITLE
      }), (0, n.jsxs)("div", {
        className: z.descriptionSection,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_DESCRIPTION
        }), (0, n.jsxs)("ul", {
          className: z.bulletList,
          children: [(0, n.jsx)("li", {
            children: (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_1
            })
          }), (0, n.jsx)("li", {
            children: (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_2
            })
          }), (0, n.jsx)("li", {
            children: (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_3
            })
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: z.section,
        children: [(0, n.jsx)(eo, {
          guildId: t
        }), (0, n.jsx)(ec, {
          guildId: t
        })]
      }), (0, n.jsx)("div", {
        className: z.sectionSeparator
      }), (0, n.jsx)(el, {
        guildId: t
      })]
    }), (0, n.jsxs)("div", {
      className: z.rightColumn,
      children: [(0, n.jsx)("div", {
        className: z.centeredSection,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: K.Z.Messages.EXAMPLE
        })
      }), (0, n.jsx)("img", {
        className: z.previewImage,
        src: (0, o.ap)(E) ? "existing" === a ? X : J : "existing" === a ? q : Q,
        alt: K.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_GUIDE_EXAMPLE_ALT
      }), (0, n.jsx)(c.SegmentedControl, {
        options: u,
        value: a,
        onChange: e => {
          let {
            value: s
          } = e;
          return d(String(s))
        },
        look: "pill"
      })]
    })]
  })
}

function eE() {
  let e = (0, r.e7)([y.Z], () => y.Z.getGuild()),
    s = (0, r.e7)([w.Z], () => w.Z.getSettings()),
    t = (0, r.e7)([w.Z], () => w.Z.getSubmitting());
  return null == e ? null : (0, n.jsx)(d.Z, {
    onSave: () => {
      try {
        (0, F.oo)(e.id, s)
      } catch {}
    },
    onReset: F.bj,
    submitting: t,
    onSaveText: K.Z.Messages.SAVE
  })
}