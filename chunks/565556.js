"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("669491"),
  o = l("266491"),
  i = l("708253"),
  r = l("77078"),
  d = l("851387"),
  u = l("45299"),
  C = l("716241"),
  c = l("271938"),
  m = l("965397"),
  E = l("530346"),
  f = l("781896"),
  M = l("599110"),
  h = l("130037"),
  _ = l("466818"),
  T = l("624663"),
  S = l("49111"),
  x = l("782340"),
  A = l("608223");

function p(e) {
  let {
    guildId: t
  } = e, p = (0, _.useCanAccessBulkBanningFeature)(t), {
    selectedUserIds: L,
    clearSelection: H
  } = (0, T.default)(t), N = L.size > 0, g = async (e, t, l, a) => {
    try {
      let s = await d.default.banMultipleUsers(e, t, l, a);
      (0, r.showToast)((0, r.createToast)(x.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, r.ToastType.SUCCESS)), M.default.track(S.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
        ...(0, C.collectGuildAnalyticsMetadata)(e),
        action_type: h.ModerationActionType.BAN,
        target_user_ids: [...L],
        mod_user_id: c.default.getId(),
        successful_user_ids: s.body.banned_users,
        location
      })
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(x.default.Messages.BAN_MULTIPLE_FAILED_TOAST, r.ToastType.FAILURE))
    }
    H()
  }, I = s.useCallback(() => {
    H()
  }, [H]), R = (0, a.jsxs)("span", {
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
  }), j = (0, a.jsxs)("span", {
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
    children: N && (0, a.jsx)(m.default, {
      children: (0, a.jsx)(u.default, {
        onSave: () => {
          M.default.track(S.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
            ...(0, C.collectGuildAnalyticsMetadata)(t),
            action_type: h.ModerationActionType.BAN,
            target_user_ids: [...L],
            mod_user_id: c.default.getId(),
            location
          }), (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("743506").then(l.bind(l, "743506"));
            return l => (0, a.jsx)(e, {
              ...l,
              guildId: t,
              canBulkBan: p,
              userIds: L,
              onBanMultiple: g
            })
          })
        },
        onSaveText: j,
        onSaveButtonColor: r.ButtonColors.RED,
        message: R
      })
    })
  }) : null
}