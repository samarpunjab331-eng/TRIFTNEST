/* ThriftNest - Main site logic */
const STORAGE_KEYS = {
  products: "thriftnest_products",
  cart: "thriftnest_cart",
  user: "thriftnest_user",
};

const THEME = {
  primary: "#6B3E26",
  secondary: "#F5E6D3",
  accent: "#A67B5B",
  background: "#FFF8F0",
};

const INITIAL_PRODUCTS = [
  {
    id: "p1",
    name: "Vintage Denim Jacket",
    category: "Vintage",
    size: "M",
    condition: "Vintage",
    price: 68.0,
    discount: 22,
    description: "This classic denim jacket features a worn-in wash, relaxed fit, and subtle distressing for an effortless vintage vibe.",
    seller: "RetroRoots",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p2",
    name: "Oversized Graphic Hoodie",
    category: "Streetwear",
    size: "L",
    condition: "Like New",
    price: 34.99,
    discount: 18,
    description: "Cozy oversized hoodie with bold graphic print—perfect for layering in cooler weather.",
    seller: "UrbanThrift",
    images: [
      "https://images.unsplash.com/photo-1593032465175-1b87421a7385?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618401479866-6d8974d6d6e9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p3",
    name: "Retro Windbreaker",
    category: "Vintage",
    size: "M",
    condition: "Good",
    price: 42.0,
    discount: 12,
    description: "A retro windbreaker with bright panels and a cozy fleece lining—great for layering on chilly days.",
    seller: "ThriftHive",
    images: [
      "https://images.unsplash.com/photo-1582071211640-07b6d8e32ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600185364151-f7a3063ee898?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p4",
    name: "Y2K Mom Jeans",
    category: "Women's Thrift",
    size: "S",
    condition: "Good",
    price: 39.0,
    discount: 15,
    description: "High-waisted mom jeans with soft vintage fading and a relaxed silhouette.",
    seller: "EcoCloset",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p5",
    name: "Leather Biker Jacket",
    category: "Jackets",
    size: "L",
    condition: "Good",
    price: 85.0,
    discount: 30,
    description: "Classic leather biker jacket with asymmetrical zip, structured shoulders, and plenty of edge.",
    seller: "UrbanVintage",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p6",
    name: "Flannel Shirt - Rust Plaid",
    category: "Men's Thrift",
    size: "XL",
    condition: "Like New",
    price: 24.99,
    discount: 10,
    description: "Soft brushed flannel with a warm rust plaid pattern—perfect for layering.",
    seller: "SecondScene",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p7",
    name: "Corduroy Overshirt",
    category: "Men's Thrift",
    size: "M",
    condition: "Good",
    price: 32.0,
    discount: 20,
    description: "Warm corduroy overshirt with patch pockets and an easy, on-trend fit.",
    seller: "VintageVibe",
    images: [
      "https://images.unsplash.com/photo-1542060745-5735f092f844?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514995669114-6f73e9c71d51?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p8",
    name: "Graphic Band Tee",
    category: "Streetwear",
    size: "L",
    condition: "Like New",
    price: 18.5,
    discount: 5,
    description: "Soft, worn-in feel with a classic band graphic—ideal for layering under jackets.",
    seller: "MusicThreads",
    images: [
      "https://images.unsplash.com/photo-1561461180-73d9cf2b4b0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533250573027-0b6d3e0b9df6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p9",
    name: "Canvas Tote Bag",
    category: "Accessories",
    size: "One Size",
    condition: "Like New",
    price: 14.0,
    discount: 0,
    description: "Minimal canvas tote with sturdy straps—perfect for market runs or a quick thrift haul.",
    seller: "EcoThreads",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p10",
    name: "Classic Cardigan",
    category: "Women's Thrift",
    size: "S",
    condition: "Good",
    price: 29.0,
    discount: 12,
    description: "Cozy knit cardigan with a relaxed silhouette and button-down front.",
    seller: "CozyCloset",
    images: [
      "https://images.unsplash.com/photo-1542060745-5735f092f844?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542042160471-0a5320baf9a7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p11",
    name: "Cropped Sweatshirt",
    category: "Women's Thrift",
    size: "M",
    condition: "Like New",
    price: 26.0,
    discount: 8,
    description: "Soft crewneck sweatshirt with a cropped cut—great with high-waisted denim.",
    seller: "LayeredLooks",
    images: [
      "https://images.unsplash.com/photo-1659533078108-bd1685a8fcdd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543061895-1c5bde60a7fd?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p12",
    name: "Vintage Leather Belt",
    category: "Accessories",
    size: "One Size",
    condition: "Good",
    price: 15.0,
    discount: 0,
    description: "Genuine leather belt with a classic brass buckle—timeless accessory for any wardrobe.",
    seller: "FindersKeepers",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589216590214-24646a6e63b0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p13",
    name: "Wool Peacoat",
    category: "Jackets",
    size: "M",
    condition: "Good",
    price: 74.0,
    discount: 18,
    description: "Timeless wool peacoat with double-breasted buttons and a tailored fit.",
    seller: "CoatCorner",
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p14",
    name: "Patchwork Denim Skirt",
    category: "Women's Thrift",
    size: "S",
    condition: "Good",
    price: 35.0,
    discount: 14,
    description: "Unique patchwork denim skirt with a flattering A-line silhouette.",
    seller: "StyleShift",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p15",
    name: "Corduroy Bucket Hat",
    category: "Accessories",
    size: "One Size",
    condition: "Like New",
    price: 12.0,
    discount: 0,
    description: "Corduroy bucket hat with subtle stitching detail for an easy vintage look.",
    seller: "HatHabit",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p16",
    name: "High-Waisted Cargo Pants",
    category: "Streetwear",
    size: "M",
    condition: "Like New",
    price: 38.0,
    discount: 15,
    description: "Utility-inspired cargo pants with roomy pockets and a tapered leg.",
    seller: "StreetSelect",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p17",
    name: "Vintage Sweater Vest",
    category: "Men's Thrift",
    size: "L",
    condition: "Vintage",
    price: 28.0,
    discount: 20,
    description: "Preppy knit sweater vest with a timeless pattern and rich autumn tones.",
    seller: "ThriftThreads",
    images: [
      "https://images.unsplash.com/photo-1542060745-5735f092f844?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545045414-327d246d5fa8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p18",
    name: "Denim Overalls",
    category: "Women's Thrift",
    size: "M",
    condition: "Good",
    price: 44.0,
    discount: 18,
    description: "Classic denim overalls with adjustable straps and a relaxed fit.",
    seller: "Overtime",
    images: [
      "https://images.unsplash.com/photo-1617791161257-558b702f73bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600185364151-f7a3063ee898?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p19",
    name: "Faux Leather Backpack",
    category: "Accessories",
    size: "One Size",
    condition: "Like New",
    price: 45.0,
    discount: 12,
    description: "Sleek faux leather backpack with clean lines and multiple pockets for daily carry.",
    seller: "CarryAll",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519241047957-be31d7379a5e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p20",
    name: "Striped Knit Dress",
    category: "Women's Thrift",
    size: "S",
    condition: "Like New",
    price: 39.0,
    discount: 10,
    description: "Comfy knit dress with a flattering stripe pattern and casual silhouette.",
    seller: "DressDossier",
    images: [
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1471697835745-21c8c2a001d5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p21",
    name: "Retro Basketball Jersey",
    category: "Streetwear",
    size: "XL",
    condition: "Good",
    price: 29.0,
    discount: 5,
    description: "Vintage basketball jersey with bold numbers and breathable mesh.",
    seller: "CourtCollective",
    images: [
      "https://images.unsplash.com/photo-1547630446-6d2454295dbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p22",
    name: "Suede Ankle Boots",
    category: "Accessories",
    size: "One Size",
    condition: "Good",
    price: 55.0,
    discount: 18,
    description: "Soft suede ankle boots with a low block heel and vintage-inspired charm.",
    seller: "ShoeShuffle",
    images: [
      "https://images.unsplash.com/photo-1530642212274-59703d28b008?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519764625365-7a994f97e7ef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p23",
    name: "Quilted Puffer Vest",
    category: "Jackets",
    size: "M",
    condition: "Like New",
    price: 49.0,
    discount: 20,
    description: "Lightweight puffer vest with cozy quilting and a flattering silhouette.",
    seller: "LayerLife",
    images: [
      "https://images.unsplash.com/photo-1562158070-5a91d649f2bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "p24",
    name: "Tweed Blazer",
    category: "Vintage",
    size: "L",
    condition: "Good",
    price: 62.0,
    discount: 18,
    description: "Tailored tweed blazer with structured shoulders and timeless detailing.",
    seller: "BlazerBar",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

function safeParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function getStoredProducts() {
  const stored = localStorage.getItem(STORAGE_KEYS.products);
  if (!stored) return null;
  return safeParse(stored, null);
}

function setStoredProducts(products) {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
}

function initProducts() {
  const stored = getStoredProducts();
  if (!stored || !Array.isArray(stored) || stored.length < 20) {
    setStoredProducts(INITIAL_PRODUCTS);
  }
}

function getProducts() {
  return getStoredProducts() || [];
}

function getProductById(id) {
  return getProducts().find((p) => p.id === id);
}

function setCart(cart) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  updateCartCount();
}

function getCart() {
  const stored = localStorage.getItem(STORAGE_KEYS.cart);
  if (!stored) return [];
  return safeParse(stored, []);
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.querySelectorAll("#cartCount").forEach((el) => (el.textContent = count));
}

function showToast(message, options = {}) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("toast--visible");
  if (options.duration !== 0) {
    window.clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove("toast--visible");
    }, options.duration || 2200);
  }
}

function navigateWithTransition(url) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = url;
  }, 240);
}

function attachInternalLinkTransitions() {
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    const isExternal = href.startsWith("http") && !href.includes(window.location.host);
    if (isExternal) return;

    link.addEventListener("click", (event) => {
      if (link.target === "_blank") return;
      event.preventDefault();
      navigateWithTransition(link.href);
    });
  });
}

function parseQueryParams() {
  const raw = window.location.search;
  const params = new URLSearchParams(raw);
  const out = {};
  for (const [key, value] of params.entries()) {
    out[key] = value;
  }
  return out;
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function computeDiscountedPrice(item) {
  if (!item.discount) return item.price;
  return parseFloat((item.price * (1 - item.discount / 100)).toFixed(2));
}

function renderProductCard(product, options = {}) {
  const { showDiscount = true, includeButtons = true } = options;
  const price = computeDiscountedPrice(product);

  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("img");
  image.src = product.images?.[0] || "";
  image.alt = product.name;
  image.loading = "lazy";
  card.appendChild(image);

  const info = document.createElement("div");
  info.className = "product-card__info";

  const title = document.createElement("h3");
  title.className = "product-card__title";
  title.textContent = product.name;
  info.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "product-card__meta";
  meta.textContent = product.condition + " • " + product.size;
  info.appendChild(meta);

  const priceRow = document.createElement("div");
  priceRow.className = "product-card__price-row";

  const priceText = document.createElement("span");
  priceText.className = "product-card__price";
  priceText.textContent = formatCurrency(price);
  priceRow.appendChild(priceText);

  if (showDiscount && product.discount && product.discount > 0) {
    const oldPrice = document.createElement("span");
    oldPrice.className = "product-card__old-price";
    oldPrice.textContent = formatCurrency(product.price);
    priceRow.appendChild(oldPrice);

    const discountBadge = document.createElement("span");
    discountBadge.className = "product-card__discount";
    discountBadge.textContent = `${product.discount}% off`;
    info.appendChild(discountBadge);
  }

  info.appendChild(priceRow);
  card.appendChild(info);

  const actions = document.createElement("div");
  actions.className = "product-card__actions";

  const viewBtn = document.createElement("button");
  viewBtn.type = "button";
  viewBtn.className = "btn btn--ghost";
  viewBtn.textContent = "View";
  viewBtn.addEventListener("click", () => {
    navigateWithTransition(`product.html?id=${encodeURIComponent(product.id)}`);
  });
  actions.appendChild(viewBtn);

  if (includeButtons) {
    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn btn--primary";
    addBtn.textContent = "Add to cart";
    addBtn.addEventListener("click", () => {
      addToCart(product.id);
    });
    actions.appendChild(addBtn);
  }

  card.appendChild(actions);
  return card;
}

function randomizeArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function renderHomeSections() {
  const products = getProducts();
  const trending = randomizeArray(products).slice(0, 8);
  const recommended = randomizeArray(products).slice(4, 12);

  const trendingContainer = document.getElementById("trendingProducts");
  const recommendedContainer = document.getElementById("recommendedProducts");
  if (!trendingContainer || !recommendedContainer) return;

  trendingContainer.innerHTML = "";
  recommendedContainer.innerHTML = "";

  trending.forEach((product) => {
    trendingContainer.appendChild(renderProductCard(product, { showDiscount: true, includeButtons: true }));
  });

  recommended.forEach((product) => {
    recommendedContainer.appendChild(renderProductCard(product, { showDiscount: true, includeButtons: true }));
  });
}

function collectFilterValues() {
  const form = document.getElementById("filterForm");
  if (!form) return {};

  const data = new FormData(form);
  const category = data.get("category") || "";
  const sizes = data.getAll("size");
  const conditions = data.getAll("condition");
  const maxPrice = parseFloat(data.get("priceRange") || "0") || 0;
  const query = parseQueryParams().q || "";
  const categoryParam = parseQueryParams().category || "";
  return { category: category || categoryParam, sizes, conditions, maxPrice, query };
}

function applyFilters(products) {
  const { category, sizes, conditions, maxPrice, query } = collectFilterValues();
  return products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesSize = sizes.length === 0 || sizes.includes(product.size);
    const matchesCondition = conditions.length === 0 || conditions.includes(product.condition);
    const price = computeDiscountedPrice(product);
    const matchesPrice = !maxPrice || price <= maxPrice;

    const normalizedQuery = (query || "").trim().toLowerCase();
    const matchesQuery =
      !normalizedQuery ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery) ||
      product.seller.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSize && matchesCondition && matchesPrice && matchesQuery;
  });
}

function renderProductsPage() {
  const grid = document.getElementById("productGrid");
  const resultsCount = document.getElementById("resultsCount");
  if (!grid) return;

  const products = applyFilters(getProducts());

  const sortSelect = document.getElementById("sortSelect");
  const sortValue = sortSelect?.value || "popular";
  const sorted = [...products];
  if (sortValue === "priceLow") {
    sorted.sort((a, b) => computeDiscountedPrice(a) - computeDiscountedPrice(b));
  } else if (sortValue === "priceHigh") {
    sorted.sort((a, b) => computeDiscountedPrice(b) - computeDiscountedPrice(a));
  } else {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  grid.innerHTML = "";
  if (sorted.length === 0) {
    grid.innerHTML = "<p class='empty-state'>No matches found. Try broadening your filters.</p>";
  } else {
    sorted.forEach((product) => {
      grid.appendChild(renderProductCard(product, { showDiscount: true, includeButtons: true }));
    });
  }

  if (resultsCount) {
    resultsCount.textContent = `Showing ${sorted.length} products`;
  }
}

function initFilterControls() {
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  if (priceRange && priceValue) {
    priceValue.textContent = `$${priceRange.value}`;
    priceRange.addEventListener("input", () => {
      priceValue.textContent = `$${priceRange.value}`;
    });
  }

  const form = document.getElementById("filterForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderProductsPage();
    });

    form.addEventListener("reset", () => {
      setTimeout(() => {
        if (priceRange && priceValue) {
          priceValue.textContent = `$${priceRange.value}`;
        }
        renderProductsPage();
      }, 10);
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      renderProductsPage();
    });
  }
}

function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) {
    showToast("Product not found.");
    return;
  }

  const cart = getCart();
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty });
  }

  setCart(cart);
  showToast(`Added "${product.name}" to cart`);
}

