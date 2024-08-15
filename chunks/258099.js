let n = 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
t.Z = {
  randomUUID: n
};