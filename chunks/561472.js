"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("998698"),
  r = n("933557"),
  o = n("703558"),
  u = n("731290"),
  d = n("607744"),
  c = n("819640"),
  f = n("496675"),
  h = n("699516"),
  m = n("594174"),
  p = n("585483"),
  E = n("127654"),
  C = n("205822"),
  g = n("731994"),
  S = n("981631"),
  _ = n("689938");
t.default = function(e) {
  let {
    className: t,
    style: n,
    channel: T,
    draftType: I
  } = e, [A, v] = l.useState(!0), N = (0, s.useStateFromStores)([c.default], () => c.default.hasLayers()), x = (0, s.useStateFromStores)([f.default], () => null != T && f.default.can(S.Permissions.ATTACH_FILES, T), [T]), M = null != (0, s.useStateFromStores)([i.default], () => i.default.getActiveCommand(T.id)), R = T.getGuildId(), L = I === o.DraftType.FirstThreadMessage, y = (0, s.useStateFromStores)([m.default], () => {
    var e;
    return !0 == !(null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
  }), O = (0, s.useStateFromStores)([u.default], () => u.default.didAgree(R)) && !y, j = l.useMemo(() => !N && (T.isPrivate() && !T.isManaged() || null != R && (!T.isNSFW() || O) && x && d.default.canChatInGuild(R)), [x, O, T, R, N]), P = L ? S.ChannelTypesSets.GUILD_THREADS_ONLY.has(T.type) ? _.default.Messages.UPLOAD_TO_NEW_POST : _.default.Messages.UPLOAD_TO_NEW_THREAD : A ? _.default.Messages.UPLOAD_TO.format({
    destination: (0, r.computeChannelName)(T, m.default, h.default, !0)
  }) : _.default.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
  return M || !j ? null : (0, a.jsx)(C.default, {
    className: t,
    style: n,
    title: P,
    description: L ? _.default.Messages.UPLOAD_AREA_NEW_THREAD_HELP : _.default.Messages.UPLOAD_AREA_HELP,
    icons: g.DEFAULT_FILE_UPLOAD_ICONS,
    onDrop: e => {
      if (M) return !1;
      j && null != T && ((0, E.promptToUpload)(e, T, I, {
        requireConfirm: A,
        showLargeMessageDialog: !1
      }), p.ComponentDispatch.dispatchToLastSubscribed(S.ComponentActions.TEXTAREA_FOCUS))
    },
    onDragClear: () => v(!0),
    onDragOver: e => {
      if (M) return !1;
      !L && e.shiftKey === A && v(!e.shiftKey)
    }
  })
}