function renderCartPage() {
  const cartItemsContainer = document.getElementById("cartItems");
  const summaryItems = document.getElementById("summaryItems");
  const summaryTotal = document.getElementById("summaryTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (!cartItemsContainer || !summaryItems || !summaryTotal || !checkoutBtn) return;

  const cart = getCart();
  const products = getProducts();

  cartItemsContainer.innerHTML = "";

  let total = 0;
  let itemCount = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p class='empty-state'>Your cart is empty. Start adding thrift finds!</p>";
    summaryItems.textContent = "0";
    summaryTotal.textContent = "$0.00";
    checkoutBtn.disabled = true;
    return;
  }

  cart.forEach((cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    if (!product) return;

    const price = computeDiscountedPrice(product);
    const itemTotal = price * cartItem.quantity;
    total += itemTotal;
    itemCount += cartItem.quantity;

    const row = document.createElement("div");
    row.className = "cart-row";

    const imageWrap = document.createElement("div");
    imageWrap.className = "cart-row__image";
    const img = document.createElement("img");
    img.src = product.images?.[0] || "";
    img.alt = product.name;
    img.loading = "lazy";
    imageWrap.appendChild(img);

    const details = document.createElement("div");
    details.className = "cart-row__details";
    const title = document.createElement("h3");
    title.textContent = product.name;
    details.appendChild(title);
    const meta = document.createElement("p");
    meta.textContent = `${product.condition} • ${product.size}`;
    details.appendChild(meta);
    const priceLabel = document.createElement("p");
    priceLabel.className = "cart-row__price";
    priceLabel.textContent = `${formatCurrency(price)} each`;
    details.appendChild(priceLabel);

    const actions = document.createElement("div");
    actions.className = "cart-row__actions";
    const qty = document.createElement("div");
    qty.className = "counter";

    const decrement = document.createElement("button");
    decrement.type = "button";
    decrement.className = "counter__btn";
    decrement.textContent = "−";
    decrement.addEventListener("click", () => {
      updateCartQuantity(product.id, cartItem.quantity - 1);
    });

    const qtyLabel = document.createElement("span");
    qtyLabel.className = "counter__value";
    qtyLabel.textContent = cartItem.quantity;

    const increment = document.createElement("button");
    increment.type = "button";
    increment.className = "counter__btn";
    increment.textContent = "+";
    increment.addEventListener("click", () => {
      updateCartQuantity(product.id, cartItem.quantity + 1);
    });

    qty.appendChild(decrement);
    qty.appendChild(qtyLabel);
    qty.appendChild(increment);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "btn btn--ghost btn--small";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      removeFromCart(product.id);
    });

    actions.appendChild(qty);
    actions.appendChild(remove);

    const rightSide = document.createElement("div");
    rightSide.className = "cart-row__right";
    const totalLabel = document.createElement("p");
    totalLabel.className = "cart-row__total";
    totalLabel.textContent = formatCurrency(itemTotal);
    rightSide.appendChild(totalLabel);
    rightSide.appendChild(actions);

    row.appendChild(imageWrap);
    row.appendChild(details);
    row.appendChild(rightSide);

    cartItemsContainer.appendChild(row);
  });

  summaryItems.textContent = itemCount.toString();
  summaryTotal.textContent = formatCurrency(total);
  checkoutBtn.disabled = false;
  checkoutBtn.addEventListener("click", () => {
    setCart([]);
    renderCartPage();
    showToast("Order placed! Your cart is now empty.");
  });
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.productId === productId);
  if (index === -1) return;
  if (quantity <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = quantity;
  }
  setCart(cart);
  renderCartPage();
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.productId !== productId);
  setCart(cart);
  renderCartPage();
  showToast("Item removed from cart");
}

