$(document).ready(function(){
  console.log("テストします");
// 入力内容の取得（配列による取得）

  $('.contact-submit').click(function(){
    console.log("クリックされた");
    let subject_content = ($('input[type="text"]').val());
    console.log("ウリックあと");
    console.log(subject_content);
    $('#confirm').text(subject_content);
  });

});
