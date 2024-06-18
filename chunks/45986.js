"use strict";
n.d(t, {
  o: function() {
    return r
  },
  u: function() {
    return s
  }
});
var i = n(570140);

function r(e) {
  i.Z.dispatch({
    type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
    url: e
  })
}

function s(e) {
  i.Z.dispatch({
    type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
    url: e
  })
}