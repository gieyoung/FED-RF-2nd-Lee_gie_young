// 보그 PJ 메인 JS - main.js

// 메인페이지 전체 레이아웃 로딩 컴포넌트

// 상단영역 불러오기
import TopArea from "./components/TopArea";
// 메인영역 불러오기
import MainArea from "./components/MainArea";
// 하단영역 불러오기
import FooterArea from "./components/FooterArea";

function Layout() {
  return (
    <React.Fragment>
      {/* //  상단영역 컴포넌트 */}
      <TopArea />

      {/* // 메인영역 */}
      <MainArea />

      {/* // 하단영역 컴포넌트 */}
      <FooterArea />
    </React.Fragment>
  );
} //////////Layout컴포넌트//////////

// 상단영역만 넣어보기
ReactDOM.render(<Layout/>, document.querySelector("#root"));
