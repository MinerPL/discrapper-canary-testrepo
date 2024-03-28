"use strict";
a.r(t), a.d(t, {
  FeatureForumPostConfirmationModal: function() {
    return T
  },
  FeatureItemConfirmationModal: function() {
    return x
  },
  FeatureMessageConfirmationModal: function() {
    return _
  },
  UnfeatureItemConfirmationModal: function() {
    return E
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("913527"),
  o = a.n(s),
  l = a("536402"),
  i = a("481060"),
  d = a("479531"),
  u = a("294218"),
  c = a("276438"),
  f = a("689938"),
  m = a("158982");

function E(e) {
  let {
    featureableItem: t,
    header: a,
    body: s,
    ...o
  } = e, [l, u] = r.useState(null), [m, E] = r.useState(!1);
  return (0, n.jsxs)(i.ConfirmModal, {
    header: a,
    confirmText: f.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: i.Button.Colors.RED,
    cancelText: f.default.Messages.CANCEL,
    loading: m,
    onConfirm: async () => {
      try {
        E(!0), await (0, c.unfeatureGuildFeedItem)(t), E(!1)
      } catch (e) {
        throw u(new d.default(e)), E(!1), e
      }
    },
    ...o,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: s
    }), null != l && (0, n.jsx)(i.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: l.message
    })]
  })
}

function x(e) {
  let {
    featureableItem: t,
    expiresSeconds: a,
    header: s,
    children: l,
    options: u,
    ...E
  } = e, [x, _] = r.useState(null), [T, M] = r.useState(!1);
  return (0, n.jsxs)(i.ConfirmModal, {
    header: s,
    confirmText: f.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: i.Button.Colors.BRAND,
    loading: T,
    onConfirm: async () => {
      try {
        let e = o()().add(a, "second").toDate();
        M(!0), await (0, c.featureGuildFeedItem)(t, e, u)
      } catch (e) {
        throw _(new d.default(e)), e
      } finally {
        M(!1)
      }
    },
    ...E,
    children: [null != x && (0, n.jsx)(i.Text, {
      className: m.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: x.message
    }), l]
  })
}

function _(e) {
  let {
    message: t,
    guildId: a,
    channel: r,
    expiresSeconds: s,
    timePeriod: o,
    options: d,
    ...c
  } = e;
  return (0, n.jsxs)(x, {
    ...c,
    featureableItem: {
      guildId: a,
      entity: t,
      entityType: l.GuildFeedItemTypes.MESSAGE
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: s,
    options: d,
    children: [(0, n.jsx)(i.Text, {
      className: m.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: o
      })
    }), (0, n.jsx)("div", {
      className: m.featureModalMessage,
      children: (0, n.jsx)(u.default, {
        channel: r,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function T(e) {
  let {
    thread: t,
    guildId: a,
    expiresSeconds: r,
    timePeriod: s,
    options: o,
    ...d
  } = e;
  return (0, n.jsx)(x, {
    ...d,
    featureableItem: {
      guildId: a,
      entity: t,
      entityType: l.GuildFeedItemTypes.FORUM_POST
    },
    header: f.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: r,
    options: o,
    children: (0, n.jsx)(i.Text, {
      className: m.featureModalText,
      variant: "text-md/normal",
      children: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: s
      })
    })
  })
}