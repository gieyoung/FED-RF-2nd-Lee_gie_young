// [vans신발 데이터]
const guData = [
  {
      "idx": "1",
      "gname": "반스어얼리",
      "category": "woman",
      "gprice": "48000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "캄보디아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN006911000"
  },
  {
      "idx": "2",
      "gname": "반스스타일",
      "category": "woman",
      "gprice": "43000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "캄보디아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN007951000"
  },
  {
      "idx": "3",
      "gname": "반스뉴진스",
      "category": "man",
      "gprice": "55000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "러시아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN009931000"
  },
  {
      "idx": "4",
      "gname": "반스뉴진스",
      "category": "kids",
      "gprice": "76000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "중국",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN001481000"
  },
  {
      "idx": "5",
      "gname": "반스뉴진스",
      "category": "woman",
      "gprice": "55000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "일본",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN002491000"
  },
  {
      "idx": "6",
      "gname": "반스스타일",
      "category": "kids",
      "gprice": "43000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "중국",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN003851000"
  },
  {
      "idx": "7",
      "gname": "반스뉴진스",
      "category": "woman",
      "gprice": "66000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "중국",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN003311000"
  },
  {
      "idx": "8",
      "gname": "반스어얼리",
      "category": "man",
      "gprice": "55000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "중국",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN002801000"
  },
  {
      "idx": "9",
      "gname": "반스뉴진스",
      "category": "man",
      "gprice": "55000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "러시아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN006931000"
  },
  {
      "idx": "10",
      "gname": "반스뉴진스",
      "category": "kids",
      "gprice": "48000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "베트남",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN002111000"
  },
  {
      "idx": "11",
      "gname": "반스어얼리",
      "category": "woman",
      "gprice": "43000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "캄보디아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN007561000"
  },
  {
      "idx": "12",
      "gname": "반스어얼리",
      "category": "man",
      "gprice": "66000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "베트남",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN003491000"
  },
  {
      "idx": "13",
      "gname": "반스캐쥬얼",
      "category": "woman",
      "gprice": "66000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "캄보디아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN001231000"
  },
  {
      "idx": "14",
      "gname": "반스뉴진스",
      "category": "woman",
      "gprice": "48000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "중국",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN001801000"
  },
  {
      "idx": "15",
      "gname": "반스뉴진스",
      "category": "man",
      "gprice": "55000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "일본",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN003671000"
  },
  {
      "idx": "16",
      "gname": "반스스타일",
      "category": "woman",
      "gprice": "43000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "일본",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN006051000"
  },
  {
      "idx": "17",
      "gname": "반스어얼리",
      "category": "kids",
      "gprice": "66000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "캄보디아",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN005571000"
  },
  {
      "idx": "18",
      "gname": "반스뉴진스",
      "category": "kids",
      "gprice": "43000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "중국",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN004341000"
  },
  {
      "idx": "19",
      "gname": "반스뉴진스",
      "category": "kids",
      "gprice": "43000",
      "소재": "천연가죽(소), 면100%",
      "색상": "BLACK/TRUE WHITE",
      "치수": "상단표기",
      "제조자/수입자": "(유)브이에프코리아",
      "제조국": "베트남",
      "제조연월": "상품라벨에서 확인",
      "A/S 책임자와 전화번호": "(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882",
      "Model": "VN001601000"
  }
]









// 내보내기
export default guData;