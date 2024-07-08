import React from "react";

// 카트 리스트 CSS
import "../../css/cart_list.scss";

function CartList(props) {
  return (
    <section id="cartlist" style={{right:"0px"}}>
      <a href="#" class="cbtn cbtn2">
        <span>닫기버튼</span>
      </a>
      <table>
        <caption>
          <h1> 카트 리스트</h1>
        </caption>
        <tbody>
          <tr>
            <th>상품</th>
            <th>번호</th>
            <th>상품명</th>
            <th>상품코드</th>
            <th>단가</th>
            <th>수량</th>
            <th>합계</th>
            <th>삭제</th>
          </tr>
          <tr>
            <td>
              <img src="images/goods/women/m8.png" alt="item" />
            </td>
            <td>6</td>
            <td>[여성]베이직 솔리드 래쉬가드</td>
            <td>DMSW15731-BK </td>
            <td>49,000원</td>
            <td class="cnt-part">
              <div>
                <span>
                  <input type="text" class="item-cnt" readOnly="" value="1" />
                  <button class="btn-insert" data-idx="20">
                    반영
                  </button>
                  <b class="btn-cnt">
                    <img src="./images/cnt_up.png" alt="증가" />
                    <img src="./images/cnt_down.png" alt="감소" />
                  </b>
                </span>
              </div>
            </td>
            <td>49,000원</td>
            <td>
              <button class="cfn" data-idx="20">
                ×
              </button>
            </td>
          </tr>
          <tr data-v="[object Object]">
            <td>
              <img src="images/goods/style/m6.png" alt="item" />
            </td>
            <td>7</td>
            <td>[스타일]블럭형 풀집업 래쉬가드</td>
            <td>DMSW21731-GR </td>
            <td>99,000원</td>
            <td class="cnt-part">
              <div>
                <span>
                  <input type="text" class="item-cnt" readOnly="" value="1" />
                  <button class="btn-insert" data-idx="26">
                    반영
                  </button>
                  <b class="btn-cnt">
                    <img src="./images/cnt_up.png" alt="증가" />
                    <img src="./images/cnt_down.png" alt="감소" />
                  </b>
                </span>
              </div>
            </td>
            <td>99,000원</td>
            <td>
              <button class="cfn" data-idx="26">
                ×
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="6">총합계 :</td>
            <td>662,000원</td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8" class="paging">
              <a href="#">1</a> | <b>2</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default CartList;
