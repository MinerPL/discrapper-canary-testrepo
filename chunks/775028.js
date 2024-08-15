t.d(n, {
  Z: function() {
return y;
  }
}), t(47120), t(653041), t(536091);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  s = t(442837),
  o = t(704215),
  c = t(692547),
  d = t(481060),
  u = t(239091),
  h = t(111028),
  m = t(605236),
  _ = t(66999),
  f = t(549631),
  C = t(473403),
  p = t(454585),
  x = t(22082),
  g = t(703656),
  N = t(6025),
  I = t(922482),
  b = t(601070),
  E = t(216306),
  Z = t(163),
  v = t(753540),
  T = t(70297),
  j = t(981631),
  S = t(176505),
  R = t(689938),
  A = t(626214);
let O = new Set([
j.d4z.GUILD_FORUM,
j.d4z.GUILD_MEDIA
  ]),
  B = new Set([
j.d4z.GUILD_VOICE,
j.d4z.GUILD_STAGE_VOICE
  ]);

function L(e) {
  let {
guild: n,
channel: a,
onCategoryClick: i
  } = e, s = (0, v.Mf)(n.id, a.id, a.id), o = (0, v.t4)(n.id, a.id, a.id);
  return (0, l.jsxs)('div', {
className: r()(A.categoryRow, {
  [A.uncategorized]: 'null' === a.id
}),
onContextMenu: e => {
  (0, u.jW)(e, async () => {
    let {
      default: e
    } = await t.e('8965').then(t.bind(t, 139035));
    return t => (0, l.jsx)(e, {
      ...t,
      channel: a,
      guild: n
    });
  });
},
children: [
  (0, l.jsx)(d.Text, {
    className: A.categoryText,
    color: 'text-muted',
    variant: 'text-xs/semibold',
    lineClamp: 1,
    children: a.name
  }),
  'null' !== a.id && !o && (0, l.jsxs)(d.Clickable, {
    className: A.selectAll,
    onClick: () => {
      !o && i(n.id, a.id, a.id);
    },
    children: [
      (0, l.jsx)(d.Checkbox, {
        className: A.selectAllCheckbox,
        size: 14,
        shape: d.Checkbox.Shapes.SMALL_BOX,
        value: s,
        type: d.Checkbox.Types.INVERTED,
        displayOnly: !0
      }),
      (0, l.jsx)(d.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: R.Z.Messages.CHANNEL_BROWSER_SELECT_ALL
      })
    ]
  })
]
  });
}
let M = a.memo(function() {
return (0, l.jsx)('div', {
  className: A.separator
});
  }),
  w = a.memo(function(e) {
let {
  index: n
} = e;
return (0, l.jsx)(d.Text, {
  variant: 'text-xs/normal',
  className: A.subtitleSeparator,
  children: '\xB7'
}, 'separator-'.concat(n));
  }),
  P = a.memo(function(e) {
let {
  channel: n,
  category: a,
  guild: i,
  isFirstChannel: o,
  isLastChannel: m,
  onChannelClick: Z,
  tooltipDirection: T = 'right'
} = e, {
  isSubscriptionGated: L
} = (0, _.Z)(n.id), P = (0, v.Mf)(i.id, n.id, a.id), y = (0, v.t4)(i.id, n.id, a.id), k = (0, v.EH)(i.id, a.id), H = (0, s.e7)([b.Z], () => b.Z.getActiveThreadCount(i.id, n.id)), D = (0, s.e7)([x.Z], () => x.Z.shouldIndicateNewChannel(i.id, n.id)), U = e => {
  if (!y)
    return e.stopPropagation(), Z(i.id, n.id, a.id), !0;
}, W = e => {
  n.isGuildVocal() ? (0, u.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('79695'),
      t.e('18320'),
      t.e('83331')
    ]).then(t.bind(t, 213202));
    return t => (0, l.jsx)(e, {
      ...t,
      channel: n,
      guild: i
    });
  }) : (0, u.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('79695'),
      t.e('18320'),
      t.e('54310')
    ]).then(t.bind(t, 373651));
    return t => (0, l.jsx)(e, {
      ...t,
      channel: n,
      guild: i
    });
  });
}, G = function(e, n) {
  let t = [];
  return j.TPd.GUILD_THREADS_ONLY.has(e.type) && n >= 1 && t.push((0, l.jsx)(d.Text, {
    variant: 'text-xs/normal',
    className: A.channelSubtitle,
    children: R.Z.Messages.ACTIVE_FORUM_POST_COUNT.format({
      count: n
    })
  }, 'thread-count')), !B.has(e.type) && t.push((0, l.jsx)(d.Text, {
    variant: 'text-xs/normal',
    className: A.channelSubtitle,
    children: (0, E.qw)(e.id)
  }, 'active')), null != e.topic && e.topic.length > 0 && t.push((0, l.jsx)(h.Z, {
    children: (0, l.jsx)(d.Text, {
      className: A.topic,
      variant: 'text-xs/normal',
      children: p.Z.parseTopic(e.topic, !0, {
        channelId: e.id
      })
    })
  }, 'topic')), [t.map((e, n) => [
    e,
    (0, l.jsx)(w, {
      index: n
    }, 'subtitle-separator-'.concat(n))
  ])].flat(2).slice(0, -1);
}(n, H), F = e => (e.stopPropagation(), O.has(n.type) || e.shiftKey) ? ((0, g.XU)(i.id, n.id), !0) : n.isGuildStageVoice() || n.isGuildVoice() ? ((0, I.Cq)(n), !0) : (N.Z.openChannelAsSidebar({
  guildId: n.guild_id,
  channelId: n.id,
  baseChannelId: S.oC.CHANNEL_BROWSER
}), !0), z = R.Z.Messages.CHANNEL_BROWSER_VIEW;
n.isGuildStageVoice() || n.isGuildVoice() ? z = R.Z.Messages.JOIN : n.isForumLikeChannel() && (z = R.Z.Messages.OPEN);
let V = y ? 'text-muted' : 'text-normal',
  q = (0, d.useToken)(y ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_NORMAL).hex();
