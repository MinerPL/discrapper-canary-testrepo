l.d(t, {
  Z: function() {
return T;
  }
}), l(47120);
var n = l(735250),
  a = l(470079),
  o = l(692547),
  s = l(215569),
  i = l(180035),
  r = l(481060),
  C = l(749210),
  c = l(852860),
  d = l(367907),
  u = l(314897),
  m = l(626135),
  _ = l(910693),
  E = l(241559),
  h = l(256003),
  M = l(981631),
  x = l(689938),
  b = l(569835);

function T(e) {
  let {
guildId: t
  } = e, T = (0, E.xC)(t), {
selectedUserIds: L,
clearSelection: g
  } = (0, h.Z)(t), I = L.size > 0, p = async (e, t, l, n) => {
try {
  let a = await C.Z.banMultipleUsers(e, t, l, n);
  (0, r.showToast)((0, r.createToast)(x.Z.Messages.BAN_MULTIPLE_SUCCESS_TOAST, r.ToastType.SUCCESS)), m.default.track(M.rMx.BULK_MODERATION_ACTION_COMPLETED, {
    ...(0, d.hH)(e),
    action_type: _.jQ.BAN,
    target_user_ids: [...L],
    mod_user_id: u.default.getId(),
    successful_user_ids: a.body.banned_users,
    location
  });
} catch (e) {
  (0, r.showToast)((0, r.createToast)(x.Z.Messages.BAN_MULTIPLE_FAILED_TOAST, r.ToastType.FAILURE));
}
g();
  }, H = a.useCallback(() => {
g();
  }, [g]), f = (0, n.jsxs)('span', {
className: b.messageContainer,
children: [
  (0, n.jsx)(r.UserIcon, {
    size: 'custom',
    width: 24,
    height: 24,
    color: (0, i.d)(o.Z.unsafe_rawColors.PRIMARY_500).hex()
  }),
  (0, n.jsx)(r.Text, {
    variant: 'heading-md/bold',
    color: 'text-normal',
    children: x.Z.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
      count: L.size
    })
  }),
  (0, n.jsx)(r.Button, {
    color: r.Button.Colors.LINK,
    look: r.Button.Looks.LINK,
    onClick: H,
    className: b.clearButton,
    children: x.Z.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
  })
]
  }), A = (0, n.jsxs)('span', {
className: b.buttonContainer,
children: [
  (0, n.jsx)(r.HammerIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  }),
  (0, n.jsx)(r.Text, {
    variant: 'text-sm/semibold',
    children: x.Z.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
  })
]
  });
  return T ? (0, n.jsx)(s.W, {
component: 'div',
className: b.saveNoticeContainer,
children: I && (0, n.jsx)(r.SlideIn, {
  children: (0, n.jsx)(c.Z, {
    onSave: () => {
      m.default.track(M.rMx.BULK_MODERATION_ACTION_STARTED, {
        ...(0, d.hH)(t),
        action_type: _.jQ.BAN,
        target_user_ids: [...L],
        mod_user_id: u.default.getId(),
        location
      }), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e('43350').then(l.bind(l, 98746));
        return l => (0, n.jsx)(e, {
          ...l,
          guildId: t,
          canBulkBan: T,
          userIds: L,
          onBanMultiple: p
        });
      });
    },
    onSaveText: A,
    onSaveButtonColor: r.ButtonColors.RED,
    message: f
  })
})
  }) : null;
}