n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(911969),
  u = n(906732),
  d = n(778087),
  _ = n(603721),
  E = n(124072),
  I = n(171368),
  m = n(592125),
  T = n(430824),
  h = n(594174),
  N = n(739566),
  C = n(981631),
  f = n(665692),
  p = n(689938),
  g = n(69038);
let S = {
tag: 'span',
variant: 'text-md/normal',
color: 'header-secondary'
  },
  A = {
className: r()('mention', g.mention)
  };

function R(e) {
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsx)(o.Text, {
  ...S,
  color: 'header-primary',
  children: e
})
  });
}
t.Z = s.memo(function(e) {
  var t, n, a, r, O, x;
  let M, {
  channel: v,
  messageId: L,
  interactionData: Z
} = e,
{
  analyticsLocations: P
} = (0, u.ZP)(),
{
  onCopy: D,
  copyRef: b
} = (0, d.Z)(v, null == Z ? void 0 : null === (t = Z.application_command) || void 0 === t ? void 0 : t.id),
j = (0, l.e7)([T.Z], () => T.Z.getGuild(v.guild_id), [v.guild_id]);
  if (s.useEffect(() => {
  (null == Z || Z.type === c.yU.CHAT && void 0 === Z.application_command) && _.OG(v.id, L);
}, [
  v.id,
  L,
  Z
]), null == Z)
M = (0, i.jsx)(o.Spinner, {
  type: o.Spinner.Type.SPINNING_CIRCLE,
  className: g.spinner
});
  else {
let e = [],
  t = Object.fromEntries((null !== (r = null === (n = Z.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== r ? r : []).map(e => [
    e.name,
    e
  ]));
for (let n of null !== (O = Z.options) && void 0 !== O ? O : [])
  e = e.concat(function e(t) {
    var n, a, r, l, u, d, _;
    let g, {
        option: O,
        channel: x,
        guild: M,
        messageId: v,
        parentOptionKey: L,
        commandOptionSpec: Z,
        sourceAnalyticsLocations: P
      } = t,
      D = null != L ? L + ' ' + O.name : O.name;
    if (O.type === c.jw.SUB_COMMAND || O.type === c.jw.SUB_COMMAND_GROUP) {
      let t = [(0, i.jsxs)(s.Fragment, {
          children: [
            ' ',
            (0, i.jsx)(o.Text, {
              ...S,
              children: null !== (a = null == Z ? void 0 : Z.name_localized) && void 0 !== a ? a : O.name
            })
          ]
        }, D)],
        c = Object.fromEntries(null === (n = null !== (r = null == Z ? void 0 : Z.options) && void 0 !== r ? r : []) || void 0 === n ? void 0 : n.map(e => [
          e.name,
          e
        ]));
      for (let n of null !== (l = O.options) && void 0 !== l ? l : [])
        t = t.concat(e({
          option: n,
          channel: x,
          guild: M,
          messageId: v,
          parentOptionKey: D,
          commandOptionSpec: c[n.name],
          sourceAnalyticsLocations: P
        }));
      return t;
    }
    let b = O.value;
    if (null != O.value)
      switch (O.type) {
        case c.jw.USER: {
          let e = O.value.toString(),
            t = h.default.getUser(e);
          if (null != t) {
            let e = (0, N.ij)(t, x);
            g = (0, i.jsxs)(E.Z, {
              ...A,
              onClick: () => (0, I.openUserProfileModal)({
                userId: t.id,
                guildId: x.guild_id,
                channelId: x.id,
                messageId: v,
                sourceAnalyticsLocations: P,
                analyticsLocation: {
                  section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                }
              }),
              children: [
                f.ME,
                e.nick
              ]
            });
          }
          break;
        }
        case c.jw.CHANNEL: {
          let e = O.value.toString(),
            t = m.Z.getChannel(e);
          null != t && (g = (0, i.jsxs)(E.Z, {
            ...A,
            children: [
              f.zy,
              t.name
            ]
          }));
          break;
        }
        case c.jw.ROLE: {
          let e = O.value.toString(),
            t = null != M ? T.Z.getRole(M.id, e) : void 0;
          null != t && (g = (0, i.jsxs)(E.Z, {
            ...A,
            children: [
              f.ME,
              t.name
            ]
          }));
          break;
        }
        case c.jw.MENTIONABLE: {
          let e = O.value.toString(),
            t = null != M ? T.Z.getRole(M.id, e) : void 0;
          if (null != t)
            g = (0, i.jsxs)(E.Z, {
              children: [
                f.ME,
                t.name
              ]
            });
          else {
            let t = h.default.getUser(e);
            if (null != t) {
              let e = (0, N.ij)(t, x);
              g = (0, i.jsxs)(E.Z, {
                ...A,
                onClick: () => (0, I.openUserProfileModal)({
                  userId: t.id,
                  guildId: x.guild_id,
                  analyticsLocation: {
                    section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                  }
                }),
                children: [
                  f.ME,
                  e.nick
                ]
              });
            }
          }
          break;
        }
        case c.jw.ATTACHMENT:
          g = R(p.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
          break;
        default: {
          let e = null == Z ? void 0 : null === (u = Z.choices) || void 0 === u ? void 0 : u.find(e => e.value === O.value);
          null != e && (b = null !== (d = e.name_localized) && void 0 !== d ? d : e.name);
        }
      }
    return null == g && (g = R(null == b ? void 0 : b.toString())), [(0, i.jsxs)(s.Fragment, {
      children: [
        (0, i.jsxs)(o.Text, {
          ...S,
          children: [
            ' ',
            null !== (_ = null == Z ? void 0 : Z.name_localized) && void 0 !== _ ? _ : O.name,
            ': '
          ]
        }),
        g
      ]
    }, D)];
  }({
    option: n,
    channel: v,
    guild: j,
    messageId: L,
    parentOptionKey: null,
    commandOptionSpec: t[n.name],
    sourceAnalyticsLocations: P
  }));
M = (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsxs)(o.Text, {
      ...S,
      children: [
        '/',
        null !== (x = null === (a = Z.application_command) || void 0 === a ? void 0 : a.name_localized) && void 0 !== x ? x : Z.name
      ]
    }),
    e
  ]
});
  }
  return (0, i.jsxs)('div', {
className: g.container,
onCopy: e => {
  var t, n, i;
  let s = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
  s.startsWith('/') && s.endsWith('\n') && D(e, Z);
},
children: [
  (0, i.jsx)('div', {
    className: g.tooltip,
    ref: b,
    children: M
  }),
  (0, i.jsx)('div', {
    className: g.tooltipPointer
  })
]
  });
});