return (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)(d.Tooltip, {
      text: k,
      delay: 500,
      position: T,
      children: e => (0, l.jsxs)(d.Clickable, {
        className: r()(A.channelRow, {
          [A.firstChannel]: o,
          [A.lastChannel]: m,
          [A.disabled]: y
        }),
        ...e,
        onClick: U,
        onContextMenu: W,
        children: [
          (0, l.jsxs)('div', {
            className: A.channelInfo,
            children: [
              (0, l.jsxs)('div', {
                className: A.channelName,
                children: [
                  (0, l.jsx)(C._, {
                    channel: n,
                    guild: i
                  }),
                  (0, l.jsx)(h.Z, {
                    className: A.__invalid_name,
                    children: (0, l.jsx)(d.Text, {
                      className: A.channelText,
                      variant: 'text-md/medium',
                      lineClamp: 1,
                      color: V,
                      children: n.name
                    })
                  }),
                  L ? (0, l.jsx)(f.Z, {
                    color: q,
                    className: A.premiumIcon
                  }) : null,
                  D ? (0, l.jsx)(d.TextBadge, {
                    text: R.Z.Messages.NEW,
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    className: A.titleBadge
                  }) : null
                ]
              }),
              (0, l.jsx)('div', {
                className: A.channelSubtitles,
                children: G
              })
            ]
          }),
          (0, l.jsxs)('div', {
            className: A.channelActions,
            children: [
              (0, l.jsx)(d.Button, {
                look: d.ButtonLooks.OUTLINED,
                color: d.ButtonColors.PRIMARY,
                size: d.ButtonSizes.SMALL,
                className: A.viewChannelButton,
                onClick: F,
                children: z
              }),
              (0, l.jsx)(d.Checkbox, {
                'aria-checked': P,
                value: P,
                type: d.Checkbox.Types.INVERTED,
                disabled: y,
                innerClassName: A.checkboxInner,
                displayOnly: !0
              })
            ]
          })
        ]
      })
    }),
    !m && (0, l.jsx)(M, {})
  ]
});
  });

function y(e) {
  let {
categories: n,
guild: t,
className: i,
innerClassName: s,
hasSidebar: c
  } = e, {
onChannelClick: u
  } = (0, Z.Z)(t.id), h = (0, m.wE)(o.z.CHANNEL_BROWSER_NUX) ? 0 : -1, _ = a.useCallback(e => {
let {
  section: a
} = e;
if (0 === a && -1 === h)
  return null;
let i = n._categories[a + h];
return (0, l.jsx)(L, {
  channel: i.channel,
  guild: t,
  onCategoryClick: u
}, i.channel.id);
  }, [
n,
t,
h,
u
  ]), f = a.useCallback(e => {
let {
  section: a,
  row: i
} = e;
if (0 === a && -1 === h)
  return (0, l.jsx)(T.Z, {
    guild: t
  });
let r = n._categories[a + h],
  s = n[r.channel.id][i];
return null == s ? null : (0, l.jsx)(P, {
  category: r.channel,
  channel: s.channel,
  guild: t,
  isFirstChannel: 0 === i,
  isLastChannel: n[r.channel.id].length - 1 === i,
  tooltipDirection: c ? 'right' : 'top',
  onChannelClick: u
}, s.channel.id);
  }, [
n,
t,
h,
c,
u
  ]), C = (0, T.q)(t.id), p = (0, E.tn)(t.id, n, 64, C);
  return (0, l.jsx)(d.ListAuto, {
className: i,
innerClassName: r()(s, A.scrollerInner),
sectionHeight: 48,
rowHeight: e => p[e].rowHeight,
renderSection: _,
renderRow: f,
sections: p.map(e => e.rowCount)
  }, 'channel-browser-list');
}