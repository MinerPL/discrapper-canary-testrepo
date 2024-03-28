"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("924826"),
  r = n("442837"),
  o = n("481060"),
  u = n("788307"),
  d = n("43267"),
  c = n("933557"),
  f = n("471445"),
  E = n("199902"),
  _ = n("592125"),
  T = n("430824"),
  m = n("158776"),
  I = n("594174"),
  p = n("2093"),
  h = n("346656"),
  N = n("153124"),
  S = n("689938"),
  C = n("553403");
let A = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function g(e) {
  let {
    channel: t,
    children: n,
    gotoChannel: a,
    mentionCount: l,
    channelState: r,
    toggleCollapsed: u
  } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, N.useUID)()));
  return (0, s.jsx)(o.FocusRing, {
    offset: A,
    children: (0, s.jsxs)("div", {
      className: C.channelHeader,
      ...d,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == u || u(r))
      },
      children: [(0, s.jsx)(M, {
        channel: t,
        gotoChannel: a
      }), (0, s.jsx)(v, {
        channel: t,
        gotoChannel: a,
        mentionCount: l
      }), n]
    })
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, s.jsx)(R, {
    channel: t,
    gotoChannel: n
  }) : (0, s.jsx)(O, {
    channel: t,
    gotoChannel: n
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, a = (0, r.useStateFromStores)([I.default], () => t.isDM() ? I.default.getUser(t.getRecipientId()) : null), l = null == a ? (0, d.getChannelIconURL)(t) : a.getAvatarURL(void 0, 40);
  return (0, s.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, s.jsx)("img", {
      className: C.dmIcon,
      src: l,
      alt: "",
      "aria-hidden": !0
    })
  })
}

function O(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, a = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(t.guild_id));
  return null == a ? null : (0, s.jsx)(h.default, {
    "aria-hidden": !0,
    className: C.guildIcon,
    guild: a,
    size: h.default.Sizes.MEDIUM,
    active: !0,
    onClick: n,
    tabIndex: -1
  })
}

function v(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: a
  } = e, i = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([_.default], () => _.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), E = (0, c.default)(t, !1), m = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), I = t.isMultiUserDM() ? S.default.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, s.jsx)(L, {
    channel: t
  }) : (0, s.jsx)(o.Clickable, {
    className: l()(C.subtext, C.guildName),
    onClick: n,
    children: m
  });
  return (0, s.jsxs)("div", {
    className: C.channelNameSection,
    children: [(0, s.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: C.channelNameHeader,
      children: (0, s.jsxs)(o.Clickable, {
        className: C.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, s.jsx)(d, {
          className: t.isForumLikeChannel() ? C.forumIcon : void 0,
          width: 18,
          height: 18
        }), (0, s.jsx)("span", {
          className: C.channelNameSpan,
          children: E
        }), null != a && a > 0 ? (0, s.jsx)(p.default, {
          value: a,
          className: C.badge
        }) : null]
      })
    }), (0, s.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: C.subtextContainer,
      children: I
    })]
  })
}

function L(e) {
  let {
    channel: t
  } = e, {
    user: n,
    activities: a,
    applicationStream: l
  } = (0, r.useStateFromStoresObject)([I.default, m.default, E.default], () => {
    let e = I.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? m.default.getActivities(e.id) : null,
      applicationStream: null != e ? E.default.getAnyStreamForUser(e.id) : null
    }
  });
  return null == a ? null : (0, s.jsx)(u.default, {
    className: C.activityStatus,
    emojiClassName: C.activityEmoji,
    activities: a,
    applicationStream: l,
    hideTooltip: !0,
    user: n
  })
}