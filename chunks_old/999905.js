"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("714617"),
  o = s.n(r),
  d = s("476042"),
  u = s("446674"),
  c = s("77078"),
  E = s("272030"),
  _ = s("430568"),
  I = s("206230"),
  T = s("679653"),
  S = s("419830"),
  f = s("385976"),
  m = s("233706"),
  N = s("223170"),
  g = s("478964"),
  h = s("310457"),
  C = s("42203"),
  R = s("580357"),
  x = s("476263"),
  L = s("37785"),
  O = s("593195"),
  A = s("315585"),
  p = s("599110"),
  M = s("991170"),
  D = s("592407"),
  v = s("369158"),
  G = s("49111"),
  j = s("843455"),
  U = s("782340"),
  P = s("477320");
let b = "WELCOME_CHANNEL",
  B = e => {
    var t;
    let n, {
        guildId: r,
        welcomeChannel: o,
        onEdit: I,
        onChannelReorder: N,
        isDropHovered: g,
        index: R
      } = e,
      [x, L] = l.useState(!1),
      p = l.useRef(null),
      D = (0, u.useStateFromStores)([C.default], () => C.default.getChannel(o.channel_id)),
      v = (0, u.useStateFromStores)([f.default], () => null != o.emoji_id ? f.default.getUsableCustomEmojiById(o.emoji_id) : null),
      B = null != D && M.canEveryoneRole(G.Permissions.VIEW_CHANNEL, D),
      y = null !== (t = (0, S.getChannelIconComponent)(D)) && void 0 !== t ? t : O.default,
      F = (0, T.default)(D, !1),
      {
        homeSettingsEnabled: H
      } = (0, m.useOnboardingHomeAdminExperiment)(r),
      [, k] = (0, d.useDrag)({
        type: b,
        item: {
          channel: o,
          index: R
        },
        end: (e, t) => {
          null != e && !t.didDrop() && N(e.channel, null, !0)
        }
      }),
      [, w] = (0, d.useDrop)({
        accept: b,
        hover: e => {
          N(e.channel, R, !1)
        },
        drop: e => {
          N(e.channel, R, !0)
        }
      });
    return l.useLayoutEffect(() => (k(w(p)), () => {
      k(null), w(null)
    }), [k, w]), n = B ? null != v || null != o.emoji_name ? (0, a.jsx)(_.default, {
      emojiId: null == v ? void 0 : v.id,
      emojiName: null != v ? v.name : o.emoji_name,
      animated: !!(null == v ? void 0 : v.animated)
    }) : (0, a.jsx)(y, {
      width: 24,
      height: 24,
      className: P.channelIcon
    }) : (0, a.jsx)(A.default, {
      width: 24,
      height: 24,
      className: P.warningIcon
    }), (0, a.jsxs)("div", {
      className: i(P.welcomeChannel, {
        [P.dragging]: g
      }),
      ref: p,
      "data-dnd-name": o.description,
      onContextMenu: e => {
        (0, E.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await s.el("824527").then(s.bind(s, "824527"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: r,
            welcomeChannel: o,
            onChannelReorder: N,
            setShowConfirmModal: L,
            onEdit: I,
            index: R
          })
        })
      },
      children: [n, (0, a.jsxs)("div", {
        className: P.channelDescriptionWrapper,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.description
        }), (0, a.jsxs)(c.Text, {
          className: B ? void 0 : P.channelWarning,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, a.jsx)(y, {
            className: P.channelTitleIcon,
            width: 12,
            height: 12
          }), (0, a.jsx)("span", {
            children: B ? F : U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INVALID_CHANNEL
          })]
        })]
      }), (0, a.jsx)(c.Button, {
        color: c.Button.Colors.PRIMARY,
        size: c.Button.Sizes.SMALL,
        disabled: H,
        onClick: () => (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("277432").then(s.bind(s, "277432"));
          return t => (0, a.jsx)(e, {
            ...t,
            welcomeChannel: o,
            guildId: r,
            onSave: I
          })
        }, {
          onCloseRequest: () => j.NOOP_NULL
        }),
        children: U.default.Messages.EDIT
      }), x && (0, a.jsx)(h.default, {
        onConfirm: () => I(),
        onCancel: () => L(!1),
        channelId: o.channel_id
      })]
    })
  };
