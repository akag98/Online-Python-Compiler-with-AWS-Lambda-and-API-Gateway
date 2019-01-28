const editor = ace.edit('editor');
// const input = ace.edit('input');

$(function() {
  // configure ace editor
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/python");
  editor.setFontSize('14px');

  // input.setTheme("ace/theme/monokai");
  // input.getSession().setMode("ace/mode/python");
  // input.setFontSize('14px');

});

// handle form submit
$('form').on('submit', (event) => {
  event.preventDefault();
  const answer = editor.getSession().getValue();
  // const input = input.getSession().getValue();
  // const payload = { answer: answer, input: input };
  const payload = { answer: answer };
  grade(payload);
});

// ajax request
function grade(payload) {
  $.ajax({
    method: 'POST',
    url: 'your_apigateway_endpoint_url',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(payload)
  })
  .done((res) => {
    $('.answer').html(res);
  })
  .catch((err) => {
    $('.answer').html('Something went terribly wrong!');
    console.log(err);
  });
}