function renderProductDetails() {
  const params = parseQueryParams();
  const productId = params.id;
  const product = getProductById(productId);
  if (!product) {
    const wrapper = document.querySelector(".product-detail__wrapper");
    if (wrapper) {
      wrapper.innerHTML = "<p class='empty-state'>We couldn't find that product. Try browsing the shop.</p>";
    }
    return;
  }

  const title = document.getElementById("productTitle");
  const mainImg = document.getElementById("productPrimaryImage");
  const thumbs = document.getElementById("productThumbnails");
  const condition = document.getElementById("productCondition");
  const price = document.getElementById("productPrice");
  const size = document.getElementById("productSize");
  const seller = document.getElementById("productSeller");
  const description = document.getElementById("productDescription");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const buyNowBtn = document.getElementById("buyNowBtn");

  title.textContent = product.name;
  condition.textContent = product.condition;
  price.textContent = formatCurrency(computeDiscountedPrice(product));
  size.textContent = `Size: ${product.size}`;
  seller.textContent = `Seller: ${product.seller}`;
  description.textContent = product.description;

  if (product.images?.length) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
    thumbs.innerHTML = "";
    product.images.forEach((src) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "thumbnail";
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Thumbnail";
      button.appendChild(img);
      button.addEventListener("click", () => {
        mainImg.src = src;
      });
      thumbs.appendChild(button);
    });
  }

  addToCartBtn.addEventListener("click", () => {
    addToCart(product.id);
  });

  buyNowBtn.addEventListener("click", () => {
    addToCart(product.id);
    navigateWithTransition("cart.html");
  });
}

