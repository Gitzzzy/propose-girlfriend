# Propose girlfriend
This script will able you to shoot a girl and make your **GirlFriends**
this script only using ```html``` and ```javascript``` you can modified the text for your own text
this made by [Gitzzzy.](http://gitzzzy.rf.gd) this is better than you get on internet
this is complex and may that girl will apply you to have him.

# How to use
You just need to change ```alert('');``` and add to make a alert badge.
and may you have question why im using ```document.getElementById();``` 'cause im need to
make a sense and not same as internet. you can modification ```.innerHTML();``` to your own text
this have a event listener.
Javascript source on bellow :
```
//alert Items 
alert("Your own text #1");
alert("Your own text #2");
alert("Your own text #3"); // You can add more alert if you want

//innerHTML
var text = document.getElementById("text");
var button = document.getElementById("button");

button.addEventListener('click', function() {
  text.innerHTML = "Your Own Text";
});
```
