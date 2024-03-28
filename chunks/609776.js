"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("913527"),
  i = n.n(l),
  r = n("442837"),
  d = n("481060"),
  u = n("933557"),
  o = n("77810"),
  c = n("854698"),
  E = n("40623"),
  f = n("440371"),
  h = n("810788"),
  _ = n("699516"),
  S = n("594174"),
  T = n("170039"),
  N = n("626135"),
  g = n("570188"),
  v = n("427679"),
  x = n("930180"),
  I = n("320596"),
  C = n("157925"),
  m = n("981631"),
  A = n("765305"),
  p = n("190378"),
  L = n("689938"),
  R = n("352533");

function M(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: s
  } = e;
  return null == s ? null : (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(d.FormItem, {
      title: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
      className: R.channelSelectionFormItem,
      required: !0,
      children: (0, a.jsx)(d.SearchableSelect, {
        value: n.id,
        options: t.map(e => ({
          value: e.id,
          label: (0, u.computeChannelName)(e, S.default, _.default, !0)
        })),
        onChange: e => {
          let n = t.find(t => t.id === e);
          null != n && s(n)
        },
        renderOptionPrefix: () => (0, a.jsx)(T.default, {
          height: 24
        })
      })
    })
  })
}

function j(e) {
  var t, n, l, _, S, T, j, O;
  let {
    channel: D,
    guild: B,
    header: P,
    error: G,
    loading: y,
    onSave: w,
    onEventSave: V,
    onClose: U,
    onSelectChannel: k,
    isEvent: H = !1,
    defaultOptions: b,
    isSlideReady: F = !0
  } = e, Z = s.useMemo(() => v.default.getStageInstanceByChannel(D.id), [D.id]), [z, W] = s.useState(null !== (n = null !== (t = null == b ? void 0 : b.topic) && void 0 !== t ? t : null == Z ? void 0 : Z.topic) && void 0 !== n ? n : ""), [Y, q] = s.useState(null !== (l = null == b ? void 0 : b.description) && void 0 !== l ? l : ""), [K] = s.useState(H), [X, Q] = s.useState(null !== (_ = null == b ? void 0 : b.schedule) && void 0 !== _ ? _ : {
    startDate: (0, c.getInitialEventStartDate)()
  }), [J, $] = s.useState(K && (null == b ? void 0 : b.schedule) != null), ee = (0, g.useCanSendStageStartNotification)(D), et = (0, g.useDefaultSendStartStageNotificationToggle)(D), en = null == Z && ee && !K, [ea, es] = s.useState(en && et), el = (0, r.useStateFromStores)([h.default], () => h.default.hasHotspot(p.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ei = A.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [er] = s.useState(null !== (T = null !== (S = null == b ? void 0 : b.privacyLevel) && void 0 !== S ? S : null == Z ? void 0 : Z.privacy_level) && void 0 !== T ? T : ei), [ed, eu] = s.useState(null == b ? void 0 : b.recurrenceRule), eo = (0, x.useStageBlockedUsersCount)(D.id), [ec, eE] = s.useState(!1), ef = (0, u.default)(D), eh = (0, o.useChannelsUserCanStartStageIn)(B), e_ = null != k, eS = eh.length > 1;
  s.useEffect(() => {
    N.default.track(m.AnalyticEvents.START_STAGE_OPENED, {
      stage_instance_id: null == Z ? void 0 : Z.id,
      can_start_public_stage: !1,
      guild_id: D.guild_id
    })
  }, []);
  let eT = e => {
    if (e.preventDefault(), er === A.GuildScheduledEventPrivacyLevel.PUBLIC && z.length < 20 && !ec) {
      eE(!0);
      return
    }
    let t = {
      topic: z,
      privacyLevel: er,
      sendStartNotification: ea
    };
    if (K) {
      if (!J) return;
      null == V || V({
        ...t,
        schedule: X,
        description: Y,
        entityType: A.GuildScheduledEventEntityTypes.STAGE_INSTANCE
      });
      return
    }
    null == w || w(t)
  };
  let {
    color: eN,
    text: eg
  } = (j = Z, O = er, K ? {
    color: d.Button.Colors.BRAND,
    text: L.default.Messages.SCHEDULE_EVENT
  } : O === A.GuildScheduledEventPrivacyLevel.PUBLIC && (null == j ? void 0 : j.privacy_level) !== A.GuildScheduledEventPrivacyLevel.PUBLIC ? {
    color: d.Button.Colors.BRAND,
    text: L.default.Messages.CONTINUE
  } : null == j ? {
    color: d.Button.Colors.GREEN,
    text: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
  } : {
    color: d.Button.Colors.BRAND,
    text: L.default.Messages.SAVE_CHANGES
  }), ev = s.useRef(null);
  s.useEffect(() => {
    var e;
    F && (null === (e = ev.current) || void 0 === e || e.focus())
  }, [F]);
  let ex = J && null != X.startDate && X.startDate >= i()();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.ModalContent, {
      className: R.modalContent,
      children: [P, (0, a.jsx)("div", {
        className: R.blockedUsersContainer,
        children: null == Z && eo > 0 && (0, a.jsx)(I.BlockedUsersNotice, {
          channelId: D.id
        })
      }), (0, a.jsxs)("form", {
        onSubmit: eT,
        className: R.form,
        children: [(0, a.jsxs)(d.FormItem, {
          title: H ? L.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
          className: R.topicFormItem,
          required: !0,
          children: [(0, a.jsx)(d.TextInput, {
            className: R.textInput,
            onChange: e => W(e),
            placeholder: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
            maxLength: C.MAX_STAGE_TOPIC_LENGTH,
            value: z,
            autoComplete: "off",
            inputRef: ev
          }), ec && (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-warning",
            className: R.warning,
            children: L.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
          }), null != G ? (0, a.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: R.warning,
            children: G.getAnyErrorMessage()
          }) : null]
        }), e_ && eS ? (0, a.jsx)(M, {
          stageChannelsInGuild: eh,
          channel: D,
          onSelectChannel: k
        }) : null, K && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.default, {
            className: R.formItem,
            onScheduleChange: Q,
            onRecurrenceChange: e => {
              let t = X.startDate;
              if (null != t) eu((0, c.recurrenceOptionToRecurrenceRule)(e, t))
            },
            schedule: X,
            recurrenceRule: ed,
            timeSelected: J,
            onTimeChange: $
          }), null != X.startDate && X.startDate < i()() ? (0, a.jsx)(d.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: R.warning,
            children: L.default.Messages.GUILD_EVENT_PAST_START_DATE
          }) : null]
        }), H && (0, a.jsx)(d.FormItem, {
          title: L.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
          className: R.formItem,
          children: (0, a.jsx)(d.TextArea, {
            placeholder: L.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
            value: Y,
            onChange: e => q(e),
            maxLength: A.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
          })
        }), en ? (0, a.jsx)(E.default, {
          sendStartNotification: ea,
          setSendStartNotification: es,
          showNotificationNewBadge: el
        }) : null, e_ && !eS ? (0, a.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: R.channelSelection,
          children: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
            stageName: ef,
            stageHook: (e, t) => (0, a.jsx)("span", {
              className: R.channelName,
              children: D.name
            }, t)
          })
        }) : null]
      })]
    }), (0, a.jsxs)(d.ModalFooter, {
      children: [(0, a.jsx)(d.Button, {
        color: eN,
        onClick: eT,
        disabled: "" === z || null == er || H && !ex,
        submitting: y,
        children: eg
      }), (0, a.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        className: R.cancelButton,
        onClick: U,
        children: L.default.Messages.CANCEL
      })]
    })]
  })
}