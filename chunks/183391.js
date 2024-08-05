a(47120);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(643872),
  E = a(481060),
  o = a(570140),
  c = a(652898),
  _ = a(93093),
  I = a(768581),
  u = a(810568),
  A = a(981631),
  d = a(689938),
  O = a(421377);
let N = [
i.p.OFFICIAL,
i.p.TWITTER,
i.p.YOUTUBE
  ],
  R = e => {
let {
  invite: s,
  trackClick: a
} = e, {
  approximate_member_count: l,
  guild: r
} = s;
if (null == r)
  return null;
let i = _.Z.isMember(r.id);
if (!(null == r ? void 0 : r.features.includes('VERIFIED')) && !(null == r ? void 0 : r.features.includes('PARTNER')))
  return null;
let c = I.ZP.getGuildIconURL({
  id: r.id,
  icon: r.icon,
  size: 32
});
return (0, n.jsxs)('div', {
  className: t()(O.column),
  children: [
    (0, n.jsx)(E.Text, {
      variant: 'text-xs/semibold',
      children: d.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
    }),
    (0, n.jsxs)('div', {
      className: t()(O.row, O.gapMd),
      children: [
        (0, n.jsx)('img', {
          className: O.icon,
          src: c,
          alt: d.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
            guildName: r.name
          })
        }),
        (0, n.jsxs)('div', {
          className: t()(O.gapNone),
          children: [
            (0, n.jsx)(E.Text, {
              variant: 'text-sm/normal',
              children: r.name
            }),
            null != l && (0, n.jsx)(E.Text, {
              variant: 'text-xxs/normal',
              children: d.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: l
              })
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(E.Button, {
      color: E.ButtonColors.PRIMARY,
      onClick: () => {
        a(u.as.JoinOfficialServer), o.Z.dispatch({
          type: 'INVITE_MODAL_OPEN',
          invite: s,
          code: s.code,
          context: A.IlC.APP
        });
      },
      children: i ? d.Z.Messages.JOINED_GUILD : d.Z.Messages.JOIN_GUILD
    })
  ]
});
  };
s.Z = e => {
  let {
websites: s,
trackClick: a
  } = e, r = null == s ? void 0 : s.find(e => {
let {
  category: s
} = e;
return s === i.p.DISCORD;
  }), [o, _] = l.useState();
  if (l.useEffect(() => {
  let e = async e => {
    let s = e.split('/').pop();
    if (null != s) {
      let e = await (0, c.Z)(s);
      !0 !== e.banned && _(e.invite);
    }
  };
  null != r && e(r.url);
}, [r]), null == s || 0 === s.length)
return null;
  let I = s.filter(e => {
let {
  category: s
} = e;
return N.includes(s);
  }).sort((e, s) => e.category - s.category);
  return (0, n.jsxs)('div', {
className: t()(O.column),
children: [
  null != o && (0, n.jsx)(R, {
    invite: o,
    trackClick: a
  }),
  (0, n.jsxs)('div', {
    className: t()(O.column, O.gapSm),
    children: [
      (0, n.jsx)(E.Text, {
        variant: 'text-xs/semibold',
        children: d.Z.Messages.GAME_PROFILE_LINKS
      }),
      (0, n.jsx)('div', {
        className: O.row,
        children: I.map(e => {
          let s, l, {
              category: r,
              url: t
            } = e,
            o = null;
          switch (r) {
            case i.p.OFFICIAL:
              o = (0, n.jsx)(E.GlobeEarthIcon, {
                colorClass: O.linkIcon
              }), l = u.as.WebsiteLink, s = d.Z.Messages.GAME_PROFILE_LINK_OFFICIAL;
              break;
            case i.p.TWITTER:
              o = (0, n.jsx)(E.XNeutralIcon, {
                colorClass: O.linkIcon
              }), l = u.as.XLink, s = d.Z.Messages.GAME_PROFILE_LINK_TWITTER;
              break;
            case i.p.YOUTUBE:
              l = u.as.YouTubeLink, o = (0, n.jsx)(E.YouTubeIcon, {
                colorClass: O.linkIcon
              }), s = d.Z.Messages.GAME_PROFILE_LINK_YOUTUBE;
          }
          return null != o ? (0, n.jsx)(E.Anchor, {
            className: O.linkAnchor,
            title: s,
            href: t,
            onClick: () => {
              a(l);
            },
            target: '_blank',
            children: o
          }, t) : null;
        })
      })
    ]
  })
]
  });
};