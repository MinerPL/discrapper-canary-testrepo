"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("692547"),
  o = l("215569"),
  i = l("180035"),
  r = l("481060"),
  d = l("749210"),
  u = l("852860"),
  C = l("367907"),
  c = l("314897"),
  m = l("864293"),
  E = l("340149"),
  f = l("964309"),
  _ = l("626135"),
  M = l("910693"),
  h = l("241559"),
  T = l("256003"),
  S = l("981631"),
  x = l("689938"),
  A = l("853384");

function p(e) {
  let {
    guildId: t
  } = e, p = (0, h.useCanAccessBulkBanningFeature)(t), {
    selectedUserIds: L,
    clearSelection: g
  } = (0, T.default)(t), H = L.size > 0, N = async (e, t, l, a) => {
    try {
      let s = await d.default.banMultipleUsers(e, t, l, a);
      (0, r.showToast)((0, r.createToast)(x.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, r.ToastType.SUCCESS)), _.default.track(S.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, C.collectGuildAnalyticsMetadata)(e),
        action_type: M.ModerationActionType.BAN,
        target_user_ids: [...L],
        mod_user_id: c.default.getId(),
        successful_user_ids: s.body.banned_users,
        location
      })
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(x.default.Messages.BAN_MULTIPLE_FAILED_TOAST, r.ToastType.FAILURE))
    }
    g()
  }, I = s.useCallback(() => {
    g()
  }, [g]), R = (0, a.jsxs)("span", {
    className: A.messageContainer,
    children: [(0, a.jsx)(f.default, {
      width: 24,
      height: 24,
      color: (0, i.useToken)(n.default.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, a.jsx)(r.Text, {
      variant: "heading-md/bold",
      color: "text-normal",
      children: x.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
        count: L.size
      })
    }), (0, a.jsx)(r.Button, {
      color: r.Button.Colors.LINK,
      look: r.Button.Looks.LINK,
      onClick: I,
      className: A.clearButton,
      children: x.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
    })]
  }), v = (0, a.jsxs)("span", {
    className: A.buttonContainer,
    children: [(0, a.jsx)(E.default, {
      width: 20,
      height: 20
    }), (0, a.jsx)(r.Text, {
      variant: "text-sm/semibold",
      children: x.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
    })]
  });
  return p ? (0, a.jsx)(o.TransitionGroup, {
    component: "div",
    className: A.saveNoticeContainer,
    children: H && (0, a.jsx)(m.default, {
      children: (0, a.jsx)(u.default, {
        onSave: () => {
          _.default.track(S.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
            ...(0, C.collectGuildAnalyticsMetadata)(t),
            action_type: M.ModerationActionType.BAN,
            target_user_ids: [...L],
            mod_user_id: c.default.getId(),
            location
          }), (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
            return l => (0, a.jsx)(e, {
              ...l,
              guildId: t,
              canBulkBan: p,
              userIds: L,
              onBanMultiple: N
            })
          })
        },
        onSaveText: v,
        onSaveButtonColor: r.ButtonColors.RED,
        message: R
      })
    })
  }) : null
}