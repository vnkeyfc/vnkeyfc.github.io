import { TrangThai } from "@/app/data";
import React from "react";

export default function ProjectStatus({
  trangThai,
  link_patch,
}: {
  trangThai: TrangThai;
  link_patch?: string;
}) {
  return (
    <>
      {
        {
          [TrangThai.Hoan_thanh]: (
            <h3 className="text-lg text-success font-bold">
              <a href={link_patch}>Đã hoàn thành</a>
            </h3>
          ),
          [TrangThai.Dang_thuc_hien]: (
            <h3 className=" text-lg text-info font-bold">Đang thực hiện</h3>
          ),
          [TrangThai.Tam_dung]: (
            <h3 className=" text-lg text-warning font-bold">Tạm dừng</h3>
          ),
          [TrangThai.Hoan_vo_thoi_han]: (
            <h3 className=" text-lg text-error font-bold">Hoãn vô thời hạn</h3>
          ),
          [TrangThai.Chua_thuc_hien]: (
            <h3 className=" text-lg text-neutral font-bold">Chưa thực hiện</h3>
          ),
        }[trangThai]
      }
    </>
  );
}
