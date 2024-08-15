var r = n(470079);
t.Z = (e, t) => {
  let n = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
n.current = e;
  }, [e]), (0, r.useEffect)(() => {
if (null === t)
  return;
let e = setTimeout(() => n.current(), t);
return () => clearTimeout(e);
  }, [
t,
n
  ]);
};