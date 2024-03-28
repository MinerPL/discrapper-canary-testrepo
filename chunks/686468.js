"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("692547"),
  i = n("481060"),
  r = n("688641"),
  o = n("596449"),
  u = n("459502"),
  d = n("856691"),
  c = n("889161"),
  f = n("496675"),
  h = n("170039"),
  m = n("602623"),
  p = n("146085"),
  E = n("979339"),
  C = n("643632"),
  g = n("939863"),
  S = n("689938"),
  _ = n("242601");

function T(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(r.default, {
    iconContainerClassName: _.continueIconContainer,
    icon: (0, a.jsx)(h.default, {
      className: _.continueIcon,
      height: 20,
      width: 20
    }),
    color: s.default.unsafe_rawColors.PRIMARY_700.css,
    title: S.default.Messages.STAGE_CONTINUE_PROMPT_TITLE,
    description: S.default.Messages.STAGE_CONTINUE_PROMPT_SUBTITLE,
    onClick: t
  })
}

function I(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: l
  } = (0, E.default)(t.id);
  return (0, a.jsxs)("div", {
    className: _.audienceSummary,
    children: [(0, a.jsx)(m.default, {
      className: _.summaryItem,
      guildId: t.guild_id,
      users: l,
      size: m.Sizes.SIZE_16
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return S.default.Messages.STAGE_AUDIENCE_WAITING_ONE.format({
          first: e[0].userNick
        });
        if (2 === e.length) return S.default.Messages.STAGE_AUDIENCE_WAITING_TWO.format({
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return S.default.Messages.STAGE_AUDIENCE_WAITING_MANY.format({
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)
    })]
  })
}

function A(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, s = (0, l.useStateFromStores)([f.default], () => f.default.can(p.MODERATE_STAGE_CHANNEL_PERMISSIONS, t), [t]), r = t.guild_id, {
    canCreateGuildEvent: m
  } = (0, c.useManageResourcePermissions)(t), A = (0, C.default)(t.id), {
    usersInSummary: v
  } = (0, E.default)(t.id);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(g.default, {
      children: (0, a.jsx)("div", {
        className: _.iconBackground,
        children: (0, a.jsx)(h.default, {
          width: 40,
          height: 40,
          className: _.icon
        })
      })
    }), (0, a.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, a.jsx)(i.Heading, {
        className: _.__invalid_title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.STAGE_START_PROMPT_TITLE_MODERATOR
      }), (0, a.jsx)(i.Text, {
        className: _.subtitle,
        variant: "text-sm/normal",
        children: S.default.Messages.STAGE_START_PROMPT_SUBTITLE
      })]
    }), A ? null : (0, a.jsx)(u.default, {
      channelId: t.id
    }), s ? (0, a.jsx)(d.default, {
      className: _.eventPrompt,
      channel: t
    }) : null, m ? (0, a.jsx)(o.default, {
      className: _.eventPrompt,
      guildId: r
    }) : null, (s || v.length > 0) && (0, a.jsx)("hr", {
      className: _.separator
    }), s ? (0, a.jsx)(T, {
      onClick: n
    }) : null, (0, a.jsx)(I, {
      channel: t
    })]
  })
}