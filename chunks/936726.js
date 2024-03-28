"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("47120"), l("653041");
var n = l("735250"),
  a = l("470079"),
  s = l("803997"),
  i = l.n(s),
  r = l("544891"),
  o = l("846519"),
  d = l("481060"),
  u = l("668781"),
  c = l("139387"),
  f = l("308063"),
  m = l("208567"),
  I = l("598077"),
  T = l("285952"),
  N = l("259580"),
  E = l("497309"),
  S = l("768581"),
  g = l("572004"),
  h = l("709054"),
  p = l("51144"),
  _ = l("486199"),
  O = l("981631"),
  A = l("689938"),
  C = l("792636");
let x = e => {
  if (null == e) return null;
  let t = new I.default(e);
  return p.default.getUserTag(t)
};

function R(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, S.getUserAvatarURL)({
    id: e.id,
    avatar: t,
    discriminator: O.NON_USER_BOT_DISCRIMINATOR
  })
}

function M(e) {
  let {
    id: t,
    webhook: l,
    editedWebhook: s,
    channelOptions: I,
    isExpanded: S,
    isNew: p,
    errors: M,
    onToggleExpand: v
  } = e, [L, j] = a.useState(!1), [P] = a.useState(new o.Timeout);
  a.useEffect(() => () => P.stop(), [P]);
  let b = a.useMemo(() => R(l, l.avatar), [l]),
    D = a.useCallback(() => {
      let e = "".concat((0, r.getAPIBaseURL)(!1)).concat(O.Endpoints.WEBHOOK_INTEGRATION(l.id, l.token));
      (0, g.copy)(e)
    }, [l]),
    y = a.useCallback(() => {
      (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
        ...e,
        header: A.default.Messages.WEBHOOK_DELETE_TITLE.format({
          name: l.name
        }),
        confirmText: A.default.Messages.WEBHOOK_DELETE,
        cancelText: A.default.Messages.WEBHOOK_CANCEL,
        onConfirm: () => {
          f.default.delete(l.guild_id, l.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? u.default.show({
              title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
              body: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
            }) : u.default.show({
              title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
              body: A.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
            })
          })
        },
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          children: A.default.Messages.WEBHOOK_DELETE_BODY.format({
            name: l.name
          })
        })
      }))
    }, [l.guild_id, l.id, l.name]),
    G = [];
  null != l.user ? G.push({
    icon: E.default,
    text: A.default.Messages.INTEGRATION_CREATED_USER_DATE.format({
      user: x(l.user),
      timestamp: h.default.extractTimestamp(l.id)
    })
  }) : G.push({
    icon: E.default,
    text: A.default.Messages.INTEGRATION_CREATED_DATE.format({
      timestamp: h.default.extractTimestamp(l.id)
    })
  });
  let B = null;
  return S && null != s && (B = (0, n.jsxs)("div", {
    className: C.body,
    children: [(0, n.jsx)(d.FormDivider, {
      className: C.topDivider
    }), (0, n.jsxs)(T.default, {
      children: [(0, n.jsx)(T.default.Child, {
        shrink: 1,
        grow: 0,
        children: (0, n.jsxs)(T.default, {
          className: C.avatarWrapper,
          direction: T.default.Direction.VERTICAL,
          children: [(0, n.jsx)(m.default, {
            image: s.avatar,
            onChange: e => {
              c.default.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => R(l, e),
            imageClassName: C.avatarUploaderInner,
            showIcon: !0
          }), null != M.avatar && "" !== M.avatar ? (0, n.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-sm/normal",
            children: M.avatar
          }) : null]
        })
      }), (0, n.jsxs)(T.default, {
        direction: T.default.Direction.VERTICAL,
        children: [(0, n.jsxs)(T.default, {
          children: [(0, n.jsx)(T.default.Child, {
            basis: "50%",
            children: (0, n.jsx)(d.FormItem, {
              title: A.default.Messages.WEBHOOK_FORM_NAME,
              children: (0, n.jsx)(d.TextInput, {
                value: s.name,
                onChange: e => {
                  c.default.updateWebhook({
                    name: e
                  })
                },
                maxLength: 80,
                error: M.name
              })
            })
          }), (0, n.jsx)(T.default.Child, {
            basis: "50%",
            children: (0, n.jsx)(d.FormItem, {
              title: A.default.Messages.CHANNEL,
              children: (0, n.jsx)(d.SearchableSelect, {
                value: s.channel_id,
                options: I,
                onChange: e => {
                  c.default.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: A.default.Messages.CHANNEL_SELECT
              })
            })
          })]
        }), (0, n.jsx)(d.FormDivider, {
          className: C.bottomDivider
        }), (0, n.jsxs)(T.default, {
          children: [(0, n.jsx)(d.Tooltip, {
            text: A.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
            forceOpen: L,
            color: d.TooltipColors.GREEN,
            disableTooltipPointerEvents: !0,
            children: e => {
              let {
                onClick: t,
                onMouseEnter: a,
                onMouseLeave: s,
                onBlur: i,
                onFocus: r,
                ...o
              } = e;
              return (0, n.jsx)(d.Button, {
                ...o,
                "aria-label": "",
                onClick: () => {
                  null == t || t(), j(!0), d.AccessibilityAnnouncer.announce(A.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL), P.start(1e3, () => j(!1)), D()
                },
                size: d.Button.Sizes.SMALL,
                color: d.Button.Colors.PRIMARY,
                look: d.Button.Looks.FILLED,
                className: C.copyButton,
                disabled: null == l.token || "" === l.token,
                children: A.default.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
              })
            }
          }), (0, n.jsx)(d.Button, {
            onClick: y,
            size: d.Button.Sizes.SMALL,
            color: d.Button.Colors.RED,
            look: d.Button.Looks.LINK,
            children: A.default.Messages.INTEGRATIONS_WEBHOOK_DELETE
          })]
        })]
      })]
    })]
  })), (0, n.jsx)(d.Card, {
    editable: !0,
    id: t,
    className: i()(C.card, p ? C.pulse : null),
    children: (0, n.jsxs)(T.default, {
      direction: T.default.Direction.VERTICAL,
      children: [(0, n.jsx)(d.Clickable, {
        className: C.header,
        "aria-expanded": S,
        onClick: v,
        children: (0, n.jsxs)(T.default, {
          align: T.default.Align.CENTER,
          children: [(0, n.jsx)(_.default, {
            name: l.name,
            imageSrc: b,
            details: G
          }), (0, n.jsx)(N.default, {
            className: C.expandIcon,
            expanded: S,
            "aria-hidden": !0
          })]
        })
      }), B]
    })
  })
}