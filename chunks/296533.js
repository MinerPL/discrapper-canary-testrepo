s.d(t, {
  Z: function() {
return f;
  },
  r: function() {
return M;
  }
}), s(653041), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(338545),
  r = s(399606),
  o = s(481060),
  l = s(607070),
  c = s(158153),
  d = s(280942),
  _ = s(314684),
  E = s(209747),
  u = s(430824),
  T = s(267642),
  I = s(709054),
  S = s(357956),
  N = s(275909),
  C = s(300037),
  m = s(981631),
  A = s(474936),
  g = s(689938),
  h = s(625764);

function O(e) {
  let {
guildTier: t,
guildBoostSlot: s,
showAltText: r,
isCanceled: l,
premiumSubscription: c
  } = e, d = a.useMemo(() => {
if (l)
  return g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
    date: c.currentPeriodEnd
  });
let e = null != s.premiumGuildSubscription ? I.default.extractTimestamp(s.premiumGuildSubscription.id) : 0;
return g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({
  date: new Date(e)
});
  }, [
s,
l,
c
  ]), _ = a.useMemo(() => function(e) {
if (null == e || e === m.Eu4.NONE)
  return '';
let t = [
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({
    numEmojiSlots: A.HO[e].limits.emoji
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
    numStickerSlots: A.HO[e].limits.stickers
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
    numSoundboardSlots: A.HO[e].limits.soundboardSounds
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
    resolution: A.HO[e].limits.screenShareQualityResolution,
    framerate: A.HO[e].limits.screenShareQualityFramerate
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
    bitrate: A.HO[e].limits.bitrate / 1000
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
    filesize: A.HO[e].limits.fileSize / 1024 / 1024
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
    numVideoStageSeats: A.HO[e].limits.stageVideoUsers
  }),
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON,
  g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND
];
e >= m.Eu4.TIER_2 && (t.push(g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), t.push(g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= m.Eu4.TIER_3 && t.push(g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
let s = t[Math.floor(Math.random() * t.length)];
return g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({
  perk: s
});
  }(t), [t]), E = (0, o.useTransition)(r, {
from: {
  opacity: 0
},
enter: {
  opacity: 1
},
leave: {
  opacity: 0
}
  }, 'animate-always');
  return l || t === m.Eu4.NONE ? (0, n.jsx)('div', {
className: h.boostDescriptionInnerContainer,
children: (0, n.jsx)(o.Text, {
  variant: 'text-sm/medium',
  color: 'text-muted',
  children: d
})
  }) : E((e, t) => (0, n.jsx)(i.animated.div, {
style: e,
className: h.boostDescriptionInnerContainer,
children: (0, n.jsx)(o.Text, {
  variant: 'text-sm/medium',
  color: 'text-muted',
  children: t ? _ : d
})
  }));
}

function p(e) {
  let {
guildTier: t,
guildBoostSlot: s,
premiumSubscription: i,
hasCancelableGuildBoostSlot: c,
showAltText: _,
isLastGuildBoostSlot: E
  } = e, u = (0, r.e7)([l.Z], () => l.Z.useReducedMotion), I = a.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), C = a.useMemo(() => null != I && I > new Date(), [I]), m = (0, T.tl)(s);
  return (0, n.jsxs)('div', {
className: h.boostContainer,
children: [
  (0, n.jsxs)('div', {
    className: h.boostInnerContainer,
    children: [
      (0, n.jsx)(N.Z, {
        isCanceled: m,
        hasCooldown: C,
        useReducedMotion: u
      }),
      (0, n.jsx)('div', {
        className: h.boostDescriptionContainer,
        children: null != I && C && !m ? (0, n.jsx)(S.Z, {
          className: h.boostDescriptionInnerContainer,
          cooldown: I.getTime()
        }) : (0, n.jsx)(O, {
          guildTier: t,
          guildBoostSlot: s,
          showAltText: _,
          isCanceled: m,
          premiumSubscription: i
        })
      }),
      (0, n.jsx)(o.Popout, {
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(d.Z, {
            onClose: t,
            guildBoostSlot: s,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: c
          });
        },
        position: 'right',
        align: 'center',
        children: e => (0, n.jsx)(o.Clickable, {
          ...e,
          'aria-label': g.Z.Messages.MORE_OPTIONS,
          className: h.boostSlotMenuIcon,
          children: (0, n.jsx)(o.MoreVerticalIcon, {
            size: 'md',
            color: 'currentColor'
          })
        })
      })
    ]
  }),
  !E && (0, n.jsx)('div', {
    className: h.boostContainerSeparator
  })
]
  });
}

