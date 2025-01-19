// تفعيل الشريط الجانبي
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('closed');
}

// إظهار المنتجات عند النقر على فئة معينة
function showCategory(category) {
  const sections = document.querySelectorAll('.product-grid');
  sections.forEach(section => {
    section.style.display = section.id === category ? 'grid' : 'none';
  });
}

// وظيفة البحث
function searchProducts() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');
  let found = false;

  products.forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = 'block';
      found = true;
    } else {
      product.style.display = 'none';
    }
  });

  if (!found) {
    alert('No products match your search.');
  }
}

// وظيفة شراء المنتجات
function buyNow() {
  window.open('https://wa.me/0645452403', '_blank');
}
