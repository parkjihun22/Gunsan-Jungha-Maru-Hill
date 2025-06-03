import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide2/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>둔산 해링턴 플레이스 - 호수배치도</title>
        <meta
          name="description"
          content="호수 배치도 페이지는 각 세대의 위치와 평면도를 제공합니다. 고객들이 원하는 호수를 찾고 세부적인 배치 정보를 통해 자신의 집을 상상할 수 있게 돕습니다. 각 호수의 특징과 장점을 살펴보며 선택의 폭을 넓힐 수 있습니다."
        />
        <meta
          name="keywords"
          content="둔산 해링턴 플레이스, 둔산 해링턴, 둔산 해링턴모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.cssdesign.kr/ComplexGuide/detailintro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="둔산 해링턴 플레이스 - 호수배치도"
        />
        <meta
          property="og:description"
          content="호수 배치도 페이지는 각 세대의 위치와 평면도를 제공합니다. 고객들이 원하는 호수를 찾고 세부적인 배치 정보를 통해 자신의 집을 상상할 수 있게 돕습니다. 각 호수의 특징과 장점을 살펴보며 선택의 폭을 넓힐 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://www.cssdesign.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.cssdesign.kr/ComplexGuide/detailintro"
        />
        <meta property="og:site_name" content="둔산 해링턴 플레이스" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="둔산 해링턴 플레이스 - 호수배치도"
        />
        <meta
          name="twitter:description"
          content="호수 배치도 페이지는 각 세대의 위치와 평면도를 제공합니다. 고객들이 원하는 호수를 찾고 세부적인 배치 정보를 통해 자신의 집을 상상할 수 있게 돕습니다. 각 호수의 특징과 장점을 살펴보며 선택의 폭을 넓힐 수 있습니다."
        />
        <meta
          name="twitter:image"
          content="https://www.cssdesign.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.cssdesign.kr/ComplexGuide/detailintro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
					{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "둔산 해링턴 플레이스 - 호수배치도",
			"description": "호수 배치도 페이지는 각 세대의 위치와 평면도를 제공합니다. 고객들이 원하는 호수를 찾고 세부적인 배치 정보를 통해 자신의 집을 상상할 수 있게 돕습니다. 각 호수의 특징과 장점을 살펴보며 선택의 폭을 넓힐 수 있습니다.",
			"url": "https://www.cssdesign.kr/ComplexGuide/detailintro"
					}
					`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
      둔산 해링턴 플레이스 - 호수배치도
      </h1>
      <p className={styles.screenReaderOnly}>
        호수 배치도 페이지는 각 세대의 위치와 평면도를 제공합니다. 고객들이
        원하는 호수를 찾고 세부적인 배치 정보를 통해 자신의 집을 상상할 수 있게
        돕습니다. 각 호수의 특징과 장점을 살펴보며 선택의 폭을 넓힐 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>대전의 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="둔산 해링턴 호수배치도-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 호수배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ComplexGuide1;