function R(e) {
  let {
guildId: t,
guildBoostSlotRecords: s,
premiumSubscription: a,
hasCancelableGuildBoostSlot: i,
showAltText: o
  } = e, l = (0, r.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (0, n.jsxs)('div', {
className: h.appliedBoostContainer,
children: [
  (0, n.jsx)(C.Z, {
    guildId: t,
    boostingVariant: !1
  }),
  s.map((e, t) => (0, n.jsx)(p, {
    guildTier: null == l ? void 0 : l.premiumTier,
    guildBoostSlot: e,
    premiumSubscription: a,
    hasCancelableGuildBoostSlot: i,
    showAltText: o,
    isLastGuildBoostSlot: t === s.length - 1
  }, e.id))
]
  });
}

function x(e) {
  let {
guildId: t,
appliedGuildBoosts: s,
premiumSubscription: a
  } = e, i = (0, r.e7)([u.Z], () => u.Z.getGuild(t), [t]), o = I.default.fromTimestamp(Date.now());
  if (s.forEach(e => {
  (null == o || 0 > I.default.compare(e.id, o)) && (o = e.id);
}), null == o)
return null;
  let l = E.Z.createFromServer({
id: I.default.fromTimestamp(Date.now()),
subscription_id: a.id,
canceled: !1,
premium_guild_subscription: {
  id: o,
  guild_id: t
},
cooldown_ends_at: null
  }, a);
  return (0, n.jsxs)('div', {
className: h.appliedBoostContainer,
children: [
  (0, n.jsx)(C.Z, {
    guildId: t,
    boostingVariant: !1
  }),
  s.map((e, t) => (0, n.jsx)(p, {
    guildTier: null == i ? void 0 : i.premiumTier,
    guildBoostSlot: l,
    premiumSubscription: a,
    hasCancelableGuildBoostSlot: !1,
    showAltText: !1,
    isLastGuildBoostSlot: t === s.length - 1
  }, t))
]
  });
}

function M(e) {
  let {
appliedGuildBoosts: t,
premiumSubscription: s
  } = e, i = a.useMemo(() => {
let e = {};
return t.forEach(t => {
  let s = t.guildId;
  !(s in e) && (e[s] = []), e[s].push(t);
}), e;
  }, [t]);
  return null == s || 0 === t.length ? null : (0, n.jsxs)('div', {
className: h.wrapper,
children: [
  (0, n.jsx)('div', {
    className: h.container,
    children: I.default.keys(i).map(e => (0, n.jsx)(x, {
      guildId: e,
      premiumSubscription: s,
      appliedGuildBoosts: i[e]
    }, e))
  }),
  (0, n.jsx)('div', {
    className: h.mainSeparator
  })
]
  });
}

function f(e) {
  let {
guildBoostSlots: t,
premiumSubscription: s
  } = e, [i, r] = a.useState(!1), o = (0, _.Vp)();
  a.useEffect(() => {
let e = -1;
return null != s && (e = setInterval(() => {
  r(e => !e);
}, 3000)), () => {
  clearInterval(e);
};
  }, [s]);
  let {
boostsByGuildId: l,
numActiveGuildBoostSlots: d
  } = a.useMemo(() => {
let e = 0,
  s = {};
return Object.keys(t).forEach(n => {
  let a = t[n];
  if (!(0, T.tl)(a) && e++, null != a.premiumGuildSubscription) {
    let e = a.premiumGuildSubscription.guildId;
    !(e in s) && (s[e] = []), s[e].push(a);
  }
}), {
  boostsByGuildId: s,
  numActiveGuildBoostSlots: e
};
  }, [t]);
  if (null == s || 0 === Object.keys(l).length)
return null;
  let E = d > (0, c.G)(s, o);
  return (0, n.jsxs)('div', {
className: h.wrapper,
children: [
  (0, n.jsx)('div', {
    className: h.container,
    children: I.default.keys(l).map(e => (0, n.jsx)(R, {
      guildId: e,
      guildBoostSlotRecords: l[e],
      premiumSubscription: s,
      hasCancelableGuildBoostSlot: E,
      showAltText: i
    }, e))
  }),
  (0, n.jsx)('div', {
    className: h.mainSeparator
  })
]
  });
}