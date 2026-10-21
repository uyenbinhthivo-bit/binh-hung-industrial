export interface Product {
  id: string;
  name: string;
  sku: string;
  category: "day-ben-dong" | "luoi-inox" | "dong-ma" | "gia-cong";
  categoryName: string;
  material: string;
  description: string;
  specs: Record<string, string>;
  standard: string;
  tag: string;
  badgeColor?: string;
  iconType: "copper-braid" | "mesh-inox" | "plated-copper" | "custom-fab";
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "Tất cả sản phẩm",
    slug: "all",
    description: "Toàn bộ danh mục Dây Bện Đồng, Lưới Inox & Đồng Mạ",
    count: 12,
  },
  {
    id: "day-ben-dong",
    name: "Dây Bện Đồng",
    slug: "day-ben-dong",
    description: "Dây đồng bện dẹp, bện tròn, sợi bện tiếp địa, khớp nối mềm chống rung",
    count: 4,
  },
  {
    id: "luoi-inox",
    name: "Lưới Inox",
    slug: "luoi-inox",
    description: "Lưới inox 304/316 dệt mesh, lưới hàn, lưới dập giãn, lưới lọc công nghiệp",
    count: 4,
  },
  {
    id: "dong-ma",
    name: "Đồng Mạ & Thanh Cái",
    slug: "dong-ma",
    description: "Thanh cái đồng mạ thiếc, dây đồng mạ niken chịu nhiệt, đồng lá mạ thiếc",
    count: 4,
  },
];

