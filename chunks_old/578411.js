"use strict";
a.r(t), a.d(t, {
  GuildLeaveConfirmModalContents: function() {
    return h
  }
});
var n = a("37983");
a("884691");
var l = a("414456"),
  s = a.n(l),
  u = a("151426"),
  i = a("77078"),
  r = a("10641"),
  d = a("592407"),
  o = a("267567"),
  c = a("393414"),
  f = a("49111"),
  E = a("782340"),
  C = a("967659");
let h = e => {
  let {
    guild: t
  } = e, l = t.id, h = async () => {
    let e = o.default.isLurking(l);
    await d.default.leaveGuild(l), e ? (0, c.transitionTo)(f.Routes.GUILD_DISCOVERY) : !(0, r.isDismissibleContentDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("953750").then(a.bind(a, "953750"));
      return a => (0, n.jsx)(e, {
        ...a,
        guildId: l,
        guildName: t.name
      })
    })
  };
  return (0, n.jsx)(i.ConfirmModal, {
    className: s(C.confirmModal),
    bodyClassName: s(C.confirmModalBody),
    header: E.default.Messages.LEAVE_SERVER_TITLE.format({
      name: t.name
    }),
    confirmText: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB : E.default.Messages.LEAVE_SERVER,
    cancelText: E.default.Messages.CANCEL,
    onConfirm: h,
    ...e,
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB_BODY.format({
        name: t.name
      }) : E.default.Messages.LEAVE_SERVER_BODY.format({
        name: t.name
      })
    })
  })
}