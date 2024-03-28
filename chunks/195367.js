"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("913527"),
  r = l.n(s),
  i = l("481060"),
  d = l("516129"),
  u = l("813197"),
  o = l("930180"),
  c = l("320596"),
  E = l("924301"),
  _ = l("236373"),
  f = l("854698"),
  T = l("405613"),
  h = l("440371"),
  I = l("765305"),
  N = l("486324"),
  m = l("689938"),
  x = l("627505");

function v(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: l,
    broadcastToDirectoryChannels: n,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: r
  } = t;
  return l.can_broadcast ? (0, a.jsxs)(i.FormItem, {
    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: x.formItem,
    children: [(0, a.jsx)(i.Tooltip, {
      text: (0, a.jsx)(i.Text, {
        className: x.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
      shouldShow: !r,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(i.Checkbox, {
          type: i.Checkbox.Types.INVERTED,
          disabled: !r,
          value: n,
          onChange: (e, t) => s(t),
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, a.jsx)(i.Text, {
      className: x.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function g(e) {
  let {
    guildEvent: t,
    guildEventId: s,
    guildId: g,
    editBroadcastInfoData: S,
    error: C,
    validationErrorMessage: A,
    onChange: L,
    canSetFocus: p = !1
  } = e, {
    entityType: M,
    channelId: D,
    description: R,
    name: j,
    image: y,
    scheduledEndTime: G,
    scheduledStartTime: V,
    recurrenceRule: U
  } = t, O = (0, o.useStageBlockedUsersCount)(D), B = null != t && (0, E.isGuildScheduledEventActive)(t), b = n.useMemo(() => {
    let e = (0, f.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: r()(V)
    }
  }, [t, V]), [F, P] = n.useState(() => (0, f.recurrenceRuleToOption)(r()(V), U)), k = n.useRef(null);
  n.useEffect(() => {
    if (p) {
      var e;
      null === (e = k.current) || void 0 === e || e.focus()
    }
  }, [p]);
  let H = e => {
      L({
        image: e
      })
    },
    w = (e, t) => {
      if (null == e || void 0 === t) {
        H(null);
        return
      }(0, i.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([l.e("99387"), l.e("48017")]).then(l.bind(l, "850085"));
        return l => (0, a.jsx)(n, {
          imgURI: e,
          file: t,
          onCrop: H,
          uploadType: N.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...l
        })
      })
    };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: x.blockedUsersContainer,
      children: null != D && !B && O > 0 && (0, a.jsx)(c.BlockedUsersNotice, {
        channelId: D
      })
    }), (0, a.jsxs)("div", {
      className: x.form,
      children: [(0, a.jsxs)(i.FormItem, {
        title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: x.topicFormItem,
        required: !0,
        children: [(0, a.jsx)(i.TextInput, {
          className: x.textInput,
          onChange: e => {
            L({
              name: e
            })
          },
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: I.GUILD_EVENT_MAX_NAME_LENGTH,
          value: j,
          autoComplete: "off",
          inputRef: k
        }), null != C ? (0, a.jsx)(i.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: x.warning,
          children: C.getAnyErrorMessage()
        }) : null]
      }), (0, a.jsx)(h.default, {
        className: x.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: l
          } = e, a = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == l ? void 0 : l.toISOString()
          };
          null != t && null != G && (null == l ? void 0 : l.isBefore(t)) && (a.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != F && (a.recurrenceRule = (0, f.recurrenceOptionToRecurrenceRule)(F, t)), L(a)
        },
        onRecurrenceChange: e => {
          let t = b.startDate;
          if (null != t) L({
            recurrenceRule: (0, f.recurrenceOptionToRecurrenceRule)(e, t)
          }), P(e)
        },
        schedule: b,
        recurrenceRule: U,
        showEndDate: M === I.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: M === I.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: B,
        guildId: g
      }), null != A ? (0, a.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: x.warning,
        children: A
      }) : null, (0, a.jsx)(i.FormItem, {
        title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: x.formItem,
        children: (0, a.jsx)(i.TextArea, {
          className: x.__invalid_descriptionInput,
          placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: R,
          onChange: e => {
            L({
              description: e
            })
          },
          maxLength: I.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, a.jsxs)(i.FormItem, {
        title: m.default.Messages.GUILD_EVENT_IMAGE,
        className: x.formItem,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: x.addImageHint,
          children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != y ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.default, {
            className: x.imagePreview,
            iconWrapperClassName: x.imagePreviewInner,
            image: y,
            makeURL: e => {
              if (null == e) return null;
              if (null != g) {
                var l;
                return null !== (l = (0, T.default)((0, _.convertToFakeGuildEvent)(t, g, s))) && void 0 !== l ? l : null
              }
            },
            onChange: w,
            hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, a.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: () => H(null),
            children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, a.jsxs)(i.Button, {
          size: i.Button.Sizes.SMALL,
          children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, a.jsx)(u.default, {
            onChange: w
          })]
        })]
      }), (0, a.jsx)(v, {
        editBroadcastInfoData: S
      })]
    })]
  })
}