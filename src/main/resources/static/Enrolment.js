
var subtable = [];
var mySubtable = [];

var sublist1 = ['전공', '15','임베디드개론', '3', '조중휘', 'S7-304'];
var sublist2 = ['전공', '16','C언어', '3', '전경구', 'S7-306'];
var sublist3 = ['전공', '17','펌웨어', '3', '강석훈', 'S7-314'];
var sublist4 = ['전공', '8','창의설계', '2', '최병조', 'S7-311'];
var sublist5 = ['전공', '18','오픈소스', '3', '강우철', 'S7-313'];
var sublist6 = ['전공', '20','신호처리', '3', '전광길', 'S7-314'];

subtable.push(sublist1);
subtable.push(sublist2);
subtable.push(sublist3);
subtable.push(sublist4);
subtable.push(sublist5);
subtable.push(sublist6);

var myLectureCount = 0;
// myLectureCount 변수로 현재 수강 강의 개수를 셈


// 과목명, 과목코드, 교수명, 강의실 등 모든 키워드로 검색(keyup event)
$(document).on("keyup", "#searchInput", function (){   // 입력칸에 keyup 이벤트 발생 시
    //$("#lectureTable > tbody > tr").hide();
    $(".sRow").hide();
    var cVal = $("#searchInput").val();
    var a = 1;
    var temp = $("#lectureTable > tbody > tr > td:contains("+ cVal +")");
    $(temp).parent().show();
    //var temp = $("#lectureTable > tbody > tr > td:eq(3):contains("+ cVal +")");
    // 칸만 남기고 내용지우기는 실패
    // 특정 row만 지우는 방법 사용
})

// '과목명' 으로만 검색(검색버튼 클릭 event)dwadgwadkjhg
/*
$(document).on("click", "#searchButton", function (){
    $(".sRow").hide();
    var tem1;
    for(let i=1;i<=subtable.length;i++){
        tem1 = subtable[i-1][2];
        if(tem1 == $("#searchInput").val()){
            var tem2 = $("#lectureTable > tbody > tr:eq("+ i +")");
            console.log(tem2);
            $(tem2).show();
        }
    }
})
$(document).on("click", function (){
    if($("#searchInput").val().length == 0){    // 검색 입력칸에 내용이 없을 경우
        $(".sRow").show();                      // 아무 화면이나 클릭 시 강의 목록 보여줌
    }                                           // 여기까지 "과목명으로 검색" 포함
})*/




// 동적으로 만들어지는 버튼에도 이벤트 적용시키기 위해 클릭 이벤트 작동방식 변경
$(document).on("click", ".tempButton", function (){     // 신청 버튼을 누를 경우 수강목록으로 강의 이동
    myLectureCount ++;
    /*
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
    }*/

    for(let i=0;i<sublist1.length;i++){
        //console.log($(this).parent().next().next().text());
        if($(this).parent().next().next().text()==subtable[i][1]){
            mySubtable.push(subtable[i]);
        }
    }

    //$("#myLectureTable > th").remove();
    // 테이블 행추가 -> append
    //var newTb  = "<th>신청</th><th>이수구분</th><th>과목번호</th><th>과목명</th><th>학점</th><th>담당교수</th><th>강의실</th>"
    //$("#myLectureTable").append(newTb);
    $(".tRow").empty(); // 테이블 헤더는 남기고 행만 지움
    var newRow;
    for(let i=0;i<mySubtable.length;i++){
        newRow += "<tr class = \"tRow\"><td> <button class=\"tempDelButton\" >삭제</button> </td><td>"+mySubtable[i][0]+"</td><td>"+mySubtable[i][1]+"</td><td>"+mySubtable[i][2]+"</td><td>"+mySubtable[i][3]+"</td><td>"+mySubtable[i][4]+"</td><td>"+mySubtable[i][5]+"</td></tr>"
    }
    $("#myLectureTable").append(newRow);    // 테이블에 행 추가
    //$("#myLectureTable").find("tr:eq("+myLectureCount+") td:eq("+0+")").html("<button class=\"tempDelButton\" >삭제</button>");

    $(this).prop("disabled", true);     // 신청한 강의는 버튼 비활성화
    $(this).css({background: "red"});   // 비활성화된 강의는 색상 변경

    // 신청학점/ 과목수 계산;
    let sg = 0;
    sg = Number(sg);
    let sn = mySubtable.length;
    for(let i = 0;i<mySubtable.length;i++){
        sg += Number(mySubtable[i][3]);
    }
    $("#subGrade").text(sg);
    $("#subNum").text(sn);
})



$(document).on("click", ".tempDelButton", function (){      // 삭제 버튼을 누를 경우 수강목록에서 강의 삭제

    // 삭제된 강의는 신청 버튼 다시 활성화 해야 함
    var delLec = $(this).parent().next().next().next().text();
    //console.log(delLec);

    for(let i=0;i<mySubtable.length;i++){       // 수강내역 리스트에서 강의 삭제
        if(mySubtable[i][2]==delLec){
            mySubtable.splice(i,1);   // i번째 인덱스부터 1개의 원소를 삭제
            //console.log(mySubtable);
        }
    }

    $(".tRow").empty();     // 테이블 내용 숨기기
    var newRow;
    for(let i=0;i<mySubtable.length;i++){
        newRow += "<tr class = \"tRow\"><td> <button class=\"tempDelButton\" >삭제</button> </td><td>"+mySubtable[i][0]+"</td><td>"+mySubtable[i][1]+"</td><td>"+mySubtable[i][2]+"</td><td>"+mySubtable[i][3]+"</td><td>"+mySubtable[i][4]+"</td><td>"+mySubtable[i][5]+"</td></tr>"
    }
    $("#myLectureTable").append(newRow);    // 테이블에수정된 내용 표시

    // 신청학점/ 과목수 계산
    let sg = 0;
    sg = Number(sg);
    let sn = mySubtable.length;
    for(let i = 0;i<mySubtable.length;i++){
        sg += Number(mySubtable[i][3]);
    }
    $("#subGrade").text(sg);
    $("#subNum").text(sn);



    $("#lectureTable").find("td:contains("+delLec+")").prev().prev().prev().children().prop("disabled", false);
    $("#lectureTable").find("td:contains("+delLec+")").prev().prev().prev().children().css({background: "#148FC3"})
    //console.log($("#lectureTable").find("td:contains("+delLec+")").prev().prev().prev().children());
    /*
    var cur = $(this).next();
    console.log(cur);
    for(let i=0;i<sublist2.length;i++){
        cur.html("");
        cur = cur.next;
    }
    myLectureCount --;
    */
    // 과목 삭제 기능, 과목 삭제 시 버튼 다시 활성화 기능

})

$(".tempDelButton").click(function (){

})
