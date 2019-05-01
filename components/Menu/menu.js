class MenuLink {
    constructor(element) {
      this.element = element;
      this.data = element.dataset;
      this.itemElement = document.querySelector(
        `.menu-item[data-tab='${element.dataset.tab}']`
      );
      this.tabItem = new MenuItem(this.itemElement);
  
      this.element.addEventListener("click", this.select.bind(this));
    }
  
    select() {
      const links = document.querySelectorAll(".menu-link");
  
      Array.from(links).forEach(link =>
        link.classList.remove("menu-link-selected")
      );
  
      this.element.classList.toggle("menu-link-selected");
  
      this.tabItem.select();
    }
  }
  
  class MenuItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll(".menu-item");
      Array.from(items).forEach(item =>
        item.classList.remove("menu-item-selected")
      );
      this.element.classList.toggle("menu-item-selected");
    }
  }
  
  links = document.querySelectorAll(".menu-link")
    .forEach(tablink => new MenuLink(tablink));