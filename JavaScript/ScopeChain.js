// Scope and scope chain...

function a() {
  var x = 10;
  function b() {
    function c() {
      console.log(x);
    }
    return c();
  }
  return b();
}
a();
