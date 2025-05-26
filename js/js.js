function includeHTML(){//ajax
var z, i, elmnt, file, xhttp; //변수선언만

z = document.getElementsByTagName("*")// 모든 태크네임을 얻는데, 모든 영역(*) 즉, 문서 내 모든 태크를 가져온다

for(i=0; i < z.length; i++){//i는 가지고 있는 만큼 반복 //z의 랭스보다 작을 때까지 i가 0부터 계속 증가하라. i는 가지고 있는 만큼 반복하라.
    elmnt = z[i];//변수 elmnt에 z개별을 대입한다 //변수 elmnt에 z 개별을 대입한다.  elmnt  ->엘리면트를 변수로 줄여 쓴 것
    file = elmnt.getAttribute("w3-include-html");
    //모든 요소를 순회하면서(차례로 돌아다니면서) "w3-include-html" 속성이 있는지 검사한다.
    if (file){//파일에 속성이 있다면 if (!=null) //if (!=null)이 존재한다면 이란 뜻이고, if(file)은 파일에 속성이 존재한다면 이 뜻이다.
    xhttp = new XMLHttpRequest(); //속성이 있다면 AJAX요청을 준비합니다. XML:익스텐션 마크업 랭귀지.html태그가 아니라 자기가 태그를 만들어 써주는 게 XML이다.
//new 키워드는 XMLHttpRequest 객체의 새로운 "인스턴스"를 생성하라는 의미입니다. 쉽게 말해, XMLHttpRequest라는 틀(blueprint)을 가지고 실제로 작업을 수행할 수 있는 하나의 "도구"를 만드는 과정입니다. 
// 새로 생성된 XMLHttpRequest 객체를 xhttp라는 변수에 할당(저장)합니다. xhttp는 이제 우리가 서버와 통신하기 위해 사용할 "도구"를 가리키는 이름이 됩니다. 이 변수 이름을 통해 우리는 이 도구의 다양한 기능(예: 요청 열기, 요청 보내기, 응답 받기 등)을 호출할 수 있습니다.

    xhttp.onreadystatechange = function(){
       if(this.readyState == 4){//요청이 완료되면
//성공할때와
if (this.status == 200){
    elmnt.innerHTML = this.responseText;
}
//실패
if(this.status == 404){
    elmnt.innerHTML = "Page not found"
}
elmnt.removeAttribute("w3-include-html");
includeHTML();////재귀 호출 : 함수는 호출할 때만 실행되는 코드블록인데, 자기 스스로를 호출하는 걸 재귀 호출이라 한다.   
       }
    }
    xhttp.open("GET", file, true);//비동기 (true) 방식으로 요청을 보냄
    xhttp.send();
    return;//리턴으로 함수 종료하여 현재 요소만 처리 
    } 
}
}