var y = e => {
  var t;
  let {
    guild: n,
    showCreateModal: i
  } = e, {
    welcomeSettings: r,
    originalWelcomeSettings: d
  } = (0, u.useStateFromStores)([g.default], () => g.default.getSettingsProps()), E = (0, u.useStateFromStores)([I.default], () => I.default.useReducedMotion), [_, T] = l.useState(null), [S, f] = l.useState(!1), [h, C] = l.useState(!1), {
    description: O,
    channels: M,
    enabled: b
  } = r, {
    homeSettingsEnabled: y
  } = (0, m.useOnboardingHomeAdminExperiment)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : G.EMPTY_STRING_SNOWFLAKE_ID), F = () => {
    if (null != n) O !== d.description && ((0, N.saveWelcomeScreen)(n.id, {
      description: null == O ? void 0 : O.trim()
    }), f(!0))
  }, H = e => {
    if (null != n) !o(e, d.channels) && ((0, N.saveWelcomeScreen)(n.id, {
      channels: e
    }), f(!0))
  }, k = e => {
    if (null != n) e !== d.enabled && ((0, N.saveWelcomeScreen)(n.id, {
      enabled: e
    }), C(!E), f(!0))
  }, w = e => {
    if (null == e) return;
    let t = [...null != M ? M : [], e];
    (0, N.updateSettings)({
      channels: t
    }), H(t)
  }, V = e => t => {
    let s = [...null != M ? M : []];
    null == t ? s.splice(e, 1) : s[e] = t, (0, N.updateSettings)({
      channels: s
    }), H(s), 0 === s.length && b && ((0, N.updateSettings)({
      enabled: !1
    }), k(!1))
  }, Y = (e, t, s) => {
    if (null == M) return;
    let a = M.indexOf(e),
      l = [...M];
    null != t && t !== a && (l.splice(a, 1), l.splice(t, 0, e), (0, N.updateSettings)({
      channels: l
    })), s ? (H(l), T(null)) : T(t)
  }, W = l.useRef(!1);
  l.useEffect(() => (null != n && i && (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await s.el("277432").then(s.bind(s, "277432"));
    return t => (0, a.jsx)(e, {
      ...t,
      guildId: n.id,
      onSave: w
    })
  }, {
    onCloseRequest: () => j.NOOP_NULL
  }), () => {
    W.current = !0
  }), []), l.useEffect(() => () => {
    if (W.current && S) {
      let e = [],
        t = [],
        s = !1;
      null == M || M.forEach(a => {
        e.push(a.description), t.push(a.channel_id), null != a.emoji_id && (s = !0)
      }), p.default.track(G.AnalyticEvents.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
        guild_id: null == n ? void 0 : n.id,
        options: e,
        options_channel_ids: t,
        guild_description: O,
        has_custom_emojis: s,
        is_enabled: b
      })
    }
  }, [S, M, O, b, n, W]), l.useEffect(() => () => (0, N.clearWelcomeScreenSettings)(), []);
  let z = l.useCallback(() => {
    null != n && D.default.open(n.id, G.GuildSettingsSections.ONBOARDING)
  }, [n]);
  return null == n ? null : (0, a.jsxs)(c.FormSection, {
    title: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    tag: c.FormTitleTags.H1,
    children: [y && (0, a.jsx)("div", {
      className: P.notice,
      children: (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: [(0, a.jsx)(A.default, {
          className: P.noticeIcon
        }), U.default.Messages.WELCOME_SCREEN_DEPRECATED.format({
          onboardingLink: e => (0, a.jsx)(L.default, {
            onClick: z,
            children: e
          })
        })]
      })
    }), (0, a.jsx)(c.Text, {
      className: P.description,
      variant: "text-sm/normal",
      children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SETTINGS_TEXT
    }), (0, a.jsx)(v.default, {
      enabled: b,
      onPreview: (null == M ? void 0 : M.length) === 0 ? void 0 : () => {
        null != n && (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("900257").then(s.bind(s, "900257"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: n.id,
            isPreview: !0
          })
        })
      },
      onToggle: b || (null == M ? void 0 : M.length) !== 0 ? () => {
        k(!b)
      } : void 0,
      animateStatus: h,
      firstLine: b ? U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED : U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PROGRESS_WILL_SAVE,
      secondLine: b ? U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED_SECOND_LINE : U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLE_REMINDER
    }), (0, a.jsxs)("div", {
      className: P.previewContainer,
      children: [(0, a.jsxs)("div", {
        className: P.welcomeHeader,
        children: [(0, a.jsx)(x.default, {
          size: x.default.Sizes.LARGER,
          className: P.icon,
          guild: n,
          animate: !0,
          tabIndex: -1
        }), (0, a.jsx)(c.Heading, {
          className: P.welcomeTitle,
          variant: "heading-xl/semibold",
          children: U.default.Messages.WELCOME_SCREEN_TITLE.format({
            guildName: n.name,
            guildNameHook: (e, t) => (0, a.jsxs)("span", {
              children: [(0, a.jsx)(R.default, {
                guild: n,
                className: P.headerGuildBadge,
                flowerStarClassName: P.flowerStar
              }), (0, a.jsx)("strong", {
                children: e
              })]
            }, t)
          })
        }), (0, a.jsx)("div", {
          className: P.descriptionWrapper,
          children: (0, a.jsx)(c.TextArea, {
            className: P.descriptionInput,
            placeholder: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_DESCRIPTION_PLACEHOLDER,
            onChange: e => {
              (0, N.updateSettings)({
                description: e
              })
            },
            onBlur: () => {
              F()
            },
            onKeyDown: e => {
              e.keyCode === G.KeyboardKeys.ENTER && e.preventDefault()
            },
            value: O,
            maxLength: 140,
            disabled: y
          })
        })]
      }), (0, a.jsx)(c.FormDivider, {
        className: P.divider
      }), (0, a.jsxs)("div", {
        className: P.welcomeChannels,
        children: [(0, a.jsx)(c.FormTitle, {
          children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_TITLE
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: P.addChannelSubtext,
          children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_DESCRIPTION
        }), null == M ? void 0 : M.map((e, t) => (0, a.jsx)(B, {
          guildId: n.id,
          welcomeChannel: e,
          onEdit: V(t),
          onChannelReorder: Y,
          isDropHovered: t === _,
          index: t
        }, t)), (null == M || M.length < 5) && (0, a.jsx)(c.Button, {
          onClick: () => (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await s.el("277432").then(s.bind(s, "277432"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildId: n.id,
              onSave: w
            })
          }, {
            onCloseRequest: () => j.NOOP_NULL
          }),
          className: P.addChannelButton,
          disabled: y,
          color: c.Button.Colors.PRIMARY,
          children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ADD_RECOMMENDED_CHANNEL
        })]
      })]
    })]
  })
}