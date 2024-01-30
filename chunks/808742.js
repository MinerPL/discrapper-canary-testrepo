"use strict";
l.r(t), l.d(t, {
  getHangStatusOptions: function() {
    return f
  },
  getHangStatusDetails: function() {
    return T
  },
  getHangStatusText: function() {
    return E
  }
});
var a = l("49111"),
  n = l("782340"),
  s = l("65833"),
  i = l("270664"),
  r = l("763388"),
  u = l("708206"),
  o = l("787795"),
  c = l("908332"),
  d = l("850390");
let f = () => ({
    [a.HangStatusTypes.CHILLING]: {
      title: n.default.Messages.STATUS_CHILLING,
      icon: i,
      color: "#567C7E"
    },
    [a.HangStatusTypes.GAMING]: {
      title: n.default.Messages.STATUS_GAMING,
      icon: r,
      color: "#685F8C"
    },
    [a.HangStatusTypes.FOCUSING]: {
      title: n.default.Messages.STATUS_FOCUSING,
      icon: o,
      color: "#7F6956"
    },
    [a.HangStatusTypes.BRB]: {
      title: n.default.Messages.STATUS_BRB,
      icon: s,
      color: "#76567E"
    },
    [a.HangStatusTypes.EATING]: {
      title: n.default.Messages.STATUS_EATING,
      icon: u,
      color: "#717B54"
    },
    [a.HangStatusTypes.IN_TRANSIT]: {
      title: n.default.Messages.STATUS_IN_TRANSIT,
      icon: c,
      color: "#56697F"
    },
    [a.HangStatusTypes.WATCHING]: {
      title: n.default.Messages.STATUS_WATCHING,
      icon: d,
      color: "#7C5571"
    }
  }),
  T = e => {
    if ((null == e ? void 0 : e.type) !== a.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === a.HangStatusTypes.CUSTOM ? null : f()[t]
  },
  E = e => {
    var t;
    let l = (null == e ? void 0 : e.state) != null ? e.state : null;
    return l === a.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
  }