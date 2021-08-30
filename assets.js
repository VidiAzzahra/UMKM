class Myheader extends HTMLElement {
  connectedCallback() {
      this.innerHTML =  
      `<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
            Halo UMKM
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="produk.html">Produk</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="kontak.html">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
  }
}

customElements.define("my-header", Myheader);



class Myfooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML =  
      `<footer class="text-muted bg-dark mt-5" style="padding: 20px 0; background-color: #333; color: #fff;">
          <div class="container text-light">
            <p class="float-right">
              <a href="#" class="btn btn-warning">Back to top</a>
            </p>
            <p>Copyright 2021 © Kelompok 1</p>
          </div>        
        </footer>`
  }
}

customElements.define("my-footer", Myfooter);