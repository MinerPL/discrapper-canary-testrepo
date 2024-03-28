"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("789020");
var s = n("735250");
n("470079");
var a = n("533800"),
  l = n("481060"),
  i = n("358555"),
  r = n("131704"),
  o = n("197409"),
  u = n("507893"),
  d = n("630388"),
  c = n("267642"),
  f = n("411198"),
  E = n("277707"),
  _ = n("358595"),
  T = n("981631"),
  m = n("689938"),
  I = n("558338");

function p(e) {
  var t, p;
  let h, N, S, {
      onTransitionToInviteChannel: C,
      onAcceptInstantInvite: A,
      guild: g,
      invite: M,
      author: R,
      currentUserId: O
    } = e,
    v = O === R.id,
    {
      channel: L,
      approximate_member_count: x,
      approximate_presence_count: D
    } = M,
    P = M.state === T.InviteStates.ACCEPTING,
    y = null != L ? (0, r.createChannelRecordFromInvite)(L) : null,
    U = null != g,
    b = null != y,
    j = null != y && y.isGuildVocal(),
    G = null != y && y.isGuildStageVoice(),
    B = (0, d.hasFlag)(null !== (t = M.flags) && void 0 !== t ? t : 0, a.GuildInviteFlags.IS_GUEST_INVITE),
    F = null !== (p = null == g ? void 0 : g.hasFeature(T.GuildFeatures.HUB)) && void 0 !== p && p;
  if (null == g) {
    if (null == M.guild) return (0, s.jsx)(_.default, {});
    g = f.fromInviteGuild(M.guild);
    let e = (0, c.getGuildTierFromAppliedBoostCount)(M.guild.premium_subscription_count, M.guild.id);
    g.premiumTier = e
  }
  let k = U ? C : A,
    w = (0, E.getHeaderTextForInvite)({
      isVoiceChannel: j,
      isOwnInvite: v,
      isGuest: B,
      isHubGuild: F,
      isStage: G,
      isStream: !1
    });
  return N = (0, s.jsxs)("span", {
    className: I.infoTitle,
    children: [(0, s.jsx)(o.default.GuildName, {
      guild: g
    }), (0, s.jsx)("span", {
      className: I.infoBadge,
      children: (0, s.jsx)(i.default, {
        guild: g,
        isBannerVisible: !1,
        disableBoostClick: !0
      })
    })]
  }), B && (S = (0, s.jsx)(l.TooltipContainer, {
    className: I.tooltipContainer,
    text: m.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
    children: (0, s.jsx)(u.default, {
      className: I.infoIcon
    })
  })), j ? (N = (0, s.jsx)(o.default.Channel, {
    channel: y
  }), h = (0, s.jsxs)("span", {
    className: I.infoTitle,
    children: [m.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
      guildName: g.name
    }), (0, s.jsx)("span", {
      className: I.infoBadge,
      children: (0, s.jsx)(i.default, {
        guild: g,
        isBannerVisible: !1
      })
    })]
  })) : null != x && x >= 5 || null != D && D > 0 ? h = (0, s.jsx)(o.default.Data, {
    members: x,
    membersOnline: D
  }) : b && (h = (0, s.jsx)(o.default.Channel, {
    channel: y,
    guild: g
  })), (0, s.jsxs)(o.default, {
    children: [(0, s.jsx)(o.default.GuildSplash, {
      guild: g
    }), (0, s.jsx)(o.default.Header, {
      text: w,
      extra: S
    }), (0, s.jsxs)(o.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: I.headerLine,
        children: [(0, s.jsx)(o.default.Icon, {
          guild: g
        }), (0, s.jsx)(o.default.Info, {
          title: N,
          onClick: U ? k : null,
          children: h
        })]
      }), (0, s.jsx)(o.default.Button, {
        onClick: k,
        submitting: P,
        color: o.default.Button.Colors.GREEN,
        children: j ? G ? m.default.Messages.STAGE_CHANNEL_JOIN : m.default.Messages.INVITE_VOICE_CHANNEL_JOIN : U ? m.default.Messages.JOINED_GUILD : m.default.Messages.JOIN_GUILD
      })]
    }), g.hasFeature(T.GuildFeatures.HUB) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: I.separator
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
          onClick: () => (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("95468"), n.e("75441")]).then(n.bind(n, "650233"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          })
        })
      })]
    })]
  })
}