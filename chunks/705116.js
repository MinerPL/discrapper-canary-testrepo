"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("646504"),
  i = n("430824"),
  r = n("702346"),
  o = n("981631"),
  u = n("689938"),
  d = n("352141");

function c(e) {
  let t, {
      compact: c,
      isOwner: f,
      channel: E
    } = e,
    _ = () => {
      let e = i.default.getGuild(E.getGuildId());
      null != e && ((0, a.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("43643"), n.e("7654"), n.e("61939")]).then(n.bind(n, "560114"));
        return n => (0, s.jsx)(t, {
          ...n,
          guild: e,
          channel: E,
          source: o.InstantInviteSources.INVITE_SYSTEM_MESSAGE
        })
      }), (0, l.trackGuildInviteNotificationAction)())
    },
    T = (e, t) => (0, s.jsx)(a.Anchor, {
      className: d.inviteLink,
      onClick: _,
      children: e
    }, t);
  return t = c ? (0, s.jsx)("div", {
    className: d.inviteContent,
    children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({
      inviteHook: T
    }) : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({
      inviteHook: T
    })
  }) : (0, s.jsxs)("div", {
    className: d.content,
    children: [(0, s.jsx)("div", {
      className: d.inviteHeader,
      children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS
    }), (0, s.jsx)("div", {
      className: d.inviteContent,
      children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
    }), (0, s.jsx)(a.Button, {
      onClick: _,
      size: a.Button.Sizes.SMALL,
      className: d.inviteButton,
      children: u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
    })]
  }), (0, s.jsx)(r.default, {
    className: c ? d.compact : d.inviteContent,
    iconNode: c ? null : (0, s.jsx)("img", {
      alt: "",
      src: n("826926"),
      width: 40,
      height: 40
    }),
    iconContainerClassName: d.iconContainer,
    compact: c,
    children: t
  })
}