"use client";
import React, { useState } from "react";

const whatsappLink = "https://wa.me/5492617025691?text=";
const ADMIN_PASSWORD = "RicoRico220125";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [logged, setLogged] = useState(false);

  const [products, setProducts] = useState({
    donas: [
      { name: "Donitas Simples", price: 4000, img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4c" },
      { name: "Donitas Chocolate", price: 4400, img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec" },
      { name: "Donitas Oreo", price: 5000, img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Donitas Coco", price: 4500, img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4c" },
      { name: "Donitas Rocklets", price: 4800, img: "https://images.unsplash.com/photo-1612203985729-70726954388b" },
      { name: "Donitas Crocantes", price: 4700, img: "https://images.unsplash.com/photo-1589308078054-8329a0a6a9f2" },
      { name: "Donitas Glaseadas", price: 4400, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
      { name: "Donitas Saborizadas", price: 4500, img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec" },
    ],

    alfajores: [
      { name: "Alfajores Maicena", price: 5000, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
      { name: "Alfajores Chocolate", price: 8500, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
      { name: "Alfajores Chips", price: 7000, img: "https://images.unsplash.com/photo-1612197527888-7c6b9b6b7b1b" },
    ],

    galletas: [
      { name: "Galletas Chips Chocolate", price: 3000, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },
      { name: "Galletas Bañadas Chocolate", price: 4000, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
      { name: "Galletas Saborizadas", price: 2700, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35" },
      { name: "Galletas Marmoladas", price: 3200, img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1a" },
    ],

    bizcochuelos: [
      { name: "Bizcochuelo Marmolado", price: 9500, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
      { name: "Bizcochuelo Mandarina", price: 9500, img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75" },
      { name: "Bizcochuelo Limón", price: 9500, img: "https://images.unsplash.com/photo-1605478371310-a9f1e96c0a3a" },
      { name: "Bizcochuelo Chocolate", price: 9500, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
    ],

    budines: [
      { name: "Budín Marmolado", price: 9500, img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75" },
      { name: "Budín Mandarina", price: 9500, img: "https://images.unsplash.com/photo-1612197527888-7c6b9b6b7b1b" },
      { name: "Budín Limón", price: 9500, img: "https://images.unsplash.com/photo-1605478371310-a9f1e96c0a3a" },
      { name: "Budín Chocolate", price: 9500, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
    ],

    magdalenas: [
      { name: "Magdalena Chips Chocolate", price: 5000, img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec" },
      { name: "Magdalena Chocolate", price: 5000, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
      { name: "Magdalena Vainilla", price: 5000, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35" },
    ],
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "donas",
  });

  const loginAdmin = () => {
    const pass = prompt("Contraseña admin");
    if (pass === ADMIN_PASSWORD) {
      setLogged(true);
      setIsAdmin(true);
    }
  };

  const addToCart = (item) => setCart([...cart, item]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const sendWhatsApp = () => {
    const text = `Pedido:\n${cart
      .map((i) => "- " + i.name)
      .join("\n")}\nTotal: $${total}`;

    window.open(`${whatsappLink}${encodeURIComponent(text)}`, "_blank");
  };

  const updatePrice = (cat, index, value) => {
    const updated = { ...products };
    updated[cat][index].price = Number(value);
    setProducts(updated);
  };

  const deleteProduct = (cat, index) => {
    const updated = { ...products };
    updated[cat].splice(index, 1);
    setProducts(updated);
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;

    const updated = { ...products };

    updated[newProduct.category].push({
      name: newProduct.name,
      price: Number(newProduct.price),
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    });

    setProducts(updated);
    setNewProduct({ name: "", price: "", category: "donas" });
  };

  return (
    <div className="min-h-screen bg-pink-50">

      <div className="bg-pink-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">🍩 RICORICO</h1>

        <button
          onClick={sendWhatsApp}
          className="bg-white text-pink-600 px-4 py-2 mt-3 rounded"
        >
          Pedido (${total})
        </button>
      </div>

      {!isAdmin && (
        <button
          onClick={loginAdmin}
          className="fixed top-4 right-4 bg-yellow-400 px-3 py-1"
        >
          Admin
        </button>
      )}

      {/* PRODUCTOS */}
      <div className="p-4">
        {Object.entries(products).map(([cat, items]) => (
          <div key={cat}>
            <h2 className="text-xl font-bold text-pink-600">{cat}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((p, i) => (
                <div key={i} className="bg-white p-3 rounded shadow">

                  <img
                    src={p.img}
                    className="h-28 w-full object-cover rounded mb-2"
                  />

                  <p className="font-bold">{p.name}</p>
                  <p>${p.price}</p>

                  <button
                    onClick={() => addToCart(p)}
                    className="bg-pink-500 text-white w-full mt-2"
                  >
                    Agregar
                  </button>

                  {isAdmin && (
                    <>
                      <input
                        type="number"
                        value={p.price}
                        onChange={(e) =>
                          updatePrice(cat, i, e.target.value)
                        }
                        className="border w-full mt-1"
                      />

                      <button
                        onClick={() => deleteProduct(cat, i)}
                        className="bg-red-500 text-white w-full mt-1"
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}