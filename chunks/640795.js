"use strict";
n.d(t, {
  q: function() {
    return c
  }
}), n(411104);
var i = n(956067),
  r = n(544891),
  s = n(570140),
  o = n(710845),
  a = n(873741),
  l = n(139674);
let {
  WEBAPP_ENDPOINT: u
} = window.GLOBAL_ENV, _ = "https:".concat(u, "/bad-hash-delta"), d = new o.Z("FetchBlockedDomain");

function c() {
  return i.Z.timeAsync("\uD83D\uDCBE", "fetchBlockedDomainList", E)
}
async function E() {
  d.verbose("Fetching blocked domain list");
  try {
    let e;
    let t = parseInt((await r.tn.get("https://cdn.discordapp.com/bad-domains/current_revision.txt")).text),
      n = l.Z.getCurrentRevision();
    if (d.verbose("Server revision: ".concat(t, ", Client revision: ").concat(n)), null === n || n !== t) {
      try {
        if (null === n || n > t) {
          let e = null === n ? "null" : "greater than server revision number";
          throw Error("Client revision number is " + e)
        }
        if (t - n > 15) throw Error("Client revision number is more than ".concat(15, " behind the server revision number"));
        let s = (await r.tn.get({
          url: _,
          query: {
            revision: n
          }
        })).body;
        if (0 === s.ADDED.length && 0 === s.REMOVED.length) {
          d.verbose("No changes to blocked domains list.");
          return
        }
        d.verbose("Retrieved delta, domains added: ".concat(s.ADDED.length, ", domains removed: ").concat(s.REMOVED.length));
        let o = await i.Z.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => l.Z.getBlockedDomainList());
        if (null === o) throw Error("Blocked domain list is null");
        d.verbose("Blocked domains list length: ".concat(o.size, " before update")), s.ADDED.forEach(e => {
          if (o.has(e)) throw Error("Unable to add domain which is already in the blockedDomains set: ".concat(e));
          o.add(e)
        }), s.REMOVED.forEach(e => {
          if (!o.has(e)) throw Error("Unable to removed domain which is not in the blockedDomains set: ".concat(e));
          o.delete(e)
        }), e = Array.from(o), d.verbose("Delta applied successfully")
      } catch (t) {
        if (d.verbose("Unable to process domain list delta: ".concat(t.message)), (0, a.K)()) {
          d.verbose("Slow network detected, not downloading full list");
          return
        }
        d.verbose("Downloading the full bad domains file"), e = (await r.tn.get({
          url: "https://cdn.discordapp.com/bad-domains/updated_hashes.json"
        })).body
      }
      d.verbose("Blocked domains list length: ".concat(e.length, " after update")), i.Z.time("\uD83D\uDCBE", "Save Blocked Domain List", () => s.Z.dispatch({
        type: "BLOCKED_DOMAIN_LIST_FETCHED",
        list: e,
        revision: t
      }))
    }
  } catch (e) {
    d.error(e)
  }
}