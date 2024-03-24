"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("866227"),
  o = l.n(r),
  d = l("446674"),
  u = l("77078"),
  c = l("713841"),
  f = l("376556"),
  m = l("385976"),
  I = l("592407"),
  T = l("766274"),
  N = l("305961"),
  E = l("102985"),
  h = l("145131"),
  g = l("461380"),
  p = l("841811"),
  S = l("429893"),
  O = l("315102"),
  _ = l("299039"),
  A = l("674916"),
  C = l("49111"),
  x = l("782340"),
  R = l("515587"),
  M = l("890957");

function v(e) {
  let t, {
      guild: l,
      integration: s,
      editedIntegration: r,
      isExpanded: v,
      onToggleExpand: L,
      onDisable: j,
      onEnable: b
    } = e,
    P = (0, d.useStateFromStores)([N.default], () => N.default.getRoles(l.id)),
    [D, y] = a.useState(!1),
    G = (0, d.useStateFromStores)([E.default], () => E.default.hidePersonalInformation),
    B = a.useCallback(() => {
      y(!0), b(s)
    }, [s, b]),
    H = a.useCallback(() => {
      !s.syncing && (0, u.openModal)(e => {
        let t = 0 === s.expire_behavior ? x.default.Messages.REMOVE_SYNCED_ROLE : x.default.Messages.KICK_FROM_SERVER;
        return (0, n.jsx)(u.ConfirmModal, {
          ...e,
          header: x.default.Messages.DISABLE_INTEGRATION_TITLE,
          confirmText: t,
          cancelText: x.default.Messages.CANCEL,
          onConfirm: () => j(s),
          children: (0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            children: s.type === C.PlatformTypes.YOUTUBE ? x.default.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : x.default.Messages.DISABLE_INTEGRATION_TWITCH_BODY
          })
        })
      })
    }, [s, j]),
    k = a.useCallback(() => {
      I.default.syncIntegration(l.id, s.id)
    }, [l.id, s.id]),
    U = a.useCallback(() => {
      null != s.role_id && (I.default.setSection(C.GuildSettingsSections.ROLES), I.default.selectRole(s.role_id))
    }, [s.role_id]),
    {
      serviceName: F,
      channelURL: w,
      expireBehaviorLabel: W,
      syncLabel: V,
      subscribersText: Y
    } = a.useMemo(() => {
      var e, t, l, n, a;
      let i = null !== (l = null === (t = f.default.get(s.type)) || void 0 === t ? void 0 : null === (e = t.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(t, s.account)) && void 0 !== l ? l : "";
      switch (s.type) {
        case C.PlatformTypes.YOUTUBE:
          return {
            serviceName: x.default.Messages.INTEGRATIONS_YOUTUBE, expireBehaviorLabel: x.default.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR, syncLabel: x.default.Messages.FORM_LABEL_SYNCED_MEMBERS, subscribersText: x.default.Messages.NUM_MEMBERS.format({
              subscribers: null !== (n = s.subscriber_count) && void 0 !== n ? n : 0
            }), channelURL: i
          };
        case C.PlatformTypes.TWITCH:
        default:
          return {
            serviceName: x.default.Messages.INTEGRATIONS_TWITCH, expireBehaviorLabel: x.default.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR, syncLabel: x.default.Messages.FORM_LABEL_SYNCED_SUBS, subscribersText: x.default.Messages.NUM_SUBSCRIBERS.format({
              subscribers: null !== (a = s.subscriber_count) && void 0 !== a ? a : 0
            }), channelURL: i
          }
      }
    }, [s.account, s.subscriber_count, s.type]),
    {
      roleLink: K,
      syncDescriptionText: z
    } = a.useMemo(() => {
      let e, t;
      let l = null != s.role_id ? P[s.role_id] : null;
      e = null != l ? (0, n.jsx)(u.Anchor, {
        onClick: U,
        children: l.name
      }) : x.default.Messages.NONE;
      let a = f.default.get(s.type);
      return {
        roleLink: e,
        syncDescriptionText: t = s.revoked && null != a ? x.default.Messages.SYNC_REVOKED.format({
          user: s.user,
          platformName: a.name
        }) : x.default.Messages.INTEGRATIONS_LAST_SYNC.format({
          datetime: o(s.synced_at).calendar()
        })
      }
    }, [P, U, s.revoked, s.role_id, s.synced_at, s.type, s.user]),
    Z = a.useMemo(() => {
      let e = m.default.getGuildEmoji(l.id),
        t = Object.values(P).filter(e => null != e.tags && e.tags.integration_id === s.id).map(e => e.id);
      return s.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != s.role_id && (null == e ? void 0 : e.roles.some(e => t.includes(e)))) : []
    }, [l.id, P, s.enable_emoticons, s.id, s.role_id]);
  if (a.useEffect(() => {
      (null == r ? void 0 : r.id) === s.id && (null == r ? void 0 : r.enabled) === !0 && y(!1)
    }, [r, s.id]), s.enabled && null != s.user) t = [{
    icon: p.default,
    text: G ? x.default.Messages.INTEGRATION_ADDED_DATE.format({
      timestamp: _.default.extractTimestamp(s.id)
    }) : x.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
      user: null != s.user ? new T.default(s.user).tag : null,
      timestamp: _.default.extractTimestamp(s.id)
    })
  }];
  else {
    let e = new URL(w);
    t = [{
      text: x.default.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
        serviceName: F,
        accountUrl: w,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let q = (0, n.jsxs)(h.default, {
      className: R.header,
      align: h.default.Align.CENTER,
      children: [(0, n.jsx)(A.default, {
        name: "".concat(s.name),
        detailsClassName: R.description,
        details: t
      }), s.enabled ? (0, n.jsx)(h.default.Child, {
        shrink: 0,
        grow: 0,
        children: (0, n.jsx)(g.default, {
          className: R.expandIcon,
          expanded: v && !D,
          "aria-hidden": !0
        })
      }) : (0, n.jsx)(h.default.Child, {
        shrink: 0,
        grow: 0,
        children: (0, n.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.PRIMARY,
          onClick: B,
          disabled: D,
          children: D ? (0, n.jsx)(S.default, {
            width: 24,
            height: 24
          }) : (0, n.jsx)(n.Fragment, {
            children: x.default.Messages.INTEGRATIONS_ENABLE
          })
        })
      })]
    }),
    J = null;
  return v && !D && null != r && (J = (0, n.jsxs)(h.default, {
    className: R.body,
    direction: h.default.Direction.VERTICAL,
    children: [(0, n.jsx)(u.FormDivider, {
      className: R.topDivider
    }), function(e) {
      let {
        integration: t,
        labelText: l,
        subscribersText: a,
        descriptionText: s,
        roleLink: i,
        onSync: r
      } = e;
      return (0, n.jsxs)(h.default, {
        children: [(0, n.jsxs)(h.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: x.default.Messages.FORM_LABEL_SYNCED_ROLE
          }), (0, n.jsx)(u.Text, {
            className: R.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, n.jsxs)(h.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: l
          }), (0, n.jsxs)(h.default, {
            justify: h.default.Justify.BETWEEN,
            children: [(0, n.jsxs)(h.default, {
              direction: h.default.Direction.VERTICAL,
              children: [(0, n.jsx)(u.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: a
              }), (0, n.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: s
              })]
            }), (0, n.jsx)(u.Button, {
              size: u.Button.Sizes.SMALL,
              look: u.Button.Looks.FILLED,
              color: u.Button.Colors.PRIMARY,
              disabled: t.syncing || t.revoked,
              onClick: r,
              children: t.syncing ? (0, n.jsx)(S.default, {
                width: 24,
                height: 24
              }) : (0, n.jsx)(n.Fragment, {
                children: x.default.Messages.SYNC
              })
            })]
          })]
        })]
      })
    }({
      integration: r,
      labelText: V,
      subscribersText: Y,
      descriptionText: z,
      roleLink: K,
      onSync: k
    }), (0, n.jsx)(u.FormDivider, {
      className: R.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: l,
        onBehaviorChange: a,
        onGracePeriodChange: s
      } = e;
      return (0, n.jsxs)(h.default, {
        children: [(0, n.jsxs)(h.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: l
          }), (0, n.jsx)(u.SingleSelect, {
            placeholder: l,
            value: "".concat(t.expire_behavior),
            options: [{
              value: "0",
              label: x.default.Messages.REMOVE_SYNCED_ROLE
            }, {
              value: "1",
              label: x.default.Messages.KICK_FROM_SERVER
            }],
            isDisabled: t.syncing,
            onChange: e => a(parseInt(e))
          })]
        }), (0, n.jsxs)(h.default.Child, {
          basis: "50%",
          children: [(0, n.jsx)(u.FormTitle, {
            className: M.marginBottom8,
            children: x.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
          }), (0, n.jsx)(u.SingleSelect, {
            placeholder: x.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: [1, 3, 7, 14, 30].map(e => ({
              value: "".concat(e),
              label: x.default.Messages.N_DAYS.format({
                days: e
              })
            })),
            onChange: e => s(parseInt(e)),
            isDisabled: t.syncing
          })]
        })]
      })
    }({
      integration: r,
      labelText: W,
      onBehaviorChange: function(e) {
        c.default.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        c.default.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), s.type === C.PlatformTypes.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: l,
        onToggle: a
      } = e;
      return (0, n.jsxs)(h.default, {
        direction: h.default.Direction.VERTICAL,
        children: [(0, n.jsx)(u.Checkbox, {
          type: u.Checkbox.Types.INVERTED,
          className: i(M.marginTop20, M.marginBottom8),
          value: t.enable_emoticons,
          disabled: t.syncing,
          onChange: e => {
            let {
              currentTarget: t
            } = e;
            return a(t.checked)
          },
          children: (0, n.jsx)(u.FormText, {
            children: x.default.Messages.ENABLE_TWITCH_EMOJI_SYNC
          })
        }), (0, n.jsx)(h.default, {
          wrap: h.default.Wrap.WRAP,
          className: R.twitchEmojis,
          children: l.map((e, t) => (0, n.jsx)(u.Tooltip, {
            text: e.name,
            children: t => (0, n.jsx)("img", {
              alt: x.default.Messages.IMG_ALT_EMOJI.format({
                name: e.name
              }),
              draggable: !1,
              className: i(R.emoji, "emoji", "jumboable"),
              src: O.default.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              }),
              ...t
            }, e.name)
          }, t))
        })]
      })
    }({
      integration: r,
      emojis: Z,
      onToggle: function(e) {
        c.default.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, n.jsx)(u.FormDivider, {
      className: R.bottomDivider
    }), (0, n.jsx)(h.default, {
      children: (0, n.jsx)(u.Button, {
        className: R.disableButton,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.RED,
        look: u.Button.Looks.LINK,
        onClick: H,
        children: x.default.Messages.INTEGRATIONS_DISABLE
      })
    })]
  })), (0, n.jsx)(u.Card, {
    editable: !0,
    className: R.card,
    children: (0, n.jsxs)(h.default, {
      direction: h.default.Direction.VERTICAL,
      children: [s.enabled ? (0, n.jsx)(u.Clickable, {
        className: R.expandableHeader,
        "aria-expanded": v && !D,
        onClick: L,
        children: q
      }) : q, J]
    })
  })
}