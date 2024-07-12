t.d(n, {
  Z: function() {
return M;
  }
}), t(47120);
var a = t(735250),
  l = t(470079),
  s = t(913527),
  i = t.n(s),
  r = t(442837),
  o = t(481060),
  c = t(933557),
  d = t(77810),
  u = t(854698),
  _ = t(40623),
  E = t(440371),
  h = t(810788),
  T = t(699516),
  m = t(594174),
  I = t(626135),
  N = t(570188),
  x = t(427679),
  f = t(930180),
  g = t(582019),
  S = t(157925),
  C = t(981631),
  v = t(765305),
  A = t(190378),
  p = t(689938),
  j = t(387617);

function R(e) {
  let {
stageChannelsInGuild: n,
channel: t,
onSelectChannel: l
  } = e;
  return null == l ? null : (0, a.jsx)(a.Fragment, {
children: (0, a.jsx)(o.FormItem, {
  title: p.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + ' asdf',
  className: j.channelSelectionFormItem,
  required: !0,
  children: (0, a.jsx)(o.SearchableSelect, {
    value: t.id,
    options: n.map(e => ({
      value: e.id,
      label: (0, c.F6)(e, m.default, T.Z, !0)
    })),
    onChange: e => {
      let t = n.find(n => n.id === e);
      null != t && l(t);
    },
    renderOptionPrefix: () => (0, a.jsx)(o.StageIcon, {
      size: 'custom',
      color: 'currentColor',
      height: 24
    })
  })
})
  });
}

