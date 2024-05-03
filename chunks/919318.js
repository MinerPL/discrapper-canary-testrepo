"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  d = a("442837"),
  r = a("481060"),
  u = a("904245"),
  o = a("368844"),
  c = a("73315"),
  f = a("454585"),
  m = a("118139"),
  h = a("169525"),
  E = a("524444"),
  g = a("703656"),
  _ = a("6025"),
  I = a("695346"),
  x = a("592125"),
  S = a("984933"),
  v = a("375954"),
  C = a("496675"),
  N = a("451478"),
  p = a("768581"),
  T = a("526120"),
  A = a("689981"),
  j = a("825334"),
  M = a("981631"),
  D = a("689938"),
  F = a("156810"),
  L = a("990291"),
  R = a("931057");

function b(e) {
  let t, a, {
      firstMedia: n,
      channelId: s
    } = e,
    r = (0, d.useStateFromStores)([x.default], () => x.default.getChannel(s)),
    [u, o] = (0, h.useShouldObscure)({
      media: n,
      channel: r
    }),
    f = (0, h.getObscuredAlt)(o),
    g = (0, d.useStateFromStores)([N.default], () => N.default.isFocused()),
    _ = (0, m.isAnimatedImageUrl)(n.src),
    S = I.GifAutoPlay.useSetting(),
    {
      src: v,
      width: C,
      height: p,
      alt: T
    } = n;
  return p > C ? a = 72 : t = 72, (0, l.jsxs)("div", {
    className: F.media,
    children: [(0, E.renderImageComponent)({
      src: v,
      maxHeight: t,
      maxWidth: a,
      width: C,
      height: p,
      alt: null != T && u && null != f ? f : T,
      autoPlay: S,
      animated: _ && !u && g,
      containerClassName: F.thumbnailContainer,
      imageClassName: i()({
        [F.obscured]: u
      })
    }), u && (0, l.jsx)(c.default, {
      obscureReason: o,
      iconClassname: F.obscuredTag
    })]
  })
}

function G(e) {
  let {
    resource: t
  } = e, a = (0, d.useStateFromStores)([x.default], () => x.default.getChannel(t.channelId)), s = (0, d.useStateFromStores)([v.default], () => v.default.getMessages(t.channelId)), c = (0, d.useStateFromStores)([C.default], () => C.default.can(M.Permissions.VIEW_CHANNEL, a)), m = s.first(), h = (0, A.default)(m), E = (0, o.useForumPostMediaProperties)(m, !1), g = (null == E ? void 0 : E.length) > 0 ? E[0] : null, I = null != a && null == s.first() && !s.loadingMore && !s.ready && !s.hasFetched && c;
  n.useEffect(() => {
    I && u.default.fetchMessages({
      channelId: t.channelId,
      after: t.channelId,
      limit: 5
    })
  }, [t.channelId, I]);
  if (null == a || null == a.guild_id) return null;
  let S = p.default.getResourceChannelIconURL({
      channelId: a.id,
      icon: t.icon
    }),
    N = null == t.description || 0 === t.description.length;
  return (0, l.jsxs)(r.Clickable, {
    className: F.row,
    onClick: e => {
      null != a && (e.shiftKey ? (0, T.selectHomeResourceChannel)(a.guild_id, a.id) : _.default.openResourceChannelAsSidebar({
        guildId: a.guild_id,
        channelId: a.id
      }))
    },
    children: [(0, l.jsxs)("div", {
      className: F.content,
      children: [(0, l.jsx)(r.Text, {
        className: F.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: t.title
      }), N && null != h && (0, l.jsx)(r.Text, {
        className: F.messageContent,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: f.default.parse(h, !0, {
          guildId: a.guild_id,
          channelId: a.id
        })
      }), !N && (0, l.jsx)(r.Text, {
        className: i()(F.messageContent, L.markup),
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: f.default.parse(t.description, !0, {
          guildId: a.guild_id,
          channelId: a.id
        })
      })]
    }), null != t.icon && null != S ? (0, l.jsx)("div", {
      className: F.media,
      children: (0, l.jsx)("img", {
        src: S,
        className: F.__invalid_thumbnail,
        width: 72,
        height: 72,
        alt: "",
        "aria-hidden": !0
      })
    }) : null, null == S && null != g ? (0, l.jsx)(b, {
      firstMedia: g,
      channelId: t.channelId
    }) : null]
  })
}

function O(e) {
  let {
    guild: t,
    isNewMember: a
  } = e, n = (0, j.default)(t.id);
  if (0 === n.length) return a ? null : (0, l.jsxs)("div", {
    className: F.emptyContainer,
    children: [(0, l.jsx)(r.Heading, {
      variant: "heading-xl/bold",
      color: "header-primary",
      children: D.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
    }), (0, l.jsx)("img", {
      className: F.emptyStateImage,
      src: R,
      alt: ""
    }), (0, l.jsx)(r.Button, {
      className: F.emptyStateButton,
      onClick: () => {
        let e = S.default.getDefaultChannel(t.id);
        null != e && (0, g.transitionTo)(M.Routes.CHANNEL(t.id, e.id))
      },
      fullWidth: !0,
      children: D.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
    })]
  });
  return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: D.default.Messages.GUILD_HOME_RESOURCES
    }), n.map(e => (0, l.jsx)(G, {
      resource: e
    }, e.channelId))]
  })
}