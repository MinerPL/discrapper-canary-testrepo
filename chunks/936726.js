t.d(n, {
  Z: function() {
return R;
  }
}), t(47120), t(653041);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(544891),
  r = t(846519),
  d = t(481060),
  c = t(668781),
  u = t(139387),
  I = t(308063),
  m = t(208567),
  _ = t(598077),
  N = t(285952),
  E = t(259580),
  T = t(768581),
  h = t(572004),
  g = t(709054),
  p = t(51144),
  C = t(486199),
  f = t(981631),
  x = t(689938),
  O = t(127443);
let S = e => {
  if (null == e)
return null;
  let n = new _.Z(e);
  return p.ZP.getUserTag(n);
};

function A(e, n) {
  return null != n && /^data:/.test(n) ? n : (0, T.ov)({
id: e.id,
avatar: n,
discriminator: f.fo$
  });
}

function R(e) {
  let {
id: n,
webhook: t,
editedWebhook: s,
channelOptions: _,
isExpanded: T,
isNew: p,
errors: R,
onToggleExpand: b
  } = e, [Z, v] = a.useState(!1), [M] = a.useState(new r.V7());
  a.useEffect(() => () => M.stop(), [M]);
  let L = a.useMemo(() => A(t, t.avatar), [t]),
j = a.useCallback(() => {
  let e = ''.concat((0, o.K0)(!1)).concat(f.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
  (0, h.JG)(e);
}, [t]),
D = a.useCallback(() => {
  (0, d.openModal)(e => (0, i.jsx)(d.ConfirmModal, {
    ...e,
    header: x.Z.Messages.WEBHOOK_DELETE_TITLE.format({
      name: t.name
    }),
    confirmText: x.Z.Messages.WEBHOOK_DELETE,
    cancelText: x.Z.Messages.WEBHOOK_CANCEL,
    onConfirm: () => {
      I.Z.delete(t.guild_id, t.id).catch(e => {
        let {
          status: n
        } = e;
        429 === n ? c.Z.show({
          title: x.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
          body: x.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
        }) : c.Z.show({
          title: x.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
          body: x.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
        });
      });
    },
    children: (0, i.jsx)(d.Text, {
      variant: 'text-md/normal',
      children: x.Z.Messages.WEBHOOK_DELETE_BODY.format({
        name: t.name
      })
    })
  }));
}, [
  t.guild_id,
  t.id,
  t.name
]),
P = [];
  null != t.user ? P.push({
icon: d.ClockIcon,
text: x.Z.Messages.INTEGRATION_CREATED_USER_DATE.format({
  user: S(t.user),
  timestamp: g.default.extractTimestamp(t.id)
})
  }) : P.push({
icon: d.ClockIcon,
text: x.Z.Messages.INTEGRATION_CREATED_DATE.format({
  timestamp: g.default.extractTimestamp(t.id)
})
  });
  let B = null;
  return T && null != s && (B = (0, i.jsxs)('div', {
className: O.body,
children: [
  (0, i.jsx)(d.FormDivider, {
    className: O.topDivider
  }),
  (0, i.jsxs)(N.Z, {
    children: [
      (0, i.jsx)(N.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(N.Z, {
          className: O.avatarWrapper,
          direction: N.Z.Direction.VERTICAL,
          children: [
            (0, i.jsx)(m.Z, {
              image: s.avatar,
              onChange: e => {
                u.Z.updateWebhook({
                  avatar: e
                });
              },
              makeURL: e => A(t, e),
              imageClassName: O.avatarUploaderInner,
              showIcon: !0
            }),
            null != R.avatar && '' !== R.avatar ? (0, i.jsx)(d.Text, {
              color: 'text-danger',
              variant: 'text-sm/normal',
              children: R.avatar
            }) : null
          ]
        })
      }),
      (0, i.jsxs)(N.Z, {
        direction: N.Z.Direction.VERTICAL,
        children: [
          (0, i.jsxs)(N.Z, {
            children: [
              (0, i.jsx)(N.Z.Child, {
                basis: '50%',
                children: (0, i.jsx)(d.FormItem, {
                  title: x.Z.Messages.WEBHOOK_FORM_NAME,
                  children: (0, i.jsx)(d.TextInput, {
                    value: s.name,
                    onChange: e => {
                      u.Z.updateWebhook({
                        name: e
                      });
                    },
                    maxLength: 80,
                    error: R.name
                  })
                })
              }),
              (0, i.jsx)(N.Z.Child, {
                basis: '50%',
                children: (0, i.jsx)(d.FormItem, {
                  title: x.Z.Messages.CHANNEL,
                  children: (0, i.jsx)(d.SearchableSelect, {
                    value: s.channel_id,
                    options: _,
                    onChange: e => {
                      u.Z.updateWebhook({
                        channelId: e
                      });
                    },
                    placeholder: x.Z.Messages.CHANNEL_SELECT
                  })
                })
              })
            ]
          }),
          (0, i.jsx)(d.FormDivider, {
            className: O.bottomDivider
          }),
          (0, i.jsxs)(N.Z, {
            children: [
              (0, i.jsx)(d.Tooltip, {
                text: x.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
                forceOpen: Z,
                color: d.TooltipColors.GREEN,
                disableTooltipPointerEvents: !0,
                children: e => {
                  let {
                    onClick: n,
                    onMouseEnter: a,
                    onMouseLeave: s,
                    onBlur: l,
                    onFocus: o,
                    ...r
                  } = e;
                  return (0, i.jsx)(d.Button, {
                    ...r,
                    'aria-label': '',
                    onClick: () => {
                      null == n || n(), v(!0), d.AccessibilityAnnouncer.announce(x.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL), M.start(1000, () => v(!1)), j();
                    },
                    size: d.Button.Sizes.SMALL,
                    color: d.Button.Colors.PRIMARY,
                    look: d.Button.Looks.FILLED,
                    className: O.copyButton,
                    disabled: null == t.token || '' === t.token,
                    children: x.Z.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
                  });
                }
              }),
              (0, i.jsx)(d.Button, {
                onClick: D,
                size: d.Button.Sizes.SMALL,
                color: d.Button.Colors.RED,
                look: d.Button.Looks.LINK,
                children: x.Z.Messages.INTEGRATIONS_WEBHOOK_DELETE
              })
            ]
          })
        ]
      })
    ]
  })
]
  })), (0, i.jsx)(d.Card, {
editable: !0,
id: n,
className: l()(O.card, p ? O.pulse : null),
children: (0, i.jsxs)(N.Z, {
  direction: N.Z.Direction.VERTICAL,
  children: [
    (0, i.jsx)(d.Clickable, {
      className: O.header,
      'aria-expanded': T,
      onClick: b,
      children: (0, i.jsxs)(N.Z, {
        align: N.Z.Align.CENTER,
        children: [
          (0, i.jsx)(C.Z, {
            name: t.name,
            imageSrc: L,
            details: P
          }),
          (0, i.jsx)(E.Z, {
            className: O.expandIcon,
            expanded: T,
            'aria-hidden': !0
          })
        ]
      })
    }),
    B
  ]
})
  });
}