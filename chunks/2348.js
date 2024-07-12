n.d(t, {
  Z: function() {
return f;
  }
}), n(653041);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(692547),
  o = n(481060),
  c = n(239091),
  d = n(977258),
  u = n(637853),
  _ = n(473403),
  I = n(216306),
  E = n(514342),
  T = n(743475),
  m = n(827907),
  N = n(868814),
  S = n(981631),
  h = n(689938),
  g = n(133760);

function C(e) {
  let {
guild: t,
channel: a
  } = e, i = (0, m.Mf)(a.id);
  return 'null' === a.id ? (0, s.jsx)('div', {
className: r()(g.categoryRow, g.uncategorized),
children: (0, s.jsx)(o.Text, {
  className: g.categoryText,
  color: 'text-muted',
  variant: 'text-xs/semibold',
  lineClamp: 1,
  children: a.name
})
  }) : (0, s.jsxs)(o.Clickable, {
className: r()(g.categoryRow, {
  [g.uncategorized]: 'null' === a.id
}),
onContextMenu: e => {
  (0, c.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('86977'),
      n.e('39285'),
      n.e('8965'),
      n.e('85760')
    ]).then(n.bind(n, 139035));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: a,
      guild: t
    });
  });
},
onClick: e => (e.stopPropagation(), (0, d.s)(t.id, a.id) ? (0, T.pt)(a.id) : (0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('35641').then(n.bind(n, 89216));
  return n => (0, s.jsx)(e, {
    ...n,
    guildId: t.id,
    startingChannelId: a.id
  });
}), !0),
children: [
  (0, s.jsx)(o.Text, {
    className: g.categoryText,
    color: 'text-muted',
    variant: 'text-xs/semibold',
    lineClamp: 1,
    children: a.name
  }),
  (0, s.jsx)(o.Checkbox, {
    'aria-checked': i,
    value: i,
    type: o.Checkbox.Types.INVERTED,
    className: g.checkbox,
    displayOnly: !0
  })
]
  });
}
let x = a.memo(function() {
return (0, s.jsx)('div', {
  className: g.separator
});
  }),
  p = a.memo(function(e) {
let {
  index: t
} = e;
return (0, s.jsx)(o.Text, {
  variant: 'text-xs/normal',
  className: g.subtitleSeparator,
  children: '\xB7'
}, 'separator-'.concat(t));
  }),
  R = a.memo(function(e) {
let {
  channel: t,
  category: a,
  guild: i,
  isFirstChannel: I,
  isLastChannel: C,
  tooltipDirection: R = 'right'
} = e, f = (0, m.Mf)(t.id, a.id), L = (0, m.t4)(t.id, a.id), O = (0, m.EH)(t.id, a.id), A = (0, m.lL)(i.id, a.id), M = null != (0, N.Z)(i).find(e => e.id === t.id), D = (0, u.mn)(t.id), v = e => {
  if (!L)
    return e.stopPropagation(), (0, d.s)(i.id, t.id) ? (0, T.pt)(t.id) : (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('35641').then(n.bind(n, 89216));
      return n => (0, s.jsx)(e, {
        ...n,
        guildId: i.id,
        startingChannelId: t.id
      });
    }), !0;
}, j = e => {
  t.isGuildVocal() ? (0, c.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('14262'),
      n.e('86977'),
      n.e('39285'),
      n.e('3741'),
      n.e('18320'),
      n.e('83331'),
      n.e('42360')
    ]).then(n.bind(n, 213202));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guild: i
    });
  }) : (0, c.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('50990'),
      n.e('79695'),
      n.e('6380'),
      n.e('77287'),
      n.e('77172'),
      n.e('95854'),
      n.e('95393'),
      n.e('14262'),
      n.e('86977'),
      n.e('81539'),
      n.e('25788'),
      n.e('7590'),
      n.e('8739'),
      n.e('46097'),
      n.e('39285'),
      n.e('22173'),
      n.e('30243'),
      n.e('53917'),
      n.e('89043'),
      n.e('68241'),
      n.e('10615'),
      n.e('29975'),
      n.e('64714'),
      n.e('30676'),
      n.e('48800'),
      n.e('23919'),
      n.e('3741'),
      n.e('37220'),
      n.e('91026'),
      n.e('91315'),
      n.e('18320'),
      n.e('95437'),
      n.e('32991'),
      n.e('57884')
    ]).then(n.bind(n, 373651));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guild: i
    });
  });
};
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(o.Tooltip, {
      text: null != O ? O : A,
      delay: 500,
      position: R,
      children: e => (0, s.jsxs)(o.Clickable, {
        className: r()(g.channelRow, {
          [g.firstChannel]: I,
          [g.lastChannel]: C,
          [g.disabled]: L
        }),
        ...e,
        onClick: v,
        onContextMenu: j,
        children: [
          (0, s.jsx)('div', {
            className: g.channelInfo,
            children: (0, s.jsxs)('div', {
              className: g.channelName,
              children: [
                (0, s.jsx)(_._, {
                  channel: t,
                  guild: i
                }),
                (0, s.jsx)(E.Z, {
                  className: g.__invalid_name,
                  children: (0, s.jsx)(o.Text, {
                    className: g.channelText,
                    variant: 'text-md/medium',
                    lineClamp: 1,
                    color: L ? 'text-muted' : 'text-normal',
                    children: t.name
                  })
                }),
                M ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(p, {
                      index: 0
                    }),
                    (0, s.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      className: g.channelSubtitle,
                      color: 'text-brand',
                      children: h.Z.Messages.CHANNEL_POPULAR
                    })
                  ]
                }) : null
              ]
            })
          }),
          (0, s.jsx)('div', {
            className: g.channelActions,
            children: (0, d.s)(t.guild_id, t.id) ? (0, s.jsx)(o.Checkbox, {
              'aria-checked': f,
              value: f,
              type: o.Checkbox.Types.INVERTED,
              disabled: L,
              color: D ? l.Z.colors.TEXT_BRAND.css : l.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: g.checkboxInner,
              displayOnly: !0
            }) : (0, s.jsxs)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.PRIMARY,
              className: g.lockedPill,
              innerClassName: g.lockedPillInner,
              onClick: S.dG4,
              children: [
                (0, s.jsx)(o.LockIcon, {
                  size: 'xs',
                  color: 'currentColor'
                }),
                (0, s.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  color: 'none',
                  children: h.Z.Messages.UNLOCK
                })
              ]
            })
          })
        ]
      })
    }),
    !C && (0, s.jsx)(x, {})
  ]
});
  });

function f(e) {
  let {
categories: t,
guild: n,
className: i,
hasSidebar: r
  } = e, l = a.useCallback(e => {
let a = t._categories[e];
return (0, s.jsx)(C, {
  channel: a.channel,
  guild: n
}, a.channel.id);
  }, [
t,
n
  ]), o = a.useCallback((e, a) => {
let i = t._categories[e],
  l = t[i.channel.id][a];
return null == l ? null : (0, s.jsx)(R, {
  category: i.channel,
  channel: l.channel,
  guild: n,
  isFirstChannel: 0 === a,
  isLastChannel: t[i.channel.id].length - 1 === a,
  tooltipDirection: r ? 'right' : 'top'
}, l.channel.id);
  }, [
t,
n,
r
  ]), c = (0, I.tn)(n.id, t, 64);
  return (0, s.jsx)('div', {
className: i,
children: c.map((e, t) => {
  let n = l(t),
    a = [],
    i = e.rowCount;
  if (0 === i)
    return null;
  for (let e = 0; e < i; e++)
    a.push(o(t, e));
  return (0, s.jsxs)(s.Fragment, {
    children: [
      n,
      a
    ]
  });
})
  });
}