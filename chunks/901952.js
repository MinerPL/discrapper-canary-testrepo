"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("411104"), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("493683"),
  s = n("904245"),
  o = n("906732"),
  l = n("541716"),
  u = n("752305"),
  d = n("893718"),
  _ = n("957730"),
  c = n("131704"),
  E = n("592125"),
  I = n("5192"),
  T = n("838440"),
  f = n("785717"),
  S = n("981631"),
  h = n("689938"),
  A = n("112147");
let m = (0, c.createChannelRecord)({
    id: "1",
    type: S.ChannelTypes.DM
  }),
  N = async e => {
    let {
      userId: t,
      content: n,
      location: i
    } = e, {
      valid: r,
      failureReason: o
    } = await (0, T.applyChatRestrictions)({
      type: l.ChatInputTypes.NORMAL,
      content: n,
      channel: null
    });
    if (!r) throw Error(o);
    let u = await a.default.openPrivateChannel(t, !1, !1, i),
      d = E.default.getChannel(u);
    if (null == d) throw Error("Failed to open private channel");
    let c = _.default.parse(d, n);
    return s.default.sendMessage(d.id, c)
  };

function p(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    onClose: s
  } = e, {
    newestAnalyticsLocation: _
  } = (0, o.default)(), {
    trackUserProfileAction: c
  } = (0, f.useUserProfileAnalyticsContext)(), [E, T] = r.useState(""), [S, p] = r.useState((0, u.toRichValue)(E)), O = r.useRef(!1);
  return (0, i.jsx)(d.default, {
    innerClassName: A.inner,
    editorClassName: A.editor,
    type: l.ChatInputTypes.USER_PROFILE,
    placeholder: h.default.Messages.QUICK_DM_USER.format({
      name: I.default.getName(n, a, t)
    }),
    channel: m,
    textValue: E,
    richValue: S,
    onChange: (e, t, n) => {
      t !== E && (T(t), p(n))
    },
    focused: O.current,
    onFocus: () => {
      O.current = !0
    },
    onBlur: () => {
      O.current = !1
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return c({
          action: "SEND_DIRECT_MESSAGE"
        }), await N({
          userId: t.id,
          content: n.trim(),
          location: _
        }), null == s || s(), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch {
        return {
          shouldClear: !1,
          shouldRefocus: !1
        }
      }
    }
  })
}