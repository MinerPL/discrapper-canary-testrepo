n.d(t, {
  q: function() {
return _;
  }
}), n(411104);
var r = n(956067),
  i = n(544891),
  a = n(570140),
  s = n(710845),
  o = n(873741),
  l = n(139674);
let {
  WEBAPP_ENDPOINT: u
} = window.GLOBAL_ENV, c = 'https:'.concat(u, '/bad-hash-delta'), d = new s.Z('FetchBlockedDomain');

function _() {
  return r.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', E);
}
async function E() {
  d.verbose('Fetching blocked domain list');
  try {
let e;
let t = parseInt((await i.tn.get('https://cdn.discordapp.com/bad-domains/current_revision.txt')).text),
  n = l.Z.getCurrentRevision();
if (d.verbose('Server revision: '.concat(t, ', Client revision: ').concat(n)), null === n || n !== t) {
  try {
    if (null === n || n > t) {
      let e = null === n ? 'null' : 'greater than server revision number';
      throw Error('Client revision number is ' + e);
    }
    if (t - n > 15)
      throw Error('Client revision number is more than '.concat(15, ' behind the server revision number'));
    let a = (await i.tn.get({
      url: c,
      query: {
        revision: n
      }
    })).body;
    if (0 === a.ADDED.length && 0 === a.REMOVED.length) {
      d.verbose('No changes to blocked domains list.');
      return;
    }
    d.verbose('Retrieved delta, domains added: '.concat(a.ADDED.length, ', domains removed: ').concat(a.REMOVED.length));
    let s = await r.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => l.Z.getBlockedDomainList());
    if (null === s)
      throw Error('Blocked domain list is null');
    d.verbose('Blocked domains list length: '.concat(s.size, ' before update')), a.ADDED.forEach(e => {
      if (s.has(e))
        throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
      s.add(e);
    }), a.REMOVED.forEach(e => {
      if (!s.has(e))
        throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
      s.delete(e);
    }), e = Array.from(s), d.verbose('Delta applied successfully');
  } catch (t) {
    if (d.verbose('Unable to process domain list delta: '.concat(t.message)), (0, o.K)()) {
      d.verbose('Slow network detected, not downloading full list');
      return;
    }
    d.verbose('Downloading the full bad domains file'), e = (await i.tn.get({
      url: 'https://cdn.discordapp.com/bad-domains/updated_hashes.json'
    })).body;
  }
  d.verbose('Blocked domains list length: '.concat(e.length, ' after update')), r.Z.time('\uD83D\uDCBE', 'Save Blocked Domain List', () => a.Z.dispatch({
    type: 'BLOCKED_DOMAIN_LIST_FETCHED',
    list: e,
    revision: t
  }));
}
  } catch (e) {
d.error(e);
  }
}