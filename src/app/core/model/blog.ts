export interface Blog {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
}

export interface BlogDetail {
  lichChieu: ShowTimes[];
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
}

export interface ShowTimes {
  thongTinRap: CinemaInfo;
  maLichChieu: number;
  maRap: number;
  maPhim: number;
  tenPhim: string;
  ngayChieuGioChieu: Date;
  giaVe: number;
  thoiLuong: number;
}


export interface CinemaInfo {
  maRap: number;
  tenRap: string;
  maCumRap: string;
  tenCumRap: string;
  maHeThongRap: string;
  tenHeThongRap: string;
}
