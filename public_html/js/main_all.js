(function(){
  var j=function(){
      this.aa='bufer';
  };
  j.prototype={
      add:function(){
	  return this.aa;
      }
  }
  window.j=new j();
}());

$(function(){
    console.log(j.add());
    console.log(window.attachEvent)
});