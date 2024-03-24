"use strict";
n.r(t), n.d(t, {
  UnfeatureItemConfirmationModal: function() {
    return I
  },
  FeatureItemConfirmationModal: function() {
    return f
  },
  FeatureMessageConfirmationModal: function() {
    return E
  },
  FeatureForumPostConfirmationModal: function() {
    return _
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  l = n("866227"),
  a = n.n(l),
  u = n("611221"),
  d = n("77078"),
  r = n("599417"),
  o = n("699473"),
  c = n("713810"),
  h = n("782340"),
  m = n("43229");

function I(e) {
  let {
    featureableItem: t,
    header: n,
    body: l,
    ...a
  } = e, [u, o] = s.useState(null), [m, I] = s.useState(!1);
  return (0, i.jsxs)(d.ConfirmModal, {
    header: n,
    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: d.Button.Colors.RED,
    cancelText: h.default.Messages.CANCEL,
    loading: m,
    onConfirm: async () => {
      try {
        I(!0), await (0, c.unfeatureGuildFeedItem)(t), I(!1)
      } catch (e) {
        throw o(new r.default(e)), I(!1), e
      }
    },
    ...a,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-md/normal",
      children: l
    }), null != u && (0, i.jsx)(d.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: u.message
    })]
  })
}

function f(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: l,
    children: u,
    options: o,
    ...I
  } = e, [f, E] = s.useState(null), [_, F] = s.useState(!1);
  return (0, i.jsxs)(d.ConfirmModal, {
    header: l,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: d.Button.Colors.BRAND,
    loading: _,
    onConfirm: async () => {
      try {
        let e = a().add(n, "second").toDate();
        F(!0), await (0, c.featureGuildFeedItem)(t, e, o)
      } catch (e) {
        throw E(new r.default(e)), e
      } finally {
        F(!1)
      }
    },
    ...I,
    children: [null != f && (0, i.jsx)(d.Text, {
      className: m.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: f.message
    }), u]
  })
}

function E(e) {
  let {
    message: t,
    guildId: n,
    channel: s,
    expiresSeconds: l,
    timePeriod: a,
    options: r,
    ...c
  } = e;
  return (0, i.jsxs)(f, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: l,
    options: r,
    children: [(0, i.jsx)(d.Text, {
      className: m.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: a
      })
    }), (0, i.jsx)("div", {
      className: m.featureModalMessage,
      children: (0, i.jsx)(o.default, {
        channel: s,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function _(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: s,
    timePeriod: l,
    options: a,
    ...r
  } = e;
  return (0, i.jsx)(f, {
    ...r,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: u.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: s,
    options: a,
    children: (0, i.jsx)(d.Text, {
      className: m.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: l
      })
    })
  })
}