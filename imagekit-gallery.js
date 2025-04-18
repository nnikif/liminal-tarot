export class ImageKitGallery {
  constructor(containerSelector, options = {}) {
    this.container = document.querySelector(containerSelector);
    this.baseUrl = options.baseUrl || "https://ik.imagekit.io/your_imagekit_id/";
    this.images = options.images || [];
    this.classes = options.classes || "imagekit-img";
    this.render();
  }

  render() {
    if (!this.container) {
      console.error("Container not found.");
      return;
    }

    this.container.innerHTML = ""; // Clean old illusions

    this.images.forEach((path) => {
      const img = document.createElement("img");
      img.src = `${this.baseUrl}${path}`;
      img.alt = path.split('/').pop().split('.')[0];
      img.className = this.classes;
      this.container.appendChild(img);
    });
  }
}
