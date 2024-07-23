/*
  hình ảnh: bỏ hình ảnh vào thư mục images, rồi nhúng như bên dưới
  
  trạng thái: 
  - 0: Đã hoàn thành
  - 1: Đang thực hiện
  - 2: Tạm dừng
  - 3: Hoãn vô thời hạn
  - số khác: chưa thực hiện
*/
var data = [
	{
		hinh_anh: "./images/AIR.png",
		ten: "AIR",
		dich_thuat: 5,
		bien_tap: 0,
		ki_thuat: 50,
		mi_thuat: 0,
		trang_thai: 1,
		cap_nhat_lan_cuoi: "4/2023",
	},
	{
		hinh_anh: "./images/Clannad_game_cover.jpg",
		ten: "CLANNAD",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch: "https://vnkeyfc.com/clannad/",
		cap_nhat_lan_cuoi: "6/10/2021",
	},
	{
		hinh_anh: "./images/clannad_hikarisaka.webp",
		ten: "CLANNAD — Trên ngọn đồi có ánh sáng chở che",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch:
			"https://vnkeyfc.com/resource/patch/clannad-ngoai-truyen-viet-hoa/",
		cap_nhat_lan_cuoi: "25/12/2021",
	},
	{
		hinh_anh: "./images/tomoyo.webp",
		ten: "Tomoyo After",
		dich_thuat: 100,
		bien_tap: 0,
		ki_thuat: 50,
		mi_thuat: 20,
		trang_thai: 2,
		cap_nhat_lan_cuoi: "4/2023",
	},
	{
		hinh_anh: "./images/Little_Busters.jpg",
		ten: "Little Busters!",
		dich_thuat: 8,
		bien_tap: 0,
		ki_thuat: 70,
		mi_thuat: 0,
		trang_thai: 1,
		cap_nhat_lan_cuoi: "7/2024",
	},
	{
		hinh_anh: "./images/Rewrite.jpg",
		ten: "Rewrite",
		dich_thuat: 100,
		bien_tap: 0,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch: "https://vnkeyfc.com/resource/patch/rewrite-viet-hoa/",
		cap_nhat_lan_cuoi: "28/4/2016",
	},
	{
		hinh_anh: "./images/Rewrite (1).jpg",
		ten: "Rewrite+",
		dich_thuat: 80,
		bien_tap: 0,
		ki_thuat: 90,
		mi_thuat: 90,
		trang_thai: 2,
		cap_nhat_lan_cuoi: "15/7/2023",
	},
	{
		hinh_anh: "./images/Angel_Beats.jpg",
		ten: "Angel Beats! 1st Beat",
		dich_thuat: 80,
		bien_tap: 10,
		ki_thuat: 80,
		mi_thuat: 10,
		trang_thai: 2,
		cap_nhat_lan_cuoi: "4/2023",
	},
	{
		hinh_anh: "./images/Harmonia.jpg",
		ten: "Harmonia",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch:
			"https://vnkeyfc.com/resource/patch/harmonia-viet-hoa/",
		cap_nhat_lan_cuoi: "23/7/2024",
	},
	{
		hinh_anh: "./images/planetarian_snow_globe.png",
		ten: "planetarian — Quả cầu tuyết",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch:
			"https://vnkeyfc.com/resource/patch/planetarian-qua-cau-tuyet-viet-hoa/",
		cap_nhat_lan_cuoi: "24/12/2022",
	},
	{
		hinh_anh: "./images/loopers.jpg",
		ten: "LOOPERS (bản Steam)",
		dich_thuat: 0,
		bien_tap: 0,
		ki_thuat: 30,
		mi_thuat: 0,
		trang_thai: 4,
		cap_nhat_lan_cuoi: "12/2023",
	},
	{
		hinh_anh: "./images/Lunaria.png",
		ten: "LUNARiA",
		dich_thuat: 100,
		bien_tap: 0,
		ki_thuat: 50,
		mi_thuat: 0,
		trang_thai: 1,
		cap_nhat_lan_cuoi: "10/2023",
	},
	{
		hinh_anh: "./images/Stella.png",
		ten: "Stella Mạt Thế",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch:
			"https://vnkeyfc.com/resource/patch/stella-of-the-end-viet-hoa/",
		cap_nhat_lan_cuoi: "27/10/2023",
	},
	{
		hinh_anh: "./images/primadoll.png",
		ten: "Prima Doll Episode 1",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch:
			"https://vnkeyfc.com/resource/patch/prima-doll-ep-1-viet-hoa/",
		cap_nhat_lan_cuoi: "9/2/2024",
	},
	{
		hinh_anh: "./images/hitonatu_tw.png",
		ten: "Giấc mơ mùa hạ",
		dich_thuat: 100,
		bien_tap: 100,
		ki_thuat: 100,
		mi_thuat: 100,
		trang_thai: 0,
		link_patch: "https://vnkeyfc.com/hitonatsu/",
		cap_nhat_lan_cuoi: "15/9/2019",
	},
];

// thông tin dự án dịch thuật visual novel thuộc Key do đối tác thực hiện
var otherData = [
	{
		hinh_anh: "./images/Planetarian.jpg",
		ten: "planetarian HD Edition",
		nhom: "Sonako-Hako, Hoshi Visual Novel",
		trang_thai: 0,
		link_patch: "http://www.hoshivsub.com/2018/08/planetarian-hd-edition.html",
	},
	{
		hinh_anh: "./images/SummerPocket.jpg",
		ten: "Summer Pockets",
		nhom: "Hoshi Visual Novel",
		trang_thai: 0,
		link_patch: "http://www.hoshivsub.com/2018/12/summer-pockets.html",
	},
	{
		hinh_anh: "./images/SPRB.jpg",
		ten: "Summer Pockets Reflection Blue",
		nhom: "Hoshi Visual Novel",
		trang_thai: 1,
	},
];
