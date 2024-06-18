"use strict";
var i = n(302454),
  r = n.n(i);
let s = /\n$/,
  o = {
    ...r().defaultRules.heading,
    requiredFirstCharacters: [" ", "#"],
    match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(s) ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
  };
t.Z = o