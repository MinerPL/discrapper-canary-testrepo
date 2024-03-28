"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("399606"),
  i = a("481060"),
  d = a("904245"),
  r = a("368844"),
  u = a("249842"),
  o = a("838367"),
  c = a("6025"),
  f = a("592125"),
  m = a("375954"),
  h = a("496675"),
  g = a("760053"),
  E = a("768581"),
  _ = a("526120"),
  I = a("825334"),
  x = a("981631"),
  S = a("689938"),
  v = a("964682");
let C = n.memo(function(e) {
    let {
      guild: t
    } = e, a = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(t.id), [t]);
    return n.useEffect(() => {
      null == a && (0, u.fetchGuildForPopout)(t.id)
    }, [t.id, a]), (0, l.jsx)("div", {
      className: v.sidebarCardWrapper,
      children: (0, l.jsxs)("div", {
        className: v.sidebarCard,
        children: [(0, l.jsx)(i.Heading, {
          className: v.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: S.default.Messages.GUILD_HOME_ABOUT
        }), (0, l.jsx)(i.Text, {
          className: v.guildDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: t.description
        }), (0, l.jsx)("div", {
          className: v.guildInfo,
          children: (null == a ? void 0 : a.memberCount) != null && (null == a ? void 0 : a.presenceCount) != null && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: v.dotOnline
            }), (0, l.jsx)(i.Text, {
              className: v.guildInfoText,
              variant: "text-xs/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
                online: null == a ? void 0 : a.presenceCount,
                total: null == a ? void 0 : a.memberCount
              })
            })]
          })
        })]
      })
    })
  }),
  N = e => {
    let {
      channelId: t,
      title: a,
      icon: u
    } = e, o = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(t)), I = (0, s.useStateFromStores)([m.default], () => m.default.getMessages(t)), S = (0, s.useStateFromStores)([h.default], () => h.default.can(x.Permissions.VIEW_CHANNEL, o)), C = I.first(), N = (0, r.useForumPostMediaProperties)(C, !1), p = (null == N ? void 0 : N.length) > 0 ? N[0] : null, T = null != o && null == C && !I.loadingMore && !I.ready && !I.hasFetched && S;
    n.useEffect(() => {
      T && d.default.fetchMessages({
        channelId: t,
        after: t,
        limit: 5
      })
    }, [t, T]);
    let A = e => {
      null != o && (e.shiftKey ? (0, _.selectHomeResourceChannel)(o.guild_id, o.id) : c.default.openResourceChannelAsSidebar({
        guildId: o.guild_id,
        channelId: o.id
      }))
    };
    return (0, l.jsx)(i.Clickable, {
      className: v.resourceChannel,
      onClick: e => A(e),
      children: (0, l.jsxs)(l.Fragment, {
        children: [(() => {
          let e = E.default.getResourceChannelIconURL({
            channelId: t,
            icon: u
          });
          return null != u && null != e ? (0, l.jsx)("img", {
            src: e,
            className: v.resourceImage,
            alt: "",
            "aria-hidden": !0
          }) : null != p ? (0, l.jsx)("img", {
            className: v.resourceImage,
            src: p.src,
            alt: p.alt
          }) : (0, l.jsx)("div", {
            className: v.placeholderImage,
            children: (0, l.jsx)(g.default, {})
          })
        })(), (0, l.jsx)(i.Text, {
          className: v.guildInfoText,
          variant: "text-sm/semibold",
          color: "none",
          children: a
        })]
      })
    }, t)
  },
  p = n.memo(function(e) {
    let {
      guild: t
    } = e, a = (0, I.default)(t.id);
    return 0 === a.length ? null : (0, l.jsx)("div", {
      className: v.sidebarCardWrapper,
      children: (0, l.jsxs)("div", {
        className: v.sidebarCard,
        children: [(0, l.jsx)(i.Heading, {
          className: v.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: S.default.Messages.GUILD_HOME_RESOURCES
        }), (0, l.jsx)("div", {
          className: v.resourceChannelsList,
          children: a.map(e => (0, l.jsx)(N, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  T = n.memo(function(e) {
    let {
      guild: t,
      isNewMember: a
    } = e;
    return (0, l.jsxs)("aside", {
      className: v.sidebar,
      children: [(0, l.jsx)(C, {
        guild: t
      }), a && (0, l.jsx)(p, {
        guild: t
      })]
    })
  });
t.default = T