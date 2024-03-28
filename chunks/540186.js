"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("653041");
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("594174"),
  r = n("104259"),
  d = n("185403"),
  u = n("988951"),
  o = n("311888"),
  c = n("63063"),
  E = n("5192"),
  f = n("431328"),
  h = n("501655"),
  _ = n("659972"),
  S = n("981631"),
  T = n("765305"),
  N = n("689938"),
  g = n("387975");

function v(e) {
  let {
    icon: t
  } = e;
  return (0, a.jsx)("div", {
    className: g.iconContainer,
    children: (0, a.jsx)(t, {
      width: 24,
      height: 24
    })
  })
}

function x(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.listItemContainer,
    children: [(0, a.jsx)("div", {
      className: g.listItemIconContainer,
      children: t
    }), (0, a.jsx)(l.Text, {
      className: g.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: n
    })]
  })
}

function I(e) {
  var t;
  let {
    guild: n,
    channel: l,
    stageData: r
  } = e, d = (0, s.useStateFromStores)([i.default], () => i.default.getCurrentUser(), []), u = {
    id: "1337",
    guild_id: n.id,
    channel_id: l.id,
    topic: r.topic,
    description: r.description,
    privacy_level: null !== (t = r.privacyLevel) && void 0 !== t ? t : T.GuildScheduledEventPrivacyLevel.PUBLIC
  }, o = (0, f.useStageParticipants)(l.id, h.StageChannelParticipantNamedIndex.SPEAKER), c = (0, f.useStageParticipantsCount)(l.id, h.StageChannelParticipantNamedIndex.AUDIENCE), S = o.slice(0, 5);
  return null == S.find(e => {
    var t;
    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == d ? void 0 : d.id)
  }) && S.push({
    user: d,
    userNick: E.default.getName(n.id, l.id, d)
  }), (0, a.jsx)("div", {
    className: g.previewCardContainer,
    children: (0, a.jsx)("div", {
      className: g.previewCard,
      children: (0, a.jsx)(_.default, {
        guild: n,
        stageInstance: u,
        showGuildPopout: !1,
        setShowGuildPopout: () => {},
        source: _.StageDiscoveryRecommendationSource.UNSPECIFIED,
        speakers: S,
        speakerCount: o.length,
        audienceCount: Math.max(1337, c),
        channelName: l.name
      })
    })
  })
}

function C(e) {
  let {
    guild: t,
    channel: n,
    stageData: s,
    headerId: i,
    loading: E,
    onNext: f,
    onCancel: h,
    onBack: _
  } = e;
  return null == t || null == n || null == s ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I, {
      guild: t,
      channel: n,
      stageData: s
    }), (0, a.jsxs)(l.ModalContent, {
      className: g.container,
      children: [(0, a.jsxs)("div", {
        className: g.header,
        children: [(0, a.jsx)(l.Heading, {
          id: i,
          className: g.__invalid_title,
          variant: "heading-xl/semibold",
          children: N.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
        }), (0, a.jsx)(l.Text, {
          className: g.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: N.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
        })]
      }), (0, a.jsxs)("div", {
        className: g.__invalid_list,
        children: [(0, a.jsx)(x, {
          icon: (0, a.jsx)(v, {
            icon: r.default
          }),
          text: N.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
        }), (0, a.jsx)(x, {
          icon: (0, a.jsx)(v, {
            icon: u.default
          }),
          text: N.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
        }), (0, a.jsx)(x, {
          icon: (0, a.jsx)(v, {
            icon: d.default
          }),
          text: N.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
        }), (0, a.jsx)(x, {
          icon: (0, a.jsx)(o.default, {
            className: g.badgeIconBackground,
            foreground: g.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: N.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
            articleURL: c.default.getArticleURL(S.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, a.jsxs)(l.ModalFooter, {
      children: [(0, a.jsx)(l.Button, {
        color: l.Button.Colors.GREEN,
        onClick: f,
        submitting: E,
        children: N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
      }), (0, a.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        className: g.cancelButton,
        onClick: h,
        children: N.default.Messages.CANCEL
      }), (0, a.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.LINK,
        className: g.backButton,
        onClick: _,
        size: l.Button.Sizes.MIN,
        children: N.default.Messages.BACK
      })]
    })]
  })
}