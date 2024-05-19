"use strict";
n.r(t);
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("699516"),
  r = n("800599"),
  o = n("594174"),
  u = n("914946"),
  d = n("981631");
t.default = {
  [d.RPCCommands.GET_RELATIONSHIPS]: {
    scope: l.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {
      let e = {
        ...i.default.getRelationships()
      };
      return r.default.getUserAffinitiesUserIds().forEach(t => {
        null == e[t] && null != o.default.getUser(t) && (e[t] = d.RelationshipTypes.IMPLICIT)
      }), {
        relationships: s().map(e, (e, t) => (0, u.transformRelationship)(e, t))
      }
    }
  }
}