$(function() {
  // jQueryを記述
 // $("p").fadeOut();

 //速度指定(ミリ秒）
 // $("p").fadeout(5000);

 //終了後の処理を指定。
 $("p").fadeout(function() {
  alert("フェードアウトしました。")
 })
});