function initSellForm() {
  const form = document.getElementById("sellForm");
  if (!form) return;

  const imageInput = document.getElementById("productImage");
  const imagePreview = document.getElementById("imagePreview");
  let uploadedImage = "";

  imageInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      uploadedImage = "";
      imagePreview.innerHTML = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImage = reader.result;
      imagePreview.innerHTML = `<img src='${uploadedImage}' alt='Preview' />`;
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("productName").value.trim();
    const category = document.getElementById("productCategory").value;
    const size = document.getElementById("productSize").value;
    const condition = document.getElementById("productCondition").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const description = document.getElementById("productDescription").value.trim();

    if (!name || !category || !size || !condition || !price || !description) {
      showToast("Fill in all fields before submitting.");
      return;
    }

    const products = getProducts();
    const newProduct = {
      id: `p-${Date.now()}`,
      name,
      category,
      size,
      condition,
      price,
      discount: 0,
      description,
      seller: "You",
      images: uploadedImage ? [uploadedImage] : ["https://images.unsplash.com/photo-1520975919979-7104b22425e1?auto=format&fit=crop&w=1200&q=80"],
    };

    products.unshift(newProduct);
    setStoredProducts(products);
    form.reset();
    imagePreview.innerHTML = "";
    showToast("Your item is live! It shows up in the shop now.");
    setTimeout(() => {
      navigateWithTransition("products.html");
    }, 500);
  });
}

