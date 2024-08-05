n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(884338),
  u = n(100527),
  d = n(906732),
  h = n(150039),
  p = n(171368),
  m = n(271383),
  _ = n(430824),
  f = n(594174),
  E = n(514342),
  g = n(251625),
  C = n(823379),
  I = n(665149),
  x = n(981631),
  T = n(228168),
  N = n(689938),
  v = n(641181);

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
  let [n, s] = e, l = (0, i.jsx)(o.Clickable, {
    tag: 'span',
    onClick: this.handleClick,
    children: n
  });
  return s.length > 0 && (l = (0, i.jsx)(o.TooltipContainer, {
    className: v.tooltip,
    text: s.join(', '),
    position: 'bottom',
    children: l
  })), (0, i.jsxs)(a.Fragment, {
    children: [
      0 !== t ? ', ' : null,
      l
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
S(this, 'userId', void 0), S(this, 'user', void 0), S(this, 'channelId', void 0), S(this, 'analyticsLocations', void 0), S(this, 'generateNicknameGuildPairs', (0, g.oH)(e => {
  var t;
  return l()(m.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
    let [t, n] = e;
    return [
      t,
      n.map(e => {
        var t;
        return null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
      }).filter(C.lm)
    ];
  }).value();
})), S(this, 'renderMoreAvatars', () => (0, i.jsx)(o.TooltipContainer, {
  text: N.Z.Messages.AKA_MORE_AVATARS_OVERFLOW,
  position: 'bottom',
  children: (0, i.jsx)(o.Clickable, {
    className: v.moreAvatars,
    onClick: this.handleClick,
    children: (0, i.jsx)(o.CirclePlusIcon, {
      size: 'xs',
      color: 'currentColor',
      className: v.plusIcon
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
  } = e, n = t.getRecipientId(), s = (0, h.gc)(n), l = Array(s.length).fill(null), {
analyticsLocations: p
  } = (0, d.ZP)(u.Z.AKA), m = function(e) {
let {
  userId: t,
  channelId: n,
  analyticsLocations: i
} = e, s = (0, r.e7)([f.default], () => f.default.getUser(t), [t]), [l] = a.useState(() => new Z({
  user: s,
  userId: t,
  channelId: n,
  analyticsLocations: i
}));
return l.updateData({
  userId: t,
  user: s,
  channelId: n,
  analyticsLocations: i
}), l;
  }({
userId: n,
analyticsLocations: p,
channelId: t.id
  });
  return 0 === m.getNicknameGuildPairs().length && 0 === s.length ? (0, i.jsx)('div', {
className: v.spacer
  }) : (0, i.jsxs)(d.Gt, {
value: p,
children: [
  (0, i.jsx)(I.iz, {}),
  (0, i.jsx)(o.TextBadge, {
    text: N.Z.Messages.AKA,
    disableColor: !0,
    className: v.akaBadge
  }),
  s.length > 0 ? (0, i.jsx)(c.Z, {
    size: 16,
    users: l,
    showUserPopout: !1,
    renderUser: (e, t, n) => {
      var a;
      let l = m.user,
        r = s[n];
      return null == r || null == l ? null : (0, i.jsx)(o.TooltipContainer, {
        text: null === (a = _.Z.getGuild(r)) || void 0 === a ? void 0 : a.name,
        position: 'bottom',
        children: (0, i.jsx)('img', {
          alt: '',
          className: v.avatar,
          onClick: m.handleClick,
          src: l.getAvatarURL(r, 16),
          'aria-hidden': !0
        })
      }, r[1]);
    },
    renderMoreUsers: m.renderMoreAvatars,
    guildId: void 0,
    max: 3,
    className: v.avatars
  }) : null,
  m.getNicknameGuildPairs().length > 0 ? (0, i.jsx)(E.Z, {
    position: 'bottom',
    className: v.nicknames,
    children: m.renderNicknamePairs()
  }) : null
]
  });
}