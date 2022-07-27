/**
 * khai báo lớp đối tượng Nhanvien
 * + khai báo cac thuộc tính, phương pháp chung của các đối tượng sinh viên
 */
function NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV) {
   this.maNV = maNV;
   this.tenNV = tenNV;
   this.emailNV = emailNV;
   this.passwordNV = passwordNV;
   this.ngaylamNV = ngaylamNV;
   this.LuongNV = LuongNV;
   this.chucvuNV = chucvuNV;
   this.gioNV = gioNV;

   this.tongluong = 0;
   // phương thức
   this.tongluong = function () {
      this.tongluong = this.LuongNV * this.gioNV;
   }

}

