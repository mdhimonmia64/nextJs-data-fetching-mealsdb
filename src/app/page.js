import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <section className="relative bg-gradient-to-r from-yellow-100 via-orange-50 to-red-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center py-20 gap-10">
        
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-orange-600 leading-tight">
            Delicious Meals, Delivered Fresh
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Explore our curated menu of mouth-watering dishes. Order online and enjoy
            chef-prepared meals at your doorstep. Taste the difference today!
          </p>
          
          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary px-8 py-3 text-lg">Order Now</button>
            <button className="btn btn-outline px-8 py-3 text-lg">View Menu</button>
          </div>
        </div>

        {/* Image + Cookie */}
        <div className="flex-1 relative">
          <img
            src="https://i.ibb.co.com/NnJ3G15T/himonmia.png" // replace with your food image
            alt="Delicious Food"
            className="rounded-3xl shadow-2xl w-full lg:w-[500px] object-cover"
          />

          {/* Floating badges */}
          <div className="absolute top-5 left-5 bg-yellow-200 px-4 py-2 rounded-full shadow-md text-orange-700 font-semibold animate-bounce">
            Best Seller
          </div>
          <div className="absolute bottom-5 right-5 bg-red-100 px-4 py-2 rounded-full shadow-md text-red-600 font-semibold animate-pulse">
            Fresh & Healthy
          </div>

          {/* 🍪 Cookie Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300/90 px-6 py-3 rounded-full shadow-lg border-2 border-orange-400 text-orange-700 font-bold text-lg animate-pulse flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/whK9gWxw/Screenshot-2025-12-10-120012-removebg-preview-2.jpg" // small cookie icon
              alt="Cookie"
              className="w-6 h-6"
            />
            Free Cookie!
          </div>
        </div>

      </div>
    </section>
    <div className="hover-3d">
  {/* content */}
  <figure className=" rounded-2xl">
    <img src="https://i.ibb.co.com/KxCqN7mN/65f7cf04d61902ef2302642d-Ghee.png" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </div>
  );
}
