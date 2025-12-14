import { useState, useEffect } from "react";
import { ArrowRight, Search } from "lucide-react";
// Placeholder images - in real implementation, pass these as props or use a data store
// For now, I will use placeholders to avoid complex asset path passing if possible, 
// or I will assume the assets are available. 
// Ideally, search data should come from an API or a JSON file.
// I'll create a mock data set here.

const MOCK_DATA = {
    products: [
        { id: "vi-sua-ngo", name: "Bánh gạo vị sữa ngô", image: "/assets/products/sua-ngo.png" },
        { id: "vi-pho-mai-ngo", name: "Bánh gạo vị phô mai ngô", image: "/assets/products/pho-mai-ngo.png" },
        { id: "vi-pho-mai-sua", name: "Bánh gạo vị phô mai sữa", image: "/assets/products/pho-mai-sua.png" },
        { id: "vi-bo-nuong", name: "Bánh gạo vị bò nướng", image: "/assets/products/bo-nuong.png" },
        { id: "vi-tao-bien", name: "Bánh gạo vị tảo biển", image: "/assets/products/tao-bien.png" },
    ],
    blogs: [
        { id: 1, title: "Bánh gạo One One và hành trình phát triển bền vững", image: "/assets/blog-1.png" },
        { id: 2, title: "Phản hồi từ người tiêu dùng: Bánh gạo One One có gì đặc biệt?", image: "/assets/blog-2.png" },
        { id: 3, title: "Trẻ Em Có Ăn Được Bánh Gạo One One Không?", image: "/assets/blog-3.png" },
    ],
    pages: [
        { id: 1, title: "Câu chuyện One One", image: "/assets/about-banner.png", link: "/our-story" },
        { id: 2, title: "Khuyến mãi", image: "/assets/promo-banner.png", link: "/promotion" },
    ]
};

export function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Get query param from URL
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setSearchTerm(q);
    setQuery(q);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(searchTerm);
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set("q", searchTerm);
    window.history.pushState({}, "", url);
  };

  // Filter logic
  const filteredProducts = MOCK_DATA.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  const filteredBlogs = MOCK_DATA.blogs.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));
  const filteredPages = MOCK_DATA.pages.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
      <>
        {/* Search Bar Section */}
        <section className="relative h-[350px] bg-[#124734] w-full mb-12 flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#f3f0e4] uppercase tracking-wide mb-8 text-center">
                KẾT QUẢ TÌM KIẾM
            </h1>
            
            <form onSubmit={handleSearch} className="w-full max-w-2xl relative">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="bánh gạo vị..."
                    className="w-full bg-transparent border border-[#799381] text-white placeholder-[#799381] rounded-full px-8 py-4 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-lg"
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#799381] hover:text-white transition-colors">
                    <ArrowRight size={24} />
                </button>
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 text-[#799381]">
                    <Search size={24} />
                </div>
            </form>
        </section>

        {/* Results Content */}
        <div className="container mx-auto px-4 pb-20 space-y-20">
            
            {/* Products Section */}
            {filteredProducts.length > 0 && (
                <section>
                    <h2 className="text-[#124734] text-4xl font-bold text-center mb-12">Sản phẩm</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-[#e7e0cd] rounded-[20px] mb-6 p-8 relative group cursor-pointer">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="bg-[#e7e0cd] rounded-[10px] w-full py-4 px-6 text-center mb-4 min-h-[80px] flex items-center justify-center">
                                    <h3 className="text-[#124734] text-xl font-medium">{product.name}</h3>
                                </div>
                                <a 
                                    href={`/products/${product.id}`} 
                                    className="group flex flex-col items-center text-[#124734] font-medium hover:text-[#da203a] transition-colors"
                                >
                                    <span className="uppercase tracking-wide">CHI TIẾT</span>
                                    <span className="w-16 h-[1px] bg-[#124734] mt-1 group-hover:w-24 group-hover:bg-[#da203a] transition-all"></span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Blogs Section */}
            {filteredBlogs.length > 0 && (
                <section>
                    <h2 className="text-[#124734] text-4xl font-bold text-center mb-12">Blog/Tìm hiểu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog) => (
                            <a href="/blog/detail" key={blog.id} className="group block">
                                <div className="rounded-[10px] overflow-hidden aspect-[4/3] mb-4">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h3 className="text-[#124734] text-xl text-center font-medium group-hover:text-[#da203a] transition-colors px-4">
                                    {blog.title}
                                </h3>
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* Pages Section */}
            {filteredPages.length > 0 && (
                <section>
                    <h2 className="text-[#124734] text-4xl font-bold text-center mb-12">Trang nội dung</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {filteredPages.map((page) => (
                            <a href={page.link} key={page.id} className="group block">
                                <div className="rounded-[10px] overflow-hidden aspect-[4/3] mb-4">
                                    <img src={page.image} alt={page.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h3 className="text-[#124734] text-xl text-center font-medium group-hover:text-[#da203a] transition-colors px-4">
                                    {page.title}
                                </h3>
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* No Results State */}
            {filteredProducts.length === 0 && filteredBlogs.length === 0 && filteredPages.length === 0 && (
                <div className="text-center text-[#124734] py-20">
                    <p className="text-2xl mb-4">Không tìm thấy kết quả nào cho "{query}"</p>
                    <p className="text-lg opacity-80">Vui lòng thử lại với từ khóa khác.</p>
                </div>
            )}
        </div>
      </>
  );
}
