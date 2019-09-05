$('#inputFileButton').on('click', function() {
    $('#inputFile').trigger('click');
});
// $(document).ready(function() { 
//     $("#inputFile").change(function(e) { 
//         let filepict1 = document.getElementById("inputFile").files[0];
//         document.getElementById("previewPict").src = filepict1;
//     }); 
// });
$("#inputFile").change(function(){
    bacaGambar(this);
 });
function bacaGambar(input) {
    if (input.files && input.files[0]) {
       var reader = new FileReader();
  
       reader.onload = function (e) {
           $('#previewPict').attr('src', e.target.result);
       }
  
       reader.readAsDataURL(input.files[0]);
    }
 }