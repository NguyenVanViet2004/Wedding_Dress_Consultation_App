# Ứng dụng tư vấn váy cưới 

# Hướng dẫn Conventional Commits

## Cấu trúc của Conventional Commits

Một commit message chuẩn bao gồm các phần sau:


- **Loại (Type)**: Loại của commit, ví dụ: feat, fix, docs, style, refactor, test, chore, etc.
- **Phạm vi (Scope)**: Phạm vi của commit, ví dụ: component, utils, theme, etc. (tùy chọn)
- **Mô tả (Description)**: Mô tả ngắn gọn về nội dung của commit.

  ```hash
  <type>[optional scope]: <description> [optional body] [optional footer(s)]
  ```

Ví dụ:

- `feat(auth): thêm chức năng đăng nhập bằng email`
- `fix(validation): sửa lỗi kiểm tra định dạng email`

## Loại Commit

Dưới đây là danh sách các loại commit thông dụng:

- **feat**: Thêm một tính năng mới
- **fix**: Sửa lỗi
- **docs**: Sửa đổi hoặc thêm mới tài liệu
- **style**: Sửa đổi về kiểu dáng không ảnh hưởng đến logic code (cách format, dấu cách, ...)
- **refactor**: Sửa đổi code nhưng không thêm tính năng mới hoặc sửa lỗi
- **test**: Thêm hoặc sửa đổi các test
- **chore**: Các công việc phát triển, cập nhật công cụ, ...

## Một số ví dụ về Conventional Commits
### Thêm một tính năng mới:
```hash
feat(auth): Thêm phương thức đăng nhập bằng Google
```
### Sửa lỗi:
```hash
fix(validation): Sửa lỗi không hiển thị thông báo khi nhập sai định dạng email
```
### Sửa đổi hoặc thêm mới tài liệu:
```hash
docs(readme): Cập nhật hướng dẫn commit message trong file README.md
```
### Sửa đổi về kiểu dáng không ảnh hưởng đến logic code:
```hash
style(button): Thay đổi màu sắc của nút đăng nhập
```
### Sửa đổi code nhưng không thêm tính năng mới hoặc sửa lỗi:
```hash
refactor(auth): Tối ưu hóa phương thức xác thực
```
### Thêm hoặc sửa đổi các test:
```hash
test(validation): Thêm test cho phương thức kiểm tra định dạng email
```
### Các công việc phát triển, cập nhật công cụ:
```hash
chore(dependencies): Cập nhật phiên bản thư viện react-native-vector-icons
```

