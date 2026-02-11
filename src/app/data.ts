/*
  hình ảnh: bỏ hình ảnh vào thư mục /public/cover, rồi nhúng như bên dưới
*/

export enum TrangThai {
  Hoan_thanh = 0, // Đã hoàn thành
  Dang_thuc_hien = 1, // Đang thực hiện
  Tam_dung = 2, // Tạm dừng
  Hoan_vo_thoi_han = 3, // Hoãn vô thời hạn
  Chua_thuc_hien = 4, // Chưa thực hiện
}

export interface DuAn {
  hinh_anh: string;
  ten: string;
  trang_thai: TrangThai;
  link_patch?: string | undefined;
  vndb: string;
}

export type DuAnChinh = DuAn & {
  ten: string;
  dich_thuat: number;
  bien_tap: number;
  ki_thuat: number;
  mi_thuat: number;
  cap_nhat_lan_cuoi: string;
};

export type DuAnDoiTac = DuAn & {
  nhom: string;
};

export const data: DuAnChinh[] = [
  {
    hinh_anh: "/cover/AIR.png",
    ten: "AIR",
    dich_thuat: 100,
    bien_tap: 0,
    ki_thuat: 50,
    mi_thuat: 0,
    trang_thai: TrangThai.Dang_thuc_hien,
    cap_nhat_lan_cuoi: "11/2/2026",
    vndb: "https://vndb.org/v36",
  },
  {
    hinh_anh: "/cover/Clannad_game_cover.jpg",
    ten: "CLANNAD",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "https://vnkeyfc.com/clannad/",
    cap_nhat_lan_cuoi: "6/10/2021",
    vndb: "https://vndb.org/v4",
  },
  {
    hinh_anh: "/cover/clannad_hikarisaka.webp",
    ten: "CLANNAD — Trên ngọn đồi có ánh sáng chở che",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch:
      "https://vnkeyfc.com/resource/patch/clannad-ngoai-truyen-viet-hoa/",
    cap_nhat_lan_cuoi: "25/12/2021",
    vndb: "https://vndb.org/v4060",
  },
  {
    hinh_anh: "/cover/tomoyo.webp",
    ten: "Tomoyo After",
    dich_thuat: 100,
    bien_tap: 0,
    ki_thuat: 50,
    mi_thuat: 20,
    trang_thai: TrangThai.Tam_dung,
    cap_nhat_lan_cuoi: "4/2023",
    vndb: "https://vndb.org/v12",
  },
  {
    hinh_anh: "/cover/Little_Busters.jpg",
    ten: "Little Busters!",
    dich_thuat: 8,
    bien_tap: 0,
    ki_thuat: 70,
    mi_thuat: 0,
    trang_thai: TrangThai.Dang_thuc_hien,
    cap_nhat_lan_cuoi: "7/2024",
    vndb: "https://vndb.org/v5",
  },
  {
    hinh_anh: "/cover/Rewrite.jpg",
    ten: "Rewrite",
    dich_thuat: 100,
    bien_tap: 0,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "https://vnkeyfc.com/resource/patch/rewrite-viet-hoa/",
    cap_nhat_lan_cuoi: "28/4/2016",
    vndb: "https://vndb.org/v751",
  },
  {
    hinh_anh: "/cover/Rewrite (1).jpg",
    ten: "Rewrite+",
    dich_thuat: 80,
    bien_tap: 0,
    ki_thuat: 90,
    mi_thuat: 90,
    trang_thai: TrangThai.Tam_dung,
    cap_nhat_lan_cuoi: "15/7/2023",
    vndb: "https://vndb.org/r85393",
  },
  {
    hinh_anh: "/cover/Angel_Beats.jpg",
    ten: "Angel Beats! 1st Beat",
    dich_thuat: 80,
    bien_tap: 10,
    ki_thuat: 80,
    mi_thuat: 10,
    trang_thai: TrangThai.Tam_dung,
    cap_nhat_lan_cuoi: "4/2023",
    vndb: "https://vndb.org/v13774",
  },
  {
    hinh_anh: "/cover/Harmonia.jpg",
    ten: "Harmonia",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "https://vnkeyfc.com/resource/patch/harmonia-viet-hoa/",
    cap_nhat_lan_cuoi: "23/7/2024",
    vndb: "https://vndb.org/v16510",
  },
  {
    hinh_anh: "/cover/planetarian_snow_globe.png",
    ten: "planetarian — Quả cầu tuyết",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch:
      "https://vnkeyfc.com/resource/patch/planetarian-qua-cau-tuyet-viet-hoa/",
    cap_nhat_lan_cuoi: "24/12/2022",
    vndb: "https://vndb.org/v27747",
  },
  {
    hinh_anh: "/cover/loopers.jpg",
    ten: "LOOPERS (bản Steam)",
    dich_thuat: 0,
    bien_tap: 0,
    ki_thuat: 30,
    mi_thuat: 0,
    trang_thai: TrangThai.Chua_thuc_hien,
    cap_nhat_lan_cuoi: "12/2023",
    vndb: "https://vndb.org/v29445",
  },
  {
    hinh_anh: "/cover/Lunaria.png",
    ten: "LUNARiA",
    dich_thuat: 100,
    bien_tap: 0,
    ki_thuat: 50,
    mi_thuat: 0,
    trang_thai: TrangThai.Dang_thuc_hien,
    cap_nhat_lan_cuoi: "10/2023",
    vndb: "https://vndb.org/v29444",
  },
  {
    hinh_anh: "/cover/Stella.png",
    ten: "Stella Mạt Thế",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch:
      "https://vnkeyfc.com/resource/patch/stella-of-the-end-viet-hoa/",
    cap_nhat_lan_cuoi: "27/10/2023",
    vndb: "https://vndb.org/v29443",
  },
  {
    hinh_anh: "/cover/primadoll.png",
    ten: "Prima Doll Episode 1",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "https://vnkeyfc.com/resource/patch/prima-doll-ep-1-viet-hoa/",
    cap_nhat_lan_cuoi: "9/2/2024",
    vndb: "https://vndb.org/v29761",
  },
  {
    hinh_anh: "/cover/ONE.Remake.jpg",
    ten: "ONE. Remake",
    dich_thuat: 10,
    bien_tap: 0,
    ki_thuat: 50,
    mi_thuat: 0,
    trang_thai: TrangThai.Dang_thuc_hien,
    cap_nhat_lan_cuoi: "11/2/2026",
    vndb: "https://vndb.org/v51",
  },
  {
    hinh_anh: "/cover/hitonatu_tw.png",
    ten: "Giấc mơ mùa hạ",
    dich_thuat: 100,
    bien_tap: 100,
    ki_thuat: 100,
    mi_thuat: 100,
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "https://vnkeyfc.com/hitonatsu/",
    cap_nhat_lan_cuoi: "15/9/2019",
    vndb: "https://vndb.org/v61",
  },
];

// thông tin dự án dịch thuật visual novel thuộc Key do đối tác thực hiện
export const otherData: DuAnDoiTac[] = [
  {
    hinh_anh: "/cover/Planetarian.jpg",
    ten: "planetarian HD Edition",
    nhom: "Sonako-Hako, Hoshi Visual Novel",
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "http://www.hoshivsub.com/2018/08/planetarian-hd-edition.html",
    vndb: "https://vndb.org/v34",
  },
  {
    hinh_anh: "/cover/SummerPocket.jpg",
    ten: "Summer Pockets",
    nhom: "Hoshi Visual Novel",
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "http://www.hoshivsub.com/2018/12/summer-pockets.html",
    vndb: "https://vndb.org/v20424",
  },
  {
    hinh_anh: "/cover/SPRB.jpg",
    ten: "Summer Pockets Reflection Blue",
    nhom: "Hoshi Visual Novel, Cab Fansub",
    trang_thai: TrangThai.Hoan_thanh,
    link_patch: "http://www.hoshivsub.com/2018/12/summer-pockets.html",
    vndb: "https://vndb.org/r78064",
  },
];

export const link_discord = "http://vnkeyfc.com/discord";
