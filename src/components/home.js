import React from "react";

function Home (){
    return(
        <div className="container">
            <br/>
            <h4>GIỚI THIỆU SẢN PHẨM</h4>
            <br/>
            <h6>CÔNG DỤNG, TÍNH NĂNG ỨNG DỤNG:</h6>
            <p>Đây là ứng dụng để quản lý nhân sự của công ty. Tại thanh điều hướng, người dùng có thể chọn: 
             Home - Nhân viên - Phòng Ban - Bảng lương để di chuyển qua lại giữa các chức năng.</p>
             <br/>  
            <h6>Tab Nhân viên: </h6>
            <p>Tab Nhân viên, chúng ta có thể nhìn thấy toàn bộ nhân viên kèm hình ảnh.</p>                
            <img src="assets/images/tabStafflist.png" alt="DS toàn bộ NV "  width=" 70% " />
            <br/>
            <p>Ngoài ra có thể tìm kiếm bằng tên nhân viên, thêm nhân viên mới :</p>
            <img src="assets/images/search.png" alt="tìm kiếm NV "  width=" 70% " />
            <br/>
            <br/>
            <h6>Chi tiết nhân viên: </h6>
            <p>Tại danh sách nhân viên, khi muốn xem chi tiết về một nhân viên, người dùng chỉ cần chọn ảnh của nhân viên đó.</p>                
            <img src="assets/images/StaffInfo.png" alt="Chi tiết NV"  width=" 70% " />
            <br/> <br/>
            <h6>Phòng ban:</h6>
            <p>Hiển thị tất cả các phòng ban trong Công ty, bao gồm tên và số lượng nhân viên từng phòng.</p>
            <img src="assets/images/tabroom.png" alt=" DS phòng ban" width="70%" />
            <br/><br/>
            <h6>Bảng lương: </h6>
            <p>Hiển thị bảng lương của tất cả các nhân viên. .</p>
            <img src="assets/images/tabsalary.png" alt=" DS lương NV" width ="70%" />
            <br/>
            <p>Ngoài ra, có thể sắp xếp mức lương nhân viên từ cao đến thấp hoặc ngược lại:</p>
            <img src="assets/images/sortsalary.png" alt=" DS lương NV" width ="70%" />
            <br/><br/>

            <p>Các tính năng khác của ứng dụng sẽ tiếp tục được cập nhật trong thời gian tới.</p>
   
</div>

    );
}
export default Home;