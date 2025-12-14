import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Thành phần dinh dưỡng trong bánh gạo One One?",
      answer: "Bánh gạo One One được làm từ gạo Japonica, dầu thực vật, đường tinh luyện, tinh bột biến tính và các gia vị tự nhiên. Sản phẩm cung cấp năng lượng, carbohydrate và một lượng nhỏ chất đạm và chất béo. Chi tiết thành phần dinh dưỡng được in rõ trên bao bì từng sản phẩm."
    },
    {
      question: "Bánh gạo One One có các vị gì?",
      answer: (
        <>
          <p className="mb-4">Hiện tại One One đang có nhiều sản phẩm với nhiều hương vị khác nhau để đáp ứng nhu cầu đa dạng của bạn. Dù bạn là người thích ăn ngọt, ăn mặn hay ăn chay, bạn đều có thể tìm thấy hương vị bánh gạo One One yêu thích của mình.</p>
          <p>
            Bạn có thể nhấp vào <a href="/products" className="font-bold underline hover:text-[#da203a]">đây</a> để tham khảo tất cả dòng sản phẩm hiện có của One One nhé!
          </p>
        </>
      )
    },
    {
      question: "Mua bánh gạo One One ở đâu?",
      answer: (
         <>
           Bạn có thể mua bánh gạo One One tại hơn 140,000 điểm bán trên toàn quốc bao gồm các siêu thị lớn (WinMart, Big C, Co.op Mart...), cửa hàng tiện lợi (Circle K, FamilyMart...) và các cửa hàng tạp hóa. Ngoài ra, bạn có thể đặt mua online trên Shopee và Lazada. Xem chi tiết tại trang <a href="/where-to-buy" className="font-bold underline hover:text-[#da203a]">Mua ở đâu</a>.
         </>
      )
    },
    {
      question: "One One đang có khuyến mãi nào không?",
      answer: (
        <>
           Để cập nhật các chương trình khuyến mãi mới nhất, bạn vui lòng truy cập trang <a href="/promotion" className="font-bold underline hover:text-[#da203a]">Khuyến mãi</a> hoặc theo dõi Fanpage chính thức của One One.
        </>
      )
    },
    {
      question: "Bảo quản Bánh gạo One One như thế nào?",
      answer: "Bạn nên bảo quản bánh gạo ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sau khi mở gói, nên sử dụng ngay để đảm bảo độ giòn ngon. Nếu không ăn hết, hãy buộc kín miệng túi hoặc đựng trong hộp kín."
    },
    {
      question: "Bánh gạo One One có an toàn cho sức khỏe không?",
      answer: "Bánh gạo One One được sản xuất trên dây chuyền công nghệ hiện đại, không sử dụng chất bảo quản độc hại, không chiên qua dầu (đối với dòng bánh nướng), đảm bảo an toàn vệ sinh thực phẩm và tốt cho sức khỏe người tiêu dùng."
    },
    {
      question: "Bánh gạo One One chứa bao nhiêu calo?",
      answer: "Trung bình mỗi khẩu phần (khoảng 3-4 chiếc bánh) chứa khoảng 80-100 kcal, tùy thuộc vào từng loại hương vị cụ thể. Đây là mức calo hợp lý cho một bữa ăn nhẹ."
    },
    {
      question: "Trẻ em có ăn được bánh gạo One One?",
      answer: (
        <>
          Trẻ em hoàn toàn có thể ăn được bánh gạo One One. Tuy nhiên, đối với trẻ nhỏ dưới 2 tuổi, phụ huynh nên bẻ nhỏ bánh hoặc giám sát khi bé ăn để tránh bị hóc. Xem thêm chi tiết tại bài viết <a href="/blog/detail" className="font-bold underline hover:text-[#da203a]">Trẻ em có ăn được bánh gạo One One?</a>.
        </>
      )
    },
    {
      question: "One One có phù hợp cho người ăn kiêng?",
      answer: "Bánh gạo One One có các dòng sản phẩm ít béo, không cholesterol, phù hợp cho người đang ăn kiêng hoặc muốn kiểm soát cân nặng nếu sử dụng với lượng vừa phải. Dòng bánh gạo nướng là lựa chọn tốt cho người hạn chế dầu mỡ."
    }
  ];

  return (
    <div className="space-y-4">
        {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#124734]/20">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-[#124734] font-bold text-lg text-left hover:text-[#da203a] transition-colors"
                >
                    {faq.question}
                    {openIndex === index ? <Minus className="flex-shrink-0 ml-4" /> : <Plus className="flex-shrink-0 ml-4" />}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                    <div className="text-[#124734]/80 text-lg leading-relaxed">
                        {faq.answer}
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}
