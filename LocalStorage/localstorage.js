const idvalue = document.getElementById("id");
const pwvalue = document.getElementById("pw");
const loginbutton = document.getElementById("login-btn");
const userIdvalue = document.getElementById("userId");
const userPwvalue = document.getElementById("userPw");
const userLoginInfo = localStorage.getItem("userinfo");
console.log(userLoginInfo);

userIdvalue.textContent = 'id : ${userLoginInfo.id}';
userPwvalue.textContent = 'pw : ${userLoginInfo.pw}';

loginbutton.addEventListener("click", ()=>{
    console.log(idvalue.value);
    console.log(pwvalue.value);

    localStorage.setItem("id", idvalue);
    localStorage.setItem("pw",pwvalue);

    let userinfo = {id: idvalue.value, pw: pwvalue.value}
    localStorage.setItem("userinfo",JSON.stringify(userinfo));
    //id와 pw를 userinfo라는 이름 하나로 묶어 두 값을 하나의 객체 형태로 저장
})
//localstorage.html에서 id, pw를 입력하고 btn을 클릭하면 콘솔로그에 id, pw 출력됨

//localstorage 객체를 사용해 데이터 저장 가능.
//key-value 쌍으로 데이터를 저장할 수 있고, localstorage에 값을 저장하려면 setItem()메서드 사용
//첫번째 매개변수=key값 저장될 이름. 두번째 매개변수=value값 저장될 값

//consol탭에서Application이동 후 localstorage눌러보면 저장되어있음.

//로컬스토지에 객체(ex:userinfo)를 넣을 땐 JSON이라는 JS객체 표기법으로 객체를 JSON 문자열로 변환한 다음 저장해야 함.

