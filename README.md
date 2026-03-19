🏠 Website Bán Đồ Gia Dụng (Django)
📌 Giới thiệu

Đây là website thương mại điện tử chuyên bán đồ gia dụng (nồi, chảo, máy xay, đồ bếp, thiết bị gia đình, …) được xây dựng bằng Django.

Hệ thống cho phép người dùng mua sắm trực tuyến, quản lý đơn hàng và cung cấp dashboard thống kê cho admin.
🎯 Mục tiêu dự án

Xây dựng website bán đồ gia dụng hoàn chỉnh

Áp dụng Django để phát triển web thực tế

Triển khai hệ thống đăng nhập & phân quyền

Tích hợp biểu đồ thống kê trực quan

Đảm bảo các yêu cầu bảo mật cơ bản
🚀 Tính năng chính
👤 Người dùng

Đăng ký / Đăng nhập / Đăng xuất

Quên mật khẩu (Reset password)

Xem và cập nhật thông tin cá nhân

🏠 Sản phẩm gia dụng

Hiển thị danh sách sản phẩm

Tìm kiếm sản phẩm theo tên

Xem chi tiết sản phẩm

Hiển thị hình ảnh sản phẩm (media)

🛒 Giỏ hàng & Đặt hàng

Thêm sản phẩm vào giỏ hàng

Cập nhật số lượng sản phẩm

Xóa sản phẩm khỏi giỏ

Đặt hàng

Xem lịch sử đơn hàng

🛠️ Trang quản trị (Admin)

Quản lý sản phẩm (Thêm / Sửa / Xóa)

Quản lý danh mục (VD: Nhà bếp, Điện gia dụng,…)

Quản lý khách hàng

Quản lý đơn hàng

Cập nhật trạng thái đơn hàng:

Pending

Completed

Cancelled
📊 Thống kê & Báo cáo

Hệ thống sử dụng Chart.js để hiển thị:

📈 Biểu đồ doanh thu theo ngày/tháng

📊 Biểu đồ số lượng đơn hàng theo trạng thái
🧱 Công nghệ sử dụng

Backend: Django (Python)

Frontend: HTML, CSS, JavaScript

Database: SQLite3

Thư viện biểu đồ: Chart.js

Xác thực: Django Authentication

Cấu hình môi trường: python-dotenv (.env)
🔐 Bảo mật hệ thống

Mật khẩu được hash bằng Django

Validation input ở:

Django Forms

Model

CSRF Protection (mặc định Django)

Sử dụng .env để bảo vệ thông tin nhạy cảm
⚙️ Hướng dẫn cài đặt

1. Clone project
   git clone <repo-url>
   cd web_test
2. Tạo môi trường ảo
   python -m venv venv
3. Kích hoạt môi trường

Windows:

venv\Scripts\activate

Mac/Linux:

source venv/bin/activate 5. Tạo file .env

Tạo file .env trong thư mục gốc:
SECRET_KEY=your_secret_key
DEBUG=True
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_password 6. Migration database
python manage.py makemigrations
python manage.py migrate 7. Tạo tài khoản admin
python manage.py createsuperuser 8. Chạy server
python manage.py runserver

Truy cập:

