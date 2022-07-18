/**Tính thuế thu nhập cá nhân */
function xuLyThongTin() {
    // Input
    var hoTen = document.querySelector('#nhapHoTen').value;
    var nguoiPhuThuoc = Number(document.querySelector('#nguoiPhuThuoc').value);
    var tongThuNhap = Number(document.querySelector('#tongThuNhap').value);
    var inKetQua = document.querySelector('#inTongThue');

    // Process
    var tinhThue = tinhTienThue(nguoiPhuThuoc, tongThuNhap);

    // Output
    if (tinhThue <= 0) {
        inKetQua.innerHTML = 'Thu nhập thấp quá, không bị tính thuế !';
    } else {
        inKetQua.innerHTML = 'Tiền thuế mà ông/ bà ' + hoTen + ' phải đóng là ' + tinhThue.toLocaleString() + ' vnđ';
    }


}

// Function nhận giá trị và tính tiền thuế
function tinhTienThue(nguoiPhuThuoc, tongThuNhap) {
    var tongTienThue = 0;
    if (nguoiPhuThuoc <= 0) {
        alert('Số người phụ thuộc không xác định được !');
    } else {
        if (tongThuNhap <= 0) {
            alert('Thu nhập như này sao mà tính thuế, nhập lại đi !');
        } else if (tongThuNhap <= 6e+7) {
            tongTienThue = (tongThuNhap - 4e+6 - nguoiPhuThuoc * 16e+5) * 0.05;
        } else if (tongThuNhap > 6e+7 && tongThuNhap <= 12e+7) {
            tongTienThue = (6e+7 + ((tongThuNhap - 6e+7) - 4e+6 - nguoiPhuThuoc * 16e+5)) * 0.1;
        } else if (tongThuNhap > 12e+7 && tongThuNhap <= 21e+7) {
            tongTienThue = (12e+7 + ((tongThuNhap - 12e+7) - 4e+6 - nguoiPhuThuoc * 16e+5)) * 0.15;
        } else if (tongThuNhap > 21e+7 && tongThuNhap <= 384e+6) {
            tongTienThue = (21e+7 + ((tongThuNhap - 21e+7) - 4e+6 - nguoiPhuThuoc * 16e+5)) * 0.2;
        } else if (tongThuNhap > 384e+6 && tongThuNhap <= 624e+6) {
            tongTienThue = (384e+6 + ((tongThuNhap - 384e+6) - 4e+6 - nguoiPhuThuoc * 16e+5)) * 0.25;
        } else if (tongThuNhap > 624e+6 && tongThuNhap <= 960e+6) {
            tongTienThue = (624e+6 + ((tongThuNhap - 624e+6) - 4e+6 - nguoiPhuThuoc * 16e+5)) * 0.3;
        } else {
            tongTienThue = (960e+6 + ((tongThuNhap - 960e+6) - 4e+6 - nguoiPhuThuoc * 16e+5)) * 0.35;
        }
    }

    return Number(tongTienThue);
}



/**Tính tiền cáp */
function xuLyForm2() {
    // Input
    var maKH = document.querySelector('#maKH').value;
    var loaiKH = document.querySelector('#loaiKH').value;
    var soKetNoi = Number(document.querySelector('#soKetNoi').value);
    var soKenhVip = Number(document.querySelector('#soKenhVip').value);
    var inKetQua = document.querySelector('#inKetQua');

    // Process
    var thanhTien = tinhTienCap(loaiKH, soKetNoi, soKenhVip);

    // Output
    inKetQua.innerHTML = 'Mã khách hàng: ' + maKH + '<br>' + 'Tổng tiền cáp: ' + '$' + thanhTien;
    
}

// Function nhận dữ liệu và xử lý tính toán
function tinhTienCap(loaiKH, soKetNoi, soKenhVip) {
    var tienCap = 0;
    if (loaiKH == 'ND') {
        tienCap = 4.5 + 20.5 + (7.5 * soKenhVip);
    } else {
        if (soKetNoi > 0 && soKetNoi <= 10) {
            tienCap = 15 + 75 + (50 * soKenhVip);
        } else {
            tienCap = 15 + 75 + ((soKetNoi - 10) * 5) + (50 * soKenhVip);
        }
    }

    return tienCap;
}

// Check loại khách hàng
function checkKH() {
        var loaiKH = document.querySelector('#loaiKH');
        var outputKH = loaiKH.options[loaiKH.selectedIndex].value;
        var ketNoi = document.querySelector('#soKetNoi');
        if (outputKH == 'ND') {
            ketNoi.disabled = true;
        } else {
            ketNoi.disabled = false;
        }
}


