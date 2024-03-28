"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  l = n("613828"),
  s = n("749210"),
  o = n("287734"),
  r = n("765717"),
  d = n("893607"),
  u = n("703656"),
  c = n("981631");
class f extends a.Component {
  componentDidUpdate(e) {
    let {
      location: t
    } = this.props;
    t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
  }
  checkGuildAndChannel() {
    let {
      match: e
    } = this.props;
    if (null == e) return;
    let {
      guildId: t,
      channelId: n,
      messageId: i
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        messageId: i
      } = e.params;
      return {
        guildId: null != t && "" !== t ? t : c.ME,
        channelId: n,
        messageId: i
      }
    }(e);
    (0, d.isValidGuildId)(t) && (0, d.isValidChannelId)(n) ? (s.default.selectGuild(t), o.default.selectChannel({
      guildId: t,
      channelId: n,
      messageId: i
    })) : (0, u.replaceWith)(c.Routes.ME)
  }
  render() {
    return null
  }
}
t.default = () => (0, i.jsxs)(l.Switch, {
  children: [(0, i.jsx)(r.default, {
    path: c.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
    component: f
  }), (0, i.jsx)(r.default, {
    component: f
  })]
})