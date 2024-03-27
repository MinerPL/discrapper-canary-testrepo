"use strict";
n.r(t), n.d(t, {
  UnfeatureItemConfirmationModal: function() {
    return f
  },
  FeatureItemConfirmationModal: function() {
    return I
  },
  FeatureMessageConfirmationModal: function() {
    return _
  },
  FeatureForumPostConfirmationModal: function() {
    return m
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  l = n("866227"),
  a = n.n(l),
  u = n("611221"),
  r = n("77078"),
  d = n("599417"),
  o = n("699473"),
  c = n("713810"),
  h = n("782340"),
  E = n("43229");

function f(e) {
  let {
    featureableItem: t,
    header: n,
    body: l,
    ...a
  } = e, [u, o] = s.useState(null), [E, f] = s.useState(!1);
  return (0, i.jsxs)(r.ConfirmModal, {
    header: n,
    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: r.Button.Colors.RED,
    cancelText: h.default.Messages.CANCEL,
    loading: E,
    onConfirm: async () => {
      try {
        f(!0), await (0, c.unfeatureGuildFeedItem)(t), f(!1)
      } catch (e) {
        throw o(new d.default(e)), f(!1), e
      }
    },
    ...a,
    children: [(0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      children: l
    }), null != u && (0, i.jsx)(r.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: u.message
    })]
  })
}

function I(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: l,
    children: u,
    options: o,
    ...f
  } = e, [I, _] = s.useState(null), [m, T] = s.useState(!1);
  return (0, i.jsxs)(r.ConfirmModal, {
    header: l,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: r.Button.Colors.BRAND,
    loading: m,
    onConfirm: async () => {
      try {
        let e = a().add(n, "second").toDate();
        T(!0), await (0, c.featureGuildFeedItem)(t, e, o)
      } catch (e) {
        throw _(new d.default(e)), e
      } finally {
        T(!1)
      }
    },
    ...f,
    children: [null != I && (0, i.jsx)(r.Text, {
      className: E.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: I.message
    }), u]
  })
}

function _(e) {
  let {
    message: t,
    guildId: n,
    channel: s,
    expiresSeconds: l,
    timePeriod: a,
    options: d,
    ...c
  } = e;
  return (0, i.jsxs)(I, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: l,
    options: d,
    children: [(0, i.jsx)(r.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: a
      })
    }), (0, i.jsx)("div", {
      className: E.featureModalMessage,
      children: (0, i.jsx)(o.default, {
        channel: s,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function m(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: s,
    timePeriod: l,
    options: a,
    ...d
  } = e;
  return (0, i.jsx)(I, {
    ...d,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: s,
    options: a,
    children: (0, i.jsx)(r.Text, {
      className: E.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: l
      })
    })
  })
}