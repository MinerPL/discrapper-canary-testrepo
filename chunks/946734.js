n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(392711),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(884338),
  d = n(100527),
  u = n(906732),
  h = n(150039),
  p = n(171368),
  m = n(271383),
  _ = n(430824),
  f = n(594174),
  E = n(514342),
  C = n(251625),
  g = n(823379),
  I = n(665149),
  x = n(981631),
  T = n(228168),
  v = n(689938),
  N = n(641181);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class Z {
  updateData(e) {
let {
  userId: t,
  user: n,
  channelId: i,
  analyticsLocations: a
} = e;
this.userId = t, this.user = n, this.channelId = i, this.analyticsLocations = a;
  }
  getNicknameGuildPairs() {
return this.generateNicknameGuildPairs(this.user);
  }
  renderNicknamePairs() {
return this.getNicknameGuildPairs().map((e, t) => {
  let [n, l] = e, s = (0, i.jsx)(o.Clickable, {
    tag: 'span',
    onClick: this.handleClick,
    children: n
  });
  return l.length > 0 && (s = (0, i.jsx)(o.TooltipContainer, {
    className: N.tooltip,
    text: l.join(', '),
    position: 'bottom',
    children: s
  })), (0, i.jsxs)(a.Fragment, {
    children: [
      0 !== t ? ', ' : null,
      s
    ]
  }, t);
});
  }
  constructor({
userId: e,
user: t,
channelId: n,
analyticsLocations: a
  }) {
S(this, 'userId', void 0), S(this, 'user', void 0), S(this, 'channelId', void 0), S(this, 'analyticsLocations', void 0), S(this, 'generateNicknameGuildPairs', (0, C.oH)(e => {
  var t;
  return s()(m.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
    let [t, n] = e;
    return [
      t,
      n.map(e => {
        var t;
        return null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
      }).filter(g.lm)
    ];
  }).value();
})), S(this, 'renderMoreAvatars', () => (0, i.jsx)(o.TooltipContainer, {
  text: v.Z.Messages.AKA_MORE_AVATARS_OVERFLOW,
  position: 'bottom',
  children: (0, i.jsx)(o.Clickable, {
    className: N.moreAvatars,
    onClick: this.handleClick,
    children: (0, i.jsx)(o.CirclePlusIcon, {
      size: 'xs',
      color: 'currentColor',
      className: N.plusIcon
    })
  })
}, 'more-avatars')), S(this, 'handleClick', () => {
  (0, p.openUserProfileModal)({
    userId: this.userId,
    channelId: this.channelId,
    sourceAnalyticsLocations: this.analyticsLocations,
    section: T.oh.MUTUAL_GUILDS,
    analyticsLocation: {
      section: x.jXE.CHANNEL_HEADER
    }
  });
}), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = a;
  }
}

function A(e) {
  let {
channel: t
  } = e, n = t.getRecipientId(), l = (0, h.gc)(n), s = Array(l.length).fill(null), {
analyticsLocations: p
  } = (0, u.ZP)(d.Z.AKA), m = function(e) {
let {
  userId: t,
  channelId: n,
  analyticsLocations: i
} = e, l = (0, r.e7)([f.default], () => f.default.getUser(t), [t]), [s] = a.useState(() => new Z({
  user: l,
  userId: t,
  channelId: n,
  analyticsLocations: i
}));
return s.updateData({
  userId: t,
  user: l,
  channelId: n,
  analyticsLocations: i
}), s;
  }({
userId: n,
analyticsLocations: p,
channelId: t.id
  });
  return 0 === m.getNicknameGuildPairs().length && 0 === l.length ? (0, i.jsx)('div', {
className: N.spacer
  }) : (0, i.jsxs)(u.Gt, {
value: p,
children: [
  (0, i.jsx)(I.iz, {}),
  (0, i.jsx)(o.TextBadge, {
    text: v.Z.Messages.AKA,
    disableColor: !0,
    className: N.akaBadge
  }),
  l.length > 0 ? (0, i.jsx)(c.Z, {
    size: 16,
    users: s,
    showUserPopout: !1,
    renderUser: (e, t, n) => {
      var a;
      let s = m.user,
        r = l[n];
      return null == r || null == s ? null : (0, i.jsx)(o.TooltipContainer, {
        text: null === (a = _.Z.getGuild(r)) || void 0 === a ? void 0 : a.name,
        position: 'bottom',
        children: (0, i.jsx)('img', {
          alt: '',
          className: N.avatar,
          onClick: m.handleClick,
          src: s.getAvatarURL(r, 16),
          'aria-hidden': !0
        })
      }, r[1]);
    },
    renderMoreUsers: m.renderMoreAvatars,
    guildId: void 0,
    max: 3,
    className: N.avatars
  }) : null,
  m.getNicknameGuildPairs().length > 0 ? (0, i.jsx)(E.Z, {
    position: 'bottom',
    className: N.nicknames,
    children: m.renderNicknamePairs()
  }) : null
]
  });
}