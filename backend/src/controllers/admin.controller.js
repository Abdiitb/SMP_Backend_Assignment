const obj = {
  name: "Arrow",
  say: () => {
    console.log(this); // ❌ undefined, because `this` doesn't refer to `obj`
  }
};
obj.say();

const obj2 = {
  name: "Arrow",
  say: function () {
    console.log(this); // ✅ Arrow
  }
};
obj2.say();