function initAuth() {
  const currentUser = getCurrentUser();
  const authButton = document.getElementById("authButton");
  const authButtonMobile = document.getElementById("authButtonMobile");

  function updateButtons() {
    const user = getCurrentUser();
    const label = user ? `Hi, ${user.username}` : "Login";
    const href = user ? "#" : "login.html";
    const title = user ? "Logout" : "Login";
    if (authButton) {
      authButton.textContent = label;
      authButton.href = href;
      authButton.title = title;
      if (user) {
        authButton.addEventListener("click", (event) => {
          event.preventDefault();
          logout();
        });
      }
    }
    if (authButtonMobile) {
      authButtonMobile.textContent = label;
      authButtonMobile.href = href;
      authButtonMobile.title = title;
      if (user) {
        authButtonMobile.addEventListener("click", (event) => {
          event.preventDefault();
          logout();
        });
      }
    }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEYS.user);
    showToast("Logged out");
    setTimeout(() => {
      window.location.reload();
    }, 400);
  }

  updateButtons();

  const tabButtons = document.querySelectorAll(".auth-tab");
  const authForms = document.querySelectorAll(".auth-form");
  tabButtons.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabButtons.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.target;
      authForms.forEach((form) => {
        form.hidden = form.dataset.pane !== target;
      });
    });
  });

  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("registerUsername").value.trim();
      const password = document.getElementById("registerPassword").value;
      const confirm = document.getElementById("registerConfirm").value;
      if (!username || !password || !confirm) {
        showToast("Fill in all fields.");
        return;
      }
      if (password !== confirm) {
        showToast("Passwords do not match.");
        return;
      }

      const users = getStoredUsers();
      if (users[username]) {
        showToast("Username already exists.");
        return;
      }

      users[username] = { username, password };
      localStorage.setItem("thriftnest_users", JSON.stringify(users));
      setCurrentUser({ username });
      showToast("Account created! You are now logged in.");
      setTimeout(() => {
        navigateWithTransition("index.html");
      }, 600);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value;
      if (!username || !password) {
        showToast("Enter username and password.");
        return;
      }
      const users = getStoredUsers();
      if (!users[username] || users[username].password !== password) {
        showToast("Invalid login.");
        return;
      }

      setCurrentUser({ username });
      showToast("Welcome back!");
      setTimeout(() => {
        navigateWithTransition("index.html");
      }, 600);
    });
  }
}

