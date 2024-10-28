  const images = document.getElementsByClassName(".img");

  let index = 0;

  function show() {
    // Ẩn tất cả các hình ảnh
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }

    // Hiển thị hình ảnh hiện tại
    images[index].classList.remove("hidden");

    // Hiển thị hình ảnh kế tiếp
    let nextIndex = (index + 1) % images.length;
    images[nextIndex].classList.remove("hidden");

    // Hiển thị hình ảnh trước đó
    let prevIndex = (index - 1 + images.length) % images.length;
    images[prevIndex].classList.remove("hidden");
  }
  
  function next() {
    index = (index + 1) % images.length;
    show();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    show();
  }

  // Gọi show() để hiển thị hình ảnh ban đầu
  show();