"use strict";
t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(348327),
  o = t.n(r),
  c = t(225857),
  d = t(290843),
  u = t(442837),
  E = t(481060),
  _ = t(239091),
  I = t(596454),
  T = t(607070),
  N = t(933557),
  m = t(471445),
  S = t(339085),
  h = t(621923),
  g = t(524329),
  x = t(575258),
  C = t(514698),
  R = t(592125),
  L = t(940627),
  O = t(346656),
  A = t(499150),
  p = t(93879),
  M = t(4912),
  f = t(626135),
  v = t(700785),
  D = t(434404),
  Z = t(92160),
  j = t(981631),
  U = t(231338),
  G = t(689938),
  P = t(913752);
let b = "WELCOME_CHANNEL",
  B = e => {
    var s;
    let l, {
        guildId: r,
        welcomeChannel: o,
        onEdit: T,
        onChannelReorder: g,
        isDropHovered: x,
        index: L
      } = e,
      [O, A] = i.useState(!1),
      f = i.useRef(null),
      D = (0, u.e7)([R.Z], () => R.Z.getChannel(o.channel_id)),
      Z = (0, u.e7)([S.Z], () => null != o.emoji_id ? S.Z.getUsableCustomEmojiById(o.emoji_id) : null),
      B = null != D && v.Uu(j.Plq.VIEW_CHANNEL, D),
      y = null !== (s = (0, m.KS)(D)) && void 0 !== s ? s : p.Z,
      F = (0, N.ZP)(D, !1),
      {
        homeSettingsEnabled: w
      } = (0, h.kZ)(r),
      [, k] = (0, c.c)({
        type: b,
        item: {
          channel: o,
          index: L
        },
        end: (e, s) => {
          null != e && !s.didDrop() && g(e.channel, null, !0)
        }
      }),
      [, H] = (0, d.L)({
        accept: b,
        hover: e => {
          g(e.channel, L, !1)
        },
        drop: e => {
          g(e.channel, L, !0)
        }
      });
    return i.useLayoutEffect(() => (k(H(f)), () => {
      k(null), H(null)
    }), [k, H]), l = B ? null != Z || null != o.emoji_name ? (0, n.jsx)(I.Z, {
      emojiId: null == Z ? void 0 : Z.id,
      emojiName: null != Z ? Z.name : o.emoji_name,
      animated: !!(null == Z ? void 0 : Z.animated)
    }) : (0, n.jsx)(y, {
      width: 24,
      height: 24,
      className: P.channelIcon
    }) : (0, n.jsx)(M.Z, {
      width: 24,
      height: 24,
      className: P.warningIcon
    }), (0, n.jsxs)("div", {
      className: a()(P.welcomeChannel, {
        [P.dragging]: x
      }),
      ref: f,
      "data-dnd-name": o.description,
      onContextMenu: e => {
        (0, _.jW)(e, async () => {
          let {
            default: e
          } = await t.e("68535").then(t.bind(t, 602320));
          return s => (0, n.jsx)(e, {
            ...s,
            guildId: r,
            welcomeChannel: o,
            onChannelReorder: g,
            setShowConfirmModal: A,
            onEdit: T,
            index: L
          })
        })
      },
      children: [l, (0, n.jsxs)("div", {
        className: P.channelDescriptionWrapper,
        children: [(0, n.jsx)(E.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.description
        }), (0, n.jsxs)(E.Text, {
          className: B ? void 0 : P.channelWarning,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, n.jsx)(y, {
            className: P.channelTitleIcon,
            width: 12,
            height: 12
          }), (0, n.jsx)("span", {
            children: B ? F : G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INVALID_CHANNEL
          })]
        })]
      }), (0, n.jsx)(E.Button, {
        color: E.Button.Colors.PRIMARY,
        size: E.Button.Sizes.SMALL,
        disabled: w,
        onClick: () => (0, E.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("39143")]).then(t.bind(t, 737868));
          return s => (0, n.jsx)(e, {
            ...s,
            welcomeChannel: o,
            guildId: r,
            onSave: T
          })
        }, {
          onCloseRequest: () => U.Vq
        }),
        children: G.Z.Messages.EDIT
      }), O && (0, n.jsx)(C.Z, {
        onConfirm: () => T(),
        onCancel: () => A(!1),
        channelId: o.channel_id
      })]
    })
  };
