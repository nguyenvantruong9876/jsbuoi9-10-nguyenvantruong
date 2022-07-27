/**+ lưu trữ nhiều đối tượng sv (mảng sinh viên)
 * + thêm SV( thêm phần tử mới cho mảng)
 * + xoa, sủa ( xóa, cập nhật phần tử mới cho mảng)
 * + tìm kiems sv theo điểu kiện
 */
var dsnv = new DanhSachNhanVien();
function getELE(id) {
    return document.getElementById(id);
}
function themNhanVien() {
    var maNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var emailNV = getELE("email").value;
    var passwordNV = getELE("password").value;
    var ngaylamNV = getELE("datepicker").value;
    var LuongNV = getELE("luongCB").value;
    var chucvuNV = getELE("chucvu").value;
    var gioNV = getELE("gioLam").value;


    console.log(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV);

    var nv = new NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, Number(LuongNV), chucvuNV, Number(gioNV));
    nv.tongluong();
    console.log(nv);



    dsnv.themNV(nv);
    console.log(dsnv.mangNV);
    hienthiDS(dsnv.mangNV);
    setlocalstorage();
}
function setlocalstorage() {

    localStorage.setItem("NhanVien", JSON.stringify(dsnv.mangNV));
}
function getlocalstorage() {

    if (localStorage.getItem("NhanVien") != undefined) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("NhanVien"));
    }
    hienthiDS(dsnv.mangNV);
}
getlocalstorage();
function hienthiDS(mangNV) {
    console.log(mangNV);
    var content = "";
    mangNV.map(function (nv) {
        console.log(nv);
        content += ` 
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.emailNV}</td>
                <td>${nv.ngaylamNV}</td>
                <td>${nv.chucvuNV}</td>
                <td>${nv.tongluong}</td>
               
                <td>
                    <button class="btn btn-info " onclick="xemChitiet('${nv.maNV}')">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xõa</button>
                </td>
            </tr>
        `;

    });
    console.log(content);
    getELE("tableDanhSach").innerHTML = content;
}
function xoaNhanVien(ma) {
    console.log(ma);
    dsnv.xoaNV(ma);
    hienthiDS(dsnv.mangNV);
    setlocalstorage(dsnv.mangNV);
}
function xemChitiet(ma) {
    console.log(ma)
    var viTri = dsnv.timViTri(ma);
    if (viTri > -1) {
        // tìm thấy
        var nvTim = dsnv.mangNV[viTri];
        console.log(nvTim);

        getELE("tknv").value = nvTim.maNV;
        getELE("tknv").disabled = true;
        getELE("name").value = nvTim.tenNV;
        getELE("email").value = nvTim.emailNV;
        getELE("password").value = nvTim.passwordNV;
        getELE("datepicker").value = nvTim.ngaylamNV;
        getELE("luongCB").value = nvTim.LuongNV;
        getELE("chucvu").value = nvTim.chucvuNV;
        getELE("gioLam").value = nvTim.gioNV;

    }
}
function capnhatNhanVien() {
    var maNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var emailNV = getELE("email").value;
    var passwordNV = getELE("password").value;
    var ngaylamNV = getELE("datepicker").value;
    var LuongNV = getELE("luongCB").value;
    var chucvuNV = getELE("chucvu").value;
    var gioNV = getELE("gioLam").value;


    console.log(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV);

    var nv = new NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, Number(LuongNV), chucvuNV, Number(gioNV));
    nv.tongluong();
    console.log(nv);

    dsnv.capnhatNV(nv);
    hienthiDS(dsnv.mangNV);
    setlocalstorage(dsnv.mangNV);
}