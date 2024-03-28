"use strict";
a.r(t), a.d(t, {
  GuildLeaveConfirmModalContents: function() {
    return h
  }
});
var l = a("735250");
a("470079");
var n = a("803997"),
  s = a.n(n),
  u = a("524437"),
  i = a("481060"),
  r = a("605236"),
  d = a("434404"),
  o = a("41776"),
  c = a("703656"),
  f = a("981631"),
  E = a("689938"),
  C = a("805993");
let h = e => {
  let {
    guild: t
  } = e, n = t.id, h = async () => {
    let e = o.default.isLurking(n);
    await d.default.leaveGuild(n), e ? (0, c.transitionTo)(f.Routes.GUILD_DISCOVERY) : !(0, r.isDismissibleContentDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("41953")]).then(a.bind(a, "131102"));
      return a => (0, l.jsx)(e, {
        ...a,
        guildId: n,
        guildName: t.name
      })
    })
  };
  return (0, l.jsx)(i.ConfirmModal, {
    className: s()(C.__invalid_confirmModal),
    bodyClassName: s()(C.__invalid_confirmModalBody),
    header: E.default.Messages.LEAVE_SERVER_TITLE.format({
      name: t.name
    }),
    confirmText: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB : E.default.Messages.LEAVE_SERVER,
    cancelText: E.default.Messages.CANCEL,
    onConfirm: h,
    ...e,
    children: (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      children: t.hasFeature(f.GuildFeatures.HUB) ? E.default.Messages.LEAVE_HUB_BODY.format({
        name: t.name
      }) : E.default.Messages.LEAVE_SERVER_BODY.format({
        name: t.name
      })
    })
  })
}