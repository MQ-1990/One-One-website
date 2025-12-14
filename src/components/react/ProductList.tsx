import { useState } from "react";
// Import images normally
import imgBannerBg from "../../assets/banner-bg.png";
import imgKhoaiLangTim from "../../assets/products/khoai-lang-tim.png";
import imgSuaNgo from "../../assets/products/sua-ngo.png";
import imgPhoMaiNgo from "../../assets/products/pho-mai-ngo.png";
import imgTaoBien from "../../assets/products/tao-bien.png";
import imgBoNuongCanxi from "../../assets/products/bo-nuong-canxi.png";
import imgTomNuong from "../../assets/products/tom-nuong.png";
import imgBoNuong from "../../assets/products/bo-nuong.png";
import imgThucDuong from "../../assets/products/thuc-duong.png";
import imgNgotDiuCanxi from "../../assets/products/ngot-diu-canxi.png";
import imgNgotDiu from "../../assets/products/ngot-diu.png";
import imgPhoMaiSua from "../../assets/products/pho-mai-sua.png";
import imgBannerFamily from "../../assets/banner-family.png";
import imgBannerCanxi from "../../assets/banner-canxi.png";

type Category = "all" | "original" | "flavor" | "nutrition";

interface Product {
  id: string;
  name: string;
  image: string; // In Astro with direct imports, this is an object or string depending on config. Assuming string path or object with .src
  category: Category;
  isNew?: boolean;
}

const ALL_PRODUCTS: Product[] = [
  // ... Same data as before ...
  { id: "bo-nuong-canxi", name: "Bánh gạo vị bò nướng (+Canxi)", category: "flavor", image: imgBoNuongCanxi.src, isNew: true },
  { id: "ngot-diu-canxi", name: "Bánh gạo vị ngọt dịu (+Canxi)", category: "original", image: imgNgotDiuCanxi.src, isNew: true },
  { id: "thuc-duong", name: "Bánh gạo thực dưỡng", category: "nutrition", image: imgThucDuong.src, isNew: true },
  { id: "ngot-diu", name: "Bánh gạo vị ngọt dịu", category: "original", image: imgNgotDiu.src },
  { id: "khoai-lang-tim", name: "Bánh gạo khoai lang tím", category: "nutrition", image: imgKhoaiLangTim.src, isNew: true },
  { id: "pho-mai-sua", name: "Bánh gạo vị phô mai sữa", category: "flavor", image: imgPhoMaiSua.src },
  { id: "pho-mai-ngo", name: "Bánh gạo vị phô mai ngô", category: "flavor", image: imgPhoMaiNgo.src },
  { id: "sua-ngo", name: "Bánh gạo vị sữa ngô", category: "flavor", image: imgSuaNgo.src },
  { id: "tao-bien", name: "Bánh gạo vị tảo biển", category: "flavor", image: imgTaoBien.src },
  { id: "bo-nuong", name: "Bánh gạo vị bò nướng", category: "flavor", image: imgBoNuong.src },
  { id: "tom-nuong", name: "Bánh gạo vị tôm nướng", category: "flavor", image: imgTomNuong.src },
];

export function ProductList() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  return (
    <div className="bg-[#fff5e5] min-h-screen">
      {/* Banner */}
      <section className="relative h-[400px] lg:h-[550px] w-full mb-12">
        <img src={imgBannerBg.src} alt="Product Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-[#f3f0e4]">BÁNH GẠO ONE ONE</h2>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#f3f0e4]">Càng ăn càng ngon</h1>
        </div>
      </section>

      {/* Tabs */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 border-b border-[#124734]/10 pb-4">
            {[
                { id: "all", label: "Tất cả" },
                { id: "original", label: "Dòng Nguyên bản" },
                { id: "flavor", label: "Dòng Hương vị" },
                { id: "nutrition", label: "Dòng Dinh dưỡng" },
            ].map((tab) => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Category)}
                    className={`text-lg transition-colors relative pb-4 ${
                        activeTab === tab.id 
                        ? "text-[#124734] font-bold" 
                        : "text-[#799381] hover:text-[#124734]"
                    }`}
                >
                    {tab.label}
                    {activeTab === tab.id && (
                        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#124734] rounded-full"></div>
                    )}
                </button>
            ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-start">
              {activeTab === "all" ? (
                <>
                    {/* Row 1 */}
                    <div className="col-span-1 md:col-span-2 relative rounded-[20px] overflow-hidden group">
                        <img src={imgBannerCanxi.src} alt="Bánh gạo Canxi" className="w-full h-auto object-contain" />
                    </div>
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "bo-nuong-canxi")!} />

                    {/* Row 2 */}
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "ngot-diu-canxi")!} />
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "thuc-duong")!} />
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "ngot-diu")!} />

                    {/* Row 3 */}
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "khoai-lang-tim")!} />
                    <div className="col-span-1 md:col-span-2 relative rounded-[20px] overflow-hidden group">
                        <img src={imgBannerFamily.src} alt="Gia đình One One" className="w-full h-auto object-contain" />
                    </div>

                    {/* Row 4 */}
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "pho-mai-sua")!} />
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "pho-mai-ngo")!} />
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "sua-ngo")!} />

                    {/* Row 5 */}
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "tao-bien")!} />
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "bo-nuong")!} />
                    <ProductCard product={ALL_PRODUCTS.find(p => p.id === "tom-nuong")!} />
                </>
              ) : (
                ALL_PRODUCTS.filter(p => p.category === activeTab).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
              )}
          </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
    if (!product) return null;
    return (
        <div className="group relative flex flex-col items-center">
            <div className="relative w-full aspect-square bg-[#e7e0cd] rounded-[10px] p-8 flex items-center justify-center mb-4 transition-transform duration-300 hover:-translate-y-2">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-xl" />
                {product.isNew && (
                    <div className="absolute top-4 right-4 bg-[#a2d8cf] text-[#124734] px-4 py-1.5 rounded-[10px] font-medium text-sm shadow-sm">
                        MỚI
                    </div>
                )}
            </div>
            <div className="w-full bg-[#e7e0cd] rounded-[10px] py-4 px-4 min-h-[77px] flex items-center justify-center mb-4">
                <h3 className="text-[#124734] text-xl font-medium text-center leading-tight">
                    {product.name}
                </h3>
            </div>
            <a href={`/products/${product.id}`} className="inline-flex flex-col items-center group/btn">
                <span className="text-[#124734] font-medium mb-1 group-hover/btn:text-[#da203a] transition-colors">CHI TIẾT</span>
                <div className="w-[80px] h-px bg-[#124734] group-hover/btn:bg-[#da203a] transition-colors"></div>
            </a>
        </div>
    );
}
