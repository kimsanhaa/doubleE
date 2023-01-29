
$("#searchButton").click(function (){
    var subjectSearch = $(this).val();
    $("lectureTable > tr").hide();
    var temp = $("#lectureTable > tr > td.search:contains('"+ subjectSearch +"')");
    $(temp).parent().show();
    //alert("button");
})