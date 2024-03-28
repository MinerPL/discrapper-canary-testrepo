"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("904245"),
  r = n("944486"),
  o = n("82950"),
  u = n("981631"),
  d = n("921944"),
  c = n("689938"),
  f = n("589148");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends s.PureComponent {
  render() {
    let e = "".concat(c.default.Messages.INVITE_NOTICE_MESSAGE, "\n").concat(c.default.Messages.INVITE_NOTICE_MESSAGE_PART_2);
    return (0, a.jsx)(o.default, {
      guild: this.props.guild,
      onDismissed: this.handleClose,
      onClick: this.handleInvite,
      message: e,
      cta: c.default.Messages.INVITE_PEOPLE,
      trackingSource: u.ChannelNoticeCtaSources.INVITE_NOTICE,
      type: u.ChannelNoticeTypes.INVITE,
      image: f,
      imageMarginX: 46
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleInvite", () => {
      let {
        guild: e
      } = this.props;
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("7654")]).then(n.bind(n, "560114"));
        return n => (0, a.jsx)(t, {
          ...n,
          guild: e,
          source: u.InstantInviteSources.INVITE_NOTICE
        })
      })
    }), E(this, "handleClose", () => {
      let e = r.default.getChannelId();
      this.props.markAsDismissed(d.ContentDismissActionType.UNKNOWN), null != e && i.default.sendBotMessage(e, c.default.Messages.HOW_TO_INVITE_OTHERS.format({
        invitePeople: c.default.Messages.INVITE_PEOPLE
      }))
    })
  }
}
t.default = h