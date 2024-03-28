"use strict";
n.r(t), n.d(t, {
  AddEntryCard: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("239091"),
  d = n("749210"),
  c = n("134432"),
  f = n("920440"),
  h = n("601964"),
  m = n("430824"),
  p = n("940627"),
  E = n("346656"),
  C = n("808268"),
  g = n("185403"),
  S = n("806519"),
  _ = n("404975"),
  T = n("768581"),
  I = n("683818"),
  A = n("16853"),
  v = n("981631"),
  N = n("689938"),
  x = n("88566"),
  M = n("883760");
let R = e => {
  let {
    onClick: t
  } = e;
  return (0, a.jsxs)(o.Clickable, {
    onClick: t,
    className: x.addEntryCard,
    children: [(0, a.jsx)("img", {
      alt: "",
      src: M
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      className: x.addServerText,
      children: N.default.Messages.HUB_ADD_SERVER_CTA
    })]
  })
};

function L(e) {
  let {
    entry: t
  } = e, [s, r] = l.useState(!1), {
    canEdit: u
  } = (0, I.default)(t);
  return (0, a.jsx)("div", {
    className: i()(x.actionButtonsContainer, {
      [x.forceButtonsShow]: s
    }),
    children: (0, a.jsxs)(_.default, {
      children: [u ? (0, a.jsx)(o.Tooltip, {
        text: N.default.Messages.HUB_ENTRY_UPDATE,
        hideOnClick: !0,
        children: e => {
          let {
            onClick: l,
            ...s
          } = e;
          return (0, a.jsx)(_.Button, {
            ...s,
            onClick: () => {
              null == l || l(), (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("34191")]).then(n.bind(n, "303647"));
                return n => (0, a.jsx)(e, {
                  ...n,
                  entry: t
                })
              })
            },
            "aria-label": N.default.Messages.HUB_ENTRY_UPDATE,
            children: (0, a.jsx)(g.default, {
              className: x.overflowIcon
            })
          })
        }
      }) : null, (0, a.jsx)(A.default, {
        onRequestOpen: () => r(!0),
        onRequestClose: () => r(!1),
        entry: t,
        hideEditButton: !0,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, a.jsx)(o.Tooltip, {
            text: N.default.Messages.MORE,
            hideOnClick: !0,
            children: e => {
              let {
                onClick: l,
                ...s
              } = e;
              return (0, a.jsx)(_.Button, {
                ...n,
                ...s,
                onClick: e => {
                  null == l || l(), t(e)
                },
                "aria-label": N.default.Messages.MORE,
                children: (0, a.jsx)(C.default, {
                  className: x.overflowIcon
                })
              })
            }
          })
        }
      })]
    })
  })
}
t.default = e => {
  var t;
  let {
    entry: s
  } = e, [i, C] = l.useState(!1), g = null != (0, r.useStateFromStores)([m.default], () => m.default.getGuild(s.guildId)), _ = async () => {
    C(!0);
    try {
      g ? (0, f.transitionToGuild)(s.guildId) : await d.default.joinGuild(s.guildId, {
        source: v.JoinGuildSources.DIRECTORY_ENTRY
      })
    } finally {
      C(!1)
    }
  }, I = T.default.getGuildSplashURL({
    id: s.guildId,
    splash: s.splash,
    size: 300 * (0, c.getDevicePixelRatio)()
  }), A = null !== (t = T.default.getGuildIconURL({
    id: s.guildId,
    icon: s.icon,
    size: 40
  })) && void 0 !== t ? t : void 0, M = N.default.Messages.JOIN;
  return g && (M = N.default.Messages.HUB_DIRECTORY_CARD_JOINED_GUILD_BUTTON), (0, a.jsxs)("div", {
    className: x.card,
    onContextMenu: e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "643560"));
        return t => (0, a.jsx)(e, {
          ...t,
          entry: s
        })
      })
    },
    children: [(0, a.jsxs)("div", {
      className: x.cardHeader,
      children: [(0, a.jsx)("div", {
        className: x.splash,
        children: null != I && (0, a.jsx)("img", {
          src: I,
          alt: "",
          className: x.splashImage
        })
      }), (0, a.jsx)("div", {
        className: x.guildIcon,
        children: (0, a.jsx)(S.default, {
          mask: S.default.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, a.jsx)("div", {
            className: x.iconMask,
            children: (0, a.jsx)(E.default, {
              className: x.icon,
              iconSrc: A,
              guild: new h.default(s),
              size: E.default.Sizes.MEDIUM,
              active: !0
            })
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      className: x.guildInfo,
      children: [(0, a.jsxs)("div", {
        className: x.title,
        children: [(0, a.jsx)(p.default, {
          className: x.guildBadge,
          guild: s,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }), (0, a.jsx)(o.Text, {
          className: x.guildName,
          variant: "heading-md/semibold",
          color: "header-primary",
          children: s.name
        })]
      }), (0, a.jsx)(o.Text, {
        className: x.description,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: s.description
      }), (0, a.jsxs)("div", {
        className: x.memberInfo,
        children: [null != s.approximatePresenceCount && (0, a.jsxs)("div", {
          className: x.memberCount,
          children: [(0, a.jsx)("div", {
            className: x.dotOnline
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: s.approximatePresenceCount
            })
          })]
        }), null != s.approximateMemberCount && (0, a.jsxs)("div", {
          className: x.memberCount,
          children: [(0, a.jsx)("div", {
            className: x.dotOffline
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: s.approximateMemberCount
            })
          })]
        })]
      }), (0, a.jsx)(o.Button, {
        submitting: i,
        className: x.joinButton,
        color: g ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
        onClick: _,
        children: M
      })]
    }), (0, a.jsx)(L, {
      entry: s
    })]
  })
}