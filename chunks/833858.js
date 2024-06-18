"use strict";
n.d(t, {
  O8: function() {
    return I
  },
  V: function() {
    return c
  },
  tV: function() {
    return E
  }
});
var i = n(981631),
  r = n(689938),
  s = n(337258),
  o = n(705196),
  a = n(190878),
  l = n(991254),
  u = n(485686),
  _ = n(400976),
  d = n(443909);
let c = () => ({
    [i.tNA.CHILLING]: {
      title: r.Z.Messages.STATUS_CHILLING,
      icon: o,
      color: "#567C7E"
    },
    [i.tNA.GAMING]: {
      title: r.Z.Messages.STATUS_GAMING,
      icon: a,
      color: "#685F8C"
    },
    [i.tNA.FOCUSING]: {
      title: r.Z.Messages.STATUS_FOCUSING,
      icon: u,
      color: "#7F6956"
    },
    [i.tNA.BRB]: {
      title: r.Z.Messages.STATUS_BRB,
      icon: s,
      color: "#76567E"
    },
    [i.tNA.EATING]: {
      title: r.Z.Messages.STATUS_EATING,
      icon: l,
      color: "#717B54"
    },
    [i.tNA.IN_TRANSIT]: {
      title: r.Z.Messages.STATUS_IN_TRANSIT,
      icon: _,
      color: "#56697F"
    },
    [i.tNA.WATCHING]: {
      title: r.Z.Messages.STATUS_WATCHING,
      icon: d,
      color: "#7C5571"
    }
  }),
  E = e => {
    if ((null == e ? void 0 : e.type) !== i.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === i.tNA.CUSTOM ? null : c()[t]
  },
  I = e => {
    var t;
    return ((null == e ? void 0 : e.state) != null ? e.state : null) === i.tNA.CUSTOM ? null == e ? void 0 : e.details : null === (t = E(e)) || void 0 === t ? void 0 : t.title
  }