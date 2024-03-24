"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("77078"),
  u = n("656913"),
  o = n("694187"),
  d = n("151642"),
  c = n("29846"),
  E = n("398604"),
  f = n("189443"),
  h = n("822516"),
  v = n("93550"),
  m = n("953143"),
  N = n("745049"),
  _ = n("75015"),
  I = n("782340"),
  T = n("777181");

function x(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: a,
    setBroadcastToDirectoryChannels: s,
    canEveryoneRoleViewEvent: i
  } = t;
  return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
    title: I.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
    className: T.formItem,
    children: [(0, l.jsx)(r.Tooltip, {
      text: (0, l.jsx)(r.Text, {
        className: T.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: I.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
      }),
      "aria-label": I.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
      shouldShow: !i,
      children: e => (0, l.jsx)("div", {
        ...e,
        children: (0, l.jsx)(r.Checkbox, {
          type: r.Checkbox.Types.INVERTED,
          disabled: !i,
          value: a,
          onChange: (e, t) => s(t),
          children: (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "interactive-active",
            children: I.default.Messages.HUB_EVENTS_SHARE_TITLE
          })
        })
      })
    }), (0, l.jsx)(r.Text, {
      className: T.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: I.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
    })]
  }) : null
}

function C(e) {
  let {
    guildEvent: t,
    guildEventId: s,
    guildId: C,
    editBroadcastInfoData: g,
    error: S,
    validationErrorMessage: p,
    onChange: A,
    canSetFocus: L = !1
  } = e, {
    entityType: y,
    channelId: M,
    description: j,
    name: R,
    image: D,
    scheduledEndTime: G,
    scheduledStartTime: V,
    recurrenceRule: O
  } = t, U = (0, d.useStageBlockedUsersCount)(M), B = null != t && (0, E.isGuildScheduledEventActive)(t), b = a.useMemo(() => {
    let e = (0, h.getScheduleFromEventData)(t);
    return null != e ? e : {
      startDate: i(V)
    }
  }, [t, V]), [P, F] = a.useState(() => (0, h.recurrenceRuleToOption)(i(V), O)), w = a.useRef(null);
  a.useEffect(() => {
    if (L) {
      var e;
      null === (e = w.current) || void 0 === e || e.focus()
    }
  }, [L]);
  let k = e => {
      A({
        image: e
      })
    },
    H = (e, t) => {
      if (null == e || void 0 === t) {
        k(null);
        return
      }(0, r.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("57015").then(n.bind(n, "57015"));
        return n => (0, l.jsx)(a, {
          imgURI: e,
          file: t,
          onCrop: k,
          uploadType: _.UploadTypes.SCHEDULED_EVENT_IMAGE,
          allowSkip: !0,
          ...n
        })
      })
    };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: T.blockedUsersContainer,
      children: null != M && !B && U > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
        channelId: M
      })
    }), (0, l.jsxs)("div", {
      className: T.form,
      children: [(0, l.jsxs)(r.FormItem, {
        title: I.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
        className: T.topicFormItem,
        required: !0,
        children: [(0, l.jsx)(r.TextInput, {
          className: T.textInput,
          onChange: e => {
            A({
              name: e
            })
          },
          placeholder: I.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
          maxLength: N.GUILD_EVENT_MAX_NAME_LENGTH,
          value: R,
          autoComplete: "off",
          inputRef: w
        }), null != S ? (0, l.jsx)(r.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: T.warning,
          children: S.getAnyErrorMessage()
        }) : null]
      }), (0, l.jsx)(m.default, {
        className: T.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? void 0 : t.toISOString(),
            scheduledEndTime: null == n ? void 0 : n.toISOString()
          };
          null != t && null != G && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != P && (l.recurrenceRule = (0, h.recurrenceOptionToRecurrenceRule)(P, t)), A(l)
        },
        onRecurrenceChange: e => {
          let t = b.startDate;
          if (null == t) return;
          let n = (0, h.recurrenceOptionToRecurrenceRule)(e, t);
          A({
            recurrenceRule: n
          }), F(e)
        },
        schedule: b,
        recurrenceRule: O,
        showEndDate: y === N.GuildScheduledEventEntityTypes.EXTERNAL,
        requireEndDate: y === N.GuildScheduledEventEntityTypes.EXTERNAL,
        disableStartDateTime: B,
        guildId: C
      }), null != p ? (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: T.warning,
        children: p
      }) : null, (0, l.jsx)(r.FormItem, {
        title: I.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
        className: T.formItem,
        children: (0, l.jsx)(r.TextArea, {
          className: T.descriptionInput,
          placeholder: I.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
          value: j,
          onChange: e => {
            A({
              description: e
            })
          },
          maxLength: N.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
          autosize: !0
        })
      }), (0, l.jsxs)(r.FormItem, {
        title: I.default.Messages.GUILD_EVENT_IMAGE,
        className: T.formItem,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: T.addImageHint,
          children: I.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
        }), null != D ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.default, {
            className: T.imagePreview,
            iconWrapperClassName: T.imagePreviewInner,
            image: D,
            makeURL: e => {
              if (null == e) return null;
              if (null != C) {
                var n;
                return null !== (n = (0, v.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== n ? n : null
              }
            },
            onChange: H,
            hint: I.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
            showRemoveButton: !1,
            enabled: !0
          }), (0, l.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: () => k(null),
            children: I.default.Messages.GUILD_EVENT_REMOVE_IMAGE
          })]
        }) : (0, l.jsxs)(r.Button, {
          size: r.Button.Sizes.SMALL,
          children: [I.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(o.default, {
            onChange: H
          })]
        })]
      }), (0, l.jsx)(x, {
        editBroadcastInfoData: g
      })]
    })]
  })
}