function M(e) {
  var n, t, s, T, m, M, L, Z;
  let {
channel: O,
guild: D,
header: b,
error: B,
loading: P,
onSave: k,
onEventSave: G,
onClose: U,
onSelectChannel: y,
isEvent: w = !1,
defaultOptions: V,
isSlideReady: F = !0
  } = e, H = l.useMemo(() => x.Z.getStageInstanceByChannel(O.id), [O.id]), [z, W] = l.useState(null !== (t = null !== (n = null == V ? void 0 : V.topic) && void 0 !== n ? n : null == H ? void 0 : H.topic) && void 0 !== t ? t : ''), [K, q] = l.useState(null !== (s = null == V ? void 0 : V.description) && void 0 !== s ? s : ''), [Y] = l.useState(w), [J, Q] = l.useState(null !== (T = null == V ? void 0 : V.schedule) && void 0 !== T ? T : {
startDate: (0, u.ib)()
  }), [X, $] = l.useState(Y && (null == V ? void 0 : V.schedule) != null), ee = (0, N.J)(O), en = (0, N.U)(O), et = null == H && ee && !Y, [ea, el] = l.useState(et && en), es = (0, r.e7)([h.Z], () => h.Z.hasHotspot(A.v.LIVE_STAGE_NOTIFICATION_BADGE)), ei = v.j8.GUILD_ONLY, [er] = l.useState(null !== (M = null !== (m = null == V ? void 0 : V.privacyLevel) && void 0 !== m ? m : null == H ? void 0 : H.privacy_level) && void 0 !== M ? M : ei), [eo, ec] = l.useState(null == V ? void 0 : V.recurrenceRule), ed = (0, f._d)(O.id), [eu, e_] = l.useState(!1), eE = (0, c.ZP)(O), eh = (0, d.q)(D), eT = null != y, em = eh.length > 1;
  l.useEffect(() => {
I.default.track(C.rMx.START_STAGE_OPENED, {
  stage_instance_id: null == H ? void 0 : H.id,
  can_start_public_stage: !1,
  guild_id: O.guild_id
});
  }, []);
  let eI = e => {
if (e.preventDefault(), er === v.j8.PUBLIC && z.length < 20 && !eu) {
  e_(!0);
  return;
}
let n = {
  topic: z,
  privacyLevel: er,
  sendStartNotification: ea
};
if (Y) {
  if (!X)
    return;
  null == G || G({
    ...n,
    schedule: J,
    description: K,
    entityType: v.WX.STAGE_INSTANCE
  });
  return;
}
null == k || k(n);
  };
  let {
color: eN,
text: ex
  } = (L = H, Z = er, Y ? {
color: o.Button.Colors.BRAND,
text: p.Z.Messages.SCHEDULE_EVENT
  } : Z === v.j8.PUBLIC && (null == L ? void 0 : L.privacy_level) !== v.j8.PUBLIC ? {
color: o.Button.Colors.BRAND,
text: p.Z.Messages.CONTINUE
  } : null == L ? {
color: o.Button.Colors.GREEN,
text: p.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
color: o.Button.Colors.BRAND,
text: p.Z.Messages.SAVE_CHANGES
  }), ef = l.useRef(null);
  l.useEffect(() => {
var e;
F && (null === (e = ef.current) || void 0 === e || e.focus());
  }, [F]);
  let eg = X && null != J.startDate && J.startDate >= i()();
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)(o.ModalContent, {
    className: j.modalContent,
    children: [
      b,
      (0, a.jsx)('div', {
        className: j.blockedUsersContainer,
        children: null == H && ed > 0 && (0, a.jsx)(g.mv, {
          channelId: O.id
        })
      }),
      (0, a.jsxs)('form', {
        onSubmit: eI,
        className: j.form,
        children: [
          (0, a.jsxs)(o.FormItem, {
            title: w ? p.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : p.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
            className: j.topicFormItem,
            required: !0,
            children: [
              (0, a.jsx)(o.TextInput, {
                className: j.textInput,
                onChange: e => W(e),
                placeholder: p.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                maxLength: S.xA,
                value: z,
                autoComplete: 'off',
                inputRef: ef
              }),
              eu && (0, a.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-warning',
                className: j.warning,
                children: p.Z.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
              }),
              null != B ? (0, a.jsx)(o.Text, {
                color: 'text-danger',
                variant: 'text-xs/normal',
                className: j.warning,
                children: B.getAnyErrorMessage()
              }) : null
            ]
          }),
          eT && em ? (0, a.jsx)(R, {
            stageChannelsInGuild: eh,
            channel: O,
            onSelectChannel: y
          }) : null,
          Y && (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(E.Z, {
                className: j.formItem,
                onScheduleChange: Q,
                onRecurrenceChange: e => {
                  let n = J.startDate;
                  if (null != n)
                    ec((0, u.mF)(e, n));
                },
                schedule: J,
                recurrenceRule: eo,
                timeSelected: X,
                onTimeChange: $
              }),
              null != J.startDate && J.startDate < i()() ? (0, a.jsx)(o.Text, {
                color: 'text-danger',
                variant: 'text-xs/normal',
                className: j.warning,
                children: p.Z.Messages.GUILD_EVENT_PAST_START_DATE
              }) : null
            ]
          }),
          w && (0, a.jsx)(o.FormItem, {
            title: p.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
            className: j.formItem,
            children: (0, a.jsx)(o.TextArea, {
              placeholder: p.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
              value: K,
              onChange: e => q(e),
              maxLength: v.wm
            })
          }),
          et ? (0, a.jsx)(_.Z, {
            sendStartNotification: ea,
            setSendStartNotification: el,
            showNotificationNewBadge: es
          }) : null,
          eT && !em ? (0, a.jsx)(o.Text, {
            color: 'header-secondary',
            variant: 'text-xs/normal',
            className: j.channelSelection,
            children: p.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
              stageName: eE,
              stageHook: (e, n) => (0, a.jsx)('span', {
                className: j.channelName,
                children: O.name
              }, n)
            })
          }) : null
        ]
      })
    ]
  }),
  (0, a.jsxs)(o.ModalFooter, {
    children: [
      (0, a.jsx)(o.Button, {
        color: eN,
        onClick: eI,
        disabled: '' === z || null == er || w && !eg,
        submitting: P,
        children: ex
      }),
      (0, a.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        className: j.cancelButton,
        onClick: U,
        children: p.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}