
var subtable = [];

var sublist1 = ['전공', '15','임베디드개론', '3', '조중휘', 'S7-304'];
var sublist2 = ['전공', '16','C언어', '3', '전경구', 'S7-306'];
var sublist3 = ['전공', '17','펌웨어', '3', '강석훈', 'S7-314'];
var sublist4 = ['전공', '8','창의설계', '2', '최병조', 'S7-311'];
var sublist5 = ['전공', '18','오픈소스', '3', '강우철', 'S7-313'];
var sublist6 = new Array('전공', '20','신호처리', '3', '전광길', 'S7-314');

subtable.push(sublist1);
subtable.push(sublist2);
subtable.push(sublist3);
subtable.push(sublist4);
subtable.push(sublist5);
subtable.push(sublist6);

var myLectureCount = 0;
// myLectureCount 변수로 현재 수강 강의 개수를 셈

// 동적으로 만들어지는 버튼에도 이벤트 적용시키기 위해 클릭 이벤트 작동방식 변경
$(document).on("click", ".tempButton", function (){     // 신청 버튼을 누를 경우 수강목록으로 강의 이동
    myLectureCount ++;

    //console.log($(this).parent().siblings().text());
    var tempVal;
    //tempVal = $(this).parent().next().text();
    //console.log(tempVal);

    var cur = $(this).parent().next();
    for(let i=1;i<=sublist2.length;i++) {
        // 배열로 받아오면 한글자씩 잘림 -> 하나의 변수로 받아옴
        tempVal = cur.text();
        //console.log(tempVal);
        cur = cur.next();
        //console.log(tempsub);

        $("#myLectureTable").find("tr:eq("+myLectureCount+") td:eq("+i+")").html(tempVal);
        //$("tr:eq("+3+") td:eq("+i+")").html(sublist2[i-1]);
    }
    $("#myLectureTable").find("tr:eq("+myLectureCount+") td:eq("+0+")").html("<button class=\"tempDelButton\" >삭제</button>");

    $(this).prop("disabled", true);     // 신청한 강의는 버튼 비활성화
    $(this).css({background: "red"});   // 비활성화된 강의는 색상 변경
    console.log(myLectureCount);
})



$(document).on("click", ".tempDelButton", function (){      // 삭제 버튼을 누를 경우 수강목록에서 강의 삭제

    // 삭제된 강의는 신청 버튼 다시 활성화 해야 함
    var delLec = $(this).parent().next().next().next().text();
    console.log(delLec);

    //console.log($("#lectureTable").find("td:contains("+delLec+")").prev().prev().prev().children());
    //console.log($("#lectureTable").find("td:contains("+delLec+")").parent().prev().prev().prev().children());
    //$("#lectureTable").find("td:contains("+delLec+")").parent().prev().prev().prev().children().prop("disabled", false);
    //console.log(this.parentNode.parentNode);
    $("#lectureTable").find("td:contains("+delLec+")").prev().prev().prev().children().prop("disabled", false);
    //$(this).parent().parent();     // -> this.parent 를 사용하면 empty()로 지워도 행자체가 지워짐
    //$("#myLectureTable").find("tr:eq("+myLectureCount+")").empty();
    //console.log($(this).parent());
    //console.log($("#myLectureTable").find("tr:eq("+myLectureCount+")"));
    var cur = $(this).next();
    console.log(cur);
    for(let i=0;i<sublist2.length;i++){
        cur.html("");
        cur = cur.next;
    }
    myLectureCount --;
    // 과목 삭제 기능, 과목 삭제 시 버튼 다시 활성화 기능

})

$(".tempDelButton").click(function (){

})





$("#searchButton").click(function (){
    console.log(subtable);
})