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
            <button className="btn btn-success btn-sm rounded-lg grow">
              <a href={link_patch}>Đã hoàn thành</a>
            </button>
          ),
          [TrangThai.Dang_thuc_hien]: (
            <button className="btn btn-info btn-sm rounded-lg grow no-animation cursor-default">
              Đang thực hiện
            </button>
          ),
          [TrangThai.Tam_dung]: (
            <button className="btn btn-warning btn-sm rounded-lg grow no-animation cursor-default">
              Tạm dừng
            </button>
          ),
          [TrangThai.Hoan_vo_thoi_han]: (
            <button className="btn btn-error btn-sm rounded-lg grow no-animation cursor-default">
              Hoãn vô thời hạn
            </button>
          ),
          [TrangThai.Chua_thuc_hien]: (
            <button className="btn btn-neutral btn-sm rounded-lg grow no-animation cursor-default">
              Chưa thực hiện
            </button>
          ),
        }[trangThai]
      }
    </>
  );
}
