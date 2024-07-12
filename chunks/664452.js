t.r(n), t.d(n, {
  default: function() {
return g;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(831209),
  l = t(442837),
  o = t(481060),
  r = t(688465),
  c = t(430824),
  d = t(626135),
  u = t(369994),
  I = t(162157),
  m = t(533244),
  _ = t(487419),
  N = t(821312),
  E = t(676770),
  T = t(981631),
  h = t(689938),
  p = t(647421);

function g(e) {
  let {
guildId: n,
transitionState: t,
onClose: g,
analyticsData: C
  } = e, f = (0, l.e7)([c.Z], () => c.Z.getGuild(n), [n]), x = !!(null == f ? void 0 : f.hasFeature(T.oNc.INVITES_DISABLED)), [O] = a.useState(!1), [S, A] = a.useState(E.Fl), R = (0, l.e7)([_.Z], () => _.Z.getGuildIncident(n)), b = (0, I.BT)(f), Z = (0, m.SG)(R) || x, v = (0, m.sN)(R), [M, L] = a.useState(Z), [j, D] = a.useState(v), [P, B] = a.useState(!1), y = M !== Z || j !== v || P, G = x && !b;
  if (null == f)
return g(), null;

  function k() {
L(e => !e);
  }
  return (0, i.jsxs)(o.ModalRoot, {
transitionState: t,
size: o.ModalSize.MEDIUM,
children: [
  (0, i.jsx)(o.ModalHeader, {
    separator: !0,
    children: (0, i.jsxs)('div', {
      className: p.headerContainer,
      children: [
        (0, i.jsx)(o.LockIcon, {
          size: 'xs',
          color: s.Z.INTERACTIVE_NORMAL
        }),
        (0, i.jsx)(o.Heading, {
          color: 'header-primary',
          variant: 'heading-md/semibold',
          children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE
        }),
        (0, i.jsx)(r.Z, {})
      ]
    })
  }),
  (0, i.jsx)(o.ModalContent, {
    children: (0, i.jsxs)('div', {
      className: p.mainContainer,
      children: [
        (0, i.jsx)(o.Select, {
          placeholder: h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
          options: (0, E.c1)(),
          select: e => {
            A(e), B(!0);
          },
          isSelected: e => e === S,
          serialize: e => String(e)
        }),
        (0, i.jsxs)('div', {
          className: p.pauseContainer,
          children: [
            (0, i.jsxs)('div', {
              className: p.pauseText,
              children: [
                (0, i.jsx)(o.Text, {
                  variant: 'text-md/semibold',
                  color: 'header-primary',
                  children: h.Z.Messages.DISABLE_INVITES
                }),
                (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: h.Z.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                })
              ]
            }),
            (0, i.jsx)(o.Tooltip, {
              text: h.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
              shouldShow: x,
              children: e => (0, i.jsx)('div', {
                ...e,
                children: (0, i.jsx)(o.Switch, {
                  className: p.toggle,
                  onChange: k,
                  checked: M,
                  disabled: G
                })
              })
            })
          ]
        }),
        (0, i.jsxs)('div', {
          className: p.pauseContainer,
          children: [
            (0, i.jsxs)('div', {
              className: p.pauseText,
              children: [
                (0, i.jsx)(o.Text, {
                  variant: 'text-md/semibold',
                  color: 'header-primary',
                  children: h.Z.Messages.DISABLE_DMS
                }),
                (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: h.Z.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                })
              ]
            }),
            (0, i.jsx)(o.Switch, {
              className: p.toggle,
              onChange: function() {
                D(e => !e);
              },
              checked: j
            })
          ]
        })
      ]
    })
  }),
  (0, i.jsxs)(o.ModalFooter, {
    children: [
      (0, i.jsx)(o.Button, {
        onClick: () => {
          (Z || v) && !M && !j ? ((0, u.n)(f.id, !1, !1), (0, o.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(N.Z, {
            ...e,
            guildId: n
          })))) : (0, u.n)(f.id, M, j, S);
          let {
            source: e,
            alertType: t,
            messageId: a
          } = C;
          d.default.track(T.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: n,
            source: e,
            raid_alert_id: a,
            raid_alert_type: t,
            intervention_type_enabled: (0, m.sO)(M, j),
            intervention_type_disabled: (0, m.lk)(M, j),
            duration: 60 * S
          }), g();
        },
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        submitting: O,
        disabled: !y,
        children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
      }),
      (0, i.jsx)(o.Button, {
        onClick: g,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        disabled: O,
        children: h.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}