http://127.0.0.1:8000/
| Vai trò | Username | Password |
| ------- | -------- | -------- |
| Admin | admin | 123456 |
| User | user1 | 123456 |
📁 Cấu trúc thư mục
web1/
├── .github/
│ └── workflows/
│ └── ci.yml
├── .gitignore
├── .prettierignore
├── .env.example
├── README.md
├── manage.py
├── requirements.txt
├── settings.py
├── asgi.py
├── wsgi.py
├── create_admin.py
├── write_templates.py
├── fix_templates.py
├── fix_templates_final.py
├── seed_categories.py
├── test_images.py
├── db.sqlite3
├── products/
│ └── Screenshot_2026-01-27_175711.png
├── static/
│ └── main/
│ ├── css/
│ │ └── home.css
│ └── js/
│ └── hoem.js
├── main/
│ ├── **init**.py
│ ├── admin.py
│ ├── apps.py
│ ├── models.py
│ ├── views.py
│ ├── urls.py
│ ├── tests.py
│ ├── templatetags/
│ │ ├── **init**.py
│ │ └── custom_filters.py
│ ├── migrations/
│ │ ├── **init**.py
│ │ ├── 0001_initial.py
│ │ ├── 0002_alter_product_image.py
│ │ ├── 0003_remove_product_image.py
│ │ ├── 0004_product_image.py
│ │ ├── 0005_add_product_stock.py
│ │ ├── 0006_cartitem_order_orderitem.py
│ │ ├── 0007_order_address_order_approved_at_order_note_and_more.py
│ │ ├── 0008_alter_cartitem_id_alter_category_id_alter_order_id_and_more.py
│ │ ├── 0009_alter_cartitem_id_alter_category_id_alter_order_id_and_more.py
│ │ └── 0010_order_completed_at_alter_order_status.py
│ ├── management/
│ │ └── commands/
│ │ ├── seed.py
│ │ ├── convert_statuses.py
│ │ └── backfill_order_totals.py
│ ├── templates/
│ │ ├── admin/
│ │ │ ├── admin_layout.html
│ │ │ ├── admin_navbar.html
│ │ │ └── admin_sidebar.html
│ │ └── main/
│ │ ├── \_product_card.html
│ │ ├── 404.html
│ │ ├── add_product.html
│ │ ├── admin_base.html
│ │ ├── admin_categories.html
│ │ ├── admin_customers.html
│ │ ├── admin_dashboard.html
│ │ ├── admin_order_detail.html
│ │ ├── admin_orders.html
│ │ ├── admin_panel.html
│ │ ├── admin_product_add.html
│ │ ├── admin_product_edit.html
│ │ ├── admin_products.html
│ │ ├── admin_section.html
│ │ ├── cart.html
│ │ ├── category.html
│ │ ├── change_password.html
│ │ ├── checkout_fail.html
│ │ ├── checkout_now.html
│ │ ├── checkout_success.html
│ │ ├── checkout.html
│ │ ├── dashboard.html
│ │ ├── debug.html
│ │ ├── edit_product.html
│ │ ├── footer.html
│ │ ├── forgot_password.html
│ │ ├── forms.py
│ │ ├── header.html
│ │ ├── home.html
│ │ ├── layout.html
│ │ ├── login.html
│ │ ├── order_detail.html
│ │ ├── orders.html
│ │ ├── password_reset_complete.html
│ │ ├── password_reset_email.html
│ │ ├── password_reset_done.html
│ │ ├── password_reset_confirm.html
│ │ ├── password_reset_subject.txt
│ │ ├── profile.html
│ │ ├── product_list.html
│ │ ├── product_detail.html
│ │ ├── register.html
│ │ ├── search.html
│ │ ├── stats.html
│ │ ├── track_order.html
│ │ └── wishlist.html
│ └── static/
│ └── main/
│ ├── css/
│ │ ├── admin.css
│ │ ├── admin-layout.css
│ │ ├── add_product.css
│ │ ├── cart.css
│ │ ├── category.css
│ │ ├── checkout.css
│ │ ├── checkout_fail.css
│ │ ├── checkout_now.css
│ │ ├── checkout_success.css
│ │ ├── change_password.css
│ │ ├── dashboard.css
│ │ ├── edit_product.css
│ │ ├── footer.css
│ │ ├── forgot_password.css
│ │ ├── header.css
│ │ ├── home.css
│ │ ├── homepage.css
│ │ ├── layout.css
│ │ ├── login.css
│ │ ├── order_detail.css
│ │ ├── orders.css
│ │ ├── product_detail.css
│ │ ├── product_list.css
│ │ ├── profile.css
│ │  
│ └── js/
│ ├── admin.js
│ ├── add_product.js
│ ├── admin_dashboard.js
│ ├── cart.js
│ ├── category.js
│ ├── checkout.js
│ ├── checkout_fail.js
│ ├── checkout_now.js
│ ├── checkout_success.js
│ ├── dashboard.js
│ ├── edit_product.js
│ ├── footer.js
│ ├── home.js
│ ├── homepage.js
│ ├── header.js
│ ├── layout.js
│ ├── login.js
│ ├── orders.js
│ ├── product_detail.js
│ ├── product_list.js
│ ├── profile.js
│ ├── register.js
│ ├── search.js
│ ├── stats.js
│ ├── track_order.js
│ └── wishlist.js
├── web1/
│ ├── **init**.py
│ ├── asgi.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py

🧪 Kiểm thử

Test các chức năng:

Đăng ký / đăng nhập

Thêm sản phẩm

Đặt hàng

Kiểm tra lỗi:

Trang 404 (404.html)

Kiểm tra log tại terminal

🎨 Giao diện & sáng tạo

Giao diện đơn giản, dễ sử dụng

Dashboard trực quan

Hiển thị sản phẩm rõ ràng

Có tìm kiếm sản phẩm

Có trang quản trị riêng

| STT | Họ tên           | Vai trò            |
| --- | ---------------- | ------------------ |
| 1   | Sùng A Chính     | Backend + Database |
| 2   | Nguyễn Văn Cương | Frontend + UI      |

📌 Đóng góp của nhóm

Phát triển chức năng chính

Thiết kế giao diện

Kiểm thử hệ thống

Viết tài liệu (README, báo cáo)
🚀 Hướng phát triển

Thanh toán online (VNPay, Momo)

Tích hợp API (Django REST Framework)

Deploy lên cloud

Cải thiện UI/UX

Thêm đánh giá sản phẩm
🚀 Hướng phát triển

Thanh toán online (VNPay, Momo)

Tích hợp API (Django REST Framework)

Deploy lên cloud

Cải thiện UI/UX

Thêm đánh giá sản phẩm
🚀 Hướng phát triển

Thanh toán online (VNPay, Momo)

Tích hợp API (Django REST Framework)

Deploy lên cloud

Cải thiện UI/UX

Thêm đánh giá sản phẩm
📞 Liên hệ

Email: achinhofficial@gmail.com
