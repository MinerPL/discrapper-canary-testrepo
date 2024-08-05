t.d(n, {
  Z: function() {
return _;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(831209),
  r = t(481060),
  d = t(367907),
  c = t(177862),
  u = t(981631),
  I = t(689938),
  m = t(648005);

function _(e) {
  let {
guildId: n,
transitionState: t,
onClose: s
  } = e, [_, N] = a.useState([]), [E, T] = a.useState(), h = [{
  text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
  value: c.C2.DM_SPAM
},
{
  text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
  value: c.C2.MENTION_SPAM
},
{
  text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
  value: c.C2.CHANNEL_SPAM
},
{
  text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
  value: c.C2.SUS_NEW_MEMBERS
},
{
  text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
  value: c.C2.CHANGING_SETTINGS
},
{
  text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
  value: c.C2.OTHER
}
  ];

  function g(e) {
_.includes(e) ? N(n => n.filter(n => n !== e)) : N(n => [
  ...n,
  e
]);
  }
  return null == n ? (s(), null) : (0, i.jsxs)(r.ModalRoot, {
transitionState: t,
size: r.ModalSize.MEDIUM,
children: [
  (0, i.jsx)(r.ModalHeader, {
    separator: !0,
    children: (0, i.jsxs)('div', {
      className: m.headerContainer,
      children: [
        (0, i.jsxs)('div', {
          className: m.headerText,
          children: [
            (0, i.jsx)(r.LockIcon, {
              size: 'xs',
              color: o.Z.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(r.Heading, {
              color: 'header-primary',
              variant: 'heading-md/semibold',
              children: I.Z.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
            })
          ]
        }),
        (0, i.jsx)(r.Clickable, {
          onClick: s,
          children: (0, i.jsx)(r.CloseSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            className: m.closeIcon
          })
        })
      ]
    })
  }),
  (0, i.jsx)(r.ModalContent, {
    children: (0, i.jsx)('div', {
      className: m.options,
      children: h.map(e => {
        let {
          text: n,
          value: t
        } = e;
        return (0, i.jsxs)('div', {
          className: l()(m.optionContainer, {
            [m.optionContainerOther]: t === c.C2.OTHER
          }),
          children: [
            (0, i.jsxs)(r.Clickable, {
              className: m.optionText,
              onClick: () => g(t),
              children: [
                (0, i.jsx)('div', {
                  children: (0, i.jsx)(r.Checkbox, {
                    type: r.Checkbox.Types.INVERTED,
                    size: 20,
                    value: _.includes(t),
                    onChange: () => g(t)
                  })
                }),
                (0, i.jsx)(r.Text, {
                  variant: 'text-md/medium',
                  color: _.includes(t) ? 'interactive-active' : 'interactive-normal',
                  children: n
                })
              ]
            }),
            t === c.C2.OTHER && _.includes(c.C2.OTHER) && (0, i.jsx)('div', {
              className: m.textboxContainer,
              children: (0, i.jsx)(r.TextArea, {
                className: m.serverLockdownReasonText,
                placeholder: I.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => T(e),
                value: E,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })
          ]
        }, t);
      })
    })
  }),
  (0, i.jsx)(r.ModalFooter, {
    children: (0, i.jsx)(r.Button, {
      onClick: function() {
        (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: _,
          raid_lockdown_feedback_other_reason: E,
          guild_id: n
        }), s();
      },
      color: r.Button.Colors.BRAND,
      look: r.Button.Looks.FILLED,
      submitting: !1,
      children: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
    })
  })
]
  });
}