s.Z = e => {
  var s;
  let {
    guild: l,
    showCreateModal: a
  } = e, {
    welcomeSettings: r,
    originalWelcomeSettings: c
  } = (0, u.e7)([x.Z], () => x.Z.getSettingsProps()), d = (0, u.e7)([T.Z], () => T.Z.useReducedMotion), [_, I] = i.useState(null), [N, m] = i.useState(!1), [S, C] = i.useState(!1), {
    description: R,
    channels: p,
    enabled: v
  } = r, {
    homeSettingsEnabled: b
  } = (0, h.kZ)(null !== (s = null == l ? void 0 : l.id) && void 0 !== s ? s : j.lds), y = () => {
    if (null != l) R !== c.description && ((0, g.Es)(l.id, {
      description: null == R ? void 0 : R.trim()
    }), m(!0))
  }, F = e => {
    if (null != l) !o()(e, c.channels) && ((0, g.Es)(l.id, {
      channels: e
    }), m(!0))
  }, w = e => {
    if (null != l) e !== c.enabled && ((0, g.Es)(l.id, {
      enabled: e
    }), C(!d), m(!0))
  }, k = e => {
    if (null == e) return;
    let s = [...null != p ? p : [], e];
    (0, g.VP)({
      channels: s
    }), F(s)
  }, H = e => s => {
    let t = [...null != p ? p : []];
    null == s ? t.splice(e, 1) : t[e] = s, (0, g.VP)({
      channels: t
    }), F(t), 0 === t.length && v && ((0, g.VP)({
      enabled: !1
    }), w(!1))
  }, V = (e, s, t) => {
    if (null == p) return;
    let n = p.indexOf(e),
      i = [...p];
    null != s && s !== n && (i.splice(n, 1), i.splice(s, 0, e), (0, g.VP)({
      channels: i
    })), t ? (F(i), I(null)) : I(s)
  }, Y = i.useRef(!1);
  i.useEffect(() => (null != l && a && (0, E.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([t.e("99387"), t.e("39143")]).then(t.bind(t, 737868));
    return s => (0, n.jsx)(e, {
      ...s,
      guildId: l.id,
      onSave: k
    })
  }, {
    onCloseRequest: () => U.Vq
  }), () => {
    Y.current = !0
  }), []), i.useEffect(() => () => {
    if (Y.current && N) {
      let e = [],
        s = [],
        t = !1;
      null == p || p.forEach(n => {
        e.push(n.description), s.push(n.channel_id), null != n.emoji_id && (t = !0)
      }), f.default.track(j.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
        guild_id: null == l ? void 0 : l.id,
        options: e,
        options_channel_ids: s,
        guild_description: R,
        has_custom_emojis: t,
        is_enabled: v
      })
    }
  }, [N, p, R, v, l, Y]), i.useEffect(() => () => (0, g.sm)(), []);
  let W = i.useCallback(() => {
    null != l && D.Z.open(l.id, j.pNK.ONBOARDING)
  }, [l]);
  return null == l ? null : (0, n.jsxs)(E.FormSection, {
    title: G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    tag: E.FormTitleTags.H1,
    children: [b && (0, n.jsx)("div", {
      className: P.notice,
      children: (0, n.jsxs)(E.Text, {
        variant: "text-md/normal",
        children: [(0, n.jsx)(M.Z, {
          className: P.noticeIcon
        }), G.Z.Messages.WELCOME_SCREEN_DEPRECATED.format({
          onboardingLink: e => (0, n.jsx)(A.Z, {
            onClick: W,
            children: e
          })
        })]
      })
    }), (0, n.jsx)(E.Text, {
      className: P.__invalid_description,
      variant: "text-sm/normal",
      children: G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SETTINGS_TEXT
    }), (0, n.jsx)(Z.Z, {
      enabled: v,
      onPreview: (null == p ? void 0 : p.length) === 0 ? void 0 : () => {
        null != l && (0, E.openModalLazy)(async () => {
          let {
            default: e
          } = await t.e("90542").then(t.bind(t, 184782));
          return s => (0, n.jsx)(e, {
            ...s,
            guildId: l.id,
            isPreview: !0
          })
        })
      },
      onToggle: v || (null == p ? void 0 : p.length) !== 0 ? () => {
        w(!v)
      } : void 0,
      animateStatus: S,
      firstLine: v ? G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED : G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PROGRESS_WILL_SAVE,
      secondLine: v ? G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED_SECOND_LINE : G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLE_REMINDER
    }), (0, n.jsxs)("div", {
      className: P.previewContainer,
      children: [(0, n.jsxs)("div", {
        className: P.welcomeHeader,
        children: [(0, n.jsx)(O.Z, {
          size: O.Z.Sizes.LARGER,
          className: P.icon,
          guild: l,
          animate: !0,
          tabIndex: -1
        }), (0, n.jsx)(E.Heading, {
          className: P.welcomeTitle,
          variant: "heading-xl/semibold",
          children: G.Z.Messages.WELCOME_SCREEN_TITLE.format({
            guildName: l.name,
            guildNameHook: (e, s) => (0, n.jsxs)("span", {
              children: [(0, n.jsx)(L.Z, {
                guild: l,
                className: P.headerGuildBadge,
                flowerStarClassName: P.flowerStar
              }), (0, n.jsx)("strong", {
                children: e
              })]
            }, s)
          })
        }), (0, n.jsx)("div", {
          className: P.descriptionWrapper,
          children: (0, n.jsx)(E.TextArea, {
            className: P.descriptionInput,
            placeholder: G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_DESCRIPTION_PLACEHOLDER,
            onChange: e => {
              (0, g.VP)({
                description: e
              })
            },
            onBlur: () => {
              y()
            },
            onKeyDown: e => {
              e.keyCode === j.yXg.ENTER && e.preventDefault()
            },
            value: R,
            maxLength: 140,
            disabled: b
          })
        })]
      }), (0, n.jsx)(E.FormDivider, {
        className: P.divider
      }), (0, n.jsxs)("div", {
        className: P.welcomeChannels,
        children: [(0, n.jsx)(E.FormTitle, {
          children: G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_TITLE
        }), (0, n.jsx)(E.Text, {
          variant: "text-sm/normal",
          className: P.addChannelSubtext,
          children: G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_DESCRIPTION
        }), null == p ? void 0 : p.map((e, s) => (0, n.jsx)(B, {
          guildId: l.id,
          welcomeChannel: e,
          onEdit: H(s),
          onChannelReorder: V,
          isDropHovered: s === _,
          index: s
        }, s)), (null == p || p.length < 5) && (0, n.jsx)(E.Button, {
          onClick: () => (0, E.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("39143")]).then(t.bind(t, 737868));
            return s => (0, n.jsx)(e, {
              ...s,
              guildId: l.id,
              onSave: k
            })
          }, {
            onCloseRequest: () => U.Vq
          }),
          className: P.addChannelButton,
          disabled: b,
          color: E.Button.Colors.PRIMARY,
          children: G.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ADD_RECOMMENDED_CHANNEL
        })]
      })]
    })]
  })
}