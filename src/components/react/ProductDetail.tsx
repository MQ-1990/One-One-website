import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Assuming these are available or passed in. For now I'll use placeholders.
// In a real app, pass the product data as props.
export function ProductDetail({ product }: { product: any }) {
  const [openSection, setOpenSection] = useState<string | null>("nutrition");

  const toggleSection = (section: string) => {
      setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 relative">
       {/* Left: Scrollable Images */}
       <div className="w-full lg:w-1/2 flex flex-col gap-8">
           <div className="w-full aspect-square rounded-[20px] overflow-hidden bg-white shadow-sm">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
           </div>
           <div className="grid grid-cols-2 gap-8">
               <div className="aspect-square rounded-[20px] overflow-hidden bg-white shadow-sm">
                  <img src={product.image} alt="Detail 1" className="w-full h-full object-cover scale-150" />
               </div>
               <div className="aspect-square rounded-[20px] overflow-hidden bg-white shadow-sm">
                  <img src={product.image} alt="Detail 2" className="w-full h-full object-cover scale-125" />
               </div>
           </div>
       </div>

       {/* Right: Sticky Info */}
       <div className="w-full lg:w-1/2">
           <div className="lg:sticky lg:top-[150px]">
               <h2 className="text-[#124734] font-bold text-lg mb-2 uppercase tracking-wide">THƠM GIÒN NGON KHỎE, CẢ NHÀ CÙNG MÊ</h2>
               <h1 className="text-[#124734] text-5xl lg:text-6xl font-normal mb-8 leading-tight">{product.name}</h1>
               
               <p className="text-[#124734] text-lg font-light leading-relaxed mb-12">
                   {product.description || "Bánh Gạo One One được làm từ những nguyên liệu tự nhiên, mang lại hương vị thơm ngon và đảm bảo an toàn cho sức khỏe."}
               </p>

               <div className="border-t border-[#124734] py-6">
                   <div className="flex justify-between items-center mb-4">
                       <span className="font-medium text-[#124734]">Kích thước đóng gói:</span>
                       <span className="font-bold text-black">120G | 200G</span>
                   </div>
               </div>

               {/* Accordion Sections */}
               <div className="border-t border-[#124734]">
                   {/* Ingredients */}
                   <div className="border-b border-[#124734]">
                       <button 
                        onClick={() => toggleSection("ingredients")}
                        className="w-full py-6 flex justify-between items-center text-[#124734] font-medium text-lg text-left"
                       >
                           THÀNH PHẦN
                           {openSection === "ingredients" ? <Minus /> : <Plus />}
                       </button>
                       {openSection === "ingredients" && (
                           <div className="pb-6 text-[#124734]/80 leading-relaxed animate-in slide-in-from-top-2">
                               Gạo (58.8%), Dầu thực vật, Đường tinh luyện, Tinh bột biến tính (INS 1420), Muối tinh, Gelatin.
                           </div>
                       )}
                   </div>

                   {/* Nutrition */}
                   <div className="border-b border-[#124734]">
                       <button 
                        onClick={() => toggleSection("nutrition")}
                        className="w-full py-6 flex justify-between items-center text-[#124734] font-medium text-lg text-left"
                       >
                           GIÁ TRỊ DINH DƯỠNG
                           {openSection === "nutrition" ? <Minus /> : <Plus />}
                       </button>
                       {openSection === "nutrition" && (
                           <div className="pb-6 animate-in slide-in-from-top-2">
                               <div className="bg-white rounded-xl p-6 shadow-sm">
                                   <div className="grid grid-cols-3 gap-4 mb-4 font-bold text-[#124734] border-b pb-2">
                                       <span>Chỉ số dinh dưỡng</span>
                                       <span>Định lượng</span>
                                       <span>% Giá trị hàng ngày</span>
                                   </div>
                                   <div className="grid grid-cols-3 gap-4 mb-2 text-[#124734]">
                                       <span className="font-medium">Tổng chất béo</span>
                                       <span>13.5g</span>
                                       <span className="font-bold">20.8%</span>
                                   </div>
                                   <div className="grid grid-cols-3 gap-4 text-[#124734]/80">
                                       <span>Chất béo bão hòa</span>
                                       <span>6.2g</span>
                                       <span>31.0%</span>
                                   </div>
                               </div>
                           </div>
                       )}
                   </div>

                   {/* Storage */}
                   <div className="border-b border-[#124734]">
                       <button 
                        onClick={() => toggleSection("storage")}
                        className="w-full py-6 flex justify-between items-center text-[#124734] font-medium text-lg text-left"
                       >
                           HƯỚNG DẪN BẢO QUẢN
                           {openSection === "storage" ? <Minus /> : <Plus />}
                       </button>
                       {openSection === "storage" && (
                           <div className="pb-6 text-[#124734]/80 leading-relaxed animate-in slide-in-from-top-2">
                               Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
                           </div>
                       )}
                   </div>
                   
                   {/* Usage */}
                   <div className="border-b border-[#124734]">
                       <button 
                        onClick={() => toggleSection("usage")}
                        className="w-full py-6 flex justify-between items-center text-[#124734] font-medium text-lg text-left"
                       >
                           HƯỚNG DẪN SỬ DỤNG
                           {openSection === "usage" ? <Minus /> : <Plus />}
                       </button>
                       {openSection === "usage" && (
                           <div className="pb-6 text-[#124734]/80 leading-relaxed animate-in slide-in-from-top-2">
                               Sản phẩm ăn liền, không cần chế biến thêm. Sử dụng ngay sau khi mở gói để đảm bảo độ giòn ngon.
                           </div>
                       )}
                   </div>
               </div>

           </div>
       </div>
    </div>
  );
}
