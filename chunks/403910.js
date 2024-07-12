var i = t(442837),
  r = t(339085);
n.Z = function(e, n) {
  return (0, i.e7)([r.Z], () => {
var t;
if (null == n)
  return null;
let i = r.Z.getDisambiguatedEmojiContext(e);
return null !== (t = i.getById(n)) && void 0 !== t ? t : i.getByName(n);
  }, [
e,
n
  ]);
};