export const PRODUCTS: Product[] = [
  // --- NHÓM 1: DÂY BỆN ĐỒNG ---
  {
    id: "bh-dbd-01",
    name: "Dây đồng bện tiếp địa dạng dẹp (Flat Copper Braid)",
    sku: "BH-FCB-Cu99.9",
    category: "day-ben-dong",
    categoryName: "Dây Bện Đồng",
    material: "Đồng đỏ nguyên chất OFHC 99.9% (hoặc đồng mạ thiếc)",
    description: "Dệt từ các tao sợi đồng nhỏ phi 0.15 - 0.20mm đan chéo linh hoạt, độ mềm dẻo cực cao, dùng làm dây nối đất chống sét, tiếp địa tủ điện, triệt tiêu dao động cơ học.",
    specs: {
      "Tiết diện danh định": "6mm² - 120mm² (nhận dệt theo yêu cầu)",
      "Đường kính sợi con": "0.15mm / 0.20mm",
      "Độ tinh khiết đồng": "≥ 99.9% Cu",
      "Quy cách đóng gói": "Cuộn 50m / 100m hoặc cắt đoạn gia công",
    },
    standard: "TCVN / IEC 60228",
    tag: "Bán chạy nhất",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    iconType: "copper-braid",
    inStock: true,
  },
  {
    id: "bh-dbd-02",
    name: "Dây đồng bện tròn siêu mềm (Round Flexible Braid)",
    sku: "BH-RCB-Series",
    category: "day-ben-dong",
    categoryName: "Dây Bện Đồng",
    material: "Đồng đỏ ủ mềm (Annealed Copper) / Đồng mạ thiếc",
    description: "Thiết kế dạng ống bện tròn rỗng hoặc đặc ruột, khả năng uốn cong đa chiều không bị gãy gập, chuyên dụng cho dây tiếp địa di động, máy hàn điểm, cầu đấu robot.",
    specs: {
      "Tiết diện": "4mm², 10mm², 16mm², 25mm², 35mm², 50mm²",
      "Khả năng uốn cong": "Bán kính uốn tối thiểu 2D",
      "Lớp mạ bề mặt": "Đồng mộc hoặc mạ thiếc chống oxy hóa",
      "Khả năng dẫn điện": "IACS ≥ 98%",
    },
    standard: "DIN 46438 / ASTM B33",
    tag: "Chịu uốn cao",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    iconType: "copper-braid",
    inStock: true,
  },
  {
    id: "bh-dbd-03",
    name: "Khớp nối mềm đồng bện ép đầu cosse (Copper Braid Shunt)",
    sku: "BH-CBS-Custom",
    category: "day-ben-dong",
    categoryName: "Dây Bện Đồng",
    material: "Sợi đồng bện + Ống đồng đỏ ép thủy lực 2 đầu",
    description: "Gia công ép nguội cao áp 2 đầu cốt đồng nguyên khối hoặc hàn thiếc/hàn bạc, đột lỗ bu lông chính xác. Hấp thụ giãn nở nhiệt và chấn động giữa máy biến áp và busbar.",
    specs: {
      "Chiều dài (L)": "Theo bản vẽ thiết kế (100mm - 1000mm)",
      "Chiều rộng bản (W)": "20mm, 25mm, 30mm, 40mm, 50mm, 60mm, 80mm",
      "Lỗ bu lông": "Đột phi M8, M10, M12, M14, M16",
      "Số lớp bện": "1 đến 6 lớp xếp chồng (tải dòng lên tới 2500A)",
    },
    standard: "Gia công theo bản vẽ",
    tag: "Gia công theo yêu cầu",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconType: "copper-braid",
    inStock: true,
  },
  {
    id: "bh-dbd-04",
    name: "Dây đồng bện bọc ống co nhiệt chống cháy cách điện",
    sku: "BH-FCB-INSULATED",
    category: "day-ben-dong",
    categoryName: "Dây Bện Đồng",
    material: "Dây đồng bện + Ống co nhiệt Polyolefin chịu nhiệt 125°C",
    description: "Thân bện được bọc cách điện bảo vệ màu xanh-vàng (tiếp địa) hoặc đen/đỏ, chống va quẹt chạm chập và chống ăn mòn hóa chất trong môi trường công nghiệp khắc nghiệt.",
    specs: {
      "Điện áp chịu đựng": "Cách điện 600V / 1000V",
      "Nhiệt độ làm việc": "-40°C đến +125°C",
      "Màu sắc vỏ bọc": "Vàng-xanh lá (Ground), Đen, Đỏ, Trong suốt",
      "Tiêu chuẩn chống cháy": "UL 224 VW-1",
    },
    standard: "UL / RoHS Compliant",
    tag: "Cách điện an toàn",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconType: "copper-braid",
    inStock: true,
  },

  // --- NHÓM 2: LƯỚI INOX ---
  {
    id: "bh-li-01",
    name: "Lưới Inox 304 đan ô vuông tiêu chuẩn (Woven Mesh)",
    sku: "BH-SS304-MESH",
    category: "luoi-inox",
    categoryName: "Lưới Inox",
    material: "Inox SUS 304 không gỉ (chuẩn kiểm định mác thép)",
    description: "Đan trơn hoặc đan chéo từ sợi inox 304 chất lượng cao, các mắt lưới vuông vắn đồng đều, chịu nhiệt tới 800°C, không bị oxy hóa rỉ sét trong môi trường ẩm ướt.",
    specs: {
      "Quy cách ô lưới": "Từ 1 mesh (ô 25mm) đến 400 mesh (ô 0.038mm)",
      "Đường kính sợi (Wire Dia)": "0.05mm đến 2.0mm",
      "Khổ lưới tiêu chuẩn": "Khổ 1.0m / 1.2m / 1.5m x cuộn 30m",
      "Ứng dụng": "Lọc cát, lọc bột, chắn rác, sàng tuyển khoáng sản",
    },
    standard: "ASTM E2016 / ISO 9044",
    tag: "Đầy đủ quy cách",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    iconType: "mesh-inox",
    inStock: true,
  },
  {
    id: "bh-li-02",
    name: "Lưới Inox 316 siêu mịn kháng axit & hóa chất ăn mòn",
    sku: "BH-SS316-FINE",
    category: "luoi-inox",
    categoryName: "Lưới Inox",
    material: "Inox SUS 316 chứa 2-3% Molybdenum (kháng muối, axit)",
    description: "Chuyên dụng cho các nhà máy hóa chất, lọc dầu, dược phẩm, chế biến thủy hải sản và công trình biển đảo. Khả năng chống ăn mòn lỗ (pitting) vượt trội hơn hẳn Inox 304.",
    specs: {
      "Độ mịn mắt lưới": "100 mesh, 200 mesh, 300 mesh, 400 mesh, 500 mesh",
      "Thành phần Niken": "Ni: 10% - 14%, Mo: 2% - 3%",
      "Kiểu dệt": "Dệt trơn (Plain Weave) hoặc dệt đan chéo (Twill Weave)",
      "Ứng dụng": "Lọc hóa chất tinh khiết, lọc dầu nhớt, buồng vi sinh",
    },
    standard: "AISI 316 / DIN 1.4401",
    tag: "Kháng axit cao",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    iconType: "mesh-inox",
    inStock: true,
  },
  {
    id: "bh-li-03",
    name: "Lưới Inox 304 hàn chập công nghiệp (Welded Wire Mesh)",
    sku: "BH-SS304-WELD",
    category: "luoi-inox",
    categoryName: "Lưới Inox",
    material: "Sợi Inox 304 kéo bóng hàn điểm cao tần",
    description: "Mối hàn chập điện trở tiếp xúc chắc chắn, không bị xô lệch sợi khi cắt lẻ, bề mặt nhẵn bóng thẩm mỹ, độ bền kéo cơ học cực tốt.",
    specs: {
      "Kích thước ô lưới": "12x12mm, 15x15mm, 20x20mm, 25x25mm, 50x50mm",
      "Đường kính sợi (phi)": "1.0mm, 1.5mm, 2.0mm, 2.5mm, 3.0mm, 4.0mm",
      "Hình thức": "Dạng cuộn dài 30m hoặc dạng tấm phẳng 1m x 2m",
      "Ứng dụng": "Hàng rào bảo vệ máy, vách ngăn nhà xưởng, lồng giỏ chịu lực",
    },
    standard: "JIS G 3551",
    tag: "Chịu lực cao",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    iconType: "mesh-inox",
    inStock: true,
  },
  {
    id: "bh-li-04",
    name: "Lưới Inox dập giãn hình thoi (Expanded Metal Mesh)",
    sku: "BH-SS-EXPANDED",
    category: "luoi-inox",
    categoryName: "Lưới Inox",
    material: "Tấm Inox 304 dập rạch và kéo giãn",
    description: "Nguyên tấm inox liền khối được cắt dập hình mắt cáo không mối hàn, kết cấu bền chắc, thông gió và thoát nước tốt, chống trơn trượt hiệu quả.",
    specs: {
      "Độ dày tấm (T)": "0.5mm, 1.0mm, 1.5mm, 2.0mm, 3.0mm",
      "Kích thước mắt lưới (SWDxLWD)": "6x12mm, 10x20mm, 15x30mm, 22x50mm",
      "Kích thước tấm": "1m x 2m, 1.2m x 2.4m hoặc theo yêu cầu",
      "Ứng dụng": "Sàn thao tác trên cao, bậc cầu thang, mặt nạ tản nhiệt máy",
    },
    standard: "TCVN / JIS Standard",
    tag: "Chống trượt",
    badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-300",
    iconType: "mesh-inox",
    inStock: true,
  },

  // --- NHÓM 3: ĐỒNG MẠ & THANH CÁI ---
  {
    id: "bh-dm-01",
    name: "Thanh cái đồng mạ thiếc (Tin-Plated Copper Busbar)",
    sku: "BH-TPCB-C1100",
    category: "dong-ma",
    categoryName: "Đồng Mạ & Thanh Cái",
    material: "Đồng đỏ hợp kim C1100 (độ tinh khiết >99.95% Cu) + Mạ thiếc",
    description: "Thanh đồng dẹt nguyên khối phủ lớp thiếc điện phân sáng bóng, ngăn chặn hiện tượng oxy hóa xỉn đen, giảm điện trở tiếp xúc tại các mối nối thanh cái tủ điện.",
    specs: {
      "Quy cách dày x rộng": "Từ 15x3mm, 20x4mm, 30x5mm, 50x6mm đến 120x10mm",
      "Độ dày lớp mạ thiếc": "3µm - 12µm (mạ điện phân đều cả 4 mặt)",
      "Độ dẫn điện": "IACS ≥ 98% (tiêu chuẩn điện lực)",
      "Chiều dài tiêu chuẩn": "Thanh 4 mét hoặc cắt uốn đột lỗ theo bản vẽ",
    },
    standard: "JIS H3140 / ASTM B187",
    tag: "Chuẩn tủ điện MSB",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconType: "plated-copper",
    inStock: true,
  },
  {
    id: "bh-dm-02",
    name: "Dây đồng mạ niken chịu nhiệt cao (Nickel-Plated Copper Wire)",
    sku: "BH-NPC-THERMAL",
    category: "dong-ma",
    categoryName: "Đồng Mạ & Thanh Cái",
    material: "Lõi đồng đỏ OFHC + Lớp mạ niken tinh khiết liên kết kim loại",
    description: "Khả năng chịu nhiệt độ khắc nghiệt lên tới 260°C - 400°C liên tục, không bị bong tróc hay oxy hóa ở môi trường nhiệt độ cao như lò nung, sấy, động cơ máy bay.",
    specs: {
      "Quy cách đường kính": "0.10mm đến 3.0mm (dạng sợi đơn hoặc bện chùm)",
      "Độ dày lớp niken mạ": "Tối thiểu 2% - 4% trọng lượng dây",
      "Khả năng chịu nhiệt": "Làm việc bền bỉ từ -65°C đến +400°C",
      "Tính hàn thiếc": "Khả năng bám dính mối hàn tốt",
    },
    standard: "ASTM B355 / MIL-W-81044",
    tag: "Chịu nhiệt 400°C",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    iconType: "plated-copper",
    inStock: true,
  },
  {
    id: "bh-dm-03",
    name: "Đồng lá / Cuộn đồng đỏ mạ thiếc dập chi tiết (Tin-Plated Strip)",
    sku: "BH-TPS-COIL",
    category: "dong-ma",
    categoryName: "Đồng Mạ & Thanh Cái",
    material: "Đồng dẻo C1100 / C1020 mạ thiếc bề mặt",
    description: "Cung cấp dạng cuộn hoặc dải băng mỏng, độ phẳng và độ đàn hồi tuyệt hảo, dùng dập khuôn đầu cosse, lá chắn tiếp địa, chân linh kiện điện tử và giáp chống nhiễu.",
    specs: {
      "Độ dày (Thickness)": "0.05mm, 0.1mm, 0.2mm, 0.3mm, 0.5mm, 0.8mm, 1.0mm",
      "Bản rộng (Width)": "10mm đến 600mm",
      "Độ cứng": "Mềm (O), Bán cứng (1/2H), Cứng (H)",
      "Lớp phủ bảo vệ": "Mạ thiếc mờ hoặc mạ thiếc bóng",
    },
    standard: "JIS H3100 / ASTM B152",
    tag: "Dập dẻo cao",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    iconType: "plated-copper",
    inStock: true,
  },
  {
    id: "bh-dm-04",
    name: "Gia công cắt uốn & đột lỗ thanh cái đồng mạ theo bản vẽ kỹ thuật",
    sku: "BH-BUSBAR-FAB",
    category: "dong-ma",
    categoryName: "Đồng Mạ & Thanh Cái",
    material: "Thanh đồng C1100 gia công trên máy uốn CNC thủy lực",
    description: "Nhận gia công trọn gói thanh cái đồng mạ cho các đơn vị làm tủ bảng điện: cắt chính xác, uốn góc 90°, uốn chữ Z, uốn đứng, đột lỗ oval, mạ bù lại vết gia công.",
    specs: {
      "Độ dày gia công tối đa": "Đến 15mm",
      "Bản rộng gia công": "Đến 160mm",
      "Độ chính xác uốn/đột": "±0.5mm theo bản vẽ CAD/PDF",
      "Xử lý bề mặt": "Mạ thiếc bóng / mạ niken bảo vệ mối cắt",
    },
    standard: "Sản xuất theo bản vẽ CAD",
    tag: "Gia công CNC",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconType: "custom-fab",
    inStock: true,
  },
];
