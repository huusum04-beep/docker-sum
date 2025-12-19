# 1. Chọn hệ điều hành nền (có sẵn Node.js 18 cho nhẹ)
FROM node:18-alpine

# 2. Tạo thư mục làm việc bên trong container
WORKDIR /app

# 3. Copy file danh sách thư viện vào trước
COPY package.json ./

# 4. Cài đặt thư viện (như lúc bạn gõ npm install)
RUN npm install

# 5. Copy toàn bộ code còn lại vào
COPY . .

# 6. Mở cổng 3000 (để bên ngoài truy cập được)
EXPOSE 3000

# 7. Câu lệnh chạy app khi container khởi động
CMD ["node", "index.js"]