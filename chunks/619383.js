"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("146606"),
  i = s("65597"),
  r = s("77078"),
  o = s("206230"),
  d = s("36685"),
  u = s("308086"),
  c = s("359499"),
  S = s("305961"),
  E = s("663745"),
  T = s("427459"),
  f = s("299039"),
  _ = s("397723"),
  m = s("717266"),
  g = s("131424"),
  h = s("49111"),
  N = s("646718"),
  I = s("782340"),
  p = s("8741");

function C(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    showAltText: i,
    isCanceled: o,
    premiumSubscription: d
  } = e, u = n.useMemo(() => {
    if (o) return I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
      date: d.currentPeriodEnd
    });
    let e = null != s.premiumGuildSubscription ? f.default.extractTimestamp(s.premiumGuildSubscription.id) : 0;
    return I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({
      date: new Date(e)
    })
  }, [s, o, d]), c = n.useMemo(() => (function(e) {
    if (null == e || e === h.BoostedGuildTiers.NONE) return "";
    let t = [I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({
      numEmojiSlots: N.BoostedGuildFeatures[e].limits.emoji
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
      numStickerSlots: N.BoostedGuildFeatures[e].limits.stickers
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
      numSoundboardSlots: N.BoostedGuildFeatures[e].limits.soundboardSounds
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
      resolution: N.BoostedGuildFeatures[e].limits.screenShareQualityResolution,
      framerate: N.BoostedGuildFeatures[e].limits.screenShareQualityFramerate
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
      bitrate: N.BoostedGuildFeatures[e].limits.bitrate / 1e3
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
      filesize: N.BoostedGuildFeatures[e].limits.fileSize / 1024 / 1024
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
      numVideoStageSeats: N.BoostedGuildFeatures[e].limits.stageVideoUsers
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON, I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND];
    e >= h.BoostedGuildTiers.TIER_2 && (t.push(I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), t.push(I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= h.BoostedGuildTiers.TIER_3 && t.push(I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
    let s = t[Math.floor(Math.random() * t.length)];
    return I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({
      perk: s
    })
  })(t), [t]), S = (0, l.useTransition)(i, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  return o || t === h.BoostedGuildTiers.NONE ? (0, a.jsx)("div", {
    className: p.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: u
    })
  }) : S((e, t) => (0, a.jsx)(l.animated.div, {
    style: e,
    className: p.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? c : u
    })
  }))
}

function A(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    premiumSubscription: l,
    hasCancelableGuildBoostSlot: d,
    showAltText: c,
    isLastGuildBoostSlot: S
  } = e, f = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), g = n.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), h = n.useMemo(() => null != g && g > new Date, [g]), N = (0, T.isGuildBoostSlotCanceled)(s);
  return (0, a.jsxs)("div", {
    className: p.boostContainer,
    children: [(0, a.jsxs)("div", {
      className: p.boostInnerContainer,
      children: [(0, a.jsx)(m.default, {
        isCanceled: N,
        hasCooldown: h,
        useReducedMotion: f
      }), (0, a.jsx)("div", {
        className: p.boostDescriptionContainer,
        children: null != g && h && !N ? (0, a.jsx)(_.default, {
          className: p.boostDescriptionInnerContainer,
          cooldown: g.getTime()
        }) : (0, a.jsx)(C, {
          guildTier: t,
          guildBoostSlot: s,
          showAltText: c,
          isCanceled: N,
          premiumSubscription: l
        })
      }), (0, a.jsx)(r.Popout, {
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(u.default, {
            onClose: t,
            guildBoostSlot: s,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: d
          })
        },
        position: "right",
        align: "center",
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          "aria-label": I.default.Messages.MORE_OPTIONS,
          className: p.boostSlotMenuIcon,
          children: (0, a.jsx)(E.default, {})
        })
      })]
    }), !S && (0, a.jsx)("div", {
      className: p.boostContainerSeparator
    })]
  })
}

function O(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: s,
    premiumSubscription: n,
    hasCancelableGuildBoostSlot: l,
    showAltText: r
  } = e, o = (0, i.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]);
  return (0, a.jsxs)("div", {
    className: p.appliedBoostContainer,
    children: [(0, a.jsx)(g.default, {
      guildId: t,
      boostingVariant: !1
    }), s.map((e, t) => (0, a.jsx)(A, {
      guildTier: null == o ? void 0 : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: n,
      hasCancelableGuildBoostSlot: l,
      showAltText: r,
      isLastGuildBoostSlot: t === s.length - 1
    }, e.id))]
  })
}

function x(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: s
  } = e, [l, i] = n.useState(!1), r = (0, c.useFreeBoostTenureRewardEntitlement)();
  n.useEffect(() => {
    let e = -1;
    return null != s && (e = setInterval(() => {
      i(e => !e)
    }, 3e3)), () => {
      clearInterval(e)
    }
  }, [s]);
  let {
    boostsByGuildId: o,
    numActiveGuildBoostSlots: u
  } = n.useMemo(() => {
    let e = 0,
      s = {};
    return Object.keys(t).forEach(a => {
      let n = t[a];
      if (!(0, T.isGuildBoostSlotCanceled)(n) && e++, null != n.premiumGuildSubscription) {
        let e = n.premiumGuildSubscription.guildId;
        !(e in s) && (s[e] = []), s[e].push(n)
      }
    }), {
      boostsByGuildId: s,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == s || 0 === Object.keys(o).length) return null;
  let S = (0, d.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(s, r),
    E = u > S;
  return (0, a.jsxs)("div", {
    className: p.wrapper,
    children: [(0, a.jsx)("div", {
      className: p.container,
      children: f.default.keys(o).map(e => (0, a.jsx)(O, {
        guildId: e,
        guildBoostSlotRecords: o[e],
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: E,
        showAltText: l
      }, e))
    }), (0, a.jsx)("div", {
      className: p.mainSeparator
    })]
  })
}