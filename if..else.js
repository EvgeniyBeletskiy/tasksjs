// 1.
var name = prompt("������ �� �� ����������� �������� JS?", );
if (name == "ECMAScript") {
    alert("�����");
} else {
    alert("�� ������? �ECMAScript�!");
}  
// 2. 
var number = prompt("������� ����� �����", );
if (number == 0) {
    alert (0);
} else if (number > 0) {
    alert(1);
} else {
    alert (-1);
}
// 3.
var login = prompt("Input your login", );
if (login == "�����") {
    var password = prompt("Input your password", );
    if (password == "׸���� ���������") {
        alert("����� ����������!");
    } else if (password == null) {
        alert("���� ������");
    } else {
        alert("������ �������");
    }
 } else {
     alert("� ��� �� ����");
}
// 4. 
var a = prompt("Number", );
var b = prompt("Number", );
(+a + +b) < 4 ? '����': '�����';
// 5.
var login = prompt("Login", );

login == '����' ? '������': 
login == '��������' ? "������������":
login == "" ? "��� ������": "";
//6.
var age = prompt("How old are you", );
if (!(age >= 14 && age <= 90)) {
   alert ("Wrong");
} else {
   alert("It's OK")
}