function getStoredUsers() {
  const stored = localStorage.getItem("thriftnest_users");
  return safeParse(stored, {});
}

function setCurrentUser(user) {
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

function getCurrentUser() {
  const stored = localStorage.getItem(STORAGE_KEYS.user);
  return safeParse(stored, null);
}

function initSearchForms() {
  const searchForms = document.querySelectorAll("#searchForm, #mobileSearchForm");
  searchForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input[type='search']");
      const query = input?.value.trim();
      if (!query) return;
      navigateWithTransition(`products.html?q=${encodeURIComponent(query)}`);
    });
  });

  const query = parseQueryParams().q;
  if (query) {
    const searchInputs = document.querySelectorAll("input[type='search']");
    searchInputs.forEach((input) => {
      input.value = query;
    });
  }
}

function initCategoryDropdown() {
  const dropdown = document.getElementById("categoryDropdown");
  if (!dropdown) return;
  const items = dropdown.querySelectorAll(".dropdown__item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;
      if (!category) return;
      navigateWithTransition(`products.html?category=${encodeURIComponent(category)}`);
    });
  });
}

function initNewsletterForms() {
  document.querySelectorAll("#newsletterForm").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (!input) return;
      const email = input.value.trim();
      if (!email) {
        showToast("Enter a valid email.");
        return;
      }
      input.value = "";
      showToast("Subscribed! We will send you updates.");
    });
  });
}

