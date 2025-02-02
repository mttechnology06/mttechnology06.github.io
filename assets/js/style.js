
const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Xóa lớp 'active' khỏi tất cả các nav link
    navLinks.forEach(item => item.classList.remove('active'));

    // Thêm lớp 'active' vào nav link đã được click
    this.classList.add('active');
  });
});
