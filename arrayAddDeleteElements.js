// 2. 
var styles = ["����", "����"];
styles.push("���-�-����");
styles[styles.length - 2] = "��������";
alert(styles.shift());
styles.unshift("���", "�����");

console.log(styles);