function initMobileNav() {
  const toggle = document.getElementById("mobileMenuToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (!toggle || !mobileNav) return;
  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav--open");
  });

  document.addEventListener("click", (event) => {
    if (!mobileNav.contains(event.target) && !toggle.contains(event.target)) {
      mobileNav.classList.remove("mobile-nav--open");
    }
  });
}

function initPageTransition() {
  document.body.classList.add("fade-in");
}

function initCurrentYear() {
  const yearElem = document.getElementById("currentYear");
  if (yearElem) yearElem.textContent = new Date().getFullYear();
}

function init() {
  initProducts();
  updateCartCount();
  initPageTransition();
  initSearchForms();
  initCategoryDropdown();
  initAuth();
  initNewsletterForms();
  initMobileNav();
  attachInternalLinkTransitions();
  initCurrentYear();

  // Page-specific
  if (document.getElementById("trendingProducts")) {
    renderHomeSections();
  }

  if (document.getElementById("productGrid")) {
    initFilterControls();
    renderProductsPage();
  }

  if (document.querySelector(".product-detail")) {
    renderProductDetails();
  }

  if (document.getElementById("sellForm")) {
    initSellForm();
  }

  if (document.getElementById("cartItems")) {
    renderCartPage();
  }
}

window.addEventListener("DOMContentLoaded", init);
